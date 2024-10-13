import React from 'react'
import Button from './Button';
import { useState } from 'react';
import Data from '../components/Data';
import '../pages/styles/filters.css'
function Filters() {
        //state management
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [zipcode, setZipcode] = useState('');
        const [bedrooms, setBedrooms] = useState('');
        const [allData, setAllData] = useState(null);

        const handleSubmit  = (e) => {
         e.preventDefault();
        const data = {city, state, zipcode, bedrooms};
        setAllData(data);
        };

        return (
         <>
        <form className="form" onSubmit={handleSubmit} >
         <div className='form-items-container'>
          <div className="form-item">
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input type="number" placeholder="1" aria-label="number of bedrooms" min="1" max="6" id="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}/>
          </div>
          <div className="form-item">
            <label htmlFor="city">City:</label>
            <input type="text" placeholder='City' aria-label="City" id="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
          </div>
          <div className="form-item">
            <label htmlFor="state">State:</label>
            <input type="text" placeholder='VA' aria-label="state" id="state" minLength={2} maxLength={2} value={state} onChange={(e) => setState(e.target.value)} required/>
          </div>
          <div className="form-item">
            <label htmlFor="zipcode">Zipcode:</label>
            <input type="text" aria-label="zipcode" minLength={5} maxLength={5} placeholder='12345' id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
          </div>
        <div className= "form-item">
          <Button type="submit" title='Find Homes' color='#f5d7d7'></Button>
        </div>
      </div>
     </form>
     {allData && <Data data={allData} />}
     </>
    );
  }

  export default Filters;
