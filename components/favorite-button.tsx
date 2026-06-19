"use client";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
export function FavoriteButton({ slug, name }: { slug: string; name: string }) {
  const [active, setActive] = useState(false);
  useEffect(() => { setActive(JSON.parse(localStorage.getItem("tool-empir:favorites") || "[]").includes(slug)); }, [slug]);
  function toggle() { const current: string[] = JSON.parse(localStorage.getItem("tool-empir:favorites") || "[]"); const next = current.includes(slug) ? current.filter((s)=>s!==slug) : [...current, slug]; localStorage.setItem("tool-empir:favorites", JSON.stringify(next)); setActive(next.includes(slug)); window.dispatchEvent(new Event("tool-empir:favorites")); }
  return <button aria-label={`${active ? "Remove" : "Save"} ${name}`} onClick={toggle} className="rounded-full border p-2 hover:bg-muted"><Heart className={active ? "h-4 w-4 fill-red-500 text-red-500" : "h-4 w-4"} /></button>;
}
