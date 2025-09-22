const userModel = require('../models/user.model');

module.exports.createUser = async ({

    fullname,
    email,
    password

}) => {
    if (

        !fullname ||

        !fullname.firstname ||

        !fullname.lastname ||

        !email ||

        !password

    ) {
        throw new Error('All fields are required');
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password: hashedPassword
    });

    return user;
};
