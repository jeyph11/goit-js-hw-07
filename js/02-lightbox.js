import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


document.addEventListener("DOMContentLoaded", function () {
    const galleryDisplay = document.querySelector(".gallery");
    const galleryMarkup = galleryItems
      .map(
        (image) => `
      <li class="gallery__item">
       <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}"></a>
      </li>`
      ).join("");
  
    galleryDisplay.insertAdjacentHTML("beforeend", galleryMarkup);
    const lightbox = new SimpleLightbox('.gallery a', {});
  
    const clickedImage = document.querySelectorAll(".gallery__image");
    clickedImage.forEach((image) => {
        image.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedImage = event.currentTarget;
            const selectedImageAttr = selectedImage.getAttribute("data-source");
            // console.log(selectedImageAttr);
  
            lightbox.open({ items: [{ src: selectedImageAttr }] });
        });
    });
  });