import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,region,flag}=props.country;
    const handleAddCountry=props.handleAddCountry;
    return (
      
        <div className='country'>
        <h4>Name:{name}</h4>
        <img className='flag-img' src={flag} alt=""/>
        <p><small>populations: {population}</small></p>
        <p>{region}</p>
        <button onClick={()=>handleAddCountry(props.country)}>Country added</button>
        </div>
    );
};

export default Country;