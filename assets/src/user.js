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
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const pengumuman = document.querySelector(".pengumuman-container");
const kompe_user = document.querySelector("#kompe_user");

const containerDashboard = document.querySelector("#container-content");
const logo_satpolpp = document.querySelector("#logo-satpolpp");
const dokumen = document.getElementById("document");
const register = document.getElementById("register");

let previousToggled = null;
let currentToggled = null;

search.addEventListener("click", (e) => {
  toggleMenu(search);
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
logo_satpolpp.style.paddingLeft = "10px";
menu_container.style.paddingTop = "12px";

const openMenu = () => {
  sidebar.classList.add("active");
  sidebar.style.width = "260px";

  toggleMenu(menu);

  text1.style.display = "none";
  text2.style.display = "none";

  // logo satpol pp
  // logo_satpolpp.style.paddingLeft = "220px";
  logo_satpolpp.style.width = "220px";
  logo_satpolpp.style.justifyContent = "left";

  // Hamburger
  menu_container.style.paddingLeft = "145px";

  let p_search = document.createElement("p");
  p_search.id = "p-search";
  p_search.innerHTML = "Home";
  search.style.width = "220px";
  search.style.justifyContent = "left";
  search.appendChild(p_search);

  let p_kompe = document.createElement("p");
  p_kompe.id = "p-kompe";
  p_kompe.innerHTML = "Ujian Kompetensi";
  kompe_user.style.width = "220px";
  kompe_user.style.justifyContent = "left";
  kompe_user.appendChild(p_kompe);

  // let p_dash = document.createElement("p");
  // p_dash.id = "p-dashboard";
  // p_dash.innerHTML = "Pegawai";
  // dashboard.style.width = "220px";
  // dashboard.style.justifyContent = "left";
  // dashboard.appendChild(p_dash);
  let user_container = document.createElement("div");
  user_container.id = "user-container";

  let user_name = document.createElement("p");
  user_name.id = "user-name";
  user_name.innerHTML = "Diego Ferreira";

  let user_role = document.createElement("p");
  user_role.id = "user-role";
  user_role.innerHTML = "Veterinarian";

  // dashboard pengumuman
  // pengumuman.style.paddingLeft = "220px";

  user_container.appendChild(user_name);
  user_container.appendChild(user_role);

  main.style.width = "calc(100% - 120px)";
};

const closeMenu = () => {
  menu_container.style.paddingLeft = "10px";

  untoggleMenu(menu);

  logo_satpolpp.style.paddingLeft = "18px";
  logo_satpolpp.style.width = "80px";
  logo_satpolpp.style.justifyContent = "center";

  text1.style.display = "block";
  text2.style.display = "block";

  search.removeChild(document.getElementById("p-search"));
  search.style.width = "80px";
  search.style.justifyContent = "center";

  kompe_user.removeChild(document.getElementById("p-kompe"));
  kompe_user.style.width = "80px";
  kompe_user.style.justifyContent = "center";

  // dashboard.removeChild(document.getElementById("p-dashboard"));
  // dashboard.style.width = "80px";
  // dashboard.style.justifyContent = "center";

  // dashboard
  // pengumuman.style.paddingLeft = "92px";

  sidebar.classList.remove("active");
  sidebar.style.width = "145px";

  main.style.width = "calc(100% - 120px)";
};
