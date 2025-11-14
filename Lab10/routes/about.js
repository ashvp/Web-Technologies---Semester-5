const fs = require('fs');
const logError = require('../utils/logger');
function aboutPage (req, res) {
const htmlContent = fs.readFile('components/abot.html', 'utf-8', (err, data) => {
    if (err) {
        res.writeHead(500,{"Content-Type":"text/html"});
        res.end("<h1>INTERNAL SERVER ERROR</h1>")
        logError(err);
    }

    else {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    }
})}
module.exports=aboutPage;