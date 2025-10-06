const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenSchema = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    const isBlacklisted = await blacklistTokenSchema.findOne({ token: token });
    if (!token || isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted.' });
    } 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } 
    catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
    
}


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    const isBlacklisted = await blacklistTokenSchema.findOne({ token: token });
    if (!token || isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
    }
    catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }

}