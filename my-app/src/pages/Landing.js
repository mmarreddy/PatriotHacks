import React from 'react';
import './styles/home.css';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Infographic from '../components/Infographic';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
          <p style={{paddingLeft:'35px'}}>Our Tools</p>
          <motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible">
            <Link to="/paperwork">
              <Button title="Document Readiness" color="#8F92C6" />
            </Link>            
        </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom={1}>
            <Link to="/loans">
          <Button title="Loan Options" color="#f5d7d7" />
        </Link>            
        </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" custom={2}>
            <Link to="/findHomes">
          <Button title="Find Homes" color="#FFEDCB" />
        </Link>            
        </motion.div>
          </motion.div>
        </div>
      </div>
      <div className='container'>
        <div id="info-section" className='container-item'>
          <h2>Breaking it down..</h2>
          <p>
          Buying your first home can be an overwhelming experience, filled with unfamiliar terms, complex paperwork, and big financial decisions. It’s easy to feel uncertain about where to start or what steps to take next. But don't worry — we’re here to guide you through every step of the process. Expand the infographic to learn the steps. From understanding mortgage options to helping you gather the right documents, we’re committed to making the homebuying journey smoother and less stressful for you. You don’t have to navigate this alone; we’re here to help you make informed decisions and turn your homeownership dreams into reality!
          </p>
        </div>
        <div className='container-item infographic'>
          <Infographic/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;