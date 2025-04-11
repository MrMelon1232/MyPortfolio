// Fetch our about page to render it
document.addEventListener("DOMContentLoaded", function () {
    fetch("pages/about.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("about-container").innerHTML = data;
      })
  
      // Catch error
      .catch((error) => console.error("Error loading about page:", error));
  });
  