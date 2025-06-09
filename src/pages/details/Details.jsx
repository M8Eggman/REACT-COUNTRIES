import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details({ allCountries }) {
  const navigate = useNavigate();
  const { countryCode } = useParams();

  const dataCountry = allCountries ? allCountries.find((c) => c.cca3 === countryCode) : null;

  return (
    <>
      {dataCountry && allCountries ? (
        <section className="sectionDetails">
          <button onClick={() => navigate(-1)} className="detailsBackBtn">
            <FontAwesomeIcon icon={faArrowLeft} />
            &nbsp;&nbsp;&nbsp;Back
          </button>
          <div className="details">
            <div className="detailsImg">
              <img src={dataCountry.flags.png} alt="" />
            </div>
            <div className="detailsTexts">
              <div className="detailsTitle">
                <h2>{dataCountry.name.common}</h2>
              </div>
              <div className="detailsDescription">
                <p>
                  <span>Native Name: </span>
                  {dataCountry.name.nativeName ? dataCountry.name.nativeName[Object.keys(dataCountry.name.nativeName)[0]].common : "No native name"}
                </p>
                <p>
                  <span>Population: </span>
                  {dataCountry.population ? dataCountry.population.toLocaleString("en-EN") : "No dataCountry"}
                </p>
                <p>
                  <span>Region: </span>
                  {dataCountry.region ? dataCountry.region : "No region"}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {dataCountry.subregion ? dataCountry.subregion : "No subregion"}
                </p>
                <p>
                  <span>Capital: </span>
                  {dataCountry.capital ? dataCountry.capital.join(", ") : "No capital"}
                </p>
                <p>
                  <span>Top Level Domain: </span>
                  {dataCountry.tld ? dataCountry.tld.join(", ") : "No TLD"}
                </p>
                <p>
                  <span>Currencies: </span>
                  {dataCountry.currencies
                    ? Object.values(dataCountry.currencies)
                        .map((cur) => cur.name)
                        .join(", ")
                    : "No currencies"}
                </p>
                <p>
                  <span>Languages: </span>
                  {dataCountry.languages ? Object.values(dataCountry.languages).join(", ") : "No languages"}
                </p>
              </div>
              <div className="detailsBorderCountries">
                <p>Border Countries: </p>
                {dataCountry.borders
                  ? dataCountry.borders.map((border, i) => {
                      const country = allCountries.find((item) => item.cca3 === border);
                      return (
                        <Link key={i} to={`/${country.cca3}`}>
                          {country.name.common}
                        </Link>
                      );
                    })
                  : "No borders"}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
