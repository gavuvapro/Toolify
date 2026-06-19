"use client";
import { useEffect, useState } from "react";
import type { Tool } from "@/lib/types";
import { ToolCard } from "@/components/tool-card";
export function FavoritesView({ tools }: { tools: Tool[] }) { const [slugs,setSlugs]=useState<string[]>([]); useEffect(()=>{ const load=()=>setSlugs(JSON.parse(localStorage.getItem("tool-empir:favorites")||"[]")); load(); window.addEventListener("tool-empir:favorites",load); return ()=>window.removeEventListener("tool-empir:favorites",load);},[]); const favs=tools.filter(t=>slugs.includes(t.slug)); return favs.length ? <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{favs.map(t=><ToolCard key={t.slug} tool={t}/>)}</div> : <div className="rounded-3xl border p-10 text-center text-muted-foreground">No favorites yet. Save tools with the heart button.</div>; }
