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
const popup = document.querySelector(".popup");

//Forms
const formProfile = document.querySelector(".form__profile");
const inputName = document.querySelector(".form__input_type_name");
const inputOccupation = document.querySelector(".form__input_type_occupation");

const formAdd = document.querySelector(".form__add");

//Buttons
const openProfilePopupButton = document.querySelector(
  ".profile__button_type_edit"
);
const closeProfilePopupButton = document.querySelector(
  "popup__button-close_type_profile"
);

const addCardButton = document.querySelector(".profile__button_type_add");
const closeAddPopupButton = document.querySelector(
  "popup__button-close_type_add"
);

//Other Elements
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".gallery__card");

const galleryList = document.querySelector(".gallery__list");

//Functions
function openPopup() {
  popup.classList.add("popup_open");
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
}

function closePopup() {
  popup.classList.remove("popup_open");
}

function savePopup(e) {
  closePopup();
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

const renderCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  galleryList.prepend(cardElement);

  const deleteButton = cardElement.querySelector(".card__button_type_delete");

  const handledelete = () => {
    cardElement.remove();
  };
  deleteButton.addEventListener("click", handledelete);
};

initialCards.forEach(renderCard);

function openAddPopup() {
  popup.classList.add("popup_open");
}

//Event Listeners
openProfilePopupButton.addEventListener("click", openPopup);
formProfile.addEventListener("submit", savePopup);
closeProfilePopupButton.addEventListener("click", closePopup);

addCardButton.addEventListener("click", openAddPopup);
