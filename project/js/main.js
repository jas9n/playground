// import "../css/style.css";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";

gsap.registerPlugin(CSSRulePlugin);

gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: 0.6 });
gsap.from("img", { opacity: 0, duration: 1, y: 30, delay: 1.4 });
gsap.from("aside", {
  opacity: 0,
  duration: 1,
  backgroundPosition: "200px, 0",
  delay: 1.1,
});
gsap.to(CSSRulePlugin.getRule("span:after"), {
  cssRule: { scaleY: 0 },
  duration: 1,
});
