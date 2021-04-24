const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// obs:add cors mais tarde
const io = require('socket.io')(httpServer);

app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
  res.render('home');
});

httpServer.listen('3000');
