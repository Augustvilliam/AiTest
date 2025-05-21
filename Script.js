// Dark mode toggle
const toggleTheme = document.getElementById("toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// Set theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Newsletter form confirmation
const form = document.getElementById("newsletter-form");
const confirmation = document.getElementById("confirmation");
if (form && confirmation) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmation.classList.remove("hidden");
    form.reset();
  });
}

// Accordion toggle
const accordions = document.querySelectorAll(".accordion-toggle");
accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    if (btn.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});