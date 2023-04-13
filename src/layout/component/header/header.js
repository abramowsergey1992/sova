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
