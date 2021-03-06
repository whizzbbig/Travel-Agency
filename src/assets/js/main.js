// Variables

let pageNumber = 0;

// button try now
const cta = document.querySelector('.left__intro-cta');

// heading
const heading = document.querySelector('.left__intro__heading');

// heading spans
const headingSpan = document.querySelectorAll('.left__intro__heading > span');

// secondary heading spans
const secondaryHeadingSpan = document.querySelector( '.left__intro__secondary-heading > span' ); // prettier-ignore

// header left side ( text content )
const header = document.querySelector('header .left');

// header right side ( image side )
const rightHandSide = document.querySelector('.right');

// will add the respective data when the button gonna be hovered or leave
const data = [
  'Travel</br> Wherever</br> the F*uck</br> YOU Want 😎',
  'Trav<span class="drug-color drug-color-1">el</span> <br />Seam<span class="drug-color drug-color-2">lessl</span>y with<span class="drug-color drug-color-3">out a</span>ny <span class="drug-color drug-color-4">hesitation</span>.',
];

// Functions

const updateSection = (e) => {
  heading.innerHTML = e;
  if (pageNumber === 0) {
    heading.classList.add('drug-color');
    pageNumber += 1;
  } else {
    heading.classList.remove('drug-color');
    pageNumber -= 1;
  }
};

// Event Listeners

cta.addEventListener('mouseenter', function (e) {
  cta.classList.add('left__intro-cta-hover');
  rightHandSide.classList.add('right-hover');
  secondaryHeadingSpan.classList.add('drug-color');
  document.body.classList.add('drug-background');
  header.classList.add('drug-background');

  updateSection(data[0], 'drug-color');
});

cta.addEventListener('mouseleave', function (e) {
  cta.classList.remove('left__intro-cta-hover');
  rightHandSide.classList.remove('right-hover');
  secondaryHeadingSpan.style.color = '#F2F5FF';
  secondaryHeadingSpan.classList.remove('drug-color');
  document.body.classList.remove('drug-background');
  header.classList.remove('drug-background');

  for (let i = 0; i < headingSpan.length; i++) {
    headingSpan[i].style.color = '#F2F5FF';
    headingSpan[i].style.fontWeight = 'normal';
  }

  updateSection(data[1]);
});
