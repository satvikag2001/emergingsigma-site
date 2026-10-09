import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { TabPanel, Tabs } from "@/components/Tabs";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title:
    "Digitalization | Quality, Regulatory, Supply Chain & Operations | Emerging Sigma Consulting",
  description:
    "Process digitalization for quality, regulatory, supply chain and operations. Problem statements backed by data, clickable prototypes and build-ready PRDs.",
  path: "/digitalization",
});

export default function DigitalizationPage() {
  preloadHero("hero-digitalization");

  return (
    <>
      <JsonLd data={serviceSchema("Digitalization", "/digitalization")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Digitalization", href: "/digitalization" },
        ]}
      />
      <section className="eq-hero">
        <div className="dg-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Digitalization
          </div>
          <h1>
            Sometimes the Process Is Fine. <span className="hl">The Paper Is the Problem.</span>
          </h1>
          <p className="lead">
            Organizations spend years documenting processes that were never going to work on paper
            and WhatsApp. We identify which problems are process problems and which are
            digitalization problems, then take the second kind{" "}
            <strong>from data-backed problem statement to build-ready specification</strong>.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#diagnosis" className="btn btn-green">
              Which Problem Do You Have?
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Systems
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Problems Proven
                <br />
                With Data
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <rect x="2.5" y="4" width="19" height="13" rx="2" />
                  <path d="M8 20.5h8M12 17v3.5" />
                  <path d="M6.5 8h5M6.5 11h8M6.5 14h3" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Clickable Prototypes
                <br />
                Before Code
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M6 2.5h8l4.5 4.5v14a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V4A1.5 1.5 0 016 2.5z" />
                  <path d="M14 2.5V7h4.5" />
                  <path d="M8 12.5h8M8 16h6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Build-Ready
                <br />
                PRDs
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
                Compliance Built
                <br />
                In, Not Bolted On
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DIAGNOSIS */}
      <section className="sec" id="diagnosis">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">First Question</span>
            <h2 className="sec-title">Process Problem or Digitalization Problem?</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "36px" }}>
              This distinction decides where the money goes and it is frequently got wrong. Writing
              a better procedure will not fix a workflow that requires four people in three
              locations to reconcile a spreadsheet by hand. Equally, buying software will not fix a
              process nobody agreed on.
            </p>
          </div>
          <div className="dual fade-up">
            <div
              className="dual-side a"
              style={{ background: "linear-gradient(150deg,#eef4f2,#dfece8)" }}
            >
              <div className="dual-lbl" style={{ color: "var(--teal)" }}>
                Symptom Set A
              </div>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>📋</div>
              <h4>Process Problem</h4>
              <p style={{ textAlign: "left", marginTop: "12px" }}>
                People disagree on what the steps are. The same task is done differently by
                different people. Nobody owns the outcome. Decisions have no criteria. Handoffs are
                undefined.
              </p>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  fontWeight: "700",
                  color: "var(--teal)",
                }}
              >
                Fix the process first. Software will encode the confusion.
              </p>
            </div>
            <div className="dual-mid">WHICH?</div>
            <div
              className="dual-side b"
              style={{ background: "linear-gradient(150deg,#eef4f2,#e0efdc)" }}
            >
              <div className="dual-lbl" style={{ color: "var(--green2)" }}>
                Symptom Set B
              </div>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>💻</div>
              <h4>Digitalization Problem</h4>
              <p style={{ textAlign: "left", marginTop: "12px" }}>
                Everyone agrees on the steps. The work runs on paper, spreadsheets and messaging
                apps. Data is re-entered several times. Nobody can see status without asking.
                Records exist but cannot be queried.
              </p>
              <p
                style={{
                  textAlign: "left",
                  marginTop: "10px",
                  fontWeight: "700",
                  color: "var(--green2)",
                }}
              >
                More documentation will not help. Build the system.
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "26px",
              background: "var(--gray1)",
              borderLeft: "4px solid var(--green)",
              borderRadius: "0 var(--r2) var(--r2) 0",
              padding: "24px 30px",
            }}
            className="fade-up"
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                color: "var(--teal3)",
                margin: "0",
                lineHeight: "1.75",
              }}
            >
              We have seen organizations spend a year documenting processes and wonder why nothing
              improved. The processes were never the bottleneck. The work was simply not digitised,
              and no amount of writing was going to change that.
            </p>
          </div>
        </div>
      </section>
      {/* BUILD CHAIN */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">How We Work</span>
            <h2 className="sec-title">From Problem to Build-Ready Specification</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "38px" }}>
              We are not a software house. We are the layer between the business problem and the
              development team, producing the specification that lets engineering build the right
              thing without a year of clarification meetings.
            </p>
          </div>
          <div className="chn fade-up">
            <div className="chn-step">
              <div className="chn-n">1</div>
              <h4>Problem Statement</h4>
              <p>
                The problem stated in business terms and proven with the organization's own
                transaction data, not asserted from opinion.
              </p>
            </div>
            <div className="chn-step">
              <div className="chn-n">2</div>
              <h4>Process Design</h4>
              <p>
                The target process defined before any screen is drawn. Roles, states, decision
                criteria, approval gates and business rules.
              </p>
            </div>
            <div className="chn-step">
              <div className="chn-n">3</div>
              <h4>Clickable Prototype</h4>
              <p>
                A working prototype per user persona, navigable end to end, so stakeholders react to
                something real rather than a description.
              </p>
            </div>
            <div className="chn-step">
              <div className="chn-n">4</div>
              <h4>Product Requirements</h4>
              <p>
                A PRD carrying data dictionary, per-screen functional requirements, state machine,
                business rules and acceptance criteria.
              </p>
            </div>
            <div className="chn-step">
              <div className="chn-n">5</div>
              <h4>Build Support</h4>
              <p>
                Walkthroughs with engineering, query resolution during development, and acceptance
                verification against the specification.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "28px" }} className="fade-up">
            <div className="g2" style={{ gap: "20px" }}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r2)",
                  padding: "26px 28px",
                }}
              >
                <h4 style={{ fontSize: "16px", color: "var(--teal3)", marginBottom: "10px" }}>
                  Why the prototype comes before the PRD
                </h4>
                <p style={{ fontSize: "13.5px", margin: "0", lineHeight: "1.75" }}>
                  Stakeholders cannot review a document they cannot picture. Given a clickable
                  prototype they find the gaps in twenty minutes that a written specification would
                  have hidden for three months. The PRD then documents what the prototype already
                  demonstrates, which makes it far more accurate and considerably faster to write.
                </p>
              </div>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r2)",
                  padding: "26px 28px",
                }}
              >
                <h4 style={{ fontSize: "16px", color: "var(--teal3)", marginBottom: "10px" }}>
                  What makes a PRD build-ready
                </h4>
                <p style={{ fontSize: "13.5px", margin: "0", lineHeight: "1.75" }}>
                  Most PRDs describe intent and stop. A build-ready document carries a field-level
                  data dictionary with validation rules and sources, functional requirements per
                  screen with conditional logic and error states, a complete state-transition model,
                  the full business rule set with edge cases, notification specifications,
                  integration contracts and acceptance criteria for QA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DOMAINS */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Where We Apply It</span>
            <h2 className="sec-title">Four Domains We Digitise</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              Our work concentrates where regulatory obligation, process discipline and operational
              reality meet, because that is where generic software implementations usually break.
              Where AI earns its place we use it, inside the same controls as everything else: the
              model proposes, a named person decides, and the audit trail records both.
            </p>
          </div>
          <div className="dom-grid fade-up">
            <div className="dom-card">
              <div className="dom-head">
                <div className="dom-ico">🏆</div>
                <h4>Quality</h4>
              </div>
              <ul>
                <li>Electronic QMS selection, specification and implementation support</li>
                <li>Document and record control with version and access governance</li>
                <li>Non-conformance, complaint and CAPA workflow digitisation</li>
                <li>Internal audit programme scheduling, execution and finding closure</li>
                <li>Training records, competency matrices and evaluation tracking</li>
                <li>21 CFR Part 11 compliant electronic records and signatures</li>
                <li>
                  AI-assisted complaint and non-conformance triage, where the model proposes a
                  classification and a named reviewer confirms it
                </li>
              </ul>
            </div>
            <div className="dom-card">
              <div className="dom-head">
                <div className="dom-ico">📋</div>
                <h4>Regulatory</h4>
              </div>
              <ul>
                <li>Licence and registration portfolio tracking with renewal alerting</li>
                <li>Submission pipeline management across markets and product families</li>
                <li>Technical file and dossier version control</li>
                <li>Change notification assessment and regulatory impact routing</li>
                <li>Post-market surveillance, complaint intake and vigilance reporting</li>
                <li>Audit trail and data integrity controls throughout</li>
                <li>
                  AI-assisted regulatory change monitoring across markets, with every flagged change
                  routed for human impact assessment
                </li>
              </ul>
            </div>
            <div className="dom-card">
              <div className="dom-head">
                <div className="dom-ico">📦</div>
                <h4>Supply Chain</h4>
              </div>
              <ul>
                <li>Material request, approval and allocation workflows</li>
                <li>Supplier qualification records, scorecards and audit tracking</li>
                <li>Incoming inspection, non-conforming material and disposition</li>
                <li>Inventory visibility, traceability and batch genealogy</li>
                <li>Warehouse quality, storage condition and cold chain monitoring</li>
                <li>Dispatch, delivery confirmation and returns handling</li>
                <li>
                  Predictive supplier risk scoring built from incoming inspection, delivery and
                  audit history
                </li>
              </ul>
            </div>
            <div className="dom-card">
              <div className="dom-head">
                <div className="dom-ico">⚙️</div>
                <h4>Operations</h4>
              </div>
              <ul>
                <li>Field workforce management and task assignment systems</li>
                <li>Lead and customer lifecycle management for distributed sales teams</li>
                <li>Expense, advance and reimbursement workflows with approval chains</li>
                <li>
                  Batch manufacturing record digitisation, from paper BMR to an electronic record
                  with in-line checks, enforced sequence and review by exception
                </li>
                <li>Equipment maintenance, calibration and qualification records</li>
                <li>KPI dashboards drawing from operational systems rather than manual returns</li>
                <li>Complaint management from intake through resolution and analysis</li>
                <li>
                  Anomaly detection across batch and equipment data, surfacing drift before it
                  reaches finished goods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* PRINCIPLES */}
      <section className="impact">
        <div className="impact-bg"></div>
        <div className="impact-ov"></div>
        <div className="wrap impact-in">
          <span
            className="sec-tag"
            style={{ color: "#a8e063", justifyContent: "center", display: "flex" }}
          >
            Design Principles
          </span>
          <h2>What We Build Into Every System</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">🔒</div>
              <h4>Audit by Design</h4>
              <p>
                Every state change carries who, what and when. The audit trail is a property of the
                system rather than a report bolted on later.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📝</div>
              <h4>Controlled Lists Over Free Text</h4>
              <p>
                Free text cannot be analysed, compared or trusted. Structured fields make the data
                useful the day the system goes live.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📱</div>
              <h4>Designed for the Actual User</h4>
              <p>
                Field staff on a phone with intermittent connectivity need a different interface
                from a finance controller on a desktop.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🔗</div>
              <h4>Process First, Screens Second</h4>
              <p>
                The system encodes an agreed process. Where the process is unclear we settle it
                before the specification is written.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SEGMENT TABS */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Who We Work With</span>
            <h2 className="sec-title">Support Scaled to Your Organization</h2>
            <div className="divider"></div>
          </div>
          <div className="fade-up">
            <Tabs
              kind="seg"
              tabs={[
                { id: "startup", label: "Start-ups" },
                { id: "small", label: "Small Manufacturing" },
                { id: "large", label: "Large Manufacturing" },
              ]}
            >
              <TabPanel id="startup">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Everything Runs on Spreadsheets</h3>
                    <p>
                      The business works, on a stack of shared spreadsheets and messaging groups. It
                      will not scale, and the compliance evidence a regulator or customer wants
                      cannot be produced from it.
                    </p>
                    <ul>
                      <li>No systems beyond accounting and email</li>
                      <li>Quality and regulatory records on paper or in files</li>
                      <li>No internal software capability</li>
                      <li>Limited budget and no appetite for enterprise platforms</li>
                      <li>Growing fast enough that manual working is starting to break</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Assessment of which processes genuinely need a system and which do not
                      </li>
                      <li>
                        Requirement definition so you can evaluate off-the-shelf options properly
                      </li>
                      <li>
                        Vendor evaluation support with a specification rather than a wish list
                      </li>
                      <li>Prototype and PRD where a custom build is genuinely warranted</li>
                      <li>Compliance requirements specified upfront so they are not retrofitted</li>
                      <li>Migration planning from spreadsheets without losing history</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Assessment, specification and vendor selection</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Systems Bought, Benefits Missing</h3>
                    <p>
                      Software was purchased. Adoption is partial, people work around it, and the
                      spreadsheets never went away. The system encoded a process that was never
                      properly agreed.
                    </p>
                    <ul>
                      <li>Existing systems used partially or worked around</li>
                      <li>Parallel spreadsheets still carrying the real work</li>
                      <li>Modules purchased but never implemented</li>
                      <li>Data quality too poor to support decisions</li>
                      <li>Small IT function with no product capability</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Diagnosis of why adoption stalled, usually a process rather than a tool
                        issue
                      </li>
                      <li>Process redesign followed by system reconfiguration</li>
                      <li>
                        Requirement specification for the gaps the current system cannot close
                      </li>
                      <li>Prototype and PRD for custom modules or extensions</li>
                      <li>Data quality remediation and validation rule design</li>
                      <li>User adoption programme built around the redesigned process</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Diagnosis, redesign and specification</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Many Systems, No Single Truth</h3>
                    <p>
                      An IT function exists and systems are in place. The difficulty is that they
                      were implemented independently, so the same entity exists in four places with
                      four definitions.
                    </p>
                    <ul>
                      <li>Multiple systems with overlapping and inconsistent data</li>
                      <li>Development capacity available but requirements arriving unclear</li>
                      <li>Manual reporting layer sitting over automated systems</li>
                      <li>Compliance and data integrity obligations across the estate</li>
                      <li>Product management capability thinner than engineering capability</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Requirement definition capability supplementing your product function</li>
                      <li>Build-ready PRDs so engineering stops guessing at intent</li>
                      <li>Prototype-led stakeholder alignment before development commits</li>
                      <li>Data model and master data definition across systems</li>
                      <li>Compliance and data integrity assessment of the existing estate</li>
                      <li>Product management practice building within your teams</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Product specification partner to an established IT function</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <h2>Before You Buy Software, Get the Requirement Right</h2>
          <p>
            Most failed implementations were specified badly rather than built badly. Tell us the
            problem and we will tell you whether it is a process problem, a digitalization problem,
            or both.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request an Assessment
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
