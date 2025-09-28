import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./navbar.scss";
import portrait from "../../assets/LP-Portrait-2.png";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="custom-sticky-top">
      <nav className="navbar navbar-expand-lg w-100 text-white d-flex flex-wrap justify-content-center flex-row px-2">
        <div className="p-2 d-none d-lg-block"></div>
        <div className="d-flex navbar-brand d-xl-none">
          <img
            src={portrait}
            alt="Jim Banning Avatar"
            className="rounded-circle"
          />
        </div>

        <div className="d-flex d-xl-none">
          <div className="h3">
            <span className="d-block d-sm-inline">Jim Banning</span><span className="d-none d-sm-inline"> - </span><span>North Texas C#/.NET Dev</span>
          </div>
        </div>
        {/* 
        <!-- This is for future use if I want to add nav items -->
        <div className="d-flex ms-lg-auto px-2 d-xl-none">
          <ul className="navbar-nav flex-row">
          </ul>
        </div> 
        */}
      </nav>
      <div>
        <div className="container-fluid navbar-footer p-1">
          <div className="d-flex justify-content-center">
            <div className="p-1 d-none d-lg-block"></div>
            <div className="p-1 d-xl-none">              
              <a
                className="fs-6 text-white"
                href="https://linkedin.com/in/jimbanning"
                target="_blank"
                rel="noopener"
                title="Jim Banning on LinkedIn"
              >
                <span className="text-decoration-underline">Find me on LinkedIn</span> &nbsp;
                <FontAwesomeIcon className="pe-1" icon={faLinkedin} />
                <FontAwesomeIcon className="" icon={faExternalLink} />
              </a>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
