import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import StatNumber from "@/components/StatNumber";
import { pageMetadata } from "@/lib/metadata";
import { PRINCIPAL } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "About Us | Emerging Sigma Consulting",
  description:
    "25+ years of specialist expertise in medical device quality and regulatory affairs. Meet Emerging Sigma Consulting, serving organizations across India and global markets.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={PRINCIPAL} />
      <Breadcrumbs trail={[{ name: "About Us", href: "/about" }]} />
      <div className="page-hero">
        <div className="wrap">
          <h1>About Emerging Sigma Consulting</h1>
          <p>
            25+ years of specialist expertise in Medical Device Quality &amp; Regulatory Affairs,
            serving organizations across India and global markets.
          </p>
        </div>
      </div>
      {/* MISSION VISION WHO */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="g3" style={{ gap: "2px" }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                padding: "36px 28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "14px" }}>🏢</div>
              <h3 style={{ marginBottom: "10px" }}>Who We Are</h3>
              <div className="divider divider-c"></div>
              <p style={{ fontSize: "14px" }}>
                A boutique specialist consulting firm focused exclusively on Medical Device Quality
                Management and Regulatory Affairs, serving manufacturers, importers, distributors,
                and healthcare organizations in India and internationally.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                padding: "36px 28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "14px" }}>🎯</div>
              <h3 style={{ marginBottom: "10px" }}>Our Mission</h3>
              <div className="divider divider-c"></div>
              <p style={{ fontSize: "14px" }}>
                To build quality and regulatory systems that are not just compliant, but
                self-sustaining. Every solution is tailored to the client's specific processes,
                regulatory environment, and long-term operational goals.
              </p>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                padding: "36px 28px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "34px", marginBottom: "14px" }}>🔭</div>
              <h3 style={{ marginBottom: "10px" }}>Our Vision</h3>
              <div className="divider divider-c"></div>
              <p style={{ fontSize: "14px" }}>
                To be the most trusted quality and regulatory partner for medical device
                organizations in India, recognized for depth of expertise, integrity in approach,
                and the lasting compliance impact we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* COMPANY OVERVIEW */}
      <section className="sec">
        <div className="wrap">
          <div className="g2" style={{ gap: "64px", alignItems: "center" }}>
            <div className="fade-up">
              <span className="sec-tag">Company Overview</span>
              <h2 className="sec-title">
                Specialist Consulting Built on Deep Regulatory Expertise
              </h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "16px" }}>
                Emerging Sigma Consulting was founded with a clear purpose: to provide medical
                device and healthcare organizations with senior-level quality and regulatory
                expertise, without the overhead of large consultancy structures.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Our focus is deliberate and narrow: Quality Management Systems and Regulatory
                Affairs for medical devices. This focused approach allows us to go deeper, stay
                current, and deliver more precise outcomes than generalist consulting firms.
              </p>
              <p style={{ marginBottom: "24px" }}>
                Every engagement is underpinned by a commitment to building systems that are lean,
                digitization-friendly, and self-sustaining, delivering value that extends well
                beyond the consulting engagement itself.
              </p>
              <div style={{ display: "flex", gap: "36px", flexWrap: "wrap" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Merriweather',serif",
                      fontSize: "38px",
                      fontWeight: "700",
                      color: "var(--teal)",
                    }}
                  >
                    25
                    <span style={{ color: "var(--green)" }}>+</span>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      color: "var(--gray4)",
                      marginTop: "4px",
                    }}
                  >
                    Years Experience
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Merriweather',serif",
                      fontSize: "38px",
                      fontWeight: "700",
                      color: "var(--teal)",
                    }}
                  >
                    10
                    <span style={{ color: "var(--green)" }}>+</span>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      color: "var(--gray4)",
                      marginTop: "4px",
                    }}
                  >
                    Global Markets
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Merriweather',serif",
                      fontSize: "38px",
                      fontWeight: "700",
                      color: "var(--teal)",
                    }}
                  >
                    12
                    <span style={{ color: "var(--green)" }}>+</span>
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      color: "var(--gray4)",
                      marginTop: "4px",
                    }}
                  >
                    Standards Covered
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <div
                style={{ background: "var(--teal3)", borderRadius: "var(--r2)", padding: "36px" }}
              >
                <h3 style={{ color: "#fff", marginBottom: "20px" }}>Our Consulting Approach</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "var(--green)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        flexShrink: "0",
                      }}
                    >
                      1
                    </div>
                    <div>
                      <div
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                          fontSize: "14px",
                          marginBottom: "4px",
                        }}
                      >
                        QMS Planning
                      </div>
                      <div style={{ color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                        Gap analysis, regulatory requirement mapping, and a tailored QMS roadmap.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "var(--green)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        flexShrink: "0",
                      }}
                    >
                      2
                    </div>
                    <div>
                      <div
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                          fontSize: "14px",
                          marginBottom: "4px",
                        }}
                      >
                        System Development
                      </div>
                      <div style={{ color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                        Lean, digitization-ready documentation and process design across all
                        business functions.
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "var(--green)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        flexShrink: "0",
                      }}
                    >
                      3
                    </div>
                    <div>
                      <div
                        style={{
                          color: "#fff",
                          fontWeight: "700",
                          fontSize: "14px",
                          marginBottom: "4px",
                        }}
                      >
                        Implementation &amp; Sustainment
                      </div>
                      <div style={{ color: "rgba(255,255,255,.65)", fontSize: "13px" }}>
                        Audit support, internal auditor training, and continuous improvement
                        framework setup.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRINCIPAL CONSULTANT */}
      <section className="sec sec-bg">
        <div className="wrap">
          <span className="sec-tag">Leadership</span>
          <h2 className="sec-title">Principal Consultant</h2>
          <div className="divider"></div>
          <div className="profile-wrap fade-up">
            <div>
              <div className="profile-photo">
                <img
                  src="/assets/manish-airan.jpg"
                  alt="Manish Airan, Principal Consultant, Emerging Sigma Consulting"
                  width="1100"
                  height="1138"
                  loading="lazy"
                />
              </div>
              <div className="profile-card">
                <div className="profile-name">Manish Airan</div>
                <div className="profile-role">Principal Consultant</div>
                <div className="profile-org">Emerging Sigma Consulting</div>
                <div className="profile-loc">Mumbai, India</div>
              </div>
            </div>
            <div>
              <p style={{ marginBottom: "14px" }}>
                Manish Airan brings over 25 years of hands-on experience in Regulatory Affairs,
                Quality Assurance, and Business Excellence across the Medical Devices, In-Vitro
                Diagnostics, and Global Automotive Components industries.
              </p>
              <p style={{ marginBottom: "14px" }}>
                Core expertise spans global regulatory strategy and submissions, QMS design and
                certification support, data-driven process improvement, equipment qualification, and
                digitalization of compliance infrastructure, covering markets across India, Europe,
                the United States, Japan, Brazil, Canada, and WHO member states.
              </p>
              <p style={{ marginBottom: "20px" }}>
                The consulting philosophy centers on creating quality and regulatory systems that
                are integrated, lean, digitization-friendly, and self-sustaining, designed to
                deliver lasting compliance value well beyond the engagement period.
              </p>
              <p style={{ marginBottom: "20px" }}>
                Engagements are taken on in small numbers so that each one gets senior attention
                throughout, rather than being handed down once the proposal is signed.
              </p>
              <div className="exp-pills">
                <span className="exp-pill">ISO 13485 QMS</span>{" "}
                <span className="exp-pill">EU MDR / IVDR</span>{" "}
                <span className="exp-pill">CDSCO MDR 2017</span>{" "}
                <span className="exp-pill">US FDA 21 CFR 820</span>{" "}
                <span className="exp-pill">WHO PQ</span>{" "}
                <span className="exp-pill">Six Sigma Black Belt</span>{" "}
                <span className="exp-pill">Supplier Quality</span>{" "}
                <span className="exp-pill">Equipment Qualification</span>{" "}
                <span className="exp-pill">Risk Management ISO 14971</span>{" "}
                <span className="exp-pill">Internal Auditing</span>{" "}
                <span className="exp-pill">Lean Process Improvement</span>{" "}
                <span className="exp-pill">eQMS Digitalization</span>
              </div>
              <div className="cred-grid">
                <div className="cred-item">
                  <div className="cred-lbl">Certification</div>
                  <div className="cred-val">
                    ASQ Certified Manager of Quality / Organizational Excellence (CMQ/OE)
                  </div>
                </div>
                <div className="cred-item">
                  <div className="cred-lbl">Certification</div>
                  <div className="cred-val">ASQ Certified Six Sigma Black Belt</div>
                </div>
                <div className="cred-item">
                  <div className="cred-lbl">Certification</div>
                  <div className="cred-val">ISO 13485 and ISO 9001 Lead Auditor</div>
                </div>
                <div className="cred-item">
                  <div className="cred-lbl">Certification</div>
                  <div className="cred-val">VDA 6.3 Process Auditor</div>
                </div>
                <div className="cred-item">
                  <div className="cred-lbl">Alumni</div>
                  <div className="cred-val">BITS Pilani and IIM Calcutta</div>
                </div>
                <div className="cred-item">
                  <div className="cred-lbl">Specialized Training</div>
                  <div className="cred-val">Medical Statistics, Stanford University</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* STANDARDS */}
      <section className="sec">
        <div className="wrap">
          <span className="sec-tag">Technical Expertise</span>
          <h2 className="sec-title">Standards &amp; Regulatory Frameworks</h2>
          <div className="divider"></div>
          <div className="std-grid fade-up">
            <div className="std-item">
              <span className="std-dot"></span>
              ISO 13485:2016 (Medical Device QMS)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU MDR 745 / IVDR 746
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
              GAMP 5 · FDA 21 CFR 11
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              EU GMP Annex 1 · WHO TRS 961
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              GxP (GMP, GLP, GDP)
            </div>
            <div className="std-item">
              <span className="std-dot"></span>
              ISO/IEC 17025:2017
            </div>
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
              <StatNumber target={4} />
              <span className="stat-label">Practice Areas</span>
            </div>
            <div className="stat">
              <StatNumber target={12} suffix="+" />
              <span className="stat-label">Standards Mastered</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
