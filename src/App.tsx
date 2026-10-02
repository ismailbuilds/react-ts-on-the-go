import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './component/Countries/Countries';

const countriesPromise = async ():Promise<CountryType[]> =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}

function App() {

  return (
    <>
      <h2>Welcome to Sajid on the go...</h2>
      <Suspense fallback={<p>Sajid on the loading....</p>}>
          <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
