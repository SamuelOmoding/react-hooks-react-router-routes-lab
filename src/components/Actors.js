import React from "react";
import { actors } from "../data";
import './NavBar.css';

function Actors() {
  return (
  <div>{/*{code here}*/}
         <h1>Actors Page</h1> 
        {actors.map(actor => (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map(movie =>(
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

export default Actors;
