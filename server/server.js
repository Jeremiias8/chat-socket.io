
console.log('server works !');

const express = require('express');
const app = express();

const http = require('http');

const server = http.createServer(app);
const port = 3000;

app.use(express.static());

const { Server } = require('socket.io');
const io = new Server(server);
// fin de declaraciones

io.on('connection', (socket) => {
    console.log('new connection id: '+socket.id);
});

io.on('connection', (socket) => {

  console.log('a user connected succesfully !');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
    
});

server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

io.on('connection', (socket) => {

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
      
  });
});
// fin de server config

// ruta prueba
app.get('/', (req, res) => {
    res.send("Hey, soy la ruta principal del Chat con NodeJS !");
});

// ruta que muestra el archivo indicado
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '../client/index.html');
});