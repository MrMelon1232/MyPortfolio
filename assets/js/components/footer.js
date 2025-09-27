// Fetch our footer component to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading footer:", error));
});
