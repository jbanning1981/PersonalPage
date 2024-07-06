import "./sidebar.scss";
import p1 from "../../assets/Low-Poly-Portrait-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="d-flex d-none d-xl-block align-self-stretch sidebar flex-shrink-0"
    >
      <div className="d-flex w-100 flex-column">
        <div className="p-5"></div>
        <div className="sidebar_photo d-flex justify-content-center pt-5">
          <div id="sidebarPortraitOuterWrapper" className="d-flex rounded-circle p-sm-1 p-xl-4">
          <div
            id="sidebarPortrtaitWrapper"
            className="d-flex rounded-circle p-4"
          >
            <img src={p1} alt="Jim Banning Avatar" className="" />
          </div>
          </div>

        </div>
        <div className="sidebar_content d-flex flex-wrap justify-content-center pt-5">
          <div className="d-flex flex-column text-center w-100">
            <div className="h2">Jim Banning</div>
            <div className="h4 fst-italic">North Texas C#/.NET Dev</div>
          </div>
          <div className="d-flex w-100 justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="p-2">
                <a className="text-dark" href="https://github.com">
                  <FontAwesomeIcon className="fa-3x" icon={faGithub} />
                </a>
              </div>
              <div className="p-2">
                <a className="text-dark" href="https://linkedin.com">
                  <FontAwesomeIcon className="fa-3x" icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
