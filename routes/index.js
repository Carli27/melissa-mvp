var express = require("express");
var router = express.Router();
const db = require("../model/helper"); // is this correct? Do I need model if so why?

// save journeys - post/receive
// Not tested on postman
// Not sure what is the / is enough I think so its my local host

router.post("/", async function (req, res, next) {
  console.log("REQ.BODY"); // req.body is an object not needed
  try {
    await db(
      `INSERT INTO favourites (name, from, to, mode, fare, image) VALUES ("${req.body.name}","${req.body.from}","${req.body.to}", "${req.body.mode}", "${req.body.fare}", "${req.body.image}");` // need to pass both values with own brackets and $ seperated by comma
    );
    const result = await db("SELECT * FROM favourties ORDER BY id ASC;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Delete a saved journey
// not tested
// is id correct?
router.delete("/:id", async (req, res, next) => {
  try {
    await db(`DELETE FROM favourites WHERE id = ${req.params.id}`);
    const result = await db("SELECT * FROM favourites ORDER BY id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;

// 1. Do I need users.js?
// 2. What is appropriate name for index.js - maybe favourites?

// need to create post and delete
