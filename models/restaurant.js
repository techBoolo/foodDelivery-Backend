import { getDB } from '../config/db.js'

const getMenus = async (id) => {
  const db = getDB()
  const result = await db.restaurant.findMany({
    where: {
      id: id
    },
    include: {
      menus: true
    }
  })
  return result.menus
}

export default {
  getMenus,
}
