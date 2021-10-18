// Countdown Timer
const countdown = () => {
  const countDate = new Date("October 30, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const timegap = countDate - now;
  // In milliseconds
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Calculation
  const valueDay = Math.floor(timegap / day);
  const valueHour = Math.floor((timegap % day) / hour);
  const valueMinute = Math.floor((timegap % hour) / minute);
  const valueSecond = Math.floor((timegap % minute) / second);
  // Changing Text
  document.querySelector(".days-value").innerText = valueDay;
  document.querySelector(".hours-value").innerText = valueHour;
  document.querySelector(".minutes-value").innerText = valueMinute;
  document.querySelector(".seconds-value").innerText = valueSecond;
};
setInterval(countdown, 1000);

// FAQ
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
// Navbar Hamburger
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
burger.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    let sections = gsap.utils.toArray(".feature-holder");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".feature",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // Base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".feature").offsetWidth,
      },
    });
  },
});
// GSAP
const tl = gsap.timeline({
  defaults: { ease: "power1.inOut" },
});
tl.from(".hero-text .title",{
    opacity: 0,
  duration: 0.6,
  y: "10%",

})
.to(".hero-image", {
  y : "-2%",
  repeat : -1,
  yoyo : true,
  duration : 1
}, "-=0.4");

