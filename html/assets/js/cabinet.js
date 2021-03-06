﻿var Cabinet = function () {

    var mainSlider = function () {
        var preview = $('#cabinet_slider .slider');
        preview.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            adaptiveHeight: true
        });
    };

    var carouselList = function () {
        var carousel = $('.carousel-list');
        carousel.each(function () {
            var that = $(this),
                startCount = 3;

            if (that.data('items') !== undefined) {
                startCount = parseInt(that.data('items'));
            }

            that.slick({
                slidesToShow: startCount,
                slidesToScroll: startCount,
                autoplay: false,
                arrows: false,
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
        });

    };

    var formRadio = function () {
        $(document).on('click', '.radio .form-control', function (e) {
            e.preventDefault();
            var that = $(this),
                currentItem = that.closest('.radio').find('input[type=radio]');

            currentItem.click();
        });

    }

    var runDatePicker = function () {

        $.datetimepicker.setLocale('ru');

        $('.date-picker').datetimepicker({
            timepicker: false,
            format: 'd.m.Y'
        });
    };

    var waitList = function () {
        $('.wait-inner').on('shown.bs.collapse', function (e) {
            var target = $(e.target);
            target.closest('.wait-item').addClass('wait-item--open');
        });

        $('.wait-inner').on('hidden.bs.collapse', function (e) {
            var target = $(e.target);
            target.closest('.wait-item').removeClass('wait-item--open');
        });
    }

    var confirmPreOrder = function() {
        $(document).on('click', '.btn-confirm-preorder', function(e){
			e.preventDefault();
			$('#form_alert').modal('show');
        });
    }

    return {
        init: function () {
            mainSlider();
            carouselList();
            formRadio();
            runDatePicker();
            waitList();
            confirmPreOrder();
        }
    };
}();