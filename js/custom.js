// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    // artwork - popup
    $(function(){
		$('#popup01').click(function(){
			$('#pop01').show();
		});
		$('#popup02').click(function(){
			$('#pop02').show();
		});
		$('#popup03').click(function(){
			$('#pop03').show();
		});

		$('.popup i').click(function(){
			$('.popup').hide();
		});
	});

    // popup-slide
    var swiper1 = new Swiper('.artwork1', {
        speed: 1000,
        pagination: {
            el: '.artwork1 .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    });

    var swiper2 = new Swiper('.artwork2', {
        speed: 1000,
        pagination: {
            el: '.artwork2 .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    });

    //skill - easyPieChart
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.chart').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $('.chart').easyPieChart({
                    barColor: '#425BB5',
                    trackColor: '#f3f3f3',
                    scaleColor: '#fff',
                    lineCap: 'round',
                    lineWidth: 10,
                    size: 400,
                    animate: 2000,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            }
        });
    });
});

// background color
$('[data-color]').each(function () {
    $(this).css({
        'background-color': $(this).data('color')
    });
});

// progress bar
$('[data-progress]').each(function () {
    $(this).css({
        'bottom': $(this).data('progress')
    });
});