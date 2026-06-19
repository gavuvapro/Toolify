import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  typedRoutes: false,
  experimental: { optimizePackageImports: ["lucide-react"] },
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "**" }] }
};
export default nextConfig;
