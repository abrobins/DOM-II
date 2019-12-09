// Your code goes here

// gsap.to("h1.logo-heading", { duration: 1, opacity: 0.3 });
// gsap.to("h1.logo-heading", { duration: 1, x: 300, ease: "bounce" });
gsap.to("h1.logo-heading", { duration: 1, x: 600, ease: "bounce" });
gsap.to("nav", { duration: 1, x: -480, ease: "bounce" });
// add mouseover event
const h1Tag = document.querySelector(".logo-heading");
h1Tag.addEventListener("mouseover", () => {
  h1Tag.style.color = "red";
});

// add a click event
const sectionTitles = document.querySelectorAll("h2");
sectionTitles.forEach(title => {
  title.addEventListener("click", () => {
    title.style.color = "green";
  });
});

// resize events
const busImg = document.querySelector(".intro img");
window.addEventListener("resize", () => {
  busImg.src = "img/newbus.jpg";
});

//dblclick events
const destinationTitles = document.querySelector(".content-pick");
destinationTitles.addEventListener("dblclick", () => {
  destinationTitles.style.backgroundColor = "lightblue";
});

//mouseenter event
const letsgoImg = document.querySelector(".img-content img");
letsgoImg.addEventListener("mouseenter", () => {
  letsgoImg.style.transform = "scale(1.2)";
  letsgoImg.style.transition = "all 0.3s";
});

//mouseleave event

letsgoImg.addEventListener("mouseleave", () => {
  letsgoImg.style.transform = "scale(1)";
  letsgoImg.style.transition = "all 0.3s";
});

//mousedown event

const navEffect = document.querySelectorAll("a");
navEffect.forEach(navitem => {
  navitem.addEventListener("mousedown", () => {
    navitem.style.color = "hotpink";
  });
});

//scroll event

const bodyBackground = document.querySelector(".destination");
window.addEventListener("scroll", () => {
  bodyBackground.style.backgroundColor = "lightgray";
});

//wheel event

const selectText = document.querySelector(".intro p");
selectText.addEventListener("wheel", () => {
  selectText.style.color = "red";
});

//cut event
const footerText = document.querySelector(".footer p");
footerText.addEventListener("cut", () => {
  footerText.style.backgroundColor = "lightblue";
});

//stop propagation event

const funTitle = document.querySelector(".destination");
funTitle.addEventListener("click", () => {
  funTitle.style.backgroundColor = "yellow";
});

const funButton = document.querySelector(".destination .btn");
funButton.addEventListener("click", e => {
  funButton.style.backgroundColor = "blue";
  e.stopPropagation();
});

const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", event => {
  event.preventDefault();
  console.log("link stopped!");
});
