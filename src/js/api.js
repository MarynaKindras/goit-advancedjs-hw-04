const PIXABAY_API_KEY = '40851648-2156548c3e3c31aec5105189d';
import axios from 'axios';

export async function fetchImages(query, pageNumber) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=40`
  );
  return response.data;
}
