// ── NAVBAR ──
const navbar = document.getElementById("navbar");
if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// ── MOBILE MENU ──
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// ── SCROLL REVEAL ──
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ── FORM SUBMIT ──
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = quoteForm.querySelector("button[type=submit]");
        btn.textContent = "✓ Request Sent!";
        btn.style.background = "#1a7a1a";
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = "Submit Request →";
            btn.style.background = "";
            btn.disabled = false;
            quoteForm.reset();
        }, 4000);
    });
}
