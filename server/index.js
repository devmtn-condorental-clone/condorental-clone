require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
// const checkForSession = require('../server/middlewares/checkForSessions');

app.use(express.json()); // same as body-parser
app.use(cors());

const {
   SERVER_PORT,
   SESSION_SECRET,
   CONNECTION_STRING,
   DOMAIN,
   CLIENT_ID,
   CLIENT_SECRET,
   CALLBACK_URL,
   SUCCESS_REDIRECT,
   FAILURE_REDIRECT
} = process.env

massive(CONNECTION_STRING).then(db =>{
   app.set('db', db)
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET, 
    callbackURL: CALLBACK_URL,
    scope: 'openid profile email'
}, function (accessToken, refreshToken, extraParams, profile, done){
    // db calls
    const db = app.get('db');
    const {id, username, emails} = profile;
    console.log(profile)
    db.find_user([id]).then(users => {
        if(users[0]){
            return done(null, users[0].id)
        }
        else{
            db.create_user([username, id, emails[0].value, admin]).then( createdUser => {
                return done(null, createdUser[0].id)
            }).catch( e => console.log(e))
        }   
    })
}))

passport.serializeUser( (id, done) => {
    console.log(id)
    return done(null, id)
})

passport.deserializeUser( (id, done) => {
    app.get('db').find_session_user([id]).then( user => {
        return done(null, user[0])
    })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: SUCCESS_REDIRECT,         
    failureRedirect: FAILURE_REDIRECT
}))

app.get('/auth/me', function(req, res) {            
    if(req.user){
        // console.log('hitting req.user', req.user)
        res.send(req.user);
    } else {
        // console.log('hitting else')
        res.status(401).send()                       
    }
})

app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect(FAILURE_REDIRECT)
})

app.listen(SERVER_PORT, () => console.log(`Cash me @ da pinetree: ${SERVER_PORT}`))