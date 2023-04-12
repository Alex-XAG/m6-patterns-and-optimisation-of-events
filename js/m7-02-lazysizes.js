if ("loading" in HTMLImageElement.prototype) {
  //   console.log("Browser support lazy-load");
  addSrcAttrToLazyImages();
} else {
  //   console.log("Browser don't support lazy-load");
  addLazySizesScript();
}
const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach(image => {
  image.addEventListener("load", onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  //   console.log("Image is loaded!!!");
  console.log(evt.target);

  evt.target.classList.add("appear");
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}

{
  /* <script
  src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
  integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>; */
}
