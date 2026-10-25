import type { Company } from "../../types";
import { PRESENT, formatMonthYear, getTenure, isPresent, toMonthAttr } from "../../dates";
import "./WorkContent.scss";

interface WorkContentProps {
  companies: Company[];
}

const MonthYear = ({ date }: { date: string }) =>
  isPresent(date) ? PRESENT : <time dateTime={toMonthAttr(date)}>{formatMonthYear(date)}</time>;

const DateRange = ({ start, end }: { start: string; end: string }) => (
  <>
    <MonthYear date={start} /> - <MonthYear date={end} />
  </>
);

const WorkContent = ({ companies }: WorkContentProps) => {
  if (companies.length === 0) {
    return null;
  }

  return (
    <section className="card section-border rounded p-0 shadow" aria-labelledby="work-heading">
      <h2 id="work-heading" className="fs-2 fw-normal lh-base card-header">
        Work History
      </h2>
      <div className="card-body">
        {companies.map((company) => {
          const tenure = getTenure(company.roles);
          return (
            <article className="row align-items-start pb-4" key={company.name}>
              <div className="d-none d-md-block col-auto">
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  width={100}
                  height={100}
                  loading="lazy"
                  className="object-fit-fill square-image"
                />
              </div>
              <div className="col">
                <div className="mb-1 content-title">
                  <h3>
                    <a href={company.companyUrl} target="_blank" rel="noopener">
                      {company.name}
                    </a>
                  </h3>
                  <p className="text-body-secondary mb-0">
                    <DateRange start={tenure.start} end={tenure.end} />
                  </p>
                </div>
                {company.roles.map((role) => (
                  <div className="ps-2" key={`${role.title}-${role.startDate}`}>
                    <div className="py-1">
                      <h4 className="h6">{role.title}</h4>
                      {company.roles.length > 1 && (
                        <p className="text-body-secondary mb-0">
                          <DateRange start={role.startDate} end={role.endDate} />
                        </p>
                      )}
                    </div>
                    <ul>
                      {role.accomplishments.map((accomplishment) => (
                        <li className="py-1" key={accomplishment}>
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WorkContent;
