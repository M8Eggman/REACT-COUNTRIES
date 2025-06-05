import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/nav/nav";
import Details from "./pages/details/details";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data[0]))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Nav />
      <Details data={data} />
    </>
  );
}
