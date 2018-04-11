var Main = function () {

	var mainSlider = function () {
        var slNav = $('.slider-nav__items');
        if (slNav.length) {
            slNav.slick({
                slidesToShow: 6,
                slidesToScroll: 6,
                autoplay: false,
                arrows: false,
                asNavFor: '.slider',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: true
                        }
                    }
                ]
            });

            var preview = $('.slider');
            preview.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                adaptiveHeight: true,
                asNavFor: '.slider-nav__items'
            });

        }
    };

	var maskedInput = function() {
		$('.masked-phone').mask('9 (999) 999-99-99');
    };
    
	var changeForm = function() {
		$('body').find('.form-type .type-item').on('click', function(e){
            e.preventDefault();
            var that = $(this),
                currentForm = $('body').find('#' + that.data('target'));

            that.siblings().removeClass('active');
            that.addClass('active');
            
            currentForm.siblings().removeClass('active');
            currentForm.addClass('active');
        })
    };
    
    var standsSlider = function () {
        var stands = $('.stands-list');
        if (stands.length) {
            stands.slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: false,
                arrows: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
                    }
                ]
            });
        }
    };

	return {
        init: function () {
            mainSlider();
            maskedInput();
            changeForm();
            standsSlider();
        }
    };
}();

$(document).ready(function ($) {
    Main.init();
});