import "./schoolcontent.scss";
import Ischool from "../common/school";
import "../common/apistate";
import apiState from "../common/apistate";

interface schoolResults {
  loadState: string;
  schoolData?: Array<Ischool> | undefined;
}

const SchoolContent = ({
  loadState,
  schoolData = [] as Array<Ischool>,
}: schoolResults) => {
  console.log(loadState);
  console.log(schoolData);

  return (
    <>
      {apiState.isLoaded(loadState) && (
        <>
          <div className="card section-border rounded p-0">
            <div className="fs-2 card-header">Education</div>
            <div className="card-body">
              <p>
                This is a school entry. I have {schoolData.length} entries to
                display.
              </p>
              {schoolData.map((s) => {
                return (
                  <div className="row">
                    <div className="col-1">
                        <img src={s.logoUrl} className="p-2"/>
                    </div>
                    <div className="col">
                      <span>{s.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SchoolContent;
