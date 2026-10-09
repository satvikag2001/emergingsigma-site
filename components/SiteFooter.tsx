import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img
                src="/assets/logo.png"
                alt="Emerging Sigma Consulting"
                width="722"
                height="128"
              />
            </div>
            <p className="footer-about">
              You innovate. We build the quality systems, secure the regulatory approvals and set up
              compliance through smart, lean and digital solutions.
            </p>
            <p style={{ marginTop: "14px", fontSize: "12px", color: "rgba(255,255,255,.4)" }}>
              www.emergingsigma.com
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/regulatory">Regulatory Affairs</Link>
              </li>
              <li>
                <Link href="/quality-management-system">Quality Management</Link>
              </li>
              <li>
                <Link href="/digitalization">Digitalization</Link>
              </li>
              <li>
                <Link href="/training">Training &amp; Development</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+919082657529">+91 9082657529</a>
              </li>
              <li>
                <a href="mailto:support@emergingsigma.com">support@emergingsigma.com</a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Nesco+IT+Park+Goregaon+East+Mumbai+400063"
                  target="_blank"
                  rel="noopener"
                >
                  Nesco IT Park, Goregaon (East),
                  <br />
                  Mumbai 400063
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Emerging Sigma Consulting. All Rights Reserved.</span>
          <span>
            <Link href="/privacy-policy">Privacy Policy</Link> &nbsp;|&nbsp;{" "}
            <a href="/sitemap.xml">Sitemap</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
