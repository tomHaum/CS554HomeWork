const express = require("express");
const app = express();
const http = require("http").Server(app);

const io = require("socket.io")(http);

const chat = io.of("/chat");
const usersToSocket = {};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

console.log("using already running local redis server http://localhost:" + config.redisPort);

http.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});
