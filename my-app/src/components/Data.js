import React, { useEffect, useState } from 'react';

function Data({ data }) {
    const { city, state, zipcode, bedrooms } = data;
    const [houses, setHouses] = useState([]);

    // Base URL for the API 
    const baseUrl = 'https://api.rentcast.io/v1/properties';
    const apiKey = process.env.REACT_APP_API_KEY; 
    // Make dynamic URL
    const buildUrl = () => {
        const url = new URL(baseUrl);

        // Required parameters 
        if (city) url.searchParams.append('city', city);
        if (state) url.searchParams.append('state', state);

        // Optional parameters 
        if (zipcode) url.searchParams.append('zipcode', bedrooms);
        if (bedrooms) url.searchParams.append('bedrooms', bedrooms);
        url.searchParams.append('limit', 12); 
        return url;
    };

    //Fetch the data 
    useEffect(() => {
        const fetchData = async () => {
            const url = buildUrl(); 
            try {
                const res = await fetch(url, {
                    headers: {
                        'X-Api-Key': apiKey, 
                        'Accept': 'application/json'
                    },
                });
                const data = await res.json();
                setHouses(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [city, state, zipcode, bedrooms]); 
    //printing results in table format
    return (
        <div className="house-list">
            <table className='house-container'>
                {houses.map((item) => {
                    return (
                        <div className='house-card' key={item.id}>
                                <h3>{item.formattedAddress}</h3>
                                <p>Property Type: {item.propertyType}</p>
                                <p>Bathrooms: {item.bathrooms}</p>
                                <p>Year built: {item.yearBuilt}</p>
                        </div>
                    );
                })}
            </table>
        </div>
    );
}

export default Data;