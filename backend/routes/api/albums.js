const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Album, AlbumPicture } = require('../../db/models');

const router = express.Router();

// GET /api/albums/:albumid
router.get(
    "/:albumid",
    asyncHandler(async (req, res) => {
      const {albumid} = req.params;
      let album = await Album.findByPk(albumid, {
        include:[{
          model:Picture
        }]
      });
      //Probably want to get all attached image Ids as well
      if(album){
        return res.json(album.toJSON())
      }
      return res.status(400).send({
        message: 'Album not found.'
     });

    })
)

// DELETE /api/albums/:albumid
router.delete(
    "/:albumid",
    requireAuth,
    asyncHandler(async (req, res) => {
      const {albumid} = req.params;
      const {user} = req;
      let album = await Album.findByPk(albumid);
      if(album.user_id === user.id){
        let pictures = await AlbumPicture.findAll({
            where:{
                album_id: albumid
            }
        })
        await Promise.all(pictures.map(async (picture) => {
            await picture.destroy();
        }));

        await album.destroy();
        return res.status(200).send({
          message: 'Successfully deleted album.'
        })
      }
      else{
        return res.status(401).send({
          message: 'Current User does not own this album.'
       });
      }
    })
  )

// PATCH /api/albums/:albumid
//TODO: Not completed, need to figure out how order will work
router.patch(
    "/:albumid",
    requireAuth,
    asyncHandler(async (req, res) => {
      const {albumid} = req.params;
      const {user} = req;
      const {name, description, pictures} = req.body;
      let album = await Album.findByPk(albumid);
      if(album.user_id === user.id){
        await album.update({name, description})
        //For each picture, if already exist, change order, else add new row to AlbumPictures

        return res.json({name: album.name, description: album.description, images})
      }
      else{
        return res.status(401).send({
          message: 'Current User does not own this image.'
       });
      }
    })
  )

// POST /api/albums
//pictures should be an array of picture_ids (correspond to picture db)
router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
      const { user } = req;
      const { name, description, pictures } = req.body;

      const newAlbum = await Album.create({
        name,
        description,
        user_id: user.id
      })

      //Need to add images to join table
      await Promise.all(pictures.map(async (pictureId) => {
          return await AlbumPicture.create({
              album_id: newAlbum.id,
              picture_id: pictureId
          })
      }))
      return newAlbum;
    })
  );

module.exports = router;
