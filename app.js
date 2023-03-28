import express from 'express'
import 'express-async-errors'
import categoryRoute from './routes/category.js'
import restaurantRoute from './routes/restaurant.js'
import ErrorResponse from './utils/errorResponse.js'

const app = express()

app.use('/api/categories', categoryRoute)
app.use('/api/restaurants', restaurantRoute)

// route not found
app.use((req, res, next) => {
  const error = new ErrorResponse({
    statusCode: 404,
    message: 'Route not found.'
  })
  next(error)
})

// error handling
app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500
  res.json({
    error: { message: error.message }
  })
})

export default app
