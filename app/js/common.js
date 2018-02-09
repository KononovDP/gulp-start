$(document).ready(function() {

	//выпадающий список
	$('.select-option_selected').click(function(){
		$(this).parents('.select').find('.select-list').fadeIn(0);
		$(this).parents('.select').toggleClass('select-open');
	});

	$('.select-list .select-option').click(function(){
		var text = $(this).text();
		$(this).parents('.select').find('.select-option_selected').text(text);
		$(this).parents('.select').find('input[type="hidden"]').val(text);
		$(this).parents('.select-list').fadeOut(0);		
		$(this).parents('.select').removeClass('select-open');
	});

	$(function(){
		$(document).click(function(event) {
			if ($(event.target).closest(".select").length) return;
			$(".select-list").fadeOut(0);		
			$('.select').removeClass('select-open');
			event.stopPropagation();
		});
	});
	//выпадающий список////////////////////////////////

	//tabs on JS
	$('.tab-toggle').on('click' , function() {

		$(this).closest('.tabs-header').find('.tab-toggle_active').removeClass('tab-toggle_active');
		$(this).addClass('tab-toggle_active');

		var dataTab = $(this).attr("data-tab");

		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab]").removeClass('tab-content_active');
		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab='"+dataTab+"']").addClass('tab-content_active');

		return false;
	});
	//tabs on JS///////////////////////////////////////

	//popup////////////////////////////////////////////
	$('.js-show-popup').on('click' , function() {
		var dataPopup = $(this).attr("data-popup");

		$(".popup-overlay[data-popup='"+dataPopup+"']").fadeIn('500');

		var parentHeight = $('.popup-centering').height();
		var childrenHeight = $('.popup').height();

		if (childrenHeight >= parentHeight) {
			$('.popup').addClass('popup-scrollable');
		} else {
			$('.popup').removeClass('popup-scrollable');
		}

		$(window).resize(function(event) {
			var parentHeight = $('.popup-centering').height();

			var childrenHeight = $('.popup').height();

			if (childrenHeight >= parentHeight) {
				$('.popup').addClass('popup-scrollable');
			} else {
				$('.popup').removeClass('popup-scrollable');
			}
		});
	});

	$('.js-close-popup').on('click' , function() {
		$('.popup-overlay').fadeOut('500');
	});
	//popup////////////////////////////////////////////

	
	//blocks with equal height/////////////////////////
	$(window).on('load resize', function() {
		$(".item-wrap").each(function () {
			var container = $(this);
			var mh = 0;
			container.find('.item').each(function () {
			   $(this).height('auto');
			   var h_block = parseInt($(this).height());
			   if(h_block > mh) {
				  mh = h_block;
			   };
			});
			container.find('.item').height(mh);
		})
	});
	//blocks with equal height/////////////////////////


}); 