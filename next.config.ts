import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        // Optionally add pathname restrictions if needed
        // pathname: '/your-path/**',
      },
    ],
  },
};

export default nextConfig;