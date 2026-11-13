import { z } from "zod";

// Shared by the form (client) and the server function: one source of truth for what
// counts as a usable quote request.
export const quoteRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please tell us your name.")
    .max(80, "Your name is too long."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a phone number we can call you back on.")
    .max(20, "That phone number looks too long.")
    .regex(/^[0-9+\-\s()]+$/, "Please use digits, spaces, + or - only."),
  email: z
    .union([
      z.literal(""),
      z
        .string()
        .trim()
        .max(120, "That email address is too long.")
        .email("That email address doesn't look right."),
    ])
    .optional(),
  service: z
    .string()
    .trim()
    .min(1, "Please choose what you need.")
    .max(80, "That choice is too long."),
  details: z
    .string()
    .trim()
    .max(1500, "Please keep your message under 1500 characters.")
    .optional(),
  // Hidden bot trap: stays empty for people, filled by scrapers.
  website: z.string().optional(),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
