const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Minimum 3 characters required"]
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, "Minimum 3 characters required"]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Minimum 5 characters required"]
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, "Minimum 6 characters required"]
    },
    socketId: { 
        type: String
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
};

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
