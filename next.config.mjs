/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/assessment', destination: '/contact', permanent: true },
      { source: '/assessment/:path*', destination: '/contact', permanent: true },
      { source: '/coming-soon', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
