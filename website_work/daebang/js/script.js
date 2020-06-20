'use strict';

//gnb
$(function () {
    $(".gnb > li > a").on('mouseenter focus', function () {
        var gnbIndex = $(".gnb > li > a").index($(this));

        $(".gnb .inner").removeClass('on');
        $('.gnb .inner:eq(' + gnbIndex + ')').addClass('on');
    });
    $('header').on("mouseleave", function () {
        $('.gnb .inner').removeClass('on');
    });
});

//fixHeader
$(function () {
    var scrollFix = 0;
    scrollFix = $(document).scrollTop();
    fixHeader();

    //윈도우 창 조절시 이벤트

    $(window).on('scroll resize', function () {
        scrollFix = $(document).scrollTop();
        fixHeader();

    });

    //고정헤더함수
    function fixHeader(){
        if (scrollFix > 150) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }
    }

});

//splitting.js
$(function(){ Splitting(); });


//.top-visual 이미지슬라이드
//.slide2 이미지슬라이드
$(function(){
    $(".visual .slide").slick({
        //css 애니적용완료후에 arrows와 dots:true로변경
        arrows:true, //화살표
        dots:true, //false: 인디케이터 해제 
        autoplay:true, //자동재생
        fade:true, //페이드인 효과
        autoplaySpeed:7000, //재생시간
        pauseOnFocus:false,  //마우스 오버, 포커스시 멈추는 것을 해제
        pauseOnHover:false
        
    });
    $(".slick-prev").text("prev"); //이전버튼 글자 바꿔줌
    
    
    //두번째 슬라이드
    $(".slide2").slick({
        arrows:false, //화살표
        dots:true, //인디케이터
        autoplay:true, //자동재생
        infinite:true,
        slidesToShow:2,
        slidesToScroll: 1,
        autoplaySpeed:6000, //재생시간
        pauseOnFocus:true,  //마우스 오버시 멈추도록 true
        pauseOnHover:true
        
    });
    $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
    $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티 2차");
    $('.slide2 #slick-slide-control12').text("화성 동탄 1차 대방디엠시티 더 센텀");
    $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드 6차");
});

//scroll down
$(function(){
    $('.scroll').on('click', function(){
        var scroll = $('#scroll').offset().top;
        $('html, body').animate({scrollTop :(scroll)}, 400);
    });
});


//scroll animation
$(function(){
    $('.animate').scrolla({
        mobile : true,
        once :false
    });
});

//video
$(function(){
    $('.videoBox .mask').on('click', function(){
       $(this).css({"display":"none"});
        $('.videoBox iframe').css({"display":"block"});
    });
});