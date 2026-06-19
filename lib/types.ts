export type Pricing = "Free" | "Freemium" | "Paid" | "Subscription" | "Lifetime Deal";
export type BudgetRange = "$0" | "Under $10/month" | "Under $25/month" | "Under $50/month" | "Enterprise";
export type Tool = {
  name: string; slug: string; website: string; category: string; subCategory: string; pricing: Pricing; budgetRange: BudgetRange;
  freePlan: boolean; bestFor: string[]; advantages: string[]; disadvantages: string[]; alternatives: string[]; platforms: string[];
  rating: number; tags: string[]; featured: boolean; teamSupport: "Limited" | "Good" | "Excellent"; easeOfUse: "Easy" | "Moderate" | "Advanced";
  integrations: "Limited" | "Good" | "Excellent"; aiCapabilities: "None" | "Add-ons" | "Native";
};
export type StackItem = { role: string; tool: string };
export type ToolStack = { slug: string; name: string; profession: string; description: string; items: StackItem[] };
