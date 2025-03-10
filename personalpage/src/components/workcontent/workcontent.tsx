import "./workcontent.scss";
import companyEntry from "../common/companyEntry";

interface workResults {
  employerData?: Array<companyEntry> | undefined;
}

const WorkContent = ({
  employerData = [] as Array<companyEntry>
}: workResults) => {
    return (
    <>
    {employerData.length > 0 && (
      <>
        <p>I have {employerData.length} work entries to load.</p>
        <div className="card section-border rounded p-0">
            <div className="fs-2 card-header">Work History</div>
            <div className="card-body">
              {}
            </div>
        </div>            
      </>
    )}
    </>
    );
};

export default WorkContent;