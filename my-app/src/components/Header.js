import React from 'react'
import "../index"
import{Link} from "react-router-dom"
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='header-item'>
      <h1 id='logo'>Buyers Guide</h1>
      <FontAwesomeIcon icon={faHouseChimney} size="2x" style={{color:'f5d7e1'}} />
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