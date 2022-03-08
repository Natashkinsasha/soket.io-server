const { io } = require('socket.io-client');

const socket = io('http://localhost:3000/test');

socket.on('connect', ()=>{
    console.log('Connected');
})

socket.on('connect_error', ()=>{
    console.log('Connected error');
})