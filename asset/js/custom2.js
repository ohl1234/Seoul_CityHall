$(function(){
    // 1. 셀렉트 창 선택 후  go버튼 눌렀을때 새창 띄어서 이동
    // 2. top 버튼 스크롤 이벤트
    // 3. 패밀리사이트 slidedown slideup 탭메뉴 
    // 4. kepdown 이벤트
    // 5. 메인 슬라이드 swiper슬라이드 - 탭메뉴, 오토플레이 컨트롤
    // 6. 서브 슬라이드 swiper슬라이드 - 오토플레이 컨트롤

    
// 1. 셀렉트 창 선택 후  go버튼 눌렀을때 새창 띄어서 이동
    $('#langBtn').click(function(){
        const Url = $('#lang').val();
        window.open(Url);
    });

// 2. top 버튼 스크롤 이벤트
    let lastScroll = 0;

    $(window).scroll(function(){
        current = $(this).scrollTop();
        if(current > lastScroll){
            $('.btn-top').addClass('active');
        }else{
            $('.btn-top').removeClass('active');
        }
    });

// 3. 패밀리사이트 slidedown slideup 탭메뉴
    $('.site-item > a').click(function(e){
        e.preventDefault();
        $('.sub-list-wrap').stop().slideUp();
        $(this).siblings().stop().slideToggle();

        if($(this).find('.ic-arrow').hasClass('active')){
            $(this).find('.ic-arrow').removeClass('active');
        }else{
            $('.ic-arrow').removeClass('active');
            $(this).find('.ic-arrow').addClass('active');
        }

        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $('.site-item > a').removeClass('active');
            $(this).addClass('active');
        }
    });

// 4. keydown 이벤트
    $('.sc-site .sub-list .sub-item:first-child').keydown(function(e){
        const key = e.keyCode;
        if(key === 9 && e.shiftKey){
            $('.sub-list-wrap').stop().slideUp();
            $(this).parents('.sub-list-wrap').siblings().find('.ic-arrow').removeClass('active');
            $(this).parents('.sub-list-wrap').siblings().removeClass('active');
        }
    })
    $('.sc-site .sub-list .sub-item:last-child').keydown(function(e){
        const key = e.keyCode;
        if(key === 9 && !e.shiftKey){
            $('.sub-list-wrap').stop().slideUp();
            $(this).parents('.sub-list-wrap').siblings().find('.ic-arrow').removeClass('active');
            $(this).parents('.sub-list-wrap').siblings().removeClass('active');
        }
    })
    
// 5. 메인 슬라이드 swiper슬라이드 - 탭메뉴, 오토플레이 컨트롤
// 6. 서브 슬라이드 swiper슬라이드 - 오토플레이 컨트롤
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
    slide2.autoplay.stop(); // 처음엔 slide2 재생 멈춤 상태로 선언
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

    // 탭버튼 컨트롤
    $('.sc-visual .sc-title-tab').click(function(e){ // h3 클릭 시
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');

        if($(this).parent().hasClass('slide1')){ // 주요뉴스일때
            slide2.autoplay.stop(); // 반대되는 시민참여 자동재생 정지
            if ($('.slide1 .play').hasClass('active')) { // 주요뉴스 재생 상태면
                slide1.autoplay.stop(); // 멈추고
            } else {
                slide1.autoplay.start(); // 주요뉴스 멈춤 상태면 재생
            }
        }else{ // 시민참여일때
            slide1.autoplay.stop(); // 반대되는 주요뉴스 자동재생 정지
            if ($('.slide2 .play').hasClass('active')) { // 시민참여 재생 상태면
                slide2.autoplay.stop(); // 멈추고
            } else {
                slide2.autoplay.start(); // 시민참여 멈춤 상태면 재생
            }
        }
    })
    // 자동재생 컨트롤
    $('.slide1 .auto-play').click(function(e){ // .auto-play 클릭 시
        e.preventDefault();
        if ($(this).find('.play').hasClass('active')) { // 재생 상태면
            slide1.autoplay.start(); // 자동재생
            $(this).find('.pause').addClass('active').siblings().removeClass('active'); // 멈춤 버튼 나타내고 재생 버튼 숨기기
        } else { // 멈춤 상태면
            slide1.autoplay.stop(); // 멈춤
            $(this).find('.play').addClass('active').siblings().removeClass('active'); // 재생 버튼 숨기고 멈춤 버튼 나타내기
        }
    })
    $('.slide2 .auto-play').click(function(e){
        e.preventDefault();
        if ($(this).find('.play').hasClass('active')) {
            slide2.autoplay.start();
            $(this).find('.pause').addClass('active').siblings().removeClass('active');
        } else {
            slide2.autoplay.stop();
            $(this).find('.play').addClass('active').siblings().removeClass('active');
        }
    })
    $('.slide3 .auto-play').click(function(e){
        e.preventDefault();
        if ($(this).find('.play').hasClass('active')) {
            slide3.autoplay.start();
            $(this).find('.pause').addClass('active').siblings().removeClass('active');
        } else {
            slide3.autoplay.stop();
            $(this).find('.play').addClass('active').siblings().removeClass('active');
        }
    })

})