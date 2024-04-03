import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryPhotos = document.querySelector(".gallery");

function handleGalleryClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const originalUrl = event.target.dataset.source;
    console.log("Url większego obrazu: ", originalUrl);
  }
}

galleryPhotos.addEventListener("click", handleGalleryClick);

function addImagesToGallery() {
  galleryItems.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("gallery__item");
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

addImagesToGallery();

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
