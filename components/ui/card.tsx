import { cn } from "@/lib/utils";
export function Card({ className, children, variant }: { className?: string; children: React.ReactNode; variant?: "default" | "transparent" }) {
  return <div className={cn(variant === "transparent" ? "rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20" : "rounded-3xl border bg-card p-6 shadow-sm", className)}>{children}</div>;
}
