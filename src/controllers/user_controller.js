'use strict';

//const userRepository = require('../repositories/user_repository');
const UserRepositoryModule = require('../repositories/user.repository');

let userRepository = new UserRepositoryModule.UserRepository();

let getUsers = async (req, res) => {
    const users = await userRepository.findAll();
    res.send(users);
};

let getUser = async (req, res) => {
    const id = req.params.id;
    let user = await userRepository.findById(id);
    res.send(user);
};

let saveUser = async (req, res) => {
    const user = req.body;
    let newUser = await userRepository.save(user);
    res.send(newUser);
};

let deleteUser = async (req, res) => {
    const id = req.params.id;
    await userRepository.deleteById(id);
    res.status(201).send();
};

module.exports = {
    getUsers,
    getUser,
    saveUser,
    deleteUser,
};
