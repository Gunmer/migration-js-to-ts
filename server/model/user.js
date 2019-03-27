const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    id: Number,
    name: String,
});

module.exports = mongoose.model('user', userSchema);
