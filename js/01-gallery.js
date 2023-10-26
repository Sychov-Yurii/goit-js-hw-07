import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

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
container.addEventListener('click', handlerClick); 

function handlerClick(evt){
    evt.preventDefault();
    
    if (!evt.target.classList.contains('gallery__image')) {
     return   
    }
    const imageDescription = evt.target.alt;
    const galleryItem = galleryItems.find(({description}) => description === imageDescription);
    console.log(galleryItem);
    const instance = basicLightbox.create(`
    <div class="gallery__image">
        <img src="${galleryItem.original}" width="900" alt="${galleryItem.description}">
    </div>
`);
instance.show();

document.addEventListener("keydown", handlerKey)
function handlerKey(evt) {
    if (evt.code === 'Escape') {
     instance.close()
    }
 }
}




