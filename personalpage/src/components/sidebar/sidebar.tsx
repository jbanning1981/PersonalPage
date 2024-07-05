import "./sidebar.scss";
import p1 from "../../assets/Low-Poly-Portrait-2.png";
import p2 from "../../assets/Cartoon-Portrait-1.png";
import p3 from "../../assets/Cartoon-Portrait-2.png";

const Sidebar = () => {
  return (
    <div
      id="sidebar"
      className="d-flex col-xl-3 align-self-stretch
        offcanvas-md offcanvas-start sidebar flex-shrink-0"
    >
      <div className="d-flex w-100 flex-column">
        <div className="p-5"></div>
        <div className="sidebar_photo d-flex justify-content-center pt-5">
          <div id="sidebarPortrtaitWrapper"className="d-flex rounded-circle p-4">
            <img src={p1} alt="Jim Banning Avatar" className="" />
          </div>
        </div>
        <div className="sidebar_content d-flex justify-content-center pt-5">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
