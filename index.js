const WebSocket = require('ws');  

const wss = new WebSocket.Server({ port: 8080 }, () => {  
  console.log('WebSocket server running on ws://localhost:8080');  
});  

wss.on('connection', (ws, req) => {  
  console.log('Client connected:', req.socket.remoteAddress);  
  ws.send('Hello from server!');  

  ws.on('message', message => {  
    console.log('Received:', message);  
    ws.send(`Server received: ${message}`);  
  });  

  ws.on('close', (code, reason) => {  
    console.log('Client disconnected:', code, reason);  
  });  
});  
