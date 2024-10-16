import React from 'react'
import "../index"
import{Link} from "react-router-dom"
import { useState } from "react";
import '../index.css'
import logo from '../assets/logo1.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className='header'>
      <div className='header-item'>
      <img src={logo} style={{ paddingTop:'10px', width: '270px', height: '73px' }} alt="Logo" />
      </div>
        <div className='header-item'>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/loans'>Loan options</Link></li>
            <li><Link to='/findHomes'>Find Homes</Link></li>
            <li><Link to='/paperwork'>Paperwork readiness</Link></li>
        </ul>
      </nav>
  </div>
  </div>
  )
}
 

export default Header;