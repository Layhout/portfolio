/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ["react-icons"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Match all domains and subdomains
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
