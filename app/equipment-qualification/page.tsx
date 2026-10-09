import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Equipment Qualification | Emerging Sigma Consulting",
  description:
    "URS-anchored equipment qualification. DQ, IQ, OQ, PQ protocols with full traceability, data integrity and cybersecurity coverage. GAMP 5, 21 CFR 11, ISO 13485.",
  path: "/equipment-qualification",
});

export default function EquipmentQualificationPage() {
  preloadHero("hero-equipment");

  return (
    <>
      <JsonLd data={serviceSchema("Equipment Qualification", "/equipment-qualification")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Equipment Qualification", href: "/equipment-qualification" },
        ]}
      />
      {/* ═══ HERO ═══ */}
      <section className="eq-hero">
        <div className="eq-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Equipment Qualification
          </div>
          <h1>
            Smarter Equipment Qualification <span className="hl">Starts Before Procurement</span>
          </h1>
          <p className="lead">
            Most qualification issues originate long before IQ/OQ/PQ. We define the right User
            Requirements upfront, creating a lean, traceable qualification strategy that ensures
            equipment{" "}
            <strong>
              performs as intended, meets regulatory and audit compliance, minimizes rework
            </strong>
            , and <strong>accelerates implementation</strong>.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#challenges" className="btn btn-green">
              See the 8 Failure Points
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Equipment
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="12" cy="12" r="1.2" fill="#8ede3a" stroke="none" />
                  <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Right Requirements
                <br />
                from the Start
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21h18" />
                  <rect x="4.5" y="13" width="3.2" height="6" />
                  <rect x="10.4" y="9.5" width="3.2" height="9.5" />
                  <rect x="16.3" y="15" width="3.2" height="4" />
                  <path d="M14.5 6.5h5v5" strokeWidth="1.6" />
                  <path d="M9 11.5l4-4.5 6.5-.5" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Reliable Equipment
                <br />
                Performance
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.5l7.5 3v6c0 4.6-3.1 8.6-7.5 10-4.4-1.4-7.5-5.4-7.5-10v-6z" />
                  <path d="M8.7 12l2.3 2.3 4.3-4.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Regulatory &amp; Audit
                <br />
                Compliance
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <circle cx="13.5" cy="12" r="7.5" />
                  <path d="M13.5 8v4l2.8 1.8" />
                  <path d="M4 8.5h4.5M2.5 12h4M4 15.5h4.5" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Less Rework.
                <br />
                Faster Implementation.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ CHALLENGES ═══ */}
      <section className="sec" id="challenges">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">The Reality on the Ground</span>
            <h2 className="sec-title">Why Equipment Qualification Goes Wrong</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "770px", marginBottom: "44px" }}>
              Qualification is often treated as documentation completed after the machine is already
              on the floor. By that point every meaningful opportunity to influence the outcome has
              passed. These are the eight failures we see repeatedly across manufacturing sites.
            </p>
          </div>
          <div className="chal-grid">
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">1</div>
                <h4>Quality is engaged after the equipment arrives</h4>
              </div>
              <p>
                The purchase order is closed, the design is frozen, the machine is on site.
                Qualification becomes an exercise in documenting whatever was delivered rather than
                verifying what was required.
              </p>
              <div className="chal-cost">⚠ Design gaps become permanent constraints</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">2</div>
                <h4>There is no user requirement baseline</h4>
              </div>
              <p>
                Equipment is bought against a supplier quotation and a technical datasheet. When an
                auditor asks what the equipment was specified to do, nothing exists that predates
                the equipment itself.
              </p>
              <div className="chal-cost">⚠ No defensible basis for acceptance</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">3</div>
                <h4>Supplier protocols are accepted as the qualification</h4>
              </div>
              <p>
                The vendor provides IQ and OQ documents. These are written to demonstrate that their
                machine functions. They are not written to verify your process, your product CTQs,
                or your regulatory obligations.
              </p>
              <div className="chal-cost">⚠ The wrong things get tested</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">4</div>
                <h4>Traceability between stages is broken</h4>
              </div>
              <p>
                DQ, IQ, OQ and PQ sit as four unconnected documents. No requirement can be followed
                from origin through design review to final performance verification. Auditors cannot
                follow it, and neither can the team.
              </p>
              <div className="chal-cost">⚠ Audit findings with no defence</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">5</div>
                <h4>Software, data and cybersecurity are out of scope</h4>
              </div>
              <p>
                Modern equipment carries HMI screens, recipe management, user access levels, audit
                trails and network connectivity. Most protocols still test it as a mechanical asset.
                Electronic records, signatures and data integrity go unverified.
              </p>
              <div className="chal-cost">⚠ 21 CFR Part 11 exposure</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">6</div>
                <h4>PQ never reaches actual performance</h4>
              </div>
              <p>
                Performance Qualification repeats Operational Qualification under ideal conditions.
                Capacity, throughput, process capability and measurement system performance under
                real production load are never established.
              </p>
              <div className="chal-cost">⚠ Capability discovered in production</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">7</div>
                <h4>Every machine has a different protocol format</h4>
              </div>
              <p>
                Formats vary by supplier, by engineer, by year. Review takes longer, gaps stay
                invisible, and nothing learned on one qualification carries across to the next.
              </p>
              <div className="chal-cost">⚠ No organizational learning</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">8</div>
                <h4>Post-installation obligations are undefined</h4>
              </div>
              <p>
                Training, spares, calibration, preventive maintenance, service response times and
                end-of-life decommissioning are not specified at purchase. They are negotiated
                later, from a weak position, at a higher price.
              </p>
              <div className="chal-cost">⚠ Lifetime ownership cost escalates</div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ IMAGE SPLIT ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="img-split fade-up">
            <div
              className="img-split-photo"
              style={{ backgroundImage: "url('/assets/img/equipment-split.webp')" }}
            ></div>
            <div className="img-split-body">
              <span className="sec-tag" style={{ color: "#a8e063" }}>
                The Turning Point
              </span>
              <h2>Start Before the Enquiry Goes Out</h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "14px" }}>
                The single highest-leverage intervention in equipment qualification costs almost
                nothing: writing down what the equipment must achieve before you ask anyone to quote
                for it.
              </p>
              <p style={{ marginBottom: "14px" }}>
                A properly constructed User Requirement Specification changes the commercial
                conversation. Suppliers respond to your requirements rather than presenting their
                standard offering. Gaps surface during design review while they are still negotiable
                rather than during a regulatory audit two years later.
              </p>
              <p style={{ margin: "0" }}>
                Everything downstream becomes simpler because there is a fixed reference point to
                verify against.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ PURPOSE ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="tc fade-up">
            <span className="sec-tag" style={{ justifyContent: "center" }}>
              Why It Matters
            </span>
            <h2 className="sec-title">Equipment Qualification Serves Two Masters</h2>
            <div className="divider divider-c"></div>
            <p className="sub" style={{ margin: "0 auto 40px" }}>
              Qualification is frequently framed as a regulatory obligation alone. Done properly, it
              returns equal value to the business.
            </p>
          </div>
          <div className="purpose-grid fade-up">
            <div className="purpose-col reg">
              <div className="purpose-ico">🛡️</div>
              <h3>Regulatory Purpose</h3>
              <div className="p-sub">Compliance and Patient Safety</div>
              <ul>
                <li>Compliance to applicable regulatory requirements</li>
                <li>Patient and operator safety assurance</li>
                <li>Production quality assurance</li>
                <li>Conformance during audits and inspections</li>
                <li>Risk management and mitigation</li>
                <li>Data integrity across the equipment lifecycle</li>
              </ul>
            </div>
            <div className="purpose-col biz">
              <div className="purpose-ico">📈</div>
              <h3>Business Purpose</h3>
              <div className="p-sub">Operations and Cost</div>
              <ul>
                <li>Ensuring operational efficiency</li>
                <li>Reducing lifetime cost of ownership</li>
                <li>Enhancing product quality and consistency</li>
                <li>Flexibility and space utilization</li>
                <li>Suitability to the actual work environment</li>
                <li>Maintainability and serviceability</li>
                <li>Integration with existing systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ LIFECYCLE ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">When to Start</span>
            <h2 className="sec-title">Qualification Spans Five Stages, Not One</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "750px", marginBottom: "36px" }}>
              Each stage that passes without documentation reduces the leverage available in every
              stage that follows.
            </p>
          </div>
          <div className="life-grid fade-up">
            <div className="life-box">
              <div className="life-ico">📝</div>
              <div className="life-ph">Phase 1</div>
              <h4>Requirements</h4>
              <p>
                Pre-Development. Define what the equipment must achieve for your product, process
                and site.
              </p>
              <div className="life-doc">URS</div>
            </div>
            <div className="life-box">
              <div className="life-ico">📐</div>
              <div className="life-ph">Phase 2</div>
              <h4>Design</h4>
              <p>
                Development. Review the proposed design against every stated requirement before
                build begins.
              </p>
              <div className="life-doc">DQ</div>
            </div>
            <div className="life-box">
              <div className="life-ico">🔧</div>
              <div className="life-ph">Phase 3</div>
              <h4>Build</h4>
              <p>
                Manufacturing. Factory acceptance and pre-delivery verification against the
                qualified design.
              </p>
              <div className="life-doc">FAT</div>
            </div>
            <div className="life-box">
              <div className="life-ico">✅</div>
              <div className="life-ph">Phase 4</div>
              <h4>Qualification</h4>
              <p>Commissioning. Installation, operational and performance verification on site.</p>
              <div className="life-doc">IQ · OQ · PQ</div>
            </div>
            <div className="life-box">
              <div className="life-ico">🔄</div>
              <div className="life-ph">Phase 5</div>
              <h4>Operation</h4>
              <p>
                Post Handover. Change control, periodic review, requalification triggers and
                decommissioning.
              </p>
              <div className="life-doc">Requalification</div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ CHAIN ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Approach</span>
            <h2 className="sec-title">One Requirement, Traced End to End</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "780px", marginBottom: "32px" }}>
              Our protocol set is built as a single connected chain rather than four separate
              documents. Every requirement raised in the URS carries a reference number that
              reappears in the DQ verdict, the IQ check, the OQ test and the PQ acceptance criteria.
              An auditor can pick any requirement and follow it to its verification in one move.
            </p>
          </div>
          <div className="chain fade-up">
            <div className="chain-item">
              <div className="chain-badge">
                <span className="cb-code">URS</span>
                <span className="cb-lbl">Anchor</span>
              </div>
              <div className="chain-body">
                <h4>User Requirement Specification</h4>
                <div className="chain-q">
                  What must this equipment achieve for our product, our process and our site?
                </div>
                <p>
                  The originating document, prepared before enquiry or purchase. Fifteen sections
                  capturing product CTQs with operating ranges and tolerances, critical process
                  steps, input material variants, layout and movement pathways, utility and
                  environmental constraints, construction materials, capacity and throughput
                  targets, safety and ergonomics, regulatory obligations, and a full data management
                  and security specification. Closes with documentation, post-installation support
                  and end-of-life requirements.
                </p>
                <div className="chain-tags">
                  <span className="chain-tag">Product CTQs</span>
                  <span className="chain-tag">Process Steps</span>
                  <span className="chain-tag">Layout Constraints</span>
                  <span className="chain-tag">Utilities</span>
                  <span className="chain-tag">Performance Targets</span>
                  <span className="chain-tag">Data Security</span>
                  <span className="chain-tag">Post-Installation Support</span>
                </div>
              </div>
            </div>
            <div className="chain-item">
              <div className="chain-badge">
                <span className="cb-code">DQ</span>
                <span className="cb-lbl">Verdict</span>
              </div>
              <div className="chain-body">
                <h4>Design Qualification</h4>
                <div className="chain-q">
                  Does the proposed design meet what we specified, and where does it not?
                </div>
                <p>
                  Structured as a formal verdict rather than a description. Technical
                  specifications, layout and dimensions, electrical and power requirements, software
                  and automation, calibration points, safety features, utilities and subsystem
                  modules are each reviewed against the URS. The document closes with three explicit
                  statements: requirements met, requirements not met, and the conclusion. Gaps are
                  surfaced while they are still negotiable.
                </p>
                <div className="chain-tags">
                  <span className="chain-tag">Design Review</span>
                  <span className="chain-tag">Module Breakdown</span>
                  <span className="chain-tag">URS Met Statement</span>
                  <span className="chain-tag">URS Not Met Statement</span>
                  <span className="chain-tag">Gap Register</span>
                </div>
              </div>
            </div>
            <div className="chain-item">
              <div className="chain-badge">
                <span className="cb-code">IQ</span>
                <span className="cb-lbl">Arrival</span>
              </div>
              <div className="chain-body">
                <h4>Installation Qualification</h4>
                <div className="chain-q">
                  Did we receive what was qualified, and is the site ready to receive it?
                </div>
                <p>
                  Verification is front-loaded into pre-installation checks so problems surface
                  before assembly begins. Delivery condition, documentation availability, component
                  and module acceptability, accessories, tooling and consumables, and site utility
                  and environmental readiness are all confirmed first. Module assembly, software and
                  hardware installation, and final installation verification follow.
                </p>
                <div className="chain-tags">
                  <span className="chain-tag">Delivery Verification</span>
                  <span className="chain-tag">Documentation Check</span>
                  <span className="chain-tag">Component Acceptance</span>
                  <span className="chain-tag">Site Readiness</span>
                  <span className="chain-tag">Software Installation</span>
                </div>
              </div>
            </div>
            <div className="chain-item">
              <div className="chain-badge">
                <span className="cb-code">OQ</span>
                <span className="cb-lbl">Function</span>
              </div>
              <div className="chain-body">
                <h4>Operational Qualification</h4>
                <div className="chain-q">
                  Does the system function correctly across its full operating range?
                </div>
                <p>
                  Tests the equipment as an integrated system rather than a set of parts. Startup
                  sequence, safety and emergency response, sensor calibration and functionality, HMI
                  behaviour, data management and integrity, environmental control, and utility
                  input, output, flow and discharge. Material handling is then verified step by
                  step: input and loading, each process step, in-process transfer, and output.
                  Deviations are logged within the protocol against a detailed test case structure.
                </p>
                <div className="chain-tags">
                  <span className="chain-tag">Startup Sequence</span>
                  <span className="chain-tag">Emergency Response</span>
                  <span className="chain-tag">Sensor Calibration</span>
                  <span className="chain-tag">HMI Verification</span>
                  <span className="chain-tag">Data Integrity</span>
                  <span className="chain-tag">Process Step Testing</span>
                  <span className="chain-tag">Deviation Log</span>
                </div>
              </div>
            </div>
            <div className="chain-item">
              <div className="chain-badge">
                <span className="cb-code">PQ</span>
                <span className="cb-lbl">Performance</span>
              </div>
              <div className="chain-body">
                <h4>Performance Qualification</h4>
                <div className="chain-q">
                  Does it sustain the performance we specified under real production conditions?
                </div>
                <p>
                  Every section carries its originating URS reference. Capacity, throughput, quality
                  parameters and measurement system performance are verified against the numbers
                  stated at specification stage. Environment and utility control, user interface and
                  parameter modification, data storage and integrity, access control, electronic
                  records, electronic signatures, data transfer and integration, IOT analysis and
                  cybersecurity are each verified as distinct performance requirements rather than
                  assumed.
                </p>
                <div className="chain-tags">
                  <span className="chain-tag">Capacity</span>
                  <span className="chain-tag">Throughput</span>
                  <span className="chain-tag">Process Capability</span>
                  <span className="chain-tag">MSA</span>
                  <span className="chain-tag">Electronic Records</span>
                  <span className="chain-tag">Electronic Signatures</span>
                  <span className="chain-tag">Cybersecurity</span>
                  <span className="chain-tag">IOT Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ IMPACT BAND ═══ */}
      <section className="impact">
        <div className="impact-bg"></div>
        <div className="impact-ov"></div>
        <div className="wrap impact-in">
          <span
            className="sec-tag"
            style={{ color: "#a8e063", justifyContent: "center", display: "flex" }}
          >
            What Changes
          </span>
          <h2>The Difference a Traceable Chain Makes</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">🔍</div>
              <h4>Audit Ready</h4>
              <p>
                Any requirement can be traced from origin to verification in a single move, with no
                scrambling through disconnected files.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🤝</div>
              <h4>Supplier Leverage</h4>
              <p>
                Gaps surface at design review while commercial terms are still open, not after
                handover when you have no position.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🔐</div>
              <h4>Data Integrity Covered</h4>
              <p>
                Electronic records, signatures, access control and cybersecurity verified explicitly
                rather than assumed compliant.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📊</div>
              <h4>Real Capability Known</h4>
              <p>
                Capacity, throughput and process capability established under production load before
                the equipment enters routine use.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ COMPARISON ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">The Difference</span>
            <h2 className="sec-title">Conventional Practice Compared to Our Approach</h2>
            <div className="divider"></div>
          </div>
          <div className="cmp fade-up">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell">Conventional Practice</div>
              <div className="cmp-cell">Emerging Sigma Approach</div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Qualification begins when the equipment is delivered</div>
              <div className="cmp-cell">
                Qualification begins before the enquiry is issued, with the URS
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Supplier IQ and OQ protocols are adopted as-is</div>
              <div className="cmp-cell">
                Protocols written against your requirements, process and product CTQs
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Four independent documents with no cross-reference</div>
              <div className="cmp-cell">
                One connected chain; every requirement referenced URS through to PQ
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">
                Software and data treated as outside qualification scope
              </div>
              <div className="cmp-cell">
                Data integrity, electronic records and signatures, access control and cybersecurity
                verified explicitly
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">PQ repeats OQ under ideal conditions</div>
              <div className="cmp-cell">
                PQ verifies capacity, throughput and capability against URS targets under production
                load
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Protocol format differs for every machine</div>
              <div className="cmp-cell">
                A single consistent template set applied across the equipment fleet
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Post-installation support negotiated after handover</div>
              <div className="cmp-cell">
                Training, spares, PM, calibration, AMC and decommissioning specified in the URS
              </div>
            </div>
            <div className="cmp-row">
              <div className="cmp-cell">Deviations recorded informally or not at all</div>
              <div className="cmp-cell">
                Deviations captured within the protocol against structured test case references
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ DELIVERABLES ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">What You Receive</span>
            <h2 className="sec-title">Deliverables</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "730px", marginBottom: "36px" }}>
              Every document is prepared for your specific equipment, process and regulatory
              context. The template set is the starting structure, not the deliverable.
            </p>
          </div>
          <div className="del-grid fade-up">
            <div className="del-item">
              <div className="del-ico">URS</div>
              <div>
                <h4>User Requirement Specification</h4>
                <p>
                  Complete requirement definition across product, process, layout, utilities,
                  performance, safety, regulatory, data security and lifecycle support.
                </p>
              </div>
            </div>
            <div className="del-item">
              <div className="del-ico">DQ</div>
              <div>
                <h4>Design Qualification Protocol and Report</h4>
                <p>
                  Design review against every URS clause, with explicit met and not-met statements
                  and a gap register for negotiation.
                </p>
              </div>
            </div>
            <div className="del-item">
              <div className="del-ico">IQ</div>
              <div>
                <h4>Installation Qualification Protocol and Report</h4>
                <p>
                  Pre-installation verification, module assembly checks, software and hardware
                  installation confirmation, final sign-off.
                </p>
              </div>
            </div>
            <div className="del-item">
              <div className="del-ico">OQ</div>
              <div>
                <h4>Operational Qualification Protocol and Report</h4>
                <p>
                  Integrated system testing across startup, safety, sensors, HMI, data, environment,
                  utilities and every process step, with test case annexure.
                </p>
              </div>
            </div>
            <div className="del-item">
              <div className="del-ico">PQ</div>
              <div>
                <h4>Performance Qualification Protocol and Report</h4>
                <p>
                  Capacity, throughput, capability and measurement system verification, with full
                  data integrity and cybersecurity performance testing.
                </p>
              </div>
            </div>
            <div className="del-item">
              <div className="del-ico">VMP</div>
              <div>
                <h4>Validation Master Plan and Traceability Matrix</h4>
                <p>
                  The governing plan tying the qualification chain together, with a matrix mapping
                  every requirement to its point of verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ ENGAGEMENT ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">How We Work</span>
            <h2 className="sec-title">Engagement Models</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "730px", marginBottom: "36px" }}>
              Support is scaled to where you are in the equipment lifecycle and how much internal
              capability you want to build.
            </p>
          </div>
          <div className="eng-grid fade-up">
            <div className="eng-card">
              <div className="eng-top">
                <span className="eng-num">01</span>
                <h4>Full Qualification</h4>
                <div className="e-sub">End to End</div>
              </div>
              <div className="eng-body">
                <ul>
                  <li>URS development from process study</li>
                  <li>Supplier technical evaluation support</li>
                  <li>DQ, IQ, OQ and PQ protocol authoring</li>
                  <li>On-site execution and witnessing</li>
                  <li>Deviation resolution and closure</li>
                  <li>Final qualification dossier compilation</li>
                </ul>
              </div>
            </div>
            <div className="eng-card">
              <div className="eng-top">
                <span className="eng-num">02</span>
                <h4>Protocol Development</h4>
                <div className="e-sub">Documentation Only</div>
              </div>
              <div className="eng-body">
                <ul>
                  <li>URS preparation for planned purchases</li>
                  <li>Protocol authoring for your team to execute</li>
                  <li>Traceability matrix construction</li>
                  <li>Review of supplier-provided protocols</li>
                  <li>Gap assessment against applicable standards</li>
                  <li>Template set adapted to your QMS</li>
                </ul>
              </div>
            </div>
            <div className="eng-card">
              <div className="eng-top">
                <span className="eng-num">03</span>
                <h4>Remediation &amp; Capability</h4>
                <div className="e-sub">Existing Equipment</div>
              </div>
              <div className="eng-body">
                <ul>
                  <li>Retrospective qualification of installed equipment</li>
                  <li>Audit finding closure and CAPA support</li>
                  <li>Requalification following change or relocation</li>
                  <li>Periodic review programme design</li>
                  <li>Internal team training on the protocol set</li>
                  <li>Handover to internal ownership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ STANDARDS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="tc fade-up">
            <span className="sec-tag" style={{ justifyContent: "center" }}>
              Compliance Basis
            </span>
            <h2 className="sec-title">Applicable Standards and Guidelines</h2>
            <div className="divider divider-c"></div>
          </div>
          <div className="std-grid fade-up" style={{ marginTop: "8px" }}>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 13485:2016 (Clause 6.3 and 7.5.6)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              US FDA 21 CFR 820 (Process Validation)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              US FDA 21 CFR Part 11 (Electronic Records and Signatures)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              GAMP 5 (Computerised System Validation)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU GMP Annex 1 (Sterile Product Manufacture)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU GMP Annex 15 (Qualification and Validation)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              WHO TRS 961 Annex 3 (Qualification and Validation)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 14971 (Risk Management)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO/IEC 17025:2017 (Testing and Calibration Laboratories)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 9001 · IATF 16949 (Equipment and Measurement Control)
            </div>
          </div>
        </div>
      </section>
      {/* ═══ CTA ═══ */}
      <div className="cta-band">
        <div className="wrap">
          <h2>Buying Equipment This Year?</h2>
          <p>
            The highest-value moment for equipment qualification is before the enquiry goes out. If
            a purchase is planned, a short conversation now will save considerably more than it
            costs.
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
