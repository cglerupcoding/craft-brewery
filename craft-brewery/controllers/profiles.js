//To bring in the Profile mongoose model
const Profile = require("../models/profileSchemaModel");
const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const config = require("../config");

router.get('/profiles/:id', function(req, res){
    Profile.findOne({ _id: req.params.id })
	.then(function(dbProfile) {
	// If we were able to successfully find a Profile with the given id, send it back to the client
	res.json(dbProfile);
	})
	.catch(function(err) {
	// If an error occurred, send it to the client
	res.json(err);
});
})

// payload
function tokenForProfile(profile) {
  console.log("CREATING JWT");
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: profile.id, iat: timestamp }, config.secret);
}

router.put('/profiles/:id', function(req, res){
    Profile.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbProfile) {
        res.json(dbProfile);
   });
})


router.post('/profiles', function(req, res){
    console.log('HIT PROFILES ROUTE');
    const email = req.body.email;
	const password = req.body.password;
	const city = req.body.city;
	const state = req.body.state;
	const favorite_beers = req.body.favorite_beers;
	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const birthdate = req.body.birthdate;
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
			password: password,
			state: state,
			favorite_beers: favorite_beers,
			birthdate: birthdate,
			city: city,
			first_name: first_name,
			last_name: last_name
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
    // Profile.create(req.body)
    // .then(function(dbProfile) {
    //   // If saved successfully, send the the new User document to the client
    //   res.json(dbProfile);
    // })
    // .catch(function(err) {
    //   // If an error occurs, send the error to the client
    //   res.json(err);
    // });
})

// router.delete('/profiles/:id', function(req, res){
//     Profile.remove({ _id: req.params.id }).then(function(dbProfile) {
//         res.json(dbProfile);
//   });
// })

// GET /logout
router.get('/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });


module.exports = router;




// module.exports = {
    
//     get: function(query, cb) {
//         Profile.find(query)
//         .sort({
//             _id: -1
//         })
//         .exec(function(err, doc){
//             cb(doc);
//         });
//     },
//     delete: function(query, cb) {
//         Profile.remove(query, cb);
//     },





