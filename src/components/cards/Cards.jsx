import './cards.css';

export default function Cards({ donnee }) {
  return (
    <div className="cards-grid">
      {donnee.map((country) => (
        <div className="card" key={country.cca3}>
          <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="card-flag" />
          <div className="card-body">
            <h2 className="card-title">{country.name.common}</h2>
            <p>Population: {country.population.toLocaleString('en-EN')}</p>
            <p>Region:{country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
