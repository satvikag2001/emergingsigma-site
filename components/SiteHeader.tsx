"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type KeyboardEvent, type MouseEvent } from "react";
import { normalizePath } from "@/lib/paths";

const MOBILE_MAX = 900;

const QUALITY_LINKS = [
  { href: "/quality-management-system", label: "Quality Management System" },
  { href: "/product-quality", label: "Product Quality Management" },
  { href: "/equipment-qualification", label: "Equipment Qualification" },
  { href: "/supplier-quality", label: "Supplier Quality Management" },
  { href: "/warehouse-logistics-quality", label: "Warehouse & Logistics" },
];

export default function SiteHeader() {
  const here = normalizePath(usePathname());
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  // The current page's link carries .active, in the menu and its dropdown alike.
  const linkClass = (href: string, base = "") =>
    [base, href === here ? "active" : ""].filter(Boolean).join(" ") || undefined;

  // Arriving on a new page closes the mobile menu, as a full page load used to.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [here]);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.classList.toggle("nav-locked", menuOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [menuOpen]);

  // Reset when resizing back up to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_MAX) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // The header condenses once the page scrolls.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setCondensed(window.pageYOffset > 40);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* "Our Services" is a real link to the services page. On desktop the panel
     opens on hover. On touch screens there is no hover, so tapping the caret
     expands the group while tapping the label still follows the link. */
  function toggleServices(e: MouseEvent | KeyboardEvent) {
    if (window.innerWidth > MOBILE_MAX) return;
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen((open) => !open);
  }

  // Following any link closes the menu, including a link to the current page.
  function onMenuClick(e: MouseEvent<HTMLUListElement>) {
    if ((e.target as Element).closest("a")) setMenuOpen(false);
  }

  return (
    <header className={`site-nav${condensed ? " condensed" : ""}`}>
      <div className="wrap">
        <nav className="nav-wrap">
          <Link href="/" className="nav-logo">
            <img src="/assets/logo.png" alt="Emerging Sigma Consulting" width="722" height="128" />
          </Link>
          <ul className={`nav-menu${menuOpen ? " open" : ""}`} id="navMenu" onClick={onMenuClick}>
            <li className="nav-item">
              <Link href="/" className={linkClass("/", "nav-link")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={linkClass("/about", "nav-link")}>
                About Us
              </Link>
            </li>
            <li className={`nav-item${servicesOpen ? " dd-open" : ""}`}>
              <Link href="/services" className={linkClass("/services", "nav-link")}>
                Our Services{" "}
                <span
                  className="caret"
                  role="button"
                  tabIndex={0}
                  aria-label="Show services"
                  aria-expanded={servicesOpen}
                  onClick={toggleServices}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggleServices(e);
                  }}
                >
                  ▾
                </span>
              </Link>
              <div className="nav-dd">
                <Link href="/regulatory" className={linkClass("/regulatory")}>
                  Regulatory Affairs
                </Link>
                <div className="nav-dd-group">
                  <span className="nav-dd-label">Quality Management</span>
                  {QUALITY_LINKS.map((l) => (
                    <Link key={l.href} href={l.href} className={linkClass(l.href)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
                <Link href="/digitalization" className={linkClass("/digitalization")}>
                  Digitalization
                </Link>
                <Link href="/training" className={linkClass("/training")}>
                  Training &amp; Development
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/resources" className={linkClass("/resources", "nav-link")}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={linkClass("/contact", "nav-link nav-cta")}>
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="navMenu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
