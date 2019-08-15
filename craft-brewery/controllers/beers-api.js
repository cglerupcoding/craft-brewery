const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_KEY = process.env.REACT_APP_BREWERYDB_API_KEY;

// router.get('/beers', function(req, res) {
    
//     res.json([
//         { name: 'Blue Moon' },
//         { name: 'FooBeer' }
//     ]);
    
//     // res.send('Hello, this is an app');
// });

//craft brewery location search
router.get('/beer', function(req,res) {
    axios.get(`https://api.brewerydb.com/v2/locations?key=${API_KEY}&locality=${req.params.city}&region=${req.params.state}
    `)
    .then(function(response){
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        res.json(response.data.data);
    })
    .catch(function(err){
        console.log(err);
    });
});
//Local events search






// router.get('/searchBrewery', function(req,res) {
//     axios.get(`https://api.brewerydb.com/v2/locations?key=${API_KEY}&postalCode=76104

//     `)
//     .then(function(response){
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//         res.json(response.data.data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });
// });

// router.get('/randomBrewery', function(req, res) {
//     axios.get(`https://api.brewerydb.com/v2/brewery/random/?key=${API_KEY}`)
//     .then(function(response){
//         console.log(response.data); // ex.: { user: 'Your User'}
//         console.log(response.status); // ex.: 200
//         res.json(response.data.data);
//     })
//     .catch(function(err){
//         console.log(err);
//     });

//     // res.send('Hello, this is an app');
// });

module.exports = router;