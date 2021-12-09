window.addEventListener("load", function () {
  const header = document.querySelector("header");
  header.classList.remove("nav");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("nav", window.scrollY > 0);
});
