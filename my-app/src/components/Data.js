import React, { useEffect, useState } from 'react';

function Data({ location }) {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://zillow-com1.p.rapidapi.com/locationSuggestions?q=${location}`; // Use location from props
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'cf0dca6a52msh56581ed4ce77ddfp11219fjsn6daa4f933d96',
                    'x-rapidapi-host': 'zillow-com1.p.rapidapi.com',
                },
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json(); // Convert to JSON since you're using it as an object
                setSuggestions(result.suggestions || []); // Assuming the response has a `suggestions` key
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (location) {
            fetchData();
        }
    }, [location]); // Trigger the fetch when `location` changes

    return (
        <div className="house-container">
            {suggestions.length > 0 ? (
                suggestions.map((house, index) => (
                    <div className="house-card" key={index}>
                        <h3>{house.name}</h3> {/* Assuming there's a `name` or city property */}
                        <p>{house.region}</p> {/* Adjust based on the actual data fields */}
                    </div>
                ))
            ) : (
                <p>No results found for {location}</p>
            )}
        </div>
    );
}

export default Data;