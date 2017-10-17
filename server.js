const http = require('http');
const express =  require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    //console.log('a user connection');
    //socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        console.log('chat message recieved', msg);
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
