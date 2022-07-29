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
})