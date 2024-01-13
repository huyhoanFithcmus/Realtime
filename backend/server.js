// server.js
// Import the 'http' module
const http = require('http');
// Create the server using the 'http.createServer()' method
const server = http.createServer((req, res) => {
  // The server's response configuration starts here
  // Set the response header with a status code of 200 (OK)
  // and a content type of 'text/plain'
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body with the text 'Hello, Node.js Server!'
  res.end('Hello, Node.js Server!');
  // The server's response configuration ends here
});
// Define the port number the server will listen on
const PORT = 8000;
// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});