import React from 'react';
import { actors, movies } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <p>Actor: {actor.name}</p>
          <ul>
            {actor.movies.map(movie => (
              <li>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
