function video() {
	$(".video-click-play").click(function () {
		this.play();
		let th = this;
		$(this).addClass("_play");
		console.log($(this), "ssssx");
		this.onended = function () {
			th.currentTime = 0;
			th.classList.remove("_play");
		};
	});
}
