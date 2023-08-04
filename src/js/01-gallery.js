// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const ulEl = document.querySelector('.gallery');
createMarkup();

function createMarkup() {
  const markup = galleryItems
    .map(
      item => `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
   </li>`
    )
    .join('');
  ulEl.innerHTML = markup;
}
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsPosition: 'bottom',
  captionsData: 'alt',
  captionsDelay: 250,
});
