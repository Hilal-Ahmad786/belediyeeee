  /** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/belediyeeee/' : '',
    basePath: '/belediyeeee',
    trailingSlash: true,
    output: 'export', // Add this line
  };
  
  export default nextConfig;
  
