import React from "react";
import { useState, useEffect } from "react";

export default function JourneyPlanner() {
  //Here I have created 3 state variables.

  //from - where you can set where you will be leaving from - can change
  const [from, setFrom] = useState("");

  //to - where you are going to - can change
  const [to, setTo] = useState("");

  //how I plan to go, e.g bus, train etc. - can change
  //Maybe find a way to exclude how you do not want to go.
  const [mode, setMode] = useState("");
  // Might add one more variable, e.g least walking, least changes

  //This will hold the results of the journey - can change. Null needed so code doesn't break if you don't manage to get any data from api and its a falsey value
  const [journeyResults, setJourneyResults] = useState(null);

  /*   //Stops the page from refreshing itself
    const handleSubmit = (e) => {
      e.preventDefault();
      // Declare API key and make api requests here
    }; */

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiKey = "5dba2769c01848a49c11800402f6dbca";
    // will use in fetch apikey
    fetch(
      `https://api.tfl.gov.uk/journey/journeyresults/${from}/to/${to}?mode=${mode}&apiKey=${apiKey}`
      //example postman https://api.tfl.gov.uk/journey/journeyresults/N98EP/to/N182AH?mode=bus&apiKey=5dba2769c01848a49c11800402f6dbca
    )
      .then((response) => response.json())
      .then((data) => {
        setJourneyResults(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const save = async (journey) => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: journey.name,
        start: from,
        end: to,
        mode: mode,
        fare: 0,
      }),
    });
    const json = await response.json();
    console.log(json);
  };
  //use this to change it when it is done
  /*    useEffect(() => {
      handleSubmit();
    }, [from, to, mode]); */

  return (
    <div className="journey-planner">
      <h1>Journey Planner</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />

        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        {/* use the select so it is a dropdown box */}
        <label htmlFor="mode">Mode:</label>
        <select
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="">Select Mode...</option>
          <option value="bus">Bus</option>
          <option value="tube">Tube</option>
        </select>

        <button type="submit">Plan Journey</button>
      </form>
      {journeyResults && (
        <p> The mode(s) of transport available for this journey are:</p>
      )}
      {journeyResults &&
        /*    <div> The bus number is {journeyResults.lines[0].name}
     </div> */
        //  cant put a p tag before map (&& truthy and falsey value) needs to be in one statement e.g line 84 is where it is

        journeyResults.lines.map((l) => (
          <div key={l.id}>
            <div>{l.name}</div>
            <div>
              The fare is £{journeyResults.journeys[0].fare.totalCost / 100}
            </div>
            <div onClick={() => save(l)} className="pointer">
              ❤️
            </div>
            <br />
            <br />
          </div>
        ))}
    </div>
  );
}

// l is lines and you can view in the console - only can view when you've done a journey
// name is the number of the bus
// divide by 100 as total cost is in pennies

// What to do:
// the website to create tables is:  https://drawsql.app/ - DONE
//columns: name, from, to, mode, fare
// create a table saved journeys - NOT COMPLETE
// create database mysql - DONE
// update read me file - DONE
//back end - incorporate a database to save their fav journeys and keep a history of past journeys. post and delete
// test in postman on local host
// display the data on savedfavourites components - use all the jams as example

// 1. Do I need routes- users.js?
// 2. What is appropriate name for index.js - maybe favourites? router
// 3. index router questions
// 4. Do I need users.js
//5. Do I need the helper.js file in model
//
