import { companies, profile, schools } from "../data";
import { isPresent } from "../dates";

// schema.org Person data that search engines and AI tools read directly.
// https://schema.org/Person
const StructuredData = () => {
  const currentEmployer = companies.find((c) => c.roles.some((r) => isPresent(r.endDate)));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: profile.headline,
    url: profile.siteUrl,
    image: new URL(profile.portraitUrl, profile.siteUrl).href,
    sameAs: [profile.linkedInUrl],
    address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" },
    worksFor: currentEmployer && {
      "@type": "Organization",
      name: currentEmployer.name,
      url: currentEmployer.companyUrl,
    },
    alumniOf: schools.map((s) => ({
      "@type": "CollegeOrUniversity",
      name: s.name,
      url: s.schoolUrl,
    })),
  };

  // Escape "<" so the JSON can never close the script tag early.
  const json = JSON.stringify(person).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
};

export default StructuredData;
