const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScema = new Schema({
    username: String,
    googleId: String,
    email: String
});

const User = mongoose.model('user', userScema);
module.exports = User;