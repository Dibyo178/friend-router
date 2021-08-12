import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [countryDetail,setCountryDetail] = useState({});
//   console.log(countryDetail)
  const {id}= useParams();

  useEffect(() => {
      const url= `https://restcountries.eu/rest/v2/name/${id}`;

      fetch(url)
      .then(response => response.json())
      .then(data=>setCountryDetail(data[0])) // array index number 0 theke start hoy
  },[])
    return (
        <div>
            <p>Country Details component:{id}</p>
            <img src={countryDetail.flag} alt="" />
            <h3>{countryDetail.name}</h3>
            
        </div>
    );
};

export default CountryDetails;