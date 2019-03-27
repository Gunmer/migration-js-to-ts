'use strict';

const userRepository = require('../repositories/user_repository');

let getUsers = (req, res) => {
    const users = userRepository.findAll();
    res.send(users);
};

let getUser = (req, res) => {
    const id = req.params.id;
    let user = userRepository.findById(id);
    res.send(user);
};

let saveUser = (req, res) => {
    const user = req.body;
    let newUser = userRepository.save(user);
    res.send(newUser);
};

let deleteUser = (req, res) => {
    const id = req.params.id;
    userRepository.deleteById(id);
    res.status(201).send();
};

module.exports = {
    getUsers,
    getUser,
    saveUser,
    deleteUser,
};
