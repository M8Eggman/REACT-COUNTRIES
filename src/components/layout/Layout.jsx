import "./Layout.css";
import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";


export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
