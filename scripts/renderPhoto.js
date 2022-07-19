import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
  const img = createElem("img", {
    className: "photo__picture",
    src: photo.urls.regular,
    alt: photo.description,
    style: "max-height: 80vh",
  });

  const author = createElem("a", {
    className: "photo__author",
    href: photo.user.links.html,
  });

  const avatarAuthor = createElem('img', {
    src: photo.user.profile_image.medium,
    alt: photo.user.bio,
    title: photo.user.name,
  });

  const userName = createElem('span', {
    textContent: photo.user.username,
  });

  const photoControl = createElem('div', {
    className: 'photo__control',
  });

  const photoLike = createElem('button', {
    className: 'photo__like',
    id: photo.id,
    textContent: photo.likes,
    likeByUser: photo.liked_by_user,
  });

  if (!photoLike.likeByUser) {
    photoLike.classList.add('photo__like_o')
  }

  const photoDownload = createElem('a', {
    className: 'photo__download',
    download: true,
    href: photo.links.download,
    target: '_blank',
  });

  author.append(avatarAuthor, userName);
  photoControl.append(photoLike, photoDownload);
  photoWrapper.append(img, author, photoControl);

  return photoLike;
};

{
  /* <img
            class="photo__picture"
            src="https://images.unsplash.com/photo-1654363137357-9d897b5a20d7?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE&amp;ixlib=rb-1.2.1&amp;q=80"
            alt="null"
            style="max-height: 80vh"
          /><a class="photo__author" href="https://unsplash.com/@supergios"
            ><img
              loading="lazy"
              src="https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=64&amp;h=64"
              alt="Always looking for the next adventure to capture the next shot. Seize the day. Sony A7 IV . There are more images behind my Unplash, for commercial projects please contact me.  John 3:16"
              title="Jonny Gios"
            /><span>Jonny Gios</span></a
          >
          <div class="photo__control">
            <button id="JIqH1ps4eK8" class="photo__like">30</button>
            <a
              class="photo__download"
              download="true"
              href="https://unsplash.com/photos/JIqH1ps4eK8/download?ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE"
              target="_blank"
            ></a> */
}
