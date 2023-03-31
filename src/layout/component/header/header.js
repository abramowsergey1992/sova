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
