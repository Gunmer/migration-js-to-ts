'use strict';

const express = require('express');
const user_controller = require('../controllers/user_controller');

const api = express.Router();

api.get('/user', user_controller.getUsers);
api.get('/user/:id', user_controller.getUser);
api.post('/user', user_controller.saveUser);
api.delete('/user/:id', user_controller.deleteUser);

module.exports = api;
