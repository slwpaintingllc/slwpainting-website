/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,   // ✅ disable Image Optimization
  },
}
module.exports = nextConfig
