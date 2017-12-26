$(document).ready(function() {
  $('nav#menu').mmenu({
    drag 		: true,
    pageScroll 	: {
      scroll 		: true,
      update		: true
    },
    "extensions"	: [
      "theme-dark",
      "fx-menu-fade",
      "fx-listitems-slide"
    ]
  },{
    classNames: {
      fixedElements: {
       fixed: "fix",
       sticky: "sticky-top"
      }
    },
  })

  $("#pageHeader , #page").stick_in_parent({
    'offset_top': '-250'
  })

  $().UItoTop({ easingType: 'easeOutQuart' });

  $('#heroBanner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.process-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]


  });

  $('.contact-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.processb-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  // $('.product-slide').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  // });

  $('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  $('.product-one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.papperproduct-one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    cssEase: 'linear'
  });


  // $('.center').slick({
  //   autoplay: true,
  //   autoplaySpeed: 800,
  //   dots: false,
  //   arrows:false,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   slidesToShow: 4,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  $('.responsive').slick({
  autoplay: true,
  autoplaySpeed: 3500,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// $('.product-slide').slick({
//   dots: false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true

});


  $('.dropdown-hover').dropdownHover(100);





});



// $('#carouselExample').on('slide.bs.carousel', function (e) {
//
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 4;
//     var totalItems = $('.carousel-item').length;
//
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i
