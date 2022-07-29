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
    })

    let lastScroll = 0;
    $(window).scroll(function(){
        current = $(this).scrollTop();
        if(current > lastScroll){
            $('.btn-top').addClass('active');
        }else{
            $('.btn-top').removeClass('active');
        }
    })
})