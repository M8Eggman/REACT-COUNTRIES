import Cards from '../../components/cards/Cards';
import './home.css'
import { useState } from 'react';
import globe from '../../assets/img/globe.gif'

export default function Home({donnee}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

    const handleSelect = (region) => {
        setSelectedRegion(region);
        setIsOpen(false);
    };
    const [recherche, setRecherche] = useState("")


    const filteredCountries = donnee && selectedRegion !== "Filter by Region" && selectedRegion !== "All"
        ? donnee.filter(country => country.region === selectedRegion)
        : donnee;

    return (
        <>
            <section className='homeContainer'>
                <div className='searchAndFilter'>
                    <div className='searchContainer'>
                        <span>&#128269;</span>
                        <input type="search" placeholder='Search for a country...' onChange={(e)=>{setRecherche(e.target.value)}} />
                    </div>

                    <div className='filterContainer'>
                        <div className='dropdown'>
                            <button onClick={() => setIsOpen(!isOpen)} className='dropdown-button'>
                                {selectedRegion}
                                <span className='arrow'>▾</span>
                            </button>
                            {isOpen && (
                                <ul className='dropdown-menu'>
                                    {regions.map(region => (
                                        <li
                                            key={region}
                                            onClick={() => handleSelect(region)}
                                            className='dropdown-item'
                                        >
                                            {region}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className='cardsContainer'>
                    {!donnee ? (
                        <div className='loadingContainer'>
                            <p className='loadingText'>Loading...</p>
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
