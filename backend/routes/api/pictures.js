const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Picture, User, Tag, PictureTag } = require('../../db/models');

const {singlePublicFileUpload, singleMulterUpload, singlePublicFileDelete} = require('../../aswS3');

const router = express.Router();

// GET /api/pictures/query
//Pass in a query object for findAll, will return result
router.get(
  "/query",
  asyncHandler(async (req, res) => {
    const {searchObj} = req.body
    let pictures = await Picture.findAll(searchObj);
    return res.json(JSON.stringify(pictures.toJSON()));
  })
)

// GET /api/pictures/tags/
//Pass in a tag name, will find pictures associated with tag
//body should have an array of tags
router.get(
  "/query",
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
      include: User
    });
    if(picture){
      return res.json({
        name: picture.name,
        description: picture.description,
        image_url:picture.image_url,
        user_id: picture.user_id,
        user_name: picture.User.username
      })
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
      let picture = Picture.uploadImage(name, description, imageUrl, user.id)
      //Handle Tags
      console.log(JSON.parse(tags));
      Promise.all(JSON.parse(tags).map(async (tag) =>{
        let findTag = await Tag.findOne({
          where:{
            name: tag
          }
        });
        console.log(findTag);
        if(!findTag){
          findTag = Tag.create({
            name: tag
          })
        }
        PictureTag.create({
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
