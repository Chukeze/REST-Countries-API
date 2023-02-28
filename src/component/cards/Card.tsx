import CountryDetails from '../countryDetails/CountryDetails';
import './../cards/Card.css'
import data from '../../assets/data/default/data.json'

const Card = () => {
  return(
    <>
      {data && data.map( (item) =>{
      return(
        <div className='card' key={item.nativeName}>
          <CountryDetails
            key={item.name}
            flag={item.flags.svg}
            name={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        </div>
      );
      })}
    </>
  );
}

export default Card