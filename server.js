const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const devProxy = {
  '/api': {
    target: 'http://localhost:3001', // Mock server URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    },
    logLevel: 'debug', // Add logging for debugging
    onProxyReq: (proxyReq, req, res) => {
      console.log(`[Proxy Request] ${req.method} ${req.url} -> ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`);
    },
    onProxyRes: (proxyRes, req, res) => {
      console.log(`[Proxy Response] ${req.method} ${req.url} -> ${proxyRes.statusCode}`);
    },
    onError: (err, req, res) => {
      console.error(`[Proxy Error] ${req.method} ${req.url} -> ${err.message}`);
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.end('Something went wrong. And we are reporting a custom error message.');
    }
  }
};

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    // Log incoming requests
    console.log(`[Incoming Request] ${req.method} ${req.url}`);

    // Apply proxy if match
    Object.keys(devProxy).forEach(function (context) {
      if (req.url.startsWith(context)) {
        console.log(`[Proxying Request] ${req.method} ${req.url}`);
        const proxy = createProxyMiddleware(devProxy[context]);
        proxy(req, res, (result) => {
          if (result instanceof Error) {
            console.error(result);
            res.statusCode = 500;
            res.end('Internal Server Error');
          }
          return result;
        });
        return;
      }
    });

    handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
