const router = require('express').Router();
const { addUser, loginUser, pro } = require('../controllers/auth');
const requireLogin = require('../middlewares/requireLogin');

router
    .route('/signup')
    .post(addUser);

router
    .route('/signin')
    .post(loginUser);

module.exports = router;