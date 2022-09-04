const section_image = document.querySelectorAll('.section__img');


const handleLazyLoading = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-image');
    });

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(handleLazyLoading, {
    root: null,
    rootMargin: '0px',
    threshold: 1
});


section_image.forEach(section => sectionObserver.observe(section));