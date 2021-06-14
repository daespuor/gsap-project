import gsap, { Elastic, Circ } from 'gsap';

const bg = document.querySelectorAll('.boggle path');
const tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

tl.set(bg, {
  perspective: 200,
});

tl.from(bg, {
  duration: 3,
  fill: gsap.utils.wrap(['white', 'yellow', '#e23e0c']),
  opacity: gsap.utils.wrap([0.8, 0.2, 0.5, 0.3]),
  stagger: 0.001,
  ease: Elastic.easeOut,
});

tl.to(bg, {
  duration: 3,
  ease: Circ.easeOut,
  stagger: 0.001,
  y: gsap.utils.wrap([700, -700, 1000, -1000]),
  x: gsap.utils.wrap([200, -200, 1000, -1000]),
  rotation: (index) => index * 20,
  opacity: 0,
  fill: '#f2bf30',
});
