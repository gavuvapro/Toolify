import Link from "next/link";
import { Card } from "@/components/ui/card";
import { categories } from "@/lib/catalog";
import { tools } from "@/lib/data/tools";
import { slugify } from "@/lib/utils";
export const metadata = { title: "Categories" };
export default function CategoriesPage(){ return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Categories</h1><p className="mt-2 text-muted-foreground">Browse curated tools by major work and life categories.</p><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{categories.map(c=><Link key={c} href={`/categories/${slugify(c)}`}><Card className="hover:shadow-lg"><h2 className="text-xl font-bold">{c}</h2><p className="mt-2 text-sm text-muted-foreground">{tools.filter(t=>t.category===c).length} tools</p></Card></Link>)}</div></section> }
