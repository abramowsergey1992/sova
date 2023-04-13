$(function(){})
$(function(){})
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
		spaceBetween: 50,
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
		$(".front-structura-item").removeClass("_rotate");
		$(this).closest(".front-structura-item").addClass("_rotate");
	});
	let input = $(".front-steps__input").data("ionRangeSlider");
	frontSteps.on("slideChange", function () {
		console.log("sss");
		let from = frontSteps.activeIndex + 1;
		$(".front-steps__input").val(from);
		$circle.attr("procent", from);
		$(".front-steps__input").attr("value", from);
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

function locationPage() {
	$(".location-top__down").click(function () {
		var body = $("html, body");
		body.stop().animate(
			{ scrollTop: window.innerHeight },
			500,
			"swing",
			function () {}
		);
	});
}

function locationlist() {
	let $map = $("#locations-map");
	$(".location-prev__gallery").each(function () {
		const lpb = new Swiper(this, {
			speed: 400,
			navigation: {
				nextEl: $(this).find(".location-prev__gallery-next")[0],
				prevEl: $(this).find(".location-prev__gallery-prev")[0],
			},
			spaceBetween: 10,
		});
	});

	const locationlist = new Swiper(".locationlist-slide", {
		speed: 400,
		autoHeight: true,
		allowTouchMove: false,
		spaceBetween: 100,
	});
	$(".locations-page  .filters__btn").click(function () {
		$(".locations-page  .filters__btn").removeClass("_active");
		$(this).addClass("_active");
		locationlist.slideTo($(this).data("slide"));
	});
	$(".location-map-prev__slider").each(function () {
		const lpm = new Swiper(this, {
			speed: 400,
			pagination: {
				el: $(this).find(".location-map-prev__slider-pagi")[0],
				type: "bullets",
				clickable: true,
			},
			spaceBetween: 10,
		});
	});
	let dataloc;
	$.getJSON($map.data("json"), function (data) {
		dataloc = data.locations;
		setTimeout(function () {
			var myMap = new ymaps.Map(
				"locations-map",
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

$(function(){})
$(function(){})
$(function(){})

function bigslider() {
	$(".big-slider").each(function () {
		let $th = $(this);
		console.log(
			"big-slider__full-slider",
			$th.find(".big-slider__full-slider")[0]
		);
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
				setWrapperSize: true,
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
				setWrapperSize: true,
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
			setWrapperSize: true,
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
		// const
	});
}

function feedbackForm() {
	let valid = $("#feedback-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#feedback-form .btn-1").attr("disabled", "disabled");
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					popupOpen("#feedback-popup-thanks");
					$("#feedback-form .btn-1").removeAttr("disabled");
				},
				error: function () {
					popupOpen("#feedback-popup-error");
					$("#feedback-form btn-1").removeAttr("disabled");
				},
			});
		},
	});
	let valid2 = $("#feedback-popup-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#feedback-popup-form .btn-1").attr("disabled", "disabled");
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					popupOpen("#feedback-popup-thanks");
					$("#feedback-popup-form .btn-1").removeAttr("disabled");
				},
				error: function () {
					popupOpen("#feedback-popup-error");
					$("#feedback-popup-form btn-1").removeAttr("disabled");
				},
			});
		},
	});
}

$(function(){})
function form() {
	$("._mask-int").each(function () {
		Inputmask("9{1,5}").mask(this);
	});
	$("._mask-oneint").each(function () {
		Inputmask({ mask: "9", placeholder: "" }).mask(this);
	});
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-time").each(function () {
		Inputmask("9{1,2}:9{1,2}").mask(this);
	});
	$("._mask-date,._mask-calendar").each(function () {
		Inputmask("99.99.9999").mask(this);
	});
	$(".filters").each(function () {
		$(this)
			.find(".filters__flex")
			.append('<div class="filters__bg"></div>');
	});
	function filtersBg() {
		$(".filters").each(function () {
			filterBg = $(this).find(".filters__bg");

			filterActive = $(this)
				.find(".mixitup-control-active,._active")
				.first();

			filterBg.css({
				width: filterActive.outerWidth(),
				height: filterActive.outerHeight(),
				top: filterActive.position().top,
				left: filterActive.position().left,
			});
		});
	}
	$(".filters__btn").click(function () {
		setTimeout(function () {
			filtersBg();
		}, 50);
	});
	filtersBg();
	window.addEventListener(
		"resize",
		function (event) {
			filtersBg();
		},
		true
	);
	// $(".filters__btn[data-filter]").click(function () {
	// 	let wrap = $(this).closest(".block");
	// });
	// wrap.find(".filters__btn").removeClass("_active");
	// $(this).addClass("_active");

	$(".select2").select2({ minimumResultsForSearch: -1 });
	$(".btn-1,.btn-2,.btn-3, .btn-4, .btn-5").each(function () {
		$(this).html(
			`<span class='button-content'><span>${$(
				this
			).html()}</span><span>${$(this).html()}</span></span>`
		);
	});
}

function header() {
	let menu = $(".header__hidden-menu");
	$(".header__menu-btn").click(function () {
		$(this).toggleClass("_open");
		if ($(this).hasClass("_open")) {
			menu.stop().slideDown({
				start: function () {
					$(this).css({
						display: "flex",
					});
				},
			});
		} else {
			menu.stop().slideUp();
		}
	});
	$(window).scroll(() => {
		let currentScroll = $(window).scrollTop();
		if (currentScroll > 5) {
			$(".header").addClass("_bg");
		} else {
			$(".header").removeClass("_bg");
		}
	});
}

function hoverCursor() {
	if ($(".hoverCursor").length) {
		$(".hoverCursor").each(function () {
			let wrapper = $(this).parent();
			let cursor = $(this);
			wrapper.on("mousemove", function (e) {
				let position = $(this).offset();
				let left = e.pageX - position.left - 70 / 2;
				let top = e.pageY - position.top - 70 / 2;
				// cursor.css({
				// 	left: left,
				// 	top: top,
				// });
				gsap.to(cursor, 0.03, {
					left: left,
					top: top,
					ease: Power4.easOut,
				});
			});
		});
	}
}

function mixiltup() {
	if ($(".mixiltup").length) {
		var mixer = mixitup(".mixiltup", {
			selectors: {
				target: ".mix",
			},
		});
	}
}

$(function(){})
function paginator() {
	$(".paginator__more").click(function () {
		$(this).closest(".paginator").addClass("_view-hidden");
	});
}

function popupClose(popup) {
	let $popup = $(popup);
	$popup.removeClass("_animate");
	setTimeout(function () {
		$popup.removeClass("_display");
		$("body").removeClass("_popup-open");
	}, 400);
}
function popupOpen(popup) {
	$("body").addClass("_popup-open");
	if ($(".popup._display").length) {
		$(".popup._display").each(function () {
			popupClose("#" + $(this).attr("id"));
		});
	}
	let $popup = $(popup);
	$popup.addClass("_display");
	setTimeout(function () {
		$popup.addClass("_animate");
	}, 100);
}
function popup() {
	$("[data-popup]").click(function () {
		popupOpen($(this).data("popup"));
	});
	$(".open-video").click(function () {
		$(".video-popup").fadeIn();
		$(".video-popup__wrap").html(
			'<video autoplay src="' + $(".open-video").data("video") + '"/>'
		);
	});
	$(".video-popup__overlay ,.video-popup__close").click(function () {
		$(this)
			.closest(".video-popup")
			.stop()
			.fadeOut(function () {
				$(".video-popup__wrap").html("");
			});
	});
	$(".popup__overlay ,.popup__close").click(function () {
		popupClose("#" + $(this).closest(".popup").attr("id"));
	});
	$(".popup-location__overlay ,.popup-location__close").click(function () {
		$(this).closest(".popup-location").fadeOut();
	});
}

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
var width = window.innerWidth;
window.addEventListener("resize", () => {
	if (width != window.innerWidth) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		width = window.innerWidth;
	}
});

function video() {
	$(document).click(function (e) {
		if ($(e.target).closest(".video-click-play").length) {
			return;
		}

		$(".video-click-play").each(function () {
			$(this).removeClass("_play");
			this.pause();
		});
	});
	$(".video-click-play").click(function () {
		this.play();
		let th = this;
		$(this).addClass("_play");
		this.onended = function () {
			th.currentTime = 0;
			th.classList.remove("_play");
		};
	});
}

function aosInit() {
	$(".t-animate").each(function () {
		var words = $(this).text().split(" ");
		$(this).empty();
		let delay = 0;
		let text = $(this);
		$.each(words, function (i, v) {
			text.append(
				$("<span>").html(
					'<span style="transition-delay:' +
						delay +
						'ms">' +
						v +
						"&ensp;</span>"
				)
			);
			delay += 100;
		});
	});
	setTimeout(function () {
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
			initClassName: "aos-init", // class applied after initialization
			animatedClassName: "aos-animate", // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 600, // values from 0 to 3000, with step 50ms
			easing: "ease", // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
		});
	}, 100);
}

$(function () {
	header();
	form();
	aosInit();
	hoverCursor();
	paginator();
	bigslider();
	locationlist();
	mixiltup();
	popup();
	video();
	feedbackForm();
	locationPage();
	frontPage();
});
