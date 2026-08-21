/* =====================================================
   ARI MULDIN AL BANANI
   PORTFOLIO INTERACTION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });



    /* =================================================
       NAVBAR SCROLL
    ================================================= */

    const navbar = document.querySelector(".nav");

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();



    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton = document.querySelector(".menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("show");

            if (mobileMenu.classList.contains("show")) {

                menuButton.textContent = "×";

            } else {

                menuButton.textContent = "☰";

            }

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("show");

                menuButton.textContent = "☰";

            });

        });

    }



    /* =================================================
       COUNTER ANIMATION
    ================================================= */

    const counters =
        document.querySelectorAll(".counter");


    function animateCounter(counter) {

        const target =
            parseFloat(counter.dataset.target);

        const duration = 1800;

        const startTime = performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(elapsed / duration, 1);


            /*
             * Ease-out cubic
             */

            const eased =
                1 - Math.pow(1 - progress, 3);


            const current =
                target * eased;


            counter.textContent =
                current.toFixed(2);


            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                counter.textContent =
                    target.toFixed(2);

            }

        }


        requestAnimationFrame(update);

    }


    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach((counter) => {

        counterObserver.observe(counter);

    });



    /* =================================================
       CUSTOM CURSOR
    ================================================= */

    const cursorDot =
        document.querySelector(".cursor-dot");

    const cursorRing =
        document.querySelector(".cursor-ring");


    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            (event) => {

                mouseX = event.clientX;
                mouseY = event.clientY;


                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX) * 0.15;

            ringY +=
                (mouseY - ringY) * 0.15;


            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const hoverElements =
            document.querySelectorAll(
                "a, button, .project-card, .skills-list span"
            );


        hoverElements.forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursorRing.classList.add("hover");

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursorRing.classList.remove("hover");

                }
            );

        });

    }



    /* =================================================
       PROJECT CARD MOUSE EFFECT
    ================================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (
                    !window.matchMedia(
                        "(pointer:fine)"
                    ).matches
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -1.5;


                const rotateY =
                    ((x - centerX) / centerX) * 1.5;


                card.style.transform =
                    `translateY(-7px)
                     perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });



    /* =================================================
       HERO PHOTO PARALLAX
    ================================================= */

    const heroVisual =
        document.querySelector(".hero-visual");


    const photoContainer =
        document.querySelector(".photo-container");


    if (
        heroVisual &&
        photoContainer &&
        window.matchMedia("(pointer:fine)").matches
    ) {

        heroVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const moveX =
                    (x - centerX) * 0.015;


                const moveY =
                    (y - centerY) * 0.015;


                photoContainer.style.transform =
                    `translate(${moveX}px, ${moveY}px)
                     rotate(2deg)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                photoContainer.style.transform =
                    "translate(0,0) rotate(2deg)";

            }
        );

    }



    /* =================================================
       STAGGER PROJECT ELEMENTS
    ================================================= */

    const staggerGroups = [
        ".project-card",
        ".org-card",
        ".timeline-item",
        ".skills-list span"
    ];


    staggerGroups.forEach((selector) => {

        const elements =
            document.querySelectorAll(selector);


        elements.forEach((element, index) => {

            element.style.transitionDelay =
                `${index * 0.06}s`;

        });

    });



    /* =================================================
       ACTIVE NAV LINK
    ================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        navLinks.forEach((link) => {

                            link.classList.remove(
                                "active"
                            );

                            if (
                                link.getAttribute("href") ===
                                `#${entry.target.id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach((section) => {

        sectionObserver.observe(section);

    });

});
