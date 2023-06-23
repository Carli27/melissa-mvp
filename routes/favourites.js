var express = require("express");
var router = express.Router();
const db = require("../model/helper"); // is this correct? Do I need model if so why?

// if you change the name of your route to for example favourite.js, then you need to update in the var name line 7 and then line 19 to favouritesRouter

// save journeys - post/receive
// this works in mysql:
// INSERT INTO favourites (name, start, end, mode, fare, image) VALUES ('Test', 'Test', 'Test', 'Test', 155, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1b%2FTransport_for_London_logo_%25282013%2529.svg%2F2560px-Transport_for_London_logo_%25282013%2529.svg.png&tbnid=nTwDqk8tMGHg2M&vet=12ahUKEwjXxNG75MX_AhWgpycCHe_mB_UQMygAegUIARDiAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ATransport_for_London_logo_(2013).svg&docid=YrtJMDf9zn_TCM&w=2560&h=783&q=tfl%20logo&ved=2ahUKEwjXxNG75MX_AhWgpycCHe_mB_UQMygAegUIARDiAQ');
// WORKING
// postman url: http://localhost:4000/api
router.post("/", async function (req, res, next) {
  console.log("REQ.BODY");
  try {
    await db(
      `INSERT INTO favourites (name, start, end, mode, fare) VALUES ("${req.body.name}","${req.body.start}","${req.body.end}", "${req.body.mode}", "${req.body.fare}");` // need to pass both values with own brackets and $ seperated by comma
    );
    const result = await db("SELECT * FROM favourites ORDER BY id ASC;");
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get favourite journey by id
// postman url example change the 1 for relevant ids: http://localhost:4000/api/1
// WORKING
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM favourites WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a saved journey
// postman url (will only work if id is present e.g. 8 doesn't exisit it won't work): http://localhost:4000/api/8
// **WORKING
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

//display all journeys
//postman url: localhost:4000/api (as shown in app.js)
// - / means api
//**WORKING
http: router.get("/", async (req, res) => {
  try {
    let results = await db("SELECT * FROM favourites");
    let journeys = results.data;
    res.send(journeys);
  } catch (err) {
    res.status(500).send({ error: "err.message" });
  }
});

// look at vit config and www make sure you are running on local host relevant to mac 4000 or 5000 windows
// keep app. js clean
// thats why you create a routes folder - index.js would be included
// ensure you check app.js.

// check the quotations

/*
    {
        "id": 16,
        "name": "38",
        "start": "W1D 1BS",
        "end": "E8 2NP",
        "mode": "Bus",
        "fare": 450,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4gDMiyeROxPa3iZJLD-yZ-7XO18EY_wTXOQ&usqp=CAU"
    },
    {
        "id": 17,
        "name": "38",
        "start": "W1D 1BS",
        "end": "E8 2NP",
        "mode": "Bus",
        "fare": 450,
        "image": "https://theaoi.com/wp-content/uploads/2018/02/La_Boca_MTG_300-376x600.jpg"
    },
*/
