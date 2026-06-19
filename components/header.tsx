import Link from "next/link";
import { appName } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const nav = [["Categories","/categories"],["Compare","/compare"],["Stacks","/stacks"],["Free Tools","/top-free"],["Favorites","/favorites"],["Donate","/donate"]];
export function Header() {
  return <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
    <Link href="/" className="flex items-center gap-2 font-bold"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-primary-foreground">TE</span>{appName}</Link>
    <nav className="hidden items-center gap-1 md:flex">{nav.map(([label,href])=><Link key={href} href={href} className="rounded-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{label}</Link>)}</nav>
    <Button asChild size="sm"><Link href="/contribute">Submit tool</Link></Button>
  </div></header>;
}
