const express = require('express');
const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);

// obs:add cors mais tarde
const io = require('socket.io')(httpServer);

// io.on('connection', (socket) => {
//   console.log('Novo usuário conectado')

//   socket.on('chat.sendMessage', (message) => {
//     console.log(message)
//   })
// });

const PORT = 3000;

app.set('view engine','ejs');

app.get('/', (_req, res) => {
  // res.status(200).json({ ok:true });
  res.render('home');
});

app.use(express.json());
app.use(cors());

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT))
