import React from "react";
import { useState } from 'react';
import Modal from "./Components/Modal/Modal";
import './App.css'
import JacketModal from "./Components/JacketModal/JacketModal"
import RecLinks from "./Components/RecLinks";

const api = {
  key: "db1ac38dac6827d5ace292718e7f7db1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
 const [search, setSearch] = useState('');
 const [weather, setWeather] = useState({});
 const [jacketModalImg, setJacketModalImg] = useState("")

 const searchPressed = () => {
  fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
  .then((res) => res.json())
  .then((result) => {
    setWeather(result)
    console.log(result);
  })
 }

 function handleJacketModal(){
  console.log("Firing")
  if (weather.main?.temp < 25) {
    setJacketModalImg("/images/DINAJ-HEAVY.png")
  } else if (weather.main?.temp < 45) {
    setJacketModalImg("/images/DINAJ-MEDIUM.png")
  } else if (weather.main?.temp < 64) {
    setJacketModalImg("./images/DINAJ-LIGHT.png")
  }
 }

 function handleRecLinks (){
  console.log('working')
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

        {/* Temperature in current city */}
        <p className="temp"> {weather.main?.temp && "It is currently " + (Math.floor(weather.main?.temp)) + '° in'} {weather.name} </p>

      </header>
      <JacketModal  weather={weather} handleJacketModal={handleJacketModal} jacketModalImg={jacketModalImg}/>
      <Modal weather={weather}/>
      <RecLinks handleRecLinks={handleRecLinks}/>
    </div>
  );
}

export default App;
