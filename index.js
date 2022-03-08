const { Server } = require("socket.io");

const io = new Server();

io.on("connection", (socket) => {
    console.log('default path')
});

io.of('test').on("connection", (socket) => {
    console.log('test path')
});

io.listen(3000);