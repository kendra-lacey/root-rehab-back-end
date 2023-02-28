const { Health , Plant } = require('../models')



async function setHealth(req, res) {
  try {
    // const plant = await Plant.findByPk(req.body.plantId)
    // console.log(req.user.userId);
    // req.body.userId = plant.userId
    // const health = await Health.create(req.body)
    // res.status(200).json(health)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}



module.exports = {
  setHealth
  }
