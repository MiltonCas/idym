const menuButton = document.querySelector(".menu-button");
const nav = document.getElementById("mainNav");

function closeMenu() {
  if (!menuButton || !nav) return;
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
  document.body.style.overflow = "";
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.style.overflow = open ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}




const socialMenu = document.getElementById("socialMenu");
const socialToggle = document.getElementById("socialToggle");

if (socialMenu && socialToggle) {
/*  socialToggle.addEventListener("click", () => {
    const isOpen = socialMenu.classList.toggle("active");

    socialToggle.setAttribute("aria-expanded", String(isOpen));
    socialToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar redes sociales" : "Abrir redes sociales"
    );
  }); */

  document.addEventListener("click", (event) => {
    const clickedInside = socialMenu.contains(event.target);

    if (!clickedInside) {
      socialMenu.classList.remove("active");
      socialToggle.setAttribute("aria-expanded", "false");
      socialToggle.setAttribute("aria-label", "Abrir redes sociales");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      socialMenu.classList.remove("active");
      socialToggle.setAttribute("aria-expanded", "false");
      socialToggle.setAttribute("aria-label", "Abrir redes sociales");
    }
  });
}
