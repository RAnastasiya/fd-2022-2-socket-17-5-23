const mongoose = require('mongoose');
const { Schema } = mongoose

const schemaUser = new Schema({
  login: {
    type: String,
    required: true,
    min: 3,
    max: 32
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message'
  }]
}, {
  timeseries: true
});

const User = mongoose.model('User', schemaUser);

module.exports = User;
