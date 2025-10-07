const http      = require('http');  
const WebSocket = require('ws');  
  
const PORT = process.env.PORT || 8080;  
  
// 1) Create an HTTP server  
const server = http.createServer((req, res) => {  
  if (req.method === 'GET' && req.url === '/') {  
    // Simple health check  
    res.writeHead(200, { 'Content-Type': 'text/plain' });  
    return res.end('OK');  
  }  
  
  // You can handle other HTTP routes here if you like...  
  res.writeHead(404);  
  res.end();  
});  
  
// 2) Attach WebSocket to that same server  
const wss = new WebSocket.Server({ server });  
wss.on('connection', ws => {  
  ws.send('Hello from server!');  
  ws.on('message', msg => ws.send(`Echo: ${msg}`));  
});  
  
// 3) Listen on the Render-assigned port  
server.listen(PORT, () => {  
  console.log(`Listening on port ${PORT}`);  
});  
