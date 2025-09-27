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
