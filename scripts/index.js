const inputName = document.querySelector(".form__input_type_name");
const inputOccupation = document.querySelector(".form__input_type_occupation");

const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");

const popup = document.querySelector(".popup");

const openPopupButton = document.querySelector(".profile__button_type_edit");

const formSaveButton = document.querySelector(".form__button");
const form = document.querySelector("form");
const closeButton = document.querySelector(".popup__button-close");

function openPopup() {
  popup.classList.add("popup_open");
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
}

openPopupButton.addEventListener("click", openPopup);

function savePopup(e) {
  popup.classList.remove("popup_open");
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
}

formSaveButton.addEventListener("click", savePopup);

function closePopup() {
  popup.classList.remove("popup_open");
}

closeButton.addEventListener("click", closePopup);