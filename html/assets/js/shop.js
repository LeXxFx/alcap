var CheckMaxQuantity = function (el) {
	var $val = el.val(),
		$max = el.attr('max'),
		$min = el.attr('min'),
		$trimVal = $val.trim(),
		btnPlus = el.parent().find('.btn-minus'),
		btnMinus = el.parent().find('.btn-minus');

	if (+($trimVal) > $max) {
		el.val($max);
	}
	if (+($trimVal) < $min) {
		el.val($min);
	}
	el.closest('.product__item').find('.addtobasket').each(function () {
		$(this).attr('data-amount', $val);
	});
	el.closest('.product-single__price').find('.addtobasket').each(function () {
		$(this).attr('data-amount', $val);
	});

	if (parseInt($val) >= $max) {
		btnPlus.attr('disabled', true);
	} else {
		btnPlus.removeAttr('disabled');
	}

	if (parseInt($val) <= $min) {
		btnMinus.attr('disabled', true);
	} else {
		btnMinus.removeAttr('disabled');
	}
};

var Shop = function () {
	var isMobile = false;

	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

	var inputCounter = function () {
		jQuery('.btn-number').on('click', function (e) {
			var self = jQuery(this);
			e.preventDefault();
			fieldName = self.attr('data-field');
			type = self.attr('data-type');
			var input = jQuery("input[name='" + fieldName + "']");
			var currentVal = parseInt(input.val().split(" ")[0]);
			if (!isNaN(currentVal)) {
				var unit = '';
				if (input.data('unit')) unit = input.data('unit');
				if (type == 'minus') {
					self.closest('.input-counter').find('.btn-plus').attr('disabled', false);
					if (currentVal > input.attr('min')) {
						input.val(currentVal - input.data('step') + " " + unit).change();
					}
				} else if (type == 'plus') {
					self.closest('.input-counter').find('.btn-minus').attr('disabled', false);
					if (currentVal < input.attr('max')) {
						input.val(currentVal + input.data('step') + " " + unit).change();
					}
				}
				CheckMaxQuantity(input);

			} else {
				input.val(0);
			}
			$(this).closest('.amount').parent().find('.addtobasket').each(function () {
				$(this).attr('data-amount', input.val().split(" ")[0]);
				console.log($(this));
			});
		});
	};

	var filterRange = function () {
		var filterRange = document.querySelectorAll('.filter-slider');
		if (filterRange != undefined) {
			Array.prototype.forEach.call(filterRange, function (elements, index) {
				var slider = elements.querySelectorAll('.slider-range')[0];
				var inputNumberMin = elements.querySelectorAll('.input-number-min')[0];
				var inputNumberMax = elements.querySelectorAll('.input-number-max')[0];

				var minValue = parseInt(slider.getAttribute('data-min-value'));
				var maxValue = parseInt(slider.getAttribute('data-max-value'));

				noUiSlider.create(slider, {
					start: [inputNumberMin.value, inputNumberMax.value],
					connect: true,
					range: {
						'min': minValue,
						'max': maxValue
					}
				});

				slider.noUiSlider.on('update', function (values, handle) {
					var value = values[handle];
					if (handle) {
						inputNumberMax.value = Math.round(value);
					} else {
						inputNumberMin.value = Math.round(value);
					}
				});

				inputNumberMin.addEventListener('change', function () {
					slider.noUiSlider.set([this.value, null]);
				});

				inputNumberMax.addEventListener('change', function () {
					slider.noUiSlider.set([null, this.value]);
				});

				$('.filter-slider__clear').on('click', function (e) {
					e.preventDefault();
					var that = $(this);

					slider.noUiSlider.set([minValue, maxValue]);


				});
			});
		}
	};

	var itemGallery = function () {
		var galeries = $('.products').find('.item-gallery');
		if (galeries.length > 0) {
			galeries.each(function (index) {
				var that = $(this);
				if (that.find('.gallery-item').length > 1) {
					that.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplay: false,
						dots: true,
						arrows: false
					});

					var dots = that.find('.slick-dots'),
						count = that.data('images-count');

					if (count !== undefined) {
						dots.append('<li><span>+ 2</span></li>');
					}
				}
			});
		}
	}

	var productsCatalog = function () {
		var imageItem = $('.product__item .imgs-list .item a');

		imageItem.on("click", function (e) {
			e.preventDefault();
			var that = $(this),
				item = that.parent('.item'),
				zoom_size = item.data('zoom-size');

			if (item.hasClass('load-next')) {
				item.remove();
			} else {
				switchImage(that, zoom_size);
			}

			switchImage(that, zoom_size);
		});

		var imgs = $(".product-list .product__item .imgs-list");
		if (imgs.length) {
			imgs.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: false,
				vertical: true,
				verticalSwiping: true,
				prevArrow: '<a class="slick-prev"><i class="fa fa-angle-up"></i></a>',
				nextArrow: '<a class="slick-next"><i class="fa fa-angle-down"></i></a>'
			});
			imgs.on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var slide = slick.$slides.get(currentSlide);
				switchImage($(slide.children[0]));
			});
		}
	};


	function switchImage(image, zoom_size) {
		var that = image,
			target = that.closest('.item__image').find('.image__preview'),
			newSrc = that.attr('href'),
			$zoom = 450;

		if (zoom_size !== undefined) {
			$zoom = zoom_size;
		}

		that.closest('.imgs-list').find('.item').removeClass("current");
		that.parent().addClass("current");

		//  target.height(target.height());
		target.removeClass('image__preview--init').html('').addClass('image__preview--loading');

		if (that.data('source') == 'image') {
			target.html('<a id="gallery" class="MagicZoomPlus" rel="preload-selectors-small:false;preload-selectors-big:false;initialize-on:mouseover;smoothing-speed:70;fps:40;selectors-effect:false;show-title:false;loading-msg:Загрузка...;background-opacity:10;zoom-width:' + $zoom + ';zoom-height:' + $zoom + ';zoom-distance:5;hint-text:;selectors-class:current;buttons:hide;caption-source:span;" ' +
				'href="' + newSrc + '"><img /></a>').find('img').attr('src', newSrc).load(function () {
					target.removeClass('image__preview--loading');
					target.find('img').fadeIn('fast');
				});

			MagicZoomPlus.start('gallery');

		};
	}

	var productGallery = function (inputgallery) {
		var gallery = $('#product-gallery').find('.imgs-list');
		var isVertical = true;

		if (inputgallery !== undefined) {
			gallery = inputgallery;
		}

		if (gallery.data('direction') === "row")
			isVertical = false;

		if (gallery.length > 0) {
			gallery.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: false,
				vertical: isVertical,
				verticalSwiping: true,
				prevArrow: '<a class="slick-prev"><i class="fa fa-angle-up"></i></a>',
				nextArrow: '<a class="slick-next"><i class="fa fa-angle-down"></i></a>',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 478,
						settings: {
							slidesToShow: 3
						}
					}
				]
			});
			gallery.on('afterChange', function (event, slick, currentSlide, nextSlide) {
				var slide = slick.$slides.get(currentSlide),
					item = $(slide.children[0]),
					zoom_size = $(slide).data('zoom-size');

				switchImage(item, zoom_size);
			});
		};


		var gallery2 = $('#product-gallery').find('.images-list');

		gallery2.find('.item a').on('click', function (e) {
			e.preventDefault();
			var that = $(this), item = that.closest('.item');

			if (item.hasClass('load-next')) {
				item.remove();
			} else {
				item.siblings().removeClass('current');
				switchImage(that);
			}
		});
	};

	var itemPreview = function () {
		$('.item__preview').on('click', function (e) {
			e.preventDefault();
			var that = $(this);
			$('.product-preview').modal('show');
		});
	};

	var quickBuy = function () {
		$('.btn-quick-buy').on('click', function (e) {
			e.preventDefault();
			var pos = $(this).position();

			$('.quick-buy').css({
				'top': pos.top - 30,
				'left': pos.left - 5
			}).addClass('quick-buy--open');
		});
		$(document).on('click', '.quick-buy__close', function (e) {
			e.preventDefault();
			var that = $(this);

			that.closest('.quick-buy').removeClass('quick-buy--open');
		});
	}

	return {
		init: function () {
			inputCounter();
			filterRange();
			itemGallery();
			productsCatalog();
			itemPreview();
			quickBuy();
		}
	};
}();

