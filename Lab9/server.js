const http = require('http');
const homeRoute = require('./routes/home');
const postsRoute = require('./routes/posts');
const errorRoute = require('./routes/error');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') return homeRoute(req, res);
  if (method === 'GET' && url === '/posts') return postsRoute(req, res);

  return errorRoute(req, res);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
