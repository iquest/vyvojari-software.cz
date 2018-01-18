$(function(){
	//Scrollable links
	$('a.scroll-link').click(function(){
		//var offset = -$('#main-nav').height();
		var offset = parseInt($(this).attr('data-scroll-offset'));
		if(isNaN(offset)){
			offset = -50;
		}
		$.scrollTo($(this).attr('href'), {
			duration : 500,
			offset: offset
		});
		return false;
	});

	//Slider
	$('.bxslider').bxSlider({
		auto: true,
		pager: false,
		controls: true,
		touchEnabled: true
	});

	//Scroll animation
	AOS.init({
		offset: 50,
		duration: 800,
	});

	//Misc
	$('[data-copy-to]').each(function(){
		$($(this).attr('data-copy-to')).html($(this).html());
	});

	//Roles nav
	if(bsIs('md') || bsIs('lg')){
		$('#role-1').addClass('active');
		$('#role-1 .role-description').fadeIn();
		$('#role-1 .role-description-in').slideDown();
	}
	function roleDeactivate(){
		var active = $('.role-item.active');
		if(active.length){
			active.find('.role-description').slideUp();
			active.find('.role-description-in').fadeOut();
			active.removeClass('active');
		}
	}

	function roleActivate(p){
		if(p.length){
			p.find('.role-description').slideDown();
			p.find('.role-description-in').fadeIn();
			p.addClass('active');
		}
	}

	$('.role-person-link').click(function(){
		if(bsIs('md') || bsIs('lg')){
			p = $(this).parents('.role-item');
			if(!$(this).hasClass('.role-dodavatel') && !p.hasClass('active')){
				roleDeactivate();
				roleActivate(p);
			}
		}
	});

	$('.btn-next-role').click(function(){
		if(bsIs('md') || bsIs('lg')){
			roleDeactivate();
			roleActivate($($(this).attr('data-target')));
		}
	});

	function bsIs(env){
		return $('#environment-' + env).is(':visible');
	}
});