import { getDB } from '../config/db.js'

const index = async (req, res) => {
  const db = getDB()
  const categories = await db.category.findMany({})
  res.status(200).json(categories)
}

const restaurants = async (req, res) => {
  const db = getDB()
  const { id } = req.params
  const result = await db.category.findMany({
    where: {
      id: Number(id)
    },
    include: { restaurants: true }
  })
  res.status(200).json(result)
}

export default {
  index,
  restaurants,
}
