import { useState } from "react";
import type { CountryType } from "../../type";
import './country.css'
export interface CountryProps {
    country: CountryType
}

const Country = ({ country }: CountryProps) => {
    
    const[Visited, setVisited] = useState<Boolean>(false)

    const handleVisited =() =>{
        setVisited(!Visited)
    }
    return (
        <div className={`country ${Visited && 'countries-visited'}`}>
            <h3>Common Name: {country.name.common}</h3>
            <h4> Official Name: {country.name.official}</h4>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h4>Population: {country.population.population}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <button onClick={handleVisited}>
                {
                    Visited? "Visited" : "Mark as Visited"
                }
            </button>
        </div>
    )
}

export default Country;