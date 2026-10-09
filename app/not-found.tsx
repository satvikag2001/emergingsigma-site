import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Page Not Found | Emerging Sigma Consulting",
  description: "The page you requested could not be found on emergingsigma.com.",
});

export default function NotFound() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <h1>Page Not Found</h1>
          <p>The page you requested does not exist or has moved.</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap" style={{ maxWidth: "680px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Merriweather',serif",
              fontSize: "76px",
              lineHeight: "1",
              color: "var(--gray3)",
              marginBottom: "10px",
            }}
          >
            404
          </div>
          <h2 className="sec-title" style={{ marginBottom: "10px" }}>
            We couldn't find that page
          </h2>
          <div className="divider" style={{ margin: "0 auto 22px" }}></div>
          <p style={{ marginBottom: "32px" }}>
            The page you were looking for may have been moved or renamed. Try one of the links
            below, or get in touch and we'll point you in the right direction.
          </p>
          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>{" "}
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
          <div
            style={{
              textAlign: "left",
              background: "var(--gray1)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r2)",
              padding: "26px 30px",
            }}
          >
            <h4 style={{ marginBottom: "14px" }}>Popular pages</h4>
            <ul className="doc-list">
              <li>
                <Link href="/services" style={{ color: "var(--teal)" }}>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/regulatory" style={{ color: "var(--teal)" }}>
                  Regulatory Affairs
                </Link>
              </li>
              <li>
                <Link href="/quality-management-system" style={{ color: "var(--teal)" }}>
                  Quality Management Systems
                </Link>
              </li>
              <li>
                <Link href="/training" style={{ color: "var(--teal)" }}>
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: "var(--teal)" }}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
