import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function markupGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
`;
    })
    .join("");
}
gallery.innerHTML = markupGalleryItems(galleryItems);

gallery.addEventListener("click", onModalOpenClickImage);

function onModalOpenClickImage(evt) {
  evt.preventDefault();

  const image = evt.target;
  const instance = basicLightbox.create(`
    <img src=${image.dataset.source} width="800" height="600">
  `);
  instance.show();

  window.addEventListener("keydown", onEscModalClose);

  function onEscModalClose(evt) {
    console.log(evt);
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener("keydown", onEscModalClose);
  }
}
