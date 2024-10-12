import React from 'react'
import { useState } from 'react';
import Data
 from '../components/Data';
function Mortgage() {
    const [location, setLocation] = useState('');
    const [submittedLocation, setSubmittedLocation] = useState(''); // state for the submitted location
   const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedLocation(location); // Update this when the form is submitted
    };

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form-items">
        <label htmlFor="name">Location:</label>
        <input type="text" placeholder='Location' id="location" aria-label="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} required/>
    </div>
    <button type="submit">Search Houses</button>
    </form>
    {submittedLocation && <Data location={submittedLocation} />} 
  
  </>
  );
}

export default Mortgage;