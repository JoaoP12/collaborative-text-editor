const WebSocket = require("ws");

const server = new WebSocket.Server(
  {
    port: process.env.PORT || 5000,
  },
  () => {
    console.log("Server started on port", server.address().port);
  }
);

let sockets = [];

server.on("connection", function (socket) {
  sockets.push(socket);
  console.log("Connected: ", socket.url);

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
