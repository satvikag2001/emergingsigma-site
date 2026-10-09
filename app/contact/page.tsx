import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Web3Form from "@/components/Web3Form";
import { pageMetadata } from "@/lib/metadata";
import { ORGANIZATION } from "@/lib/organization";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Emerging Sigma Consulting",
  description:
    "Contact Emerging Sigma Consulting for a complimentary 30-minute discovery call on QMS, regulatory submissions and compliance. Mumbai, India. We respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={ORGANIZATION} />
      <Breadcrumbs trail={[{ name: "Contact Us", href: "/contact" }]} />
      <div className="page-hero">
        <div className="wrap">
          <h1>Contact Us</h1>
          <p>
            Reach out for a complimentary initial consultation. We typically respond within one
            business day.
          </p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap">
          <div className="contact-layout">
            <div>
              <span className="sec-tag">Get in Touch</span>
              <h2 className="sec-title" style={{ marginBottom: "8px" }}>
                Let's Start a Conversation
              </h2>
              <div className="divider"></div>
              <p style={{ marginBottom: "28px" }}>
                Whether you are building a QMS from scratch, preparing a regulatory submission, or
                looking for specific compliance support. We are here to help. We offer a
                complimentary 30-minute discovery call.
              </p>
              <div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <div className="info-lbl">Phone</div>
                    <div className="info-val">
                      <a href="tel:+919082657529">+91 9082657529</a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <div className="info-lbl">Email</div>
                    <div className="info-val">
                      <a href="mailto:support@emergingsigma.com">support@emergingsigma.com</a>
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div>
                    <div className="info-lbl">Website</div>
                    <div className="info-val">www.emergingsigma.com</div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <div className="info-lbl">Office</div>
                    <div className="info-val">
                      Nesco IT Park, Goregaon (East),
                      <br />
                      Mumbai 400063, Maharashtra, India
                    </div>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div>
                    <div className="info-lbl">Business Hours</div>
                    <div className="info-val">
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                      <br />
                      Saturday: 10:00 AM - 2:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-card">
              <h3 style={{ marginBottom: "6px" }}>Request a Consultation</h3>
              <p style={{ fontSize: "13.5px", marginBottom: "24px", color: "var(--gray4)" }}>
                Fill in the form and we will get back to you within one business day.
              </p>
              <Web3Form
                subject="Consultation request from emergingsigma.com"
                submitLabel="Send Message →"
              >
                <div className="form-row">
                  <div className="form-g">
                    <label htmlFor="c-first">First Name *</label>
                    <input
                      id="c-first"
                      name="first_name"
                      type="text"
                      placeholder="First name"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div className="form-g">
                    <label htmlFor="c-last">Last Name *</label>
                    <input
                      id="c-last"
                      name="last_name"
                      type="text"
                      placeholder="Last name"
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>
                <div className="form-g">
                  <label htmlFor="c-company">Company / Organization *</label>
                  <input
                    id="c-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-g">
                    <label htmlFor="c-email">Email Address *</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="form-g">
                    <label htmlFor="c-phone">Phone Number</label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="form-g">
                  <label htmlFor="c-service">Service of Interest *</label>{" "}
                  <select id="c-service" name="service" required>
                    <option value="">Select a service area…</option>
                    <option>Quality Management Systems (ISO 13485)</option>
                    <option>Regulatory Affairs (CDSCO / India)</option>
                    <option>Regulatory Affairs (EU MDR / IVDR)</option>
                    <option>Regulatory Affairs (US FDA)</option>
                    <option>Regulatory Affairs (WHO PQ / Global)</option>
                    <option>Equipment Qualification (DQ/IQ/OQ/PQ)</option>
                    <option>Supplier Quality Management</option>
                    <option>Warehouse Quality Management</option>
                    <option>Training Programs</option>
                    <option>Other / Not Sure Yet</option>
                  </select>
                </div>
                <div className="form-g">
                  <label htmlFor="c-message">Message / Requirement *</label>
                  <textarea
                    id="c-message"
                    name="message"
                    placeholder="Briefly describe your challenge or requirement…"
                    style={{ minHeight: "130px" }}
                    required
                  />
                </div>
              </Web3Form>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--gray4)",
                  marginTop: "14px",
                  textAlign: "center",
                }}
              >
                Your information is kept strictly confidential and will not be shared with third
                parties.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="cta-band">
        <div className="wrap">
          <h2>Prefer to Talk Directly?</h2>
          <p>
            Call us for a quick conversation about your regulatory or quality challenge, no
            obligation.
          </p>
          <a href="tel:+919082657529" className="btn btn-green">
            Call: +91 9082657529
          </a>
        </div>
      </div>
    </>
  );
}
