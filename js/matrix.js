			$('document').ready(matrix);
			function matrix(){
				$('#work').click(big);
				$('#baby-j').click(janelleSlide);
				$('#janelle-pic').click(janelleSlide);
				$('#back-to-us').click(janelleSlideBack);
				$('#papa-j').click(jabalSlide);
				$('#jabal-pic').click(jabalSlide);
				$('#back-to-them').click(janelleSlideBack);
				$('#about-us').click(janelleSlideBack);
			}
			function big(){
				$('#drops').animate({'height':'760px'},300);
				$('#drops').animate({'height':'740px'},100);
				$('#drops').animate({'height':'760px'},300);
			}
			function small(){
				$('#drops').animate({'height':'225px'}, 300);
				$('#drops').animate({'height':'200px'}, 100);
				$('#drops').animate({'height':'223px'}, 300);
			}
			function janelleSlide(){
				$('#us').animate({'left':'0'}, 300);
			}
			function janelleSlideBack(){
				$('#us').animate({'left':'-396'}, 300);
			}
			function jabalSlide(){
				$('#us').animate({'left':'-792'}, 300);
			}
			function jabalSlideBack(){
				$('#us').animate({'left':'-396'}, 300);
			}




			//slideFadeToggle
			$.fn.slideFadeToggle  = function(speed, easing, callback) {
       			 return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
			};
		
			$("#thumbnail-1").click(function () {
				$(".disappear3").slideUp(400, function(){
					$(".disappear2").slideUp(400, function(){
						$(".disappear").slideFadeToggle(400);
					});
				});
			});
			$("#thumbnail-2").click(function () {
				$(".disappear3").slideUp(400, function(){
					$(".disappear").slideUp(400, function(){
						$(".disappear2").slideFadeToggle(400);
					});
				});
			});
			$("#thumbnail-3").click(function () {
				$(".disappear").slideUp(400, function(){
					$(".disappear2").slideUp(400, function(){
						$(".disappear3").slideFadeToggle(400);
					});
				});
			});

