const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const httpServer = require('http').createServer(app);
const User = require('./models/User');
const cors = require('cors');

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

const getCurrentHour = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

const PORT = 3001;

io.on('connection', (socket) => {
  console.log('Novo usuário conectado');

  socket.on('chat.sendMessage', (data) => {
    data = { ...data, sendAt: getCurrentHour() };
    io.emit('chat.receiveMessage', data);
  })
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

app.post('/login', async (req, res) => {
  const { username } = req.body;
  await User.creatOrUpdate(email, new Data());
})

httpServer.listen(PORT, () => console.log('App listening on PORT %s', PORT));
