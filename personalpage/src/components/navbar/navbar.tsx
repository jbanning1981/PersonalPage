import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./navbar.scss";
import portrait from "../../assets/Low-Poly-Portrait-2.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 p-xl-4 text-white d-flex flex-wrap justify-content-center justify-content-lg-between flex-row px-2">
        <div className="d-flex navbar-brand d-xxl-none">
          <img
            src={portrait}
            alt="Jim Banning Avatar"
            className="rounded-circle"
          />
        </div>

        <div className="d-flex fs-3 d-xxl-none">
          <div className="text-center">
            Jim Banning - North Texas C#/.NET Dev
          </div>
        </div>
        <div className="d-flex ms-lg-auto px-2 d-xxl-none">
          <ul className="navbar-nav flex-row">
            <li className="nav-item px-1 px-lg-0">
              <a className="nav-link text-white" href="https://github.com">
                <FontAwesomeIcon className="fa-2xl" icon={faGithub} />
              </a>
            </li>
            <li className="nav-item px-1 px-lg-0">
              <a className="nav-link text-white" href="https://linkedin.com">
                <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
