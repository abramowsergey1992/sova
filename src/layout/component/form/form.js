function form() {
	$("._mask-int").each(function () {
		Inputmask("9{1,5}").mask(this);
	});
	$("._mask-oneint").each(function () {
		Inputmask({ mask: "9", placeholder: "" }).mask(this);
	});
	$("._mask-phone").each(function () {
		Inputmask("+7 (999) 999-99-99").mask(this);
	});
	$("._mask-time").each(function () {
		Inputmask("9{1,2}:9{1,2}").mask(this);
	});
	$("._mask-date,._mask-calendar").each(function () {
		Inputmask("99.99.9999").mask(this);
	});

	// $(".filters__btn[data-filter]").click(function () {
	// 	let wrap = $(this).closest(".block");
	// });
	// wrap.find(".filters__btn").removeClass("_active");
	// $(this).addClass("_active");

	$(".select2").select2({ minimumResultsForSearch: -1 });
	$(".btn-1,.btn-2,.btn-3, .btn-4").each(function () {
		$(this).html(
			`<span class='button-content'><span>${$(
				this
			).html()}</span><span>${$(this).html()}</span></span>`
		);
	});
}
