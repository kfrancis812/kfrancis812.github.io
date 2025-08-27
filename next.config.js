// next.config.js (or .mjs / ts)
const nextConfig = {
  output: 'export',           // makes `next build` write to ./out
  images: { unoptimized: true } // needed for Pages image hosting
};
module.exports = nextConfig;   // or `export default nextConfig` for ESM
