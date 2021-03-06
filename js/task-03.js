const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

// const galleryArray = images.map((image) => {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery-item');
//   const img = document.createElement('img');
//   img.src = image.url;
//   img.alt = image.alt;
//   galleryItem.append(img);
//   return galleryItem;
// });

// galleryEl.append(...galleryArray);

const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

const galleryEl = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery__item"><img class="gallery__img" src="${url}" alt="${alt}" /></li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryEl);
