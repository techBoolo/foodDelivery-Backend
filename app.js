import express from 'express'

const app = express()

app.use((req, res) => {
  res.status(200).json({ message: 'boot up express app'})
})

export default app
