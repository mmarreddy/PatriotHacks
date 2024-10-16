import React, { useState } from 'react';
import Modal from '../components/Modal'; 
import '../pages/styles/paperwork.css'
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

function Paperwork() {
  // List of required documents for a loan
  const documentCategories = [
    {
      title: 'Identification',
      documents: [
        'ID or passport',
        'Social Security Card',
        'Past few residential addresses',
      ],
    },
    {
      title: 'Proof of Employment',
      documents: [
        'Pay stubs',
        'W-2 tax returns',
      ],
    },
    {
      title: 'Bank Statements (for past 1-2 months)',
      documents: [
        'Checking account  ',
        'Savings account',
        'Debit account',
        'Personal business/income documents'
      ],
    },
    {
      title: 'Investments',
      documents: [
        'Investment, retirement, trust, and any other financial account statements',
        'Vehicle ownership information'
      ],
    },
    {
      title: 'Debts',
      documents: [
        'Student, credit, or any other loan related statements',
      ],
    },
  ];

  const checkListVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75, // Increase duration for a slower effect
        ease: [0.68, -0.55, 0.27, 1.55], 
    }
  }
  }

//Checking and unchecking state
  const [checkedItems, setCheckedItems] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

//checking action
  const handleCheckboxChange = (document) => {
    setCheckedItems((prev) => ({
      ...prev,
      [document]: !prev[document],
    }));
  };


  const allChecked = Object.keys(checkedItems).length === 
  documentCategories.reduce((sum, category) => sum + category.documents.length, 0) &&
  Object.values(checkedItems).every(checked => checked);


  const handleSubmit = (e) => {
    e.preventDefault();
      setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <>
    <div>
    <motion.div variants={checkListVariant} initial="hidden" animate="visible"  >
      <h2 style={{textAlign:'center'}}>Drowning in Documents?...Lets Break it down</h2>
      <p style={{padding:'0px 200px 0px 200px'}}>The homebuying process can be an exciting yet complex journey, requiring you to be well-prepared with a variety of paperwork and documents. Don't be overwhelming just yet, there’s no need to stress. We’ve created a detailed checklist to help you navigate through these requirements with clarity.
      This resource will make it easier for you to stay organized. Refer to the checklist below to ensure you have everything ready for a smooth homebuying experience!</p>
    </motion.div>
      <form 
      className='checkList' 
      onSubmit={handleSubmit}
      >
        {documentCategories.map((category, index) => (
          <div key={index}>
            <h3>{category.title}</h3>
            {category.documents.map((document, docIndex) => (
              <div key={docIndex}>
                <input
                  type="checkbox"
                  id={document}
                  checked={checkedItems[document] || false}
                  onChange={() => handleCheckboxChange(document)}
                />
                <label htmlFor={document}>{document}</label>
              </div>
            ))}
          </div>
        ))}
        <Button title="Check Preparedness" color="#fff" type='submit'/>
      </form>

      <Modal show={isModalOpen} complete={allChecked} handleClose={handleCloseModal} />
    </div>
          <Footer/>
          </>
  );
}

export default Paperwork;