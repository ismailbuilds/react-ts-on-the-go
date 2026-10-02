import type { CountryType } from "../../type";

export interface CountryProps {
    country: CountryType
}

const Country = ({ country }: CountryProps) => {
    
    return (
        <div>
            <h3>{country.name.common}</h3>
        </div>
    )
}

export default Country;