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
