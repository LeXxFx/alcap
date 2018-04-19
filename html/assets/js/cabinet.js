var Cabinet = function () {

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

    return {
        init: function () {
            mainSlider();
            carouselList();
        }
    };
}();