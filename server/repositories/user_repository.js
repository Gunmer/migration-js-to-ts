'use strict';

let users = [
    { id: 1, name: 'user_1'},
    { id: 2, name: 'user_2'},
    { id: 3, name: 'user_3'},
    { id: 4, name: 'user_4'},
];

const findAll = () => {
  return users;
};

const findById = (id) => {
    return users.find(it => it.id === Number(id));
};

const save = (user) => {
    user.id = users.slice(-1)[0].id + 1;
    users.push(user);
    return user;
};

const deleteById = (id) => {
    let index = users.findIndex(it => it.id === Number(id));
    users.splice(index, 1);
};

module.exports = {
  findAll,
  findById,
  save,
  deleteById
};
