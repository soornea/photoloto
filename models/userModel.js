const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    email: String,
    verified: Boolean,
    roles: [String],
    submissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'contest',
            default: []
        }
    ]
});

const User = mongoose.model('user', userSchema);
module.exports = User;