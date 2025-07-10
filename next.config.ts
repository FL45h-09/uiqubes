import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Needed if you're importing code from outside the /website dir
    externalDir: true,
  },
};

export default nextConfig;