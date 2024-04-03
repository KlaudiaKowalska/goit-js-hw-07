import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryPhotos = document.querySelector(".gallery");
let instance = null;

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const originalUrl = event.target.dataset.source;
    console.log("Url większego obrazu: ", originalUrl);

    instance = basicLightbox.create(`<img src="${originalUrl}" alt="">`, {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModalOnEscape);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModalOnEscape);
      },
    });
    instance.show();
  }
}

function closeModalOnEscape(event) {
  if (event.key === "Escape" && instance !== null && instance.visible()) {
    instance.close();
  }
}

galleryPhotos.addEventListener("click", handleGalleryClick);

function addImagesToGallery() {
  galleryItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.original;
    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.source = item.original;
    link.appendChild(image);
    listItem.appendChild(link);
    galleryPhotos.appendChild(listItem);
  });
}

window.addEventListener("load", addImagesToGallery);
