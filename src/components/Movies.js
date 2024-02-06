import React from "react";
import { movies } from "../data";
import './NavBar.css';

function Movies() {
  return (
  <div>{/*{code here}*/}
      <h1>Movies Page</h1> 
      {movies.map(talkie => (
        <div key={talkie.title}>
          <h2>{talkie.title}</h2>
          <p>Time: {talkie.time}</p>
          <ul>
            {talkie.genres.map(genre =>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
