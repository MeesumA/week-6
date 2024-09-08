const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIO = require('socket.io');
const socketHandler = require('./sockets');
const listen = require('./listen');

// Initialize the Express app
const app = express();

// Enable CORS for the Angular front-end
app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST"]
}));

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.io with CORS options
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

// Use the socket handler for managing socket connections
socketHandler(io);

// Start the server on port 3000
listen(server);
