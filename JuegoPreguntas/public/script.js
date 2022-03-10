const userEl = document.getElementById('user');
const submissionEl = document.getElementById('submission');
const introEl = document.getElementById('intro');
const gameEl = document.getElementById('game');
const questionEl = document.getElementById('question');
let socket = undefined;

userEl.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = e.target['name'].value;
    if(name){
        socket = window.io();
        socket.emit('user_joined',name);
        startGame()
    }
});

function startGame(){
    introEl.classList.add('hidden')
    gameEl.classList.remove('hidden');
    socket.on('question',(question)=>{
        questionEl.innerText = question;
    });

}

submissionEl.addEventListener('submit', e=>{
    e.preventDefault();
    const response = e.target['response'].value;
    if(response){
        socket.emit('response', response);
        e.target['response'].value = '';
    }
})
