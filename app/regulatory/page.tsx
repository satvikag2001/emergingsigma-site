import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { TabPanel, Tabs } from "@/components/Tabs";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Regulatory Affairs | CDSCO India, EU MDR, US FDA | Emerging Sigma Consulting",
  description:
    "CDSCO medical device registration and licensing in India. MD-5, MD-9, MD-15, MD-42 licence support, plus EU MDR, US FDA and BIS certification.",
  path: "/regulatory",
});

export default function RegulatoryPage() {
  preloadHero("hero-regulatory");

  return (
    <>
      <JsonLd data={serviceSchema("Regulatory Affairs", "/regulatory")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Regulatory Affairs", href: "/regulatory" },
        ]}
      />
      {/* ═══ HERO ═══ */}
      <section className="eq-hero">
        <div className="reg-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Regulatory Affairs
          </div>
          <h1>
            Your Device Is Ready.{" "}
            <span className="hl">Getting It Approved Should Not Take Two Years.</span>
          </h1>
          <p className="lead">
            Most CDSCO timelines slip not because the device fails, but because the dossier invites
            questions. We build submissions that{" "}
            <strong>anticipate the query before the reviewer raises it</strong>, then carry you
            through licensing, audits and post-approval obligations.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#india" className="btn btn-green">
              India / CDSCO Services
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Submission
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.5l7.5 3v6c0 4.6-3.1 8.6-7.5 10-4.4-1.4-7.5-5.4-7.5-10v-6z" />
                  <path d="M8.7 12l2.3 2.3 4.3-4.6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Correct Classification
                <br />
                from Day One
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
                Query-Resistant
                <br />
                Dossiers
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
                Predictable
                <br />
                Approval Timelines
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0" />
                  <path d="M3 12h18M12 3c2.3 2.5 3.5 5.6 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.6-3.5-9s1.2-6.5 3.5-9z" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                India First,
                <br />
                Global Ready
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
            <h2 className="sec-title">Where Indian Regulatory Submissions Lose Time</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "780px", marginBottom: "44px" }}>
              CDSCO approval is rarely refused outright. It is delayed, one query at a time, until a
              six-month plan becomes an eighteen-month one. These are the causes we see most often.
            </p>
          </div>
          <div className="chal-grid">
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">1</div>
                <h4>The device is classified wrong at the outset</h4>
              </div>
              <p>
                Classification drives the licence type, the authority, the fee, the evidence burden
                and the timeline. Get it wrong and every downstream document is built on a false
                foundation. Reclassification mid-process means starting again.
              </p>
              <div className="chal-cost">⚠ Full resubmission, months lost</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">2</div>
                <h4>The dossier invites queries it could have prevented</h4>
              </div>
              <p>
                Reviewers raise questions where documentation is thin, inconsistent or silent. Each
                query cycle adds weeks. A dossier assembled to satisfy a checklist behaves very
                differently from one assembled to answer a reviewer's likely objections.
              </p>
              <div className="chal-cost">⚠ Repeated query cycles</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">3</div>
                <h4>The Authorised Indian Agent is chosen commercially</h4>
              </div>
              <p>
                Foreign manufacturers frequently appoint their distributor as agent. The licence
                then sits in the distributor's name. Changing distributors later means surrendering
                and reapplying, with all the delay that implies.
              </p>
              <div className="chal-cost">⚠ Market access tied to one partner</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">4</div>
                <h4>Central and State authority routing is confused</h4>
              </div>
              <p>
                Class A and B manufacturing sits with the State Licensing Authority. Class C and D
                sits with the Central Licensing Authority. Imports are always central. Filing to the
                wrong authority costs the entire submission window.
              </p>
              <div className="chal-cost">⚠ Application returned unprocessed</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">5</div>
                <h4>Plant and Device Master Files are treated as formality</h4>
              </div>
              <p>
                The PMF and DMF are the substance of the submission, not covering paperwork. Weak
                master files are the single most common trigger for extended query cycles and for
                adverse findings during the licensing audit.
              </p>
              <div className="chal-cost">⚠ Audit findings and rework</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">6</div>
                <h4>The QMS is not audit-ready when the audit arrives</h4>
              </div>
              <p>
                Licensing for Class C and D includes an inspection. Organizations often prepare the
                dossier thoroughly and the quality system barely at all, then face findings on a
                system that was never built to be examined.
              </p>
              <div className="chal-cost">⚠ Licence withheld pending CAPA</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">7</div>
                <h4>Test licence requirements are discovered late</h4>
              </div>
              <p>
                Import for demonstration, evaluation, clinical investigation or training requires
                its own permission. Teams frequently learn this after shipment has been arranged,
                stranding consignments at port.
              </p>
              <div className="chal-cost">⚠ Consignments held at customs</div>
            </div>
            <div className="chal-card fade-up">
              <div className="chal-head">
                <div className="chal-no">8</div>
                <h4>Post-approval obligations lapse quietly</h4>
              </div>
              <p>
                Licence renewal windows, change notifications, adverse event reporting and
                post-market surveillance carry no reminder. Non-compliance surfaces at renewal or
                inspection, when the remedy is expensive.
              </p>
              <div className="chal-cost">⚠ Licence suspension risk</div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ INDIA FRAMEWORK ═══ */}
      <section className="sec sec-bg" id="india">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">India · Our Primary Focus</span>
            <h2 className="sec-title">CDSCO and the Medical Devices Rules, 2017</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "36px" }}>
              Every medical device and IVD placed on the Indian market falls under the Medical
              Devices Rules, 2017, administered by the Central Drugs Standard Control Organisation
              under the Drug Controller General of India. Classification determines the licensing
              authority, the evidence required and the time it takes.
            </p>
          </div>
          <div className="fw-grid fade-up">
            <div className="fw-card">
              <div className="fw-cls">A</div>
              <div className="fw-risk">Low Risk</div>
              <p>
                Non-sterile, non-measuring Class A follows a simplified registration route. Sterile
                or measuring Class A requires a manufacturing licence.
              </p>
              <div className="fw-auth">State Authority</div>
            </div>
            <div className="fw-card">
              <div className="fw-cls">B</div>
              <div className="fw-risk">Low-Moderate Risk</div>
              <p>
                Manufacturing licence required, granted by the State Licensing Authority following
                documentation review and inspection.
              </p>
              <div className="fw-auth">State Authority</div>
            </div>
            <div className="fw-card">
              <div className="fw-cls">C</div>
              <div className="fw-risk">Moderate-High Risk</div>
              <p>
                Central licensing with a fuller evidence burden, mandatory audit and typically
                longer review cycles.
              </p>
              <div className="fw-auth">Central Authority</div>
            </div>
            <div className="fw-card">
              <div className="fw-cls">D</div>
              <div className="fw-risk">High Risk</div>
              <p>
                Highest evidence threshold. Clinical data expectations, rigorous master files and
                central inspection apply.
              </p>
              <div className="fw-auth">Central Authority</div>
            </div>
          </div>
          <p
            style={{
              marginTop: "22px",
              fontSize: "13.5px",
              color: "var(--gray4)",
              textAlign: "center",
            }}
          >
            Import licensing is administered centrally for all classes, regardless of device risk
            category.
          </p>
        </div>
      </section>
      {/* ═══ LICENCE MATRIX ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">India · Licensing</span>
            <h2 className="sec-title">Which Licence Applies to You</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "780px", marginBottom: "32px" }}>
              The right pathway depends on whether you manufacture, import, distribute or need
              product for evaluation. We identify the correct route before any application is
              drafted.
            </p>
          </div>
          <div className="lic-tbl fade-up">
            <div className="lic-r lic-h">
              <div className="lic-c">Form</div>
              <div className="lic-c">Licence</div>
              <div className="lic-c">Who It Is For</div>
              <div className="lic-c">Authority</div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-5</div>
              <div className="lic-c">Manufacturing Licence, Class A &amp; B</div>
              <div className="lic-c">Indian manufacturers of low and low-moderate risk devices</div>
              <div className="lic-c">
                <span className="lic-auth sla">State</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-9</div>
              <div className="lic-c">Manufacturing Licence, Class C &amp; D</div>
              <div className="lic-c">
                Indian manufacturers of moderate-high and high risk devices
              </div>
              <div className="lic-c">
                <span className="lic-auth cla">Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-6 / MD-10</div>
              <div className="lic-c">Loan Licence</div>
              <div className="lic-c">Organizations manufacturing at a third-party facility</div>
              <div className="lic-c">
                <span className="lic-auth sla">State / Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-15</div>
              <div className="lic-c">Import Licence</div>
              <div className="lic-c">
                Foreign manufacturers importing through an Authorised Indian Agent
              </div>
              <div className="lic-c">
                <span className="lic-auth cla">Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-13</div>
              <div className="lic-c">Test Licence</div>
              <div className="lic-c">
                Import for evaluation, demonstration, training or examination
              </div>
              <div className="lic-c">
                <span className="lic-auth cla">Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-42</div>
              <div className="lic-c">Wholesale Licence</div>
              <div className="lic-c">Distributors and stockists selling or stocking devices</div>
              <div className="lic-c">
                <span className="lic-auth sla">State</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-23</div>
              <div className="lic-c">Clinical Investigation Permission</div>
              <div className="lic-c">Sponsors conducting clinical investigation in India</div>
              <div className="lic-c">
                <span className="lic-auth cla">Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">MD-26</div>
              <div className="lic-c">Investigational Device Permission</div>
              <div className="lic-c">
                Import or manufacture of an investigational medical device
              </div>
              <div className="lic-c">
                <span className="lic-auth cla">Central</span>
              </div>
            </div>
            <div className="lic-r">
              <div className="lic-c lic-form">Registration</div>
              <div className="lic-c">Class A Non-Sterile, Non-Measuring</div>
              <div className="lic-c">Simplified online registration route</div>
              <div className="lic-c">
                <span className="lic-auth cla">Central Portal</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <span className="std-badge">ICMR Product Approvals</span>{" "}
            <span className="std-badge">BIS Certification</span>{" "}
            <span className="std-badge">Non-Conviction Certificate</span>{" "}
            <span className="std-badge">Market Standing Certificate</span>{" "}
            <span className="std-badge">Free Sale Certificate</span>
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
              A start-up filing its first submission and a multi-site manufacturer managing a
              licence portfolio need very different things from a regulatory partner.
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
                    <h3>First Submission, No Regulatory Function</h3>
                    <p>
                      The device works. The funding is time-bound. Nobody in the building has taken
                      a product through CDSCO before, and every month of delay is a month of runway.
                    </p>
                    <ul>
                      <li>No in-house regulatory or quality personnel</li>
                      <li>Classification and pathway still uncertain</li>
                      <li>QMS either absent or documented on paper only</li>
                      <li>Investor or tender timelines driving urgency</li>
                      <li>Limited budget for a full-time regulatory hire</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Classification determination and written pathway opinion before spend
                        commits
                      </li>
                      <li>Realistic timeline and cost map so funding can be planned against it</li>
                      <li>Lean ISO 13485 QMS sized to a small team, not a corporate template</li>
                      <li>Full dossier authoring, submission and query handling on your behalf</li>
                      <li>
                        Audit preparation and on-site support through the licensing inspection
                      </li>
                      <li>
                        Handover briefing so your first regulatory hire inherits a working system
                      </li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>End-to-end, single point of accountability</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Growing Portfolio, Stretched Team</h3>
                    <p>
                      You hold licences already. One or two people carry regulatory alongside other
                      duties, and each new product or market stretches capacity that is already
                      fully committed.
                    </p>
                    <ul>
                      <li>Regulatory shared with quality, production or business development</li>
                      <li>Existing licences requiring renewal and change management</li>
                      <li>New product introductions competing for the same attention</li>
                      <li>Export markets opening faster than the team can respond</li>
                      <li>Audit readiness slipping between inspection cycles</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Overflow capacity for submissions your team cannot absorb this quarter
                      </li>
                      <li>
                        Licence portfolio register with renewal and change-notification tracking
                      </li>
                      <li>Dossier review before filing, to intercept queries in advance</li>
                      <li>QMS gap assessment and remediation ahead of inspection</li>
                      <li>Export pathway planning for EU, US and other target markets</li>
                      <li>Training to lift internal capability rather than create dependence</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Retainer or project-based, working alongside your team</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Multi-Site, Multi-Market, Multi-Licence</h3>
                    <p>
                      An established regulatory function exists. The challenge is consistency across
                      sites, visibility across a large licence portfolio, and specialist depth for
                      the submissions that fall outside routine.
                    </p>
                    <ul>
                      <li>Multiple manufacturing sites with divergent practices</li>
                      <li>Large licence portfolio with staggered renewal obligations</li>
                      <li>Simultaneous submissions across India, EU, US and other markets</li>
                      <li>Post-market surveillance and vigilance obligations at scale</li>
                      <li>Internal capability strong in some areas, thin in others</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Specialist support for complex or first-of-kind submissions</li>
                      <li>Harmonisation of regulatory practice across sites and business units</li>
                      <li>Independent dossier and master file review before filing</li>
                      <li>Notified body and regulatory audit preparation across locations</li>
                      <li>Post-market surveillance and PSUR system design at portfolio scale</li>
                      <li>Structured capability building for internal regulatory teams</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Specialist partner supplementing an established function</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
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
            Coverage
          </span>
          <h2>Manufacturing, Imports and Exports</h2>
          <div className="divider divider-c"></div>
          <p
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,.78)",
              maxWidth: "640px",
              margin: "0 auto",
              fontSize: "15.5px",
            }}
          >
            Whether you manufacture in India, import into India, or manufacture in India for global
            markets, the regulatory pathway differs materially. We work across all three.
          </p>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">🏭</div>
              <h4>Manufacturing</h4>
              <p>
                Site licensing, plant and device master files, QMS build, licensing inspection
                support across Class A to D.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📥</div>
              <h4>Imports</h4>
              <p>
                Authorised Indian Agent structuring, import licensing, test licences and consignment
                clearance support.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📤</div>
              <h4>Exports</h4>
              <p>
                CE marking, US FDA pathways, WHO PQ, free sale and market standing certificates for
                outbound markets.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🔄</div>
              <h4>Post-Approval</h4>
              <p>
                Renewals, change notification, vigilance reporting, PSUR and ongoing compliance
                maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ SIX SERVICES ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-title">Six Areas of Regulatory Support</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "760px", marginBottom: "34px" }}>
              From the first classification decision through to post-market obligations that
              continue for the life of the product.
            </p>
          </div>
          <div className="proc-grid fade-up">
            <div className="proc-card">
              <span className="proc-n">01</span>
              <div className="proc-ico">🧭</div>
              <h4>Regulatory Strategy &amp; Approval Pathways</h4>
              <ul>
                <li>Product classification and risk assessment</li>
                <li>
                  Market entry strategy: import, manufacturing, contract manufacturing, private
                  labelling
                </li>
                <li>
                  Approvals across CDSCO, EU MDR 745 and IVDR 746, US FDA 510(k) and PMA, WHO PQ,
                  PMDA, ANVISA, China and Canada
                </li>
                <li>Regulatory roadmap and timeline planning</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">02</span>
              <div className="proc-ico">🔬</div>
              <h4>Clinical Investigation &amp; Performance Evaluation</h4>
              <ul>
                <li>Clinical investigation and performance evaluation plans</li>
                <li>Ethics committee coordination and regulatory submissions</li>
                <li>Clinical data analysis and report compilation</li>
                <li>Regulatory approvals for clinical and performance studies</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">03</span>
              <div className="proc-ico">📁</div>
              <h4>Technical Documentation &amp; Compliance</h4>
              <ul>
                <li>Technical file and dossier preparation</li>
                <li>Site master file and design dossier development</li>
                <li>Performance Evaluation Report support</li>
                <li>Risk assessment documentation</li>
                <li>General Safety and Performance Requirements</li>
                <li>Regulatory labelling compliance</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">04</span>
              <div className="proc-ico">📋</div>
              <h4>Licence Applications &amp; Approvals</h4>
              <ul>
                <li>Manufacturing, import and test licences</li>
                <li>Loan and wholesale licences</li>
                <li>Clinical investigation and performance evaluation approvals</li>
                <li>Query responses and follow-through</li>
                <li>Regulatory certificates: NCC, MSC, FSC</li>
                <li>ICMR product approvals and BIS certification</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">05</span>
              <div className="proc-ico">🛡️</div>
              <h4>QMS Compliance &amp; Audit Support</h4>
              <ul>
                <li>QMS development and gap analysis: ISO 13485, FDA 21 CFR 820, EHS compliance</li>
                <li>GxP compliance covering GMP, GLP and GDP</li>
                <li>Risk management as per ISO 14971</li>
                <li>Regulatory and notified body audit preparation and support</li>
                <li>Post-audit CAPA support</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">06</span>
              <div className="proc-ico">🔁</div>
              <h4>Post-Market Compliance</h4>
              <ul>
                <li>Post-market surveillance and vigilance system implementation</li>
                <li>Adverse event reporting and Periodic Safety Update Reports</li>
                <li>Post-market clinical follow-up</li>
                <li>Change management and licence renewals</li>
                <li>Ongoing compliance support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ GLOBAL MARKETS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Beyond India</span>
            <h2 className="sec-title">Global Market Access</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "780px", marginBottom: "32px" }}>
              Indian manufacturers exporting, and global manufacturers entering India, both need
              pathways that work in more than one jurisdiction. We plan submissions so that work
              done for one market carries into the next.
            </p>
          </div>
          <div className="mkt-grid fade-up">
            <div className="mkt-card">
              <div className="mkt-flag">🇪🇺</div>
              <h4>European Union</h4>
              <div className="mkt-reg">EU MDR 745 · IVDR 746</div>
              <p>
                Technical file and design dossier preparation, CE marking strategy, notified body
                coordination, Clinical Evaluation Report and Performance Evaluation Report, EU
                authorised representative guidance.
              </p>
            </div>
            <div className="mkt-card">
              <div className="mkt-flag">🇺🇸</div>
              <h4>United States</h4>
              <div className="mkt-reg">US FDA</div>
              <p>
                510(k) premarket notification, PMA support, De Novo pathway, QMSR and 21 CFR 820
                compliance, establishment registration and device listing, US agent guidance.
              </p>
            </div>
            <div className="mkt-card">
              <div className="mkt-flag">🌐</div>
              <h4>Other Markets</h4>
              <div className="mkt-reg">WHO PQ · PMDA · ANVISA · Health Canada · China</div>
              <p>
                WHO prequalification dossiers, Japan PMDA submissions, Brazil ANVISA registration,
                Health Canada licensing and China NMPA pathway assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ WHY US ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Why Choose Us</span>
            <h2 className="sec-title">What You Get That You Would Not Otherwise</h2>
            <div className="divider"></div>
          </div>
          <div className="g3" style={{ gap: "20px" }}>
            <div className="why-card fade-up">
              <h4>India Depth, Not India Coverage</h4>
              <p>
                CDSCO is our primary practice rather than one line on a global service list. We know
                how the authorities read a dossier, where queries originate, and what a licensing
                inspection actually examines.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Regulatory and Quality Together</h4>
              <p>
                Submissions fail at the QMS as often as at the dossier. We build both, so the
                quality system that supports your application is the same one that survives the
                audit.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Query Anticipation</h4>
              <p>
                Dossiers are assembled against likely reviewer objections rather than against a
                submission checklist. Fewer query cycles is the difference between six months and
                eighteen.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Senior Attention Throughout</h4>
              <p>
                A boutique practice means the person who scoped your submission is the person who
                writes it. Nothing is delegated down to a junior team after the proposal is signed.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Multi-Market Planning</h4>
              <p>
                Work done for CDSCO is structured so it carries into EU MDR, US FDA and WHO PQ
                submissions rather than being rebuilt from scratch for each market.
              </p>
            </div>
            <div className="why-card fade-up">
              <h4>Beyond the Approval</h4>
              <p>
                Licences require renewal, changes require notification, and vigilance obligations
                continue for the product life. We build the system that keeps those obligations from
                lapsing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ CTA ═══ */}
      <div className="cta-band">
        <div className="wrap">
          <h2>Not Sure Which Pathway Applies?</h2>
          <p>
            Send us the device and its intended use. We will tell you the likely classification, the
            licence you need, the authority you file with and a realistic timeline, at no cost.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request a Pathway Assessment
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
