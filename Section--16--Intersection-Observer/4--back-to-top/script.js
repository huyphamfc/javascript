const nav = document.querySelector('.nav');
const nav__navbar = document.querySelector('.nav__navbar');
const section_1 = document.querySelector('#s-1');
const backToTop = document.querySelector('.back-to-top');


const handleNavigation = e => {
    if (e.target.tagName !== 'A') return;
    e.preventDefault();
    const id = e.target.hash;
    const section = document.querySelector(`${id}`);
    window.scrollTo(
        0,
        window.pageYOffset +
        section.getBoundingClientRect().top -
        nav.getBoundingClientRect().height
    );
}

const handleStickyNav = entry => {
    if (entry[0].isIntersecting) {
        nav.classList.remove('sticky');
        backToTop.classList.remove('back-to-top--show');
        return;
    }
    nav.classList.add('sticky');
    backToTop.classList.add('back-to-top--show');
}

const options = {
    root: null,
    rootMargin: `-${nav.getBoundingClientRect().height}px`,
    threshold: 0
}


nav__navbar.addEventListener('click', handleNavigation);

const stickyNav = new IntersectionObserver(handleStickyNav, options);
stickyNav.observe(section_1);