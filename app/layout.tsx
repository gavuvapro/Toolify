import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { appName, siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: `${appName} — Discover the best everyday tools`, template: `%s · ${appName}` },
  description: "A curated open-source library of tools for work and everyday life by profession, category, budget, and use case.",
  openGraph: { title: appName, description: "Product Hunt for everyday tools and StackShare for professionals.", url: siteUrl(), siteName: appName, images: ["/opengraph-image"], type: "website" },
  twitter: { card: "summary_large_image", title: appName, description: "Discover, compare, and build stacks with the best tools." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
          Skip to content
        </a>
        <ThemeProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}