import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function slugify(input: string) { return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
export function siteUrl(path = "") { return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${path}`; }
export const appName = process.env.NEXT_PUBLIC_APP_NAME || "Tool Empir";
