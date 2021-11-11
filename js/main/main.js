
$(function () {
	var sec01 = $('.section01').offset().top; 
	var sec02 = $('.section02').offset().top; 
	var sec03 = $('.section03').offset().top;
	var sec04 = $('.section04').offset().top;
	var sec05 = $('.section05').offset().top;
	var WindowH	= $(window).innerHeight();// 윈도우 높이
	var WindowH2 = WindowH / 2;
	
	$('.section01').addClass('active');

	//scroll event
	$(document).scroll(function(){
		var scrollPoint = $(window).scrollTop() + WindowH; // 현제 스크롤 위치 // 현제 스크롤 높이 + 전체 컨텐츠
		var scrollT = $(window).scrollTop();		
		var floatingH = $('.floating').innerHeight(); // 플루팅 높이

		if(sec02 - WindowH2 <= scrollT){
			$('.section').removeClass('active');
			$('.section02').addClass('active');
			$('#MainVideo01').get(0).currentTime = 0;
			$('#MainVideo01').get(0).play();
		}if(sec03  - WindowH2 <= scrollT){
			$('.section').removeClass('active');
			$('.section03').addClass('active');
		}if(sec04  - WindowH2 <= scrollT){
			$('.section').removeClass('active');
			$('.section04').addClass('active');
		}if(sec05  - WindowH2 <= scrollT){
			$('.section').removeClass('active');
			$('.section05').addClass('active');
		}
		
		if(sec01 >= scrollT){
			$('.section').removeClass('active');
			$('.section01').addClass('active');
		}
        
	});






});



