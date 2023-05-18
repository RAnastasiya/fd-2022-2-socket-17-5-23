const mongoose = require('mongoose');
const { Schema } = mongoose

const schemaMessage = new Schema({
  content: {
    type: String,
    required: true,
    min: 1,
    max: 512
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timeseries: true
});

const Message = mongoose.model('Message', schemaMessage);

module.exports = Message;
