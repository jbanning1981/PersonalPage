import "./sidebar.scss";
import p1 from "../../assets/LP-Portrait-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="sidebar offcanvas-xl offcanvas-start w-25 border-end shadow"
    >
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
    </div>
  );
};

export default Sidebar;
