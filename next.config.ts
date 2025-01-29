/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // ⚠️ Only use if needed during development
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Only use if needed during development
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig