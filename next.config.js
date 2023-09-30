/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['mapadotacji.gov.pl'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mapadotacji.gov.pl',
                port: '',
                pathname: '/wp-content/**',
            },
        ],
    },
}

module.exports = nextConfig
