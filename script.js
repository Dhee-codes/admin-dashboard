const menuBtn = document.querySelector(".open-menu");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");

  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute("aria-expanded", !isExpanded);
});

document.addEventListener("click", (e) => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});
