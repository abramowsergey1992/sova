function frontPage() {
	if ($("#front-top").length) {
		$(".download-presentation").css(
			"top",
			$(".front-top__right img").height() + 110
		);
		$("._square").each(function () {
			$(this).css("min-height", $(this).outerWidth());
		});
		smScroll = window.innerHeight * 2;
		function procent(number1, number2) {
			return (number2 / 100) * number1;
		}
		var controller = new ScrollMagic.Controller();
		var startpin = new ScrollMagic.Scene({
			duration: smScroll,
		})
			.setPin("#front-top")
			.addTo(controller);
		new ScrollMagic.Scene({
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__back ", 1, {
					opacity: 0,
					top: -1 * procent(30, smScroll),
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__bg", 1, {
					translateY: 0,
					translateX: 0,
					right: 0,
					bottom: 0,
					scale: 1,
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(3, smScroll),
			duration: procent(3, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top  .download-presentation", 1, {
					opacity: 0,
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(30, smScroll),
			duration: procent(15, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__bbg ", 1, {
					opacity: 1,
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(15, smScroll),
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__fw-str1", 1, {
					right: "0%",
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);

		new ScrollMagic.Scene({
			offset: procent(15, smScroll),
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__fw-str2", 1, {
					left: "0%",
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(25, smScroll),
			duration: procent(10, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__anim-opacity", 1, {
					opacity: 1,
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(70, smScroll),
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__fw-str1", 1, {
					right: "-100vw",
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);

		new ScrollMagic.Scene({
			offset: procent(70, smScroll),
			duration: procent(30, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__fw-str2", 1, {
					left: "-100vw",
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);
		new ScrollMagic.Scene({
			offset: procent(90, smScroll),
			duration: procent(55, smScroll),
		})
			.setTween(
				TweenMax.to(".front-top__anim-opacity-2 ", 1, {
					opacity: 0,
					ease: Linear.easeNone,
				})
			)
			.addTo(controller);

		$(window).on("resize", function () {
			$(".download-presentation").css(
				"top",
				$(".front-top__right img").height() + 110
			);
			$("._square").each(function () {
				$(this).css("min-height", $(this).outerWidth());
			});
		});
		const youGet = new Swiper(".you-get__slider", {
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: $(window).width() > 900 ? false : true,
			allowTouchMove: false,
		});
		const frontLocImg = new Swiper(".front-loc__slider-img", {
			slidesPerView: 1,
			speed: 1000,
			watchSlidesProgress: true,
			effect: "creative",
			pagination: {
				el: ".front-loc__pagi",
				type: "fraction",
			},
			creativeEffect: {
				prev: {
					// will set `translateZ(-400px)` on previous slides
					translate: ["-50%", 0, -400],
				},
				next: {
					// will set `translateX(100%)` on next slides
					translate: ["100%", 0, 0],
				},
			},
		});
		const frontLocContent = new Swiper(".front-loc__locations", {
			slidesPerView: 1,
			loop: false,
			thumbs: {
				swiper: frontLocImg,
			},
			pagination: {
				el: ".front-loc__locations-pagi",
				type: "fraction",
			},
			navigation: {
				nextEl: ".front-loc__locations-next",
				prevEl: ".front-loc__locations-prev",
			},
		});
		const swiper = new Swiper(".front-structura__slider", {
			slidesPerView: 1.1,
			spaceBetween: 18,
			breakpoints: {
				480: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 2.5,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});

		const cases = new Swiper(".front-cases__swiper", {
			slidesPerView: 1,
			spaceBetween: 16,
			breakpoints: {
				992: {
					slidesPerView: 1.5,
				},
			},
			mousewheel: {
				forceToAxis: true,
			},
			navigation: {
				nextEl: ".front-cases__next",
				prevEl: ".front-cases__prev",
			},
		});
		const frontSteps = new Swiper(" .front-steps__slider", {
			slidesPerView: 1,
		});

		const frontTopLeftContent = new Swiper(".front-top__left-swiper ", {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 5000,
			},
		});
		const frontNews = new Swiper(" .front-news__slider", {
			slidesPerView: 1,
			speed: 800,
			allowTouchMove: false,
		});

		$(".front-news__tab").click(function () {
			$(".front-news__tab").removeClass("_active");
			$(this).addClass("_active");
			let slide = 0;
			if ($(this).data("filter") == "news") {
				slide = 0;
			}
			if ($(this).data("filter") == "publication") {
				slide = 1;
			}
			frontNews.slideTo(slide);
		});
		$(".you-get .filters__btn").click(function () {
			$(".you-get .filters__btn").removeClass("_active");
			$(this).addClass("_active");
			youGet.slideTo($(this).data("slide"));
		});
		let $circle = $(".front-steps__container-svg circle");
		let mr = 1822;

		$(".front-steps__input").ionRangeSlider({
			min: 1,
			max: 6,
			onChange: function (data) {
				frontSteps.slideTo(data.from - 1);
				$circle.attr("procent", data.from);
				$(".front-steps__input-grid span").each(function () {
					if (parseInt($(this).text()) <= data.from) {
						$(this).addClass("_active");
					} else {
						$(this).removeClass("_active");
					}
				});
			},
		});
		$(".front-structura-item ").hover(
			function () {
				$(".front-structura-item").removeClass("_rotate");
				$(this).addClass("_rotate");
			},
			function () {
				$(".front-structura-item").removeClass("_rotate");
			}
		);
		let input = $(".front-steps__input").data("ionRangeSlider");
		frontSteps.on("slideChange", function () {
			console.log("sss");
			let from = frontSteps.activeIndex + 1;
			console.log(
				from,
				$(".front-steps__input").val(),
				from != $(".front-steps__input").val()
			);
			if (from != $(".front-steps__input").val()) {
				$(".front-steps__input").val(from);
				$circle.attr("procent", from);
				$(".front-steps__input").attr("value", from);
				input.update({
					from: from,
					to: from,
				});
			}
			$(".front-steps__input-grid span").each(function () {
				if (parseInt($(this).text()) <= from) {
					$(this).addClass("_active");
				} else {
					$(this).removeClass("_active");
				}
			});
		});
		$(".front-steps__input-grid span").click(function () {
			let from = parseInt($(this).text());
			$(".front-steps__input").val(from);
			frontSteps.slideTo(from - 1);
			$circle.attr("procent", from);
			$(".front-steps__input").attr("value", from);
			console.log(input);
			input.update({
				from: from,
				to: from,
			});
			$(".front-steps__input-grid span").each(function () {
				if (parseInt($(this).text()) <= from) {
					$(this).addClass("_active");
				} else {
					$(this).removeClass("_active");
				}
			});
		});

		let $map = $("#front-loc-map");

		ymaps.ready(init);
		function init() {
			var myMap = new ymaps.Map(
				"front-loc-map",
				{
					center: [55.30954, 37.721587],
					zoom: 6,
					controls: [],
				},
				{
					searchControlProvider: "yandex#search",
				}
			);
			function locationRender() {
				myMap.geoObjects.removeAll();
				$(".front-loc__slide-filter").each(function () {
					if (!$(this).hasClass("_hidden")) {
						myPlacemark = new ymaps.Placemark(
							$(this).data("coord"),
							{
								balloonContent: $(this).find(
									".front-loc-content__title"
								),
							},
							{
								id: $(this).data("id"),
								balloonCloseButton: false,
								hideIconOnBalloonOpen: false,
								iconLayout: "default#image",
								iconImageHref: $map.data("icon"),
								iconImageSize: [50, 50],
								iconImageOffset: [-25, -25],
							}
						);

						myPlacemark.events.add(["balloonopen"], function (e) {
							e.get("target").options.set(
								"iconImageHref",
								$map.data("activeicon")
							);
							console.log(
								e.get("target").geometry.getCoordinates()
							);
							console.log(e.get("target").options.get("id"));
							myMap.panTo(
								e.get("target").geometry.getCoordinates()
							);
							$(".location-map-prev").stop().slideUp();
							var smallScreen =
								window.matchMedia("(max-width: 992px)");
							if (smallScreen.matches) {
								console.log("sss");
								$(
									"#popup-location-" +
										e.get("target").options.get("id")
								)
									.stop()
									.fadeIn();
							} else {
								let i = 0;
								frontLocContent.slides.each((slide) => {
									if (
										slide.dataset.id ==
										e.get("target").options.get("id")
									) {
										frontLocContent.slideTo(i);
									}
									i++;
								});
							}
						});
						myPlacemark.events.add(["balloonclose"], function (e) {
							e.get("target").options.set(
								"iconImageHref",
								$map.data("icon")
							);
						});
						myMap.geoObjects.add(myPlacemark);
					}
				});
			}
			locationRender();
			$(".front-loc .filters__btn").click(function () {
				$(".front-loc .filters__btn").removeClass("_active");
				$(this).addClass("_active");
				let filter = $(this).data("filter");
				if (filter != "all") {
					$(".front-loc__slide-filter").each(function () {
						if (filter != $(this).data("filter")) {
							$(this).addClass("_hidden");
							$(this).removeClass("swiper-slide");
						} else {
							$(this).removeClass("_hidden");
							$(this).addClass("swiper-slide");
						}
					});
				} else {
					$(".front-loc__wrap  .swiper-wrapper > div").removeClass(
						"_hidden"
					);
					$(".front-loc__wrap  .swiper-wrapper > div").addClass(
						"swiper-slide"
					);
				}
				frontLocContent.update();
				frontLocContent.updateProgress();
				locationRender();
				// frontLocContent.slideTo($(this).data("slide"));
			});
		}
		$(".front-loc__btn-toogle-map").click(function () {
			$(this).css("display", "none");
			$(".front-loc").addClass("_map");
			$(".front-loc").removeClass("_list");
			$(".front-loc__btn-toogle-list").css("display", "block");
			$(".front-loc__map").fadeIn();
		});
		$(".front-loc__btn-toogle-list").click(function () {
			$(this).css("display", "none");
			$(".front-loc__btn-toogle-map").css("display", "block");
			$(".front-loc__map").fadeOut();
			$(".front-loc").removeClass("_map");
			$(".front-loc").addClass("_list");
		});
	}
}
