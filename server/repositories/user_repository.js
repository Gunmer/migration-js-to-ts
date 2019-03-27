'use strict';

const User = require('../model/user');

const findAll = async () => {
    return await User.find().exec()
};

const findById = async (id) => {
    return await User.find({id: id}).exec();
};

const save = async (user) => {
    let allUsers = await findAll();
    let newUser = new User({
        id: allUsers.length,
        name: user.name
    });

    return await newUser.save();
};

const deleteById = async (id) => {
    await User.findOneAndRemove({id: id})
};

module.exports = {
    findAll,
    findById,
    save,
    deleteById
};
