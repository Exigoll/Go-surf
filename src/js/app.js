import * as flsFunctions from './modules/functions.js'
import * as jquery from '../../node_modules/jquery/src/jquery.js'

flsFunctions.isWebp()


// Slick slider
import * as slickSlider from './modules/libs.min.js'
$(slickSlider = () => {
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		asNavFor: '.slider-dotshead',
		prevArrow: '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 25 21" class="slider-arrows slider-arrows__left" width="24.15px"\n' +
			'height="20.15px" xmlns="http://www.w3.org/2000/svg"' +
			' xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style><svg fill="none" viewBox="0 0 25 21" id="arrows-left" xmlns="http://www.w3.org/2000/svg"><path d="M8.778.563L.564 8.713a1.92 1.92 0 000 2.72l8.214 8.155a1.958 1.958 0 002.745 0 1.922 1.922 0 000-2.719l-4.805-4.767h15.414a2.012 2.012 0 100-4.027H6.69l4.834-4.792a1.92 1.92 0 000-2.718A1.953 1.953 0 008.778.563z" fill="#fff"/></svg>',
		nextArrow: '<?xml version="1.0" encoding="utf-8"?>\n' +
			'\t\t\t\t\t<svg class="slider-arrows slider-arrows__right" width="24.15px" height="20.15px" fill="none"' +
			' viewBox="0 0 25 21" id="arrows-right"' +
			' xmlns="http://www.w3.org/2000/svg"><path' +
			' d="M15.369 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.37.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000' +
			' 2.719l4.806 4.767H2.014a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0' +
			' 002.746.002z" fill="#fff"/></svg></svg>',
	})
	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	})
	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 25 21" class="slider-arrows slider-arrows__left" width="24.15px"\n' +
			'height="20.15px" xmlns="http://www.w3.org/2000/svg"' +
			' xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style><svg fill="none" viewBox="0 0 25 21" id="arrows-left" xmlns="http://www.w3.org/2000/svg"><path d="M8.778.563L.564 8.713a1.92 1.92 0 000 2.72l8.214 8.155a1.958 1.958 0 002.745 0 1.922 1.922 0 000-2.719l-4.805-4.767h15.414a2.012 2.012 0 100-4.027H6.69l4.834-4.792a1.92 1.92 0 000-2.718A1.953 1.953 0 008.778.563z" fill="#fff" fill-opacity="0.25"/></svg>',
		nextArrow: '<?xml version="1.0" encoding="utf-8"?>\n' +
			'\t\t\t\t\t<svg class="slider-arrows slider-arrows__right" width="24.15px" height="20.15px" fill="none"' +
			' viewBox="0 0 25 21" id="arrows-right"' +
			' xmlns="http://www.w3.org/2000/svg"><path' +
			' d="M15.369 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.37.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000' +
			' 2.719l4.806 4.767H2.014a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0' +
			' 002.746.002z" fill="#fff" fill-opacity="0.25"/></svg></svg>',
		asNavFor: '.slider-map',
	})
	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		asNavFor: '.surf-slider',
		arrows: false,
		focusOnSelect: true,
	})
	$('.travel__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 25 21" class="slider-arrows slider-arrows__left" width="24.15px"\n' +
			'height="20.15px" xmlns="http://www.w3.org/2000/svg"' +
			' xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style><svg fill="none" viewBox="0 0 25 21" id="arrows-left" xmlns="http://www.w3.org/2000/svg"><path d="M8.778.563L.564 8.713a1.92 1.92 0 000 2.72l8.214 8.155a1.958 1.958 0 002.745 0 1.922 1.922 0 000-2.719l-4.805-4.767h15.414a2.012 2.012 0 100-4.027H6.69l4.834-4.792a1.92 1.92 0 000-2.718A1.953 1.953 0 008.778.563z" fill="#fff" fill-opacity="0.25"/></svg>',
		nextArrow: '<?xml version="1.0" encoding="utf-8"?>\n' +
			'\t\t\t\t\t<svg class="slider-arrows slider-arrows__right" width="24.15px" height="20.15px" fill="none"' +
			' viewBox="0 0 25 21" id="arrows-right"' +
			' xmlns="http://www.w3.org/2000/svg"><path' +
			' d="M15.369 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.37.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000' +
			' 2.719l4.806 4.767H2.014a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0' +
			' 002.746.002z" fill="#fff" fill-opacity="0.25"/></svg></svg>',
	})
	$('.sleep__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 25 21" class="slider-arrows slider-arrows__left" width="24.15px"\n' +
			'height="20.15px" xmlns="http://www.w3.org/2000/svg"' +
			' xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style><svg fill="none" viewBox="0 0 25 21" id="arrows-left" xmlns="http://www.w3.org/2000/svg"><path d="M8.778.563L.564 8.713a1.92 1.92 0 000 2.72l8.214 8.155a1.958 1.958 0 002.745 0 1.922 1.922 0 000-2.719l-4.805-4.767h15.414a2.012 2.012 0 100-4.027H6.69l4.834-4.792a1.92 1.92 0 000-2.718A1.953 1.953 0 008.778.563z" fill="#fff" fill-opacity="0.25"/></svg>',
		nextArrow: '<?xml version="1.0" encoding="utf-8"?>\n' +
			'\t\t\t\t\t<svg class="slider-arrows slider-arrows__right" width="24.15px" height="20.15px" fill="none"' +
			' viewBox="0 0 25 21" id="arrows-right"' +
			' xmlns="http://www.w3.org/2000/svg"><path' +
			' d="M15.369 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.37.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000' +
			' 2.719l4.806 4.767H2.014a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0' +
			' 002.746.002z" fill="#fff" fill-opacity="0.25"/></svg></svg>',
	})

	$('.shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 25 21" class="slider-arrows slider-arrows__left" width="24.15px"\n' +
			'height="20.15px" xmlns="http://www.w3.org/2000/svg"' +
			' xmlns:xlink="http://www.w3.org/1999/xlink"><style>:root>svg{display:none}:root>svg:target{display:block}</style><svg fill="none" viewBox="0 0 25 21" id="arrows-left" xmlns="http://www.w3.org/2000/svg"><path d="M8.778.563L.564 8.713a1.92 1.92 0 000 2.72l8.214 8.155a1.958 1.958 0 002.745 0 1.922 1.922 0 000-2.719l-4.805-4.767h15.414a2.012 2.012 0 100-4.027H6.69l4.834-4.792a1.92 1.92 0 000-2.718A1.953 1.953 0 008.778.563z" fill="#fff" fill-opacity="0.25"/></svg>',
		nextArrow: '<?xml version="1.0" encoding="utf-8"?>\n' +
			'\t\t\t\t\t<svg class="slider-arrows slider-arrows__right" width="24.15px" height="20.15px" fill="none"' +
			' viewBox="0 0 25 21" id="arrows-right"' +
			' xmlns="http://www.w3.org/2000/svg"><path' +
			' d="M15.369 19.587l8.213-8.15a1.92 1.92 0 000-2.72L15.37.563a1.958 1.958 0 00-2.746 0 1.922 1.922 0 000' +
			' 2.719l4.806 4.767H2.014a2.012 2.012 0 100 4.027h15.444l-4.835 4.792a1.92 1.92 0 000 2.718 1.953 1.953 0' +
			' 002.746.002z" fill="#fff" fill-opacity="0.25"/></svg></svg>',
	})

	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button' +
		' quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.quantity-button').on('click', function() {
		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() -1) * $('.summ').data('guests')
		$('.summ').html('$' + summ)
	})


	$('.surfboard-box__circle').on('click', function () {
		$(this).toggleClass('active')
	})
})
