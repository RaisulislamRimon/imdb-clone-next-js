/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
