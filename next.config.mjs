/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3099',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'uploads.dhwanibytes.com',
      },
    ],
    domains: [
      'i.ibb.co',
      'derma-shop-api.dermapuritys.com',
      'source.unsplash.com',
      'images.pexels.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'cdn.shopify.com',
      'derma-shop-api.dermapuritys.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
