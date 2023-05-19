const express = require('express');
const cors = require('cors');
const MessageController = require('./controllers/messages.controller');
const app = express();

app.use(cors());

app.get('/', MessageController.getAllMessages);

app.use((err, req, res, next) => {
  console.log('err ====>', err);
  res.status(500).send(err);
});

module.exports = app;
