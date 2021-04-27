const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Picture } = require('../../db/models');

const {singlePublicFileUpload, singleMulterUpload, singlePublicFileDelete} = require('../../aswS3');

const router = express.Router();

// GET /api/pictures/:pictureid
router.get(
  "/:pictureid",
  asyncHandler(async (req, res) => {
    const {pictureid} = req.params;
    let picture = await Picture.findByPk(pictureid);
    return res.json({
      name: picture.name,
      description: picture.description,
      image_url:picture.image_url,
      user_id: picture.user_id
    })
  })
)

// DELETE /api/pictures/:pictureid
router.delete(
  "/:pictureid",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {pictureid} = req.params;
    const {user} = req;
    let pic = await Picture.findByPk(pictureid);
    if(pic.user_id === user.id){
      let success = await singlePublicFileDelete(pic.image_url);
      if(success){
        pic.destroy();
      }
      return res.status(200).send({
        message: 'Successfully deleted image.'
      })
    }
    else{
      return res.status(401).send({
        message: 'Current User does not own this image.'
     });
    }
  })
)

// PATCH /api/pictures/:pictureid
router.patch(
  "/:pictureid",
  requireAuth,
  asyncHandler(async (req, res) => {
    const {pictureid} = req.params;
    const {user} = req;
    const {name, description} = req.body;
    let pic = await Picture.findByPk(pictureid);
    if(pic.user_id === user.id){
      console.log("Enter", req.body)
      await pic.update({name, description})
      return res.json({name: pic.name, description: pic.description, image_url:pic.image_url})
    }
    else{
      return res.status(401).send({
        message: 'Current User does not own this image.'
     });
    }
  })
)

// POST /api/pictures, uploads image to aws
router.post(
    "/",
    requireAuth,
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
      const { user } = req;
      const { name, description } = req.body;
      const imageUrl = await singlePublicFileUpload(req.file);
      Picture.uploadImage(name, description, imageUrl, user.id)
      return res.json({
        user,
      });
    })
  );

module.exports = router;
