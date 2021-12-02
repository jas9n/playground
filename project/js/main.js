import "../css/style.css";
import { selectors, filters } from "./selectors";

selectors.mode.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    selectors.mode.src = "./img/night.svg";
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    selectors.mode.src = "./img/day.svg";
  }
});
