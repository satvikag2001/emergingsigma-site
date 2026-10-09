import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ResourceLibrary from "@/components/ResourceLibrary";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resources | Emerging Sigma Consulting",
  description:
    "Guidance documents, regulatory updates and reference materials covering CDSCO, EU MDR/IVDR, US FDA and ISO standards, curated for medical device professionals.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Resources", href: "/resources" }]} />
      <div className="page-hero">
        <div className="wrap">
          <h1>Regulatory Resources &amp; Updates</h1>
          <p>
            Guidance documents, regulatory updates, and reference materials covering CDSCO, EU
            MDR/IVDR, US FDA, ISO standards and more, curated for medical device and healthcare
            professionals.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <ResourceLibrary />
        </div>
      </section>
    </>
  );
}
