/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // distDir: 'out',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/downloads/:path*',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
        ],
      },
    ];
  },
}

export default nextConfig