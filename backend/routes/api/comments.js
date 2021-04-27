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
      let comment = await Comment.findByPk(commentid);
      return res.json({
        name: comment.comment,
        description: comment.picture_id,
        user_id: comment.user_id
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
        let comment = await Comment.findByPk(commentid);
        if(comment.user_id === user.id){
            await comment.destroy();
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
        let comment = await Comment.findByPk(commentid);
        if(comment.user_id === user.id){
            await comment.update({comment});
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
