const socket = io('https://ajay-o-s.onrender.com');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")
const condactContainer = document.querySelector('.contact-list') 
var audio = new Audio('/chat/ting.mp3');
const append = (message, position)=> {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    console.log(messageElement.innerText)
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position =='you' || position == 'bot'){ audio.play()};
}
var con_dacts = ['ak_baby']
const contact = () => {
    condactContainer.append(con_dacts);
}

const name = prompt("Enter your name to join"); 
const _name = name;
socket.emit('chat-new-user-joined', name);
socket.on('chat-user-joined', name => {
    con_dacts.push(name);
    contact();
    if(name )  append(`${name} joined`, 'join');
})
socket.on('chat-you-joined', name => {  contact();append(`Hey ${name} Welcome to keerthana chat web`, 'join_me')});
socket.on('chat-receive', data => { append(`${data.name}:    \n${data.message}`, 'you')});
socket.on('chat-bot', data => { append(`꧁༺𝘒𝘌𝘌𝘙𝘛𝘏𝘈𝘕𝘈༻꧂:   \n${data.message}`, 'bot')});
socket.on('chat-user-er', data => { 
    append(`Error found on your name\n ReEnter your user name to send message!`, 'n_user');
    const name_2 = prompt("ReEnter your name to join");
    socket.emit('chat-new-user-joined', name_2);
});
socket.on('chat-left', name => { 
    for(var i=0;i<= con_dacts.length;i++) {if(con_dacts[i] == name) {con_dacts.splice(i,1);break}}
    if(name == _name) { append(`You left the chat`, 'left_me')} else if(name) {append(`${name} left the chat`, 'left_')}});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: \n${message}`, 'me');
    socket.emit('chat-send', message);
    messageInput.value = '';
})
