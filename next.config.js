/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.prismic.io', 'wroomdev.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
