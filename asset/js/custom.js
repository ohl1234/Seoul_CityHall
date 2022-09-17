    // 1. 셀렉트 창 선택 후  go버튼 눌렀을때 새창 띄어서 이동
    // 2. top 버튼 스크롤 이벤트
    // 3. 패밀리사이트 slidedown slideup 탭메뉴 
    // 4. kepdown 이벤트
    // 5. 메인 슬라이드 swiper슬라이드 - 탭메뉴, 오토플레이 컨트롤
    // 6. 서브 슬라이드 swiper슬라이드 - 오토플레이 컨트롤
$(function(){
    $('#langBtn').click(function(){
        Url = $('#lang').val();
        window.open(Url);
    });

    let lastScroll = 0;
    $(window).scroll(function(){
        current = $(this).scrollTop();
        if(current > lastScroll){
            $('.btn-top').addClass('active');
        }else{
            $('.btn-top').removeClass('active');
        }
    });

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

        $('.sc-site .site-list .sub-item:first-child').keydown(function(e){
            key = e.keyCode;
            //console.log(key);
            if(key === 9 && e.shiftKey){
                $('.sub-list-wrap').stop().slideUp();
                $(this).parents().siblings().find('.ic-arrow').removeClass('active');
                $(this).parents().siblings().removeClass('active');
            }
        });
        $('.sc-site .site-list .sub-item:last-child').keydown(function(e){
            key = e.keyCode;
            if(key === 9 && !e.shiftKey){
                $('.sub-list-wrap').stop().slideUp();
                $(this).parents().siblings().find('.ic-arrow').removeClass('active');
                $(this).parents().siblings().removeClass('active');
            }
        });
    });

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

    $('.slide .sc-title-tab').click(function(e){
        e.preventDefault();
        $('.sc-title-tab').removeClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
        // 해당하는 tab의 부모인 slide가 display block 형제 요소 display none
        
        if($(this).parent().hasClass('slide1')){
            slide2.autoplay.stop();
            if ($('.slide1 .play').hasClass('active')) {
                slide1.autoplay.stop();
            } else {
                slide1.autoplay.start();
            }            
        }else{
            slide1.autoplay.stop();
            if ($('.slide2 .play').hasClass('active')) {
                slide2.autoplay.stop();
            } else {
                slide2.autoplay.start();
            }
        }// class이벤트엔 .찍지 않기
    });

    $('.slide1 .auto-play').click(function(e){
        e.preventDefault();
        if($(this).find('.play').hasClass('active')){
            slide1.autoplay.start();
            $(this).find('.play').removeClass('active').siblings().addClass('active');
        }else{
            slide1.autoplay.stop();
            $(this).find('.pause').removeClass('active').siblings().addClass('active');
        }
    });
    $('.slide2 .auto-play').click(function(e){
        e.preventDefault();
        if($(this).find('.play').hasClass('active')){
            slide2.autoplay.start();
            $(this).find('.play').removeClass('active').siblings().addClass('active');
        }else{
            slide2.autoplay.stop();
            $(this).find('.pause').removeClass('active').siblings().addClass('active');
        }
    });
    $('.slide3 .auto-play').click(function(e){
        e.preventDefault();
        if($(this).find('.play').hasClass('active')){
            slide3.autoplay.start();
            $(this).find('.play').removeClass('active').siblings().addClass('active');
        }else{
            slide3.autoplay.stop();
            $(this).find('.pause').removeClass('active').siblings().addClass('active');
        }
    });

})