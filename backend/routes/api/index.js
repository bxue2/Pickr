const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const pictureRouter = require('./pictures.js')
const albumRouter = require('./albums.js')
const commentRouter = require('./comments.js')
const tagRouter = require('./tags.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/pictures', pictureRouter);

router.use('/albums', albumRouter)

router.use('/comments', commentRouter);

router.use('/tags', tagRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });

/** Testing User Auth functions
 * // GET /api/set-token-cookie
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);
 *
 */


module.exports = router;
