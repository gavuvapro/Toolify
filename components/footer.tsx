import Link from "next/link";
import { appName } from "@/lib/utils";
export function Footer() {
  return (
    <footer className="border-t bg-background/40 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-5">
        <div>
          <p className="font-bold">{appName}</p>
          <p className="mt-2 text-sm text-muted-foreground">Open-source discovery for everyday tools, workflows, and professional stacks.</p>
        </div>
        {[
          ["Explore", [["Tools", "/categories"], ["Stacks", "/stacks"], ["Alternatives", "/alternatives"]]],
          ["Project", [["About", "/about"], ["Blog", "/blog"], ["Donate", "/donate"]]],
          ["Open source", [["Contribute", "/contribute"], ["GitHub", "https://github.com/yourname/tool-empir"], ["Security", "/security"]]],
          ["Legal", [["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Code of Conduct", "/code-of-conduct"]]]
        ].map(([h, items]) => (
          <div key={h as string}>
            <p className="font-semibold text-foreground">{h as string}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {(items as string[][]).map(([l, u]) => (
                <li key={u}><Link href={u} className="hover:text-foreground transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-4 pt-6 border-t md:border-0 md:mt-0 md:pt-0 md:col-span-5">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {appName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}