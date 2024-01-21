// TRY KO LANG MAY LOG ITO NA ATTRIBUTE

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// document.addEventListener('DOMContentLoaded', function () {
// // code below this line
// const ulGallery = document.querySelector('.gallery');

//     const galleryMarkup = galleryItems.map(image => `
//     <li class="gallery__item">
//     <a class="gallery__link" href="${image.original}"> 
//     <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}">
//     </a></li>`).join('');

//     ulGallery.insertAdjacentHTML('beforeend', galleryMarkup);

//     const clickedImage = document.querySelectorAll('.gallery__image');
//     clickedImage.forEach((image, index) => {
//       image.addEventListener('click', (event) => {
//         event.preventDefault();
//         const selectedImage = galleryItems[index];

//       const clickedElement = event.currentTarget;
//          console.log('largeImage:', clickedElement.getAttribute('data-source'));
//           console.log('description/altText', clickedElement.getAttribute('alt'));
//         console.log(selectedImage.original);

//         const instance = basicLightbox.create(`
//             <img width="800" height="600" src="${selectedImage.original}">
//           `);
//           instance.show();
//       });
//     });

// // code above this line
// });




// TRY KO LANG IBA




// import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);
// document.addEventListener("DOMContentLoaded", function () {
//   // code below this line
//   const ulGallery = document.querySelector(".gallery");

//   const galleryMarkup = galleryItems
//     .map(
//       (image) => `
//     <li class="gallery__item">
//      <a class="gallery__link" href="${image.original}">
//     <img class="gallery__image" src="${image.preview}" alt="${image.description}" data-source="${image.original}">
//     </a>
//     </li>`
//     )
//     .join("");

//   ulGallery.insertAdjacentHTML("beforeend", galleryMarkup);

//   const clickedImage = document.querySelectorAll(".gallery__image");

//   clickedImage.forEach((image) => {
//     image.addEventListener("click", (event) => {
//         event.preventDefault();
//       const clickedElement = event.currentTarget;
//       const wew = clickedElement.getAttribute("data-source");


//       const instance = basicLightbox.create(`
//             <img width="800" height="600" src="${wew}">
//           `);
//       instance.show();
//     });
//   });

// });






// TRY PA ULET

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

  const clickedImage = document.querySelectorAll(".gallery__image");
  clickedImage.forEach((image) => {
      image.addEventListener('click', (event) => {
          event.preventDefault();
          const selectedImage = event.currentTarget;
          const selectedImageAttr = selectedImage.getAttribute("data-source");
          console.log(selectedImageAttr);

    const instance = basicLightbox.create(`
        <img width="800" height="600" src="${selectedImageAttr}">
        `);
    instance.show();


      });
  });
});