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
    "Supplier Quality Management | Assessment, Development & Improvement | Emerging Sigma Consulting",
  description:
    "Your products can never be better than your suppliers. Structured supplier assessment, monitoring, development and Six Sigma-led improvement that builds supplier capability.",
  path: "/supplier-quality",
});

export default function SupplierQualityPage() {
  preloadHero("hero-supplier");

  return (
    <>
      <JsonLd data={serviceSchema("Supplier Quality Management", "/supplier-quality")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Supplier Quality Management", href: "/supplier-quality" },
        ]}
      />
      <section className="eq-hero">
        <div className="sq-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Supplier Quality Management
          </div>
          <h1>
            Your Products Can Never Be <span className="hl">Better Than Your Suppliers</span>
          </h1>
          <p className="lead">
            Most organizations measure supplier performance. Few have a structured approach to{" "}
            <strong>building supplier capability</strong>. We transform suppliers into reliable
            partners that consistently deliver on quality, compliance and business performance.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#framework" className="btn btn-green">
              See the Framework
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Supply Base
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.5 16.5L21 21" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Objective Supplier
                <br />
                Assessment
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M3 21h18" />
                  <rect x="4.5" y="12" width="3.5" height="7" />
                  <rect x="10.2" y="7.5" width="3.5" height="11.5" />
                  <rect x="16" y="14.5" width="3.5" height="4.5" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Rating Systems
                <br />
                That Drive Action
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Six Sigma-Led
                <br />
                Improvement
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
                Time-Bound
                <br />
                Results
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ THE DISTINCTION ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">The Distinction That Matters</span>
            <h2 className="sec-title">Measuring a Supplier Is Not the Same as Changing One</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "36px" }}>
              Inconsistent quality, delivery delays and poor communication drive cost and disruption
              through the whole operation. Most organizations respond by measuring harder. More
              audits, tighter scorecards, sharper escalation. The measurement improves. The supplier
              frequently does not, because nothing in that cycle actually reaches their process.
            </p>
          </div>
          <div className="mvc fade-up">
            <div className="mvc-box meas">
              <div className="mvc-lbl">What Most Programmes Do</div>
              <h3>Measure the Supplier</h3>
              <p>
                Approved vendor lists, periodic audits, PPM tracking, delivery scorecards,
                escalation letters and quarterly business reviews. All of it necessary. All of it
                describes the problem with increasing precision while leaving the supplier to solve
                it alone, usually with capability they do not have.
              </p>
              <div className="mvc-tag">Necessary, but not sufficient</div>
            </div>
            <div className="mvc-box chg">
              <div className="mvc-lbl">What Actually Closes the Gap</div>
              <h3>Develop the Supplier</h3>
              <p>
                Technical people inside the supplier's process, working on their controls, their
                capability studies, their problem solving and their systems. Defect reduction
                happens where the defect is created, which is why capability transfer changes
                performance in a way that pressure does not.
              </p>
              <div className="mvc-tag">Where performance actually moves</div>
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
              Our framework carries both halves. Assessment and monitoring tell you where you stand.
              Development and improvement are what change it. Programmes that stop after the first
              two produce excellent reporting on a problem that persists.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ FRAMEWORK ═══ */}
      <section className="sec sec-bg" id="framework">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Framework</span>
            <h2 className="sec-title">Four Stages, From Knowing to Changing</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              Each stage is available independently. Most engagements begin at whichever stage
              matches where the supply base currently sits, then move forward.
            </p>
          </div>
          <div className="fr-wrap fade-up">
            <div className="fr-band measure">Stages 1 &amp; 2: Understanding Where You Stand</div>
            <div className="fr-cell m1">
              <div className="fr-in">
                <div className="fr-n">STAGE 01</div>
                <div className="fr-ico">🔍</div>
                <h3>Supplier Assessment</h3>
                <p>
                  On-demand assessment of selected suppliers to objectively evaluate financial
                  stability, technical competency, infrastructure and quality management system.
                </p>
                <ul>
                  <li>Financial stability and business continuity review</li>
                  <li>Technical competency against your product requirements</li>
                  <li>Infrastructure, capacity and equipment capability</li>
                  <li>Quality management system maturity assessment</li>
                  <li>On-site audit with a structured scoring basis</li>
                  <li>Approval recommendation with conditions where relevant</li>
                </ul>
              </div>
            </div>
            <div className="fr-cell m2">
              <div className="fr-in">
                <div className="fr-n">STAGE 02</div>
                <div className="fr-ico">📊</div>
                <h3>Supplier Monitoring</h3>
                <p>
                  Development of an effective supplier monitoring and rating system to evaluate
                  overall performance and identify non-performing suppliers with improvement needs
                  and CAPA requirements.
                </p>
                <ul>
                  <li>Rating system design covering quality, delivery and responsiveness</li>
                  <li>Objective weighting so scores drive decisions rather than debate</li>
                  <li>Performance review cadence with defined escalation triggers</li>
                  <li>Non-performing supplier identification against clear thresholds</li>
                  <li>CAPA requests raised with verification of effectiveness</li>
                  <li>Supply base segmentation by risk and performance</li>
                </ul>
              </div>
            </div>
            <div className="fr-band change">Stages 3 &amp; 4: Changing What You Found</div>
            <div className="fr-cell d1">
              <div className="fr-in">
                <div className="fr-n">STAGE 03</div>
                <div className="fr-ico">🔧</div>
                <h3>Supplier Development</h3>
                <p>
                  Evaluating organizational expectations from the supplier and supporting the
                  development of supplier products and processes to meet long-term quality and
                  supply requirements.
                </p>
                <ul>
                  <li>Expectation definition, translated into supplier-side requirements</li>
                  <li>Product and process development support at the supplier</li>
                  <li>Process capability establishment and control plan development</li>
                  <li>Quality system strengthening where the gap is systemic</li>
                  <li>New part introduction and safe launch support</li>
                  <li>Long-term capability building rather than one-off correction</li>
                </ul>
              </div>
            </div>
            <div className="fr-cell d2">
              <div className="fr-in">
                <div className="fr-n">STAGE 04</div>
                <div className="fr-ico">🚀</div>
                <h3>Supplier Improvement</h3>
                <p>
                  Deployment of our technical experts to improve the overall quality and delivery
                  performance of an individual supplier, a group of suppliers, or the entire supply
                  base within a specific time frame.
                </p>
                <ul>
                  <li>Technical experts deployed on site at the supplier</li>
                  <li>Six Sigma DMAIC applied to the supplier's own defect data</li>
                  <li>Individual, group or full supply base scope</li>
                  <li>Defined improvement targets agreed before work begins</li>
                  <li>Time-bound delivery against an agreed schedule</li>
                  <li>Handover so the supplier sustains the gain independently</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Service Highlights</span>
            <h2 className="sec-title">How Our Supplier Programmes Work</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              Engagements are structured to fit around your existing supplier quality function
              rather than replace it, and to produce results within a horizon your business can plan
              against.
            </p>
          </div>
          <div className="hi-grid fade-up">
            <div className="hi-card">
              <div className="hi-ring">🧩</div>
              <h4>Customised Modular Services</h4>
              <p>
                Take one stage or the full framework. Modules combine to match where your supply
                base actually needs work.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🎓</div>
              <h4>Supplier Training Modules</h4>
              <p>
                Training delivered directly to your suppliers, lifting their capability rather than
                only documenting the shortfall.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">👷</div>
              <h4>Dedicated Resources</h4>
              <p>
                Named technical people assigned to the programme, present at the supplier rather
                than reviewing from a distance.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🔄</div>
              <h4>End to End Solutions</h4>
              <p>
                Assessment through to sustained improvement, so no stage is left dependent on a
                handover that never happens.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">📐</div>
              <h4>Six Sigma Methodology</h4>
              <p>
                Improvement work runs on DMAIC with the supplier's own data, so gains are verified
                statistically rather than claimed.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🎯</div>
              <h4>Focused Effort</h4>
              <p>
                Scope agreed to the suppliers and defects that carry the most cost, instead of
                spreading thinly across the whole base.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">⏱️</div>
              <h4>Time Bound Results</h4>
              <p>
                Improvement targets and completion dates agreed before work starts, and reported
                against throughout.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🤝</div>
              <h4>Enhanced Collaboration</h4>
              <p>
                Programmes designed to strengthen the relationship, because suppliers improve faster
                as partners than as respondents.
              </p>
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
          <h2>When Development Follows Measurement</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">📉</div>
              <h4>Defects Fall at Source</h4>
              <p>
                Problems are solved where they are created rather than screened at incoming
                inspection at your own cost.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🚚</div>
              <h4>Delivery Stabilises</h4>
              <p>
                Process capability and planning discipline at the supplier turn erratic delivery
                into something you can schedule against.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">💰</div>
              <h4>Cost of Poor Quality Drops</h4>
              <p>
                Less incoming inspection, less sorting, less rework, fewer line stoppages and fewer
                expedited shipments.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🛡️</div>
              <h4>Supply Risk Reduces</h4>
              <p>
                A capable supplier is a resilient one. Development converts single-source exposure
                into a manageable position.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ SEGMENT TABS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Who We Work With</span>
            <h2 className="sec-title">Support Scaled to Your Supply Base</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "760px", marginBottom: "30px" }}>
              Qualifying a first supplier, fixing a handful of problem accounts, and governing
              hundreds of suppliers across sites are three different engagements.
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
                    <h3>Choosing Suppliers You Cannot Yet Assess</h3>
                    <p>
                      Volumes are small, so leverage is limited and suppliers are selected largely
                      on price and willingness. Getting the first choices right matters
                      disproportionately, because switching later is expensive.
                    </p>
                    <ul>
                      <li>No formal supplier approval process</li>
                      <li>Selection driven by price and availability</li>
                      <li>Low volumes offering little commercial leverage</li>
                      <li>No capability to audit a supplier technically</li>
                      <li>Regulatory expectation of supplier control already applying</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Supplier assessment on your shortlisted candidates before commitment</li>
                      <li>
                        Approval criteria defined and documented to satisfy ISO 13485 and MDR
                        expectations
                      </li>
                      <li>Purchase specification and quality agreement drafting</li>
                      <li>Incoming inspection strategy sized to your volumes</li>
                      <li>Simple monitoring format that a small team can actually maintain</li>
                      <li>Escalation path for when a supplier underperforms</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Assessment and approval framework setup</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>A Few Suppliers Causing Most of the Pain</h3>
                    <p>
                      The scorecard is maintained and the problem accounts are well known. What is
                      missing is anyone with the time and technical depth to go and fix them.
                    </p>
                    <ul>
                      <li>Rating system in place but improvement not following</li>
                      <li>Two or three suppliers driving most quality escapes</li>
                      <li>Incoming inspection absorbing cost that should not exist</li>
                      <li>Supplier quality shared with other responsibilities</li>
                      <li>Suppliers lacking the capability to solve their own problems</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Focused improvement on the suppliers carrying the most cost</li>
                      <li>Technical experts deployed on site at the supplier</li>
                      <li>Six Sigma DMAIC applied to the supplier's own defect data</li>
                      <li>Process capability and control plan development at the supplier</li>
                      <li>
                        Supplier training modules where the gap is capability rather than effort
                      </li>
                      <li>Rating system refinement so it prompts action rather than reporting</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Targeted supplier improvement, time-bound</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Large Base, Uneven Standards</h3>
                    <p>
                      Hundreds of suppliers across categories and geographies, assessed differently
                      by different sites. Where the real risk sits is difficult to establish, and
                      development capacity is committed long before it reaches the tail.
                    </p>
                    <ul>
                      <li>Large supply base with inconsistent assessment standards</li>
                      <li>Ratings not comparable across sites or categories</li>
                      <li>Development capacity absorbed by a few large accounts</li>
                      <li>Regulatory obligation to demonstrate supplier control at scale</li>
                      <li>Supplier audits generating findings that are never closed</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Common assessment standard and rating methodology across all sites</li>
                      <li>Supply base segmentation by risk, spend and performance</li>
                      <li>Group improvement programmes covering multiple suppliers together</li>
                      <li>Supplier training modules deployed across a category or tier</li>
                      <li>Auditor calibration so scores mean the same thing everywhere</li>
                      <li>Capability transfer to your own supplier quality engineers</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Programme standardisation with group improvement</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      {/* ═══ RELATED ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Related Services</span>
            <h2 className="sec-title">Where Supplier Quality Connects</h2>
            <div className="divider"></div>
          </div>
          <div className="rel-grid fade-up">
            <div className="rel-card">
              <div className="rel-ico">🏆</div>
              <h4>Quality Management Systems</h4>
              <p>
                Supplier control is a clause in every standard. We build the purchasing and supplier
                evaluation processes into the QMS rather than running them alongside it.
              </p>
              <Link href="/quality-management-system" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🎓</div>
              <h4>Training Programs</h4>
              <p>
                Supplier training modules drawn from the same four-level curriculum, delivered
                directly to your supply base.
              </p>
              <Link href="/training" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">⚙️</div>
              <h4>Equipment Qualification</h4>
              <p>
                Where a supplier's capability gap is equipment-related, qualification work at their
                site addresses the cause rather than the symptom.
              </p>
              <Link href="/equipment-qualification" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🏬</div>
              <h4>Warehouse &amp; Logistics</h4>
              <p>
                Incoming goods control is where supplier performance is first measured. Receiving,
                storage and handling decide whether qualified material stays conforming.
              </p>
              <Link href="/warehouse-logistics-quality" className="rel-link">
                View Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <h2>Name Your Three Worst Suppliers</h2>
          <p>
            If you already know who they are, the measurement has done its job. The question is what
            happens next. Tell us the defect and we will tell you what a time-bound improvement
            programme would involve.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Discuss a Supplier Programme
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
