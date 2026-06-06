/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.hashnode.com" },
      { protocol: "https", hostname: "**.hashnode.com" },
      { protocol: "https", hostname: "opengraph.githubassets.com" },
      { protocol: "https", hostname: "repository-images.githubusercontent.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
};

module.exports = nextConfig;
