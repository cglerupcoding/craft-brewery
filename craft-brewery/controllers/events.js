//To bring in tnhe Profile mongoose model
const Event = require("../models/eventsSchemaModel");
const express = require("express");
const router = express.Router();


router.get('/beer_events/:id', function(req,res){
    Event.find({})
})