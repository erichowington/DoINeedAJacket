import React, { useState } from 'react'
import "./Modal.css";

function Modal({weather}) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }


  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">
        Full Weather Report
    </button>
    
    {modal && (
    <div className='modal'>
        <div 
        onClick={toggleModal}
        className="overlay"></div>
        <ul className="modal-content"><span className='report'>Full Report</span>
            
                <li>{weather.weather[0].description}</li>
                <li>Temperature: {(Math.round(weather.main.temp))}°</li>
                <li>Feels like: {(Math.round(weather.main.feels_like))}°</li>
                <li>High: {(Math.round(weather.main.temp_max))}° </li>
                <li>Low: {(Math.round(weather.main.temp_min))}°</li>
                <li>Humidity: {weather.main.humidity}</li>
                <li>Pressure: {weather.main.pressure} inHg</li>
                <li>Wind:{weather.wind.speed} mph</li>


            
            <button
            className='close-modal'
            onClick={toggleModal}>
                X
            </button>
        </ul>
    </div>
    )}
    </>
  )
}

export default Modal