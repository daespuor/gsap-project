import gsap, { Power2 } from 'gsap';
const tb = document.querySelectorAll('.tiny-box');
const tl = gsap.timeline({ repeat: 2, repeatDelay: 1.5 });

tl.set(tb, {
  perspective: 200,
  transformPerspective: 200,
});

tl.to(tb, {
  duration: 2,
  scale: 1.5,
  rotationX: 230,
  y: 180,
  z: -150,
  ease: Power2.easeOut,
  opacity: 0.2,
});
