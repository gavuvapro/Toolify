import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { appName } from "@/lib/utils";
export const metadata={title:"Donate"};
export default function DonatePage(){ const links=[['GitHub Sponsors',process.env.NEXT_PUBLIC_GITHUB_SPONSORS_URL],['Ko-fi',process.env.NEXT_PUBLIC_KOFI_URL],['Buy Me a Coffee',process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL],['PayPal',process.env.NEXT_PUBLIC_PAYPAL_URL]]; return <section className="mx-auto max-w-4xl px-4 py-14"><Card className="text-center"><h1 className="text-4xl font-black">Help keep {appName} free and open source.</h1><p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Donations support curation, hosting, moderation, accessibility testing, and community contributions.</p><div className="mt-8 flex flex-wrap justify-center gap-3">{links.map(([label,url])=><Button key={label} asChild variant="outline"><Link href={url || '#'} target="_blank">{label}</Link></Button>)}</div></Card></section> }
