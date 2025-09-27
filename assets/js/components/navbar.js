// Fetch our navbar component to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("navbar").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading navbar:", error));
});

// Function to open navbar menu
function openNavbarMenu() {
    document.getElementById("navMenu").classList.toggle("responsive");
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

// Add shadow effect to scroll event
window.addEventListener("scroll", () => {
    headerShadow();
});
