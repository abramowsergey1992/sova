function header() {
	let menu = $(".header__hidden-menu");
	let btnMenu = $(".header__menu-btn");
	let overlay = $(".header__hidden-menu-overlay");
	let isFront = $(".front-page").length;
	let header = $(".header");
	var $page = $("html, body");
	if (window.location.hash) {
		if ($(window.location.hash).length) {
			$page.animate(
				{
					scrollTop: $(window.location.hash).offset().top - 80,
				},
				400
			);
		}
	}
	$('a[href*="#"]').click(function () {
		if ($($.attr(this, "href")).length) {
			$page.animate(
				{
					scrollTop: $($.attr(this, "href")).offset().top - 80,
				},
				400
			);
		}
		return false;
	});
	function headerOpen() {
		$("body").addClass("_open-menu");
		overlay.stop().fadeIn();
		menu.stop().slideDown({
			start: function () {
				$(this).css({
					display: "flex",
				});
			},
		});
		btnMenu.addClass("_open");
	}
	function headerClose() {
		overlay.stop().fadeOut();
		$("body").removeClass("_open-menu");
		btnMenu.removeClass("_open");
		menu.stop().slideUp();
	}
	btnMenu.click(function () {
		if ($(this).hasClass("_open")) {
			headerClose();
		} else {
			headerOpen();
		}
	});
	overlay.click(function () {
		headerClose();
	});

	let prevscroll = $(window).scrollTop();
	if (isFront) {
		prevscroll = window.innerHeight * 2;
	}
	if (prevscroll > 5) {
		header.addClass("_bg");
	} else {
		header.removeClass("_bg");
	}

	$(window).scroll(() => {
		if (btnMenu.hasClass("_open")) {
			headerClose();
		}
		let currentScroll = $(window).scrollTop();
		if (currentScroll > 5) {
			header.addClass("_bg");
		} else {
			header.removeClass("_bg");
		}
		if (currentScroll > prevscroll) {
			header.addClass("_header-hidden");
		} else {
			header.removeClass("_header-hidden");
		}
		if (currentScroll <= 10) {
			header.removeClass("_header-hidden");
		}
		prevscroll = currentScroll;
		if (isFront && prevscroll <= window.innerHeight * 2) {
			prevscroll = window.innerHeight * 2;
		}
	});
}
