const http = require('http');
console.log("Hello Backend End");

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('<html><script>console.log("Hello FrontEnd")</script><b>Hello, world!</b></html>');
      response.end();
    }
    else if (request.url === '/about') {
      response.write('My name is Izzy');
      response.end();
    }
    else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });

server.listen(3000);


// SEND HELLO BACKEND TO THE BACKEND CONSOLE
// SEND HELLO FRONTEND TO THE FRONTEND CONSOLE