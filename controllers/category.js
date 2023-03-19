const index = (req, res) => {
  res.status(200).json({
    message: 'categories'
  })
}

export default {
  index,
}
