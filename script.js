/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        loader.classList.add("hide");
    }, 500);

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");
            menuBtn.innerHTML = "☰";

        });

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".section, .project, .project-card, .result-card, .timeline-item, .organization-card, .skill-list, .contact-inner"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   MOUSE CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", function (event) {

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

    });


    const hoverElements = document.querySelectorAll(
        "a, button, .project-card, .organization-card, .skill-list span"
    );

    hoverElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            cursor.style.transform = "translate(-50%, -50%) scale(3)";
            cursor.style.mixBlendMode = "difference";

        });

        element.addEventListener("mouseleave", function () {

            cursor.style.transform = "translate(-50%, -50%) scale(1)";
            cursor.style.mixBlendMode = "normal";

        });

    });

}


/* =====================================================
   NAVBAR BACKGROUND ON SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.style.opacity = "0.55";

        if (link.getAttribute("href") === "#" + current) {

            link.style.opacity = "1";

        }

    });

});


/* =====================================================
   IMAGE FALLBACK
===================================================== */

const profileImage = document.querySelector(".profile-image img");

if (profileImage) {

    profileImage.addEventListener("error", function () {

        profileImage.style.display = "none";

        const fallback = document.getElementById("photoFallback");

        if (fallback) {
            fallback.style.display = "flex";
        }

    });

}
