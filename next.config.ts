import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Cloudflare Workers via @opennextjs/cloudflare. Skip the Next.js image
  // optimiser (it needs an extra Cloudflare Images binding); the photos are already small.
  images: { unoptimized: true },
};

export default nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
