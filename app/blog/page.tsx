import Link from "next/link";
import { Card } from "@/components/ui/card";
export const metadata={title:"Blog"};
const posts=[{slug:"how-to-choose-tools",title:"How to choose tools without adding complexity",date:"2026-06-18"},{slug:"building-professional-stacks",title:"Building professional stacks for repeatable workflows",date:"2026-06-18"}];
export default function BlogPage(){ return <section className="mx-auto max-w-4xl px-4 py-14"><h1 className="text-4xl font-bold">Blog</h1><div className="mt-8 space-y-4">{posts.map(p=><Link key={p.slug} href={`/blog/${p.slug}`}><Card><p className="text-sm text-muted-foreground">{p.date}</p><h2 className="mt-1 text-xl font-bold">{p.title}</h2></Card></Link>)}</div></section> }
