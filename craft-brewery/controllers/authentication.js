const jwt = require ('jwt-simple');
const config = require ('../config')
const User = require('../models/user');

// payload
function tokenForUser(user) {
    const timestamp= new Date().getTime();
    return jwt.encode ({ sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function (req, res, next){ 
// user has already had their email and password auth'd
// we just need to give them a token
res.send ({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
const email = req.body.email;
const password = req.body.password;

if (!email || !password){
    return res.status(422).send ({ error: 'You must provide email and password'});
}
// Check for Duplicate Email
User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }


// If user exist, return an error
    if (existingUser) {
        return res.status(422).send({ error: 'Email is in use' });
    }
    
// If not a duplicate, create and save user record
const user = new User({
    email: email,
    password: password        
    });

    user.save(function(err) {
        if(err) { return next(err); }

    
// Respond to request indicating user was created
res.json({token: tokenForUser});

        
    });
  });
}