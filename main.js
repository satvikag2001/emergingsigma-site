/* Emerging Sigma Consulting — shared site script */
(function () {
  "use strict";

  /* ── Quick Enquiry slide-out ───────────────────────────── */
  window.toggleFloat = function () {
    var f = document.getElementById("floatForm");
    if (!f) return;
    var open = f.classList.toggle("open");
    var tab = document.querySelector(".float-tab");
    if (tab) tab.setAttribute("aria-expanded", open ? "true" : "false");
  };

  /* ── Mobile navigation ─────────────────────────────────── */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.querySelector(".nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-locked", open);
    });

    /* On touch screens the dropdown can't rely on :hover — tap to expand. */
    menu.querySelectorAll(".nav-item > .nav-link:not([href])").forEach(function (link) {
      link.setAttribute("role", "button");
      link.setAttribute("tabindex", "0");
      link.setAttribute("aria-expanded", "false");
      function toggleDd(e) {
        if (window.innerWidth > 900) return;
        e.preventDefault();
        var item = link.parentElement;
        var open = item.classList.toggle("dd-open");
        link.setAttribute("aria-expanded", open ? "true" : "false");
      }
      link.addEventListener("click", toggleDd);
      link.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") toggleDd(e);
      });
    });

    /* Reset state when resizing back up to desktop. */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        menu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-locked");
        menu.querySelectorAll(".dd-open").forEach(function (i) {
          i.classList.remove("dd-open");
        });
      }
    });
  }

  /* ── Highlight the current page in the nav ─────────────── */
  function initActiveLink() {
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-menu a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#") return;
      if (href === here) {
        a.classList.add("active");
        var item = a.closest(".nav-item");
        var parent = item && item.querySelector(".nav-link:not([href])");
        if (parent) parent.classList.add("active");
      }
    });
  }

  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var supported = "IntersectionObserver" in window;

  /* ── Scroll reveal ──────────────────────────────────────
     Targets are derived at runtime rather than hand-tagged, so every page
     behaves the same without touching 17 files. Each section contributes its
     top-level blocks; any block that is a grid or flex row is replaced by its
     own children so rows cascade instead of appearing as one slab. */
  function revealTargets() {
    var sections = document.querySelectorAll(
      "section, .cta-band, .clients-strip, .stats-band, .doc-body"
    );
    var out = [];

    sections.forEach(function (sec) {
      if (sec.closest(".hero, .eq-hero")) return; // hero animates on load
      var scope = sec.querySelector(":scope > .wrap") || sec;
      var blocks = Array.prototype.slice.call(scope.children);

      blocks.forEach(function (el) {
        if (!el.getBoundingClientRect) return;
        var cs = getComputedStyle(el);
        if (cs.display === "none") return;

        // Expand one level: a multi-child grid/flex row staggers its children.
        var kids = Array.prototype.slice.call(el.children);
        if (
          (cs.display === "grid" || cs.display === "flex") &&
          kids.length >= 2 &&
          kids.length <= 24
        ) {
          out.push(kids);
        } else {
          out.push([el]);
        }
      });
    });
    return out;
  }

  function initReveal() {
    if (reduce || !supported) return; // CSS keeps everything visible

    var groups = revealTargets();
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          obs.unobserve(e.target);
        });
      },
      // Fire a little before the element reaches the bottom edge, so the
      // motion reads as anticipation rather than catching up.
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    var all = [];
    groups.forEach(function (group) {
      group.forEach(function (el, i) {
        el.classList.add("reveal");
        // Cap the cascade so a long row never feels slow to finish.
        var delay = Math.min(i * 0.07, 0.35);
        if (delay) el.style.setProperty("--rv-delay", delay + "s");
        all.push(el);
      });
    });

    /* Split by what is already on screen. Anything below the fold waits for
       the observer; anything visible now plays a cascade on load, so the page
       arrives rather than appearing fully formed. */
    var h = window.innerHeight || 0;
    var onscreen = [];
    all.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < h && r.bottom > 0) onscreen.push(el);
      else obs.observe(el);
    });

    /* Two frames: the first lets the hidden state paint, the second starts
       the transition. Setting both in one frame gets coalesced and the
       element would snap in with no animation at all. */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        onscreen.forEach(function (el, i) {
          el.style.setProperty("--rv-delay", Math.min(0.05 + i * 0.08, 0.5) + "s");
          el.classList.add("in");
        });
      });
    });

    /* Last resort. If anything visible is still hidden once the page has
       settled, show it — motion must never cost someone content. */
    window.addEventListener("load", function () {
      setTimeout(function () {
        var vh = window.innerHeight || 0;
        all.forEach(function (el) {
          if (el.classList.contains("in")) return;
          var r = el.getBoundingClientRect();
          if (r.top < vh && r.bottom > 0) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        });
      }, 1200);
    });
  }

  /* ── Hero entrance ──────────────────────────────────── */
  function initHero() {
    document
      .querySelectorAll(".hero-content, .eq-hero-inner")
      .forEach(function (hero) {
        Array.prototype.slice.call(hero.children).forEach(function (el, i) {
          el.style.setProperty("--i", i);
        });
      });
  }

  /* ── Condensing header + hero parallax ──────────────── */
  function initScrollEffects() {
    var nav = document.querySelector(".site-nav");
    var heroBg = document.querySelector(".hero-bg");
    var parallax = heroBg && !reduce;
    var ticking = false;

    function onScroll() {
      var y = window.pageYOffset;

      if (nav) nav.classList.toggle("condensed", y > 40);

      if (parallax && window.innerWidth > 900) {
        var h = heroBg.parentElement.offsetHeight || 520;
        if (y < h) {
          // Drift is bounded by the slack built into .hero-bg's inset, so the
          // image can never pull away from the edges of the hero.
          heroBg.style.transform =
            "translate3d(0," + (y * 0.12).toFixed(1) + "px,0)";
        }
      }
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(onScroll);
      },
      { passive: true }
    );
    onScroll();
  }

  /* ── Stat counters ──────────────────────────────────── */
  function initAnimations() {
    var stats = document.querySelectorAll(".stat-num[data-target]");
    function paint(el, val) {
      var sf = el.dataset.suffix || "";
      el.innerHTML = Math.floor(val) + "<span>" + sf + "</span>";
    }
    if (reduce || !supported) {
      stats.forEach(function (el) {
        paint(el, +el.dataset.target);
      });
      return;
    }
    var so = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target,
            target = +el.dataset.target,
            start = null;
          so.unobserve(el);
          requestAnimationFrame(function step(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / 1800, 1);
            // Ease out, so the count decelerates into its final value.
            paint(el, target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(step);
          });
        });
      },
      { threshold: 0.5 }
    );
    stats.forEach(function (el) {
      so.observe(el);
    });
  }

  /* ── Web3Forms submission ──────────────────────────────── */
  var PLACEHOLDER = "__WEB3FORMS_ACCESS_KEY__";

  function setStatus(form, msg, kind) {
    var box = form.querySelector(".form-status");
    if (!box) return;
    box.textContent = msg;
    box.className = "form-status " + (kind || "");
  }

  function initForms() {
    document.querySelectorAll("form[data-web3form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        var keyField = form.querySelector('input[name="access_key"]');
        if (!keyField || keyField.value === PLACEHOLDER || !keyField.value) {
          setStatus(
            form,
            "This form is not connected yet. Please email manish@emergingsigma.com directly.",
            "err"
          );
          return;
        }

        var btn = form.querySelector(".form-submit");
        var label = btn ? btn.textContent : "";
        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending…";
        }
        setStatus(form, "", "");

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form)
        })
          .then(function (r) {
            return r.json().catch(function () {
              return { success: r.ok };
            });
          })
          .then(function (data) {
            if (data && data.success) {
              form.reset();
              setStatus(
                form,
                "Thank you — your message has been sent. We will respond within one business day.",
                "ok"
              );
            } else {
              setStatus(
                form,
                "Sorry, something went wrong. Please email manish@emergingsigma.com or call +91 7769036573.",
                "err"
              );
            }
          })
          .catch(function () {
            setStatus(
              form,
              "Network error. Please email manish@emergingsigma.com or call +91 7769036573.",
              "err"
            );
          })
          .then(function () {
            if (btn) {
              btn.disabled = false;
              btn.textContent = label;
            }
          });
      });
    });
  }

  /* ── Boot ──────────────────────────────────────────────── */
  function init() {
    initMobileNav();
    initActiveLink();
    initHero();
    initReveal();
    initScrollEffects();
    initAnimations();
    initForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
