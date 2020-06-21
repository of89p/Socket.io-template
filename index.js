const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(
  express.static(path.join(__dirname, "public"), { extensions: ["html"] })
);

io.on("connection", (socket) => {
  socket.on("joinRoom", () => {
    console.log(socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, (err) => {
  console.log(`Server running on port ${PORT}...`);
});
