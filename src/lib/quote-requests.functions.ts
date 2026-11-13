import { createServerFn } from "@tanstack/react-start";

import { quoteRequestSchema } from "./quote-request-schema";

export type QuoteRequestResult = { ok: true } | { ok: false; error: string };

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => quoteRequestSchema.parse(input))
  .handler(async ({ data }): Promise<QuoteRequestResult> => {
    // Bot trap filled in: pretend it worked, save nothing.
    if (data.website) return { ok: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      phone: data.phone,
      email: data.email ? data.email : null,
      service: data.service,
      details: data.details ? data.details : null,
    });

    if (error) {
      console.error("Quote request could not be saved:", error.message);
      return {
        ok: false,
        error: "We couldn't send your request just now. Please call us on 7989625040.",
      };
    }

    return { ok: true };
  });
