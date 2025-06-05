import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="navTitle">
          <span>Where in the world?</span>
        </div>
        <div className="navOptions">
          <span className="navChangeMode">
            <FontAwesomeIcon icon={faMoonRegular} style={{position:"relative", top:"3px"}}/> Dark Mode
          </span>
        </div>
      </nav>
    </>
  );
}
