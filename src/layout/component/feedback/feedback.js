function feedbackForm() {
	let valid = $("#feedback-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#feedback-form .btn-1").attr("disabled", "disabled");
			$.ajax({
				url: $(form).attr("action"),
				data: $(form).serialize(),
				method: "POST",
				headers: {
					"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
						"content"
					),
				},
				context: document.body,
				success: function () {
					popupOpen("#feedback-popup-thanks");
					$("#feedback-form .btn-1").removeAttr("disabled");
				},
				error: function () {
					popupOpen("#feedback-popup-error");
					$("#feedback-form btn-1").removeAttr("disabled");
				},
			});
		},
	});
}
