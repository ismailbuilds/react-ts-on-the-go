import type { CountryType } from "../../type";
import './country.css'
export interface CountryProps {
    country: CountryType
}

const Country = ({ country }: CountryProps) => {
    
    return (
        <div className="country">
            <h3>{country.name.common}</h3>
        </div>
    )
}

export default Country;