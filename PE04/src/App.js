import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import CitiesList from './CitiesList';
import CityDetails from './CityDetails';
import AddCity from './AddCity';
import './App.css';


function App() {
  const [cities, setCities] = useState([
    { name: 'Seattle', country: 'USA', population: '733,919' }
  ]);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Cities Application</h1>
          <nav>
            <Link to="/cities">Cities List</Link> | <Link to="/add-city">Add City</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/cities" element={<CitiesList cities={cities} />} />
          <Route path="/cities/:cityName" element={<CityDetails cities={cities} />} />
          <Route path="/add-city" element={<AddCity setCities={setCities} />} />
          <Route path="/" element={<h2>Welcome to the Cities Application!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
