import gsap, { Sine } from 'gsap';

document.querySelector('svg').addEventListener('click', () => {
  hearthfaceSmile();
});

function hearthfaceSmile() {
  const tl = gsap.timeline();
  tl.add('start');
  tl.fromTo(
    '.eyes',
    {
      scaleY: 1,
      transformOrigin: '50% 50%;',
    },
    {
      scaleY: 0,
      transformOrigin: '50% 50%;',
      repeat: 3,
      duration: 0.1,
      yoyo: true,
      ease: Sine.easeInOut,
    },
    'start'
  );

  tl.fromTo(
    ['.eyes', '.blush'],
    {
      y: 0,
    },
    {
      y: -5,
      ease: Sine.easeOut,
      duration: 0.3,
    },
    'start'
  );
  tl.fromTo(
    '.heartface',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: Sine.easeOut,
      duration: 0.3,
    },
    'start+=0.3'
  );
  tl.from(
    '.openmouth',
    {
      scaleY: 0,
      duration: 0.2,
      ease: Sine.easeOut,
    },
    'start+=0.3'
  );
  tl.from(
    '.hearteyes',
    {
      rotation: 10,
      repeat: 4,
      duration: 0.2,
      yoyo: true,
      transformOrigin: '50% 50%',
      ease: Sine.easeOut,
    },
    'start+=0.3'
  );
  tl.to(
    '.heartface',
    {
      opacity: 0,
      duration: 0.1,
      ease: Sine.easeIn,
    },
    'start+=1.1'
  );
  tl.fromTo(
    '.eyes',
    {
      scaleY: 1,
      transformOrigin: '50% 50%;',
    },
    {
      scaleY: 0,
      transformOrigin: '50% 50%;',
      repeat: 3,
      duration: 0.2,
      yoyo: true,
      ease: Sine.easeInOut,
    },
    'start+=1.1'
  );
  tl.to(
    ['.blush', '.eyes'],
    {
      y: 0,
      duration: 0.2,
      ease: Sine.easeIn,
    },
    'start+=1.1'
  ); 
}
