import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ setCities }) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [CityPop, setPopulation] = useState('');
  const navigation = useNavigate();

  const submission = (e) => {
    e.preventDefault();
    setCities((prevCities) => [...prevCities, { name, country, CityPop }]);
    navigation('/cities'); 
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={submission}>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} required />
    
        <br />

          Country:
          <input value={country} onChange={(e) => setCountry(e.target.value)} required />

        <br />

          Population:
          <input value={CityPop} onChange={(e) => setPopulation(e.target.value)} required />
    
        <br />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;