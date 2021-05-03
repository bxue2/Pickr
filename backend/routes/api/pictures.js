const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Picture, User, Tag, PictureTag } = require('../../db/models');
const {Op} = require('sequelize');
const {singlePublicFileUpload, singleMulterUpload, singlePublicFileDelete} = require('../../aswS3');

const router = express.Router();

// GET /api/pictures/query
//Pass in a query object for findAll, will return result
router.get(
  "/query/name/:search",
  asyncHandler(async (req, res) => {
    const {search} = req.params;
    let pictures = await Picture.findAll({
      where:{
        name: {
          [Op.iLike]: `%${search}%`
        }
      },
      include: User
    });
    return res.json(JSON.stringify(pictures));
  })
)

// GET /api/pictures/tags/
//Pass in a tag name, will find pictures associated with tag
//body should have an array of tags
router.get(
  "/query/tag/:search",
  asyncHandler(async (req, res) => {
    const {tagNames} = req.body;
    let pictures = await Picture.findAll({
      where:{

      }
    });
    return res.json(JSON.stringify(pictures.toJSON()));
  })
)

// GET /api/pictures/users/:userid
//Gets all pictures belonging to user
router.get(
  "/users/:userid",
  asyncHandler(async (req, res) => {
    const {userid} = req.params;
    let picture = await Picture.findAll({
      where:{
        user_id: userid
      }
    });
    return res.json(JSON.stringify(picture.toJSON()));
  })
)

// GET /api/pictures/:pictureid
router.get(
  "/:pictureid",
  asyncHandler(async (req, res) => {
    const {pictureid} = req.params;
    let picture = await Picture.findByPk(pictureid, {
      include: [{
        model: Tag
      },
      {
        model: User
      }]
    });
    if(picture){
      return res.json(picture.toJSON())
    } else{
      return res.status(400).send({
        message: 'Picture not found.'
     });
    }

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
    if(pic && pic.user_id === user.id){
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
    if(pic && pic.user_id === user.id){
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
      const { name, description, tags} = req.body;
      const imageUrl = await singlePublicFileUpload(req.file);
      let picture = await Picture.uploadImage(name, description, imageUrl, user.id)
      //Handle Tags
      Promise.all(JSON.parse(tags).map(async (tag) =>{
        let findTag = await Tag.findOne({
          where:{
            name: tag
          }
        });
        if(!findTag){
          findTag = await Tag.create({
            name: tag
          })
        }
        await PictureTag.create({
          picture_id: picture.id,
          tag_id: findTag.id
        })
      }))

      return res.json({
        user,
      });
    })
  );

module.exports = router;
