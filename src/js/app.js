import * as flsFunctions from './modules/functions.js'


flsFunctions.isWebp()

// Slick slider
import * as slickSlider from './modules/libs.min.js'

// Slick slider
$(slickSlider = () => {
	$('.header__slider').slick({
		infinite: true,
		fade: true,
		asNavFor: '.slider-dots',
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
	$('.slider-dots').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	})
})
