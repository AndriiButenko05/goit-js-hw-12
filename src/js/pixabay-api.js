import axios from 'axios';
import {
  showLoader,
} from './render-functions.js';

const apiKey = '50744753-f362bf6174861c1f1e53027f5';

export function getImagesByQuery(query) {
  showLoader();
  const formattedQuery = `"${query}"`;
  const encodedQuery = encodeURIComponent(formattedQuery);
  return axios.get(
    `https://pixabay.com/api/?key=${apiKey}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  );
}
