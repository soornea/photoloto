const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// photo url should just be a name
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

const contest = mongoose.model('contest', ContestModel);
module.exports = contest