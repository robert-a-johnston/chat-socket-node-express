const path = require('path')
const http = require('http')
const express = require('express')
const socketIo = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = socketIo(server)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Run when client connects
io.on('connection', socket => {
  
  // Welcomes current user.
  socket.emit('message', 'Welcome to Chit chat git chat')

  //Broadcast when a user connects
  socket.broadcast.emit('message', 'A user has joined the chat')

  // Run when disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  })

  // Listen for chatMessage
  socket.on('chatMessage', (message) => {
    io.emit('message', message)
  })

})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => console.log(`Server running on ${PORT}`))