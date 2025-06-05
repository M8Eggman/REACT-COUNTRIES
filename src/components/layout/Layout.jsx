import "Layout.css";
import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
