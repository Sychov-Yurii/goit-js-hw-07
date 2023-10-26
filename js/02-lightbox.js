import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const container = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}"/>
       </a>
    </li>`;
}).join('');

container.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: 'description', 
    captionPosition: 'bottom',
    close: false,
    enableKeyboard: true,})
