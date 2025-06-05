import { useEffect } from 'react';
import './App.css'
import Home from './pages/home/Home';
import Nav from './components/nav/nav';


export default function App() {

  return (
    <>
      <Nav/>
      <Home/>
    </>
  );
}
