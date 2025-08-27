// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 👈 disables next/image optimization for static export
  },
};

module.exports = nextConfig;
