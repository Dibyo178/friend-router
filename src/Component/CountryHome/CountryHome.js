import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const CountryHome = () => {
  
   const [countrys,setCountrys] =useState([]);
 console.log(countrys)

   useEffect(() => {
       const url ='https://restcountries.eu/rest/v2/all';
       fetch(url)
       .then(response => response.json())
       .then(data => setCountrys(data))
   },[])

    return (
        <div>
            <h2>Country:{countrys.length}</h2>
            {
                countrys.map(details => <Country key={details.name} country={details}></Country>)
            }
        </div>
    );
};

export default CountryHome;