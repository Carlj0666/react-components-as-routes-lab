import React from 'react';
import { directors, movies } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <p>Name: {director.name}</p>
          <ul>
            {director.movies.map(movie => (
              <p>Movie: {movie}</p>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
