const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//Popups

const editProfilePopup = document.querySelector(".popup_type_edit-profile");
const addCardPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image-preview");

//Forms
const formProfile = document.querySelector(".form_type_profile");
const inputName = document.querySelector(".form__input_type_name");
const inputOccupation = document.querySelector(".form__input_type_occupation");

const formAdd = document.querySelector(".form_type_add");
const addTitleInput = document.querySelector(".form__input_type_image-title");
const addImageInput = document.querySelector(".form__input_type_image-link");

//Buttons
const openProfilePopupButton = document.querySelector(
  ".profile__button_type_edit"
);
const closeProfilePopupButton = document.querySelector(
  ".popup__button-close_type_profile"
);

const closeImagePopupButton = document.querySelector(
  ".popup__button-close_type_image"
);

const addCardButton = document.querySelector(".profile__button_type_add");
const closeAddPopupButton = document.querySelector(
  ".popup__button-close_type_add"
);

//Other Elements
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".gallery__card");

const galleryList = document.querySelector(".gallery__list");

const previewImage = document.querySelector(".popup__image-preview");
const previewImageTitle = document.querySelector(".popup__image-title");

//Functions
function openPopup(popup) {
  popup.classList.add("popup_open");
}

function openEditProfilePopup() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  openPopup(editProfilePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

function saveFormProfilePopup(e) {
  closePopup(editProfilePopup);
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

const createCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__button_type_delete");
  const likeButton = cardElement.querySelector(".card__button_type_like");

  cardImage.src = card.link;
  cardImage.alt = `Photo of ${card.name}`;
  cardTitle.textContent = card.name;

  const handleDelete = () => {
    cardElement.remove();
  };
  deleteButton.addEventListener("click", handleDelete);
  likeButton.addEventListener("click", toggleLikeButton);
  cardImage.addEventListener("click", function () {
    previewImage.src = card.link;
    previewImage.alt = `Photo of ${card.name}`;
    previewImageTitle.textContent = card.name;
    openPopup(imagePopup);
  });

  return cardElement;
};

function toggleLikeButton(e) {
  const activeLikeButton = e.target;
  activeLikeButton.classList.toggle("card__button_type_active");
}

const renderCard = (card) => {
  const item = createCard(card);
  galleryList.prepend(item);
};

initialCards.forEach(renderCard);

//Event Listeners
openProfilePopupButton.addEventListener("click", openEditProfilePopup);

closeProfilePopupButton.addEventListener("click", () => {
  closePopup(editProfilePopup);
});

closeImagePopupButton.addEventListener("click", () => {
  closePopup(imagePopup);
});

formProfile.addEventListener("submit", saveFormProfilePopup);

addCardButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

closeAddPopupButton.addEventListener("click", () => {
  closePopup(addCardPopup);
});

formAdd.addEventListener("submit", function (e) {
  e.preventDefault();
  const card = {
    name: addTitleInput.value,
    link: addImageInput.value,
  };
  renderCard(card);
  closePopup(addCardPopup);
  formAdd.reset();
});
