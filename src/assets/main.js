const socket = io();

const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const userName = document.querySelector('.name');

const nick = prompt('ваше имя');

userName.innerHTML = `${nick}`

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message',{
      messages: input.value,
      name: nick
    });
    input.value = '';
  }
});

socket.on('chat message', (data) => {
  const item = document.createElement('li');
  item.innerHTML = `<span>${data.name}</span>: ${data.messages}`
  messages.appendChild(item);
});