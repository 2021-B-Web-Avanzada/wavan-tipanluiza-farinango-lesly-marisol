const userEl = document.getElementById('user');
const submissionEl = document.getElementById('submission');
const introEl = document.getElementById('intro');
const gameEl = document.getElementById('game');
let socket = undefined;

userEl.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = e.target['name'].value;
    if(name){
        socket = window.io();
        socket.emit('user_joined',name);
        introEl.classList.add('hidden')
        gameEl.classList.remove('hidden');
    }
});

submissionEl.addEventListener('submit', e=>{
    e.preventDefault();
    const response = e.target['response'].value;
    if(response){
        socket.emit('send_response', response);
    }
})
