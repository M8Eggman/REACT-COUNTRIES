import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <nav>
      <div className="navTitle">
        <span>Where in the world?</span>
      </div>
      <div className="navOptions">
        <span className="navChangeMode" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faMoonSolid : faMoonRegular} style={{ position: "relative", top: "3px" }} /> 
          &nbsp; Dark Mode
        </span>
      </div>
    </nav>
  );
}

