const http = require('http');
const app = require('./app');

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000
httpServer.listen(port, () => console.log('server started at port = ' + port));
