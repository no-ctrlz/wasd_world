/* 
 * 작업시 개별작성되는 js
*/ 

//header
$(document).ready(function() {
	responsive();
});

function responsive(){
	var res = ""
	var param = $("#header");
	var gnbArea = $(".gnb_area nav > ul > li");
	var gnbLink = gnbArea.children("a");

	//default 
	if(!$(".btn_m_menu").is(":hidden")) res = "mob";
	else res = "web";  
	param.attr("class",res);
	def(param);

	$(window).resize(function(){
		if(!$(".btn_m_menu").is(":hidden")) res2 = "mob";
		else res2 = "web"; 
		param.attr("class",res2);
		if(res != res2){
			res = res2;  
			def(param);
		}
	}); 

	//mobile
	$(document).on("click",'#header .shadow',function(){
		param.find(".bg").removeClass('active');
		$('body').removeClass('active');
		return false;
	});

	$('.btn_m_menu').on('click',function(){
		param.find(".bg").addClass('active');
		$('body').addClass('active');
		return false;
	});
	
	//기초설정
	function def(param){
		if(param.attr("class") == "web"){
			if($('#header nav .bg').length > 0){
				$('#header nav ul').unwrap();
			}
			if($('#header nav .shadow').length > 0){
				$('#header nav .shadow').remove();
			}
			if($('.content .scrollTable').length > 0){
				$('.content .table').unwrap();
			}
		} else if (param.attr("class") == "mob"){  
			$('#header nav > ul').after('<div class="shadow"><a href="#"></a></div>');
			$('#header nav > ul').wrap('<div class="bg"></div>');
			$('.content .table').wrap('<div class="scrollTable"></div>');
		}
	}
}

//content view
$(function(){
	setTimeout(function(){
		$('#container').addClass('active');
	}, 200);  
});

$(function(){
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();
	
	$(window).scroll(function(event){
	    didScroll = true;
	});
	
	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        topScorllAni();
	        didScroll = false;
	    }
	}, 250);
	
	function hasScrolled() {
	    var st = $(this).scrollTop();
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    if (st > lastScrollTop && st > navbarHeight){
	        $('#header').addClass('nav-up');
	    } else {
	        if(st <= 50) {
	            $('#header').removeClass('nav-up');
	        }
	    }
	    lastScrollTop = st;
	}
	
	function topScorllAni(){
		var btnTop = $(this).scrollTop();
		if (btnTop > 400){ 
			$('.btn_top').addClass('active');
		}else{
			$('.btn_top').removeClass('active');
		}
	}
});

//visual animation
$(function(){
	setTimeout(function(){
		$('.area_visual div.txt').addClass('active');
		$('.area_visual div.txt').children('p').css("transition","all 0.5s ease 0.4s").addClass("show");
		$('.area_visual div.txt').children('em').css("transition","all 0.5s ease 0.6s").addClass("show");
	}, 200);  
});

//visual slide
$(window).load(function(){
	if($('.area_visual').length > 0){
		visualSlider = $('.area_visual .list').bxSlider({
			//mode: 'fade',
			auto:true,
			autoHover:false,
			pager:false,
			autoControls:false,
			pause:8000,
			speed:2000,			
			nextText:'NEXT',
			prevText:'PREV',
			onSlideBefore:function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject){
				$('.area_visual .total > em').text(("0" + (currentSlideHtmlObject +　1)).slice(-2));
			}
		});
		var slideQty = visualSlider.getSlideCount();
		$('.area_visual .total > span').text(("0" + (slideQty)).slice(-2));
		
		$(document).on('click','.area_visual .bx-next, .area_visual .bx-prev',function() {
			visualSlider.stopAuto();
			visualSlider.startAuto();
		});
	}
});

//main scroll
$(window).load(function(){
	if($('.area_visual').length > 0){
		var mouseWheelVol = 0;
		var mouseWheelCheck = 'Y';
		var mouseWheelMax = $(".scrollMain").length-1;				
		var widthMatch = matchMedia("all and (min-width:1024px)");				
		var widthHandler = function(matchList) {
			if(matchList.matches) {										
				scrollWheel();
			}else{
				$(window).unbind("mousewheel DOMMouseScroll");
			}
		};					  
		widthMatch.addListener(widthHandler);
		widthHandler(widthMatch);

		function scrollWheel(){
			$(window).bind("mousewheel DOMMouseScroll", function(event) {
				event.preventDefault();
				if (event.originalEvent.wheelDelta >= 0) {
					if(mouseWheelCheck=='Y' && mouseWheelVol > 0){
						mouseWheelCheck='N';
						mouseWheelVol--;
						scrollMain_move('pc');					
					}
				}else{
					if(mouseWheelCheck=='Y' && mouseWheelVol < mouseWheelMax){
						mouseWheelCheck='N';
						mouseWheelVol++;
						scrollMain_move('pc');					
					}
				}						
			});

			var targetOffset= $(".scrollMain:eq("+mouseWheelVol+")").offset().top;
			$("html, body").scrollTop(targetOffset);
		}

		function scrollMain_move(type){
			var targetOffset= $(".scrollMain:eq("+mouseWheelVol+")").offset().top;
			$("html,body").animate({
				scrollTop: targetOffset
			}, 800 , function(){
				mouseWheelCheck='Y';			
			});
		}
	}
});		

//sub scroll
$(function(){	
	if($('#container.sub').length > 0){
		var $window = $(window);	
		var scrollTime = 0.5;	
		var scrollDistance = 300;
			
		$window.on("mousewheel DOMMouseScroll", function(event){		
			event.preventDefault();											
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
				
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
					ease: Power1.easeOut,	
					autoKill: true,
					overwrite: 5							
				});					
		});
	}
	
});