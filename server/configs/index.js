module.exports = {
  mongo: {
    development: {
      host: '127.0.0.1',
      port: 27017,
      dbName: 'fd_chat'
    },
    prodaction: {
      host: 'localhost',
      port: 27017,
      dbName: 'fd_chat'
    }
  },
  SOCET_EVENTS: {
    NEW_MESSAGE: 'NEW_MESSAGE',
    NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR'
  }
}
