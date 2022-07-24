$(function(){
  // main swiper slide
    var swiper01 = new Swiper(".main-slide", {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".pager1",
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


  //sub swiper slider
  var swiper02 = new Swiper(".sub-slide", {
    slidesPerView: 3,
    spaceBetween: 43,
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pager2",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    }
  }); 


  //sc-site
  $('.sub-list').css('display','none'); // 전부 display none 처리
  $('.site-item > a').click(function(event){
    $('.sub-list').stop().slideUp(); // 모든 sub-list닫아두고
    $(this).siblings('.sub-list').stop().slideToggle(200); // 해당하는 sub-list만 토글처리

    $('.ic-arrow').removeClass('active');
    $(this).find('.ic-arrow').toggleClass('active');

    $('.site-item > a').removeClass('active');
    $(this).toggleClass('active');

    // 해당 a 다시 눌렀을때 전부 removeClass
    return false;
  });
})
