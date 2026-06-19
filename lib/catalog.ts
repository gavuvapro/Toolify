import { tools } from "@/lib/data/tools";
export const categories = Array.from(new Set(tools.map((t) => t.category))).sort();
export const professions = Array.from(new Set(tools.flatMap((t) => t.bestFor))).sort();
export const platforms = Array.from(new Set(tools.flatMap((t) => t.platforms))).sort();
export const budgetRanges = ["$0", "Under $10/month", "Under $25/month", "Under $50/month", "Enterprise"] as const;
export function getTool(slug: string) { return tools.find((t) => t.slug === slug); }
export function toolsByCategory(category: string) { return tools.filter((t) => t.category.toLowerCase() === category.toLowerCase()); }
export function getAlternatives(slug: string) { const tool = getTool(slug); return tool ? tools.filter((t) => tool.alternatives.includes(t.name)) : []; }
