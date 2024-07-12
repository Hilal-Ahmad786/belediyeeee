  /** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/belediii/' : '',
    basePath: '/belediii',
    trailingSlash: true,
    output: 'export', // Add this line
  };
  
  export default nextConfig;
  
