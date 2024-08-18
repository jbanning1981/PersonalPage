import "./sidebar.scss";
import p1 from "../../assets/LP-Portrait-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="sidebar offcanvas-xl offcanvas-start d-flex w-25 border-end shadow"
    >
        <div className="sidebar_content d-flex flex-wrap w-100 flex-column">
          <div className="h-20">{/*Spacing div*/}</div>
          <div className="sidebar_photo d-flex m-4 align-self-center">
            <div
              id="sidebarPortraitOuterWrapper"
              className="d-flex w-auto rounded-circle p-2"
            >
              <div
                id="sidebarPortrtaitWrapper"
                className="d-flex rounded-circle"
              >
                <img src={p1} alt="Jim Banning Avatar" className="" />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column text-center w-100">
            <div className="fs-2 fst-italic py-1">Jim Banning</div>
            <div className="fs-4 py-1">
              North Texas C#/.NET Dev
            </div>
          </div>
          <div className="d-flex w-100 justify-content-center">
            <div className="p-2">
              <a className="text-dark" href="https://github.com/jbanning1981/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="fa-2x" icon={faGithub} />
              </a>
            </div>
            <div className="p-2">
              <a className="text-dark" href="https://www.linkedin.com/in/jimbanning/" target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon className="fa-2x" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>      
    </div>
  );
};

export default Sidebar;
