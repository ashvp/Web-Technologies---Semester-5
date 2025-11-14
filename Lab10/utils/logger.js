const fs = require('fs');

function logError(err) {
  const logMsg = `${new Date().toISOString()} - ${err}\n`;
  fs.appendFile('Logs.txt', logMsg, (writeErr) => {
    if (writeErr) console.error("Failed to write log:", writeErr);
  });
}

module.exports = logError;