import type { School } from "../../types";

interface SchoolContentProps {
  schools: School[];
}

const SchoolContent = ({ schools }: SchoolContentProps) => {
  if (schools.length === 0) {
    return null;
  }

  return (
    <section className="card section-border rounded p-0 shadow" aria-labelledby="education-heading">
      <h2 id="education-heading" className="fs-2 fw-normal lh-base card-header">
        Education
      </h2>
      <div className="card-body">
        {schools.map((school) => (
          <article className="row align-items-start pb-4" key={school.name}>
            <div className="d-none d-md-block col-auto">
              <img
                src={school.logoUrl}
                alt={`${school.name} logo`}
                loading="lazy"
                className="object-fit-fill"
              />
            </div>
            <div className="col">
              <div className="mb-1 content-title">
                <h3>
                  <a href={school.schoolUrl} target="_blank" rel="noopener">
                    {school.name}
                  </a>
                </h3>
              </div>
              <div className="py-2">
                <h4 className="h5">
                  {school.degreeType} - {school.degree}
                </h4>
              </div>
              <ul>
                {school.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SchoolContent;
