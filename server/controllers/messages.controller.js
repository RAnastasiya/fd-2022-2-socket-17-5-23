const { Message } = require('../models');

module.exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find()
    // .populate('author')
    // if (messages.lenght === 0) {
    //   return next(new Error('Empty'));
    // }
    console.log('getAllMessages')
    res.status(200).send({ data: messages })
  } catch (error) {
    next(error)
  }
}
