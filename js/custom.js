'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});


//https://lasdri.tistory.com/616
	$(document).ready(function(){

		$(document).keydown(function(e){

			if( !($("input").is(":focus")) && !($("textarea").is(":focus")) ) {

				if(e.which == 87) alert("w");
                if(e.which == 65) alert("a");
				if(e.which == 83) alert("s");
				if(e.which == 68) alert("d");

			}

		});

	});

//콘솔에 키보드 번호 띄워주는 코드
//$(document).keydown(function(event) {
//  console.log(event.keyCode);
//});
//87 65 83 68 / wasd

$(function(){
    $('header .menuOpen').on('click', function () {
        $('.gnb, .logo').addClass('on');
    });
    $('.gnb .close').on('click', function () {
        $('.gnb, .logo').removeClass('on');
    });
    $('.tabmenu .list li').on('click', function () {
        $('.workpage .visualText').addClass('on');
    });
    $('.workpage .visualText .word').on('click', function () {
        $('.workpage .visualText').removeClass('on');
        $('.tabmenu .inner').removeClass('on');
        $('.tabmenu .list li').removeClass('on');
        $('.tabmenu .inner').eq(0).addClass('on');
    });
});
//고정헤더 이벤트
$(function () {
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    fixHeader();

    //윈도우 창 조절시에 이벤트
    $(window).on("scroll resize", function () {
        scrollTop = $(document).scrollTop();
        fixHeader();
    });

    //고정헤더 함수
    function fixHeader() {
        if (scrollTop > 150) {
            $("header").addClass('on');
        } else {
            $("header").removeClass('on');
        }
    }
});

$(function () {
    $(".slideImg .viewbox").slick({
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 3000, //재생시간 n000=n초
        pauseOnHover: false, //마우스오버, 포커스시 멈추는 것을 해제
        pauseOnFocus: false
    });
    $(".slideImg .viewbox2").slick({
        arrows: false, //화살표
        dots: false, //인디케이터 해제
        fade: true, //페이드인 효과
        autoplay: true, //자동재생
        autoplaySpeed: 3500, //재생시간 n000=n초
        pauseOnHover: false, //마우스오버, 포커스시 멈추는 것을 해제
        pauseOnFocus: false
    });

    $(".innerslide").slick({
        arrows: false, //화살표
        dots: true, //인디케이터 해제
        fade: true,
        autoplay: true, //자동재생
        autoplaySpeed: 5000,
        pauseOnHover: true, //마우스오버, 포커스시 멈추는 것을 해제
        pauseOnFocus: true
    });
    $('.slick-dots #slick-slide-control00').text("bandicam").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control01').text("y-studio").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control02').text("hanhwa").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control03').text("kca").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control04').text("daebang").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control05').text("croquis").css({
        "fontSize": "18px",
        "text-transform": "uppercase",
        "font-weight": "700"
    });
    $('.slick-dots #slick-slide-control30').text("");
    $('.slick-dots #slick-slide-control31').text("");
});

//direction youtubebox

$(document).ready(function () {

    // Sliders

    //// Slider Top
    //2월
    $('.box .js-items-slider-container .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container .slider-nav'
    });
    $('.box .js-items-slider-container .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container .slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });    
    //3월
    $('.box .js-items-slider-container2 .slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container2 .slider-nav2'
    });
    $('.box .js-items-slider-container2 .slider-nav2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container2 .slider-for2',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav2 change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });
    //4월
    $('.box .js-items-slider-container3 .slider-for3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container3 .slider-nav3'
    });
    $('.box .js-items-slider-container3 .slider-nav3').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container3 .slider-for3',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav3 change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });    
    $('.box .js-items-slider-container4 .slider-for4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container4 .slider-nav4'
    });
    $('.box .js-items-slider-container4 .slider-nav4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container4 .slider-for4',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav4 change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });    
    $('.box .js-items-slider-container5 .slider-for5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container5 .slider-nav5'
    });
    $('.box .js-items-slider-container5 .slider-nav5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container5 .slider-for5',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav4 change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });
    $('.box .js-items-slider-container6 .slider-for6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-items-slider-container6 .slider-nav6'
    });
    $('.box .js-items-slider-container6 .slider-nav6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-items-slider-container6 .slider-for6',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function (slide, index) {
//            console.log("slider-nav4 change");
//            console.log(this.$slides.get(index));
            $('.current-slide').removeClass('current-slide');
            $(this.$slides.get(index)).addClass('current-slide');
        },
        onInit: function (slick) {
            $(slick.$slides.get(0)).addClass('current-slide');
        }
    });
});
