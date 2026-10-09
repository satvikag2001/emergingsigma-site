import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { TabPanel, Tabs } from "@/components/Tabs";
import { preloadHero } from "@/lib/hero";
import { pageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Training Programs | Quality & Lean Competency Development | Emerging Sigma Consulting",
  description:
    "Quality and Lean training across four levels and 24 modules. QMS fundamentals, 7 QC tools, SPC, FMEA, Six Sigma, DOE, VSM and internal auditor programmes.",
  path: "/training",
});

export default function TrainingPage() {
  preloadHero("hero-training");

  return (
    <>
      <JsonLd data={serviceSchema("Training Programs", "/training")} />
      <Breadcrumbs
        trail={[
          { name: "Our Services", href: "/services" },
          { name: "Training Programs", href: "/training" },
        ]}
      />
      <section className="eq-hero">
        <div className="tr-hero-bg"></div>
        <div className="eq-hero-overlay"></div>
        <div className="wrap eq-hero-inner">
          <div className="eq-badge">
            <span className="dot"></span>
            Training Programs
          </div>
          <h1>
            Every Improvement You Will Ever Make{" "}
            <span className="hl">Starts With Someone Learning Something</span>
          </h1>
          <p className="lead">
            Processes are designed by people, defects are found by people, and improvements are led
            by people. Building capability is the one investment that{" "}
            <strong>compounds across every other initiative</strong> in the business. Our programmes
            span 24 modules across four progressive levels, from quality fundamentals to Design of
            Experiments.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#portfolio" className="btn btn-green">
              Browse All 24 Modules
            </a>{" "}
            <Link href="/contact" className="btn btn-outline">
              Discuss a Programme
            </Link>
          </div>
          <div className="eq-benefits">
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3L2.5 8 12 13l9.5-5z" />
                  <path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
                  <path d="M21.5 8v6" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                4 Levels,
                <br />
                24 Modules
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M3 20l4-1.5L20.2 5.3a2 2 0 000-2.8l-.7-.7a2 2 0 00-2.8 0L3.5 15l-.5 5z" />
                  <path d="M14.5 5.5l4 4" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Customised to
                <br />
                Your Processes
              </div>
            </div>
            <div className="eq-ben">
              <div className="eq-ben-ring">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6.5h6.5a2.5 2.5 0 012.5 2.5v10a2 2 0 00-2-2H4z" />
                  <path d="M20 6.5h-6.5A2.5 2.5 0 0011 9v10a2 2 0 012-2h7z" />
                </svg>
              </div>
              <div className="eq-ben-txt">
                Workshop Style,
                <br />
                Not Lectures
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
                Effectiveness
                <br />
                Measured
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ BELIEF ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="belief fade-up">
            <div className="belief-in">
              <h2>Quality and Efficiency Are Not Goals. They Are a Culture.</h2>
              <p>
                A goal is reached once and then it is behind you. A culture renews itself every day,
                in every decision made by every person who understands <em>why</em> the work is done
                the way it is. Training is how that culture is built, and continuous learning is how
                it survives the next product, the next standard and the next generation of the team.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ WHY CONTINUOUS LEARNING ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Why It Matters</span>
            <h2 className="sec-title">Capability Is the Only Asset That Appreciates</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "38px" }}>
              Equipment depreciates. Certificates expire. Documented processes go stale the moment
              the business changes. The capability of your people is the only investment that grows
              in value with use, and the only one that improves every other investment you have
              already made.
            </p>
          </div>
          <div className="g3" style={{ gap: "20px" }}>
            <div className="prin-card fade-up">
              <div className="prin-ico">🌱</div>
              <h4>Systems Live Through People</h4>
              <p>
                A quality system is only as good as the understanding of the people running it.
                Well-trained teams turn documented processes into daily practice, which is the
                difference between a system that works and a system that exists.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🔍</div>
              <h4>Problems Get Solved at Source</h4>
              <p>
                When teams carry the tools to analyse their own data, problems get resolved where
                they occur instead of escalating. Structured problem solving distributed across the
                organization is faster than expertise concentrated at the top.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">📈</div>
              <h4>Improvement Becomes Continuous</h4>
              <p>
                Improvement stops being a project run by specialists and becomes a habit practised
                by everyone. Teams that understand variation, capability and root cause find
                opportunities that no external programme would surface.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🛡️</div>
              <h4>Compliance Becomes Understanding</h4>
              <p>
                People who know why a control exists protect it under pressure. People who only know
                that it exists work around it when the schedule tightens. Understanding is the most
                durable compliance control available.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🤝</div>
              <h4>Knowledge Outlives Individuals</h4>
              <p>
                Capability spread across a team survives resignations, transfers and growth.
                Structured learning converts what a few experienced people know into something the
                organization owns.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">🚀</div>
              <h4>Change Gets Easier</h4>
              <p>
                A new standard, a new market, a new product line. Organizations with a learning
                habit absorb change as routine. Organizations without one treat every change as a
                crisis requiring external help.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ HIGHLIGHTS ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">How We Deliver</span>
            <h2 className="sec-title">Training Built to Be Used on Monday</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              Every module is delivered so that participants leave with something they can apply
              immediately to work already sitting on their desk.
            </p>
          </div>
          <div className="hi-grid fade-up">
            <div className="hi-card">
              <div className="hi-ring">🎯</div>
              <h4>Customised Modules</h4>
              <p>
                Built around your processes, products and standards rather than delivered from a
                generic pack.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">💻</div>
              <h4>Online and Onsite</h4>
              <p>
                Delivered either way, with the workshop structure preserved rather than reduced to
                slides.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">👥</div>
              <h4>Suitable for All Levels</h4>
              <p>
                From shop floor operators through to senior management, pitched correctly for each
                audience.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">📊</div>
              <h4>Effectiveness Monitoring</h4>
              <p>
                Learning measured after delivery so training investment can be judged on capability
                gained.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🎓</div>
              <h4>Experienced Faculty</h4>
              <p>
                Delivered by practitioners who have run these systems in operating businesses, not
                career trainers.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">📚</div>
              <h4>Focused Engaging Material</h4>
              <p>
                Concise, well-designed material participants keep and refer back to rather than file
                away.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">📁</div>
              <h4>Relevant Case Studies</h4>
              <p>
                Worked examples drawn from your industry, and where possible from your own data.
              </p>
            </div>
            <div className="hi-card">
              <div className="hi-ring">🛠️</div>
              <h4>Workshop Style</h4>
              <p>
                Participants work through real exercises. Lecture time is kept deliberately short.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ FOUR LEVELS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">The Portfolio</span>
            <h2 className="sec-title">Four Levels, Designed to Build on Each Other</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "36px" }}>
              The levels form a progression. Teams are not sent to Design of Experiments before they
              can read a control chart, and nobody sits through fundamentals they already have.
            </p>
          </div>
          <div className="lad fade-up">
            <div className="lad-item">
              <div className="lad-badge">
                <span>Level</span>
                <strong>01</strong>
              </div>
              <div className="lad-body">
                <h4>Quality Basics Program</h4>
                <p>
                  Foundation modules covering quality management systems, document control, quality
                  in new product development, risk assessment fundamentals, quality control
                  processes, and verification and validation. Suitable across every function.
                </p>
              </div>
            </div>
            <div className="lad-item">
              <div className="lad-badge">
                <span>Level</span>
                <strong>02</strong>
              </div>
              <div className="lad-body">
                <h4>Basic Quality Tools &amp; Risk Assessment</h4>
                <p>
                  The practical toolkit: seven QC tools, statistical process control basics, FMEA
                  fundamentals, root cause analysis and CAPA, Six Sigma Yellow Belt, and 8D problem
                  solving for customer complaints.
                </p>
              </div>
            </div>
            <div className="lad-item">
              <div className="lad-badge">
                <span>Level</span>
                <strong>03</strong>
              </div>
              <div className="lad-body">
                <h4>Advanced Data Analysis Tools &amp; Methods</h4>
                <p>
                  Statistical depth for engineers and quality professionals: process capability and
                  Gauge R&amp;R, regression and correlation, advanced FMEA, ANOVA and hypothesis
                  testing, advanced SPC, and Design of Experiments.
                </p>
              </div>
            </div>
            <div className="lad-item">
              <div className="lad-badge">
                <span>Level</span>
                <strong>04</strong>
              </div>
              <div className="lad-body">
                <h4>Advanced Quality Tools &amp; Process Development</h4>
                <p>
                  Improvement leadership: internal auditor programmes, lean and process
                  optimisation, business process mapping, Six Sigma Green Belt, value stream mapping
                  with theory of constraints, and lean logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ MODULE CATALOGUE ═══ */}
      <section className="sec" id="portfolio">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Module Catalogue</span>
            <h2 className="sec-title">All 24 Modules in Detail</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "800px", marginBottom: "32px" }}>
              Select a level to see the modules within it. Each can be delivered standalone or
              combined into a programme sequenced for your teams.
            </p>
          </div>
          <div className="fade-up">
            <Tabs
              kind="lvl"
              tabs={[
                {
                  id: "l1",
                  label: (
                    <>
                      <small>Level 01</small>Quality Basics Program
                    </>
                  ),
                },
                {
                  id: "l2",
                  label: (
                    <>
                      <small>Level 02</small>Basic Quality Tools
                    </>
                  ),
                },
                {
                  id: "l3",
                  label: (
                    <>
                      <small>Level 03</small>Advanced Data Analysis
                    </>
                  ),
                },
                {
                  id: "l4",
                  label: (
                    <>
                      <small>Level 04</small>Advanced Quality Tools
                    </>
                  ),
                },
              ]}
            >
              {/* LEVEL 1 */}
              <TabPanel id="l1">
                <div className="mod-grid">
                  <div className="mod-card">
                    <div className="mod-n">MODULE 01</div>
                    <h4>Overview of QMS</h4>
                    <p>
                      An overview of Quality Management Systems covering key ISO standards including
                      ISO 13485, ISO 9001 and IATF 16949, building a solid understanding of QMS
                      principles and how the standards relate to one another.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Employees across all functions
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 02</div>
                    <h4>Document Management and Control</h4>
                    <p>
                      The key requirements of a document control system, including document
                      numbering, version control and change management, so document handling stays
                      efficient and compliant as the organization grows.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality, manufacturing and design teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 03</div>
                    <h4>Quality in New Product Development</h4>
                    <p>
                      Quality management activities across the new product development process, from
                      concept through to launch, so quality is designed in rather than inspected in
                      after the fact.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> NPD cross-functional team members
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 04</div>
                    <h4>Basics of Risk Assessment</h4>
                    <p>
                      The fundamental terminology and methods of risk assessment, including the
                      preparation of risk assessment documents and how risk thinking connects to
                      design and process decisions.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality, manufacturing and design teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 05</div>
                    <h4>Basic Quality Control Processes</h4>
                    <p>
                      Preparation and implementation of QC test protocols, reaction plans and
                      deviation management, ensuring consistent product quality and effective issue
                      resolution at the point of detection.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality control teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 06</div>
                    <h4>Verification and Validation</h4>
                    <p>
                      The purpose and process of verification and validation, including planning,
                      execution and control. Helps teams identify issues early, improve product
                      quality and demonstrate compliance with applicable standards.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Design, development and quality teams
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* LEVEL 2 */}
              <TabPanel id="l2">
                <div className="mod-grid">
                  <div className="mod-card">
                    <div className="mod-n">MODULE 07</div>
                    <h4>Basic 7 QC Tools</h4>
                    <p>
                      A foundational grounding in the seven most effective quality control tools:
                      Ishikawa diagram, Pareto chart, histogram, control charts, check sheets,
                      flowchart and scatter diagram, applied to identify and resolve process issues
                      systematically.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> All functions handling process issues
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 08</div>
                    <h4>Basics of SPC and Control Charts</h4>
                    <p>
                      Foundational training on statistical process control covering the practical
                      application of attribute and variable control charts to monitor and improve
                      process performance in a manufacturing environment.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality and process engineers
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 09</div>
                    <h4>Basics of FMEA</h4>
                    <p>
                      Essential training on the fundamentals of Failure Mode and Effects Analysis,
                      covering Design FMEA, Process FMEA and Logistics FMEA, building a strong
                      methodological foundation.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Process engineers across all functions
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 10</div>
                    <h4>Basic RCA and CAPA Training</h4>
                    <p>
                      Comprehensive training on root cause analysis and corrective and preventive
                      action, focusing on effective methods for identifying true root causes and
                      implementing corrective measures that hold.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality, manufacturing and support functions
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 11</div>
                    <h4>Six Sigma Yellow Belt</h4>
                    <p>
                      Foundational Six Sigma training for all levels of the workforce. The DMAIC
                      approach is explained and practised to develop a structured problem-solving
                      mindset across the organization.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> All levels of the workforce
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 12</div>
                    <h4>Practical 8D Training</h4>
                    <p>
                      Comprehensive and practical training on the 8D problem-solving approach,
                      designed specifically around resolving customer complaints effectively and
                      producing a response that satisfies the customer.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality, customer service and operations teams
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* LEVEL 3 */}
              <TabPanel id="l3">
                <div className="mod-grid">
                  <div className="mod-card">
                    <div className="mod-n">MODULE 13</div>
                    <h4>Process Capability and Gauge R&amp;R</h4>
                    <p>
                      Process capability studies covering Cp, Cpk, Pp and Ppk, combined with
                      measurement system analysis through Gauge R&amp;R, so teams can distinguish
                      genuine process variation from measurement error.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality and process engineers
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 14</div>
                    <h4>Regression and Correlation</h4>
                    <p>
                      Establishing and quantifying relationships between process variables and
                      output characteristics, enabling teams to predict outcomes and identify which
                      inputs genuinely drive results.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Engineers and quality professionals
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 15</div>
                    <h4>Advanced Risk Assessment and FMEA</h4>
                    <p>
                      Advanced FMEA methodology including severity, occurrence and detection ranking
                      discipline, action prioritisation, and linking FMEA outputs to control plans
                      so risk analysis drives real controls.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Design, process and quality teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 16</div>
                    <h4>ANOVA and Hypothesis Testing</h4>
                    <p>
                      Statistical inference for decision making: hypothesis formulation,
                      significance testing, and analysis of variance for comparing processes,
                      materials, shifts or suppliers with statistical confidence.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality engineers and improvement teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 17</div>
                    <h4>Advanced SPC and Control Charts</h4>
                    <p>
                      Advanced statistical process control including chart selection for difficult
                      situations, special cause detection rules, subgroup strategy, and moving from
                      monitoring to genuine process control.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality and manufacturing engineers
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 18</div>
                    <h4>Design of Experiments</h4>
                    <p>
                      Structured experimentation using factorial and fractional factorial designs to
                      identify significant factors, understand interactions, and optimise process
                      settings with far fewer trials than one-factor-at-a-time testing.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Process and product development engineers
                    </div>
                  </div>
                </div>
              </TabPanel>
              {/* LEVEL 4 */}
              <TabPanel id="l4">
                <div className="mod-grid">
                  <div className="mod-card">
                    <div className="mod-n">MODULE 19</div>
                    <h4>Internal Auditor Programs</h4>
                    <p>
                      The skills required to conduct internal audits to ISO 9001, ISO 13485 and
                      other standards, covering audit planning, execution, evidence gathering,
                      reporting and corrective action follow-through.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality managers and audit teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 20</div>
                    <h4>Lean and Process Optimization</h4>
                    <p>
                      Eliminating waste, improving flow and increasing efficiency using lean tools
                      applied across functions and processes, with emphasis on identifying waste
                      that has become invisible through familiarity.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Operations, quality and process teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 21</div>
                    <h4>Business Process Mapping</h4>
                    <p>
                      Creating detailed process maps and flowcharts to visualise and streamline
                      business processes across functions and departments, improving clarity,
                      efficiency, RASI definition and standardisation.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Business process owners
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 22</div>
                    <h4>Six Sigma Green Belt</h4>
                    <p>
                      In-depth training on Six Sigma tools and the DMAIC methodology, focused on
                      data-driven problem solving and process improvement, typically delivered
                      alongside a live improvement project.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Quality and process improvement teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 23</div>
                    <h4>VSM and Theory of Constraints</h4>
                    <p>
                      Value stream mapping combined with theory of constraints to visualise
                      end-to-end processes, identify waste and locate the bottleneck that actually
                      governs throughput.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Operations, quality and improvement teams
                    </div>
                  </div>
                  <div className="mod-card">
                    <div className="mod-n">MODULE 24</div>
                    <h4>Lean Logistics and Supply Chain</h4>
                    <p>
                      Streamlining logistics and supply chain processes by eliminating waste,
                      improving flow and reducing lead times, enhancing both operational efficiency
                      and customer satisfaction.
                    </p>
                    <div className="mod-for">
                      <strong>For:</strong> Supply chain and quality teams
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </section>
      {/* ═══ SPECIALISED ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Specialised Programmes</span>
            <h2 className="sec-title">Beyond the Core Curriculum</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "790px", marginBottom: "34px" }}>
              Programmes built for specific roles and specific obligations, delivered alongside or
              independently of the four-level portfolio.
            </p>
          </div>
          <div className="rel-grid fade-up">
            <div className="rel-card">
              <div className="rel-ico">🎓</div>
              <h4>Train the Trainer</h4>
              <p>
                Equips process owners to teach their own processes: session planning, preparation
                checklists, how to teach access, content and purpose, methods that work and methods
                to avoid.
              </p>
            </div>
            <div className="rel-card">
              <div className="rel-ico">📜</div>
              <h4>Regulatory Awareness</h4>
              <p>
                CDSCO MDR 2017 awareness, EU MDR and IVDR transition training, US FDA QMSR
                orientation, and GxP compliance covering GMP, GLP and GDP.
              </p>
            </div>
            <div className="rel-card">
              <div className="rel-ico">⚙️</div>
              <h4>Process-Specific Training</h4>
              <p>
                Training built around one of your own documented processes, delivered by its owner,
                with material and evaluation designed against that specific process map and its
                templates.
              </p>
            </div>
            <div className="rel-card">
              <div className="rel-ico">🏭</div>
              <h4>Supplier Training Modules</h4>
              <p>
                Modular training delivered directly to your supply base, lifting supplier capability
                in quality tools, problem solving and process control rather than only auditing the
                shortfall.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ═══ EFFECTIVENESS ═══ */}
      <section className="sec">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Measuring the Return</span>
            <h2 className="sec-title">Learning You Can See, Not Just Record</h2>
            <div className="divider"></div>
            <p className="sub" style={{ maxWidth: "810px", marginBottom: "36px" }}>
              Training deserves the same measurement discipline as any other investment. We build
              evaluation into every programme so you can see what capability actually moved, and
              where a second pass would pay.
            </p>
          </div>
          <div className="g3" style={{ gap: "20px" }}>
            <div className="prin-card fade-up">
              <div className="prin-ico">🗂️</div>
              <h4>Access &amp; Structure</h4>
              <p>
                Can participants locate the current version of a document, identify its owner and
                scope, and navigate to what they need unaided? Capability begins with knowing where
                the answer lives.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">📖</div>
              <h4>Content</h4>
              <p>
                Do they know the sequence, the responsibilities, the decision criteria, the
                templates required and the frequencies? This carries the largest weight in any
                evaluation we design.
              </p>
            </div>
            <div className="prin-card fade-up">
              <div className="prin-ico">💡</div>
              <h4>Purpose &amp; Concept</h4>
              <p>
                Can they explain why something is done, what risk it controls, and what would follow
                if the step were skipped? This is the dimension that predicts whether learning
                survives contact with a busy week.
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
                fontSize: "14.5px",
                fontWeight: "600",
                color: "var(--teal3)",
                margin: "0",
                lineHeight: "1.75",
              }}
            >
              Scoring by dimension rather than overall means a weak result tells you exactly what to
              do next. A team strong on content but light on purpose needs a short focused session,
              not a repeat of the original two-day programme.
            </p>
          </div>
        </div>
      </section>
      {/* ═══ SEGMENT TABS ═══ */}
      <section className="sec sec-bg">
        <div className="wrap">
          <div className="fade-up">
            <span className="sec-tag">Who We Work With</span>
            <h2 className="sec-title">Programmes Scaled to Your Organization</h2>
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
                    <h3>Building the Learning Habit Early</h3>
                    <p>
                      The team learned by watching, which worked while everyone sat in one room.
                      Establishing a common language for quality now is far cheaper than correcting
                      divergent practice at fifty people.
                    </p>
                    <ul>
                      <li>Small team wearing several hats each</li>
                      <li>Knowledge passed on informally</li>
                      <li>New joiners productive only after several months</li>
                      <li>Certification or a customer asking for competence evidence</li>
                      <li>No standing training function or budget for one</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Competency requirements defined by role before any session is planned</li>
                      <li>Level 01 and 02 modules delivered directly to the whole team</li>
                      <li>Train-the-trainer for two or three internal owners</li>
                      <li>Evaluation instruments handed over so testing continues without us</li>
                      <li>Training record and competency matrix structure established</li>
                      <li>Induction pack built for future joiners</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Foundation delivery with capability handover</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="small">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Ready for the Next Level of Capability</h3>
                    <p>
                      Fundamentals are in place. The next gains come from engineers who can analyse
                      variation, run capability studies and lead structured improvement rather than
                      escalate every problem.
                    </p>
                    <ul>
                      <li>Quality basics understood but analytical depth thin</li>
                      <li>Problems escalating rather than being solved locally</li>
                      <li>Improvement dependent on one or two capable people</li>
                      <li>Customer or standard requiring statistical evidence</li>
                      <li>Engineers ready for advanced tools with no route to them</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Capability assessment to place teams at the right level</li>
                      <li>Level 03 modules for engineering and quality teams</li>
                      <li>Six Sigma Green Belt delivered against a live improvement project</li>
                      <li>Internal auditor development for the audit programme</li>
                      <li>Evaluation with section-wise diagnosis to target follow-up</li>
                      <li>Supplier training modules where the gap sits upstream</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Level 03 and 04 delivery with project application</strong>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel id="large">
                <div className="seg-inner">
                  <div className="seg-left">
                    <h4>Your Situation</h4>
                    <h3>Consistent Capability Across Every Site</h3>
                    <p>
                      Training runs across several locations, delivered by different people to
                      different depths. A common curriculum and a common evaluation standard make
                      capability comparable and manageable.
                    </p>
                    <ul>
                      <li>Multiple sites training independently</li>
                      <li>No common evaluation standard across locations</li>
                      <li>Large process estate needing process-specific training</li>
                      <li>Internal auditor pool requiring development and calibration</li>
                      <li>Regulatory expectation of demonstrable competence</li>
                    </ul>
                  </div>
                  <div className="seg-right">
                    <h4>How We Engage</h4>
                    <ul>
                      <li>Common curriculum and evaluation standard across all sites</li>
                      <li>Train-the-trainer scaled to every process owner</li>
                      <li>Process-specific test generation from each process map</li>
                      <li>Internal auditor development and calibration across locations</li>
                      <li>Competency dashboard giving comparable visibility by site and role</li>
                      <li>Governance model so the programme sustains internally</li>
                    </ul>
                    <div className="seg-meta">
                      <span>Typical Engagement</span>
                      <strong>Programme design with multi-site rollout</strong>
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
          <h2>Start With One Module. See What It Changes.</h2>
          <p>
            Most programmes begin with a single module delivered to one team. Tell us where
            capability would make the biggest difference and we will propose the right starting
            point.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-green">
              Discuss a Training Programme
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
