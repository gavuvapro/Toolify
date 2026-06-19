import { ToolCard } from "@/components/tool-card";
import { tools } from "@/lib/data/tools";
export const metadata={title:"Alternatives"};
export default function AlternativesPage(){ return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Find alternatives</h1><p className="mb-8 mt-2 text-muted-foreground">Browse tools and open each profile to see curated alternatives.</p><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{tools.slice(0,60).map(t=><ToolCard key={t.slug} tool={t}/>)}</div></section> }
