// Inject components into our main
async function loadComponent(component, targetElement) {
  const response = await fetch("/components/${component}.html");

  if (response.ok) {
    targetElement.innerHTML = await response.text();
  }
}

// Load all of our components into our main page
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", document.getElementById("navbar-container"));
  loadComponent("footer", document.getElementById("footer-container"));
});
