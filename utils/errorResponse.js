class ErrorResponse extends Error {
  constructor(params) {
    super()
    Object.assign(this, {...params})
  } 
}

export default ErrorResponse
