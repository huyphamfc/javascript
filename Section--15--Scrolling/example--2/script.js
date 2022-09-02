const header = document.querySelector('.header');


const scrollingHandler = e => {
    e.preventDefault();
    if (!e.target.hash) return;
    const section = document.getElementById(`${e.target.hash.slice(1)}`);
    window.scrollTo(
        0,
        window.pageYOffset +
        section.getBoundingClientRect().top -
        header.getBoundingClientRect().height
    );
}

header.addEventListener('click', scrollingHandler.bind(header));