jQuery(document).ready(function(){
	jQuery('.next').click(function(){
		jQuery('.nav-tabs > li > .active').parent('.nav-item').next('li').find('a').trigger('click');
	});
	jQuery('.prev').click(function(){
		jQuery('.nav-tabs > li > .active').parent('.nav-item').prev('li').find('a').trigger('click');
	});
	jQuery(document).ready(function(){
		jQuery('.customer-logos').slick({
			slidesToShow: 3.5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1500,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			}]
		});
	});
	/* Video Slider - Swiper */
	var videoSlider = new Swiper('.video-slider', {
        pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		  },
    });
});
