function bigslider() {
	$(".big-slider").each(function () {
		let $th = $(this);
		$th.find(".big-slider__thumb-slider").html(
			$th.find(".big-slider__full-slider").html()
		);

		const sliderThumb = new Swiper(
			$th.find(".big-slider__thumb-slider")[0],
			{
				slidesPerView: 8,
				loop: true,
				spaceBetween: 28,
				watchSlidesProgress: true,
				breakpoints: {
					320: {
						slidesPerView: "auto",
					},

					992: {
						slidesPerView: 7,
					},
					1300: {
						slidesPerView: 8,
					},
				},
			}
		);
		const sliderContent = new Swiper(
			$th.find(".big-slider__content-slider")[0],
			{
				slidesPerView: 1,
				effect: "fade",
				fadeEffect: {
					crossFade: true,
				},
				spaceBetween: 28,
				allowTouchMove: false,
			}
		);
		const slider = new Swiper($th.find(".big-slider__full-slider")[0], {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			pagination: {
				el: $th.find(".big-slider__pagination")[0],
				type: "fraction",
			},
			navigation: {
				nextEl: $th.find(".big-slider__bottom-nav-next")[0],
				prevEl: $th.find(".big-slider__bottom-nav-prev")[0],
			},
			thumbs: {
				swiper: sliderThumb,
			},
			on: {
				slideChange: function (swiper) {
					sliderContent.slideTo(swiper.realIndex);
				},
			},
		});
	});
}
