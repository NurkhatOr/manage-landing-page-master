const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelector(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    //close
    body.classList.remove("noscroll");
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    fadeElems.classList.add("has-fade");
    fadeElems.classList.add("fade-out");
  } else {
    //open

    body.classList.add("noscroll");
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    fadeElems.classList.remove("has-fade");
    fadeElems.classList.remove("fade-out");
    fadeElems.classList.add("fade-in");
  }
});

//Card slider

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".next_button");
const prevButton = document.querySelector(".previous_button");

const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrainging slide next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//nav indicators
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current_slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove("current_slide");
  targetDot.classList.add("current_slide");
});
