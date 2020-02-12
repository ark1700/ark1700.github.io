'use strict';

var header = document.querySelector('.header');
var menuBtn = document.querySelector('.header__menu-btn');

if (header) {
  header.classList.remove('header--open-menu');
  header.classList.remove('header--no-js');
}

var menuBtnPressHandler = function (evt) {
  if (evt.type === 'click' || evt.code === 'Enter') {
    header.classList.toggle("header--open-menu");
  }
};

if (menuBtn) {
  menuBtn.addEventListener('click', menuBtnPressHandler);
  menuBtn.addEventListener('keydown', menuBtnPressHandler);
}

var indexOrderBtn = document.querySelector('.features__order');
var indexOrderPopup = document.querySelector('.popup-order');
var submitBtnIndexOrder = document.querySelector('.popup-order__link');

var menuBtnClickHandler = function (evt) {
  if (evt.type === 'click' || evt.code === 'Enter') {
    header.classList.toggle("header--open-menu");
  }
};

var indexOrderBtnPressHandler = function (evt) {
  evt.preventDefault();
  if (evt.type === 'click' || evt.code === 'Enter') {
    indexOrderPopup.classList.remove("popup-order--hide");
  }
}

var submitBtnIndexOrderPressHandler = function (evt) {
  evt.preventDefault();
  if (evt.type === 'click' || evt.code === 'Enter') {
    indexOrderPopup.classList.add("popup-order--hide");
  }
}

if (indexOrderBtn) {
  indexOrderBtn.addEventListener('click', indexOrderBtnPressHandler);
  indexOrderBtn.addEventListener('keydown', indexOrderBtnPressHandler);
}

if (submitBtnIndexOrder) {
  submitBtnIndexOrder.addEventListener('click', submitBtnIndexOrderPressHandler);
  submitBtnIndexOrder.addEventListener('keydown', submitBtnIndexOrderPressHandler);
}

var cardBaskets = document.querySelectorAll(".card__basket");

if (cardBaskets) {
  for (var i = 0; i < cardBaskets.length; i++) {
    var cardBasket = cardBaskets[i];
    cardBasket.addEventListener('click', indexOrderBtnPressHandler);
    cardBasket.addEventListener('keydown', indexOrderBtnPressHandler);
  };
}
