/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["basspro.scene7.com"],
  },
}

module.exports = nextConfig
