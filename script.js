const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const about = document.getElementById("about");
const about2 = document.getElementById("about2");
const inicio = document.getElementById("inicio");
const servicios = document.getElementById("servicios");
const servicios2 = document.getElementById("servicios2");
const safe = document.getElementById("safe");
const Carrusel = document.getElementById("contenidoSlider");
const somos = document.getElementById("somos-safe");
const inputs = document.querySelectorAll(".input");
const contacto = document.getElementById("contacto");
const contacto2 = document.getElementById("contacto2");
const comunidad = document.getElementById("comunidad");
const comunidad2 = document.getElementById("comunidad2");
const masInfo = document.getElementById("masInfo");

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,

  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: { slidesPerView: 2 },
    950: {
      slidesPerView: 3,
    },
  },
});

const funcionamientoMenu = function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  Carrusel.classList.toggle("margen");
  somos.classList.toggle("margen");
  document.querySelector(".about").classList.toggle("margen");
  document.querySelector(".servicios").classList.toggle("margen");
  document.querySelector(".contacto").classList.toggle("margen");
  document.querySelector(".comunidad").classList.toggle("margen");
};

safe.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.remove("hidden");
  somos.classList.remove("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
});
hamburger.addEventListener("click", () => {
  funcionamientoMenu();
});

about.addEventListener("click", () => {
  document.querySelector(".about").classList.remove("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
  funcionamientoMenu();
});

about2.addEventListener("click", () => {
  document.querySelector(".about").classList.remove("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
});

inicio.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.remove("hidden");
  somos.classList.remove("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
  funcionamientoMenu();
});

servicios.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.remove("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
  funcionamientoMenu();
});

servicios2.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.remove("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
});

comunidad.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.remove("hidden");
  funcionamientoMenu();
});

comunidad2.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.add("hidden");
  document.querySelector(".comunidad").classList.remove("hidden");
});

contacto.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.remove("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
  funcionamientoMenu();
});

contacto2.addEventListener("click", () => {
  document.querySelector(".about").classList.add("hidden");
  Carrusel.classList.add("hidden");
  somos.classList.add("hidden");
  document.querySelector(".servicios").classList.add("hidden");
  document.querySelector(".contacto").classList.remove("hidden");
  document.querySelector(".comunidad").classList.add("hidden");
});

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

masInfo.addEventListener("click", function () {
  document.querySelectorAll(".info-est").classList.toggle("hidden");
});
