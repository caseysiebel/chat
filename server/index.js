const http = require('http');
const express =  require('express');
const socketIO = require('socket.io');
const mongojs = require('mongojs');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const db = mongojs('chat', ['messages']);

app.get('/messages', (req, res) => {
    console.log('in message route');
    db.message.find({}, (err, messages) => res.json(messages))
});

io.on('connection', (socket) => {
    //console.log('a user connection');
    //socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        console.log('chat message recieved', msg);
        io.emit('chat message', msg);
        db.messages.insert(msg);
    });
});

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log('listening on', PORT);
});
