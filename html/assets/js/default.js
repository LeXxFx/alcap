var Main = function () {
	var CatalogNavigation = function () {
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

	var Tooltips = function () {
		$('[title]').attr("data-rel", "tooltip");
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

	var ScrollbarRail = function() {
		$(document).ready(function(){
			$('.scrollbar-rail').scrollbar();
		});
	}

	return {
		init: function () {
			CatalogNavigation();
			Tooltips();
			ScrollbarRail();
		}
	};
}();