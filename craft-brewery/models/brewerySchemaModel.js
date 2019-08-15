
//To require our needed dependency
const mongoose = require('mongoose');

//To save a reference to the Schema constructor
const Schema = mongoose.Schema;

//To define the db collection and schema for user Profiles
//Use the Schema constructor to create a new ProfileSchema object
const BrewerySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Brewery name is required"
    },
    streetAddress: {
        type: String,
        trim: true,
        required: "Brewery address is required"
    },
    description: {
        type: String,
        trim: true
    
    },
    locality: {
        type: String,
        trim: true
    
    },
    website: {
        type: String,
        trim: true
    },

    
});

//This creates our model from the above Schema, using mongoose's model method
const Brewery = mongoose.model("Brewery", BrewerySchema);

//To export the Event models
module.exports = Brewery;

// ({_id:1, name: "2019 Fort Worth Beer Feast", date: new Date("2019-10-12"), event_type: "Beer Festival", event_time: "1:00 pm - 5:00 pm", event_cost:"$35 gen admisssion, $60 VIP", event_description: "Flying Saucer’s Fort Worth BeerFeast returns to Sundance Square Plaza in the heart of downtown Fort Worth! Get ready for: Sampling of over 120 beers, live music, raffles and more." })