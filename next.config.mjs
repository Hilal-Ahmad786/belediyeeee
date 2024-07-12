  /** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/belediyeeee/' : '',
    basePath: '/belediyeeee',
    images: {
      unoptimized: true, // Necessary if using next/image with static export
    },
    trailingSlash: true,
    output: 'export', // Add this line
  };
  
  export default nextConfig;
  
