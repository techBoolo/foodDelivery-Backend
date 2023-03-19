import http from 'http'
import app from './app.js'
const server = http.createServer()
const PORT = process.env.PORT || 3001

server.on('request', app)

server.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})
