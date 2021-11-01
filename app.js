let hi = document.querySelector(".hi");
let jack = document.querySelector(".name");
let bio = document.querySelector(".bio");
let arrow = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let nav = document.querySelector("nav");
let welcome = document.querySelector(".welcome");
let burger = document.querySelector(".burger");
let dropdown = document.querySelector(".dropdown");
const tl = gsap.timeline({ default: { ease: "power1.out" } });

// EVENTS
arrow.addEventListener("click", function () {
  tl.to("#fullscreen1", { duration: 1, y: "-100%" });
  tl.to("#fullscreen2", { duration: 1, y: "0%" }, "-=1");
});

arrow2.addEventListener("click", function () {
  tl.to("#fullscreen2", { duration: 1, y: "-100%" });
  tl.to("#fullscreen3", { duration: 1, y: "0%" }, "-=1");
});

burger.addEventListener("click", function () {
  burger.classList.toggle("activebrgr");
  dropdown.classList.toggle("dropdown-active");
});
//////

// // ANIMATIONS
//BEFORES
gsap.to(nav, { duration: 0, opacity: 1 });
gsap.to("#arrow1", { duration: 0, opacity: 0 });
gsap.to(".name", { duration: 0, x: "100vw" });
gsap.to(".portrait", { duration: 0, x: "100vw" });
gsap.to(".portrait", { duration: 0, boxShadow: "none" });
gsap.to("p", { duration: 0, x: "100vw" });
gsap.to("#fullscreen2", { duration: 0, y: "100%" });
gsap.to("#fullscreen3", { duration: 0, y: "100%" });
//AFTERS
tl.to(".welcome", { duration: 2, y: "0%" });
tl.to(".intro-cover", { duration: 2, y: "-200%", delay: 0.5 });
tl.to(".hide", { duration: 1, y: "0%" }, "-=1");
tl.to(".portrait", { duration: 1, x: "0%" }, "-=1.5");
tl.to(".name", { duration: 1, x: "0%" }, "-=1");
tl.to("p", { duration: 1, x: "0%" });
tl.to(nav, { duration: 1, opacity: 1 });
tl.to("#arrow1", { duration: 1, opacity: 1 }, "-=1");
gsap.to(".portrait", { duration: 2, boxShadow: "0px 0px 30px #8cc8ff" }, "-=2");
