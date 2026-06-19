import Link from "next/link";
import { Card } from "@/components/ui/card";
import { stacks } from "@/lib/data/stacks";
export const metadata = { title: "Profession stacks" };
export default function StacksPage(){ return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Profession stacks</h1><p className="mt-2 text-muted-foreground">Curated combinations of tools for complete workflows.</p><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{stacks.map(s=><Link key={s.slug} href={`/stacks/${s.slug}`}><Card className="h-full hover:shadow-lg"><p className="text-sm text-primary">{s.profession}</p><h2 className="mt-1 text-xl font-bold">{s.name}</h2><p className="mt-2 text-sm text-muted-foreground">{s.description}</p><ul className="mt-4 space-y-1 text-sm">{s.items.slice(0,4).map(i=><li key={i.role}><span className="text-muted-foreground">{i.role}:</span> {i.tool}</li>)}</ul></Card></Link>)}</div></section> }
