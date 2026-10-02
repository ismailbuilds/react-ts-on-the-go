import type { CountryType } from "../../type";
import './country.css'
export interface CountryProps {
    country: CountryType
}

const Country = ({ country }: CountryProps) => {
    
    return (
        <div className="country">
            <h3>{country.name.common}</h3>
            <h4>{country.name.official}</h4>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h4>Population: {country.population.population}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <button>Visited</button>
        </div>
    )
}

export default Country;