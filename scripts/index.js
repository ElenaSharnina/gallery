import { getData } from "./getData.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";
import { autorization } from "./autorization.js";
import { handlerLike } from "./handlerLike.js";

const init = async ({ selectorPhotoWrapper, selectorGalleryWrapper, selectorAuthButton }) => {
  const galleryWrapper = document.querySelector(selectorGalleryWrapper);
  const photoWrapper = document.querySelector(selectorPhotoWrapper);

  const authButton = document.querySelector(selectorAuthButton);
  autorization(authButton);
  if (galleryWrapper) {
    const photos = await getData({ count: 30 });
    renderGallery(galleryWrapper, photos);
  }

  if (photoWrapper) {
    const url = new URL(location.href);
    const idPhoto = url.searchParams.get('photo');

    if (idPhoto) {
      const photo = await getData({ idPhoto });
      const photoLike = renderPhoto(photoWrapper, photo);
      photoLike.addEventListener('click', () => {
        if (localStorage.getItem('Bearer')) {
          handlerLike(photoLike);
        }
      })
    }
  }
}

init({
  selectorGalleryWrapper: '.gallery__wrapper',
  selectorPhotoWrapper: '.photo__wrapper',
  selectorAuthButton: '.header__login-button',
});