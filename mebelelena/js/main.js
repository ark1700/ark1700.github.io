'use strict';

$(document).ready(function(){
  $(".header__menu-btn").click(function(){
    $(".header").toggleClass("header--open-menu");
  });

  document.querySelectorAll("#modal-call").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
    document.querySelector(".modal-call").classList.add("modal-call--open");
    });
  });

  $(".modal-call").click(function(e){
    if (e.target === $('.modal-call').get(0)) {
      $(".modal-call").removeClass("modal-call--open");
    }
  });

  $('.modal-call__form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $form.serialize(),
    }).done(function() {
      $form.trigger("reset");
      alert("Форма отправлена");
      $(".modal-call").removeClass("modal-call--open");
    }).fail(function() {
      $form.trigger("reset");
        alert("Что-то пошло не так");
        $(".modal-call").removeClass("modal-call--open");
      });
  });

  $('.promo-slider').owlCarousel({
    loop:true,
    items:1,
    dotsClass: 'promo-slider__dots',
    dots:true,
  });

  $('.portfolio__slider').owlCarousel({
    loop:true,
    center: true,
    margin: 55,
    nav: true,
    navContainerClass: 'portfolio__slider-nav',
    dots: true,
    dotsClass: 'portfolio__dots',
    responsive:{
        0:{
            items:1
        },
        960:{
            items:3
        }
    }
  });

  $("#phone-input").mask("+7 (999) 999-99-99");
});
