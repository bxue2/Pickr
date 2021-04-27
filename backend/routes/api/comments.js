const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Comment } = require('../../db/models');

const router = express.Router();

// GET /api/comments/:commentid
router.get(
    "/:commentid",
    asyncHandler(async (req, res) => {
      const {commentid} = req.params;
      let commentRow = await Comment.findByPk(commentid);
      return res.json({
        name: commentRow.comment,
        description: commentRow.picture_id,
        user_id: commentRow.user_id
      })
    })
)

//DELETE /api/comments/:commentid
router.delete(
    "/:commentid",
    requireAuth,
    asyncHandler(async (req, res) => {
        const {commentid} = req.params;
        const {user} = req;
        let commentRow = await Comment.findByPk(commentid);
        if(commentRow.user_id === user.id){
            await commentRow.destroy();
            return res.status(200).send({
                message: 'Successfully deleted comment.'
              })
        } else{
            return res.status(401).send({
                message: 'Current User does not own this comment.'
             });
        }
    })
)

//PATCH /api/comments/:commentid
router.patch(
    "/:commentid",
    requireAuth,
    asyncHandler(async (req, res) => {
        const {commentid} = req.params;
        const {user} = req;
        const {comment} = req.body;
        let commentRow = await Comment.findByPk(commentid);
        if(commentRow.user_id === user.id){
            await commentRow.update({comment});
            return res.status(200).send({
                message: 'Successfully deleted comment.'
              })
        } else{
            return res.status(401).send({
                message: 'Current User does not own this comment.'
             });
        }
    })
)

// POST /api/comments
router.post(
    "/",
    requireAuth,
    asyncHandler(async (req, res) => {
      const { user } = req;
      const { comment, picture_id } = req.body;

      const newComment = await Album.create({
        comment,
        picture_id,
        user_id: user.id
      })

      return newComment;
    })
  );

module.exports = router;
