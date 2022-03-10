const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const {
    createQuestion,
    getRandomNumber
}=require('./functions')

let players = [];
let question = createQuestion();
console.log(question)

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
        console.log(players);
        updateGame();
    });

    socket.on('response',response =>{
        //do something with response
        console.log(response);

        //Validar la respuesta
        if(+response === question.a){
            question = createQuestion();
            increasePoints(socket.id);

            updateGame();
        }
    });

    socket.on('disconnect', () => {
        //remove the player from the local array
        players = [...players.filter(player => player.id !== socket.id)]
        console.log(socket.id,'user disconnected');
    });
});

function increasePoints(id){
    players = players.map(player=>{
        if(player.id === id){
            return{
                ...player,
                points: player.points+1
            }
        }else{
            return player;
        }
    });
}

function updateGame(){
    const leaderboard = players.sort((a,b)=>b.points-a.points)
        .slice(0,10);
    io.emit('question',question.q)
    io.emit('leaderboard', leaderboard);
}

server.listen(3000, () => {
    console.log('listening on *:3000');
});