/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["react-icons"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Match all domains and subdomains
      },
    ],
  },
};

export default nextConfig;
