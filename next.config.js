/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Optimización para producción
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
