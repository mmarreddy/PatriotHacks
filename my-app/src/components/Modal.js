import React from 'react';

const Modal = ({ show, handleClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>You're Prepared!</h2>
        <p>Congratulations, you have all the documents needed for a loan.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;