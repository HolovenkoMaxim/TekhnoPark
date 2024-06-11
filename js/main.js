
/* phone mask */

$(function () {
	$(".phone").mask("+9 (999) 999-99-99");
});

/* setInterval animate */

$(function () {
	setInterval(function () {
		$('.pulse').animate({ scale: '1.5' }, 1500).fadeOut(500);
		$('.pulse').fadeIn(0).animate({ scale: '1' }, 0).delay(300);

		$('.pulse-1').animate({ scale: '1' }, 2000).fadeOut(500);
		$('.pulse-1').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);
		$('.pulse-2').animate({ scale: '1.05' }, 2000).fadeOut(500);
		$('.pulse-2').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);
		$('.pulse-3').animate({ scale: '1.1' }, 2000).fadeOut(500);
		$('.pulse-3').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);

		$('.pulse-4').animate({ scale: '1' }, 3000).fadeOut(500);
		$('.pulse-4').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);
		$('.pulse-5').animate({ scale: '1.05' }, 3000).fadeOut(500);
		$('.pulse-5').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);
		$('.pulse-6').animate({ scale: '1.1' }, 3000).fadeOut(500);
		$('.pulse-6').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);

		$('.pulse-7').animate({ scale: '1' }, 1500).fadeOut(500);
		$('.pulse-7').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);
		$('.pulse-8').animate({ scale: '1.1' }, 1500).fadeOut(500);
		$('.pulse-8').fadeIn(0).animate({ scale: '0.5' }, 0).delay(300);

		$('.gloss').animate({ left: '130%', opacity: '1' }, 1500);
		$('.gloss').animate({ left: '-100%', opacity: '1' }, 0).delay(1000);
	});
});

/* lightGallery */

$(function () {
	$('.lightGallery').lightGallery({
		thumbnail: false,
		loop: true
	});
});

/* menu */

$(function () {
	$('.opennav, .closenav').click(function () {
		$('#menu-w').fadeToggle(300);
	});
});

$(function () {
	$('#menu a').click(function () {
		$('#menu-w').fadeToggle(300);
	});
});

/* scroll */

$(function () {
	$("#menu a").click(function () {
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top - 0
		}, {
			duration: 700
		});
		return false;
	});
});

/* scroll */

$(function () {
	$("a.scroll").click(function () {
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top - 0
		}, {
			duration: 700
		});
		return false;
	});
});

/* pop-up */

$(function () {
	$('.img-mini-1').click(function () {
		$(this).parent().prev().children().fadeOut(0);
		$(this).parent().prev().children('.img-big-1').fadeIn(0);
		$(this).parent().children().removeClass('img-mini-active');
		$(this).addClass('img-mini-active');
	});
});

$(function () {
	$('.img-mini-2').click(function () {
		$(this).parent().prev().children().fadeOut(0);
		$(this).parent().prev().children('.img-big-2').fadeIn(0);
		$(this).parent().children().removeClass('img-mini-active');
		$(this).addClass('img-mini-active');
	});
});

$(function () {
	$('.img-mini-3').click(function () {
		$(this).parent().prev().children().fadeOut(0);
		$(this).parent().prev().children('.img-big-3').fadeIn(0);
		$(this).parent().children().removeClass('img-mini-active');
		$(this).addClass('img-mini-active');
	});
});

$(function () {
	$('.img-mini-4').click(function () {
		$(this).parent().prev().children().fadeOut(0);
		$(this).parent().prev().children('.img-big-4').fadeIn(0);
		$(this).parent().children().removeClass('img-mini-active');
		$(this).addClass('img-mini-active');
	});
});

$(function () {
	$('.img-mini-5').click(function () {
		$(this).parent().prev().children().fadeOut(0);
		$(this).parent().prev().children('.img-big-5').fadeIn(0);
		$(this).parent().children().removeClass('img-mini-active');
		$(this).addClass('img-mini-active');
	});
});

/* pop-up */

$(function () {
	$('.button-2-1').click(function () {
		$('#zb1').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-2').click(function () {
		$('#zb2').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-3').click(function () {
		$('#zb3').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-4').click(function () {
		$('#zb4').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-5').click(function () {
		$('#zb5').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-6').click(function () {
		$('#zb6').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-7').click(function () {
		$('#zb6-2').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-8').click(function () {
		$('#zb6-3').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-2-9').click(function () {
		$('#zb6-4').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.button-12').click(function () {
		$('#zb7').fadeIn(300);
		$('.wrapper-w').fadeIn(0);
		$('.wrapper').fadeIn(300);
		$('body').css('overflow', 'hidden');
	});
});

$(function () {
	$('.wrapper, .close').click(function () {
		$('.wrapper-w').fadeOut(0);
		$('.wrapper').fadeOut(300);
		$('.z-box, .z-box-7').fadeOut(300);
		$('body').css('overflow', 'auto');
	});
});

/* form validate */

$(function () {
	$('#form1').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form2').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form3').validate(
		{
			rules: {
				"baget": {
					required: true
				},
				"adres": {
					required: true
				},
				"numb": {
					required: true
				}
			},
			messages: {
				"baget": {
					required: ""
				},
				"adres": {
					required: ""
				},
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form4').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form5').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form6').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form7').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form8').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form9').validate(
		{
			rules: {
				"numb": {
					required: true
				}
			},
			messages: {
				"numb": {
					required: ""
				}
			}
		});
});

$(function () {
	$('#form10').validate(
		{
			rules: {
				"organizaciya": {
					required: true
				},
				"site": {
					required: true
				},
				"fio": {
					required: true
				},
				"adres": {
					required: true
				},
				"opyt": {
					required: true
				},
				"numb": {
					required: true
				}
			},
			messages: {
				"organizaciya": {
					required: ""
				},
				"site": {
					required: ""
				},
				"fio": {
					required: ""
				},
				"adres": {
					required: ""
				},
				"opyt": {
					required: ""
				},
				"numb": {
					required: ""
				}
			}
		});
});

/* animation */

$('.ani-1').waypoint(function () {
	$(this).addClass('zoomIn').addClass('animated');
}, {
	offset: '100%'
});

$('.ani-2').waypoint(function () {
	$(this).addClass('fadeInUp').addClass('animated');
}, {
	offset: '100%'
});

$('.ani-3').waypoint(function () {
	$(this).addClass('fadeInRight').addClass('animated');
}, {
	offset: '85%'
});

$('.ani-4').waypoint(function () {
	$(this).addClass('fadeInUp').addClass('animated');
}, {
	offset: '85%'
});

/* number animation (http://aishek.github.io/jquery-animateNumber) */

var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

$('.number1').waypoint(function () {
	$(this).animateNumber({ number: 150, numberStep: comma_separator_number_step }, 1500);
}, {
	offset: '85%'
});

$('.number2').waypoint(function () {
	$(this).animateNumber({ number: 8, numberStep: comma_separator_number_step }, 1500);
}, {
	offset: '85%'
});

$('.number3').waypoint(function () {
	$(this).animateNumber({ number: 11, numberStep: comma_separator_number_step }, 1500);
}, {
	offset: '85%'
});

$('.number4').waypoint(function () {
	$(this).animateNumber({ number: 52, numberStep: comma_separator_number_step }, 1500);
}, {
	offset: '85%'
});

/* end */