$(document).ready(function(){
  $('.reviews-slider').slick({
      arrows: false,
      dots: true
  });

  wow = new WOW(
    {
      offset:       80,         
      mobile:       true,      
      live:         true       
    }
    )
    wow.init();

    var nav_mobile = $(".header-nav-mobile");
    nav_mobile.click(function () {
        return nav_mobile.toggleClass("active"), $(".header-nav__list").slideToggle(), !1
    })

    $("a[href^='#info-author'], a[href^='#content'], a[href^='#book'], a[href^='#contact'], a[href^='#client']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    $("#btn_show_about_the_book").click(function() {
      $(this).hide();
        $(".table-of-contents__list_hide").slideDown(300);
    })
});