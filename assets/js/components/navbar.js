// Fetch our navbar component to render it
document.addEventListener("DOMContentLoaded", function () {
  fetch("components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })

    // Catch error
    .catch((error) => console.error("Error loading navbar:", error));
});

// Function to open navbar menu
function openNavbarMenu() {
  var menuBtn = document.getElementById("navMenu");

  // Display responsive navbar
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
