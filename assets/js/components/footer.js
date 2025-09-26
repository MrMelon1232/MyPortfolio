// Fetch our footer component to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-page").innerHTML = data;
        })

        // Catch error
        .catch((error) => console.error("Error loading footer:", error));
});
