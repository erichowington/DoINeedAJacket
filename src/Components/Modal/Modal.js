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
            
                <li className='paramaters'>{weather.weather[0].description}</li>
                <li className='paramaters'>Temperature</li>
                <li className='response'>{(Math.round(weather.main.temp))}°</li>
                <li className='paramaters'>Feels like</li>
                <li className='response'>{(Math.round(weather.main.feels_like))}°</li>
                <li className='paramaters'>High</li>
                <li className='response'>{(Math.round(weather.main.temp_max))}°</li>
                <li className='paramaters'>Low:</li>
                <li className='response'>{(Math.round(weather.main.temp_min))}°</li>
                <li className='paramaters'>Humidity</li>
                <li className='response'>{weather.main.humidity}</li>
                <li className='paramaters'>Pressure</li>
                <li className='response'>{weather.main.pressure} inHg</li>
                <li className='paramaters'>Wind</li>
                <li className='response'>{weather.wind.speed} mph</li>


            
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