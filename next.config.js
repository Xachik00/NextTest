/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', "image/webp"],
        deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd1.awsstatic.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    swcMinify: true,
}

module.exports = nextConfig
