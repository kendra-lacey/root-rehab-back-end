const { Plant, Comment } = require('../models')
const cloudinary = require('cloudinary').v2


async function createPlant(req, res) {
  console.log('weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2')
  try {
    req.body.profileId = req.user.profile.id
    const plant = await Plant.create(req.body)
    res.status(200).json(plant)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}
async function index(req, res) {
  try {
    const plants = await Plant.findAll()
    res.status(200).json(plants)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const addPlantPhoto = async(req, res) =>{
  console.log('weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  try {
    const imageFile = req.files.photo.path
    console.log(req.params)
    const plant = await Plant.findByPk(req.params.id)
    console.log('plant: ')
    console.log(plant)
    const image = await cloudinary.uploader.upload(imageFile, {tags: 'plant photo'});
    plant.photo = image.url;
    await plant.save();
    res.status(201).json(plant.photo)
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: error })
    }
  }


module.exports = {
  createPlant,
  index,
  addPlantPhoto,
}