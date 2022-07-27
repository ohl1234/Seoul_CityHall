$(function(){
  // window.open
  // click
  // val

  /**
 * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
 *
 * @version 1.0.0
 * @since 2022-01-16
 * @author 본인이름 (Nico)
 */

  $('#langBtn').click(function(){
    const url = $('#lang').val();
    // console.log(url);
    window.open(url);
  })

    const slide1 = new Swiper(".slide1 .swiper", {
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".fraction",
          type: "fraction",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    const slide2 = new Swiper(".slide2 .swiper", {
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".fraction",
          type: "fraction",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
      slide2.autoplay.stop();

      const slide3 = new Swiper(".slide3 .swiper", {
        slidesPerView: 3,
        spaceBetween: 43,
        loop:true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".fraction",
          type: "fraction",
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    /**
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * @version 1.0.0
     * @since 2022-01-16
     * @author 본인이름 (Nico)
     */
    // 나중에 h3 class
      $('.sc-visual h3').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active')
        
        // 조건1 주요뉴스인지 시민참여인지 알아야함
        // 만약에 선택한 h3의 부모가 slide1이라는 클래스를 가지고 있다면(주요뉴스클릭)
        // 그렇지 않다면 (시민참여)
        if($(this).parent().hasClass('slide1')){
          slide2.autoplay.stop(); //서로 반대되는 것 정지
          // slide1.autoplay.start(); // 주요뉴스 실행 내꺼 클릭시 실행
          if ($('.slide1 .play').hasClass('active')) {
            slide1.autoplay.stop();
          } else {
            slide1.autoplay.start();
          }
        }else{
          slide1.autoplay.stop(); //서로 반대되는 것 정지
          // slide2.autoplay.start();// 시민참여실행 내꺼 클릭시 실행
          if ($('.slide2 .play').hasClass('active')) {
            slide2.autoplay.stop();
          } else {
            slide2.autoplay.start();
          }
        }
      })
      $('.slide1 .auto-play').click(function(e){
        e.preventDefault();
        if($(this).find('.play').hasClass('active')){
          slide1.autoplay.start();
          $(this).find('.pause').addClass('active').siblings().removeClass('active');

        }else{
            slide1.autoplay.stop();
            $(this).find('.play').addClass('active').siblings().removeClass('active');
        }
        // slide1.autoplay.stop();
        // $(this).find('.play').addClass('active').siblings().removeClass('active');
      })
      $('.slide2 .auto-play').click(function(e){
        e.preventDefault();
        if($(this).find('.play').hasClass('active')){
          slide2.autoplay.start();
          $(this).find('.pause').addClass('active').siblings().removeClass('active');

        }else{
            slide2.autoplay.stop();
            $(this).find('.play').addClass('active').siblings().removeClass('active');
        }
      })

  //sc-site
      $('.site-item > a').click(function(e){
        e.preventDefault();
        $('.sub-list-wrap').stop().slideUp(); // 모든 sub-list닫아두고
        $(this).siblings('.sub-list-wrap').stop().slideToggle(200); // 해당하는 sub-list만 토글처리

        if ($(this).find('.ic-arrow').hasClass('active')) {
          $('.ic-arrow').removeClass('active')
        } else {
          $('.ic-arrow').removeClass('active') // 다 제거되고 
          $(this).find('.ic-arrow').addClass('active') // 나만
        }
        // !hasclass false부터
        // $('.ic-arrow').removeClass('active');
        // $(this).find('.ic-arrow').toggleClass('active');

        // $('.site-item > a').removeClass('active');
        // $(this).toggleClass('active');

        // 해당 a 다시 눌렀을때 전부 removeClass
      });
      //keyup 실시간으로 바로 찾을때
      //keydown
      $('.sc-site .sub-list .sub-item:first-child').keydown(function(e){
        //console.log(e.keyCode);
        const key = e.keyCode;
        if(key === 9 && e.shiftKey){
          $('.sub-list-wrap').stop().slideUp();
        }
      })
      $('.sc-site .sub-list .sub-item:last-child').keydown(function(e){
        //console.log(e.keyCode);
        const key = e.keyCode;
        if(key === 9 && !e.shiftKey){
          $('.sub-list-wrap').stop().slideUp();
        }
      })
      
  

  // // main swiper slide
  //   var swiper01 = new Swiper(".main-slide", {
  //       spaceBetween: 0,
  //       centeredSlides: true,
  //       autoplay: {
  //         delay: 2000,
  //         disableOnInteraction: false,
  //       },
  //       pagination: {
  //         el: ".pager1",
  //         type: "fraction",
  //       },
  //       navigation: {
  //         nextEl: ".next",
  //         prevEl: ".prev",
  //       },
  //     });

  //   //autoplay
  //   $('.pause').on('click',function(event){
  //     $(this).removeClass('active').siblings('.play').addClass('active');
  //     swiper01.autoplay.stop();
  //     return false;
  //   })
  //   $('.play').on('click',function(event){
  //     $(this).removeClass('active').siblings('.pause').addClass('active');
  //     swiper01.autoplay.start();
  //     return false;
  //   });

  //   //tab
  //   $('.btn-tab').click(function(event){
  //     href = $(this).data('target');
  //     $('[data-id='+href+']').addClass('active').siblings('.swiper').removeClass('active');
  //     $(this).addClass('active').siblings().removeClass('active');

  //     return false;
  //   });


  // //sub swiper slider
  // var swiper02 = new Swiper(".sub-slide", {
  //   slidesPerView: 3,
  //   spaceBetween: 43,
  //   loop:true,
  //   autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".pager2",
  //     type: "fraction",
  //   },
  //   navigation: {
  //     nextEl: ".next",
  //     prevEl: ".prev",
  //   }
  // }); 


  // //sc-site
  // $('.sub-list').css('display','none'); // 전부 display none 처리
  // $('.site-item > a').click(function(event){
  //   $('.sub-list').stop().slideUp(); // 모든 sub-list닫아두고
  //   $(this).siblings('.sub-list').stop().slideToggle(200); // 해당하는 sub-list만 토글처리

  //   $('.ic-arrow').removeClass('active');
  //   $(this).find('.ic-arrow').toggleClass('active');

  //   $('.site-item > a').removeClass('active');
  //   $(this).toggleClass('active');

  //   // 해당 a 다시 눌렀을때 전부 removeClass
  //   return false;
  // });
})
