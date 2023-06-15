var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors"); // add at the top

var favouritesRouter = require("./routes/favourites");
var usersRouter = require("./routes/users");

var app = express();

app.use(cors()); // add after 'app' is created
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", favouritesRouter); // this gives you a clue for postman
app.use("/api/users", usersRouter);

module.exports = app;

// if you change the name of your routes file to for example favourite.js, then you need to update in the var name line 7 and then line 19 to favouritesRouter
