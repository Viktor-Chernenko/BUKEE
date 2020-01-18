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

    $("a[href^='#info-author']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
});