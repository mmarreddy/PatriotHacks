import React, { useState } from 'react';
import Modal from '../components/Modal'; // Import the Modal component

function Paperwork() {
  // List of required documents for a loan
  const documents = [
    'Proof of Income',
    'Credit Report',
    'Bank Statements',
    'Identification (ID or Passport)',
    'Employment Verification',
    'Tax Returns',
    'Debt Information',
    'Property Appraisal',
  ];

  // State to track checked items
  const [checkedItems, setCheckedItems] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (document) => {
    setCheckedItems((prev) => ({
      ...prev,
      [document]: !prev[document],
    }));
  };

  // Check if all documents are checked
  const allChecked = documents.every((doc) => checkedItems[doc]);

  // Handle submit when all items are checked
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allChecked) {
      setModalOpen(true); // Open the modal
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div>
      <h1>Loan Document Checklist</h1>
      <form onSubmit={handleSubmit}>
        {documents.map((document, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={document}
              checked={checkedItems[document] || false}
              onChange={() => handleCheckboxChange(document)}
            />
            <label htmlFor={document}>{document}</label>
          </div>
        ))}
        <button type="submit" >Check Preparedness</button>
      </form>

      {/* Modal component that shows when all items are checked */}
      <Modal show={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
}

export default Paperwork;