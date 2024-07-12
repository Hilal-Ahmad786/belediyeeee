  /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/belediyeeee',
  assetPrefix: '/belediyeeee/',
  images: {
    unoptimized: true, // Necessary for GitHub Pages
  },
  publicRuntimeConfig: {
    basePath: '/belediyeeee',
  },
  };
  
  export default nextConfig;
  
