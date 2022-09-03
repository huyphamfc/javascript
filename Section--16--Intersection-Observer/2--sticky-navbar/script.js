const nav = document.querySelector('.nav');
const nav__navbar = document.querySelector('.nav__navbar');


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

nav__navbar.addEventListener('click', handleNavigation);