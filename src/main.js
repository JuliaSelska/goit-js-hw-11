import { createGalleryCardTemplate } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

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
const lightbox = new SimpleLightbox('.js-gallery a');



const onSearchFormSubmit = event => {
  const loader = document.querySelector('.loader');event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.error({
      title: '',
      message: 'Please enter your request',
      messageColor: '#fafafb',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });

    return;
  }

  document.querySelector('.loader').classList.remove('hidden');
  
  

 fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
         iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });

        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }
      
  const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

      galleryEl.innerHTML = galleryTemplate; lightbox.refresh();
    })
  
    .catch(err => {
      console.log(err);
     })
    .finally(() => {
      loader.classList.add('hidden');
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);