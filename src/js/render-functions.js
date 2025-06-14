import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadBtn = document.querySelector('.load-btn');

export function createGallery(images) {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img
      class="gallery-image"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <div class="text-container">
  <div class="container-for-desc">
  <h3 class="img-heading">Likes</h3>
  <p class="img-text">${likes}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Views</h3>
  <p class="img-text">${views}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${comments}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${downloads}</p>
  </div>
  </div>
</li>`;
      }
    )
    .join('');
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function showLoadMoreButton() {
  loadBtn.style.display = "block"

 }

export function hideLoadMoreButton() {
  loadBtn.style.display = "none"
}
