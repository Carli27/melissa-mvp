import React, { useEffect, useState } from "react"; // rfc to import
import { Link } from "react-router-dom"; // need to import the link

export default function SavedFavourites() {
  const [savedFavourites, setSavedFavourites] = useState([]); //can't have null here need an empty array
  // map can only be used arrays
  // always runs when your pages loads
  // have to call getSavedFavourites as you can't name the same as the state e.g. SavedDFavourites which holding the data
  useEffect(() => {
    getAllJourneys();
  }, []);

  const getAllJourneys = async () => {
    const response = await fetch(`/api`); // is this correct?
    //const response = await fetch(`http://localhost:4000/${id}`);
    const data = await response.json();
    console.log(data);
    setSavedFavourites(data);
  };

  return (
    <div>
      <div>SavedFavourites</div>

      <div className="row">
        {savedFavourites.map((journey) => (
          <div className="col-4 p4" key={journey.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={journey.image} className="card-img-top rounded" />
              <div className="card-body">
                <p className="card-text"> Route: {journey.name}</p>
                <p className="card-text"> Start: {journey.start}</p>
                <p className="card-text"> End: {journey.end}</p>
                <p className="card-text"> Mode:{journey.mode}</p>
                <p className="card-text"> Cost: £{journey.fare}</p>
                {/* how I the decimal place */}
                <Link to={`/api/${journey.id}`}></Link>
                <button>View Directions</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// don't forget to add css line
//questions
// I went to jiggy jams to review and check the front end and it now seems broken?

// what is the psuedo code for saved favourites?

/*
1. state and setter for saved journeys with an empty array  **DONE
2. use effect to get all journey **DONE
3. define the use effect. Which should call a function called getAllJourneys **DONE
4. getAllJourneys should make a fetch request to the get all jams endpoint in the backend (dont need to add http://localhost:4000 as this should be in the vite.config. Just what comes after that. Once you receive the data back (same as in postman) use the json() to parse it into js and finally store the data in the state using the setter **DONE
5. map through the state to display saved journeys **DONE


//QUESTIONS:

putting the code pen code in root didn't work like the lecture but adding to the body it worked 

https://codepen.io/P1N2O/pen/pyBNzX
*/
