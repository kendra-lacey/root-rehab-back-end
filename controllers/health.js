const { Health , Plant } = require('../models');
const user = require('../models/user');



async function setHealth(req, res) {
  try {
    //Optionally add logic here to query whether the passed plantId belongs to req.user.id
    req.body.userId = req.user.id
    const health = await Health.create(req.body)
    res.status(200).json(health)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}



module.exports = {
  setHealth
  }
