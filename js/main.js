/****************************************
Template Name: MSAPP 
Description: Multipurpose HTML5 Template
Template URI: msapp.themebins.com
Author: Themebins
Author URI: https://themeforest.net/user/themebins
Version: 0.1 (20 Jan 2019)

************ THEME JS INDEX ************
1. DEFAULT THEME JS
	1.1. WINDOW/PAGE LOADER
	1.2. WINDOW SCROLLING
	1.3. SHOW NAVBAR MENUS
	1.4. SCROLL TO TOP BTN EVENT
	1.5. WORK IT SELECTED OPTIONS
	1.6. SELECT COLOR SCHEMA HANDLER
2. SCROLLING & SELECTED NAV
3. SHOW POPUP IMAGES
4. SLICK SLIDER
	4.1. HOME SLIDER WITH ANIMATION
	4.2. SCREENSHOT SLIDER
	4.3. CLIENTS SLIDER
	4.4. RELATED POST SLIDER
5. COUNTER
6. CONTENT ANIMATION
7. PARTICLES HOME BG ANIMATION
8. WATER HOME BG ANIMATION
9. HOME BG VIDEO
10. HOME STYLE VIDEO (HOME-STYLE-5)
11. COMING SOON TIME COUNTER
12. SIGNIN/SIGNUP PAGE
****************************************/


// START MAIN JS FUNCTION
(function ($) {
	'use strict';
	jQuery(document).ready(function ($) {


		/****************************************
		1. DEFAULT THEME JS
		*****************************************/
			//***** 1.1. WINDOW/PAGE LOADER *******
			$(window).on('load', function() {
				$('#ms-js-preloaderr>div').fadeOut();
				$('#ms-js-preloader').delay(100).fadeOut('fast');
			});

			// If loading time is more than 1000ms. At this hide the preloading.
			setTimeout(function(){
				$('#ms-js-preloaderr>div').fadeOut();
				$('#ms-js-preloader').delay(100).fadeOut('fast');
			}, 1000)

			//***** 1.2. WINDOW SCROLLING *******
			$(window).scroll(function() {
				let $windowPostion = $(window).scrollTop(),
					$navbarSelector = $('#ms-js-navbar'),
					$scrollToTopBtn = $('#ms-js-scroll-to-top');

				//Class add for fixed navbar of landing page
				if($windowPostion > 20) $navbarSelector.addClass('ms-fixed');
				else $navbarSelector.removeClass('ms-fixed');

				// Show or hide the scrollToTop footer button
				if ($windowPostion > 200) $scrollToTopBtn.addClass('show');
				else $scrollToTopBtn.removeClass('show');
			});


			//******* 1.3. SHOW NAVBAR MENUS *******
			let menusCloseTargetEl = '#ms-js-navbar #js-menu-list .nav-item .nav-link, .ms-js-nav-menu-toggle';
			$(menusCloseTargetEl).click(function(event) {
				let $menuToggleBtn = $('#ms-js-navbar button.navbar-toggler'),
					windowWidth = window.innerWidth;
					
				if($menuToggleBtn.length && (windowWidth && windowWidth < 768))
					 $menuToggleBtn.trigger('click');
			});

			$('#ms-js-navbar button.navbar-toggler').click(function(event) {
				event.preventDefault();
				let $currentTarget = $(event.currentTarget),
					$navbarSelector = $currentTarget.closest('#ms-js-navbar');

					if($navbarSelector.hasClass('show')) $navbarSelector.removeClass('show');
					else $navbarSelector.addClass('show');
			});


			//********* 1.4. SCROLL TO TOP BTN EVENT *******
			$('#ms-js-scroll-to-top').click(function(event) {
				event.preventDefault();
				$('html, body').animate({scrollTop: 0}, 1000);
			})

			//********* 1.5. WORK IT SELETED OPTIONS *******
			$('.ms-js-click').click(
				function(element){
					let $element = $(element.target).closest('.ms-js-click');
					if($element) {
						let $getTargetAttribute = $element.attr('data-click-target'),
							$parentElement = $element.closest('.ms-js-click-container');					
						
						if($parentElement) {
							let $targetElement = $parentElement.find('.'+$getTargetAttribute);
							
							if($targetElement) {
								$element.addClass('active').siblings().removeClass('active');
								$targetElement.css({'display':'block'}).siblings().css({'display':'none'});
							}
						}
					}
				}
			);

			//********** 1.5. OPTIONS BOX OF THE SIDEBAR ********
			$('#ms-js-options-handler').click(function(element){
				 let $target = $(element.target).closest(".ms-js-options-box");

				 if($target.hasClass('open')) $target.removeClass('open');
				 else $target.addClass('open');
				}
			);

			//********** 1.6. SELECT COLOR SCHEMA HANDLER ********
			$('.ms-js-theme-handler').click(function(element){
					element.preventDefault();

					let $target = $(element.target).closest(".ms-js-theme-handler"),
						themeName = $target.attr('data-theme');

					$target.siblings().removeClass('active');
					$target.addClass('active');

					$('.ms-js-theme-scheme').attr('href', 'css/themes/'+themeName+'.css');
				}
			);
		/****************************************
		 END DEFAULT THEME JS
		*****************************************/


		/****************************************
		2. SCROLLING & SELECTED NAV
		*****************************************/
			//DEFINE SCROLLSPY
			$('body').scrollspy({
				target: '#ms-js-navbar',
				offset: 60
			});

			$("#ms-js-navbar ul li a[href^='#']").on('click', function(e) {
				// prevent default anchor click behavior
				e.preventDefault();

				// store hash
				let hash = this.hash;
				
				//Animation
				$('html, body').animate({
					scrollTop: $(hash).offset()? $(hash).offset().top: 0
				}, 1000);
			});

			//It's used title place
			$.scrollIt();
		/****************************************
		 END SCROLLING & SELECTED NAV
		*****************************************/

	
		/****************************************
		3. SHOW POPUP IMAGES
		*****************************************/
			//Video popup
			if($('.ms-js-video').length) $('.ms-js-video').venobox(); 

			//Slider images popup
			if($('.ms-js-slider-imgs').length) $('.ms-js-slider-imgs').venobox(); 

			//Blog gallery images popup
			if($('.ms-js-gallery-img').length) $('.ms-js-gallery-img').venobox(); 
		/****************************************
		 END SHOW POPUP IMAGES
		*****************************************/


		/****************************************
		4. SLICK SLIDER
		*****************************************/
			// Mozilla: mozAnimationEnd, Webkit: webkitAnimationEnd, Opera: oanimationend,  IE: MSAnimationEnd, W3C: animationend
			//Add animation style
			//Add or remove animation
			function makeAnimations(elements) {
				let animationEndElements = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				elements.each(function() {
					let $this = $(this),
						$animationDelay = $this.data('delay'),
						$animationType = 'animated ' + $this.data('animation');
					
					$this.css({
						'-webkit-animation-delay': $animationDelay,
						'animation-delay': $animationDelay
					});

					$this.addClass($animationType).bind(animationEndElements, function() {
						$this.removeClass($animationType);
					});
				});
			}

			//******* 4.1. HOME SLIDER WITH ANIMATION ********
			$('#ms-js-home-slider').on('init', function(element, slick) {
				let $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
				makeAnimations($firstAnimatingElements);
				
			}).on('beforeChange', function(element, slick, currentSlide, nextSlide) {
				let $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
				makeAnimations($animatingElements);
			});

			$('#ms-js-home-slider').slick({
				arrows: false,
				dots: false,
				fade: true,
				autoplay: true,
				cssEase: 'ease',
				speed: 500,
				autoplaySpeed: 5000,
			});

			//****** 4.2. SCREENSHOT SLIDER *****
			$('#ms-js-screenshot-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
				{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
			]
			});

			//****** 4.3. CLIENTS SLIDER *****
			$('#ms-js-client-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 2,
					slidesToScroll: 1
					}
				},
				{
				breakpoint: 610,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
			]
			});


			//****** 4.4. RELATED POST SLIDER *****
			$('#ms-js-related-post-slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [
					{
					breakpoint: 768,
					settings: {
						arrows: true,
						slidesToShow: 2,
						slidesToScroll: 1
						}
					},
					{
					breakpoint: 480,
					settings: {
						arrows: true,
						slidesToShow: 1,
						slidesToScroll: 1
						}
					}
				]
				});
		/****************************************
		 END SLICK SLIDER
		*****************************************/
			

		/****************************************
		5. NUMBER COUNTER
		*****************************************/
			$('.ms-js-counter').counterUp({
				delay: 10,
				time: 1000,
				beginAt: 100,
				formatter: function (n) {
				return n.replace(/,/g, '.');
				}
			});
		/****************************************
		 END NUMBER COUNTER
		*****************************************/


		/****************************************
		6. CONTENT ANIMATION
		*****************************************/
			new WOW().init();
		/****************************************
		 END CONTENT ANIMATION
		*****************************************/
		

		/****************************************
		7. PARTICLES HOME BG ANIMATION
		*****************************************/
			//Partiles options
			let particleOptions = {
				"particles":{
					"number":{
						"value":80,
						"density":{
							"enable":true,
							"value_area":800
						}
					},
					"color":{
						"value":"#ffffff"
					},
					"shape":{
						"type":"circle",
						"stroke":{
							"width":0,
							"color":"#000000"
						},
						"polygon":{
							"nb_sides":5
						},
						"image":{
							"src":"img/github.svg",
							"width":100,
							"height":100
						}
					},
					"opacity":{
						"value":0.5,
						"random":false,
						"anim":{
							"enable":false,
							"speed":1,
							"opacity_min":0.1,
							"sync":false
						}
					},
					"size":{
						"value":3,
						"random":true,
						"anim":{
							"enable":false,
							"speed":40,
							"size_min":0.1,
							"sync":false
						}
					},
					"line_linked":{
						"enable":true,
						"distance":150,
						"color":"#ffffff",
						"opacity":0.4,
						"width":1
					},
					"move":{
						"enable":true,
						"speed":6,
						"direction":"none",
						"random":false,
						"straight":false,
						"out_mode":"out",
						"bounce":false,
						"attract":{
							"enable":false,
							"rotateX":600,
							"rotateY":1200
						}
					}
				},
				"interactivity":{
					"detect_on":"canvas",
					"events":{
						"onhover":{
							"enable":true,
							"mode":"repulse"
						},
						"onclick":{
							"enable":true,
							"mode":"push"
						},
						"resize":true
					},
					"modes":{
						"grab":{
							"distance":400,
							"line_linked":{
								"opacity":1
							}
						},
						"bubble":{
							"distance":400,
							"size":40,
							"duration":2,
							"opacity":8,
							"speed":3
						},
						"repulse":{
							"distance":200,
							"duration":0.4
						},
						"push":{
							"particles_nb":4
						},
						"remove":{
							"particles_nb":2
						}
					}
				},
				"retina_detect":true
			};

			//Checking particles element by id ("#ms-js-home-bg-particles")
			if( $("#ms-js-home-bg-particles").length) particlesJS("ms-js-home-bg-particles", particleOptions);
			
		/****************************************
		 END PARTICLES HOME BG ANIMATION
		*****************************************/


		/****************************************
		8. WATER HOME BG ANIMATION
		*****************************************/
			let $waterElement = $('.ms-js-home-bg-water');

			try {
				$waterElement.ripples({
					resolution: 512,
					dropRadius: 20,
					perturbance: 0.04,
				});
		
			} catch (e) {
				console.log(e);
			}

			// Automatic drops
			setInterval(function() {
				let x = Math.random() * $waterElement.outerWidth(),
					y = Math.random() * $waterElement.outerHeight(),
					dropRadius = 20,
					strength = 0.04 + Math.random() * 0.04;

				$waterElement.ripples('drop', x, y, dropRadius, strength);
			}, 400);
		/****************************************
		 END WATER HOME BG ANIMATION
		*****************************************/
		

		/****************************************
		9. HOME BG VIDEO
		*****************************************/
			$("#ms-js-video-bg").YTPlayer({
				videoURL:'http://youtu.be/BsafeSHN_II',
				containment:'#ms-js-video-bg',
				coverImage: "./imgs/video-start.png",
				autoPlay:true, 
				mute:true, 
				startAt:0, 
				opacity:1,
				showControls: false,
				useOnMobile: true,
				showYTLogo: false
			});	
		/****************************************
		 END HOME BG VIDEO
		*****************************************/
		

		/****************************************
		10. HOME STYLE VIDEO (HOME-STYLE-5)
		*****************************************/
			if($("#ms-js-home-video").length) {
				$("#ms-js-home-video").YTPlayer({
					videoURL:'http://youtu.be/B8oncbNrITw',
					containment:'.ms-home-video',
					coverImage: "./imgs/video-start.png",
					autoPlay: false,
					controls: 0, 
					startAt:0, 
					vol: 10, 
					opacity:1,
					mute: false,
					showYTLogo: false,
					useOnMobile: true,
					onReady: function(e){
						$("#ms-js-home-video-btm-overlay").removeClass('ms-video-loading');
					}
				});
			}

			//Home bottom video style overlay and play/pause button 
			$("#ms-js-home-video-btm-overlay").click(function(e){
				e.stopPropagation();

				let $currentTarget = $(e.currentTarget),
					$target = $(e.target).closest('button'),
					$playerTarget = $('#ms-js-home-video');
					 
				if($target && $target.hasClass('ms-js-pause-btn') || $currentTarget.hasClass('ms-js-video-playing')) {
					$playerTarget.YTPPause();
					$currentTarget.removeClass('ms-js-video-playing');
				} else if($target && $target.hasClass('ms-js-play-btn') || !$currentTarget.hasClass('ms-js-video-playing')){
					$playerTarget.YTPPlay();
					$currentTarget.addClass('ms-js-video-playing');
				}
				
			});
		/****************************************
		 END HOME STYLE VIDEO
		*****************************************/


		/****************************************
		11. COMING SOON TIME COUNTER
		*****************************************/
			let $countDownTarget = $('#ms-js-countdown'),
				defaultCountDownDate = "Dec 25, 2019 15:37:25";

			if($countDownTarget.length) {
				//Get initial countdown date from 'data-ending-date'. Which init by user.
				//Set default and initial countdown date
				let initCountDownDate =  $countDownTarget.attr('data-ending-date');
					defaultCountDownDate = initCountDownDate? initCountDownDate : defaultCountDownDate;

				// Update the count down every 1 second
				setInterval(function() {
					
					// Get todays date and time
					// Find the distance between now and the count down date
					let countDownDate = new Date(defaultCountDownDate).getTime(),
						now = new Date().getTime(),
						distance = countDownDate - now;
					
					// Time calculations for days, hours, minutes and seconds
					let $daysTarget = $("#ms-js-days"),
						$hoursTarget = $("#ms-js-hours"),
						$minutesTarget = $("#ms-js-minutes"),
						$secondsTarget = $("#ms-js-seconds"),
						days = Math.floor(distance / (1000 * 60 * 60 * 24)),
						hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
						minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
						seconds = Math.floor((distance % (1000 * 60)) / 1000);
					
					// Output the result in an element with id
					if($daysTarget.length) $daysTarget.html(days? days:0);
					if($hoursTarget.length) $hoursTarget.html(hours? hours:0);
					if($minutesTarget.length) $minutesTarget.html(minutes? minutes:0);
					if($secondsTarget.length) $secondsTarget.html(seconds? seconds:0);
				}, 1000);
			}
		/****************************************
		 END COMING SOON TIME COUNTER
		*****************************************/
		

		/****************************************
		 12. START SIGNIN/SIGNUP PAGE
		*****************************************/
			$(".ms-js-form-change").click(function(e){
				let $targetElement = $(e.target),
					getDataAttr = $targetElement.attr('data-type'),
					$formContainerTarget = $(".ms-js-form"),
					$signinNavLinkTarget = $("#ms-js-signin-nav-link"),
					$signupNavLinkTarget = $("#ms-js-signup-nav-link");

				//Add or remove 'ms-open-signup-form' for change sigin/signup form
				if($formContainerTarget.length) $formContainerTarget.toggleClass("ms-open-signup-form");

				//Below code are nav link select
				//When you want to show signup form 
				if(getDataAttr && getDataAttr === 'signup') {
					//Add active class when visible signin context
					if($signupNavLinkTarget.length) $signupNavLinkTarget.addClass('active');

					//Remove active class when visible signin context
					if($signinNavLinkTarget.length && $signinNavLinkTarget.hasClass('active')) 
						$signinNavLinkTarget.removeClass('active');
				}

				//When you want to show signin form 
				if(getDataAttr && getDataAttr === 'signin') {
					//Add active class when visible signin context
					if($signinNavLinkTarget.length) $signinNavLinkTarget.addClass('active');

					//Remove active class when visible signin context
					if($signupNavLinkTarget.length && $signupNavLinkTarget.hasClass('active')) 
						$signupNavLinkTarget.removeClass('active');
				}
			});
		/****************************************
		 END SIGNIN/SIGNUP PAGE
		*****************************************/

	});
}(jQuery));

