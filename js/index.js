// Your code goes here

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
