$(function(){
  // swiper slide
    var swiper01 = new Swiper(".main-slide", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".pager",
          type: "fraction",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    //autoplay
    $('.pause').on('click',function(event){
      $(this).removeClass('active').siblings('.play').addClass('active');
      swiper01.autoplay.stop();
      return false;
    })
    $('.play').on('click',function(event){
      $(this).removeClass('active').siblings('.pause').addClass('active');
      swiper01.autoplay.start();
      return false;
    });

    //tab
    $('.btn-tab').click(function(event){
      href = $(this).data('target');
      $('[data-id='+href+']').addClass('active').siblings('.swiper').removeClass('active');
      $(this).addClass('active').siblings().removeClass('active');

      return false;
    });
})