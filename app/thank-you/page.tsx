import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Thank You | Emerging Sigma Consulting",
  description:
    "Thank you for contacting Emerging Sigma Consulting. We will respond to your enquiry within one business day.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Thank You", href: "/thank-you" }]} />
      <div className="page-hero">
        <div className="wrap">
          <h1>Thank You</h1>
          <p>We have received your enquiry.</p>
        </div>
      </div>
      <section className="sec">
        <div className="wrap" style={{ maxWidth: "680px", textAlign: "center" }}>
          <div style={{ fontSize: "56px", lineHeight: "1", marginBottom: "20px" }}>✅</div>
          <h2 className="sec-title" style={{ marginBottom: "10px" }}>
            Your message has been sent
          </h2>
          <div className="divider" style={{ margin: "0 auto 22px" }}></div>
          <p style={{ marginBottom: "14px" }}>
            Thank you for reaching out to Emerging Sigma Consulting. We have received your enquiry
            and will respond within one business day.
          </p>
          <p style={{ marginBottom: "32px" }}>
            If your matter is urgent, please call us directly on{" "}
            <a
              href="tel:+919082657529"
              style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "underline" }}
            >
              +91 9082657529
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>{" "}
            <Link href="/services" className="btn btn-ghost">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
