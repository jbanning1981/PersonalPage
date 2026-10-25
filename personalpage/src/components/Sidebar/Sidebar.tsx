import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../../data";
import "./Sidebar.scss";

// Shown at the xl breakpoint and up; on smaller screens the Navbar shows the same details.
const Sidebar = () => {
  return (
    <aside className="d-none d-xl-block border-end shadow sidebar-content">
      <div className="sticky h-20">
        <div className="h-20"></div>
        <div className="mx-auto d-flex justify-content-center">
          <div className="portrait-outer w-auto rounded-circle p-2">
            <div className="portrait-inner rounded-circle">
              <img src={profile.portraitUrl} alt={`Portrait of ${profile.name}`} width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="fs-3 fw-normal fst-italic py-1 mb-0">{profile.name}</h1>
          <p className="fs-5 py-1 mb-0">{profile.headline}</p>
        </div>
        <div className="text-center">
          <a className="p-2 sidebar-link" href={profile.linkedInUrl} target="_blank" rel="noopener">
            <span className="text-decoration-underline pe-2">Find me on LinkedIn</span>
            <span className="visually-hidden">(opens in a new tab)</span>
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
