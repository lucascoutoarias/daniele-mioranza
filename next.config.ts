import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sobre",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
