import { getImagesByQuery, limit } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  gallery,
  hideLoader,
  lightbox,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadBtn,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('[name="search-text"]');
const form = document.querySelector('.form');
let imgHeight = 0;
let inputText;
let page = 1;
let totalPages;

input.addEventListener('keydown', () => {
  input.style.borderColor = '#4E75FF';
});
input.addEventListener('blur', () => {
  input.style.borderColor = '#808080';
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() === '') {
    iziToast.show({
      message: 'Please, write correct name of photo',
      position: 'topRight',
      color: 'red',
    });
    return;
  }
  page = 1;
  hideLoadMoreButton();
  clearGallery();
  getImagesByQuery(input.value.trim(), page)
    .then(response => {
      const data = response.data.hits;
      if (data.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
        return;
      }
      const elements = createGallery(data);
      gallery.insertAdjacentHTML('beforeend', elements);
      imgHeight = document.querySelector(".gallery-item").getBoundingClientRect().height;
      totalPages = Math.ceil(response.data.totalHits / limit);
      showLoadMoreButton();
      lightbox.refresh();
    })
    .catch(err => {
      iziToast.show({
        message: `Sorry, something went wrong: ${err}`,
        position: 'topRight',
        color: 'red',
      });
    })
    .finally(() => {
      hideLoader();
      page++;
    });
  inputText = input.value.trim();
  form.reset();
  console.log(page);
});

loadBtn.addEventListener('click', () => {
  if (page > totalPages) {
    hideLoadMoreButton();
    iziToast.show({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
      color: 'blue',
    });
  } else {
    getImagesByQuery(inputText, page)
    .then(response => {
      const data = response.data.hits;
      const elements = createGallery(data);
      gallery.insertAdjacentHTML('beforeend', elements);
      window.scrollBy({
        top: imgHeight,
        behavior: "smooth",
      });
      page + 1;
      lightbox.refresh();
    })
    .catch(err => {
      iziToast.show({
        message: `Sorry, something went wrong: ${err}`,
        position: 'topRight',
        color: 'red',
      });
    })
    .finally(() => {
      hideLoader();
      page++;
    });
  }
});
