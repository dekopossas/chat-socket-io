const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// obs:add cors mais tarde
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home');
});

const PORT = 3001;

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT))
