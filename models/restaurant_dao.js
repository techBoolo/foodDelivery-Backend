import Restaurant from './restaurant.js'

const getMenus = async (id) => {
  return await Restaurant.getMenus(id)
}

export default {
  getMenus
}
