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
