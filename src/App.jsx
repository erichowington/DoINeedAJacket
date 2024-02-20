import React from "react";
import { useState } from 'react';

const api = {
  key: "db1ac38dac6827d5ace292718e7f7db1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
 const [search, setSearch] = useState('');
 const [weather, setWeather] = useState({});

 const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
  .then((res) => res.json())
  .then((result) => {
    setWeather(result);
  })
 }

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather App</h1>

        {/* Search Box */}
        <div>
          <input type="text" 
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}>Search</button>

        </div>
        {/* Location */}
        <p>{weather.name}</p>

        {/* Temperature F/C */}
        <p>{weather.main?.temp}</p>

        {/* Answer */}
        <p> {weather.main?.temp < 25? "GET A BIG JACKET" 
        : weather.main?.temp < 45? "GET A MEDIUM JACKET" 
        : weather.main?.temp < 64? "GET A LIGHT JACKET"
        :weather.main?.temp >65? "NO JACKET!!":"DO I need a JAcket?" } </p>

        {/* Condition (sunny) */}
        <p>Sunny</p>
      </header>
    </div>
  );
}

export default App;
