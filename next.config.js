/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.thecocktaildb.com"],
    deviceSizes: [400, 800, 1200, 1600],
  },
};

module.exports = nextConfig;
