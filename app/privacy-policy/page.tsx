import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Emerging Sigma Consulting",
  description:
    "How Emerging Sigma Consulting collects, uses and protects personal data submitted through emergingsigma.com, and the rights you have over your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="breadcrumb">
        <div className="wrap">
          <div className="bc-inner">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="page-hero">
        <div className="wrap">
          <h1>Privacy Policy</h1>
          <p>How we handle the personal information you share with us.</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap doc-body">
          <p style={{ marginBottom: "26px" }}>
            <strong>Last updated:</strong> 17 August 2026
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            1. Who We Are
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            Emerging Sigma Consulting ("we", "us", "our") provides quality, regulatory and digital
            compliance consulting services to medical device and healthcare organizations. Our
            office is at Nesco IT Park, Goregaon (East), Mumbai 400063, Maharashtra, India. This
            policy explains what personal data we collect through <strong>emergingsigma.com</strong>
            , why we collect it, and what rights you have.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            2. Information We Collect
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "14px" }}>
            We only collect personal data that you choose to give us. Specifically:
          </p>
          <ul className="doc-list" style={{ marginBottom: "14px" }}>
            <li>
              <strong>Enquiry and consultation forms.</strong> Your name, email address, phone
              number, company or organization, the service you are interested in, and the content of
              your message.
            </li>
            <li>
              <strong>Direct contact.</strong> Any information you include when you email or call
              us.
            </li>
          </ul>
          <p style={{ marginBottom: "14px" }}>
            To understand which pages are read and how visitors reach us, we use{" "}
            <strong>Cloudflare Web Analytics</strong>. This is measurement without surveillance: it
            sets <strong>no cookies</strong>, stores nothing on your device, assigns you no
            identifier, and does not follow you across other websites. We see aggregate figures
            only, such as page views, referring website, approximate country, browser and device
            type. We cannot identify you from them, and we do not build visitor profiles.
          </p>
          <p style={{ marginBottom: "26px" }}>
            Because nothing is stored on or read from your device, this site needs no cookie consent
            banner. We use <strong>no</strong> advertising, remarketing or cross-site tracking
            technology of any kind.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            3. How We Use Your Information
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "14px" }}>We use the information you submit solely to:</p>
          <ul className="doc-list" style={{ marginBottom: "26px" }}>
            <li>Respond to your enquiry and arrange a consultation.</li>
            <li>Provide the consulting services you request.</li>
            <li>Keep a record of our correspondence with you.</li>
          </ul>
          <p style={{ marginBottom: "26px" }}>
            We will not send you marketing email unless you have asked us to, and we will never sell
            or rent your personal data.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            4. Service Providers
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "14px" }}>
            Form submissions on this site are delivered to our email inbox by{" "}
            <strong>Web3Forms</strong>, a third-party form-processing service. Your submission
            passes through their systems in order to reach us. Their handling of that data is
            governed by their own privacy policy at{" "}
            <a
              href="https://web3forms.com/privacy"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--teal)", textDecoration: "underline" }}
            >
              web3forms.com/privacy
            </a>
            .
          </p>
          <p style={{ marginBottom: "26px" }}>
            This site is hosted on <strong>GitHub Pages</strong>, web fonts are served by{" "}
            <strong>Google Fonts</strong>, and aggregate traffic measurement is provided by{" "}
            <strong>Cloudflare Web Analytics</strong>, whose privacy policy is at{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener"
              style={{ color: "var(--teal)", textDecoration: "underline" }}
            >
              cloudflare.com/privacypolicy
            </a>
            . These providers may log standard technical request data such as IP address and browser
            type as part of delivering the site.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            5. Data Retention
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            We keep enquiry correspondence for as long as needed to respond to you and to maintain
            our normal business and professional records, and for any period required by applicable
            law. When it is no longer needed, we delete it.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            6. Data Security
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            This website is served over HTTPS, and form submissions are transmitted over an
            encrypted connection. We apply reasonable organizational safeguards to the information
            we hold. However, no method of transmission over the internet is completely secure, and
            we cannot guarantee absolute security.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            7. Confidentiality of Client Information
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            Information you share with us about your products, processes, regulatory status or
            quality systems is treated as confidential. We do not disclose client information to
            third parties without your consent, except where required by law or regulatory
            authority.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            8. Your Rights
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "14px" }}>
            Subject to applicable law, including India's Digital Personal Data Protection Act, 2023
            and, where it applies to you, the EU/UK GDPR, you may ask us to:
          </p>
          <ul className="doc-list" style={{ marginBottom: "26px" }}>
            <li>Confirm what personal data we hold about you and provide a copy.</li>
            <li>Correct data that is inaccurate or incomplete.</li>
            <li>
              Delete your personal data where we have no continuing need or legal obligation to keep
              it.
            </li>
            <li>Withdraw consent, or object to or restrict how we use your data.</li>
          </ul>
          <p style={{ marginBottom: "26px" }}>
            To exercise any of these rights, email{" "}
            <a
              href="mailto:support@emergingsigma.com"
              style={{ color: "var(--teal)", textDecoration: "underline" }}
            >
              support@emergingsigma.com
            </a>
            . We will respond within a reasonable period.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            9. Children
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            This is a business-to-business website. It is not directed at children, and we do not
            knowingly collect personal data from anyone under 18.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            10. Changes to This Policy
          </h2>
          <div className="divider"></div>
          <p style={{ marginBottom: "26px" }}>
            We may update this policy from time to time. Any revised version will be posted on this
            page with a new "last updated" date.
          </p>
          <h2 className="sec-title" style={{ fontSize: "24px" }}>
            11. Contact Us
          </h2>
          <div className="divider"></div>
          <p>
            If you have questions about this privacy policy or how we handle your data, contact us
            at:
          </p>
          <p style={{ marginTop: "10px" }}>
            <strong>Emerging Sigma Consulting</strong>
            <br />
            Nesco IT Park, Goregaon (East), Mumbai 400063, Maharashtra, India
            <br />
            Email:{" "}
            <a
              href="mailto:support@emergingsigma.com"
              style={{ color: "var(--teal)", textDecoration: "underline" }}
            >
              support@emergingsigma.com
            </a>
            <br />
            Phone:{" "}
            <a
              href="tel:+919082657529"
              style={{ color: "var(--teal)", textDecoration: "underline" }}
            >
              +91 9082657529
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
