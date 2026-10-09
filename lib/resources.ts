/* Regulatory resources listed on /resources.

   HOW TO ADD A RESOURCE
   1. Drop the PDF into public/docs/.
   2. Add an entry below, newest first. Set `href` to "/docs/<filename>.pdf"
      (entries still on "#" have no file yet).
   3. `category` decides which filter it sits under; `tag` is the label shown
      in the Category column. Filter counts and search pick it up automatically.
   `keywords` are extra search terms beyond the visible text. */

export const CATEGORIES = [
  { id: "all", label: "All Resources" },
  { id: "cdsco", label: "CDSCO / India" },
  { id: "eu", label: "EU MDR / IVDR" },
  { id: "fda", label: "US FDA" },
  { id: "iso", label: "ISO Standards" },
  { id: "general", label: "General / Other" },
] as const;

export type CategoryId = Exclude<(typeof CATEGORIES)[number]["id"], "all">;

export type Resource = {
  category: CategoryId;
  tag: string;
  type: string;
  date: string;
  title: string;
  summary: string;
  keywords: string;
  href: string;
};

export const RESOURCES: Resource[] = [
  {
    category: "cdsco",
    tag: "CDSCO",
    type: "Regulation",
    date: "Jun 2025",
    title: "Medical Devices Rules 2017: Consolidated Text",
    summary: "CDSCO consolidated MDR 2017 including all amendments",
    keywords: "Medical Devices Rules 2017 Consolidated CDSCO",
    href: "#",
  },
  {
    category: "cdsco",
    tag: "CDSCO",
    type: "Guidance",
    date: "May 2025",
    title: "Wholesale Licence (MD-42): Application Guidance",
    summary: "Step-by-step checklist for wholesale distributor licence",
    keywords: "Wholesale Licence MD-42 Application Guidance CDSCO",
    href: "#",
  },
  {
    category: "cdsco",
    tag: "CDSCO",
    type: "Checklist",
    date: "May 2025",
    title: "Import Licence (MD-14): Application Checklist",
    summary: "Document requirements for medical device import licence",
    keywords: "Import Licence MD-14 Application Checklist CDSCO",
    href: "#",
  },
  {
    category: "cdsco",
    tag: "CDSCO",
    type: "Guidance",
    date: "Apr 2025",
    title: "Investigational Device Permission (MD-26): Overview",
    summary: "Requirements and pathway under MDR 2017",
    keywords: "Investigational Device Permission MD-26 CDSCO",
    href: "#",
  },
  {
    category: "eu",
    tag: "EU MDR",
    type: "Summary",
    date: "Mar 2025",
    title: "EU MDR 745: Summary of Key Requirements",
    summary: "Overview of essential requirements under EU Medical Device Regulation",
    keywords: "EU MDR 745 Key Requirements Summary",
    href: "#",
  },
  {
    category: "eu",
    tag: "EU IVDR",
    type: "Guidance",
    date: "Feb 2025",
    title: "EU IVDR 746: Classification & Transition Timelines",
    summary: "IVD classification rules and updated transition timeline guidance",
    keywords: "EU IVDR 746 Classification Transition Timelines",
    href: "#",
  },
  {
    category: "eu",
    tag: "EU MDR",
    type: "Guidance",
    date: "Jan 2025",
    title: "Post-Market Surveillance: PMS / PMCF / PSUR Requirements",
    summary: "Practical guidance on post-market obligations under EU MDR",
    keywords: "Post Market Surveillance PMS PMCF PSUR EU MDR",
    href: "#",
  },
  {
    category: "fda",
    tag: "US FDA",
    type: "Guidance",
    date: "Dec 2024",
    title: "US FDA 510(k): Submission Pathway Overview",
    summary: "Key requirements and process for 510(k) premarket notification",
    keywords: "US FDA 510k Submission Pathway Overview",
    href: "#",
  },
  {
    category: "fda",
    tag: "US FDA",
    type: "Summary",
    date: "Nov 2024",
    title: "FDA QMSR / 21 CFR 820: Key Changes Summary",
    summary: "Comparison of QMSR against legacy QSR and ISO 13485 alignment",
    keywords: "FDA QMSR 21 CFR 820 Key Changes Summary",
    href: "#",
  },
  {
    category: "iso",
    tag: "ISO",
    type: "Reference",
    date: "Oct 2024",
    title: "ISO 13485:2016, Key Clauses Reference Guide",
    summary: "Quick reference to clause requirements and audit focal points",
    keywords: "ISO 13485 2016 Key Clauses Reference Guide",
    href: "#",
  },
  {
    category: "iso",
    tag: "ISO",
    type: "Reference",
    date: "Sep 2024",
    title: "ISO 14971: Risk Management for Medical Devices",
    summary: "Overview of risk management process requirements",
    keywords: "ISO 14971 Risk Management Medical Devices",
    href: "#",
  },
  {
    category: "general",
    tag: "General",
    type: "Article",
    date: "Aug 2024",
    title: "Global Regulatory Landscape: Medical Devices 2025",
    summary: "Comparative overview: India, EU, USA, Japan, Brazil regulatory frameworks",
    keywords: "Global Regulatory Landscape Medical Devices 2025",
    href: "#",
  },
];
