const { Plant, Comment } = require('../models')
const cloudinary = require('cloudinary').v2


async function createPlant(req, res) {
  try {
    req.body.profileId = req.user.profile.id
    const plant = await Plant.create(req.body)
    res.status(200).json(plant)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const addPlantPhoto = async(req, res) =>{
  try {
    const imageFile = req.files.photo.path;
    const plant = await Plant.findById(req.params.id)
    const image = await cloudinary.uploader.upload(imageFile, {tags: 'plant photo'});
    plant.photo = image.url;
    await rec.save();
    res.status(201).json(rec)
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
  }

  const createComment = async(req,res) => {
    try {
      
    } catch (error) {
      res.status(500).json(err);
    }
  }


module.exports = {
  createPlant,
  addPlantPhoto,
  createComment
}