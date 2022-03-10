const userEl = document.getElementById('user');
let socket = undefined;

userEl.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = e.target['name'].value;
    if(name){
        socket = window.io();
        socket.emit('user_joined',name);
    }
})
