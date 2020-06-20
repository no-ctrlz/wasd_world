

//button
$(function(){
	$('a.button').wrapInner('<span></span>');
});

//table tr
$(function(){
	$('.bbsList td').on('mouseover',function(){
		$('.bbsList tr').removeClass('active');
		$(this).parent('tr').addClass('active');
	});
	
	$('.bbsList').on('mouseleave',function(){
		$('.bbsList tr').removeClass('active');
	});
});

//table scroll
$(function(){
	$('.table.scroll').wrap('<div class="scrollTable"></div>');
});

//faq
$(function(){
	$('.faqList').each(function(){
		var faqLink = $('.faqList dt a');
		$('.faqList dt a').on('click',function(){
			faqLink.removeClass('on');
			$('.faqList dd').slideUp('fast');
			$(this).addClass('on').parent().next('dd').stop().slideDown('fast');
			return false;
		});
		
		faqLink.eq(0).click();
	});
});

//top
$(function(){
	$(".btn_top").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400, function(){   
				window.location.hash = hash;
			});
		} 
	});
});

//sitemap
$(window).load(function(){
	if($('.area_sitemap').length > 0){
		var gnbSite = $('#header nav').html();
		$('.area_sitemap').append(gnbSite);
	}
});

//snb tab 갯수로 사이즈 all 작업할경우
$(function(){
	$('.tabCol ul').each(function(){
		var snbSize = $('li',this).length;
		$(this).addClass('col0'+snbSize);
	});
});