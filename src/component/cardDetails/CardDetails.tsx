import React from 'react'

const CardDetails = ({flag, name, population, region, 
    subregion, capital, domain, currency, language}) => {

  return (
    <>
        <div className="countryFlag">
            <img src={flag} alt={name} className="countryFlag__image" />
        </div>
        <div className="countryInfo">
            <p className="countryInfo--name">{name}</p>
            <p className="countryInfo--text">Population: <span className='country-info--value'>{population} </span></p>
            <p className="countryInfo--text">Region:<span className='country-info--value'>{region}</span></p>
            <p className="countryInfo--text">Capital:<span className='country-info--value'>{capital}</span></p>
        </div>
    </>
    
  )
}

export default CardDetails