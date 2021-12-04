document.addEventListener("DOMContentLoaded", function () {
	new Swiper('.reviews .reviews-slider', {
		// Optional parameters
		loop: true,

		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 48,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
	});
})