import { companies, schools } from "../../data";
import SchoolContent from "../SchoolContent/SchoolContent";
import WorkContent from "../WorkContent/WorkContent";

const MainContent = () => {
  return (
    <main className="bg-white flex-grow-1">
      <div className="container-fluid">
        <div className="pt-2">
          <WorkContent companies={companies} />
        </div>
        <div className="pt-5">
          <SchoolContent schools={schools} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
