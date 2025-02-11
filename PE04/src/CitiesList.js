import React from 'react';
import { Link } from 'react-router-dom';

function CitiesList({ cities }) {
  return (
    <div>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.name}>
            <Link to={'/cities/${city.name}'}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesList;
