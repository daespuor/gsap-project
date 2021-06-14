import gsap, { Bounce, Elastic } from 'gsap';

const boxes = document.querySelectorAll('.tiny-box');
const tl = gsap.timeline();

tl.set(boxes, {
  transformOrigin: 'center center',
});
tl.set('.new-tiny-box', {
  transformOrigin: 'center center',
});

tl.from(boxes, {
  duration: 1,
  ease: Bounce.easeOut,
  y: -300,
});

tl.add('rotation');

tl.from(
  boxes,
  {
    rotation: 90,
    ease: Bounce.easeIn,
    duration: 2,
    stagger: 0.5,
  },
  'rotation'
);

tl.to(
  boxes,
  {
    rotation: 180,
    ease: Bounce.easeOut,
    duration: 1,
    stagger: 0.5,
  },
  'rotation+=1.75'
);

tl.add('scale');

tl.from(
  '.new-tiny-box',
  {
    rotation: 90,
    ease: Bounce.easeIn,
    duration: 2,
  },
  'rotation'
);

tl.to(
  '.new-tiny-box',
  {
    rotation: 180,
    ease: Bounce.easeOut,
    duration: 1,
  },
  'rotation+=1.75'
);

tl.to(
  boxes,
  {
    scaleX: '1.2',
    scaleY: '1.2',
    ease: Elastic.easeOut,
    duration: 1,
    yoyo: true,
    repeat: 1,
  },
  'scale'
);

tl.add('hide');

tl.to(
  boxes,
  {
    duration: 1,
    rotation: -180,
    ease: Bounce.easeOut,
  },
  'hide'
);
tl.to(
  '.new-tiny-box',
  {
    duration: 1,
    rotation: -180,
    ease: Bounce.easeOut,
  },
  'hide'
);
tl.to(
  boxes,
  {
    scaleX: 0.1,
    scaleY: 0.1,
    duration: 1,
    ease: Bounce.easeIn,
  },
  'hide+=0.1'
);
tl.to(
  '.new-tiny-box',
  {
    scaleX: 0.1,
    scaleY: 0.1,
    duration: 1,
    ease: Bounce.easeIn,
  },
  'hide+=0.1'
);
