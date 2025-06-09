import Cards from "../../components/cards/Cards";
import "./home.css";
import { useState } from "react";
import globe from "../../assets/img/globe.gif";

export default function Home({ donnee }) {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("Filter by Region");
  const [recherche, setRecherche] = useState("");

  const handleSelect = (region) => {
    setRegion(region);
    setIsOpen(false);
  };

  const filteredCountries = donnee && region !== "Filter by Region" && region !== "All" ? donnee.filter((country) => country.region === region) : donnee;

  return (
    <>
      <section className="homeContainer">
        <div className="searchAndFilter">
          <div className="searchContainer">
            <span>&#128269;</span>
            <input
              type="search"
              placeholder="Search for a country..."
              onChange={(e) => {
                setRecherche(e.target.value);
              }}
            />
          </div>
          <div className="filterContainer">
            <div className="dropdown">
              <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
                {region}
                <span className="arrow">▾</span>
              </button>
              {isOpen && (
                <ul className="dropdown-menu">
                  {regions.map((region) => (
                    <li key={region} onClick={() => handleSelect(region)} className="dropdown-item">
                      {region}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="cardsContainer">
          {!donnee ? (
            <div className="loadingContainer">
              <p className="loadingText">Loading...</p>
              <img src={globe} alt="" style={{ width: 200 }} />
            </div>
          ) : (
            <Cards donnee={filteredCountries} recherche={recherche} />
          )}
        </div>
      </section>
    </>
  );
}
