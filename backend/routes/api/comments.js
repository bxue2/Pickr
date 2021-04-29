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
            user_id: commentRow.user_id,
            created_at: comment.created_at
          })
      }
      return res.status(400).send({
        message: 'Comment not found.'
     });
    })
)

// GET /api/comments/picture/:pictureid
router.get("/picture/:pictureid",
  asyncHandler(async (req, res) => {
    console.log("Reached")
    const {pictureid} = req.params;
      let comments = await Comment.findAll({
        where:{
          picture_id:pictureid
        }
      });
      if(comments.length !== 0){
        return res.json(comments);
      }
      return res.status(400).send({
        message: 'No Comments for Picture.'
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
