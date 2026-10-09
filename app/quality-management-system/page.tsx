import type { Metadata } from "next";
import Link from "next/link";
import { TabPanel, Tabs } from "@/components/Tabs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title:
    "Quality Management Systems | ISO 13485 QMS, Process Architecture & Audits | Emerging Sigma Consulting",
  description:
    "ISO 13485 QMS development with process architecture, rubric-scored process audits and KPI governance. Integrated, lean, digitization-ready and self-sustaining quality systems.",
  path: "/quality-management-system",
});

export default function QualityManagementSystemPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="wrap">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/services">Our Services</Link>
            <span>›</span>
            <span>Quality Management Systems</span>
          </div>
        </div>
      </div>
      {/* ═══ HERO ═══ */}
      <section className="eq-hero">
        <div className="qms-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Quality Management Systems
          </div>
          <h1>
            A Quality System <span className="hl">People Actually Use</span>
          </h1>
          <p className="lead">
            Most organizations do not have a quality problem. They have a quality system that lives
            in a folder, opened only when auditors arrive. We build systems that are{" "}
            <strong>integrated, lean and self-sustaining</strong>, where the written process and the
            real process are the same thing, and where evidence can be produced on request rather
            than assembled on demand.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#syndrome" className="btn btn-green">
              Is Your QMS Alive?
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your System
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
                  <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
                  <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
                  <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                One System,
                <br />
                Many Standards
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6.5h16M4 12h11M4 17.5h7" />
                  <path d="M18.5 15l3 3-3 3" strokeWidth="1.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Lean Documentation,
                <br />
                Not Volume
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M9 3.5H6.5A1.5 1.5 0 005 5v15a1.5 1.5 0 001.5 1.5h11A1.5 1.5 0 0019 20V5a1.5 1.5 0 00-1.5-1.5H15" />
                  <rect x="9" y="2" width="6" height="3.5" rx="1" />
                  <path d="M8.5 11l2 2 4.5-4.5" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Audited Against
                <br />a Rubric
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M20.5 12a8.5 8.5 0 11-2.9-6.4" />
                  <path d="M20.5 3.5V9h-5.5" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="2.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Self-Sustaining
                <br />
                Without Us
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ ISO FOLDER SYNDROME ═══ */}
      <section className="sec" id="syndrome">
        <div className="wrap">
          <div className="synd-wrap fade-up">
            <div className="synd-in">
              <div className="synd-tag">⚠ The Diagnosis</div>
              <h2>ISO Folder Syndrome</h2>
              <p className="synd-lead">
                The audit team arrives. Someone walks to a shelf, lifts down a ring binder labelled{" "}
                <em>ISO</em>, and begins turning to tabbed sections. The documents are present,
                signed and current. Nobody in the room can explain why any of them say what they
                say. The folder closes when the audit ends and does not open again for a year.
              </p>
              <div className="synd-grid">
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>The quality manual is opened for auditors and for nobody else.</p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>
                    The written procedure and the actual practice diverged years ago, and everyone
                    knows it.
                  </p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>
                    Documents were written to satisfy a clause number rather than to help someone do
                    the work.
                  </p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>One person owns the QMS. Everybody else is a visitor to it.</p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>
                    Each new standard added a new folder rather than being absorbed into the
                    existing system.
                  </p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>Corrective actions close on paper without anything in the process changing.</p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>Training records are complete. Demonstrable competence is another matter.</p>
                </div>
                <div className="synd-item">
                  <div className="synd-x">✕</div>
                  <p>Audit week is a scramble. The rest of the year the system is invisible.</p>
                </div>
              </div>
              <div className="synd-foot">
                <p>
                  The syndrome is not a documentation failure. It is a design failure. A system
                  built to be shown will never be a system that gets used, and a system nobody uses
                  cannot improve anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ LIVING QMS ═══ */}
      <section className="sec" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="live-wrap fade-up">
            <div className="live-in">
              <div className="live-tag">✓ The Alternative</div>
              <h2>A Quality System That Is Actually Alive</h2>
              <p className="live-lead">
                A working quality system is not a better-organised folder. It is a system where
                following the documented process is the fastest and most reliable way to do the job,
                so people follow it because it helps them rather than because an auditor might ask.
              </p>
              <div className="synd-grid">
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    Process owners can explain the intent behind a requirement, not merely recite
                    its content.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    The documented process is the actual process, because it was mapped from how
                    work really happens.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>Documentation is lean. Every document earns its place by being used.</p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    One integrated framework serves ISO 13485, ISO 9001, MDSAP and customer
                    requirements together.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    Corrective action changes the process. The record is a by-product, not the
                    objective.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    Responsibilities are defined through clear RASI, so nothing sits in the gap
                    between functions.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    The system self-regulates. Adherence does not depend on one person chasing it.
                  </p>
                </div>
                <div className="live-item">
                  <div className="live-c">✓</div>
                  <p>
                    Audit day is a normal day, because nothing was being held together for the
                    occasion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ SIX PRINCIPLES ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Design Approach</span>
            <h2 className="sec-title">Six Principles Behind Every System We Build</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "790px", marginBottom: "38px" }}>
              These are not aspirations added after the fact. They are the design constraints we
              work within from the first process map onward, and they are what prevents the system
              from becoming a folder.
            </p>
          </div>
          <div className="prin-grid fade-up">
            <div className="prin-card">
              <div className="prin-ico">🔗</div>
              <h4>Integrated System</h4>
              <p>
                A single QMS framework addressing multiple standards, regulatory requirements and
                customer expectations together. One system, not one folder per certificate.
              </p>
            </div>
            <div className="prin-card">
              <div className="prin-ico">📄</div>
              <h4>Lean Documentation</h4>
              <p>
                Eliminate waste and streamline processes to maximise efficiency and value delivery.
                Fewer documents, each one used, rather than volume that signals diligence and
                delivers nothing.
              </p>
            </div>
            <div className="prin-card">
              <div className="prin-ico">💻</div>
              <h4>Digitization Friendly</h4>
              <p>
                Processes designed from the outset to allow a smooth transition from paper-based to
                digital systems, so digitalization becomes a migration rather than a rebuild.
              </p>
            </div>
            <div className="prin-card">
              <div className="prin-ico">🤝</div>
              <h4>Cross Functional</h4>
              <p>
                Clear RASI definition and genuine cross-functional collaboration, so
                responsibilities are explicit and the conflicts that usually surface during an audit
                never arise.
              </p>
            </div>
            <div className="prin-card">
              <div className="prin-ico">♻️</div>
              <h4>Self Sustainable</h4>
              <p>
                A self-regulating mechanism that maintains adherence with minimal oversight. The
                system holds itself together after the consultant leaves the building.
              </p>
            </div>
            <div className="prin-card">
              <div className="prin-ico">🎯</div>
              <h4>Customer Centric</h4>
              <p>
                Processes designed and aligned to meet both customer expectations and regulatory
                body requirements, rather than treating the two as competing demands.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ NEW: PROCESS ARCHITECTURE ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Foundation</span>
            <h2 className="sec-title">Architecture Before Documents</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "38px" }}>
              Organizations usually begin a quality system by writing procedures. That produces a
              pile of documents with no relationship to one another, which is how a folder forms. We
              begin with the architecture, so every process has a defined place, a named owner and a
              reason to exist before a single word is written.
            </p>
          </div>
          <div className="pyr fade-up">
            <div className="pyr-row pyr-1">
              <h4>Business Process Framework</h4>
              <p>
                The top-level map of how the organization creates and delivers value, business unit
                by business unit and function by function
              </p>
            </div>
            <div className="pyr-row pyr-2">
              <h4>Process Register &amp; Ownership</h4>
              <p>
                Every process identified, coded and assigned a strategic and an operational process
                owner, with no blanks left
              </p>
            </div>
            <div className="pyr-row pyr-3">
              <h4>Process Maps &amp; Swimlanes</h4>
              <p>
                Purpose, scope, key measurables, step-level responsibility, decision points,
                handoffs and linkages, mapped as work actually happens
              </p>
            </div>
            <div className="pyr-row pyr-4">
              <h4>Work Instructions, Templates &amp; Records</h4>
              <p>
                The operating layer: how each step is performed, on what form, and what evidence the
                step leaves behind
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
              A document that cannot be traced to a process, and a process that cannot be traced to
              an owner, will not survive its first year. Architecture is what makes the difference
              between a quality system and a document library.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ 3 STAGE PROCESS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">How We Build It</span>
            <h2 className="sec-title">Three Stages, One Continuous Engagement</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "770px", marginBottom: "44px" }}>
              We do not arrive with a template. The system is designed around your processes, your
              customers and your regulatory obligations, then handed over in a state where your team
              can run it.
            </p>
          </div>
          <div className="stg-wrap fade-up">
            <div className="stg-card">
              <div className="stg-num">01</div>
              <div className="stg-body">
                <h4>QMS Planning</h4>
                <ul>
                  <li>Thorough review of organizational processes and target customers</li>
                  <li>Review of all applicable regulatory requirements</li>
                  <li>Detailed risk assessment and gap analysis</li>
                  <li>Process framework, register and ownership defined</li>
                  <li>QMS roadmap and implementation strategy</li>
                </ul>
              </div>
            </div>
            <div className="stg-card">
              <div className="stg-num">02</div>
              <div className="stg-body">
                <h4>QMS Development</h4>
                <ul>
                  <li>Design of a tailored QMS matched to organizational needs</li>
                  <li>Structured process mapping with a lean approach</li>
                  <li>Work instructions and templates for every mapped step</li>
                  <li>Alignment with regulatory and customer requirements</li>
                  <li>Integration of all business processes into one framework</li>
                </ul>
              </div>
            </div>
            <div className="stg-card">
              <div className="stg-num">03</div>
              <div className="stg-body">
                <h4>Implementation &amp; Sustainment</h4>
                <ul>
                  <li>Support during external regulatory and certification audits</li>
                  <li>Training and development of internal auditors and teams</li>
                  <li>Internal process audit programme established</li>
                  <li>Digitalization of key processes</li>
                  <li>Continuous improvement framework and handover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ NEW: VERIFICATION ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Verification</span>
            <h2 className="sec-title">How You Know It Is Actually Working</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "36px" }}>
              Ask a process owner how well their process runs and the answer is usually somewhere
              near eighty percent. Score the same process against a rubric that demands evidence for
              every claim, and the number frequently halves. Neither party is being dishonest. They
              are measuring different things.
            </p>
          </div>
          <div className="dual fade-up">
            <div className="dual-side a">
              <div className="dual-lbl">What the Team Feels</div>
              <div className="dual-num">75-80%</div>
              <h4>Operating Maturity</h4>
              <p>
                People do meaningful work every day. Decisions get made, customers get served,
                output leaves the building. By the standard of daily effectiveness the process
                genuinely works.
              </p>
            </div>
            <div className="dual-mid">THE GAP</div>
            <div className="dual-side b">
              <div className="dual-lbl">What Evidence Shows</div>
              <div className="dual-num">45-55%</div>
              <h4>Process Control Maturity</h4>
              <p>
                Work instructions absent. Designed templates not in use. KPIs named but never
                defined. Outcomes not verified in any retrievable record. Nothing is written down,
                so nothing can be relied on.
              </p>
            </div>
          </div>
          <div
            style={{
              margin: "26px 0 46px",
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
              The gap is not a scoring artefact. It is the exposure. Everything holding the process
              together sits in people's heads, which means it does not survive an absence, a
              resignation, a scale-up or an audit. This is ISO folder syndrome expressed as a
              number.
            </p>
          </div>
          <div className="g2" style={{ gap: "36px", alignItems: "start" }}>
            <div className="fade-up">
              <h4 style={{ fontSize: "17px", color: "var(--teal3)", marginBottom: "6px" }}>
                Process Audits Scored Against a Rubric
              </h4>
              <p style={{ fontSize: "13.5px", marginBottom: "18px" }}>
                A conversational audit produces a conversational finding, and those do not survive a
                leadership review. We audit against a fixed rubric where every point requires
                evidence produced in the room, so the score is reproducible, comparable across
                processes and trackable over time.
              </p>
              <div className="dim-row">
                <div className="dim-name">
                  Process Deployment
                  <small>Published, accessible and in use?</small>
                </div>
                <div className="dim-bar">
                  <div className="dim-fill" style={{ width: "100%" }}></div>
                </div>
                <div className="dim-pts">5</div>
              </div>
              <div className="dim-row">
                <div className="dim-name">
                  Training
                  <small>Users trained and independently evaluated?</small>
                </div>
                <div className="dim-bar">
                  <div className="dim-fill" style={{ width: "100%" }}></div>
                </div>
                <div className="dim-pts">5</div>
              </div>
              <div className="dim-row">
                <div className="dim-name">
                  KPI Management
                  <small>Defined, measured, reviewed, acted on?</small>
                </div>
                <div className="dim-bar">
                  <div className="dim-fill" style={{ width: "80%" }}></div>
                </div>
                <div className="dim-pts">4</div>
              </div>
              <div className="dim-row">
                <div className="dim-name">
                  Step-by-Step Audit
                  <small>Every step scored on three criteria</small>
                </div>
                <div className="dim-bar">
                  <div className="dim-fill" style={{ width: "100%" }}></div>
                </div>
                <div className="dim-pts">n×14</div>
              </div>
              <div
                style={{
                  marginTop: "18px",
                  padding: "18px 22px",
                  background: "var(--gray1)",
                  borderRadius: "var(--r2)",
                  border: "1px solid var(--border)",
                }}
              >
                <p style={{ fontSize: "13px", margin: "0", lineHeight: "1.7" }}>
                  <strong style={{ color: "var(--teal3)" }}>
                    Each step carries fourteen points:
                  </strong>{" "}
                  six for the work instruction, six for template adherence, two for the record the
                  step produces. Absent evidence scores zero. No credit is given for intent.
                </p>
              </div>
            </div>
            <div className="fade-up">
              <h4 style={{ fontSize: "17px", color: "var(--teal3)", marginBottom: "6px" }}>
                Heatmap Bands
              </h4>
              <p style={{ fontSize: "13.5px", marginBottom: "18px" }}>
                Every step lands in one of three bands, so a leadership audience sees where control
                is missing without reading the detail.
              </p>
              <div className="hm-grid" style={{ gridTemplateColumns: "1fr", gap: "12px" }}>
                <div className="hm-band crit">
                  <span className="hm-pct">Below 30%</span>
                  <h4>Critical</h4>
                  <p>
                    The step is effectively uncontrolled. No instruction, no template in use, no
                    record produced.
                  </p>
                </div>
                <div className="hm-band part">
                  <span className="hm-pct">30 - 69%</span>
                  <h4>Partial</h4>
                  <p>
                    Some control exists. Typically the activity happens but the record or the
                    template is missing.
                  </p>
                </div>
                <div className="hm-band adeq">
                  <span className="hm-pct">70% and above</span>
                  <h4>Adequate</h4>
                  <p>Instruction, template and record all present and demonstrable on request.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ NEW: KPI GOVERNANCE ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Performance Governance</span>
            <h2 className="sec-title">KPI Systems That Survive the Second Month</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "36px" }}>
              Most KPI initiatives fail the same way. A list of metric names is agreed, nobody
              defines the calculation, two people compute it differently, the numbers stop being
              trusted, and the review quietly stops happening. The failure is in the definition
              layer, not the dashboard.
            </p>
          </div>
          <div className="g2" style={{ gap: "24px" }}>
            <div className="dom-card fade-up">
              <div className="dom-head">
                <div className="dom-ico">📊</div>
                <h4>Business KPIs</h4>
              </div>
              <p style={{ fontSize: "13.5px", marginBottom: "4px" }}>
                Outcome measures the leadership team is accountable for, covering revenue, cost,
                customer, asset and safety performance.
              </p>
              <ul>
                <li>KPI tree linking outcome measures to the processes that move them</li>
                <li>Definition, calculation method, frequency and data source for each</li>
                <li>Reporting hierarchy from organization through unit to site level</li>
                <li>Target setting against benchmarks rather than aspiration</li>
              </ul>
            </div>
            <div className="dom-card fade-up">
              <div className="dom-head">
                <div className="dom-ico">⚙️</div>
                <h4>Process KPIs</h4>
              </div>
              <p style={{ fontSize: "13.5px", marginBottom: "4px" }}>
                Control measures owned by process owners, showing whether the process is operating
                as designed before the outcome reveals that it was not.
              </p>
              <ul>
                <li>Two to three measurables per process, defined in the process map itself</li>
                <li>Explicit start point, end point, formula, target, owner and frequency</li>
                <li>Adherence and cycle-time measures rather than activity counts</li>
                <li>Review cadence with a named forum and an escalation path</li>
              </ul>
            </div>
          </div>
          <div
            style={{
              marginTop: "24px",
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: "var(--r2)",
              padding: "26px 30px",
            }}
            className="fade-up"
          >
            <h4 style={{ fontSize: "16px", color: "var(--teal3)", marginBottom: "10px" }}>
              One Template, Every Business Unit
            </h4>
            <p style={{ fontSize: "13.5px", margin: "0", lineHeight: "1.75" }}>
              We build a single KPI definition and tracking structure that every unit populates the
              same way. Comparability is the point. When each unit invents its own format,
              consolidation becomes a monthly reconciliation exercise and the leadership review
              turns into an argument about numbers instead of a discussion about performance.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ SEGMENT TABS ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Who We Work With</span>
            <h2 className="sec-title">Support Scaled to Your Organization</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "760px", marginBottom: "30px" }}>
              Building a first quality system, rescuing one that has drifted, and harmonising
              several across sites are three different problems.
            </p>
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
                    <h3>Building the First System</h3>
                    <p>
                      Certification is needed for a licence, a tender or a customer. There is no
                      existing system, and the templates available online would bury a team of your
                      size in paperwork nobody would read.
                    </p>
                    <ul>
                      <li>No QMS in place, or a purchased template never implemented</li>
                      <li>Certification tied to a licence or customer deadline</li>
                      <li>Small team where everyone already wears several hats</li>
                      <li>No internal auditor and no management review history</li>
                      <li>Genuine risk of building a folder rather than a system</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Process framework and register established before any document is written
                      </li>
                      <li>
                        Process mapping from how you actually work, not from a standard template
                      </li>
                      <li>Minimum viable documentation set sized to your headcount</li>
                      <li>
                        Basic KPI set with proper definitions, so measurement starts correctly
                      </li>
                      <li>Internal auditor training so the system has an owner from day one</li>
                      <li>Certification audit preparation and on-site support</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Full build, from architecture to certificate</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Certified, But the System Has Drifted</h3>
                    <p>
                      The certificate is on the wall. The system underneath it has aged. Documents
                      describe a business that has changed, audit findings repeat year on year, and
                      preparation now takes weeks.
                    </p>
                    <ul>
                      <li>Documented processes no longer reflect actual practice</li>
                      <li>Work instructions missing for most steps</li>
                      <li>Templates designed but not in use</li>
                      <li>KPIs named on a cover slide but never defined</li>
                      <li>Repeat findings across successive audit cycles</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Rubric-scored process audits producing an objective, comparable baseline
                      </li>
                      <li>Documentation rationalisation, removing what nothing depends on</li>
                      <li>Work instruction and template development for the critical gaps</li>
                      <li>
                        KPI definition workshops converting names into measurable specifications
                      </li>
                      <li>Root cause work on repeat findings rather than another CAPA record</li>
                      <li>Process owner coaching so ownership moves out of the quality function</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Audit baseline followed by staged remediation</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Multiple Sites, Divergent Systems</h3>
                    <p>
                      Each site has a quality system. They were built at different times by
                      different people to different interpretations. Harmonising them is obviously
                      right and nobody has the bandwidth to do it.
                    </p>
                    <ul>
                      <li>Site-level systems that diverged over years of independent evolution</li>
                      <li>Multiple standards across ISO 13485, ISO 9001, IATF 16949, MDSAP</li>
                      <li>Inconsistent audit outcomes between locations</li>
                      <li>KPI definitions varying between units reporting the same metric</li>
                      <li>eQMS implementation planned or stalled</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Common process architecture and numbering across all sites</li>
                      <li>Single integrated framework serving every applicable standard</li>
                      <li>Standard process map, work instruction and template formats</li>
                      <li>Rubric-based audit programme giving comparable scores across units</li>
                      <li>One KPI definition structure covering business and process measures</li>
                      <li>Documentation architecture designed for eQMS migration</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Harmonisation programme with capability transfer</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      {/* ═══ STANDARDS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Coverage</span>
            <h2 className="sec-title">Standards We Build Into a Single System</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "790px", marginBottom: "32px" }}>
              The point of an integrated framework is that adding a standard should not mean adding
              a system. Each of these is absorbed into the same process architecture rather than
              maintained alongside it.
            </p>
          </div>
          <div className="std-grid fade-up">
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 13485:2016 (Medical Device QMS)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 9001:2015 (Quality Management)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              IATF 16949 (Automotive QMS)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              AS9100 (Aerospace QMS)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              MDSAP (Medical Device Single Audit Programme)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              US FDA 21 CFR 820 / QMSR
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU MDR 745 / IVDR 746 (QMS Requirements)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              CDSCO MDR 2017 (Quality Requirements)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 14971 (Risk Management)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO/IEC 90003 (Software Quality)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              GxP (GMP, GLP, GDP)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO/IEC 17025 (Testing &amp; Calibration Laboratories)
            </div>
          </div>
        </div>
      </section>
      {/* ═══ IMPACT ═══ */}
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
          <h2>When the Folder Becomes a System</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">📉</div>
              <h4>Less Documentation</h4>
              <p>
                Lean design removes documents that nothing depends on while strengthening the ones
                that carry real control.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🗓️</div>
              <h4>Audit Week Ends</h4>
              <p>
                Preparation stops being an event because the system is maintained continuously
                rather than reassembled annually.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">👥</div>
              <h4>Ownership Spreads</h4>
              <p>
                Process owners hold their own processes. Quality moves from policing the system to
                improving it.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🚀</div>
              <h4>Digital Becomes Possible</h4>
              <p>
                Processes designed for digitization migrate to an eQMS cleanly instead of requiring
                a full redesign first.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ RELATED ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Broader Quality Portfolio</span>
            <h2 className="sec-title">Beyond the Management System</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "770px", marginBottom: "32px" }}>
              The management system sets the framework. These are the areas where it meets the
              product, the supply base, the warehouse floor and the equipment.
            </p>
          </div>
          <div className="rel-grid fade-up">
            <div className="rel-card">
              <div className="rel-ico">🔬</div>
              <h4>Product Quality Management</h4>
              <p>
                New product development quality, verification and validation, tech transfer,
                risk-based inspection protocols and data-driven product improvement.
              </p>
              <Link href="/product-quality" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🔗</div>
              <h4>Supplier Quality Management</h4>
              <p>
                Supplier assessment, monitoring and rating, supplier development and Six Sigma-led
                improvement across the supply base.
              </p>
              <Link href="/supplier-quality" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🏬</div>
              <h4>Warehouse &amp; Logistics Quality</h4>
              <p>
                Warehouse QMS from receiving inspection through dispatch, regulatory compliance
                review, cold chain and transportation validation.
              </p>
              <Link href="/warehouse-logistics-quality" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">⚙️</div>
              <h4>Equipment Qualification</h4>
              <p>
                URS-anchored qualification chain covering DQ, IQ, OQ and PQ with full traceability,
                data integrity and cybersecurity coverage.
              </p>
              <Link href="/equipment-qualification" className="rel-link">
                View Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <h2>Open Your ISO Folder. Ask Someone Why.</h2>
          <p>
            If nobody in the room can explain the intent behind a procedure, the system is
            documentation rather than management. We can score one of your processes against the
            rubric and show you exactly where it stands.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request a QMS Health Check
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
