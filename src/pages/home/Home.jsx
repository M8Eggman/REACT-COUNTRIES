import Cards from '../../components/cards/Cards';
import './home.css'
import { useState } from 'react';
import globe from '../../assets/img/globe.gif'

export default function Home({donnee}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    const handleSelect = (region) => {
        setSelectedRegion(region);
        setIsOpen(false);
        
    };

    return (
        <>
            <section className='homeContainer'>
                <div className='searchAndFilter'>
                    <div className='searchContainer'>
                        <span>&#128269;</span>
                        <input type="search" placeholder='Search for a country...' />
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
                    {!donnee? 
                        <div className='loadingContainer'>
                            <p className='loadingText'>Loading...</p>
                            <img src={globe} alt="" style={{width:200}}/>  
                        </div>
                        : <Cards donnee={donnee}/>  
                          
                }
                                         
                </div>

                
            </section>
        </>
    )
}
