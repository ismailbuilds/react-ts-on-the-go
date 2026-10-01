import { use } from "react";
import type { CountryType } from "../type";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

const Countries = ({ countriesPromise }: CountriesProps) => {
    const countries = use(countriesPromise)
    console.log(countries)
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
        </div>
    )
}

export default Countries;