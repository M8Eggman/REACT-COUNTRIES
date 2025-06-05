import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Details.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Details({ data }) {
  return (
    <>
      <section className="sectionDetails">
        <button className="detailsBackBtn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <div className="details">
            
        </div>
      </section>
    </>
  );
}
