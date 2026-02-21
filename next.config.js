
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.ferdev.my.id' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'files.useyapi.com' }
    ],
  },
};

export default nextConfig;
