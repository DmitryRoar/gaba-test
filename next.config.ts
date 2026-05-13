import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  cacheComponents: true,
  typedRoutes: true,
  experimental: {
    taint: true,
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
