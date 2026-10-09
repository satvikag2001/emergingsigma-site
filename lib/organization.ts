// Schema.org description of the practice, embedded on the home and contact pages
// so search engines can show the address, hours and contact details. Keep it in
// step with the footer and contact page when any of those change.
export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://emergingsigma.com/#organization",
  name: "Emerging Sigma Consulting",
  url: "https://emergingsigma.com/",
  logo: "https://emergingsigma.com/assets/logo.png",
  image: "https://emergingsigma.com/assets/og-image.png",
  description:
    "Quality, regulatory and lean digital solutions for medical device companies. ISO 13485, CDSCO MDR 2017, EU MDR/IVDR, US FDA and WHO PQ.",
  slogan: "Turning Your Innovation into Market Access",
  email: "support@emergingsigma.com",
  telephone: "+91-9082657529",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nesco IT Park, Goregaon (East)",
    addressLocality: "Mumbai",
    postalCode: "400063",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "Place",
      name: "European Union",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  knowsAbout: [
    "ISO 13485",
    "CDSCO MDR 2017",
    "EU MDR",
    "EU IVDR",
    "US FDA 21 CFR Part 820",
    "WHO Prequalification",
    "Equipment Qualification",
    "Supplier Quality Management",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-9082657529",
    email: "support@emergingsigma.com",
    availableLanguage: ["en", "hi"],
  },
};

// The principal consultant, embedded on the About page. Every fact here is one
// the About page already states; sameAs ties the site to the same person's
// LinkedIn profile so search engines do not confuse him with namesakes.
const credential = (name: string) => ({
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "certification",
  name,
});

export const PRINCIPAL = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://emergingsigma.com/about#manish-airan",
  name: "Manish Airan",
  jobTitle: "Principal Consultant",
  url: "https://emergingsigma.com/about",
  image: "https://emergingsigma.com/assets/manish-airan.jpg",
  sameAs: ["https://www.linkedin.com/in/manish-airan/"],
  worksFor: { "@id": ORGANIZATION["@id"] },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
    { "@type": "CollegeOrUniversity", name: "IIM Calcutta" },
  ],
  hasCredential: [
    credential("ASQ Certified Manager of Quality / Organizational Excellence (CMQ/OE)"),
    credential("ASQ Certified Six Sigma Black Belt"),
    credential("ISO 13485 and ISO 9001 Lead Auditor"),
    credential("VDA 6.3 Process Auditor"),
  ],
  knowsAbout: ORGANIZATION.knowsAbout,
};

// Names the site itself, which Google uses for the site name shown in results.
export const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://emergingsigma.com/#website",
  name: "Emerging Sigma Consulting",
  url: "https://emergingsigma.com/",
  publisher: { "@id": ORGANIZATION["@id"] },
};

/** A service page described as a service the practice provides. `name` is the page's breadcrumb name. */
export function serviceSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    url: `https://emergingsigma.com${path}`,
    provider: { "@id": ORGANIZATION["@id"] },
    areaServed: ORGANIZATION.areaServed,
  };
}
