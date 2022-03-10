const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.use(express.static("public"));

io.on('connection', (socket) => {
    socket.on('user_joined',(name)=>{
        console.log(name,'is now connected')
    })

    socket.on('disconnect', () => {
        console.log(socket.id,'user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});