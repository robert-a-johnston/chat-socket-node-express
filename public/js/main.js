const chatForm = document.getElementById('chat-form')

const socket = io()


// message event comes from server.js socket emit
socket.on('message', message => {
  // console logs in browser
  console.log(message)
  outputMessage(message)
})

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // get message text
  const msg = e.target.elements.msg.value
  // emit message to server
  socket.emit('chatMessage', msg)
})

// output message to DOM
function outputMessage(message) {
  const div = document.createElement('div')
  div.classList.add('message')
  div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
  <p class="text">
    ${message}
  </p>`
  document.querySelector('.chat-messages').appendChild(div)
}