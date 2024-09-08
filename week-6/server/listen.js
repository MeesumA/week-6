module.exports = (server) => {
    // Start listening on port 3000
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  };
  