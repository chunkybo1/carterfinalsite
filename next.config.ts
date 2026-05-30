import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "carterlawwins.com" }],
        destination: "https://www.carterlawwins.com/:path*",
        permanent: true,
      },
      // /es is the bilingual entry the audit recommended — route it to the
      // canonical Spanish landing page so language switching and direct entry
      // work the same way.
      {
        source: "/es",
        destination: "/es/abogado-de-accidentes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
