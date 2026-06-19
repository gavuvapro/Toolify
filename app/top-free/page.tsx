import { SearchExplorer } from "@/components/search-explorer";
import { tools } from "@/lib/data/tools";
export const metadata={title:"Top free tools"};
export default function TopFreePage(){ const free=tools.filter(t=>t.freePlan).sort((a,b)=>b.rating-a.rating); return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Top free and freemium tools</h1><p className="mb-8 mt-2 text-muted-foreground">Great tools with free plans or no-cost tiers.</p><SearchExplorer tools={free}/></section> }
