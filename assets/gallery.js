// JavaScript for lightbox functionality
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

function openLightbox(index) {
  currentImageIndex = index;
  lightbox.style.display = 'flex';
  lightboxImage.src = images[currentImageIndex].src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1; // Wrap around to the last image
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // Wrap around to the first image
  }
  lightboxImage.src = images[currentImageIndex].src;
}
