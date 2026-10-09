import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { TabPanel, Tabs } from "@/components/Tabs";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Product Quality Management | NPD, Inspection & Improvement | Emerging Sigma Consulting",
  description:
    "End-to-end product quality management across new product development, in-process and finished goods control, inspection systems, data analysis and Six Sigma-led improvement.",
  path: "/product-quality",
});

export default function ProductQualityPage() {
  preloadHero("hero-product-quality");

  return (
    <>
      <JsonLd data={serviceSchema("Product Quality Management", "/product-quality")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Product Quality Management", href: "/product-quality" },
        ]}
      />
      <section className="eq-hero">
        <div className="pq-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Product Quality Management
          </div>
          <h1>
            Quality Is Decided in Development.{" "}
            <span className="hl">Inspection Only Discovers It.</span>
          </h1>
          <p className="lead">
            By the time a defect reaches finished goods inspection, the decision that caused it was
            taken weeks earlier in design, process development or tech transfer. We build product
            quality systems across the <strong>full lifecycle</strong>, from new product development
            through in-process and finished goods control to the data analysis that turns field
            performance back into design input.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#lifecycle" className="btn btn-green">
              See the Lifecycle
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Products
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v18M3 12h18" strokeWidth="1.4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Quality Built In
                <br />
                at NPD
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
                Risk-Based
                <br />
                Inspection
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
                Data That Drives
                <br />
                Improvement
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
                Field Data Back
                <br />
                Into Design
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ LIFECYCLE ═══ */}
      <section className="sec" id="lifecycle">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Where Quality Is Won</span>
            <h2 className="sec-title">The Same Defect Costs More at Every Stage</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "40px" }}>
              A design decision corrected on a drawing costs an afternoon. The same issue found at a
              customer costs recall logistics, complaint investigation, regulatory reporting and
              reputation. Most quality budgets are spent at the expensive end of this curve because
              that is where the problems become visible.
            </p>
          </div>
          <div className="lc fade-up">
            <div className="lc-col">
              <div className="lc-bar lc-b1">
                <div className="lc-cost">Lowest</div>
              </div>
              <div className="lc-body">
                <h4>Design</h4>
                <p>
                  Requirements, risk analysis and design controls. Corrections cost drawing time and
                  review effort.
                </p>
              </div>
            </div>
            <div className="lc-col">
              <div className="lc-bar lc-b2">
                <div className="lc-cost">Low</div>
              </div>
              <div className="lc-body">
                <h4>Process Development</h4>
                <p>
                  Tech transfer, validation and safe launch. Corrections cost trials,
                  requalification and delay.
                </p>
              </div>
            </div>
            <div className="lc-col">
              <div className="lc-bar lc-b3">
                <div className="lc-cost">High</div>
              </div>
              <div className="lc-body">
                <h4>Production</h4>
                <p>
                  Scrap, rework, sorting, line stoppage and the inspection capacity built to contain
                  the problem.
                </p>
              </div>
            </div>
            <div className="lc-col">
              <div className="lc-bar lc-b4">
                <div className="lc-cost">Highest</div>
              </div>
              <div className="lc-body">
                <h4>Field</h4>
                <p>
                  Complaints, warranty, recall logistics, adverse event reporting, regulatory
                  exposure and reputation.
                </p>
              </div>
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
              Consistent product quality is not a goal to be reached. It is a strategy, and it is
              executed earliest where it costs least. Our services are structured along this curve
              rather than concentrated at the inspection end of it.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ HUB ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">How It Connects</span>
            <h2 className="sec-title">Product Quality Sits at the Centre</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "34px" }}>
              Product quality is not a standalone function. It draws on the supplier base, the
              equipment, the quality system and the data around it. Where one of those is weak,
              product quality carries the cost.
            </p>
          </div>
          <div className="hs-grid fade-up">
            <div className="hs-core">
              <h3>Product Quality Management</h3>
              <p>
                Establishing processes to improve and control product quality for new and existing
                products, across the full production lifecycle.
              </p>
            </div>
            <div className="hs-node">
              <h4>Quality in New Product Development</h4>
              <p>
                NPD process, risk management, verification and validation, tech transfer and safe
                launch, so quality is designed in rather than inspected in.
              </p>
            </div>
            <div className="hs-node">
              <h4>In-Process &amp; Finished Goods Quality</h4>
              <p>
                Receiving inspection, in-process control, finished product release, calibration
                systems and measurement system analysis.
              </p>
            </div>
            <div className="hs-node">
              <h4>Data Analysis &amp; Product Improvement</h4>
              <p>
                Inspection data turned into improvement direction, with complaint, warranty and
                field performance analysis feeding back into design.
              </p>
            </div>
            <div className="hs-node">
              <h4>Supplier Evaluation &amp; Development</h4>
              <p>
                Incoming quality is decided at the supplier. Assessment, monitoring, development and
                improvement across the supply base.
                <Link href="/supplier-quality">View Supplier Quality →</Link>
              </p>
            </div>
            <div className="hs-node">
              <h4>Equipment Qualification &amp; Validation</h4>
              <p>
                DQ, IQ, OQ and PQ, because a process cannot be capable on equipment that was never
                qualified against a requirement.
                <Link href="/equipment-qualification">View Equipment Qualification →</Link>
              </p>
            </div>
            <div className="hs-node">
              <h4>Packaging &amp; Logistics Quality</h4>
              <p>
                Packaging robustness, cold chain validation and transportation studies, so condition
                on arrival is designed rather than assumed.
                <Link href="/warehouse-logistics-quality">View Warehouse &amp; Logistics →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ NPD ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Stage One</span>
            <h2 className="sec-title">New Product Development Quality</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "34px" }}>
              The cheapest place to build quality and the place it is most often left to chance.
              These four services cover the path from development process through to a controlled
              launch.
            </p>
          </div>
          <div className="quad fade-up">
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">01</div>
                <h4>NPD Process Development</h4>
              </div>
              <p>
                The development framework itself, built so that quality decisions have a defined
                point at which they are made and reviewed.
              </p>
              <ul>
                <li>End-to-end NPD process</li>
                <li>Risk management system</li>
                <li>Verification and validation system</li>
                <li>Tech transfer system</li>
                <li>Safe launch system</li>
                <li>Change management system</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">02</div>
                <h4>V&amp;V Support Services</h4>
              </div>
              <p>
                Verification and validation executed properly rather than assembled retrospectively
                to satisfy a design history file.
              </p>
              <ul>
                <li>V&amp;V planning</li>
                <li>V&amp;V templates</li>
                <li>Conducting verification and validation activities</li>
                <li>Review of V&amp;V results</li>
                <li>Improvement and change control</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">03</div>
                <h4>Manufacturing Tech Transfer</h4>
              </div>
              <p>
                The handover from development to production, where capability is either established
                or quietly assumed.
              </p>
              <ul>
                <li>Manufacturing process establishment and review</li>
                <li>Manufacturing and quality team competency review</li>
                <li>Manufacturing and quality infrastructure</li>
                <li>Tech transfer activities management</li>
                <li>Feedback and improvement</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">04</div>
                <h4>Safe Launch Management</h4>
              </div>
              <p>
                Enhanced control through the early production period, when process capability is
                least proven and escape risk is highest.
              </p>
              <ul>
                <li>Safe launch planning</li>
                <li>Specific QC protocols established for new launches</li>
                <li>Initial product performance monitoring</li>
                <li>Support in gap identification</li>
                <li>Problem solving and improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ QUALITY MANAGEMENT ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Stage Two</span>
            <h2 className="sec-title">Product Quality Management Services</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "34px" }}>
              The systems, protocols, infrastructure and analysis that control quality through
              routine production.
            </p>
          </div>
          <div className="quad fade-up">
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">01</div>
                <h4>Product Quality Systems</h4>
              </div>
              <p>
                The core inspection and measurement systems, built to work across incoming,
                in-process and finished goods.
              </p>
              <ul>
                <li>Receiving inspection system development</li>
                <li>In-process quality system development</li>
                <li>Finished product quality system development</li>
                <li>Calibration system development</li>
                <li>Measurement system analysis</li>
                <li>Laboratory development support</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">02</div>
                <h4>Inspection Protocols &amp; Templates</h4>
              </div>
              <p>
                Protocols that inspect what actually carries risk, on templates that produce data
                worth analysing.
              </p>
              <ul>
                <li>Risk-based inspection protocols</li>
                <li>Covering customer and regulatory requirements</li>
                <li>Error-free data recording mechanisms</li>
                <li>Comprehensive and concise templates</li>
                <li>Analysis-friendly reporting formats</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">03</div>
                <h4>Data Analysis &amp; Automation</h4>
              </div>
              <p>
                Inspection generates data continuously. Most of it is filed rather than read. We
                build the analysis and reporting layer that turns it into improvement direction.
              </p>
              <ul>
                <li>Data analysis tools established against the inspection process</li>
                <li>Report automation to remove manual compilation</li>
                <li>Output structured to show where improvement is needed</li>
                <li>Trend and capability visibility rather than pass and fail counts</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">04</div>
                <h4>Inspection Infrastructure &amp; Training</h4>
              </div>
              <p>
                The physical and human capability behind the protocol, since neither works without
                the other.
              </p>
              <ul>
                <li>Laboratory establishment and layout</li>
                <li>Equipment and instrument selection</li>
                <li>Environmental requirements for reliable measurement</li>
                <li>QC team training to improve inspection efficiency and effectiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ IMPROVEMENT ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Stage Three</span>
            <h2 className="sec-title">Product Quality Improvement Services</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "34px" }}>
              What the product does in the field is the most honest quality data available. These
              services convert it into design and process change rather than leaving it in a
              complaint log.
            </p>
          </div>
          <div className="quad fade-up">
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">01</div>
                <h4>Customer Data Analysis &amp; MIS</h4>
              </div>
              <p>
                The systems that capture what the market is telling you, in a form that can be
                analysed rather than only answered.
              </p>
              <ul>
                <li>Customer complaint handling system</li>
                <li>Warranty and in-use data analysis system</li>
                <li>Internal product performance monitoring</li>
                <li>In-process data analysis system</li>
                <li>Response time monitoring system</li>
                <li>Customer feedback system</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">02</div>
                <h4>Product Problem Analysis Systems</h4>
              </div>
              <p>
                Structured analysis methods applied consistently, so recurring problems are
                recognised as recurring rather than handled individually each time.
              </p>
              <ul>
                <li>Complaint analysis mechanisms</li>
                <li>Warranty and used part quality improvement</li>
                <li>Internal first time right analysis and improvement</li>
                <li>Logistics and storage problem analysis methods</li>
                <li>Problem analysis and CAPA methods</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">03</div>
                <h4>Support in Critical Problem Solving</h4>
              </div>
              <p>
                Identification of critical customer and internal product problems, followed by
                project-based resolution through Six Sigma methodology to achieve customer
                satisfaction and defect reduction.
              </p>
              <ul>
                <li>Critical problem identification against cost and risk</li>
                <li>DMAIC projects run on your own product data</li>
                <li>Defect reduction with statistically verified gains</li>
                <li>Control plan updates so the gain holds</li>
              </ul>
            </div>
            <div className="quad-card">
              <div className="quad-head">
                <div className="quad-n">04</div>
                <h4>Training &amp; Development Services</h4>
              </div>
              <p>
                Capability transferred so the analysis continues without us, delivered alongside the
                improvement work rather than separately from it.
              </p>
              <ul>
                <li>Training on problem solving methods</li>
                <li>Training on risk assessment methods</li>
                <li>Training on verification and validation methods</li>
                <li>Training on product and process audits</li>
                <li>Training on adverse event reporting</li>
                <li>Training on post-market surveillance</li>
              </ul>
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
          <h2>When Quality Moves Upstream</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">🛡️</div>
              <h4>Reliability Improves</h4>
              <p>
                Risk addressed at design and validated at tech transfer produces products that hold
                up in use rather than in test.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">💰</div>
              <h4>Cost of Quality Falls</h4>
              <p>
                Less scrap, less rework, less containment inspection and fewer warranty claims,
                because fewer defects are created.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">😊</div>
              <h4>Customer Satisfaction Rises</h4>
              <p>
                Faster complaint response, fewer repeat issues and visible closure of the problems
                customers actually reported.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🏅</div>
              <h4>Brand Reputation Strengthens</h4>
              <p>
                Consistent quality compounds. It is the slowest reputation to build and the fastest
                to lose.
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
            <h2 className="sec-title">Support Scaled to Your Organization</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "760px", marginBottom: "30px" }}>
              Launching a first product, stabilising an existing one, and improving a portfolio
              across sites are three different engagements.
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
                    <h3>First Product, First Launch</h3>
                    <p>
                      The device works in the lab. Moving it into repeatable manufacture is a
                      different problem, and the design history file needs to hold up under
                      regulatory review.
                    </p>
                    <ul>
                      <li>No formal NPD process or design controls</li>
                      <li>Verification and validation planned informally</li>
                      <li>Tech transfer to a contract manufacturer or first line</li>
                      <li>No inspection protocols or QC infrastructure</li>
                      <li>Launch date driving everything</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        NPD process and design control framework built to the standard you must
                        satisfy
                      </li>
                      <li>Risk management to ISO 14971 with documentation that stands review</li>
                      <li>V&amp;V planning, templates and execution support</li>
                      <li>Tech transfer management to your line or contract manufacturer</li>
                      <li>Inspection protocols and QC infrastructure sized to your volumes</li>
                      <li>Safe launch monitoring through the first production period</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>NPD framework through to controlled launch</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Producing, But Containing Rather Than Controlling</h3>
                    <p>
                      Product ships and customers are served. It takes more inspection, more sorting
                      and more firefighting than it should, and the same problems keep returning.
                    </p>
                    <ul>
                      <li>Inspection volume compensating for process capability</li>
                      <li>Recurring defects handled individually each time</li>
                      <li>Complaint data collected but never analysed</li>
                      <li>Calibration and MSA informal or absent</li>
                      <li>Improvement dependent on one or two capable people</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Risk-based inspection protocol redesign to inspect what matters</li>
                      <li>
                        Measurement system analysis to separate process variation from gauge error
                      </li>
                      <li>Data analysis and report automation on existing inspection data</li>
                      <li>Six Sigma projects on the defects carrying the most cost</li>
                      <li>Complaint and warranty analysis systems built</li>
                      <li>Team training so analysis continues after the engagement</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>System redesign with targeted improvement projects</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Portfolio Scale, Uneven Practice</h3>
                    <p>
                      Multiple products across multiple sites. Some lines are well controlled and
                      others are not, and the difference is difficult to see until a complaint
                      pattern emerges.
                    </p>
                    <ul>
                      <li>Inspection practice varying by site and product family</li>
                      <li>Field data held in systems that do not talk to each other</li>
                      <li>NPD quality applied inconsistently across programmes</li>
                      <li>Post-market surveillance obligations at portfolio scale</li>
                      <li>Improvement capacity committed to the loudest problems</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Common inspection and MSA standards across sites and families</li>
                      <li>Consolidated product performance analysis across the portfolio</li>
                      <li>NPD quality gates applied uniformly to every programme</li>
                      <li>Post-market surveillance and adverse event reporting system design</li>
                      <li>Six Sigma programme targeting portfolio-level cost of poor quality</li>
                      <li>Capability building so improvement scales beyond our involvement</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Standardisation with portfolio-level improvement</strong>
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
          <h2>Look at Last Year's Top Three Defects</h2>
          <p>
            If the same three appear again this year, the containment is working and the improvement
            is not. Tell us the defect and we will tell you where in the lifecycle it is actually
            being created.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request a Product Quality Review
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
