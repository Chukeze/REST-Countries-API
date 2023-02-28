import React from 'react'
import './countryDetails.css'
import { FC } from 'react';

interface Props {
    flag:string;
    name:string;
    population:number;
    region:string; 
    capital:string | undefined;
    subregion?:string; 
    domain?:string; 
    currency?:string;
    language?:string; 
}
const CountryDetails: FC<Props> = ({ 
        flag,
        name,
        population,
        region, 
        subregion, 
        capital,
        domain,
        currency,
        language,
}) => {
//{{//I assign the values of props to a specific html element}}
        return (
            <>
                <div className="countryFlag">
                    <img src={flag} alt={name} className="countryFlag__image" />
                </div>
                <div className="countryInfo">
                    {domain || currency || subregion || language === (null || undefined) ?(
                        <><p className="countryInfo--name">{name}</p>            
                        <p className="countryInfo--text">Population: <span className='country-info--value'>{population} </span></p>
                        <p className="countryInfo--text">Region: <span className='country-info--value'>{region}</span></p>
                        <p className="countryInfo--text">Capital: <span className='country-info--value'>{capital}</span></p></>
                    ) : (
                        <>
                            <p className="countryInfo--name">{name}</p>            
                            <p className="countryInfo--text">Population: <span className='country-info--value'>{population} </span></p>
                            <p className="countryInfo--text">Region: <span className='country-info--value'>{region}</span></p>
                            <p className="countryInfo--text">Capital: <span className='country-info--value'>{capital}</span></p> 
                            <p className="countryInfo--text">Sub Region: <span className='country-info--value'>{subregion}</span></p>
                            <p className="countryInfo--text">Top Level Domain: <span className='country-info--value'>{domain}</span></p>
                            <p className="countryInfo--text">Currencies: <span className='country-info--value'>{currency}</span></p>  
                            <p className="countryInfo--text">Languages: <span className='country-info--value'>{language}</span></p>
                        </>
                    )}
                </div>
            </>
        )
}

export default CountryDetails