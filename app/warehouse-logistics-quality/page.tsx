import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { TabPanel, Tabs } from "@/components/Tabs";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Warehouse Management & Logistics Quality | Emerging Sigma Consulting",
  description:
    "Products do not only fail in manufacturing. Warehouse and logistics quality systems from receiving inspection through dispatch, integrating lean processes, regulatory compliance and risk-based controls.",
  path: "/warehouse-logistics-quality",
});

export default function WarehouseLogisticsQualityPage() {
  preloadHero("hero-supplier");

  return (
    <>
      <JsonLd
        data={serviceSchema("Warehouse & Logistics Quality", "/warehouse-logistics-quality")}
      />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Warehouse & Logistics Quality", href: "/warehouse-logistics-quality" },
        ]}
      />
      <section className="eq-hero">
        <div className="wh-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Warehouse &amp; Logistics Quality
          </div>
          <h1>
            Products <span className="hl">Don't Only Fail in Manufacturing</span>
          </h1>
          <p className="lead">
            Exceptional manufacturing cannot protect a product on its own. Inadequate storage, poor
            handling, weak traceability and uncontrolled logistics compromise products long before
            the customer sees them. We build warehouse and logistics quality systems covering{" "}
            <strong>receiving inspection through to dispatch</strong>, integrating lean processes,
            regulatory compliance and risk-based controls to preserve product integrity across the
            supply chain.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#services" className="btn btn-green">
              See Our Services
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss Your Warehouse
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20z" />
                  <path d="M8 21.5v-7h8v7" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Inward to Dispatch,
                <br />
                End to End
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
                Licence &amp; Regulatory
                <br />
                Compliance
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Cold Chain
                <br />
                Validated
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
                Annual Compliance
                <br />
                Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ THE CASE ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Why the Warehouse Matters</span>
            <h2 className="sec-title">The Last Link Is Usually the Least Controlled</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "820px", marginBottom: "36px" }}>
              Enormous effort goes into design controls, process validation, in-process inspection
              and finished goods release. The product then enters a building where quality is
              frequently treated as a logistics matter rather than a quality one, and stays there
              longer than it spent being made.
            </p>
          </div>
          <div className="mvc fade-up">
            <div className="mvc-box meas">
              <div className="mvc-lbl">How It Is Usually Managed</div>
              <h3>As a Storage Function</h3>
              <p>
                Measured on space utilisation, picking accuracy and dispatch turnaround. Staffed by
                teams who never see a quality procedure. Audited, if at all, for stock accuracy
                rather than product condition. Every metric is real and none of them ask whether the
                product is still fit to sell.
              </p>
              <div className="mvc-tag">Operationally sound, quality blind</div>
            </div>
            <div className="mvc-box chg">
              <div className="mvc-lbl">How It Should Be Managed</div>
              <h3>As the Final Quality Gate</h3>
              <p>
                A documented quality system covering receiving inspection, storage conditions,
                traceability, repackaging, returns and outbound release. Trained people, monitored
                environments, calibrated instruments, and a licence position that survives an
                unannounced inspection.
              </p>
              <div className="mvc-tag">Where product condition is protected</div>
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
              For a distributor or importer, the warehouse is not one part of the quality system. It
              is the entire quality system a regulator will see, and it is the only site your
              wholesale licence actually covers.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ THREE SERVICES ═══ */}
      <section className="sec sec-bg" id="services">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Our Services</span>
            <h2 className="sec-title">Three Ways We Engage</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              Build the system, close the regulatory gaps, or hold the position year after year.
              Each is available on its own, and most engagements run through all three in sequence.
            </p>
          </div>
          <div className="proc-grid fade-up">
            <div className="proc-card">
              <span className="proc-n">01</span>
              <div className="proc-ico">🏗️</div>
              <h4>Warehouse QMS Development</h4>
              <ul>
                <li>
                  Complete warehouse quality management system to ISO 13485, ISO 9001 and IATF 16949
                </li>
                <li>Covers product flow from input through to output</li>
                <li>Processes for handling, processing, storage and product preservation</li>
                <li>Documentation, templates and records designed to be used daily</li>
                <li>Team training on the system as built</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">02</span>
              <div className="proc-ico">🔍</div>
              <h4>Regulatory Compliance Review</h4>
              <ul>
                <li>Comprehensive gap analysis identifying areas of non-compliance</li>
                <li>Alignment to FDA, GMP, CDSCO, GDP and other applicable bodies</li>
                <li>Corrective actions established against every gap found</li>
                <li>Documentation updated to the required standard</li>
                <li>Staff trained for consistent compliance and audit readiness</li>
              </ul>
            </div>
            <div className="proc-card">
              <span className="proc-n">03</span>
              <div className="proc-ico">🔄</div>
              <h4>Compliance Monitoring AMC</h4>
              <ul>
                <li>Annual quality and compliance monitoring of the warehouse</li>
                <li>Regular audits against quality and regulatory standards</li>
                <li>Corrective action tracking through to closure</li>
                <li>Process improvement recommendations</li>
                <li>Consistent compliance and operational efficiency maintained</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ QMS PROCESS FLOW ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Warehouse QMS Development</span>
            <h2 className="sec-title">Eight Processes, Following the Product</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              The system is built along the path the product actually takes through the building, so
              every point where condition, identity or traceability could be lost has a control
              attached to it.
            </p>
          </div>
          <div className="fade-up">
            <div className="flow">
              <div className="flow-cell">
                <div className="flow-n">01</div>
                <h4>Material Inward &amp; Receiving Inspection</h4>
                <p>
                  Goods receipt verification, sampling plans, acceptance criteria, quarantine
                  control and supplier documentation checks before stock is released to storage.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">02</div>
                <h4>Storage &amp; Environment Monitoring</h4>
                <p>
                  Storage condition specification, temperature and humidity monitoring, alarm
                  response, mapping studies and segregation of quarantined and rejected stock.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">03</div>
                <h4>Inventory Management &amp; Traceability</h4>
                <p>
                  Batch and serial traceability, FIFO and FEFO discipline, stock reconciliation,
                  expiry management and full genealogy from receipt to dispatch.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">04</div>
                <h4>Repackaging &amp; Labelling</h4>
                <p>
                  Controlled repackaging operations, label verification and reconciliation, line
                  clearance, and compliance to labelling requirements for the destination market.
                </p>
              </div>
            </div>
            <div className="flow-2">
              <div className="flow-cell">
                <div className="flow-n">05</div>
                <h4>Risk Management &amp; CAPA</h4>
                <p>
                  Risk assessment of storage and handling operations, deviation handling,
                  non-conformance management and corrective action through to verified
                  effectiveness.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">06</div>
                <h4>Outbound Quality Control</h4>
                <p>
                  Pre-dispatch inspection, packing verification, documentation accuracy, shipping
                  condition confirmation and release authority before goods leave the building.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">07</div>
                <h4>Calibration &amp; Maintenance</h4>
                <p>
                  Calibration of monitoring instruments and measuring equipment, preventive
                  maintenance of storage infrastructure, and records that stand up to inspection.
                </p>
              </div>
              <div className="flow-cell">
                <div className="flow-n">08</div>
                <h4>Returns &amp; Non-Conforming Material</h4>
                <p>
                  Customer return handling, condition assessment, decision on return to stock or
                  disposal, and controlled handling of non-conforming material throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ REGULATORY COMPLIANCE ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Regulatory Compliance Management</span>
            <h2 className="sec-title">Eight Areas an Inspector Will Examine</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "34px" }}>
              Holding stock carries obligations that go well beyond the quality system. These are
              the areas where warehouse compliance is most often found wanting during a licensing
              inspection.
            </p>
          </div>
          <div className="comp-grid fade-up">
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Warehouse wholesale licences and approvals</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Cold chain and product preservation methods</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Regulatory documentation compliance</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Product permissions and registration documents</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Compliance to metrological requirements</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Compliance to labelling and re-packing requirements</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Compliance to competency and training requirements</span>
            </div>
            <div className="comp-item">
              <div className="comp-c">✓</div>
              <span>Compliance to handling and storage requirements</span>
            </div>
          </div>
          <div
            style={{
              marginTop: "22px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="fade-up"
          >
            <span className="std-badge">CDSCO MD-42 Wholesale Licence</span>{" "}
            <span className="std-badge">GDP</span> <span className="std-badge">GMP</span>{" "}
            <span className="std-badge">US FDA</span> <span className="std-badge">ISO 13485</span>{" "}
            <span className="std-badge">ISO 9001</span>{" "}
            <span className="std-badge">Legal Metrology</span>
          </div>
        </div>
      </section>
      {/* ═══ AMC ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="amc fade-up">
            <div className="amc-in">
              <span className="sec-tag" style={{ color: "#a8e063" }}>
                Annual Maintenance Contract
              </span>
              <h3>Continuous Compliance Monitoring</h3>
              <p>
                Compliance is not a state you reach, it is a position you hold. Our AMC keeps the
                warehouse inspection-ready throughout the year rather than for the fortnight before
                an audit, through scheduled visits, structured self-assessment and tracked
                corrective action.
              </p>
              <div className="amc-grid">
                <div className="amc-item">
                  <span>Compliance self-audit checklists</span>
                </div>
                <div className="amc-item">
                  <span>Monthly visits and compliance reviews</span>
                </div>
                <div className="amc-item">
                  <span>Feedback and reports</span>
                </div>
                <div className="amc-item">
                  <span>Corrective actions</span>
                </div>
                <div className="amc-item">
                  <span>Review of licences and product permissions</span>
                </div>
                <div className="amc-item">
                  <span>Review of product traceability and FIFO</span>
                </div>
                <div className="amc-item">
                  <span>Stock monitoring and expired product handling</span>
                </div>
                <div className="amc-item">
                  <span>Handling and storage infrastructure review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ PACKAGING & LOGISTICS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Packaging &amp; Logistics Quality</span>
            <h2 className="sec-title">The Journey After Dispatch</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "36px" }}>
              Product condition on arrival is decided by packaging design and transport conditions,
              both of which are usually assumed rather than validated. These services establish what
              the product can actually withstand and what the route will actually subject it to.
            </p>
          </div>
          <div className="g3" style={{ gap: "20px" }}>
            <div className="prin-card fade-up">
              <div className="prin-ico">📦</div>
              <h4>Packaging Design &amp; Robustness Analysis</h4>
              <p>
                Packaging evaluated against the physical stresses of the actual distribution route,
                establishing whether the design protects the product or simply contains it.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🔧</div>
              <h4>Packaging Process Review</h4>
              <p>
                Review and analysis of the packing operation itself, covering method consistency,
                material control, sealing integrity and the records the process produces.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">❄️</div>
              <h4>Cold Chain Validation &amp; Analysis</h4>
              <p>
                Validation of temperature-controlled storage and transport, including mapping,
                excursion analysis, monitoring device qualification and response protocols.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">⚠️</div>
              <h4>Logistics Risk Assessment</h4>
              <p>
                Structured risk assessment across the distribution network, identifying where
                product condition, traceability or security is most exposed and what controls close
                the gap.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🚚</div>
              <h4>Transportation Validation Studies</h4>
              <p>
                Studies establishing that the product survives the real journey, covering vibration,
                shock, temperature, humidity and duration on the routes you actually use.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🏭</div>
              <h4>Packaging Process &amp; System Development</h4>
              <p>
                Development of the packaging process and its supporting system, from specification
                and material qualification through to in-process control and release criteria.
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
          <h2>When the Warehouse Joins the Quality System</h2>
          <div className="divider divider-c"></div>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-ico">📉</div>
              <h4>Damage Falls</h4>
              <p>
                Handling, storage and packaging controls remove the losses that were previously
                written off as an unavoidable cost of distribution.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🔎</div>
              <h4>Traceability Holds</h4>
              <p>
                Batch genealogy from receipt to customer, so a recall or complaint investigation
                takes hours rather than days.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">🛡️</div>
              <h4>Inspections Stop Being Events</h4>
              <p>
                A warehouse maintained continuously is inspection-ready by default, including when
                the inspector arrives unannounced.
              </p>
            </div>
            <div className="impact-card">
              <div className="impact-ico">📦</div>
              <h4>Product Arrives Fit to Use</h4>
              <p>
                Validated packaging and transport mean condition on arrival is a designed outcome
                rather than a matter of chance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ SEGMENT TABS ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Who We Work With</span>
            <h2 className="sec-title">Support Scaled to Your Operation</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "760px", marginBottom: "30px" }}>
              A first licensed warehouse, a single site under pressure, and a distributed network
              are three different engagements.
            </p>
          </div>
          <div className="fade-up">
            <Tabs
              kind="seg"
              tabs={[
                { id: "startup", label: "Start-ups & Importers" },
                { id: "small", label: "Single Site Operations" },
                { id: "large", label: "Multi-Site Networks" },
              ]}
            >
              <TabPanel id="startup">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Setting Up Your First Licensed Warehouse</h3>
                    <p>
                      Stock is arriving or about to. A wholesale licence is required, and the
                      building was chosen for rent and location rather than for storage conditions
                      or inspection readiness.
                    </p>
                    <ul>
                      <li>No warehouse quality system in place</li>
                      <li>Wholesale licence application pending or imminent</li>
                      <li>Storage conditions not specified or monitored</li>
                      <li>Team with no exposure to regulated storage</li>
                      <li>Cold chain products with no validated arrangement</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>
                        Facility assessment against licence and storage requirements before
                        commitment
                      </li>
                      <li>
                        Warehouse QMS built to the size of the operation, not to a corporate
                        template
                      </li>
                      <li>Wholesale licence documentation and application support</li>
                      <li>Storage condition specification, mapping and monitoring setup</li>
                      <li>Cold chain arrangement design and validation where applicable</li>
                      <li>Team training on the system as built</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Setup and licensing, end to end</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Operating, But Not Inspection-Ready</h3>
                    <p>
                      The warehouse runs and stock moves. Whether it would survive an unannounced
                      inspection is an open question, and damage and traceability problems surface
                      more often than anyone would like.
                    </p>
                    <ul>
                      <li>Procedures partial or written for a different operation</li>
                      <li>Storage monitoring inconsistent or unrecorded</li>
                      <li>Traceability breaking down under investigation</li>
                      <li>Damage and returns absorbed rather than analysed</li>
                      <li>Audit preparation consuming weeks each cycle</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Regulatory compliance gap analysis across all eight areas</li>
                      <li>Corrective action plan prioritised by inspection risk</li>
                      <li>Process and documentation remediation where gaps are structural</li>
                      <li>Traceability and FIFO discipline rebuilt</li>
                      <li>Packaging and transport validation where damage is recurring</li>
                      <li>Annual compliance monitoring so the position holds</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Gap analysis, remediation, then AMC</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Several Warehouses, Uneven Standards</h3>
                    <p>
                      Multiple locations, some owned and some third-party. Practice varies by site,
                      visibility is limited, and an inspection finding at one location raises
                      questions about all of them.
                    </p>
                    <ul>
                      <li>Own and third-party warehouses operating differently</li>
                      <li>No common standard across the network</li>
                      <li>Third-party providers outside your quality system</li>
                      <li>Cold chain performance varying by route and season</li>
                      <li>Central quality function unable to see site-level reality</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Common warehouse quality standard applied across the network</li>
                      <li>Third-party warehouse qualification and quality agreements</li>
                      <li>Site audits against a single comparable scoring basis</li>
                      <li>Cold chain and transportation validation across routes</li>
                      <li>Compliance dashboard giving central visibility by site</li>
                      <li>Rolling AMC covering every location in the network</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Network standardisation with rolling monitoring</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      {/* ═══ RELATED ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Related Services</span>
            <h2 className="sec-title">Where Warehouse Quality Connects</h2>
            <div className="divider"></div>
          </div>
          <div className="rel-grid fade-up">
            <div className="rel-card">
              <div className="rel-ico">📋</div>
              <h4>Regulatory Affairs</h4>
              <p>
                Wholesale licence applications, product permissions and registration documents, with
                the warehouse position built to satisfy them from the outset.
              </p>
              <Link href="/regulatory" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🏆</div>
              <h4>Quality Management Systems</h4>
              <p>
                The warehouse system built as part of one integrated QMS rather than a separate
                manual maintained alongside it.
              </p>
              <Link href="/quality-management-system" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🔗</div>
              <h4>Supplier Quality Management</h4>
              <p>
                Third-party warehouse providers assessed, monitored and developed under the same
                framework as any other supplier.
              </p>
              <Link href="/supplier-quality" className="rel-link">
                View Page →
              </Link>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🎓</div>
              <h4>Training Programs</h4>
              <p>
                Competency and training compliance is an inspection area in its own right. Modules
                delivered directly to warehouse teams.
              </p>
              <Link href="/training" className="rel-link">
                View Page →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <h2>Ask Your Warehouse for Last Month's Temperature Records</h2>
          <p>
            If they cannot be produced within the hour, complete and reviewed, the storage condition
            was never actually controlled. We can assess where your warehouse stands in a single
            visit.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Request a Warehouse Assessment
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
