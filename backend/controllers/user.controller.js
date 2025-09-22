const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenSchema = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    // Validate that fullname, fullname.firstname, and fullname.lastname exist
    if (
        !fullname ||
        !fullname.firstname ||
        !fullname.lastname
    ) {
        return res.status(400).json({ error: "Full name (firstname and lastname) is required" });
    }

    try {
        const user = await userService.createUser({
            fullname:{
                firstname: fullname.firstname,
                lastname: fullname.lastname
            },
            email,
            password
        });

        const token = user.generateAuthToken();
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
        return res.status(411).json({ error: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(411).json({ error: 'Invalid email or password' });
    }
    const token = user.generateAuthToken();

    res.status(200).json({ user, token });
}

module.exports.getUserProfile = async (req, res, next) => {

    res.status(200).json({ user: req.user });

}

module.exports.logoutUser = async (req, res, next) => {
    // Get token from cookie or Authorization header
    let token = req.cookies.token;
    if (!token && req.headers['authorization']) {
        // Remove "Bearer " prefix if present
        token = req.headers['authorization'].replace(/^Bearer\s/, '');
    }

    if (!token) {
        return res.status(400).json({ error: 'No token provided for logout.' });
    }

    // Blacklist the token
    await blacklistTokenSchema.create({ token });

    // Clear cookie
    res.clearCookie('token');

    res.status(200).json({ message: 'Logged out successfully.' });
};
