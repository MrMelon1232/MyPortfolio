// Fetch our projects page to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/projects.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("projects").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading projects page:", error));
});
