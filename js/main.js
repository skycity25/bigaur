$(document).ready(function() {
  var _fixheaderH = $('#pageHeader').outerHeight()
  if ($('#pageHeader').hasClass("fixed")) {
    $( "body" ).prepend( "<div id='headerHolder' style=height:"+_fixheaderH+"px></div>" );
  }
  // if ($('#pageFooter').hasClass("fixed")) {
  //   $( "#mainPage" ).append( "<div id='footerHolder' style=height:"+_fixfooterH+"px></div>" );
  // }
  $( window ).resize(function() {
    _fixheaderH = $('#pageHeader').outerHeight()
    // _fixfooterH = $('#pageFooter').outerHeight()
    $('#headerHolder').height(_fixheaderH)
    // $('#footerHolder').height(_fixfooterH)
  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 5) {
      $("#pageHeader").addClass("is-sticky");
    } else {
      $("#pageHeader").removeClass("is-sticky");
    }
  })

  $('nav#menu').mmenu({
    drag 		: true,
    pageScroll 	: {
      scroll 		: true,
      update		: true
    },
    "extensions"	: [
      "pagedim-black"
    ]
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.processb-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $('.product-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

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
  });


  $('.center').slick({
    autoplay: true,
    autoplaySpeed: 450,
    dots: false,
    arrows:false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
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
