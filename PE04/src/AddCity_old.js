import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ setCities }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [population, setPopulation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCities((prevCities) => [...prevCities, { name, country, population }]);
    navigate('/cities');  // Redirect to Cities List
  };

  return (
    <div>
      <h2>Add City</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Country:
          <input value={country} onChange={(e) => setCountry(e.target.value)} required />
        </label>
        <br />
        <label>
          Population:
          <input value={population} onChange={(e) => setPopulation(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
