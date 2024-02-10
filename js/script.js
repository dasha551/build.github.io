
	// Banner START
	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	// Banner END

	// Reviews START
	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 1000,
		spaceBetween: 20,
		pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		  }
		  
	});
	
	

	// Reviews END


// REV START 
const swiperSwiper = new Swiper('.reviews-swiper-2', {
	speed: 1000,
	spaceBetween: 0,
	autoHeight: true,
	navigation: {
		nextEl: '.reviews-swiper-2 .swiper-button-next',
		prevEl: '.reviews-swiper-2 .swiper-button-prev',
	},
	pagination: {
		el: '.reviews-swiper-2 .swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
});

// REV END 