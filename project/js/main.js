// import "../css/style.css";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";

gsap.registerPlugin(CSSRulePlugin);
const rule = CSSRulePlugin.getRule("span:after");

// gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
// gsap.from("img", { opacity: 0, duration: 1, y: 30, delay: 1.4 });
// gsap.from("aside", {
//   opacity: 0,
//   duration: 1,
//   backgroundPosition: "200px, 0",
//   delay: 1.1,
// });
// gsap.to(rule, {
//   cssRule: { scaleY: 0 },
//   duration: 1,
// });

const tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 });
tl.to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2");
tl.from("aside", { backgroundPosition: "200px 0", opacity: 0 }, "-=1.5");
tl.from("img", { y: 50, opacity: 0 }, "-=.5");

document.getElementById("cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});
