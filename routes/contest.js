const routes = require('express').Router();
const UserModel = require('../models/userModel');
const ContestModel = require('../models/contestModel');
//1 .create a contest

//2.delete a contest , availble to Admins only

//3. photo submission - if a paid user , proceed to submit a photo

//4. lock & archive a contest - could be done automatic , contest becomes read only

//5. as a user see all current and previous submissions 


routes.get('/', async (req, res) => {
    //TODO chnage to post 
    const user = await UserModel.findById("6111922c8047c5edc0395de9")


    const userSubmission = {
        photoUrl: 'photoloto.com',
        user: user

    }

    const contest = new ContestModel({
        description: 'first room',
        startDate: new Date,
        endDate: new Date(),
        userSubmissions: [userSubmission]
    });



    const result = await contest.save();
    res.send('a new contest was created :' + result);


})

//TODO chnage to post
routes.get('/update', async (req, res) => {
    //TODO chnage to post 
    const user2 = await UserModel.findById("6111922c8047c5edc0395de9")

    console.log('found user XXX ?', user2)
    const userSubmission2 = {
        photoUrl: 'changed-photoloto.com',
        user: user2

    }

    const contest = await ContestModel.findById('611193a5c17108ee8f6e999f')
    contest?.userSubmissions?.push(userSubmission2)


    const result = await contest.save();
    res.send('a new contest was created :' + result);


})


module.exports = routes;