import { useEffect } from 'react'
const io = require("socket.io-client");
import { Server } from 'socket.io'
export const sockets = [];

const SocketHandler = (req, res) => {

  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io
    io.on('connection', socket => {
      sockets.push(socket)
      // I think we can add more .on handlers here to watch for changes to things and update with emits
      socket.on('input-change', msg => {
        socket.broadcast.emit('update-input', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler