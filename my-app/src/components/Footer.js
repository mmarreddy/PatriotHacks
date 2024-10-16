import React from 'react'
import { Link } from 'react-router-dom';
const style1 = {
    display:'flex',
    justifyContent: 'center',
    gap:'5%',
    backgroundColor: '#2E3061',
    color: '#fff'
}


const Footer = () => {
  return (
    <div style={style1} className='footer'>
         2024 Buyer's Guide
        <br></br>Designed for PatriotHacks
        <Link to="/references">References</Link>
    </div>
  )
}

export default Footer