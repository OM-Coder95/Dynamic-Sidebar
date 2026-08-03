const cl = console.log;

const sideBarOpen = document.getElementById("sideBarOpen");
const sideBar = document.getElementById("sideBar");
const sideBarClose = document.getElementById("sideBarClose");
const overlay = document.getElementById("overlay");

function sideBarOpenAndClose(event) {
  sideBar.classList.toggle("active");
  overlay.classList.toggle("active");
}

sideBarOpen.addEventListener("click", sideBarOpenAndClose);
sideBarClose.addEventListener("click", sideBarOpenAndClose);
overlay.addEventListener("click", sideBarOpenAndClose);
