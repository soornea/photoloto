const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContestModel = new Schema({
    title: String,
    description: String,
    startDate: Date,
    endDate: Date,
    userSubmissions: [
        {
            photoUrl: String,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            }

        }
    ]

});

module.exports = mongoose.model('contest', ContestModel);