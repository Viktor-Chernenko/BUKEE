
 wow = new WOW(
  {
    offset:       80,         
    mobile:       true,      
    live:         true       
  }
)
wow.init();

$(document).ready(function(){
  $('.reviews-slider').slick({
      arrows: false,
      dots: true
  });

    if($(window).width() < 800) {
      $('.wow').removeClass('bounceInRight tada');
    }

    var nav_mobile = $(".header-nav-mobile");
    nav_mobile.click(function () {
        return nav_mobile.toggleClass("active"), $(".header-nav__list").slideToggle(), !1
    })

    $('.header-nav__item, .header-nav__link').click(function() {
      if($(".header-nav-mobile").hasClass("active")) {
        return nav_mobile.toggleClass("active"), $(".header-nav__list").hide(), !1
      }
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