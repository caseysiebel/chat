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

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log('listening on', PORT);
});
