let card = document.getElementById("activator");
let timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });
let toggle = false;

timeline.to(".activator", {
  background: "#806ad5",
  borderRadius: "5em 0 0 5em",
});

timeline.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%",
  },
  "-=.5"
);

timeline.to(
  "nav img",
  {
    opacity: 1,
    transform: "translateX(0)",
    stagger: 0.05,
  },
  "-=.5"
);

timeline.pause();

card.addEventListener("click", () => {
  toggle = !toggle;
  toggle ? timeline.play() : timeline.reverse();
});
