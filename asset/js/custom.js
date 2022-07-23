$(function(){
  // swiper slide
    var swiper = new Swiper(".main-slide", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
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

    //tab
    $('.btn-tab').click(function(e){
      e.preventDefult;

      href = $(this).data('target')
      $('[data-id='+href+']').addClass('active').siblings('.swiper').removeClass('active')
      $(this).addClass('active').siblings().removeClass('active')
    })
    
})