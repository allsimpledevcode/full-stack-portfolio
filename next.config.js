/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orgnertvdrapvnemmzlq.supabase.co",
        port: ""
      },
    ],
  },
};

module.exports = nextConfig;
