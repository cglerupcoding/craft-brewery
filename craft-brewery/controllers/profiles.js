//To bring in the Profile mongoose model
const Profile = require("../models/profileSchemaModel");
const express = require("express");
const router = express.Router();

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


router.put('/profiles/:id', function(req, res){
    Profile.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbProfile) {
        res.json(dbProfile);
   });
})


router.post('/profiles', function(req, res){
    Profile.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
})

router.delete('/profiles/:id', function(req, res){
    Profile.remove({ _id: req.params.id }).then(function(dbProfile) {
        res.json(dbProfile);
  });
})


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





