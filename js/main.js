const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});
///////////////////dark/////////////////////////////////
let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "./images/light.svg";
  } else {
    this.firstElementChild.src = "./images/dark.svg";
  }
  document.body.classList.toggle("light");
});
///////////////////////shirnk/////////////////////////////
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
//////bactop////////////////////////////////////
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
