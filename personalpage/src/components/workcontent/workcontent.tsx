import "./workcontent.scss";
import { companyEntry, job } from "../common/companyEntry";


interface workResults {
  employerData?: Array<companyEntry> | undefined;
}

const WorkContent = ({
  employerData = [] as Array<companyEntry>
}: workResults) => {


    const dateOptions : Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long"
    };
    const formatter = new Intl.DateTimeFormat(navigator.language, dateOptions);



    const showTimeAtCompany = (c : companyEntry) => {
        console.log(c.name);
        let startDate = new Date('2099-01-01');
        let endDate = new Date('1900-01-02');
        let isCurrentEmployer = false;
        c.roles.forEach((r) => {
          try {
            if(r.endDate === "Present") {
              isCurrentEmployer = true;
            } 
            else {
              endDate = new Date(r.endDate);
            }

            const roleStartDate = new Date(r.startDate);
            
            if(roleStartDate < startDate) {
              startDate = roleStartDate;
            }
            
          } catch (error) {
            console.log(error);
          }               
        });
        

        const sd = formatter.format(startDate)
        const ed = (isCurrentEmployer === true ? "Present" : formatter.format(endDate));
        const jobTime  = sd + " - " + ed;
        return jobTime;

    }

    return (
    <>
    {employerData.length > 0 && (
      <>
        <div className="card section-border rounded p-0">
            <div className="fs-2 card-header">Work History</div>
            <div className="card-body">
              {employerData.map((s,idx) => {
                  return(
                  <>
                    <div className="row align-items-start pb-4" key={'work-'+idx}>
                      <div className="d-none d-md-block col-auto">
                        <img src={s.logoUrl} className="object-fit-fill square-image" />
                      </div>
                      <div className="col">
                        
                        <div className="mb-1 content-title">
                          <h3>{s.name}</h3>
                        </div>
                        <div>
                          {showTimeAtCompany(s)}
                        </div>
                        {s.roles.map((r) => {
                          return(
                            <div className="ps-0">
                              <div className="col">
                                {/* {showDate(r)} */}
                              </div>
                              <div className="h5 py-1">{r.title}</div>
                              {/* <div className="h6">{r.startDate} - {r.endDate}</div> */}
                              <div>
                                <ul>
                                  {r.accomplishments.map((a) => {
                                    return(<li className="py-1">{a}</li>)
                                  })}
                                </ul>
                              </div>                                
                            </div>)
                        })}
                      </div>
                    </div>
                  </>)
                })
              }
            </div>
        </div>            
      </>
    )}
    </>
    );
};

export default WorkContent;