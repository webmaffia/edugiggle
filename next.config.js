/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/courses.html",
        destination: "/courses",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
