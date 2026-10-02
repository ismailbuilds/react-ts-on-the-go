import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

const Countries = ({ countriesPromise }: CountriesProps) => {
    const countries = use(countriesPromise)
    console.log(countries)
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    )
}

export default Countries;