import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'red-onion-restaurant-41dbe.web.app',

    ],
  },
};

export default nextConfig;
