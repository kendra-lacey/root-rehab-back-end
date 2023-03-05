const { Health , Plant } = require('../models');
const user = require('../models/user');

async function setHealth(req, res) {
  try {
    //Optionally add query whether the passed plantId belongs to req.user.id
    req.body.userId = req.user.id

    const prevHealth = await Health.findOne({
      where: {
        plantId: req.body.plantId,
        userId: req.body.userId,
      }
    })

    if (prevHealth) {
      prevHealth.value = req.body.value
      await prevHealth.save()
    } else {
      await Health.create(req.body)
    }
    const plant = await Plant.findByPk(
      req.body.plantId,
      { include: [{ model: Health, as: "healthRecords" }] }
    )
    
    res.status(200).json(plant)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}



module.exports = {
  setHealth
  }
