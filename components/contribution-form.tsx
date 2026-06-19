"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export function ContributionForm() {
  const [status, setStatus] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contributions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setStatus(data.message || (res.ok ? "Submitted" : "Error"));
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl border bg-card/80 backdrop-blur-xl p-6 shadow-sm">
      <input
        name="name"
        required
        placeholder="Tool name"
        className="w-full rounded-xl border bg-background px-4 py-3 transition-colors focus:ring-2 focus:ring-primary"
      />
      <input
        name="website"
        type="url"
        required
        placeholder="https://example.com"
        className="w-full rounded-xl border bg-background px-4 py-3 transition-colors focus:ring-2 focus:ring-primary"
      />
      <input
        name="category"
        required
        placeholder="Category"
        className="w-full rounded-xl border bg-background px-4 py-3 transition-colors focus:ring-2 focus:ring-primary"
      />
      <select name="pricing" className="w-full rounded-xl border bg-background px-4 py-3 transition-colors focus:ring-2 focus:ring-primary">
        <option value="">Pricing model</option>
        <option>Free</option>
        <option>Freemium</option>
        <option>Paid</option>
        <option>Subscription</option>
        <option>Lifetime Deal</option>
      </select>
      <textarea
        name="reason"
        required
        placeholder="Why should this tool be included?"
        className="min-h-32 w-full rounded-xl border bg-background px-4 py-3 transition-colors focus:ring-2 focus:ring-primary"
      />
      <Button type="submit" variant="transparent">Submit suggestion</Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}