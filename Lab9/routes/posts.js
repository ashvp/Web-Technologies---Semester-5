const fs = require('fs');
const blogPosts = require('../data/blogPosts');

function postsRoute(req, res) {
  let str = "";
  blogPosts.map((post) => {
    str += `<h1>${post.title}</h1><p>${post.description}</p><hr />`;
  });

  fs.readFile('components/blog.html', 'utf-8', (err, data) => {
      if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
      }
      else {
          const html = data.replace('{posts}', str);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(html);
      }
  });
}

module.exports = postsRoute;
