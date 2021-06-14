import gsap, { Sine } from 'gsap';

const leftscissors = document.querySelector('.leftscissor');
const rightscissors = document.querySelector('.rightscissor');

const scissors = document.querySelector('#iconScissors');
scissors.addEventListener('click', () => {
  openScissors(leftscissors, -30);
  openScissors(rightscissors, 30);
});

function openScissors(el, angle) {
  const tl = gsap.timeline();

  tl.to(el, {
    rotation: angle,
    ease: Sine.easeOut,
    duration: 0.25,
    repeat: 3,
    yoyo: true,
    svgOrigin: '50 45',
  });
}
