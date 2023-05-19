const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { Message } = require('./models');
const { SOCET_EVENTS } = require('./configs');

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  // transports: ['websocket'],
  cors: {
    origin: 'http://localhost:3001'
  }
});

io.on('connection', (socket) => {
  console.log('connection socket');
  socket.on(SOCET_EVENTS.NEW_MESSAGE, async (message) => {
    console.log('message ===>>', message);
    try {
      const savedMassage = await Message.create(message);
      if (!savedMassage) {
        throw new Error('Bad message');
      }
      io.emit(SOCET_EVENTS.NEW_MESSAGE, savedMassage);
    } catch (error) {
      socket.emit(SOCET_EVENTS.NEW_MESSAGE_ERROR, error);
    }
  });
  socket.on('disconect', (reason) => {
    console.log('message ===>>', reason);
  });
})

const port = process.env.PORT || 3000
httpServer.listen(port, () => console.log('server started at port = ' + port));
