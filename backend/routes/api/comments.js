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
      if(commentRow){
        return res.json({
            comment: commentRow.comment,
            picture_id: commentRow.picture_id,
            user_id: commentRow.user_id
          })
      }
      return res.status(400).send({
        message: 'Comment not found.'
     });
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
        if(commentRow && commentRow.user_id === user.id){
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
        if(commentRow && commentRow.user_id === user.id){
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

      const newComment = await Comment.create({
        comment,
        picture_id,
        user_id: user.id
      })

      return res.json(newComment.toJSON());
    })
  );

module.exports = router;
