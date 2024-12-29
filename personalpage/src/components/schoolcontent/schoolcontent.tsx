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
  return (
    <>
      {apiState.isLoaded(loadState) && (
        <>
          <div className="card section-border rounded p-0">
            <div className="fs-2 card-header">Education</div>
            <div className="card-body">
              {schoolData.map((s) => {
                return (
                  <div className="row align-items-start pb-4">
                    <div className="col-auto">
                      <img src={s.logoUrl} className="object-fit-fill" />
                    </div>
                    <div className="col">
                      <div className="pb-1 content-title">
                        <h3>{s.name}</h3>
                      </div>
                      <div className="py-2">
                        <h5>
                          {s.degreeType} - {s.degree}
                        </h5>
                      </div>
                      <div>
                        <ul>
                        {s.highlights.map((e) =>{
                          return (<li>{e}</li>)
                        })}
                        </ul>
                        
                      </div>
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
