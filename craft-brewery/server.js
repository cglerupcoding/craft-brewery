const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const PORT = process.env.PORT || 3001;
const app = express();
const dotenv = require('dotenv').config();
const router = express.Router();
const profileRouter = require('./controllers/profiles');
const eventRouter = require('./controllers/events');
const morgan = require ('morgan');
const http = require ('http');
const Authentication = require("./controllers/authentication.js");


//Require our routes file pass through our router
//require("./config/routes")(router);

//Designate the public folder as a static directory
app.use(express.static("public"));

//To set up mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected, holmes!') },
  err => {console.log('Can not connect to database' + err)}
);

// Define middleware here
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use (bodyParser.json({type: '*/*'}));
app.use (morgan('combined'));


//To have the requests go through the router middleware
app.use(router);

//If deployed, use the deployed database. Otherwise, use the local Mongo database
const db = process.env.MONGODB_URI || "mongodb://localhost/profiledb";

//Connect mongoose to our database
mongoose.connect(db, function(error){
  if(error) {
    console.log(error);
  }
  else{
    console.log("Yay, mongoose connection is lit!");
}
});

//Check with Tyler on this - example showed using bodyParser instead of express - need to know what is correct//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const apiRoutes = require('./controllers/beers-api');
app.use('/api', apiRoutes);
app.use(profileRouter);
app.use(eventRouter);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.post('/signin', Authentication.signin)
app.post('/signup', Authentication.signup)



app.listen(PORT, () => {
  console.log(`🌎 ==> API server is running on port ${PORT}!`);
});