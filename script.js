// Handy-Menü
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#navigation");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
// Menü schließen
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }),
);

// Speisekarte filtern
document.querySelectorAll(".filter").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    const selected = button.dataset.filter;
    document
      .querySelectorAll(".menu-list article")
      .forEach(
        (item) =>
          (item.hidden =
            selected !== "all" && item.dataset.category !== selected),
      );
  }),
);

// Animation beim Scrollen
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.14 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

// Aktuelles Jahr
document.querySelector("#year").textContent = new Date().getFullYear();
