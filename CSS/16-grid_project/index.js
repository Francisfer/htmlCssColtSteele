const hamburgerBtn = document.querySelector(".hamburger-btn");
const barOne = document.querySelector(".bar1");
const barTwo = document.querySelector(".bar2");
const barThree = document.querySelector(".bar3");
const navBar = document.querySelector("nav");
const footer = document.querySelector("footer");

hamburgerBtn.addEventListener("click", () => {
  barOne.classList.toggle("animateBar1");
  barTwo.classList.toggle("animateBar2");
  barThree.classList.toggle("animateBar3");
  navBar.classList.toggle("mobile-nav-open");
  footer.classList.toggle("footer-mobile");
});
