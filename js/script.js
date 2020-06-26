$(document).ready(function () {
    if($(window).width() < 1025) {
        $('.wow').removeClass('bounceInRight tada');
      }
  
      if($(window).width() < 1000) {
        var nav_mobile = $(".header-nav-mobile");
        nav_mobile.click(function () {
          $(".header-nav").toggleClass('header-nav_active');
          return nav_mobile.toggleClass("active"),!1,
          $(".header-nav__item, .header-nav__link").click(function() {
            $(".header-nav-mobile").removeClass("active");
          });
        })
      }
    $("a[href^='#info-author'], a[href^='#content'], a[href^='#book'], a[href^='#contact'], a[href^='#client']").click(function () {
        var e = $(this).attr("href");
        return $("html, body").animate({
            scrollTop: $(e).offset().top + "px"
        }), !1
    }), $("#btn_show_about_the_book").click(function () {
        $(this).hide(), $(".table-of-contents__list_hide").slideDown(300)
    })
});