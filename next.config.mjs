/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*', // Match all domains and subdomains
            },
        ],
    },
};

export default nextConfig;
