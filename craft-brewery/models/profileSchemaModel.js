//To require our needed dependency
const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
//To save a reference to the Schema constructor
const Schema = mongoose.Schema;

//To define the db collection and schema for user Profiles
//Use the Schema constructor to create a new ProfileSchema object
const ProfileSchema = new Schema({
    // username: {
    //     type: String,
    //     trim: true,
    //     required: "Username is Required"
    // },
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    birthdate: {
        type: Date
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        // required: "Password is Required",
        // validate: [
        //     function(input) {
        //         return input.length >= 6;
        //     }
        // ]
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true,
    },
    favorite_beers: {
        type: String,
        trim: true
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});
// on Save Hook, encrypt password
// Before saving a model, run this function
// ProfileSchema.pre('save', function(next) {
//     // get access to the Profile model 
//     const Profile = this;
//     // generate a salt then run callback
//     bcrypt.genSalt(10, function(err, salt){
//         if (err) { return next(err); }
//         // Hash (encrypt) our password using the salt
//         bcrypt.hash(Profile.password, salt, null, function(err, hash){
//             if(err) { return next(err); }
//             // overwrite plain text password with encrypted password
//             Profile.Password = hash;
//             // save the model
//             next();
//         });
//     });
// });

// ProfileSchema.methods.comparePassword = function(candidatePassword, callback) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
//         if (err) { return callback(err); }
//         callback(null, isMatch);
//     });
// }

// This creates our model from the above schema, using mongoose's model method
const Profile = mongoose.model("Profile", ProfileSchema);

//To export the Profile model
module.exports = Profile;