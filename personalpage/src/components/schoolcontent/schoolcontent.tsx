import "./schoolcontent.scss";
import schoolEntry from "../common/schoolEntry";
import "../common/apistate";
import apiState from "../common/apistate";

interface schoolResults {
  schoolData?: Array<schoolEntry> | undefined;
}

const SchoolContent = ({
  schoolData = [] as Array<schoolEntry>,
}: schoolResults) => {
  return (
    <>
      {schoolData.length > 0 && (
        <>
          <div className="card section-border rounded p-0">
            <div className="fs-2 card-header">Education</div>
            <div className="card-body">
              {schoolData.map((s,idx) => {
                var schoolKey = 'sch-'+idx;
                return (
                  <div className="row align-items-start pb-4" key={schoolKey}>
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
                        {s.highlights.map((e,idx) =>{
                          return (<li key={schoolKey+'-h-'+idx}>{e}</li>)
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
