'use strict';

var anchorLinks = [
  document.querySelector('a[href="#features"]'),
  document.querySelector('a[href="#pricing"]')
];

anchorLinks.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

$(document).ready(function() {
  $("#up-btn").hide();
  $(document).scroll(function(){
    var docScroll = $(document).scrollTop();
    if(docScroll >= 700 ) {
      $("#up-btn").fadeIn(200)
    } else {
     $("#up-btn").fadeOut(200)
    }
  });

  $('#up-btn').click(function(){
      $('html,body').animate({ scrollTop: 0 }, 'slow');
      return false;
  });

  var w = window.innerWidth;
  var sep = 10;
  if (w >= 768) {
    sep = 100;
  };
  if (w >= 1180) {
    sep = 170;
  };
  var carousel = $("#screenshots-carousel").waterwheelCarousel({
    separation: sep,
  });
  $("#screenshots-carusel-btn-next").bind("click", function() {
    carousel.next();
  });
  $("#screenshots-carusel-btn-prev").bind("click", function() {
    carousel.prev();
  });

  $('#testimonials-carousel').slick({
    infinite: true,
    mobileFirst: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $("#testimonials-carousel-btn-prev").bind("click", function() {
    $('#testimonials-carousel').slick('slickPrev');
  });
  $("#testimonials-carousel-btn-next").bind("click", function() {
    $('#testimonials-carousel').slick('slickNext');
  });
  $('#testimonials-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(".slick-slide").removeClass('feedback--active');
    $('.slick-current').addClass('feedback--active');
 });
});

