
(function($, fnFrontend){
	"use strict";
	
	
	
	var Frel = {
		
		init: function() {

			var widgets = {
				'frel-hero-header.default' : Frel.frel_all_functions,
				'frel-info-list.default' : Frel.frel_all_functions,
				'frel-about.default' : Frel.parallaxMaster,
				'frel-info-rating.default' : Frel.infoRatingCarousel,
				'frel-services.default' : Frel.serviceShortcode,
				'frel-experience.default' : Frel.experienceShortcode,
				'frel-project-sticky.default' : Frel.projectStickyShortcode,
				'frel-support-block.default' : Frel.supportBlockShortcode,
				'frel-triple-blog.default' : Frel.tripleBlogShortcode,
				'frel-check-list.default' : Frel.ImgToSVG,
				'frel-accordion.default' : Frel.accordionFunction,
				'frel-location-list.default' : Frel.locationListFunction,
				'frel-main-slider-with-content.default' : Frel.mainSliderWithContnetFunction,
				'frel-introduce.default' : Frel.introduceFunction,
				'frel-principles.default' : Frel.principlesFunction,
				'frel-counter-with-content.default' : Frel.counterWithContentFunction,
				'frel-counter-with-rating.default' : Frel.counterWithContentFunction,
				'frel-project-sticky-modern.default' : Frel.projectStickyShortcode,
				'frel-services-classic.default' : Frel.ImgToSVG,
				'frel-triple-blog-modern.default' : Frel.tripleBlogShortcode,
				'frel-hero-header-modern.default' : Frel.frel_all_functions,
				'frel-principles-modern.default' : Frel.frel_all_functions,
				'frel-service-query.default' : Frel.serviceQueryFunction,
				'frel-full-custom-list.default' : Frel.serviceQueryFunction,
				'frel-about-with-rating.default' : Frel.frel_all_functions,
				'frel-single-testimonial.default' : Frel.frel_all_functions,
				'frel-project-sticky-full.default' : Frel.projectStickyShortcode,
				'frel-kenburnsy.default' : Frel.kenburnsyShortcode,
				'frel-arrow-link.default' : Frel.ImgToSVG,
				'frel-alpha-slider.default' : Frel.alphaSliderFunction,
				'frel-portfolio-details.default' : Frel.frel_all_functions,
				'frel-hero-header-all-in-one.default' : Frel.heroHeaderAllInOne,
				'frel-about-text-slider.default' : Frel.aboutTextSlider,
				'frel-about-text-slider-classic.default' : Frel.aboutTextSlider,
				'frel-progress-bar.default' : Frel.progress,
				'frel-progress-bar-with-desc.default' : Frel.progress,
				'frel-project-category-filter.default' : Frel.projectCategoryFilter,
				'frel-why-choose-us.default' : Frel.whyChooseUs,
				'frel-team-member.default' : Frel.whyChooseUs,
				'frel-single-testimonial-parallax.default' : Frel.singleTestimonialParallax,
				'frel-partners.default' : Frel.partners,
				'frel-useful-information.default' : Frel.ImgToSVG,
				'frel-portfolio-images.default' : Frel.BgImg,
				'frel-triple-blog-shadow.default' : Frel.BgImg,
				'frel-counter-with-description.default' : Frel.counterWithContentFunction,
				'frel-triple-blog-shadow-a.default' : Frel.BgImg,
				'frel-hero-header-elegant.default' : Frel.heroHeaderAllInOne,
				'frel-portfolio-video-button.default' : Frel.magnific_popup,
				'frel-portfolio-demo-one.default' : Frel.portfolio_all_functions,
				'frel-portfolio-demo-two.default' : Frel.portfolio_demo_second,
				'frel-interactive-list-vertical-full.default' : Frel.interactiveListVertical,
				'frel-interactive-list-vertical-half.default' : Frel.interactiveListVerticalHalf,
				'frel-interactive-list-horizontal-half.default' : Frel.interactiveListHorizontalHalf,
				'frel-interactive-flickity.default' : Frel.interactiveFlickityFunctions,
				'frel-split-screen.default' : Frel.splitScreenFunctions,
				
				'frel-background-shapes.default' : Frel.ImgToSVG,
				'frel-about-minimal.default' : Frel.frel_all_functions,
				'frel-universal-list-filter-masonry.default' : Frel.filterj,
				
				// made by karinbay
				'frel-intro-button.default' : Frel.ImgToSVG,
				'frel-intro-demo-list.default' : Frel.introAllFunctions,
				'frel-intro-testimonials.default' : Frel.introTestimonialsFunctions,
				
				
				
				// made by gho5t7m
				'frel-features-icon-list.default' : Frel.ImgToSVG,
			};

			$.each( widgets, function( widget, callback ) {
				fnFrontend.hooks.addAction( 'frontend/element_ready/' + widget, callback );
			});
		},
		
		
		filterj: function(){

			var items 			= $('.fn_cs__ul__filter_masonry');
			items.each(function(){
				var thisItem 	= $(this);
				var list 		= thisItem.find('.posts_list');
				var filter 		= thisItem.find('.posts_filter');

				list.isotope({
					itemSelector: 'li',
  					percentPosition: true,
					columnwidth: 50
				});

				// Isotope Filter 
				filter.find('a').off().on('click', function(){
					var selector 	= $(this).attr('data-filter');
					list 			= thisItem.find('.posts_list');
					filter.find('a').removeClass('current');
					$(this).addClass('current');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 550,
							easing				: 'ease',
							queue				: false
						}
					});
					return false;
				});
			});

		},
		
		frel_all_functions: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
		},
		
		portfolio_all_functions: function(){
			Frel.BgImg();
			Frel.portfolio_swiper();
			Frel.portfolio_hover_3d();
		},
		
		interactiveListVertical: function(){
			Frel.BgImg();
			Frel.interactiveListVerticalAnimation();
			Frel.interactiveListVerticalScrollable();
		},
		
		interactiveListVerticalHalf: function(){
			Frel.BgImg();
			Frel.interactiveListVerticalHalfAnimation();
			Frel.interactiveListVerticalHalfScrollable();
		},
		
		interactiveListHorizontalHalf: function(){
			Frel.BgImg();
			Frel.interactiveListVHorizontalHalfAnimation();
		},
		
		interactiveFlickityFunctions: function(){
			Frel.BgImg();
			Frel.flickitySlider();
		},
		
		splitScreenFunctions: function(){
			Frel.BgImg();
			var WH		 	= $(window).height();
			var type		= $('.arlo_fn_wrapper_all').data('nav-type');
			var navHeight	= 0;
			if(type === 'one_line'){
				if($('.arlo_fn_one_line').data('position') === 'relative'){
					navHeight 	= $('.arlo_fn_one_line').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}else if(type === 'two_lines'){
				if($('.arlo_fn_two_lines').data('position') === 'relative'){
					navHeight 	= $('.arlo_fn_two_lines').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}else if(type === 'three_lines'){
				if($('.arlo_fn_three_lines').data('position') === 'relative'){
					navHeight	= $('.arlo_fn_three_lines').height();
					$('.fn_cs_split_screen').css({height:WH-navHeight});
				}
			}
			if($('#fullpage').length){
				$('#fullpage').fullpage({
					autoScrolling: true,
					scrollHorizontally: true,
					navigation: true,
					navigationPosition: 'right',
					afterLoad: function(){
						var itemData		= $('.fn_cs_split_screen').data('dots-color');
						if(itemData == 'mixed'){
							var activeIndex = $('.fn_cs_split_screen .section_wrap.active').index();
							if(activeIndex%2 === 1){
								$('#fp-nav').addClass('fn_light');
							}else{
								$('#fp-nav').removeClass('fn_light');
							}
						}
					},
					responsiveWidth: 1040,
				});
			}
				
		},
		
		flickitySlider: function(){
			var interactiveFlickity		= $('.fn_cs_flickity_slider');
			interactiveFlickity.each(function(){
				var element		= $(this);
				element.on( 'ready.flickity', function() {
					Frel.flickityCallBack(element);
				});
				var $carousel	= element.find('.slider_wrap ul').flickity({
					cellAlign: 'center',
					draggable: true,
					pageDots: false,
					prevNextButtons: '',
				});
				$carousel.on( 'dragEnd.flickity', function() {
					Frel.flickityCallBack(element);
				});
			});
			
		},
		flickityCallBack: function(element){
			var index 	= element.find('.slider_wrap ul li.is-selected').index();
			var allLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li');
			var sameLi	= element.closest('.fn_cs_flickity_slider').find('.main_bg_image ul li:nth-child('+(index+1)+')');
			allLi.removeClass('active');
			sameLi.addClass('active');
			if(allLi.find('video').length){
				allLi.find('video').get(0).pause();
			}
			if(sameLi.hasClass('video')){
				if(sameLi.find('video').length){
					sameLi.find('video').get(0).play();
				}
			}
		},
		
		interactiveListVHorizontalHalfAnimation: function(){
			
			var horizontalHalf		= $('.fn_cs_interactive_list_horizontal_half');
			if(horizontalHalf.length){
				if(!$('.fn_cs_horizontal_box').length){
					$('body').append('<div class="fn_cs_horizontal_box">');
				}
				var movingBox		= $('.fn_cs_horizontal_box');
				var boxHeight		= movingBox.height();
				var list			= $('.fn_cs_interactive_list_horizontal_half .project_list_wrap ul li');	
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var liOffset	= element.offset().top;
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
						movingBox.css({top:(liOffset-boxHeight)+'px'});
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var xmove		= event.clientX;
					movingBox.css({left:(xmove-movingBox.width()/2)+'px'});
				});
			}
		},
		
		interactiveListVerticalHalfAnimation: function(){
			var verticalHalf = $('.fn_cs_interactive_list_vertical_half');
			if(verticalHalf.length){
				if(!$('.fn_cs_vertical_box').length){
					$('body').append('<div class="fn_cs_vertical_box"></div>');
				}
				var movingBox		= $('.fn_cs_vertical_box');
				var movingH			= movingBox.height();
				var movingW			= movingBox.width();
				var innerOffsetleft = verticalHalf.find('.inner_wrap').offset().left;
				var list		= $('.fn_cs_interactive_list_vertical_half .project_list_wrap ul li');
				movingBox.css({left:innerOffsetleft-movingW});
				
				list.on('mouseenter',function(){
					var element			= $(this);
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						movingBox.addClass('active');
						var imgURL		= element.find('img').attr('src');
						movingBox.css({backgroundImage: 'url('+imgURL+')'});
					}
				}).on('mouseleave',function(){
					list.removeClass('active');
					movingBox.removeClass('active');
				}).on('mousemove',function(event){
					var ymove		= event.clientY;
					movingBox.css({top:(ymove - movingH/2)+'px'});
				});
			}
			
		},
		
		interactiveListVerticalHalfScrollable: function(){
							
		var H				= jQuery(window).height();
		var scrollable		= jQuery('.fn_cs_interactive_list_vertical_half .scrollable');
		var inner			= jQuery('.fn_cs_interactive_list_vertical_half .project_list_wrap .inner_wrap');

		inner.css({height:H-160});

		scrollable.each(function(){
			var element		= jQuery(this);

			element.css({height: H-160}).niceScroll({
				touchbehavior:false,
				cursorwidth:0,
				autohidemode:true,
				cursorborder:"0px solid #eee"
			});
		});
				
		},

		
		interactiveListVerticalAnimation: function(){
			var list			= $('.fn_cs_interactive_list_vertical .project_list_wrap ul li');
			
			list.on('mouseenter',function(){
				var element 		= $(this);
				var index 			= element.index(); 	// index starts from 0 (not 1)
				var galleryList		= element.closest('.fn_cs_interactive_list_vertical').find('.gallery_list_wrap ul li');
				var childNumber		= index+1;			// get same child number from second list
				if(!element.hasClass('active')){
					list.removeClass('active');
					element.addClass('active');
					galleryList.removeClass('active');
					element.closest('.fn_cs_interactive_list_vertical').find('.gallery_list_wrap ul li:nth-child('+childNumber+')').addClass('active');
				}
				
				
			});
		},
		
		interactiveListVerticalScrollable: function(){

			var H				= jQuery(window).height();
			var scrollable		= jQuery('.fn_cs_interactive_list_vertical .scrollable');
			var leftPart		= jQuery('.fn_cs_interactive_list_vertical .project_list_wrap .inner_wrap');

			leftPart.css({height:H-180});

			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: H-180}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});

		},
		
		portfolio_demo_second: function(){
			Frel.portfolioMenuAnimation();
			Frel.BgImg();
			Frel.portfolioSecondHover_3d();
			Frel.portfolioSecondListScroll();
		},

		portfolioMenuAnimation: function(){
			var dataHover		= $('.fn_cs_portfolio_demo_second').data('hover-animation');
			var list			= $('.fn_cs_portfolio_demo_second .leftpart ul li');
			var totalNumber		= list.length;
			if(totalNumber < 10){
				totalNumber = '0'+totalNumber;
			}
			$('.fn_cs_portfolio_demo_second .pagination .total').html(totalNumber);
			
			
			list.on('mouseenter',function(){
				var element 	= $(this);
				var rightList	= element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li');
				var liHeight	= element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li').height();
				var index		= element.index();
				
				var liNthChild		= index+1;
				var lastDigit		= parseInt(liNthChild % 10);
				var transformOne 	= -(lastDigit*32);
				var transformZero 	= -((liNthChild-lastDigit) / 10)*32;
				
				$('.fn_cs_portfolio_demo_second .pagination .one .moving_spans').css({transform:'translateY('+transformOne+'px)'});
				$('.fn_cs_portfolio_demo_second .pagination .zero .moving_spans').css({transform:'translateY('+transformZero+'px)'});
				
				if(dataHover == 'slider'){
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						var H	= index*liHeight;
						element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul').css({transform:'translateY(-'+H+'px)'});
					}
				}else{
					if(!element.hasClass('active')){
						list.removeClass('active');
						element.addClass('active');
						rightList.removeClass('active');
						element.closest('.fn_cs_portfolio_demo_second').find('.rightpart ul li:nth-child('+liNthChild+')').addClass('active');
					}
				}
				
			});
			
		},
		
		
		portfolioSecondHover_3d: function(){
			
			var section		= $('.fn_cs_portfolio_demo_second');
				section.each(function(){
					var element			= jQuery(this);
					var sensitivity		= parseInt(element.data('sensitivity'));
					var shine			= element.data('shine-mode');
					
					if(shine == 'yes'){
						shine = true;
					}else if(shine == 'no'){
						shine = false;
					}
					
					element.find(".rightpart_inner").hover3d({
						selector: "ul li",
						sensitivity: sensitivity,
						perspective: 3000,
						shine: shine
					});
				});
				
		},
		
		portfolioSecondListScroll: function(){
							
			var H				= jQuery(window).height();
			var scrollable		= jQuery('.fn_cs_portfolio_demo_second .scrollable');
			var leftPart		= jQuery('.fn_cs_portfolio_demo_second .leftpart');

			leftPart.css({height:H-230});

			scrollable.each(function(){
				var element		= jQuery(this);

				element.css({height: H-230}).niceScroll({
					touchbehavior:false,
					cursorwidth:0,
					autohidemode:true,
					cursorborder:"0px solid #eee"
				});
			});
				
		},
		
		
		portfolio_swiper: function(){
			var section		= $('.fn_cs_portfolio_demo_one');
			section.each(function(){
				var element			= $(this);
				var gutter			= parseInt(element.data('gutter'));
				var speed			= parseInt(element.data('speed'));
				var delay			= parseInt(element.data('delay'));
				var perView			= parseInt(element.data('item_view'));
				var swiperContainer	= element.find('.swiper-container');
				new Swiper(swiperContainer, {
					speed: speed,
					spaceBetween: gutter,
					slidesPerView: perView,
					autoplay: {	delay: delay, disableOnInteraction: false},
					loop: true,
					breakpoints: {
						0: {slidesPerView: 1},
						768: {slidesPerView: 2},
						1200: {slidesPerView: perView}
					}
				});
			});
				
		},
		
		portfolio_hover_3d: function(){
			
			var section		= $('.fn_cs_portfolio_demo_one');
				section.each(function(){
					var element			= jQuery(this);
					var sensitivity		= parseInt(element.data('sensitivity'));
					var shine			= element.data('shine-mode');
					
					if(shine === 'yes'){
						shine = true;
					}else if(shine === 'no'){
						shine = false;
					}
					
					element.find(".swiper-slide").hover3d({
						selector: ".images_wrap",
						sensitivity: sensitivity,
						perspective: 3000,
						shine: shine
					});
				});
				
		},
		
		magnific_popup: function(){
			jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
			jQuery('.popup-youtube').each(function() { // the containers for all your galleries
				jQuery(this).magnificPopup({
					disableOn: 700,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});
			});	
		},
		
		
		partners: function(){
			var carousel 	= $('.fn_cs_partners .owl-carousel');
			var rtlMode		= false;
			if($('body').hasClass('rtl')){
				rtlMode		= true;
			}
			carousel.each(function(){
				$(this).owlCarousel({
					loop: true,
					rtl: rtlMode,
					items: 4,
					lazyLoad: true,
					margin: 40,
					autoplay: true,
					autoplayTimeout: 4000,
					smartSpeed: 2000,
					dots: false,
					nav: false,
					navSpeed: true,
					responsive:{
						0:{items:1},
						480:{items:2},
						768:{items:3},
						1040:{items:3},
						1200:{items:4},
					}
				});	
			});
			
		},
		singleTestimonialParallax: function(){
			Frel.jarallaxEffect();
			Frel.BgImg();
			Frel.ImgToSVG();
		},
		whyChooseUs: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		menuOpenerForChildTheme: function(){
			var switcherOpener				= jQuery('.arlo_fn_header .header_closer');
			switcherOpener.on('click',function(){
				setTimeout(function(){
					Frel.projectCategoryFitler();
				},300);
			});
		},
		projectCategoryFilter: function(){
			Frel.projectCategoryFitler();
			Frel.menuOpenerForChildTheme();
		},
		projectCategoryFitler: function(){
			if($().isotope){
				var items 			= $('.fn_cs_project_category');
				items.each(function(){
					var thisItem 	= $(this);
					var list 		= thisItem.find('.posts_list');
					var filter 		= thisItem.find('.posts_filter');


					// Isotope Filter 
					filter.find('a').off().on('click', function(){
						var selector 	= $(this).attr('data-filter');
						list 			= thisItem.find('.posts_list');
						filter.find('a').removeClass('current');
						$(this).addClass('current');
						list.isotope({ 
							filter				: selector,
							animationOptions	: {
								duration			: 750,
								easing				: 'linear',
								queue				: false
							}
						});
						return false;
					});
				});
			}
			Frel.BgImg();
			$('.fn_cs_project_category ul.posts_list li .item').on('mouseenter', function() {
				var thisItem	= $(this);
				var movingDiv	= thisItem.closest('.fn_cs_project_category').find('.fn_cs_project_moving_title');
				var title		= thisItem.data('title');
				var category	= thisItem.data('category');
				if(title) {
					movingDiv.html('<h3>'+ title + '</h3><span>' + category + '</span>');
					movingDiv.addClass('visible');
				}

				$(document).on('mousemove', function(e) {
					movingDiv.css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				});
			}).on('mouseleave', function() {
				$(this).closest('.fn_cs_project_category').find('.fn_cs_project_moving_title').removeClass('visible');
			});
		},
		progress: function(){
			$('.fn_cs_progress_wrap').each(function() {
				var pWrap 	= $(this);
				pWrap.waypoint({handler: function(){Frel.progressF(pWrap);},offset:'90%'});
			});	
		},
		
		progressF: function(container){
			container.find('.fn_cs_progress').each(function(i) {
				var progress 	= $(this);
				var pValue 		= parseInt(progress.data('value'));
				var pBarWrap 	= progress.find('.fn_cs_bar_wrap');
				var pBar 		= progress.find('.fn_cs_bar');
				pBar.css({width:pValue+'%'});
				setTimeout(function(){pBarWrap.addClass('open');},(i*500));
			});	
		},
		aboutTextSlider: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			if($('.parallax').length > 0){ 
//			  var scene = $('.parallax').get(0);
			  	var scene = $('.parallax');
				scene.parallax();
			}
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
		},
		heroHeaderAllInOne: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			var animateSpan			= $('span.arlo_fn_animation_text');
			animateSpan.each(function(){
				var span		= $(this);
				var items		= span.data('items');
				if(items !== ''){
					items		= items.split(':::');
					span.typed({
						strings: items,
						loop: true,
						startDelay: 1e3,
						backDelay: 2e3
					});	
				}
			});
			
			$('.cons_w_wrapper .fn_cs_hero_header_exclusive > a').off().on('click',function(){
				if($.attr(this, 'href') !== '#'){
					$('html, body').animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 1000);
				}
				return false;
			});
			Frel.jarallaxEffect();
			Frel.kenburnsyShortcode();
			if($(".cons_w_wrapper .fn_glitch").length){
				$(".cons_w_wrapper .fn_glitch").mgGlitch({
					destroy: false,
					glitch: true,
					scale: true,
					blend: true,
					blendModeType: "hue",
					glitch1TimeMin: 200,
					glitch1TimeMax: 400,
					glitch2TimeMin: 10,
					glitch2TimeMax: 100
				});
			}
			if($(".cons_w_wrapper .fn_ripple").length){
				$(".cons_w_wrapper .fn_ripple").ripples({
					resolution: 500,
					perturbance: 0.04
				});
			}
		},
		jarallaxEffect: function(){
			$('.jarallax').each(function(){
				var element			= $(this);
				var	customSpeed		= element.data('speed');

				if(customSpeed !== "undefined" && customSpeed !== ""){
					customSpeed = customSpeed;
				}else{
					customSpeed 	= 0.5;
				}
				element.jarallax({
					speed: customSpeed,
					automaticResize: true
				});
			});
		},
		alphaSliderFunction: function(){
			Frel.BgImg();
			$('.arlo_slider_alpha').each(function(){
				var images 			= $(this);
				var autoplaySwitch 	= images.data('autoplay-switch');
				var effect		 	= images.data('effect');
				var autoplayTime;
				if(autoplaySwitch === 'enabled'){
					autoplayTime = images.data('autoplay-time');
				}else{
					autoplayTime = 80000;
				}
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					preloadImages: false,
					lazyLoading: false,
					autoplay: {
						delay: autoplayTime,
						disableOnInteraction: false
					},
					initialSlide:0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					  },
					effect: effect,
					coverflowEffect: {
						rotate: 30,
						slideShadows: false,
					},
					flipEffect: {
						rotate: 30,
						slideShadows: false,
					},
					cubeEffect: {
						slideShadows: false,
					},
					loop: true,
					pagination: {
						el: images.find('.swiper-pagination'),
						type: 'progressbar',
					},
					speed: 1000
				});
			});	
		},
		
		
		ImgToSVG: function(){
			
			jQuery('img.arlo_w_fn_svg').each(function(){
				var $img 		= jQuery(this);
				var imgClass	= $img.attr('class');
				var imgURL		= $img.attr('src');

				jQuery.get(imgURL, function(data) {
					var $svg = jQuery(data).find('svg');
					if(typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass+' replaced-svg');
					}
					$img.replaceWith($svg);

				}, 'xml');

			});
		},
		
		BgImg: function(){
			
			var div = $('*[data-bg-img]');
			div.each(function(){
				var element = $(this);
				var attrBg	= element.attr('data-bg-img');
				var dataBg	= element.data('bg-img');
				if(typeof(attrBg) !== 'undefined'){
					element.css({backgroundImage:'url('+dataBg+')'});
				}
			});
		},
		lightGallery: function(){
			if(jQuery().lightGallery){
				// FIRST WE SHOULD DESTROY LIGHTBOX FOR NEW SET OF IMAGES

				var gallery = jQuery('.fn_cs_lightgallery');

				gallery.each(function(){
					var element = jQuery(this);
					element.lightGallery(); // binding
					if(element.length){element.data('lightGallery').destroy(true); }// destroying
					jQuery(this).lightGallery({
						selector: ".lightbox",
						thumbnail: 1,
						loadYoutubeThumbnail: !1,
						loadVimeoThumbnail: !1,
						showThumbByDefault: !1,
						mode: "lg-fade",
						download:!1,
						getCaptionFromTitleOrAlt:!1,
					});
				});
			}	
		},
		parallaxMaster: function(){
			var scene = jQuery('#scene');
			scene.parallax();
			Frel.BgImg();
		},
		infoRatingCarousel: function(){
			var owl 		= $('.fn_cs_info_rating .owl-carousel');
			var rtlReady 	= false;
			if($('body').hasClass('rtl')){
				rtlReady 	= true;
			}
			owl.each(function(){
				var el 		= $(this);
				el.owlCarousel({
					loop:false,
					margin:10,
					nav:true,
				 	autoWidth:true,
				 	rtl:rtlReady,
					dots: false
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.lightGallery();
			Frel.infoRatingCalc();
		},
		infoRatingCalc: function(){
			var rating = jQuery('.fn_cs_info_rating');
			rating.each(function(){
				var el 				= jQuery(this);
				var tagline			= el.find('.tagline_holder');
				var spanHeight	 	= el.find('.tagline_holder span').outerWidth() + 15;
				tagline.css({height: spanHeight + 'px'});
			});
			
		},
		miniBoxesForShortcodes: function(){

			var el 		= jQuery('.fn_cs_miniboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= jQuery(element).find('.fn_cs_minibox');
					child.css({height:'auto'});
					var W 		= jQuery(window).width();
					if(W > 460){
						var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		miniSBoxesForShortcodes: function(){

			var el 		= jQuery('.fn_cs_sminiboxes');

			if(el.length){
				el.each(function(index, element) {
					var child	= jQuery(element).find('.fn_cs_sminibox');
					child.css({height:'auto'});
					var W 		= jQuery(window).width();
					if(W > 1200){
						var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();
						var maxHeight 		= Math.max.apply(null, elementHeights);
						child.css({height:maxHeight+'px'}); 
					}
				});  
			}

		},
		serviceShortcode: function(){
			Frel.ImgToSVG();
			Frel.miniBoxesForShortcodes();
		},
		experienceShortcode: function(){
			Frel.BgImg();
		},
		projectStickyShortcode: function(){
			Frel.miniSBoxesForShortcodes();
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		supportBlockShortcode: function(){
			Frel.ImgToSVG();
			Frel.supportBlockBgCalc();
		},
		supportBlockBgCalc: function(){
			var sBlock = jQuery('.fn_cs_support_block .support_block');
			sBlock.each(function(){
				var el = jQuery(this);
				var height = el.outerHeight() - 30;
				el.find('.img_wrap span').css({borderTopWidth: height + 'px'});
			});
		},
		tripleBlogShortcode: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		accordionFunction: function(){
			if($().fn_cs_accordion){
				var acc = $('.fn_cs_accordion');
				acc.each(function(){
					$(this).fn_cs_accordion({
						showIcon: false, //boolean	
						animation: true, //boolean
						closeAble: true, //boolean
						slideSpeed: 500 //integer, miliseconds
					});
				});
			}
			Frel.ImgToSVG();
		},
		locationListFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		mainSliderWithContnetFunction: function(){
			jQuery('.fn_cs_main_slider_with_content').each(function(){
				var images			= jQuery(this).find('.inner');
				var autoDelay		= jQuery(this).data('autoplay-delay');
				var imagesSlider 	= new Swiper(images, {
					centeredSlides: false,
					slideToClickedSlide: false,
					slidesPerView: 1,
					spaceBetween: 0,
					navigation: {
						nextEl: images.find('.fn_next'),
						prevEl: images.find('.fn_prev'),
					 },
					effect: 'slide',
					loop: true,
					fadeEffect: {
						crossFade: true
					  },
					pagination: {
						el: images.find('.swiper_pagination'),
						type: 'custom',
						renderCustom: function (swiper, current, total) {
							if(current<10){current = '0' + current;}
							if(total<10){total = '0' + total;}
						  return '<span><span class="current">' + current + '</span> / <span class="total">' + total + '</span></span>';
						},
				  	},
					autoplay: {
						delay: autoDelay,
						disableOnInteraction: false,
					},
				});
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		introduceFunction: function(){
			Frel.lightGallery();
			Frel.introduceCalcFunction();
		},
		introduceCalcFunction: function(){
			jQuery('.fn_cs_introduce_wrap').each(function(){
				var el 		= jQuery(this);
				var introW	= el.find('.fn_cs_introduce').outerWidth();
				var wings	= el.find('span.wing12, span.wing22');
				if(wings.length){
					wings.css({borderRightWidth:( Math.floor((introW * 0.7)) - 40) + 'px'});
				}				
			});
		},
		isotopeFunction: function(){
			var masonry = jQuery('.fn_cs_masonry');
			if(jQuery().isotope){
				masonry.each(function(){
					jQuery(this).isotope({
					  itemSelector: '.fn_cs_masonry_in',
					  masonry: {

					  }
					});
				});
			}
		},
		principlesFunction: function(){
			Frel.isotopeFunction();
		},
		counterWithContentFunction: function(){
			var element = jQuery('.fn_cs_counter');
			element.each(function() {
				var el = jQuery(this);
				el.waypoint({
					handler: function(){
						if(!el.hasClass('stop')){
							el.addClass('stop').countTo({
								refreshInterval: 50,
								formatter: function (value, options) {
									return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
								},	
							});
						}
					},
					offset:'90%'	
				});
			});	
			Frel.BgImg();
			Frel.lightGallery();
			Frel.ImgToSVG();
		},
		principlesModernFunction: function(){
			Frel.ImgToSVG();
			Frel.BgImg();
			Frel.miniBoxesForShortcodes();
			Frel.principleModernShapeCalc();
		},
		principleModernShapeCalc: function(){
			var inner = $('.fn_cs_principles_modern .inner');
			inner.each(function(){
				var el = $(this);
				var shape = el.find('.shape2');
				shape.css({borderLeftWidth:Math.floor(el.outerWidth()-30) + 'px'});
			});
		},
		serviceQueryFunction: function(){
			var owl			 	= jQuery('.fn_cs_service_query .owl-carousel');
			var rtlReady 		= false;
			if($('body').hasClass('rtl')){
				rtlReady		= true;
			}
			owl.each(function(){
				var el 			= jQuery(this);
				var columnCount = el.closest('.fn_cs_service_query').data('column-count');
				var count 		= 4;
				if($.isNumeric(columnCount)){count = columnCount;}
				var count14,count12,count48;
				switch(count){
					case 5: count14 = 5; count12 = 4; count48 = 2; break;
					case 4: count14 = 4; count12 = 3; count48 = 2; break;
					case 3: count14 = 3; count12 = 3; count48 = 2; break;
					case 2: count14 = 2; count12 = 2; count48 = 2; break;
					case 1: count14 = 1; count12 = 1; count48 = 1; break;
				}
				el.owlCarousel({
					loop:true,
					margin:0,
					nav:false,
				 	items:4,
				 	rtl:rtlReady,
					dots: false,
					responsive : {
						0 : {items : 1},
						480 : {items : count48},
						1200 : {items : count12},
						1400 : {items : count14}
					}
				});
				var prev = el.parent().parent().find('.owl_control .fn_prev');
				var next = el.parent().parent().find('.owl_control .fn_next');
				prev.on('click',function(){
					el.trigger('prev.owl');
					return false;
				});
				next.on('click',function(){
					el.trigger('next.owl');
					return false;
				});
				Frel.ImgToSVG();
			});
			Frel.ImgToSVG();
			Frel.BgImg();
		},
		kenburnsyShortcode: function(){
			var kenburns = jQuery('.fn_cs_kenburnsy');
			kenburns.each(function(){
				var element = jQuery(this);
				var duration = element.data('interval');
				element.kenburnsy({
					fullscreen: true,
					duration: duration,
				});
			});
		},
		
		
		// made by karinbay
		
		
		
		introAllFunctions: function(){
			Frel.BgImg();
			Frel.introFilter();
		},

		introTestimonialsFunctions: function(){
			Frel.BgImg();
			Frel.ImgToSVG();
			Frel.testiCarousel();
		},

		testiCarousel: function(){
			var carousel 	= $('.fn_cs_intro_testimonials .owl-carousel');
			var rtlMode		= false;
			if($('body').hasClass('rtl')){
				rtlMode		= true;
			}
			carousel.each(function(){
				$(this).owlCarousel({
					loop: true,
					rtl: rtlMode,
					items: 1,
					lazyLoad: true,
					margin: 0,
					autoplay: true,
					autoplayTimeout: 5000,
					smartSpeed: 2000,
					dots: false,
					nav: false,
					navSpeed: true,
				});	
			});

		},

		introFilter: function(){
			// Needed variables
			var list 		 = jQuery('.fn_cs_demo_list .demo_wrap ul');
			var filter		 = jQuery('.fn_cs_demo_list .filter_wrap ul');

			if(filter.length){
				// Isotope Filter 
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});	

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});	
			}	
		},
		
		
		
		
		
		
	};
	
	$( window ).on( 'elementor/frontend/init', Frel.init );
	
	
	$( window ).on( 'elementor/frontend/init', Frel.miniBoxesForShortcodes );
	$( window ).on('resize',function(){
		Frel.portfolio_demo_second,
		Frel.interactiveListVertical,
		Frel.interactiveListVerticalHalf,
		Frel.interactiveListHorizontalHalf,
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.filterj();
		Frel.isotopeFunction();
		Frel.principleModernShapeCalc();
		setTimeout(function(){
			Frel.miniBoxesForShortcodes();
			Frel.miniSBoxesForShortcodes();
			Frel.supportBlockBgCalc();
			Frel.introduceCalcFunction();
			Frel.isotopeFunction();
			Frel.filterj();
			Frel.principleModernShapeCalc();
		},700);
	});
	$( window ).on('load',function(){
		Frel.miniBoxesForShortcodes();
		Frel.miniSBoxesForShortcodes();
		Frel.supportBlockBgCalc();
		Frel.introduceCalcFunction();
		Frel.isotopeFunction();
		Frel.filterj();
		Frel.principleModernShapeCalc();
	});
	
})(jQuery, window.elementorFrontend);