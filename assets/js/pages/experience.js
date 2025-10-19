// Fetch our experience page to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/experience.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("experience").innerHTML = data;
        })

        // Catch error
        .catch((error) =>
            console.error("Error loading experience page:", error)
        );
});
