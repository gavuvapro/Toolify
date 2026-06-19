import sanitizeHtml from "sanitize-html";
import { z } from "zod";
export const contributionSchema = z.object({
  name: z.string().min(2).max(80), website: z.string().url(), category: z.string().min(2).max(80),
  pricing: z.enum(["Free", "Freemium", "Paid", "Subscription", "Lifetime Deal"]),
  reason: z.string().min(20).max(2000)
});
export function clean(input: string) { return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim(); }
