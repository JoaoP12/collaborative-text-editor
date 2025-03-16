const WebSocket = require("ws");

const server = new WebSocket.Server({
  port: 5050,
});

let sockets = [];

server.on("connection", function (socket) {
  sockets.push(socket);

  socket.on("message", function (msg) {
    console.log("Received: ", msg);

    sockets.forEach((s) => {
      if (s !== socket) s.send(Buffer.from(msg).toString("utf8"));
    });
  });

  socket.on("close", function () {
    sockets = sockets.filter((s) => s !== socket);
  });
});
