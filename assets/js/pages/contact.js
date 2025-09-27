// Fetch our home page to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/contact.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("contact").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading contact page:", error));
});
