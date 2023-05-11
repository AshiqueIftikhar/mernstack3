// var http = require('http');
// var fs = require('fs');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(3000); //the server object listens on port 8080


const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDirectory = path.join(__dirname , 'public');

const server = http.createServer((req, res) => {
  const filePath = path.join(publicDirectory, req.url === '/' ? 'index.html' : req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

