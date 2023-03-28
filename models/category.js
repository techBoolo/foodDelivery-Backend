import { getDB } from '../config/db.js'

const getCategories = async () => {
  const db = getDB()
  return await db.category.findMany({})
}

const getRestaurants = async (id) => {
  const db = getDB()
  const result = await db.category.findMany({
    where: {
      id: Number(id)
    },
    include: { restaurants: true }
  })
  return result.restaurants
}

export default {
  getCategories,
  getRestaurants,
}
