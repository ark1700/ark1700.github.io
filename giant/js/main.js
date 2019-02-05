// waterwheel
$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    flankingItems: 3,
    keyboardNav: true,
    separation: 290,
    separationMultiplier: 0.5,
    sizeMultiplier: 0.8,
    opacityMultiplier: 1
  });
  $('#prev').bind('click', function () {
    carousel.prev();
    return false
  });

  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });
});

// slick
$(document).ready(function () {
  $(".regular").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });
}); 
// <!-- video -->

$(document).on('click', '.js-videoPoster', function (e) {
  e.preventDefault();
  var poster = $(this);
  var wrapper = poster.closest('.js-videoWrapper');
  videoPlay(wrapper);
});

function videoPlay(wrapper) {
  var iframe = wrapper.find('.js-videoIframe');
  var src = iframe.data('src');
  wrapper.addClass('videoWrapperActive');
  iframe.attr('src', src);
};
