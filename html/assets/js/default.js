﻿var Main = function () {
	var runGoTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1200) {
                $('#scroll-top').fadeIn()
            } else {
                $('#scroll-top').fadeOut()
            }
        });
        $('#scroll-top').on('click', function (e) {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            e.preventDefault();
        });
	};

	var catalogNavigation = function () {
		var timer,
			timeIn = [],
			timeOut = [];
		$('.col-catalog').on('mouseenter', function (e) {
			clearTimeout(timer);
			$(this).addClass('col-catalog--open');
		}).on("mouseleave", function () {
			timer = setTimeout(function () {
				$('.col-catalog').removeClass('col-catalog--open');
			}, 200);
		});

		$(".col-catalog .catalog-menu .has-child").hover(function () {
			var that = $(this),
				uid = that.index();

			timeIn[uid] = setTimeout(function () {
				that.addClass('has-child--open');
			}, 200);
			if (timeOut[uid] !== undefined) {
				clearTimeout(timeOut[uid]);
			};
		}, function () {
			var that = $(this),
				uid = that.index();

			if (timeIn[uid] !== undefined) {
				clearTimeout(timeIn[uid]);
			};
			timeOut[uid] = setTimeout(function () {
				that.removeClass('has-child--open');
			}, 200);
		});

		$('.catalog-menu').on('click', '.submenu__close', function (e) {
			e.preventDefault();
			var that = $(this);
			that.closest('.col-catalog').removeClass('col-catalog--open');
		});

		$('#header').on('click', '.col-catalog', function (e) {
			$(this).toggleClass('col-catalog--open');
		});
	}

	var tooltips = function () {
		$("[data-rel='tooltip']")
			.attr("data-placement", "top")
			.attr("data-content", function () {
				return $(this).attr("title")
			})
			.removeAttr('title');


		var showPopover = function () {
			$(this).popover('show');
		};
		var hidePopover = function () {
			$(this).popover('hide');
		};
		$("[data-rel='tooltip']").popover({
			trigger: 'manual'
		}).click(showPopover).hover(showPopover, hidePopover);
	}

	var scrollbarRail = function () {
		$('.scrollbar-rail').scrollbar();
	}

	var searchBox = function () {
		$('.search .search-input .search-input__text').on("keyup", function (e) {
			var that = $(this);
			var currentVal = that.val();

			if (that.attr('data-val') != currentVal) {
				that.attr('data-val', currentVal);
				that.closest('.search').addClass('search--open');
			}
		});
		$(document).mouseup(function (e) {
			var container = $('.search--open');
			if (!container.is(e.target)
				&& container.has(e.target).length === 0) {
				$(".search").removeClass('search--open')
			}
		});
		$(document).keyup(function (e) {
			if (e.keyCode == 27) {
				$(".search").removeClass('search--open')
			}
		});
	};

	var stickSidebar = function () {
		var stick = $('.sticky');
		if (stick.length > 0) {
			stick.stick_in_parent({ spacer: false });
		}
	};

	return {
		init: function () {
			runGoTop();
			catalogNavigation();
			tooltips();
			scrollbarRail();
			searchBox();
			stickSidebar();
		}
	};
}();