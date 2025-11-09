/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Disable static page generation since we need dynamic data
  staticPageGenerationTimeout: 0,
  // Enable dynamic rendering for all pages
  experimental: {
    missingSuspenseWithCSRInDevelopment: false,
  }
};

module.exports = nextConfig;
