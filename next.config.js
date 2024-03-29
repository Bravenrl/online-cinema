/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.REACT_APP_SERVER_URL}/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.REACT_APP_SERVER_URL}/uploads/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
