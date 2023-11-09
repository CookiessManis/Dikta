const sidebar = document.querySelector(".sidebar");
const menu = document.querySelector("#menu");

const main = document.querySelector(".main");

const menu_container = document.querySelector(".menu-container");
const logout_container = document.querySelector(".logout-container");

const icon_logout = document.querySelector(".icon-logout");

const search = document.querySelector("#search");
const dashboard = document.querySelector("#dashboard");
const clients = document.querySelector("#clients");
const vets = document.querySelector("#vets");
const settings = document.querySelector("#settings");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

let previousToggled = null;
let currentToggled = null;

search.addEventListener("click", (e) => {
  toggleMenu(search);
});

dashboard.addEventListener("click", (e) => {
  toggleMenu(dashboard);
});

vets.addEventListener("click", (e) => {
  toggleMenu(vets);
});

settings.addEventListener("click", (e) => {
  toggleMenu(settings);
});

const toggleMenu = (button) => {
  if (previousToggled && button !== menu) {
    untoggleMenu(previousToggled);
  }

  button.classList.add("toggled");
  // button.style.backgroundColor = "#8ed7c6";

  if (button !== menu) {
    previousToggled = button;
  }
};

const untoggleMenu = (button) => {
  button.classList.remove("toggled");
  // button.style.backgroundColor = "#18c29c";
};

menu.addEventListener("click", (e) => {
  sidebar.classList.contains("active") ? closeMenu() : openMenu();
});

menu_container.style.paddingLeft = "12px";
menu_container.style.paddingTop = "12px";

const openMenu = () => {
  sidebar.classList.add("active");
  sidebar.style.width = "260px";

  toggleMenu(menu);

  text1.style.display = "none";
  text2.style.display = "none";

  // Hamburger
  menu_container.style.paddingLeft = "135px";

  let p_search = document.createElement("p");
  p_search.id = "p-search";
  p_search.innerHTML = "Search";
  search.style.width = "220px";
  search.style.justifyContent = "left";
  search.appendChild(p_search);

  let p_dash = document.createElement("p");
  p_dash.id = "p-dashboard";
  p_dash.innerHTML = "Pegawai";
  dashboard.style.width = "220px";
  dashboard.style.justifyContent = "left";
  dashboard.appendChild(p_dash);

  let p_clients = document.createElement("p");
  p_clients.id = "p-clients";
  p_clients.innerHTML = "Clients";
  clients.style.width = "220px";
  clients.style.justifyContent = "left";
  clients.appendChild(p_clients);

  let p_vets = document.createElement("p");
  p_vets.id = "p-vets";
  p_vets.innerHTML = "Vets";
  vets.style.width = "220px";
  vets.style.justifyContent = "left";
  vets.appendChild(p_vets);

  let p_settings = document.createElement("p");
  p_settings.id = "p-settings";
  p_settings.innerHTML = "Settings";
  settings.style.width = "220px";
  settings.style.justifyContent = "left";
  settings.appendChild(p_settings);

  let user_container = document.createElement("div");
  user_container.id = "user-container";

  let user_name = document.createElement("p");
  user_name.id = "user-name";
  user_name.innerHTML = "Diego Ferreira";

  let user_role = document.createElement("p");
  user_role.id = "user-role";
  user_role.innerHTML = "Veterinarian";

  user_container.appendChild(user_name);
  user_container.appendChild(user_role);

  main.style.width = "calc(100% - 120px)";
};

const closeMenu = () => {
  menu_container.style.paddingLeft = "12px";

  untoggleMenu(menu);

  text1.style.display = "block";
  text2.style.display = "block";

  search.removeChild(document.getElementById("p-search"));
  search.style.width = "80px";
  search.style.justifyContent = "center";

  dashboard.removeChild(document.getElementById("p-dashboard"));
  dashboard.style.width = "80px";
  dashboard.style.justifyContent = "center";

  clients.removeChild(document.getElementById("p-clients"));
  clients.style.width = "50px";
  clients.style.justifyContent = "center";

  vets.removeChild(document.getElementById("p-vets"));
  vets.style.width = "50px";
  vets.style.justifyContent = "center";

  settings.removeChild(document.getElementById("p-settings"));
  settings.style.width = "50px";
  settings.style.justifyContent = "center";

  sidebar.classList.remove("active");
  sidebar.style.width = "120px";

  main.style.width = "calc(100% - 120px)";
};
