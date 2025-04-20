const burger = document.createElement("div");
burger.classList.add("menu-toggle");
burger.innerHTML = "&#9776;";
document.querySelector("nav").appendChild(burger);

const menuMobile = document.createElement("div");
menuMobile.classList.add("mobile-drawer");
menuMobile.innerHTML = `
    <div class="drawer-header">
      <span class="close-drawer">&times;</span>
    </div>
    <a href="index.html">Accueil</a>
    <a href="about.html">À propos</a>
    <a href="event.html">Événements</a>
    <a href=contact.html">
     <button class="btn-primary btn-drawer"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone-icon lucide-phone"><path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Nous contacter</button></a>
  `;
document.body.appendChild(menuMobile);

const toggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector(".mobile-drawer");
const closeDrawer = document.querySelector(".close-drawer");

toggle.addEventListener("click", () => drawer.classList.add("open"));
closeDrawer.addEventListener("click", () => drawer.classList.remove("open"));
