import React from 'react';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
//   console.log(props)
const history= useHistory();

  const {flag,name,population,region}=props.country;
const handleClick=(countryName) => {
    const url=`/name/${countryName}`;
     history.push(url);
}

    const countryStyle = {
        border: '1px solid purple',
        margin:'20px',
        padding: '20px',
        borderRadius: '20px',
        textAlign: 'center'

    }
    const imgStyle={
        width: '200px'
    }
    return (
        <div style={countryStyle}>
            <img style={imgStyle} src={flag}alt="" />
            <h4>{name}</h4>
             <p>{population}</p>
              <h5>{region}</h5>
              <button onClick={()=>handleClick(name)}>Click me</button>
        </div>
    );
};

export default Country;