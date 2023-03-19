import db from '../config/db.js'

const index = async (req, res) => {
  const categories = await db.category.findMany({})
  res.status(200).json(categories)
}

export default {
  index,
}
