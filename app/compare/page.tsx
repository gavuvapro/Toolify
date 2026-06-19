import { ComparePicker } from "@/components/compare-picker";
import { tools } from "@/lib/data/tools";
export const metadata = { title: "Compare tools" };
export default function ComparePage(){ return <section className="mx-auto max-w-7xl px-4 py-14"><h1 className="text-4xl font-bold">Compare tools side-by-side</h1><p className="mb-8 mt-2 text-muted-foreground">Compare price, free plan, ease of use, integrations, AI capabilities, platforms, and team support.</p><ComparePicker tools={tools}/></section> }
