const btn = document.querySelector('.btn');

const paragraphHTML = `<p class='paragraph'>Paragraph</p>`;

btn.addEventListener('click', () => {
  const paragraph = document.querySelector('.paragraph');

  if (paragraph) {
    paragraph.remove();
    return;
  }

  btn.insertAdjacentHTML('afterend', paragraphHTML);
});
