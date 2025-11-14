const http = require('http')
const urlLib = require('url')
const homePage = require('./routes/home')
const aboutPage = require('./routes/about')

const server = http.createServer((req, res) => {
    const headers = urlLib.parse(req.url);
    const url = headers.path;
    const method = req.method;

    if(url === "/" && method === "GET") {
        homePage(req, res);
    }

    else if (url === "/about" && method === "GET") {
        aboutPage(req, res);
    }

    else {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("<h1> Page Not Found </h1>");
    }

});


server.listen(3000, () => {
    console.log("Server running");
});