import React from "react";
import { directors } from "../data"; 
import './NavBar.css'; 

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1> {/* Heading for the Directors page */}
      {/* Mapping over the directors array */}
      {directors.map(({ name, movies }) => (
        <div key={name}>
          <h2>{name}</h2> {/* Displaying the director's name */}
          <ul>
            {/* Mapping over the movies array of the director */}
            {movies.map(movie => (
              <li key={movie}>{movie}</li> 
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
