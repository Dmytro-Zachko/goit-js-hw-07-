import { galleryItems } from './gallery-items.js';
// Change code below this line
const divRef = document.querySelector('.gallery');
const cardsMarkup = createImageMarkup(galleryItems);
divRef.insertAdjacentHTML('beforeend', cardsMarkup)
function createImageMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join(''); 
};
divRef.addEventListener('click', galleryOnItemClick)

function galleryOnItemClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    } 
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>
`,
    {
    onShow: () => {
    window.addEventListener('keydown', onEscClose)
    },
    onClose: () => {
    window.removeEventListener('keydown', onEscClose)
        }
     });
    
    instance.show()
    
    function onEscClose(event) {
    if (event.code === 'Escape') {
     instance.close()   
    }
}
}