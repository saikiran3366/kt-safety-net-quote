import { describe, expect, it } from "vitest";

import { quoteRequestSchema } from "@/lib/quote-request-schema";

const complete = {
  name: "Ravi Kumar",
  phone: "7989625040",
  email: "",
  service: "Balcony safety nets",
  details: "Third floor, two balconies and a kitchen window.",
  website: "",
};

describe("Quote request rules", () => {
  it("accepts a complete request with the email left blank", () => {
    const result = quoteRequestSchema.safeParse(complete);
    expect(result.success).toBe(true);
  });

  it("rejects a name that is blank or only spaces", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, name: "   " }).success).toBe(false);
  });

  it("rejects a phone number with letters in it", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, phone: "call me later" }).success).toBe(false);
  });

  it("rejects a phone number shorter than 8 digits", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, phone: "79896" }).success).toBe(false);
  });

  it("rejects a malformed email but accepts a correct one", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, email: "not-an-email" }).success).toBe(false);
    expect(quoteRequestSchema.safeParse({ ...complete, email: "ravi@example.com" }).success).toBe(true);
  });

  it("rejects a request with no service chosen", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, service: "" }).success).toBe(false);
  });

  it("rejects a message longer than 1500 characters", () => {
    expect(quoteRequestSchema.safeParse({ ...complete, details: "a".repeat(1501) }).success).toBe(false);
  });
});
