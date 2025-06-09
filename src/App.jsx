import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home';
import axios from 'axios';
import Layout from './components/layout/Layout';
import { Routes ,Route } from 'react-router-dom';
import Details from './pages/details/Details.jsx';


export default function App() {
  const [donnee, setDonnee] = useState(null)
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3,borders')
      .then((response) => setDonnee(response.data))
      .catch((error) => console.log(error)
      )

  },[])

  return (
    <>
    <Routes>

      <Route path='/' element={<Layout/>} >
        <Route index element={<Home donnee = {donnee} />} />
        <Route path='/:countryCode' element={<Details allCountries={donnee} />} />

      </Route>
    </Routes>


    </>
  );
}
