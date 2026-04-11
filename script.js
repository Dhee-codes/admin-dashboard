const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const sidebar = document.querySelector(".sidebar");

openMenu.addEventListener("click", () => {
  sidebar.classList.toggle("open");

  const isExpanded = openMenu.getAttribute("aria-expanded") === "true";

  openMenu.setAttribute("aria-expanded", !isExpanded);
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("open");

  const isExpanded = openMenu.getAttribute("aria-expanded") === "true";

  openMenu.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (e) => {
  const isExpanded = openMenu.getAttribute("aria-expanded") === "true";

  if (!sidebar.contains(e.target) && !openMenu.contains(e.target)) {
    sidebar.classList.remove("open");
    openMenu.setAttribute("aria-expanded", "false");
  }
});
