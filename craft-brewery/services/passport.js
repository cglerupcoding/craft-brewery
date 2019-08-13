const passport = require ('passport');
const profile = require ('../models/profileSchemaModel');
const config = require ('../config');
const JwtStrategy = require ('passport-jwt').Strategy;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// create local strategy
const localOptions = { profilenameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {


// Verify this profilename and password, call done with profile
// if it is correct profilename and password
// otherwise, call done when false


profile.findOne({ email: email}, function(err, profile) {
if (err) { return done(err); }
if (!profile) { return done (null, false); }
// compare passwords - is 'password' equal to profile.password
profile.comparePassword(password, function(err, isMatch){
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
    // see if the profile Id in the payload in our db
    // If it does, call 'done with that profile
    // otherwise, call done with a profile object
    profile.findById(payload.subdomains, function(){
        if (err) { return done(err, false); }

        if (profile) {
            done(null, profile);
        } else {
            done(null, false);
        }
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);