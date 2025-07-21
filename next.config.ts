import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;
