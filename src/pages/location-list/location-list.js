function locationlist() {
	let $map = $("#locations-map");
	$(".location-prev__gallery").each(function () {
		const lpb = new Swiper(this, {
			speed: 400,
			navigation: {
				nextEl: $(this).find(".location-prev__gallery-next")[0],
				prevEl: $(this).find(".location-prev__gallery-prev")[0],
			},
			spaceBetween: 10,
		});
	});
	$(".location-map-prev__slider").each(function () {
		const lpm = new Swiper(this, {
			speed: 400,
			pagination: {
				el: $(this).find(".location-map-prev__slider-pagi")[0],
				type: "bullets",
				clickable: true,
			},
			spaceBetween: 10,
		});
	});
	let dataloc;
	$.getJSON($map.data("json"), function (data) {
		dataloc = data.locations;
		setTimeout(function () {
			var myMap = new ymaps.Map(
				"locations-map",
				{
					center: [55.30954, 37.721587],
					zoom: 8,
					controls: [],
				},
				{
					searchControlProvider: "yandex#search",
				}
			);
			function locationRender(locations) {
				locations.forEach((loc) => {
					myPlacemark = new ymaps.Placemark(
						loc.coord,
						{
							balloonContent: loc.title,
						},
						{
							id: loc.id,
							balloonCloseButton: false,
							hideIconOnBalloonOpen: false,
							iconLayout: "default#image",
							iconImageHref: $map.data("icon"),
							iconImageSize: [50, 50],
							iconImageOffset: [-25, -25],
						}
					);
					myPlacemark.events.add(["balloonopen"], function (e) {
						e.get("target").options.set(
							"iconImageHref",
							$map.data("activeicon")
						);
						console.log(e.get("target").geometry.getCoordinates());
						console.log(e.get("target").options.get("id"));
						myMap.panTo(e.get("target").geometry.getCoordinates());
						$(".location-map-prev").stop().slideUp();
						$(
							"#location-map-prev-" +
								e.get("target").options.get("id")
						)
							.stop()
							.slideDown();
					});
					myPlacemark.events.add(["balloonclose"], function (e) {
						e.get("target").options.set(
							"iconImageHref",
							$map.data("icon")
						);
					});
					myMap.geoObjects.add(myPlacemark);
				});
			}
			$("#filter-city").change(function () {
				let coord = $("#filter-city option:selected").data("coord");
				console.log(coord);
				if (coord.length && coord != undefined) {
					console.log(coord.split(","));
					myMap.panTo([
						parseFloat(coord.split(",")[0]),
						parseFloat(coord.split(",")[1]),
					]);
				}
			});
			$("#filter-status, #filter-city").change(function () {
				let location = [];
				myMap.geoObjects.removeAll();
				$(".location-map-prev").stop().slideUp();
				location = Array.from(dataloc);
				console.log("s", location);
				let city = $("#filter-city option:selected").attr("value");
				let status = $("#filter-status option:selected").attr("value");

				if (city == "all" || city == undefined) {
					$(".location-prev").removeClass("_city-hidden");
				} else {
					location = location.filter(function (l) {
						return l.city == city;
					});
					$(".location-prev").each(function () {
						if (city == $(this).data("city")) {
							$(this).removeClass("_city-hidden");
						} else {
							$(this).addClass("_city-hidden");
						}
					});
				}

				if (status == "all" || status == undefined) {
					$(".location-prev").removeClass("_status-hidden");
				} else {
					location = location.filter(function (l) {
						return l.tags.indexOf(status) >= 0;
					});
					$(".location-prev").each(function () {
						if (
							$(this).data("status").split("|").indexOf(status) >=
							0
						) {
							$(this).removeClass("_status-hidden");
						} else {
							$(this).addClass("_status-hidden");
						}
					});
				}
				console.log("location", location);
				locationRender(location);
			});
			locationRender(data.locations);
		}, 2000);
	});
}
