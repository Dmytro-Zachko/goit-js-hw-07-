import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulRef = document.querySelector('.gallery');
ulRef.insertAdjacentHTML('afterbegin', createImgMarkup(galleryItems))
function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionSelector: "img",    
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,    
    });
