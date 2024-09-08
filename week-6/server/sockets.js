module.exports = (io) => {
    // Listen for socket connections
    io.on('connection', (socket) => {
      console.log('New client connected');
  
      // Listen for incoming messages
      socket.on('message', (msg) => {
        // Broadcast the message to all clients
        io.emit('message', msg);
      });
  
      // Handle client disconnect
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  };
  