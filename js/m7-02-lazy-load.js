//  Lazy loading of images (conception)
// - native maintain
// - event of loading image

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  //   console.log("Image is loaded!!!");
  console.log(evt.target);

  evt.target.classList.add("appear");
}
