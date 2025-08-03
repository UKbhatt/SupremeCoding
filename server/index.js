const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questions = require("./routes/questions");
const compilerRoute = require("./routes/compiler");
const http = require("http");
const { Server } = require("socket.io");
const Actions = require("./data/action").default;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", compilerRoute);
app.use("/questions", questions);

const userSocketMap = {};

function getAllClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => ({
    socketId,
    username: userSocketMap[socketId],
  }));
}

io.on("connection", (socket) => {
  console.log(`New user connected: ${socket.id}`);

  socket.on(Actions.JOIN, ({ roomId, username }) => {
  if (!userSocketMap[socket.id]) {
    userSocketMap[socket.id] = username;
    socket.join(roomId);

    const clients = getAllClients(roomId);

    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(Actions.JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });

    console.log(`User ${username} joined room ${roomId}`);
  } else {
    console.log(`User ${username} already joined. Ignoring duplicate join.`);
  }
});

  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.to(roomId).emit(Actions.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
  });
});

server.listen(PORT, () => {
  console.log(`Server (with Socket.io) is running on port ${PORT}`);
});
