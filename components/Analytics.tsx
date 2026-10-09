import Script from "next/script";

/* Cloudflare Web Analytics. Free and unlimited, and unlike Google Analytics it
   sets no cookies, stores nothing on the visitor's device and does not follow
   anyone across other sites. That is why the site carries no cookie consent
   banner: there is no device storage to ask consent for.

   The token is read from NEXT_PUBLIC_CF_BEACON_TOKEN at build time; the deploy
   workflow supplies it from the CF_BEACON_TOKEN Actions secret, so it never
   enters this repo. It is still readable in the delivered page - the browser has
   to send it. It grants no access to the Cloudflare dashboard; the only abuse it
   allows is spoofed traffic in your own stats.

   Without the variable nothing loads, so local builds never fire a third-party
   request. See DEPLOY.md.

   Moving between pages no longer reloads them, but the beacon follows those
   in-app navigations on its own (its SPA tracking is on by default), so each
   page view is still counted. */
const TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export default function Analytics() {
  if (!TOKEN) return null;
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: TOKEN })}
      strategy="afterInteractive"
    />
  );
}
