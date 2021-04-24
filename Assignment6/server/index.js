const config = require("../configuration");
const searcher = require("./data");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const uuid = require("node-uuid");

const io = require("socket.io")(http);

const chat = io.of("/chat");
const usersToSocket = {};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

chat.on("connection", socket => {
  socket.on("new user", data => {
    socket.broadcast.emit("user joined", data.username);
    socket.emit("user guid", {
      username: data.username,
      guid: uuid.v4()
    });
  });
  socket.on("message query", data => {
    searcher.imageSearch(data.query).then(res => {
      console.log(res);
      chat.emit("message query result", {
        text: data.text,
        query: data.query,
        username: data.username,
        imageData: res
      });
    });
  });
});

console.log(
  "using already running local redis server http://localhost:" +
    config.redisPort
);

http.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
