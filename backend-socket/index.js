const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const PORT = 3001;

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');
});

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

app.use(bodyParser.json());

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT));
