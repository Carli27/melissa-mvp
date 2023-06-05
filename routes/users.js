var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


function fetchRoadworks() {
  const apiUrl = 'https://api.tfl.gov.uk/Road/All/Street';
  const apiKey = 'cb0915ef25354ad2b98c3498c2dc85ee';
}



//api.tfl.gov.uk/Journey/JourneyResults/CR78DQ/to/SW23HE?mode=bus&app_key=cb0915ef25354ad2b98c3498c2dc85ee