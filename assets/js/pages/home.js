// Fetch our home page to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/home.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("home").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading home page:", error));
});
