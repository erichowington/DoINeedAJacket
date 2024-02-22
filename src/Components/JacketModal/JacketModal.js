import React, { useState } from 'react'
import "./JacketModal.css";

function Modal({handleJacketModal, jacketModalImg, weather}) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        handleJacketModal()
        setModal(prev => !prev)
    }


  return (
    <>
    <p className="answer" onClick={toggleModal}> {weather.main?.temp < 25? "You're gonna need a winter jacket" 
        : weather.main?.temp < 45? "You could use a medium jacket" 
        : weather.main?.temp < 64? "You're gonna need a light jacket (or a sweatshirt!)"
        :weather.main?.temp >65? "NO JACKET!!":" " } </p>

    {modal && (
        <div className='jacket-modal'>
            <div 
            onClick={toggleModal}
            className="overlay"></div>
            <div className="jacket-modal-content">
            <img className='jacket-img' src={jacketModalImg} />
                <button
                className='close-jacket-modal'
                onClick={toggleModal}>
                    X
                </button>
            </div>
        </div>
    )}
    </>
  )
}

export default Modal