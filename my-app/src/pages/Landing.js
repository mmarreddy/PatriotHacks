import React from 'react';
import './styles/home.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Infographic from '../components/Infographic';
const Home = () => {
  // animation variants
  const textVariants = {
    hidden: { opacity: 1, y: -100 },
    visible: ({ opacity: 1, y: 0 }),   
    transition: {
      delay: 1, 
      ease: "easeIn",
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 }, 
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.5, 
        duration: 0.5,        
        ease: "easeInOut",    
      },
    }),
  };

  return (
    <>
      <div className='container'>
        <div className='container-item'>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span style={{ fontStyle: 'italic', color: 'black' }}>First Time</span> Home
            <br />
            Buyer?
            <br />
            <span style={{ fontStyle: 'italic', color: '#FDCE78' }}>No Worries</span>
          </motion.h2>
        </div>
        <div className='container-item'>
          <p>Our Tools</p>
          <motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible">
              <Button title="Document Readiness" color="#8F92C6" />
            </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom={1}>
              <Button title="Mortgage Calculator" color="#f5d7d7" />
            </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom={2}>
              <Button title="Loan Options & Finder" color="#FFEDCB" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className='container'>
        <div className='container-item'>
          <h2>Breaking it down..</h2>
        </div>
        <div className='container-item'>
          <Infographic/>
        </div>
      </div>
    </>
  );
};

export default Home;