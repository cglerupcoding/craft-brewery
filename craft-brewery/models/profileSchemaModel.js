//To require our needed dependency
const mongoose = require('mongoose');

//To save a reference to the Schema constructor
const Schema = mongoose.Schema;

//To define the db collection and schema for user Profiles
//Use the Schema constructor to create a new ProfileSchema object
const ProfileSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    name: {
        type: String,
        trim: true,
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function(input) {
                return input.length >= 6;
            }
        ]
    },
    city: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
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

// This creates our model from the above schema, using mongoose's model method
const Profile = mongoose.model("Profile", ProfileSchema);

//To export the Profile model
module.exports = Profile;