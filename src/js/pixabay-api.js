
export const fetchPhotosByQuery = searchedEl => {
  const searchParams = new URLSearchParams({
    q: searchedEl,
    key: '48482195-738aed504c51f4c8c5e491b18',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};