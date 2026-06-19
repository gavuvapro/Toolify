import type { MetadataRoute } from "next";
import { categories } from "@/lib/catalog";
import { tools } from "@/lib/data/tools";
import { stacks } from "@/lib/data/stacks";
import { siteUrl, slugify } from "@/lib/utils";
export default function sitemap(): MetadataRoute.Sitemap { const staticPages=["","/categories","/compare","/stacks","/top-free","/alternatives","/favorites","/blog","/about","/donate","/contribute"]; return [...staticPages.map(p=>({url:siteUrl(p)})), ...tools.map(t=>({url:siteUrl(`/tools/${t.slug}`)})), ...categories.map(c=>({url:siteUrl(`/categories/${slugify(c)}`)})), ...stacks.map(s=>({url:siteUrl(`/stacks/${s.slug}`)}))]; }
