import { useEffect } from 'react';
import './App.css'
import Home from './pages/home/Home';
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/nav/nav";
import Details from "./pages/details/details";

export default function App() {

  return (
    <>
      <Home/>
    </>
  );
}
