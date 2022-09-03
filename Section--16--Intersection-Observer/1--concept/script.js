const section__content = document.querySelectorAll('.section__content');


const intersectionObserverHandler = entries => {
    entries.forEach(entry => console.log(
        `${entry.target.innerText} - Intersecting: ${entry.isIntersecting}`
    ));
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer = new IntersectionObserver(
    intersectionObserverHandler,
    options
);

section__content.forEach(section =>
    observer.observe(section)
);