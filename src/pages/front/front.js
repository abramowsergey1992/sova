function frontPage() {
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
		$("._square").each(function () {
			$(this).css("min-height", $(this).outerWidth());
		});
	});
	const youGet = new Swiper(".you-get__slider", {
		slidesPerView: 1,
		spaceBetween: 35,
		autoHeight: $(window).width() > 900 ? false : true,
		allowTouchMove: false,
	});
	const frontLocImg = new Swiper(".front-loc__slider-img", {
		slidesPerView: 1,
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
		allowTouchMove: false,
	});

	const frontTopLeftContent = new Swiper(".front-top__left-swiper ", {
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
		},
	});
	const frontNews = new Swiper(" .front-news__slider", {
		slidesPerView: 1,
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
		to: 1,
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
	$(".front-structura-item .front-structura-item__front").click(function () {
		$(this).closest(".front-structura-item").addClass("_rotate");
	});
	let input = $(".front-steps__input").data("ionRangeSlider");
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
			$(".front-loc__wrap  .swiper-wrapper > div").removeClass("_hidden");
			$(".front-loc__wrap  .swiper-wrapper > div").addClass(
				"swiper-slide"
			);
		}
		frontLocContent.update();
		frontLocContent.updateProgress();
		// frontLocContent.slideTo($(this).data("slide"));
	});
	let $map = $("#front-loc-map");
	let dataloc;
	$.getJSON($map.data("json"), function (data) {
		dataloc = data.locations;
		setTimeout(function () {
			var myMap = new ymaps.Map(
				"front-loc-map",
				{
					center: [55.30954, 37.721587],
					zoom: 8,
					controls: [],
				},
				{
					searchControlProvider: "yandex#search",
				}
			);
			function locationRender(locations) {
				locations.forEach((loc) => {
					myPlacemark = new ymaps.Placemark(
						loc.coord,
						{
							balloonContent: loc.title,
						},
						{
							id: loc.id,
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
						console.log(e.get("target").geometry.getCoordinates());
						console.log(e.get("target").options.get("id"));
						myMap.panTo(e.get("target").geometry.getCoordinates());
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
							$(
								"#location-map-prev-" +
									e.get("target").options.get("id")
							)
								.stop()
								.slideDown();
						}
					});
					myPlacemark.events.add(["balloonclose"], function (e) {
						e.get("target").options.set(
							"iconImageHref",
							$map.data("icon")
						);
					});
					myMap.geoObjects.add(myPlacemark);
				});
			}
			$("#filter-city").change(function () {
				let coord = $("#filter-city option:selected").data("coord");
				console.log(coord);
				if (coord.length && coord != undefined) {
					console.log(coord.split(","));
					myMap.panTo([
						parseFloat(coord.split(",")[0]),
						parseFloat(coord.split(",")[1]),
					]);
				}
			});
			$("#filter-status, #filter-city").change(function () {
				let location = [];
				myMap.geoObjects.removeAll();
				$(".location-map-prev").stop().slideUp();
				location = Array.from(dataloc);
				console.log("s", location);
				let city = $("#filter-city option:selected").attr("value");
				let status = $("#filter-status option:selected").attr("value");

				if (city == "all" || city == undefined) {
					$(".location-prev").removeClass("_city-hidden");
				} else {
					location = location.filter(function (l) {
						return l.city == city;
					});
					$(".location-prev").each(function () {
						if (city == $(this).data("city")) {
							$(this).removeClass("_city-hidden");
						} else {
							$(this).addClass("_city-hidden");
						}
					});
				}

				if (status == "all" || status == undefined) {
					$(".location-prev").removeClass("_status-hidden");
				} else {
					location = location.filter(function (l) {
						return l.tags.indexOf(status) >= 0;
					});
					$(".location-prev").each(function () {
						if (
							$(this).data("status").split("|").indexOf(status) >=
							0
						) {
							$(this).removeClass("_status-hidden");
						} else {
							$(this).addClass("_status-hidden");
						}
					});
				}
				console.log("location", location);
				locationRender(location);
			});
			locationRender(data.locations);
		}, 2000);
	});
}
