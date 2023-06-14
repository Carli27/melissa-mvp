var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

// function fetchRoadworks() {
//   const apiUrl = "https://api.tfl.gov.uk/Road/All/Street"; // this doesn't match the below? Why is it different am I getting same information?
//   const apiKey = "5dba2769c01848a49c11800402f6dbca";
// }

//link for postman
//api.tfl.gov.uk/Journey/JourneyResults/CR78DQ/to/SW23HE?mode=bus&app_key=5dba2769c01848a49c11800402f6dbca

// api link to profile https://api-portal.tfl.gov.uk/profile

// my api key 5dba2769c01848a49c11800402f6dbca
