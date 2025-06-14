import axios from 'axios';
import { showLoader } from './render-functions.js';

const apiKey = '50744753-f362bf6174861c1f1e53027f5';
export const limit = 15;
export async function getImagesByQuery(query, page) {
  try {
    showLoader();
    const searchParams = new URLSearchParams({
      key: apiKey,
      q: query,
      page,
      per_page: limit,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const response = axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
}
