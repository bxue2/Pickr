const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Picture } = require('../../db/models');

const {singlePublicFileUpload, singleMulterUpload} = require('../../aswS3');

const router = express.Router();

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
