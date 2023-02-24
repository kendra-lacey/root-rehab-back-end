const { Plant } = require('../models')

async function createPlant(req, res) {
  try {
    
  } catch (error) {
    res.status(500).json({ err: error })
  }
}


module.exports = {
  createPlant,
}