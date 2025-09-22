const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/auth.middleware');

const { body } = require('express-validator');
const usercontroller = require('../controllers/user.controller');


router.post('/register',
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('fullname').isLength({ min: 3 }).withMessage('Full name must be at least 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ],
    usercontroller.registerUser
); 


router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    usercontroller.loginUser
);

router.get('/profile',authmiddleware.authUser, usercontroller.getUserProfile);

router.get('/logout', authmiddleware.authUser, usercontroller.logoutUser);

module.exports = router;