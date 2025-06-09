import "./Layout.css";
import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { useState } from "react";



export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  return (
  <div className={darkMode ? "app dark" : "app"}>
    <Nav darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    <Outlet />
    <Footer />
  </div>
);

}
