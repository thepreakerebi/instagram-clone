const router = require('express').Router();
const { createPost, allPosts, userPosts } = require('../controllers/post');
const requireLogin = require('../middlewares/requireLogin');

router
    .route('/posts')
    .get(allPosts)

router
    .route('/createpost')
    .post(requireLogin, createPost);

router
    .route('/myposts')
    .get(requireLogin, userPosts);

module.exports = router;