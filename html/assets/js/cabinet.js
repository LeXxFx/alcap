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

    return {
        init: function () {
            mainSlider();
            maskedInput();
            changeForm();
            standsSlider();
        }
    };
}();