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
