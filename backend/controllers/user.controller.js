const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

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


