import "./workcontent.scss";
import { companyEntry } from "../common/companyEntry";

interface workResults {
  employerData?: Array<companyEntry> | undefined;
}

const WorkContent = ({
  employerData = [] as Array<companyEntry>,
}: workResults) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const formatter = new Intl.DateTimeFormat(navigator.language, dateOptions);

  const showTimeAtCompany = (c: companyEntry) => {
    let startDate = new Date("2099-01-01");
    let endDate = new Date("1900-01-02");
    let isCurrentEmployer = false;
    c.roles.forEach((r) => {
      try {
        if (r.endDate === "Present") {
          isCurrentEmployer = true;
        } else {
          endDate = new Date(r.endDate);
        }

        const roleStartDate = new Date(r.startDate);

        if (roleStartDate < startDate) {
          startDate = roleStartDate;
        }
      } catch (error) {
        console.error(error);
      }
    });

    const formattedStartDate = formatter.format(startDate);
    const formattedEndDate = isCurrentEmployer ? "Present" : formatter.format(endDate);
    const jobTime = formattedStartDate + " - " + formattedEndDate;
    return jobTime;
  };

  const formatDate = (stringDate : string) => {
    if(typeof stringDate === 'undefined' || stringDate.trim() === '') {
      return '';
    }

    if(stringDate.toLowerCase() === "present") {
      return stringDate;
    }

    return formatter.format(new Date(stringDate));
  }

  return (
    <>
      {employerData.length > 0 && (

          <div className="card section-border rounded p-0 shadow">
            <div className="fs-2 card-header">Work History</div>
            <div className="card-body">
              {employerData.map((s, idx) => {
                return (
                  <div key={"work-" + idx}>
                    <div
                      className="row align-items-start pb-4"
                    >
                      <div className="d-none d-md-block col-auto">
                        <img
                          src={s.logoUrl}
                          alt={s.name + " logo"}
                          className="object-fit-fill square-image"
                        />
                      </div>
                      <div className="col">
                        <div className="mb-1 content-title">
                          <div className="d-flex">
                            <div className="h3">{s.name}</div>
                          </div>
                          <div className="d-flex">
                            <div className="text-body-secondary">    
                                {showTimeAtCompany(s)}
                            </div>                            
                          </div>
                        </div>
                        {/* <div className="mb-1 content-title">{showTimeAtCompany(s)}</div> */}
                        {s.roles.map((r, ridx) => {
                          return (
                            <div className="ps-2" key={"work-"+idx+"-role"+ridx}>
                              
                              <div className="py-1">
                                <div className="h6">{r.title}</div>
                                  {s.roles.length > 1 && (
                                      <div className="text-body-secondary">{formatDate(r.startDate)} - {formatDate(r.endDate)}</div>)}
                              </div>
                              <div>
                                <ul>
                                  {r.accomplishments.map((a,aidx) => {
                                    return <li className="py-1" key={"work-"+idx+"-role"+ridx+"-bp-"+aidx}>{a}</li>;
                                  })}
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

      )}
    </>
  );
};

export default WorkContent;
