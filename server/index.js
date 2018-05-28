require('dotenv').config();
const express = require('express');
// const massive = require('massive');
const session = require('express-session');
// const bodyParser = require('body-parser');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0')
// const checkForSession = require('../server/middlewares/checkForSessions');


const {
   SERVER_PORT,
   SESSION_SECRET,
//    CONNECTION_STRING,
//    DOMAIN,
//    CLIENT_ID,
//    CLIENT_SECRET,
//    CALLBACK_URL
} = process.env


const app = express();

// massive(CONNECTION_STRING).then(db =>{
//    app.set('db', db)
// })

app.use(express.json()) // same as body-parser

// app.use(session({
//    secret:SESSION_SECRET,
//    resave:false,
//    saveUninitialized:true,
//    cookie:{
//        maxAge:300000,
//        httpOnly: true
//    }
// }))

// app.use(checkForSession)

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(new Auth0Strategy({
//    domain: DOMAIN,
//    clientID: CLIENT_ID,
//    clientSecret: CLIENT_SECRET,
//    callbackURL: CALLBACK_URL,
//    scope: 'openid email profile'
// },
//    function (accessToken, refreashToken, extraParams, profile, done) {
//        const db = app.get('db')
//        db.find_user([profile.id]).then(users => {
//            if (!users[0]) {
//                db.create_user([profile.displayName, profile.id]).then(res => {
//                    return done(null, res[0].auth_id)
//                })
//            } else {
//                return done(null, users[0].auth_id)
//            }
//        })

//    }
// ))

// passport.serializeUser((id, done) => {
//    return done(null, id)
// })

// passport.deserializeUser((id, done) => {
   
//    app.get('db').find_user([id]).then(res => {
       
//        return done(null, res[0])
//    })
// })

// app.get('/auth', passport.authenticate('auth0'))
// app.get('/auth/callback', passport.authenticate('auth0', {
//    successRedirect: `${process.env.HOMEPAGE}#/dashboard`,
//    failureRedirect: `${process.env.HOMEPAGE}`
// }))

app.listen(SERVER_PORT, ()=> console.log(`Cash me @ da pinetree: ${SERVER_PORT}`))