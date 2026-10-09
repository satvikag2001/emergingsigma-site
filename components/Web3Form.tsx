"use client";

import { useState, type FormEvent, type ReactNode } from "react";

/* Web3Forms emails each submission to the inbox the access key belongs to.
   The key is read from NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY at build time; the
   deploy workflow supplies it from the WEB3FORMS_ACCESS_KEY Actions secret, so
   it never enters this repo. It is still readable in the delivered page, which
   no static site can avoid. Without it the form stays visibly switched off. */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const ENDPOINT = "https://api.web3forms.com/submit";

type Status = { msg: string; kind: "" | "ok" | "err" };

const NOT_CONNECTED: Status = {
  msg: "This form is not connected yet. Please email support@emergingsigma.com directly.",
  kind: "err",
};
const SENT: Status = {
  msg: "Thank you. Your message has been sent. We will respond within one business day.",
  kind: "ok",
};
const FAILED: Status = {
  msg: "Sorry, something went wrong. Please email support@emergingsigma.com or call +91 9082657529.",
  kind: "err",
};
const OFFLINE: Status = {
  msg: "Network error. Please email support@emergingsigma.com or call +91 9082657529.",
  kind: "err",
};

type Props = {
  /** Subject line of the email Web3Forms sends. */
  subject: string;
  submitLabel: string;
  /** The visible fields. Left uncontrolled so a reset clears them. */
  children: ReactNode;
};

/**
 * Submits with fetch and reports inline. With JavaScript off, the form posts
 * normally and Web3Forms redirects the visitor to /thank-you instead.
 */
export default function Web3Form({ subject, submitLabel, children }: Props) {
  const [status, setStatus] = useState<Status>({ msg: "", kind: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStatus(NOT_CONNECTED);
      return;
    }

    setSending(true);
    setStatus({ msg: "", kind: "" });
    try {
      const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await r.json().catch(() => ({ success: r.ok }));
      if (data?.success) {
        form.reset();
        setStatus(SENT);
      } else {
        setStatus(FAILED);
      }
    } catch {
      setStatus(OFFLINE);
    } finally {
      setSending(false);
    }
  }

  return (
    <form action={ENDPOINT} method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="Emerging Sigma Website" />
      <input type="hidden" name="redirect" value="https://emergingsigma.com/thank-you" />
      {/* Honeypot: people never see it, bots fill it, Web3Forms drops those. */}
      <input
        type="checkbox"
        name="botcheck"
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      {children}
      <button className="form-submit" type="submit" disabled={sending}>
        {sending ? "Sending…" : submitLabel}
      </button>
      <p className={`form-status ${status.kind}`} role="status" aria-live="polite">
        {status.msg}
      </p>
    </form>
  );
}
