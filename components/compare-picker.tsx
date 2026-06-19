"use client";
import { useMemo, useState } from "react";
import type { Tool } from "@/lib/types";
import { Card } from "@/components/ui/card";
export function ComparePicker({ tools }: { tools: Tool[] }) {
  const [a, setA] = useState("notion");
  const [b, setB] = useState("obsidian");
  const selected = useMemo(() => [tools.find(t => t.slug === a), tools.find(t => t.slug === b)].filter(Boolean) as Tool[], [a, b, tools]);
  const rows = ["pricing", "budgetRange", "freePlan", "easeOfUse", "integrations", "aiCapabilities", "platforms", "teamSupport"] as const;

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2">
        <select value={a} onChange={e => setA(e.target.value)} className="rounded-2xl border bg-background p-3 transition-colors focus:ring-2 focus:ring-primary">
          {tools.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}
        </select>
        <select value={b} onChange={e => setB(e.target.value)} className="rounded-2xl border bg-background p-3 transition-colors focus:ring-2 focus:ring-primary">
          {tools.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}
        </select>
      </div>
      <Card className="overflow-x-auto p-0">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-4 font-semibold">Feature</th>
              {selected.map(t => <th key={t.slug} className="p-4 text-lg font-bold">{t.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row} className="border-t transition-colors hover:bg-muted/30">
                <td className="p-4 font-medium capitalize">{row.replace(/([A-Z])/g, " $1")}</td>
                {selected.map(t => (
                  <td key={t.slug + row} className="p-4">
                    {Array.isArray(t[row]) ? (t[row] as string[]).join(", ") : typeof t[row] === "boolean" ? (t[row] ? "Yes" : "No") : t[row]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}