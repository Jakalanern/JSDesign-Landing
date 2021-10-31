let hi = document.querySelector(".hi");
let jack = document.querySelector(".name");
let bio = document.querySelector(".bio");
let arrow = document.querySelector(".arrow");
let nav = document.querySelector("nav");

// ANIMATIONS
// Setting before states for anim
hi.style.transform = "translateX(100vw)";
hi.style.transition = "1s ease";
jack.style.opacity = "0";
jack.style.transition = "2s ease";
bio.style.transform = "translateY(100vh)";
bio.style.transition = "1s ease";
arrow.style.opacity = "0";
arrow.style.transition = "opacity 3s, transform .5s ease";
nav.style.opacity = "0";
nav.style.transition = "opacity 3s";
// End states for anim
setTimeout(function () {
  hi.style.transform = "translateX(0px)";
}, 250);
setTimeout(function () {
  jack.style.opacity = "1";
}, 1250);
setTimeout(function () {
  bio.style.transform = "translateY(0px)";
}, 2250);
setTimeout(function () {
  nav.style.opacity = "1";
  arrow.style.opacity = "1";
}, 3200);
