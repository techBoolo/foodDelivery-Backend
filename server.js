import http from 'http'
import app from './app.js'
import connectDB from './config/db.js'
const server = http.createServer()
const PORT = process.env.PORT || 3001

server.on('request', app)

await connectDB()
server.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})
