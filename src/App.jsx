import React from "react";
import { useState } from 'react';
import Modal from "./Components/Modal/Modal";
import './App.css'

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
    setWeather(result)
    console.log(result);
  })
 }

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <div className="image-wrapper">
          <div className="DINAJ"></div>
        </div> 

        <div className="instruction">Enter your city below and find out.</div>

        {/* Search Box */}
        <div>
          <input className="prompt" type="text" 
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          />

          <button className="button" onClick={searchPressed}>Search</button>

        </div>
        {/* Answer */}
        <p className="answer"> {weather.main?.temp < 25? "You're gonna need a winter jacket" 
        : weather.main?.temp < 45? "You could use a medium jacket" 
        : weather.main?.temp < 64? "You're gonna need a light jacket (or a sweatshirt!)"
        :weather.main?.temp >65? "NO JACKET!!":" " } </p>

        {/* Temperature in current city */}
        <p className="temp"> {weather.main?.temp && "It is currently " + (Math.floor(weather.main?.temp)) + '° in'} {weather.name} </p>


        {/* Condition (sunny) */}
      </header>
      <Modal weather={weather}/>
    </div>
  );
}

export default App;
