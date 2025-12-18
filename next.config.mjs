/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["em.realscout.com"],
    formats: ["image/webp", "image/avif"],
    // Increase cache lifetime for optimized images (seconds)
    minimumCacheTTL: 2678400, // 31 days
  },
  async redirects() {
    return [
      // Add legacy route redirects here if needed
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
