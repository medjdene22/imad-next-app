/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'media.timeout.com',
                port: '',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
