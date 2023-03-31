function paginator() {
	$(".paginator__more").click(function () {
		$(this).closest(".paginator").addClass("_view-hidden");
	});
}
