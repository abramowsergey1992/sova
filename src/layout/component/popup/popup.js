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
