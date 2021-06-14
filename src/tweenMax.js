import gsap, { Elastic } from 'gsap';

gsap.to('.box', {
  scaleY: 0.75,
  scaleX: 1.25,
  y: -100,
  opacity: 0.75,
  ease: Elastic.easeOut,
  duration: 2,
});

gsap.to('.tiny-box', {
  y: 100,
  fill: '#77625C',
  ease: Elastic.easeOut,
  stagger: 0.05,
  duration: 2,
});
gsap.to('.tiny-box', {
  rotation: 200,
  delay: 1,
  scale: 0.5,
  fill: '#B2B1CF',
  ease: Elastic.easeOut,
  duration: 2,
  stagger: 0.025,
  transformOrigin: 'center center',
});
