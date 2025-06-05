import './home.css'
import { useState } from 'react';

export default function Home() {
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
                                <ul className='dropdown-menu' >
                                {regions.map((element) => (
                                    <li key={element} className='dropdown-item' onClick={()=>{handleSelect}}>
                                        {element}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
