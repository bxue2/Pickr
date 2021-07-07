const express = require('express')
const asyncHandler = require('express-async-handler');

const { Tag, Picture, User } = require('../../db/models');
const {Op} = require('sequelize');
const router = express.Router();

//Lower importance mvp, handle this later

// GET /api/tags
//Gets all tags
router.get(
  "/tags",
  asyncHandler(async (req, res) => {
    let tags = await Tag.findAll();
    return res.json(tags.toJSON());
  })
)

// GET /api/tags/query/
//Pass in a tag name, will find pictures associated with tag
//body should have an array of tags
router.get(
  "/query/:search",
  asyncHandler(async (req, res) => {
    const {search} = req.params;
    let pictures = await Picture.findAll({
      include:[
        {
          model: Tag,
          where:{
            name:{
              [Op.iLike]: '%' + search + '%'
            }
          }
        },
        {
          model: User
        }
      ]
    });
    return res.json(JSON.stringify(pictures));
  })
)

// GET /api/tags
//Gets a specific tag
router.get(
    "/tags/:tagid",
    asyncHandler(async (req, res) => {
        const {tagid} = req.body;
        let tag = await Tag.findByPk(tagid, {
          include:{
            model: Picture
          }
        });
        return res.json(tag.toJSON());
    })
  )

  module.exports = router;
