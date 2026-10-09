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
