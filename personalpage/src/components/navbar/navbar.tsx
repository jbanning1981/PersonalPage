import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./navbar.scss";
import portrait from "../../assets/LP-Portrait-2.png";

const Navbar = () => {
  return (
    <div className="custom-sticky-top">
      <nav className="navbar navbar-expand-lg w-100 p-xl-3 text-white d-flex flex-wrap justify-content-center justify-content-lg-between flex-row px-2">
        <div className="d-flex navbar-brand d-xl-none">
          <img
            src={portrait}
            alt="Jim Banning Avatar"
            className="rounded-circle"
          />
        </div>

        <div className="d-flex fs-3 d-xl-none">
          <div className="text-center">
            Jim Banning - North Texas C#/.NET Dev
          </div>
        </div>
        <div className="d-flex ms-lg-auto px-2 d-xl-none">
          <ul className="navbar-nav flex-row">
            <li className="nav-item px-1 px-lg-0">
              <a className="nav-link text-white" href="https://linkedin.com/in/jimbanning" target="_blank">
                <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
