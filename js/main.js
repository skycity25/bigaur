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
    centerMode: true,
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



  $('.dropdown-hover').dropdownHover(100);







});
