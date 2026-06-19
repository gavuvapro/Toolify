import { cn } from "@/lib/utils";
export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold text-muted-foreground", className)}>{children}</span>;
}
