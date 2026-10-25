import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../../data";
import "./Navbar.scss";

// Shown below the xl breakpoint; on wider screens the Sidebar shows the same details.
const Navbar = () => {
  return (
    <header className="custom-sticky-top">
      <div className="navbar w-100 text-white d-flex flex-wrap justify-content-center flex-row px-2">
        <div className="p-2 d-none d-lg-block"></div>
        <div className="d-flex navbar-brand d-xl-none">
          <img src={profile.portraitUrl} alt="" width={60} height={60} className="rounded-circle" />
        </div>

        <div className="d-flex d-xl-none">
          <h1 className="h3">
            <span className="d-block d-sm-inline">{profile.name}</span>
            <span className="d-none d-sm-inline"> - </span>
            <span>{profile.headline}</span>
          </h1>
        </div>
      </div>
      <div className="container-fluid navbar-footer p-1">
        <div className="d-flex justify-content-center">
          <div className="p-1 d-none d-lg-block"></div>
          <div className="p-1 d-xl-none">
            <a
              className="fs-6 text-white"
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener"
              title={`${profile.name} on LinkedIn`}
            >
              <span className="text-decoration-underline">Find me on LinkedIn</span>
              <span className="visually-hidden"> (opens in a new tab)</span> &nbsp;
              <FontAwesomeIcon className="pe-1" icon={faLinkedin} />
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
