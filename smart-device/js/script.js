'use strict';

// picturefill
document.createElement('picture');

// Аккордеон в footer
var footerNavTitle = document.querySelector('.footer__title-nav');
var footerNav = document.querySelector('.footer__navigation');
var footerContactsTitle = document.querySelector('.footer__title-contacts');
var footerContacts = document.querySelector('.footer__contacts');

if (footerNav) {
  footerNav.classList.add('footer__navigation--m-hide');
}
if (footerContacts) {
  footerContacts.classList.add('footer__contacts--m-hide');
}

footerNavTitle.addEventListener('click', function () {
  if (footerNav.classList.contains('footer__navigation--m-hide')) {
    footerNav.classList.remove('footer__navigation--m-hide');
  } else {
    footerNav.classList.add('footer__navigation--m-hide');
  }
});

footerContactsTitle.addEventListener('click', function () {
  if (footerContacts.classList.contains('footer__contacts--m-hide')) {
    footerContacts.classList.remove('footer__contacts--m-hide');
  } else {
    footerContacts.classList.add('footer__contacts--m-hide');
  }
});

// Плавный скролл
var scrollToBlock = function (e) {
  e.preventDefault();

  // eslint-disable-next-line no-invalid-this
  document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
};

if (document.querySelector('.promo__btn')) {
  document.querySelector('.promo__btn').addEventListener('click', scrollToBlock);
}
if (document.querySelector('.promo__scroll')) {
  document.querySelector('.promo__scroll').addEventListener('click', scrollToBlock);
}

// Модальное окно
var modalBtn = document.querySelector('.header__call-btn');
var modalBlock = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
var modalFirstInput = document.querySelector('.modal__text');

if (modalBtn) {
  modalBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (modalBlock) {
      modalBlock.classList.add('modal--show');
      modalFirstInput.focus();
    }
  });
}

if (modalBlock) {
  if (modalClose) {
    modalClose.addEventListener('click', function (e) {
      if (modalBlock.classList.contains('modal--show')) {
        e.preventDefault();
        modalBlock.classList.remove('modal--show');
      }
    });
  }

  modalBlock.addEventListener('click', function (e) {
    if (e.target === modalBlock) {
      modalBlock.classList.remove('modal--show');
    }
  });
}

document.addEventListener('keydown', function (e) {
  if (modalBlock) {
    if (modalBlock.classList.contains('modal--show') && (e.key === 'Esc' || e.code === 'Escape')) {
      modalBlock.classList.remove('modal--show');
    }
  }
});

// Хранение input в localStorage
var inputs = document.querySelectorAll('input[type="text"], input[type="tel"], textarea');
var inputsChangeHnadler = function () {
  // eslint-disable-next-line no-invalid-this
  localStorage.setItem(this.id, this.value);
  console.log(this.value);
};

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', inputsChangeHnadler);

  if (localStorage.getItem(inputs[i].id)) {
    inputs[i].value = localStorage.getItem(inputs[i].id);
  }
}

// Masked input
$(function () {
  $("#form-tel").mask("+7(999)999-9999");
  $("#modal-tel").mask("+7(999)999-9999");
});
// var formTelInput = document.querySelector('#form-tel');
// formTelInput.addEventListener('focus', function () {
//   if (formTelInput.value === '') {
//     formTelInput.value = '+7(';
//   }
// });

// formTelInput.addEventListener('unfocus', function () {
//   if (formTelInput.value === '+7(') {
//     formTelInput.value = '';
//   }
// });

// formTelInput.addEventListener('input', function () {
//   if (formTelInput.value.length === 6) {

//   }
// });
