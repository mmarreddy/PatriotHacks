import React from 'react'
import "../index"
import{Link} from "react-router-dom"
import '../index.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-item'>
      <h1 id='logo'>Buyers Guide</h1>
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