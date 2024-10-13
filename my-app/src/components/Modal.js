import React from 'react';
import Button from './Button';
import '../pages/styles/modal.css';
const Modal = ({ show, complete, handleClose }) => {
  if (!show) {
    return null;
  }

  const determineMessage = (complete) => {
    let message = '';
    let description = ''
    if(complete){
       message = " You're all set!"
       description = 'Great Job, you have all the documents needed for a loan.'
    }else if(!complete){
       message = "Almost there!"
       description = 'You have a couple more documents you need to gather to be prepared.'
    }
    return (
      <div className="modal-overlay">
      <div className="modal">
        <h2>{message}</h2>
        <p>{description}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
    )
  }

  return (
    <>
   {determineMessage(complete)}
    </>
  );
};

export default Modal;