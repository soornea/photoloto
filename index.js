const express = require('express')
const mongoose = require('mongoose');
const passport = require('passport');
require('./authentication/passportConfig');
const keys = require('./config/keys');
const login = require('./routes/authentication');
const cookieSession = require('cookie-session');
const app = express();
const port = process.env.port || 8000;

app.set('view engine', 'ejs')
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.key]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', login);

mongoose.connect(keys.mongodb.connectionUrl, (err, client) => {
    //  console.log(' client ', client)
})

app.get('/home', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})