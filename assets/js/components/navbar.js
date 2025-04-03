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
