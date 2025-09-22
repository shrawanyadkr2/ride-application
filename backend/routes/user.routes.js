const express = require('express');
const router = express.Router();

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

module.exports = router;