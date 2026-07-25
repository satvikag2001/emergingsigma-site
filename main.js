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

  /* ── Scroll reveal + stat counters (unchanged behaviour) ─ */
  function initAnimations() {
    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var els = document.querySelectorAll(".fade-up");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("visible");
      });
    } else {
      var obs = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach(function (el) {
        obs.observe(el);
      });
    }

    var stats = document.querySelectorAll(".stat-num[data-target]");
    function paint(el, val) {
      var sf = el.dataset.suffix || "";
      el.innerHTML = Math.floor(val) + "<span>" + sf + "</span>";
    }
    if (reduce || !("IntersectionObserver" in window)) {
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
            paint(el, target * p);
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
    initAnimations();
    initForms();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
