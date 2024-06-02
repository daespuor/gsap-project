import gsap from "gsap";
import { Bounce, Linear, MotionPathPlugin, Power1 } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);

const animate = () => {
  const tl = gsap.timeline();
  resume(tl);
  tl.add("start");
  tl.add(rotatePlay(), "start");
  tl.add(rotateVynyl(), "start+=1");
  tl.add(playSong(), "start+=1");
  tl.add(animateSong(), "start+=9");
  tl.add(movePopcornMachine(), "start+=12");
  tl.add(movePopcorn(), "start+=18");
  tl.add(showSushi(), "start+=25");
  tl.add(showLego(), "start+=25");
  tl.add(moveRoses(), "start+=40");
  tl.add(moveCinema(), "start+=56");
  tl.add(moveCouple(), "start+=76");
  return tl;
};

const resume = (tl) => {
  const audioPlayer = document.querySelector(".song");
  audioPlayer.addEventListener("ended", function () {
    audioPlayer.currentTime = 0;
    console.log("ended");
    tl.resume();
  });
};

const rotatePlay = () => {
  const tl = gsap.timeline();
  const play = document.querySelector(".play-button");
  tl.set(play, {
    transformOrigin: "center center",
  });
  tl.to(play, {
    rotation: -45,
    duration: 1,
    ease: Linear.easeNone,
  });
  return tl;
};

const rotateVynyl = () => {
  const tl = gsap.timeline();
  const vynylElements = document.querySelectorAll(".vynyl");

  for (const vynyl of vynylElements) {
    tl.set(vynyl, {
      transformOrigin: "center center",
    });
    tl.to(vynyl, {
      rotation: 360,
      duration: 1,
      ease: Linear.easeNone,
      repeat: -1,
    });
  }

  return tl;
};

const playSong = () => {
  const audioPlayer = document.querySelector(".song");
  audioPlayer.play();
};

const animateSong = () => {
  const paraghraps = document.querySelectorAll("#song p");
  const paraghraps2 = document.querySelectorAll("#song2 p");
  const tl = gsap.timeline();
  for (const p of paraghraps) {
    tl.fromTo(
      p,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 14,
        ease: Linear.easeNone,
      }
    ).to(p, {
      opacity: 0,
      duration: 2,
      ease: Linear.easeNone,
    });
  }
  tl.to(paraghraps[0], { duration: 15 });
  for (const p of paraghraps2) {
    tl.fromTo(
      p,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 14,
        ease: Linear.easeNone,
      }
    ).to(p, {
      opacity: 0,
      duration: 2,
      ease: Linear.easeNone,
    });
  }

  return tl;
};

const showSushi = () => {
  const tl = gsap.timeline();
  const sushis = document.querySelectorAll('g[class*="sushi"]');
  tl.set(sushis, {
    transformOrigin: "center center",
  });
  tl.fromTo(
    sushis,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 0.2,
      duration: 0.5,
      stagger: 0.2,
      ease: Bounce.easeOut,
    }
  );
  return tl;
};

const showLego = () => {
  const tl = gsap.timeline();
  const sushis = document.querySelector(".bricks");
  tl.set(sushis, {
    transformOrigin: "center center",
  });
  tl.fromTo(
    sushis,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 0.2,
      delay: 0.5,
      duration: 0.5,
      ease: Bounce.easeOut,
    }
  );
  return tl;
};

const movePopcornMachine = () => {
  const tl = gsap.timeline();
  const popcornMachine = document.querySelector(".popcorn-machine");
  const popcornMachineWheel = document.querySelectorAll(
    ".popcorn-machine .wheel"
  );
  tl.set(popcornMachine, {
    transformOrigin: "center center",
  });
  tl.set(popcornMachineWheel, {
    transformOrigin: "center center",
  });
  tl.to(popcornMachine, {
    translateX: "190px",
    duration: 5,
    ease: Linear.easeOut,
  });
  tl.to(popcornMachineWheel, {
    rotate: "360deg",
    duration: 0.5,
    delay: -5,
    repeat: 10,
    ease: Linear.easeOut,
  });
  tl.fromTo(
    popcornMachine,
    {
      rotate: "-9deg",
    },
    {
      rotate: "-7deg",
      duration: 0.1,
      repeat: 10,
      ease: Linear.easeOut,
    }
  );

  return tl;
};

const movePopcorn = () => {
  const tl = gsap.timeline();
  const popcorn = document.querySelectorAll(".popcorn");
  tl.add("popcorn");
  tl.set(popcorn, {
    transformOrigin: "center center",
  });

  tl.fromTo(
    popcorn,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.1,
      ease: Linear.easeNone,
    },
    "popcorn"
  );
  tl.fromTo(
    popcorn,
    {
      rotation: 0,
    },
    {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: Linear.easeNone,
      stagger: 0.3,
    },
    "popcorn"
  );
  tl.to(
    popcorn[0],
    {
      duration: 1,
      ease: Linear.easeNone,
      motionPath: {
        path: "#path-popcorn1",
        align: "#path-popcorn1",
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      repeatDelay: 2,
    },
    "popcorn"
  );
  tl.to(
    popcorn[1],
    {
      duration: 2,
      delay: 1,
      ease: Linear.easeOut,
      motionPath: {
        path: "#path-popcorn2",
        align: "#path-popcorn2",
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      repeatDelay: 2,
    },
    "popcorn"
  );
  tl.to(
    popcorn[2],
    {
      duration: 1,
      delay: 2,
      ease: Linear.easeOut,
      motionPath: {
        path: "#path-popcorn3",
        align: "#path-popcorn3",
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      repeatDelay: 2,
    },
    "popcorn"
  );
  tl.to(
    popcorn[3],
    {
      duration: 2,
      delay: 2,
      ease: Linear.easeOut,
      motionPath: {
        path: "#path-popcorn4",
        align: "#path-popcorn4",
        alignOrigin: [0.5, 0.5],
      },
      repeat: -1,
      repeatDelay: 2,
    },
    "popcorn"
  );

  return tl;
};

const moveRoses = () => {
  const roses = document.querySelectorAll(".roses g");
  const tl = gsap.timeline();
  tl.add("roses");
  tl.set(roses, {
    transformOrigin: "center center",
  });
  tl.fromTo(
    roses,
    {
      y: -60,
    },
    {
      y: 600,
      duration: gsap.utils.wrap([3, 10, 5]),
      ease: Power1.easeOut,
      repeat: -1,
      repeatDelay: -5,
      stagger: 0.5,
    },
    "roses"
  );
  tl.fromTo(
    roses,
    {
      rotation: 0,
    },
    {
      rotation: 360,
      ease: Power1.easeOut,
      duration: 0.5,
      repeat: -1,
    },
    "roses"
  );
  return tl;
};

const moveCinema = () => {
  const tl = gsap.timeline();
  const cinema = document.querySelectorAll(".cinema path");
  tl.fromTo(
    cinema,
    {
      y: 400,
    },
    {
      y: -150,
      duration: 10,
      ease: Linear.easeNone,
      stagger: 3,
      repeat: -1,
      repeatDelay: 1,
    }
  );

  return tl;
};

const moveCouple = () => {
  const tl = gsap.timeline();
  const couple = document.querySelector(".couple");
  tl.add("couple");
  tl.set(couple, {
    transformOrigin: "center center",
  });
  tl.fromTo(
    couple,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 0.3,
      ease: Bounce.easeOut,
      duration: 0.3,
    },
    "couple"
  );
  tl.fromTo(
    couple,
    {
      rotation: 0,
    },
    {
      rotation: 360,
      repeat: -1,
      repeatDelay: 0,
      ease: Linear.easeNone,
      duration: 1,
    },
    "couple"
  );

  return tl;
};

document
  .getElementsByClassName("play-button")?.[0]
  .addEventListener("click", (e) => {
    e.preventDefault();
    animate();
  });
