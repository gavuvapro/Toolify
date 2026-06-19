"use client";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import type { Tool } from "@/lib/types";
import { ToolCard } from "@/components/tool-card";
import { budgetRanges, categories, platforms, professions } from "@/lib/catalog";
import { Card } from "@/components/ui/card";

export function SearchExplorer({ tools }: { tools: Tool[] }) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [profession, setProfession] = useState("All");
  const [budget, setBudget] = useState("All");
  const [platform, setPlatform] = useState("All");
  const [free, setFree] = useState(false);
  const [ai, setAi] = useState(false);

  const fuse = useMemo(() => new Fuse(tools, { keys: ["name", "category", "subCategory", "bestFor", "tags", "advantages"], threshold: 0.34, ignoreLocation: true }), [tools]);

  const results = useMemo(() => {
    const base = q.trim() ? fuse.search(q).map(r => r.item) : tools;
    return base.filter(
      t =>
        (category === "All" || t.category === category) &&
        (profession === "All" || t.bestFor.includes(profession)) &&
        (budget === "All" || t.budgetRange === budget) &&
        (platform === "All" || t.platforms.includes(platform)) &&
        (!free || t.freePlan) &&
        (!ai || t.aiCapabilities !== "None")
    );
  }, [q, category, profession, budget, platform, free, ai, fuse, tools]);

  const filters = [
    ["Category", category, setCategory, ["All", ...categories]],
    ["Profession", profession, setProfession, ["All", ...professions]],
    ["Budget", budget, setBudget, ["All", ...budgetRanges]],
    ["Platform", platform, setPlatform, ["All", ...platforms]]
  ] as const;

  return (
    <section className="space-y-6">
      <Card className="p-5 shadow-sm">
        <input
          aria-label="Search tools"
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search tools, tags, professions, use cases..."
          className="mb-4 w-full rounded-xl border bg-background px-4 py-3 text-base transition-colors focus:ring-2 focus:ring-primary"
        />
        <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6">
          {filters.map(([label, value, setter, opts]) => (
            <label key={label} className="text-sm font-medium">
              {label}
              <select value={value} onChange={e => setter(e.target.value)} className="mt-1 w-full rounded-xl border bg-background px-3 py-2 transition-colors focus:ring-2 focus:ring-primary">
                {opts.map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
          ))}
          <label className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors hover:bg-muted">
            <input type="checkbox" checked={free} onChange={e => setFree(e.target.checked)} /> Free plan
          </label>
          <label className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-colors hover:bg-muted">
            <input type="checkbox" checked={ai} onChange={e => setAi(e.target.checked)} /> AI features
          </label>
        </div>
      </Card>
      <p className="text-sm text-muted-foreground">
        Showing {results.length} of {tools.length} curated tools.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map(tool => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}