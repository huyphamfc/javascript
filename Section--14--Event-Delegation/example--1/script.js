const list = document.querySelector('ul');
const listItem = document.querySelectorAll('li');


const clickHandler = e => {
    console.log(e.target.innerHTML);
}

list.addEventListener('click', e => {
    if (e.target.tagName === 'LI')
        clickHandler(e);
});

// listItem.forEach(item => item
//     .addEventListener(
//         'click',
//         clickHandler.bind(item)
//     )
// );
