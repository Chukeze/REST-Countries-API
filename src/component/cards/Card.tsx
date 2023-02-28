import CountryDetails from '../countryDetails/CountryDetails';
import './../cards/Card.css'
import data from '../../assets/data/default/data.json'

const Card = () => {

  return (
    <div className='card'>
      { data && 
          data.map( (item) => {
            return (
              //pass the data to the prop of the country detail component 
              <CountryDetails
                key={item.name}
                flag={item.flags.svg}
                name={item.name}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            );
          })
      }
      
    </div>
  )
}

export default Card