'use strict';

//도큐먼트는 내장객체라서 따옴표처리 안함, function(매개변수)
$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
    //링크 속성을 초기화하겠다.
});
//gnb메뉴
//제이쿼리를 선택
//이벤트메소드는 다 정해져있음
$(function(){
    $('header .menuOpen').on('click', function(){
        $('.gnb').addClass('on');
    });
    $('.gnb .close').on('click', function(){
       $('.gnb').removeClass('on'); 
    });
    
});

//fixed header
var scrollAni = 0;
scrollAni = $(document).scrollTop();
fixHeader();

//윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollAni = $(document).scrollTop();
    fixHeader();
});

//고정헤더 함수
function fixHeader(){
    if(scrollAni > 150){
        $('header').addClass('on');
    }else{
        $('header').removeClass('on');
    }
        
}

//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile:false,
        once:false
    });
});

//상단으로 부드럽게
$(function(){
    $('.goTop').on('click', function(){
        $('html, body').animate({scrollTop : 0}, 400);
    });
});

//.top-visual 이미지 슬라이드
$(function(){
    $(".visual .slide").slick({
        arrows: true, //화살표
        dots: false, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 4000, //재생시간 4000=4초
        pauseOnHover: false, //마우스오버, 포커스시 멈추는 것을 해제
        pauseOnFocus: false
    });
});



