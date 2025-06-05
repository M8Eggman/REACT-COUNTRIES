import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";
import { Link, useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="sectionDetails">
        <button onClick={() => navigate(-1)} className="detailsBackBtn">
          <FontAwesomeIcon icon={faArrowLeft} />
          &nbsp;&nbsp;&nbsp;Back
        </button>
        <div className="details">
          <div className="detailsImg">
            <img src={data?.flags.png} alt="" />
          </div>
          <div className="detailsTexts">
            <div className="detailsTitle">
              <h2>{data?.name.common}</h2>
            </div>
            <div className="detailsDescription">
              <p>
                <span>Native Name: {}</span>
              </p>
              <p>
                <span>Population: {}</span>
              </p>
              <p>
                <span>Region: {}</span>
              </p>
              <p>
                <span>Sub Region: {}</span>
              </p>
              <p>
                <span>Capital: {}</span>
              </p>
              <p>
                <span>Top Level Domain: {}</span>
              </p>
              <p>
                <span>Currencies: {}</span>
              </p>
              <p>
                <span>Languages: {}</span>
              </p>
            </div>
            <div className="detailsBorderCountries">
              <p>Border Countries: </p>
              {data?.borders.map((border, i) => (
                <Link key={i}>{border}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
