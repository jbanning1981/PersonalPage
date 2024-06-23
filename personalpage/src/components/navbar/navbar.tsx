import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./navbar.scss";
import portrait from "../../assets/Portrait.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid text-white">
          <div className="navbar-brand">
            <img
              src={portrait}
              alt="Jim Banning Avatar"
              className="rounded-circle"
            />
          </div>
          <div className="fs-2 align-items-center">
            <span>Jim Banning - North Texas C#/.NET Dev</span>
          </div>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="https://github.com">
                  <FontAwesomeIcon className="fa-2xl" icon={faGithub} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://linkedin.com">
                  <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid navbar-footer">
        <span className="p-1"></span>
      </div>
    </>
  );
};

export default Navbar;
