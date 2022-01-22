const cta = document.querySelector('.left__intro-cta');

const headingSpan = document.querySelectorAll('.left__intro__heading > span');

const secondaryHeadingSpan = document.querySelector( '.left__intro__secondary-heading > span' ); // prettier-ignore

const ctaBefore = document.querySelector('.left__intro-cta:hover::before');

const header = document.querySelector('header .left');

const rightHandSide = document.querySelector('.right');

cta.addEventListener('mouseenter', function (e) {
  cta.classList.add('left__intro-cta-hover');
  rightHandSide.classList.add('right-hover');
  secondaryHeadingSpan.classList.add('drug-color');
  document.body.classList.add('drug-background');
  header.classList.add('drug-background');

  for (let i = 0; i < headingSpan.length; i++) {
    headingSpan[i].classList.add('drug-color');
    headingSpan[i].style.fontWeight = 'bold';
  }
});

cta.addEventListener('mouseleave', function (e) {
  cta.classList.remove('left__intro-cta-hover');
  rightHandSide.classList.remove('right-hover');
  secondaryHeadingSpan.style.color = '#F2F5FF';
  secondaryHeadingSpan.classList.remove('drug-color');
  document.body.classList.remove('drug-background');
  header.classList.remove('drug-background');

  console.log(headingSpan);

  for (let i = 0; i < headingSpan.length; i++) {
    headingSpan[i].style.color = '#F2F5FF';
    headingSpan[i].style.fontWeight = 'normal';
    headingSpan[i].classList.remove('drug-color');
  }
});
