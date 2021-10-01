# DESCRIPTION
A real time chat app that uses socket.io with users and rooms.


# Notes
- Three ways to send
  - send to one user connecting
  ```
  socket.emit()
  ```
  - send to all users except the one sending
  ```
  socket.broadcast.emit()
  ```
  - send to everyone including the one sending
  ```
  io.emit()
  ```