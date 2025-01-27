import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    alert('Поле має бути заповнено!');

    return;
  }

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        alert('Sorry, there are no images matching your search query. Please try again!');

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }

      const galleryTemplate = data.results.map(el => createGalleryCardTemplate(el)).join('');

      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);