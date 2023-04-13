function header() {
	let menu = $(".header__hidden-menu");
	let btnMenu = $(".header__menu-btn");
	let overlay = $(".header__hidden-menu-overlay");
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

	let currentScroll = $(window).scrollTop();
	if (currentScroll > 5) {
		$(".header").addClass("_bg");
	} else {
		$(".header").removeClass("_bg");
	}
	$(window).scroll(() => {
		if (btnMenu.hasClass("_open")) {
			headerClose();
		}
		let currentScroll = $(window).scrollTop();
		if (currentScroll > 5) {
			$(".header").addClass("_bg");
		} else {
			$(".header").removeClass("_bg");
		}
	});
}
