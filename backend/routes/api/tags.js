const express = require('express')
const asyncHandler = require('express-async-handler');

const { Tag } = require('../../db/models');

const router = express.Router();

//Lower importance mvp, handle this later

// GET /api/tags
//Gets all tags
router.get(
  "/tags",
  asyncHandler(async (req, res) => {
    let tags = await Tag.findAll();
    return res.json(JSON.stringify(tags));
  })
)

// GET /api/tags
//Gets a specific tag
router.get(
    "/tags/:tagid",
    asyncHandler(async (req, res) => {
        const {tagid} = req.body;
        let tag = await Tag.findByPk(tagid);
        return res.json(JSON.stringify(tag));
    })
  )

  module.exports = router;
