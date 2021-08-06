const routes = require('express').Router();
const passport = require('passport');

/**
 *  TODO Starting with session storage - swap with JWT
 */
routes.get('/login', (req, res) => {
    res.send('hi from the login page');
});

routes.get('/auth/google', passport.authenticate('google', {
    scope: ['email', 'profile']
}));

// exchange security code with profileinfo
routes.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.send('redirect intercepted' + req.user);
});

module.exports = routes;


