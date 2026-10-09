"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Web3Form from "@/components/Web3Form";

/** The "Quick Enquiry" tab pinned to the edge of every page. */
export default function QuickEnquiry() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on navigation, as a full page load used to.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="float-contact" id="floatContact">
      <button
        className="float-tab"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-controls="floatForm"
        aria-expanded={open}
      >
        Quick Enquiry
      </button>
      <div className={`float-form${open ? " open" : ""}`} id="floatForm">
        <button
          className="close-btn"
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close quick enquiry"
        >
          ×
        </button>
        <h4>Quick Enquiry</h4>
        <Web3Form subject="Quick Enquiry from emergingsigma.com" submitLabel="Send Enquiry">
          <div className="form-g">
            <label htmlFor="qe-name">Name</label>
            <input
              id="qe-name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>
          <div className="form-g">
            <label htmlFor="qe-phone">Phone</label>
            <input
              id="qe-phone"
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              autoComplete="tel"
            />
          </div>
          <div className="form-g">
            <label htmlFor="qe-email">Email</label>
            <input
              id="qe-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-g">
            <label htmlFor="qe-service">Service</label>{" "}
            <select id="qe-service" name="service">
              <option value="">Select…</option>
              <option>Quality Management Systems</option>
              <option>Regulatory Affairs (CDSCO)</option>
              <option>Regulatory Affairs (EU MDR/IVDR)</option>
              <option>Regulatory Affairs (US FDA)</option>
              <option>Equipment Qualification</option>
              <option>Training Programs</option>
            </select>
          </div>
          <div className="form-g">
            <label htmlFor="qe-message">Message</label>
            <textarea
              id="qe-message"
              name="message"
              placeholder="Briefly describe your requirement…"
              style={{ minHeight: "70px" }}
              required
            />
          </div>
        </Web3Form>
      </div>
    </div>
  );
}
