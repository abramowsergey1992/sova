function feedbackForm() {
	let valid = $("#feedback-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#feedback-form button[type='submit']").attr(
				"disabled",
				"disabled"
			);
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
					$("#feedback-form button[type='submit']").removeAttr(
						"disabled"
					);
				},
				error: function () {
					popupOpen("#feedback-popup-error");
					$("#feedback-form button[type='submit']").removeAttr(
						"disabled"
					);
				},
			});
		},
	});
	let valid2 = $("#feedback-popup-form").validate({
		errorPlacement: function (error, element) {},
		submitHandler: function (form) {
			$("#feedback-popup-form button[type='submit']").attr(
				"disabled",
				"disabled"
			);
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
					$("#feedback-popup-form button[type='submit']").removeAttr(
						"disabled"
					);
				},
				error: function () {
					popupOpen("#feedback-popup-error");
					$("#feedback-popup-form button[type='submit']").removeAttr(
						"disabled"
					);
				},
			});
		},
	});

	$("#feedback-popup-form-agree").change(function () {
		console.log($(this).prop("checked"));
		if ($(this).prop("checked")) {
			$("#feedback-popup-form button[type='submit']").removeAttr(
				"disabled"
			);
		} else {
			$("#feedback-popup-form button[type='submit']").attr(
				"disabled",
				"disabled"
			);
		}
	});
}
