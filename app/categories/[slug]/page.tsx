import { notFound } from "next/navigation";
import { SearchExplorer } from "@/components/search-explorer";
import { categories, toolsByCategory } from "@/lib/catalog";
import { slugify } from "@/lib/utils";
export async function generateStaticParams(){ return categories.map(c=>({slug: slugify(c)})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const c=categories.find(x=>slugify(x)===slug); return { title: c || "Category" }; }
export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const category=categories.find(c=>slugify(c)===slug); if(!category) notFound(); return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">{category}</h1><p className="mb-8 mt-2 text-muted-foreground">Compare the best {category.toLowerCase()} for different professions and budgets.</p><SearchExplorer tools={toolsByCategory(category)}/></section> }
