const chatForm = document.getElementById('chat-form')

const socket = io()


// message event comes from server.js socket emit
socket.on('message', message => {
  // console logs in browser
  console.log(message)
})

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const msg = e.target.elements.msg.value
  console.log(msg)
})