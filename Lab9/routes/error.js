const fs = require('fs');

function errorRoute(req, res) {
  fs.readFile('components/error.html', 'utf-8', (err, data) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(data || '<h1>404 Not Found</h1>');
  });
}

module.exports = errorRoute;
