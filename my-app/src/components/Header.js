import React from 'react'
import "../index"
import{Link} from "react-router-dom"
import '../index.css'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-item'>
      <img src={logo} style={{ width: '200px', height: '115px' }} alt="Logo" />
      </div>
        <div className='header-item'>
        <nav className='nav'>
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