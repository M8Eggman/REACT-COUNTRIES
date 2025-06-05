import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home';
import Nav from './components/nav/nav';
import axios from 'axios';


export default function App() {
  const [donnee, setDonnee] = useState(null)
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => setDonnee(response.data))
      .catch((error) => console.log(error)
      )

  },[])

  return (
    <>
      <Nav/>
      <Home donnee ={donnee} />
    </>
  );
}
