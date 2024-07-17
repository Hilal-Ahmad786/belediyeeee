// next.config.mjs
const isGitHubPages = process.env.DEPLOY_TARGET === 'github-pages';
const repoName = 'belediyeeee'; // Replace with your repository name

export default {
  output: 'export',
  basePath: isGitHubPages ? `/${repoName}` : '',
  assetPrefix: isGitHubPages ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Necessary for GitHub Pages
  },
  publicRuntimeConfig: {
    basePath: isGitHubPages ? `/${repoName}` : '',
  },
};
