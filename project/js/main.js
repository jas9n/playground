window.addEventListener("load", function () {
  const header = document.querySelector("header");
  header.classList.remove("nav");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("nav", window.scrollY > 0);
});

const mode = document.querySelector("#mode");
const toggle = document.querySelector("#toggle");
mode.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    toggle.classList.add("light-waves");
    toggle.classList.remove("dark-waves");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    toggle.classList.add("dark-waves");
    toggle.classList.remove("light-waves");
  }
});
