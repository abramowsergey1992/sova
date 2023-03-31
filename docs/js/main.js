$(function(){})
$(function(){})
$(function(){})
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
		dataloc = data;
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
						$(
							"#location-map-prev-" +
								e.get("target").options.get("id")
						)
							.stop()
							.slideDown();
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
				location.push(dataloc);
				console.log("s", dataloc);
				let city = $("#filter-city option:selected").attr("value");
				let status = $("#filter-status option:selected").attr("value");

				if (city == "all" || city == undefined) {
					$(".location-prev").removeClass("_city-hidden");
				} else {
					location.filter(function (l) {
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
				console.log("loca", location);
				if (status == "all" || status == undefined) {
					$(".location-prev").removeClass("_status-hidden");
				} else {
					location.filter(function (l) {
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
				locationRender(location);
			});
			locationRender(data.locations);
		}, 2000);
	});
}


$(function(){})
$(function(){})
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

function aosInit() {
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
}

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
}

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

	// $(".filters__btn[data-filter]").click(function () {
	// 	let wrap = $(this).closest(".block");
	// });
	// wrap.find(".filters__btn").removeClass("_active");
	// $(this).addClass("_active");

	$(".select2").select2({ minimumResultsForSearch: -1 });
	document
		.querySelectorAll(".btn-1,.btn-2,.btn-3, .btn-4")
		.forEach(
			(button) =>
				(button.innerHTML =
					"<span class='button-content'><span>" +
					button.textContent +
					"</span><span>" +
					button.textContent +
					"</span></span>")
		);
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

function popupClose(popup) {
	let $popup = $(popup);
	$popup.removeClass("_animate");
	setTimeout(function () {
		$popup.removeClass("_display");
	}, 400);
}
function popupOpen(popup) {
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
	$(".popup__overlay ,.popup__close").click(function () {
		console.log("#" + $(this).closest(".popup").attr("id"));
		popupClose("#" + $(this).closest(".popup").attr("id"));
	});
}

function video() {
	$(".video-click-play").click(function () {
		this.play();
	});
}

$(function () {
	header();
	form();
	aosInit();
	paginator();
	bigslider();
	locationlist();
	mixiltup();
	popup();
	video();
	feedbackForm();
	locationPage();
});

$(function(){})
function paginator() {
	$(".paginator__more").click(function () {
		$(this).closest(".paginator").addClass("_view-hidden");
	});
}
