/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/moon.svg',
        destination: '/api/moon.svg',
      },
      {
        source: '/moon.png',
        destination: '/api/moon.png',
      }
    ];
  },
}

module.exports = nextConfig
