require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "journey_planner", // changed to favourites
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `favourites` was successful!");

    console.log("Closing...");
  });

  con.end();
});

// do I need the helper.js file like jiggy jams -yes
// does this database.js need to be in model? -yes
// do not use to and from database in your init_db file as they are mysql
// If you need to make any changes to the init_db.sql file - then npm run migrate to activate
// It is much easier to change from there
// in the future for numbers e.g. quantity and price have inter then put the currency and metrics in the front end component

// this is the line you have to ensure is correct
/*let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function (err, result)*/

// to name your db journey_planner just give this name on your sql terminal when creating a new database for this project and also add to the .env file where you have DB_NAME

// create the table name in db file
