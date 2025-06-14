import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  gallery,
  hideLoader,
  lightbox,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('[name="search-text"]');
const form = document.querySelector('.form');

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
  clearGallery();
  getImagesByQuery(input.value.trim())
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
    });
  form.reset();
});
