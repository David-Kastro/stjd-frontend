import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.herokuapp.com',
        port: '',
        pathname: '/uploads/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
