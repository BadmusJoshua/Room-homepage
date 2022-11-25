let currentSlide = 0;
let currentText = 0;
const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".text");

const init = (n) => {
  slides.forEach((slides, index) => {
    slides.style.display = "none";
  });
  slides[n].style.display = "block";
};
const binit = (m) => {
  texts.forEach((texts, index) => {
    texts.style.display = "none";
  });
  texts[m].style.display = "block";
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
document.addEventListener("DOMContentLoaded", binit(currentText));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
  currentText >= texts.length - 1 ? (currentText = 0) : currentText++;
  binit(currentText);
};
const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
  currentText <= 0 ? (currentText = texts.length - 1) : currentText--;
  binit(currentText);
};
document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);
