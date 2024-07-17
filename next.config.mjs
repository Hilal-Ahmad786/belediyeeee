// next.config.mjs
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const repoName = 'belediyeeee'; // Replace with your repository name

export default {
  reactStrictMode: true,
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Necessary for GitHub Pages
  },
  output: 'export', // Ensures next export is used
  trailingSlash: true, // Ensures paths end with a trailing slash
  publicRuntimeConfig: {
    basePath: isGitHubPages ? `/${repoName}` : '',
  },
};
