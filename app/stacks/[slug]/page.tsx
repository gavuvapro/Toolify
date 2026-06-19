import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { getTool } from "@/lib/catalog";
import { stacks } from "@/lib/data/stacks";
export async function generateStaticParams(){ return stacks.map(s=>({slug:s.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const s=stacks.find(x=>x.slug===slug); return { title: s?.name || "Stack" }; }
export default async function StackPage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const stack=stacks.find(s=>s.slug===slug); if(!stack) notFound(); return <section className="mx-auto max-w-5xl px-4 py-14"><p className="text-primary">{stack.profession}</p><h1 className="text-5xl font-black">{stack.name}</h1><p className="mt-3 text-muted-foreground">{stack.description}</p><div className="mt-8 grid gap-4 md:grid-cols-2">{stack.items.map(item=>{ const tool=getTool(item.tool.toLowerCase().replace(/[^a-z0-9]+/g,"-")); return <Card key={item.role}><p className="text-sm text-muted-foreground">{item.role}</p><h2 className="mt-1 text-2xl font-bold">{item.tool}</h2>{tool ? <Link href={`/tools/${tool.slug}`} className="mt-4 inline-block text-sm font-medium text-primary">View details</Link> : <p className="mt-4 text-sm text-muted-foreground">Add this tool via contribution data.</p>}</Card>})}</div></section> }
