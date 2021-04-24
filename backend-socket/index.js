const express = require('express');
const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);
const bodyParser = require('body-parser');

// obs:add cors mais tarde
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log('Novo usuário conectado')

  socket.on('chat.sendMessage', (message) => {
    console.log(message)
  })
});

const PORT = 3001;

app.get('/', (_req, res) => {
  res.status(200).json({ ok:true });
});

app.use(bodyParser.json());
app.use(cors());

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT))
