var contactModal = document.querySelector(".contact-form");
var contactBtn = document.querySelector(".contact__btn");
var contactClose = document.querySelector(".contact-form__close");
var contactLogin = contactModal.querySelector("[name=name]");
var contactEmail = contactModal.querySelector("[name=email]");
var contactText = contactModal.querySelector(".contact-form__textarea");
var contactForm = contactModal.querySelector(".contact-form__form");
var contactSubmit = contactModal.querySelector(".contact-form__btn");
var mapModal = document.querySelector(".popup-map");
var mapBtn = document.querySelector(".contact__map");
var mapClose = document.querySelector(".popup-map__close");

contactBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactModal.classList.add("modal-show");
  contactLogin.focus();
});
contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactModal.classList.remove("modal-show");
  contactModal.classList.remove("modal-error");
});
contactSubmit.addEventListener("click", function (evt) {
  if (!contactLogin.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    contactModal.classList.remove("modal-error");
    contactModal.offsetWidth = contactModal.offsetWidth;
    contactModal.classList.add("modal-error");
  } 
});
window.addEventListener("keydown", function (evt){
  if (evt.keyCode === 27 ) {
    if (contactModal.classList.contains("modal-show")) {
      evt.preventDefault();
      contactModal.classList.remove("modal-show");
      contactModal.classList.remove("modal-error");
    }
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

mapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

