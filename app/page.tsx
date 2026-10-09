import type { Metadata } from "next";
import Link from "next/link";
import StatNumber from "@/components/StatNumber";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/metadata";
import { ORGANIZATION } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Emerging Sigma Consulting | Turning Your Innovation into Market Access",
  description:
    "Turning your innovation into market access. Quality, regulatory and lean digital solutions for medical device companies. ISO 13485, CDSCO MDR 2017, EU MDR/IVDR, US FDA, WHO PQ.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={ORGANIZATION} />
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="wrap hero-content">
          <div className="hero-tag">Medical Device Specialists</div>
          <h1>
            Turning Your Innovation into <span className="hl">Market Access</span>
          </h1>
          <p className="hero-sub">
            Quality, regulatory and lean digital solutions that help medical device companies scale
            with confidence.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn btn-green">
              Explore Our Services
            </Link>{" "}
            <Link href="/contact" className="btn btn-outline">
              Request a Consultation
            </Link>
          </div>
          <div className="hero-pills">
            <span className="hero-pill">Quality Management</span>{" "}
            <span className="hero-pill">Regulatory Affairs</span>{" "}
            <span className="hero-pill">Digitalization</span>{" "}
            <span className="hero-pill">Training &amp; Development</span>
          </div>
        </div>
      </section>
      {/* STATS */}
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
              <StatNumber target={12} suffix="+" />
              <span className="stat-label">Standards Covered</span>
            </div>
            <div className="stat">
              <StatNumber target={100} suffix="%" />
              <span className="stat-label">Tailored Solutions</span>
            </div>
          </div>
        </div>
      </div>
      {/* WHO WE ARE */}
      <section className="sec">
        <div className="wrap">
          <div className="g2" style={{ gap: "64px", alignItems: "center" }}>
            <div className="fade-up">
              <span className="sec-tag">Who We Are</span>
              <h2 className="sec-title">A Specialist Quality &amp; Regulatory Practice</h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "16px" }}>
                Emerging Sigma Consulting is a specialist practice dedicated to Medical Device
                Quality Management and Regulatory Affairs. We serve manufacturers, importers,
                distributors, and healthcare organizations across India and global markets.{" "}
                <strong>
                  You work directly with a senior practitioner of 25 years, not a project team
                </strong>
                , which is why the advice arrives without a layer of translation in between.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Our consulting philosophy centres on building systems that are not just compliant,
                but self-sustaining. Every solution is designed to be lean, digitization-friendly
                and cross-functional, delivering lasting value well beyond our engagement.
              </p>
              <p>
                Quality management is our core practice, covering management systems, product
                quality, supplier quality, warehouse and logistics quality, and equipment
                qualification. Regulatory affairs, digitalization and training sit alongside it,
                each drawing on the same foundation.
              </p>
              <div style={{ marginTop: "28px" }}>
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div
              className="fade-up"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}
            >
              <div
                style={{
                  background: "var(--teal3)",
                  padding: "32px 24px",
                  borderRadius: "var(--r2) 0 0 0",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>🏆</div>
                <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "8px" }}>
                  Quality Management
                </h4>
                <p style={{ color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                  Management systems, product, supplier, warehouse and equipment quality in one
                  architecture
                </p>
              </div>
              <div
                style={{
                  background: "var(--green)",
                  padding: "32px 24px",
                  borderRadius: "0 var(--r2) 0 0",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>📋</div>
                <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "8px" }}>
                  Regulatory Affairs
                </h4>
                <p style={{ color: "rgba(255,255,255,.8)", fontSize: "13px" }}>
                  EU MDR/IVDR, CDSCO, US FDA, WHO PQ: global market entry and compliance
                </p>
              </div>
              <div
                style={{
                  background: "var(--teal2)",
                  padding: "32px 24px",
                  borderRadius: "0 0 0 var(--r2)",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>⚙️</div>
                <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "8px" }}>
                  Smart Systems
                </h4>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: "13px" }}>
                  Lean, digitization-ready frameworks and build-ready specifications for the systems
                  that run them
                </p>
              </div>
              <div
                style={{
                  background: "var(--gray6)",
                  padding: "32px 24px",
                  borderRadius: "0 0 var(--r2) 0",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>🌐</div>
                <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "8px" }}>
                  Global Reach
                </h4>
                <p style={{ color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                  Regulatory expertise across India, EU, USA, Japan, Brazil, Canada and WHO markets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT IS SPECIAL */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="tc fade-up">
            <span className="sec-tag">What Sets Us Apart</span>
            <h2 className="sec-title">Why Choose Emerging Sigma Consulting</h2>
            <div className="divider divider-c"></div>
            <p className="sub" style={{ margin: "0 auto 48px" }}>
              Regulatory documentation and QMS compliance may seem straightforward, yet they are
              highly complex, resource-intensive, and critical to your business. It is always best
              to entrust these to specialists.
            </p>
          </div>
          <div className="g3" style={{ gap: "20px" }}>
            <div className="why-card fade-up">
              <h4>Expert Regulatory Knowledge</h4>
              <p>
                Deep working knowledge across EU MDR/IVDR, US FDA 21 CFR 820/QMSR, CDSCO MDR 2017,
                WHO PQ, PMDA, ANVISA, and Health Canada, covering 10+ global markets.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Tailored, Not Templated</h4>
              <p>
                Every engagement is custom-designed for your organization's specific processes,
                product portfolio, customer base, and regulatory environment. No off-the-shelf
                frameworks.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Self-Sustainable Systems</h4>
              <p>
                QMS and compliance frameworks engineered to operate with minimal external oversight,
                building internal capability, cross-functional ownership, and lasting compliance
                culture.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Smart &amp; Lean by Design</h4>
              <p>
                All quality systems are built lean and digitization-ready from day one, reducing
                documentation burden while maintaining full regulatory compliance and audit
                readiness.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Data-Driven Methodology</h4>
              <p>
                ASQ-certified Six Sigma Black Belt expertise ensures every recommendation is
                grounded in rigorous data analysis, delivering measurable, time-bound outcomes.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>End-to-End Partnership</h4>
              <p>
                From initial gap analysis and regulatory strategy through certification, post-market
                compliance, and continuous improvement. We stay with you throughout the lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES OVERVIEW */}
      <section
        className="sec"
        style={{
          background: "var(--gray1)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-title">One Core Practice, Three Specialist Areas</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "36px" }}>
              Quality management is the centre of what we do, spanning five connected disciplines.
              Regulatory affairs, digitalization and training sit alongside it, each drawing on the
              same foundation.
            </p>
          </div>
          <div className="core-block fade-up">
            <div className="core-head">
              <div className="core-tag">Core Practice</div>
              <h3>Quality Management</h3>
              <p>
                Five connected disciplines built on one architecture. A quality system people
                actually use, extended through the product, the supply base, the warehouse and the
                equipment that makes it all repeatable.
              </p>
            </div>
            <div className="core-subs">
              <Link href="/quality-management-system" className="core-sub">
                <div className="core-sub-ico">🏆</div>
                <h4>Quality Management Systems</h4>
                <p>
                  ISO 13485 QMS development, process architecture, rubric-scored audits and KPI
                  governance.
                </p>
                <span>Explore →</span>{" "}
              </Link>{" "}
              <Link href="/product-quality" className="core-sub">
                <div className="core-sub-ico">🔬</div>
                <h4>Product Quality</h4>
                <p>
                  NPD quality, verification and validation, inspection systems and Six Sigma-led
                  improvement.
                </p>
                <span>Explore →</span>{" "}
              </Link>{" "}
              <Link href="/supplier-quality" className="core-sub">
                <div className="core-sub-ico">🔗</div>
                <h4>Supplier Quality</h4>
                <p>Assessment, monitoring, development and improvement across the supply base.</p>
                <span>Explore →</span>{" "}
              </Link>{" "}
              <Link href="/warehouse-logistics-quality" className="core-sub">
                <div className="core-sub-ico">🏪</div>
                <h4>Warehouse &amp; Logistics</h4>
                <p>
                  Receiving inspection through dispatch, cold chain and transportation validation.
                </p>
                <span>Explore →</span>{" "}
              </Link>{" "}
              <Link href="/equipment-qualification" className="core-sub">
                <div className="core-sub-ico">⚙️</div>
                <h4>Equipment Qualification</h4>
                <p>URS-anchored DQ, IQ, OQ and PQ with full traceability and data integrity.</p>
                <span>Explore →</span>{" "}
              </Link>
            </div>
          </div>
          <div className="alt-grid fade-up">
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">📋</div>
                <h3>Regulatory Affairs</h3>
              </div>
              <div className="hub-body">
                <p>
                  Market entry through to post-market obligations, with India and CDSCO as our
                  primary depth.
                </p>
                <ul>
                  <li>CDSCO MDR 2017 licensing</li>
                  <li>EU MDR 745 and IVDR 746</li>
                  <li>US FDA 510(k), PMA and QMSR</li>
                  <li>WHO PQ, PMDA, ANVISA, BIS</li>
                  <li>Clinical investigation support</li>
                  <li>Post-market surveillance and PSUR</li>
                </ul>
                <Link href="/regulatory" className="hub-link">
                  Explore Regulatory Affairs →
                </Link>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-top">
                <div className="hub-ico">💻</div>
                <h3>Digitalization</h3>
              </div>
              <div className="hub-body">
                <p>
                  Separating process problems from digitalization problems, then taking the second
                  kind from data-backed statement to build-ready specification.
                </p>
                <ul>
                  <li>Quality, regulatory, supply chain and operations</li>
                  <li>Clickable prototypes before any code</li>
                  <li>Build-ready PRDs with acceptance criteria</li>
                  <li>eQMS selection and specification</li>
                  <li>21 CFR Part 11 and data integrity</li>
                  <li>Compliance designed in from the start</li>
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
                  Every improvement you will ever make starts with someone learning something. Four
                  progressive levels across 24 modules.
                </p>
                <ul>
                  <li>Quality basics and QMS fundamentals</li>
                  <li>7 QC tools, FMEA, RCA and 8D</li>
                  <li>SPC, MSA, capability and DOE</li>
                  <li>Six Sigma Green Belt, lean and VSM</li>
                  <li>Internal auditor development</li>
                  <li>Train-the-trainer for process owners</li>
                </ul>
                <Link href="/training" className="hub-link">
                  Explore Training →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* STANDARDS */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="tc fade-up">
            <span className="sec-tag">Our Expertise</span>
            <h2 className="sec-title">Standards &amp; Regulatory Frameworks We Cover</h2>
            <div className="divider divider-c"></div>
          </div>
          <div className="std-grid fade-up" style={{ marginTop: "8px" }}>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 13485:2016 (Medical Device QMS)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU MDR 745 / IVDR 746 (CE Marking)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              US FDA 21 CFR 820 / QMSR
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              CDSCO MDR 2017 (India)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              WHO Prequalification (PQ)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              PMDA (Japan) · ANVISA (Brazil) · Health Canada
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 14971 (Risk Management)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 9001 · IATF 16949 · MDSAP
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              GxP (GMP, GLP, GDP Compliance)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              GAMP 5 · FDA 21 CFR 11 (CSV)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU GMP Annex 1 · WHO TRS 961
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO/IEC 17025 (Testing &amp; Calibration)
            </div>
          </div>
        </div>
      </section>
      {/* CLIENTS */}
      <div className="clients-strip">
        <div className="wrap">
          <div className="clients-head">
            <span className="ch-lbl">Track Record</span>
            <h2>Organizations We Have Worked With</h2>
          </div>
          <div className="wordmarks">
            <div className="wm">
              Transasia
              <small>In Vitro Diagnostics</small>
            </div>
            <div className="wm">
              Packwell
              <small>Packaging</small>
            </div>
            <div className="wm">
              Contura Orthopaedics
              <small>Medical Devices</small>
            </div>
            <div className="wm">
              Solomon &amp; Co
              <small>Legal &amp; Advisory</small>
            </div>
            <div className="wm">
              Husk Power Systems
              <small>Distributed Energy</small>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="cta-band">
        <div className="wrap">
          <h2>Ready to Start Your Compliance Journey?</h2>
          <p>
            Whether you are building a QMS from scratch, preparing for a regulatory submission, or
            optimizing an existing compliance system. We are ready to help.
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
