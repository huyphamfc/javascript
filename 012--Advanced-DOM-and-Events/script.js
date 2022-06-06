'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');

const sections = document.querySelectorAll('.section');

const imgTargets = document.querySelectorAll('img[data-src]');

const slides = document.querySelectorAll('.slide');
let slideCurrent = 0;
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
const dots = document.querySelectorAll('.dots__dot');


// MODAL
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// SCROLLING
btnScrollTo.addEventListener('click', e => {
  // window.scrollTo({
  //   left: window.pageXOffset + section1.getBoundingClientRect().left,
  //   top: window.pageYOffset + section1.getBoundingClientRect().top,
  //   behavior: 'smooth'
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});


// PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function (element) {
//   element.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


// TABBED COMPONENT
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (clicked) {
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(content => content.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');
  }
});


// MENU FADE ANIMATION
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const links = link.closest('.nav__links').querySelectorAll('.nav__link');
    links.forEach(item => {
      if (item !== link)
        item.style.opacity = opacity;
    });
  }
}

nav.addEventListener('mouseover', function (e) { handleHover(e, 0.5) });
nav.addEventListener('mouseout', function (e) { handleHover(e, 1) });


// STICKY NAVIGATION
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0)
//     nav.classList.add('sticky');
//   else
//     nav.classList.remove('sticky');
// });
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`
});

headerObserver.observe(header);


// REVEAL SECTIONS
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});


// LAZY LOADING IMAGES
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
      // only remove blurry filter once the image is loaded
    });
    observer.unobserve(entry.target);
  }
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0
});

imgTargets.forEach(img => imgObserver.observe(img));


// SLIDER
const goToSlide = () => {
  slides.forEach((slide, i) =>
    slide.style.transform = `translateX(${100 * (i - slideCurrent)}%)`);
  dots.forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slideCurrent}"]`)
    .classList.add('dots__dot--active');
}

const prevSlide = () => {
  if (slideCurrent > 0) slideCurrent--;
  else slideCurrent = slides.length - 1;
  goToSlide();
}

const nextSlide = () => {
  if (slideCurrent < slides.length - 1) slideCurrent++;
  else slideCurrent = 0;
  goToSlide();
}

goToSlide();

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    slideCurrent = e.target.dataset.slide;
    goToSlide();
  }
});