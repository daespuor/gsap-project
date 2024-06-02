/* import gsap, { Linear, Power1, Bounce, Power2, Back } from "gsap";
import { Draggable, MotionPathPlugin } from "gsap/all"; */

gsap.registerPlugin(Draggable, MotionPathPlugin);

const master = gsap.timeline();

const animate = () => {
  const tl = gsap.timeline({ paused: true });
  tl.add("start");
  tl.add(moveMoon(), "start");
  tl.add(changeColor(), "start+=2");
  tl.add(showStars(), "start+=4");
  tl.add(moveSun(), "start");
  tl.add(changeBarColor(), "start+=2");
  tl.add(animateText(), "start+=5");
  return tl;
};

const moveSun = () => {
  const sun = document.querySelector(".sun");
  const tl = gsap.timeline();
  tl.add("sun");
  tl.fromTo(
    sun,
    {
      y: 15,
    },
    {
      y: 500,
      duration: 5,
      ease: Linear.easeNone,
    },
    "sun"
  );
  return tl;
};

const showStars = () => {
  const stars = document.querySelectorAll(".stars path");
  const tl = gsap.timeline();
  tl.set(stars, {
    transformOrigin: "center center",
  });
  tl.add("stars");
  tl.fromTo(
    stars,
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 0.7,
      opacity: 1,
      ease: Bounce.easeOut,
      duration: 1,
      stagger: 0.2,
    },
    "stars"
  );
  tl.fromTo(
    stars,
    {
      rotation: 45,
    },
    {
      transformOrigin: "50% 50%",
      rotation: -45,
      ease: Bounce.easeOut,
      duration: 2,
    },
    "stars+=1"
  );

  return tl;
};

const moveMoon = () => {
  const moon = document.querySelector(".moon");
  const tl = gsap.timeline();
  tl.add("moon");
  tl.fromTo(
    moon,
    {
      y: 500,
    },
    {
      y: 15,
      duration: 5,
      ease: Linear.easeNone,
    },
    "moon-=2"
  );
  return tl;
};

const scaleStarts = () => {
  const tl = gsap.timeline();
  tl.add("stars");
  tl.fromTo(
    ".stars path",
    {
      scale: 0.7,
    },
    {
      scale: 0.8,
      duration: 1,
      ease: Bounce.easeOut,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    },
    "stars+=2"
  );
  return tl;
};

const rotateSun = () => {
  const tl = gsap.timeline();
  const sun = document.querySelector(".sun");

  tl.set(sun, {
    transformOrigin: "center center",
  });
  tl.to(
    sun,
    {
      rotation: 360,
      duration: 10,
      ease: Linear.easeNone,
      repeat: -1,
    },
    "start"
  );
  return tl;
};

const moveClouds = () => {
  const clouds = document.querySelectorAll(".clouds path");
  const oddclouds = [...clouds].slice(0, Math.floor(clouds.length / 2));
  const evenclouds = [...clouds].slice(
    Math.floor(clouds.length / 2),
    clouds.length
  );
  const tl = gsap.timeline();
  tl.fromTo(
    oddclouds,
    {
      x: 0,
    },
    {
      x: 800,
      duration: gsap.utils.wrap([60, 120, 180]),
      ease: Power1.easeOut,
      repeat: -1,
      repeatDelay: -5,
      stagger: 3,
    },
    "start"
  );
  tl.fromTo(
    evenclouds,
    {
      x: 800,
    },
    {
      x: 0,
      duration: gsap.utils.wrap([60, 120]),
      ease: Power1.easeOut,
      repeat: -1,
      repeatDelay: -20,
      stagger: 3,
    },
    "start"
  );
  return tl;
};

const moveBirds = () => {
  const bird = document.querySelectorAll(".bird");
  const tl = gsap.timeline();
  tl.add("bird");
  tl.to(
    bird,
    {
      duration: 10,
      repeat: -1,
      repeatDelay: 5,
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        type: "soft",
      },
      stagger: 0.09,
      ease: Power1.easeOut,
    },
    "bird"
  );

  return tl;
};

const changeColor = () => {
  const lampStructureBody = document.querySelector(".lamp-structure-body");
  const chair = document.querySelector(".chair path");
  const lampStructureGlasses = document.querySelectorAll(
    ".lamp-structure-glass"
  );
  const treeTrunk = document.querySelectorAll(".tree-trunk");
  const treeLeafs = document.querySelectorAll(".tree-leafs");
  const bulbs = document.querySelectorAll(".lamp-bulb");
  const container = document.querySelector("#container");

  const tl = gsap.timeline();
  tl.add("color");
  tl.fromTo(
    bulbs,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    container,
    {
      background: "linear-gradient(#87ceeb 30%, white 70%)",
    },
    {
      background: "linear-gradient(#131862, #2e4482, #546bab, #bea9de, white)",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    lampStructureBody,
    {
      fill: "#57595D",
    },
    {
      fill: "#546bab",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    lampStructureGlasses,
    {
      stroke: "#57595D",
    },
    {
      stroke: "#546bab",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    chair,
    {
      fill: "#996633",
    },
    {
      fill: "#664433",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    treeTrunk,
    {
      fill: "#996633",
    },
    {
      fill: "	#664433",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    treeLeafs,
    {
      fill: "#397f0a",
    },
    {
      fill: "	#3c620b",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  tl.fromTo(
    ".clouds path",
    {
      fill: "white",
    },
    {
      fill: "rgb(46, 68, 130)",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  return tl;
};

const changeBarColor = () => {
  const tl = gsap.timeline();
  const bar = document.querySelector(".bar");

  tl.add("color");
  tl.fromTo(
    bar,
    {
      background: "linear-gradient(#87ceeb 30%, white 70%)",
    },
    {
      background: "linear-gradient(#131862, #2e4482, #546bab, #bea9de, white)",
      duration: 5,
      ease: Power2.easeOut,
    },
    "color"
  );
  return tl;
};

const animateText = () => {
  const tl = gsap.timeline();
  const text = document.getElementById("quote");
  tl.fromTo(
    text,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 3,
      ease: Back.easeOut,
    }
  );
  return tl;
};

master.add("start");
master.add(moveClouds(), "start");
master.add(rotateSun(), "start");
master.add(moveBirds(), "start");
master.add(scaleStarts(), "start");

Draggable.create(".drag-control", {
  type: "y",
  bounds: ".bar",
  onDrag: function () {
    const tl = animate();
    tl.progress(Math.abs(this.y / 390));
  },
});
