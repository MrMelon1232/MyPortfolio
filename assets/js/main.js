// Wait for the DOM to load before adding scroll effects
document.addEventListener("DOMContentLoaded", () => {
    // Scroll Reveal animation
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    // Home page
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });

    // Projects page
    sr.reveal(".project-box", { interval: 200 });

    // Heading
    sr.reveal(".top-header", {});

    // Scroll reveal left-right animation
    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    // About skills and form
    const srRight = ScrollReveal({
        origin: "right",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });

    // Spy on current sections for scrolling
    const sections = document.querySelectorAll("section[id]");

    // Function to change active link on scroll
    // Function to change active link on scroll
    function scrollActive() {
        const scrollY = window.scrollY;

        // Get each section and determine position, height
        sections.forEach((current) => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute("id");

            // If scroll is within section, add active class to corresponding link
            const link = document.querySelector(
                ".nav-menu a[href*=" + sectionId + "]"
            );
            if (link) {
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    link.classList.add("active-link");
                } else {
                    link.classList.remove("active-link"); // <-- should be remove
                }
            }
        });
    }

    // Header shadow function
    function headerShadow() {
        const navHeader = document.getElementById("header");

        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            // Stronger accent shadow when scrolling
            navHeader.style.boxShadow =
                "0 4px 12px rgba(186, 140, 99, 0.35), 0 2px 6px rgba(0, 0, 0, 0.4)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else {
            // Subtle separation by default
            navHeader.style.boxShadow = "0 2px 6px rgba(245, 239, 230, 0.08)";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

    // Add scrolling and shadow effect to scroll event
    window.addEventListener("scroll", () => {
        scrollActive();
        headerShadow();
    });
});
