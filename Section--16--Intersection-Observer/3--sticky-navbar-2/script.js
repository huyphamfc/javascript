const nav = document.querySelector('.nav');
const nav__navbar = document.querySelector('.nav__navbar');
const section_1 = document.querySelector('#s-1');


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
    if (entry[0].isIntersecting) return nav.classList.remove('sticky');
    nav.classList.toggle('sticky');
}

const options = {
    root: null,
    rootMargin: `-${nav.getBoundingClientRect().height}px`,
    threshold: 0
}


nav__navbar.addEventListener('click', handleNavigation);

const stickyNav = new IntersectionObserver(handleStickyNav, options);
stickyNav.observe(section_1);