import type { Metadata } from "next";
import Link from "next/link";
import StatNumber from "@/components/StatNumber";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Our Services | Emerging Sigma Consulting",
  description:
    "Regulatory Affairs, Quality Management Systems, Equipment Qualification, Business Process Management, Digitalization and Training for medical device and healthcare organizations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="wrap">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Our Services</span>
          </div>
        </div>
      </div>
      <div className="page-hero">
        <div className="wrap">
          <h1>Our Services</h1>
          <p>
            Nine connected practice areas. Two of them are what most clients come for. The other
            four are usually what makes the first two hold.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">What We Do</span>
            <h2 className="sec-title">Four Practice Areas</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "34px" }}>
              Regulatory approval and the quality system behind it are the core of the work.
              Digitalization and training exist to make both hold without us.
            </p>
          </div>
          <div className="hub-grid fade-up" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">📋</div>
                <h3>Regulatory Affairs</h3>
              </div>
              <div className="hub-body">
                <p>
                  Market entry strategy through to post-market obligations, with India and CDSCO as
                  our primary depth and EU, US and other markets alongside.
                </p>
                <ul>
                  <li>CDSCO MDR 2017 licensing across manufacturing, import, wholesale and test</li>
                  <li>EU MDR 745 and IVDR 746 technical files and CE marking</li>
                  <li>US FDA 510(k), PMA and QMSR compliance</li>
                  <li>WHO PQ, PMDA, ANVISA, Health Canada, BIS certification</li>
                  <li>Clinical investigation and performance evaluation</li>
                  <li>Post-market surveillance, PSUR and licence renewals</li>
                </ul>
                <Link href="/regulatory" className="hub-link">
                  Explore Regulatory Affairs →
                </Link>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">🏆</div>
                <h3>Quality Management</h3>
              </div>
              <div className="hub-body">
                <p>
                  One quality architecture rather than a folder per standard, covering the
                  management system itself and the four areas where it has to hold in practice.
                </p>
                <ul className="hub-subs">
                  <li>
                    <Link href="/quality-management-system">Quality Management System</Link>
                    <span>
                      ISO 13485, MDSAP and CDSCO-aligned systems built to be audited and to be used
                    </span>
                  </li>
                  <li>
                    <Link href="/product-quality">Product Quality Management</Link>
                    <span>
                      Quality decided in development, from NPD through in-process and finished goods
                      control
                    </span>
                  </li>
                  <li>
                    <Link href="/equipment-qualification">Equipment Qualification</Link>
                    <span>DQ, IQ, OQ and PQ, calibration and computerised system validation</span>
                  </li>
                  <li>
                    <Link href="/supplier-quality">Supplier Quality Management</Link>
                    <span>
                      Supplier selection, qualification, performance and capability building
                    </span>
                  </li>
                  <li>
                    <Link href="/warehouse-logistics-quality">Warehouse &amp; Logistics</Link>
                    <span>
                      Receiving, storage, handling and distribution controls that keep material
                      conforming
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">💻</div>
                <h3>Digitalization</h3>
              </div>
              <div className="hub-body">
                <p>
                  Distinguishing process problems from digitalization problems, then taking the
                  second kind from data-backed problem statement to build-ready specification.
                </p>
                <ul>
                  <li>Quality, regulatory, supply chain and operations systems</li>
                  <li>Clickable prototypes before any code is written</li>
                  <li>Build-ready PRDs with data dictionary and acceptance criteria</li>
                  <li>Compliance and data integrity designed in from the start</li>
                </ul>
                <Link href="/digitalization" className="hub-link">
                  Explore Digitalization →
                </Link>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">🎓</div>
                <h3>Training &amp; Development</h3>
              </div>
              <div className="hub-body">
                <p>
                  Four-level curriculum with independent evaluation, a defined pass mark and a
                  retraining loop, because attendance records prove nothing about competence.
                </p>
                <ul>
                  <li>QMS fundamentals through to Six Sigma and DOE</li>
                  <li>Independent competency evaluation with section-wise diagnosis</li>
                  <li>Train-the-trainer for process owners</li>
                  <li>Internal auditor development and regulatory awareness</li>
                </ul>
                <Link href="/training" className="hub-link">
                  Explore Training Programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="stats-bar">
        <div className="wrap">
          <div className="g4">
            <div className="stat">
              <StatNumber target={25} suffix="+" />
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <StatNumber target={10} suffix="+" />
              <span className="stat-label">Global Markets</span>
            </div>
            <div className="stat">
              <StatNumber target={9} />
              <span className="stat-label">Practice Areas</span>
            </div>
            <div className="stat">
              <StatNumber target={12} suffix="+" />
              <span className="stat-label">Standards Covered</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-band">
        <div className="wrap">
          <h2>Not Sure Which Service You Need?</h2>
          <p>
            Most engagements begin with a conversation about the problem rather than the service.
            Describe what is not working and we will tell you where it actually sits.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request a Consultation
            </Link>{" "}
            <a href="tel:+919082657529" className="btn btn-outline">
              Call: +91 9082657529
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
