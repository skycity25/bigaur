// fixed footer to bottom 
$(document).ready(function() {

  // 設定 header / footer 位置
  function headerFooter(){
    var $header = $(".page-header") ,
    $footer = $("#footer-container"),
    footerHeight = $footer.height(),
    target = ( $("#sb-site") == "" )  ? $("#sb-site") : $(document.body) ;

    if ($header == "" ) {
      // $(".page-header") 不存在直接設定 footer 的位置與高度
      target.css({
        "padding-bottom": footerHeight + "px" ,
        "position": "relative" ,
        "min-height": "100vh"
      });

    } else {
      // $(".page-header") 如果存在需要設定 header 與 footer 的位置與高度

      headerHeight = $header.outerHeight();
      target.css({
        "padding-top": headerHeight + "px" ,
        "padding-bottom": footerHeight + "px" ,
        "position": "relative" ,
        "min-height": "100vh"
      });
    }


    $footer.css({
      "position": "absolute" ,
      "width": "100%" ,
      "bottom": "0px" ,
    })

    // var target =  $("#sb-site")|| $(body)

  };

  headerFooter();
  $(window).resize(headerFooter)
});
