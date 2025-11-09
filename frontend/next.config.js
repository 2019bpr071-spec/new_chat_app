/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/new_chat_app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/new_chat_app/' : '',
};

module.exports = nextConfig;
