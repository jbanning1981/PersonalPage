import "./sidebar.scss";
import p1 from "../../assets/LP-Portrait-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="sidebar offcanvas-xl offcanvas-start w-25 border-end shadow sidebar_content"
    >
      <div className="sticky h-20">
        <div className="h-20"></div>
        <div className="row">
          <div className="col">
            <div className="mx-auto d-flex justify-content-center">
              <div
                id="sidebarPortraitOuterWrapper"
                className="w-auto rounded-circle p-2"
              >
                <div id="sidebarPortrtaitWrapper" className="rounded-circle">
                  <img src={p1} alt="Jim Banning Avatar" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <div className="fs-3 fst-italic py-1">Jim Banning</div>
            <div className="fs-5 py-1">North Texas C#/.NET Dev</div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a className="p-2 sidebar-link" href="https://linkedin.com/in/jimbanning" target="_blank">
              <span className="text-decoration-underline pe-2">Find me on LinkedIn</span>
              <FontAwesomeIcon className="fa-2xl" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
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

*/
export default Sidebar;
