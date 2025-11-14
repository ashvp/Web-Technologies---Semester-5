const fs = require('fs');

function homeRoute(req, res) {
  fs.readFile('components/homePage.html', 'utf-8', (err, data) => {
      if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
      }
      else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
      }
  });
}

module.exports = homeRoute;
