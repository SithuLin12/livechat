let express = require('express');
let socket =  require('socket.io');
// app setup
let app  = express();

// server setup
let server = app.listen(3000,() => {
    console.log('project is runnign on localhost:30000');
})


app.get('/',(res,req) => {
    req.sendFile(__dirname + '/public/index.html')
})

// socket setup
let io = socket(server);


io.on('connection',(socket) => {
    socket.on('chat',(data) => {
        io.sockets.emit('chat',data)
    })
})