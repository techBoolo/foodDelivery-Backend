import Restaurant from '../models/restaurant_dao.js'
const menus = async (req, res) => {
  const { id } = req.params
  const menus = await Restaurant.getMenus(Number(id))
  res.status(200).json(menus)
}

export default {
  menus
}
