const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScema = new Schema({
    username: String,
    googleId: String,
    email: String,
    verified: Boolean,
    submissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'contest',
            default: []
        }
    ]
});

const User = mongoose.model('user', userScema);
module.exports = User;