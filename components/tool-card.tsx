import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import type { Tool } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FavoriteButton } from "@/components/favorite-button";
export function ToolCard({ tool }: { tool: Tool }) {
  return <Card className="group flex h-full flex-col gap-4 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between gap-3"><Link href={`/tools/${tool.slug}`} className="min-w-0"><h3 className="truncate text-lg font-bold group-hover:text-primary">{tool.name}</h3><p className="text-sm text-muted-foreground">{tool.category} · {tool.subCategory}</p></Link><FavoriteButton slug={tool.slug} name={tool.name} /></div><p className="line-clamp-2 text-sm text-muted-foreground">Best for {tool.bestFor.join(", ")}.</p><div className="flex flex-wrap gap-2"><Badge>{tool.pricing}</Badge><Badge>{tool.budgetRange}</Badge>{tool.freePlan && <Badge className="border-emerald-200 text-emerald-700">Free plan</Badge>}</div><div className="mt-auto flex items-center justify-between text-sm"><span className="flex items-center gap-1 font-medium"><Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />{tool.rating}</span><Link href={tool.website} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary">Website <ExternalLink className="h-3 w-3" /></Link></div></Card>;
}
