//To bring in tnhe Profile mongoose model
const Event = require("../models/eventsSchemaModel");
const express = require("express");
const router = express.Router();


router.get('/beer_events/:id', function(req,res){
    Event.find({})
    .then(function(dbEvents){
    //If we were able to successfully find Events, send them back to the client
    res.json(dbEvents);
    })
    .catch(function(err){
    //If an error occurred, send it to the client
    res.json(err);
    });
})

router.put('/beer_events/:id', function(req, res){
    Event.findOneAndUpdate({ _id: req.params.id}, {$set: req.body}, {new: true}).then(function(dbEvents){
        res.json(dbEvents);
    });
})

router.post('/beer_events', function(req, res){
    Event.create(req.body)
    .then(function(dbEvent){
        //If saved successfully, send the new Event document to the client
        res.json(dbEvent);
    })
    .catch(function(err){
       // If an error occurs, send the error to the client
      res.json(err); 
    });
})

router.delete('/beer_events/:id', function(req, res){
    Event.remove({ _id: req.params.id}).then(function(dbEvent){
        res.json(dbEvent);
    });
})

module.exports = router;