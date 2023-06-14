import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SavedFavourites from "./components/SavedFavourites";
import JourneyPlanner from "./components/JourneyPlanner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/journeyplanner" element={<JourneyPlanner />} />
        <Route path="/savedfavourites" element={<SavedFavourites />} />
        {/*   <Route path="*" element={<Error404View />} /> */}
      </Routes>

      <p>
        View your <Link to="/savedfavourites">Saved Favourites</Link>!
      </p>
      <p>
        View your <Link to="/journeyplanner">Journey Planner</Link>!
      </p>
    </>
  );
}

export default App;

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

//<NavBar />
//fetch(`api.tfl.gov.uk/Journey/JourneyResults/${postCodeOne}/to/${postCodeTwo}?mode=${mode}&app_key=${API_KEY}`)
