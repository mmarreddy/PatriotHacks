import React from 'react'
import "../index"
import{Link} from "react-router-dom"
import '../index.css'

const Header = () => {
  return (
    <nav className='nav'>
    <h1 >FirstHome</h1>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/loans'>Loan options</Link></li>
        <li><Link to='/mortgage'>Mortgages</Link></li>
        <li><Link to='/paperwork'>Paperwork readiness</Link></li>
    </ul>
  </nav>
  )
}
 

export default Header;