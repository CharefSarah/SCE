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
    <a href="contact">Contact</a>
      <a href="log.html"><button class="btn-primary"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path
                                    d="M18 20a6 6 0 0 0-12 0" /><circle cx="12"
                                    cy="10" r="4" /><circle cx="12" cy="12"
                                    r="10" /></svg>SE CONNECTER</button></a>
                </div>
  `;
document.body.appendChild(menuMobile);

const toggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector(".mobile-drawer");
const closeDrawer = document.querySelector(".close-drawer");

toggle.addEventListener("click", () => drawer.classList.add("open"));
closeDrawer.addEventListener("click", () => drawer.classList.remove("open"));
