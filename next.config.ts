import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "carterlawwins.com" }],
        destination: "https://www.carterlawwins.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
