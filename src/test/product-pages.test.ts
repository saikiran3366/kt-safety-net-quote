import { describe, expect, it } from "vitest";
import { products } from "@/lib/products";

describe("product pages", () => {
  it("includes all nine products requested from the provided service examples", () => {
    expect(products.map((product) => product.slug)).toEqual([
      "balcony-safety-nets",
      "childrens-safety-nets",
      "bird-protection-nets",
      "cricket-practice-nets",
      "duct-area-nets",
      "invisible-grills",
      "coconut-safety-nets",
      "bamboo-blinds",
      "glass-safety-nets",
    ]);
  });

  it("uses a distinct product image for every catalog item", () => {
    expect(new Set(products.map((product) => product.image)).size).toBe(9);
  });
});