const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let players = [];

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.use(express.static("public"));

io.on('connection', (socket) => {
    socket.on('user_joined',(name)=>{
        const player ={
            id:socket.id,
            name,
            points:0

        }
        players.push(player);
        console.log(name,'is now connected')
        console.log(players)
    })

    socket.on('disconnect', () => {
        //remove the player from the local array
        players = [...players.filter(player => player.id !== socket.id)]
        console.log(socket.id,'user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});