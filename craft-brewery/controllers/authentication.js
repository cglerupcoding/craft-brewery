const jwt = require("jwt-simple");
const config = require("../config");
const Profile = require("../models/profileSchemaModel.js");

// payload
function tokenForProfile(profileSchemaModel) {
    console.log("CREATING JWT");
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: profile.id, iat: timestamp }, config.secret);
}

exports.signin = function (req, res, next) {
    // user has already had their email and password auth'd
    // we just need to give them a token
    res.send({ token: tokenForProifle(req.profile) });
};

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    console.log('SIGNUP');

    if (!email || !password) {
        return res
            .status(422)
            .send({ error: "You must provide email and password" });
    }

    console.log('CHECKING FOR DUPLICATE PROFILE');

    // Check for Duplicate Email
    Profile.findOne({ email: email }, function (err, existingProfile) {
        if (err) {
            return next(err);
        }

        console.log('CHECKING EMAIL');
        
        // If user exist, return an error
        if (existingProfile) {
            console.log('FOUND EMAIL');

            return res.status(422).send({ error: "Email is in use" });
        }

        // If not a duplicate, create and save user record
        const profile = new Profile({
            email: email,
            password: password
        });

        console.log('SAVING PROFILE');

        profile.save(function (err) {

            if (err) {
                console.log('FOUND ERR IN SAVE', err);
                return next(err);
            }
            console.log("PROFILE SAVED, CREATING JWT...");
            // Respond to request indicating user was created
            res.json({ token: tokenForProfile(profile) });
        });
    });
};
