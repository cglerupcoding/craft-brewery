const passport = require ('passport');
const user = require ('../models/user');
const config = require ('../config');
const JwtStrategy = require ('passport-jwt').Strategy;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {


// Verify this username and password, call done with user
// if it is correct username and password
// otherwise, call done when false


user.findOne({ email: email}, function(err, user) {
if (err) { return done(err); }
if (!user) { return done (null, false); }
// compare passwords - is 'password' equal to user.password
user.comparePassword(password, function(err, isMatch){
    if (err) { return done(err); }
    if (!isMatch) { return done(null, false); }
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    // see if the user Id in the payload in our db
    // If it does, call 'done with that user
    // otherwise, call done with a user object
    user.findById(payload.subdomains, function(){
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);