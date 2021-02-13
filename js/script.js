$(document).ready(function () {

    //adjust Header Height ==================================================

    $('.header').height($(window).height());

    // Window Resize ========================================================
    $(window).resize(function () {

        $('.header').height($(window).height());

        // ADjust Li in the Center

        $('.slider').each(function () {

            $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        });
    });

    // Add Class To Link To Be Active =========================================
    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //ADjust Li in the Center =================================================

    $('.slider').each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    });

    // Ready Slider Function and Remove the pager ==============================
    $('.slider').bxSlider({
        pager:false
    });
    
    //Smooth scroll to Div =====================================================

    $('.links li a').click(function () {

        $('html, body').animate({

            scrollTop : $('#' + $(this).data('value')).offset().top
        },1000);
    });

    // Our Auto Slider Code =====================================================

    (function autoSlider() {

        $('.testim-slider .active').each( function () {

            if( !$(this).is(':last-child') ) {

                $(this).delay(2000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();

                });
            } else {

                $(this).delay(2000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.testim-slider div').eq(0).addClass('active').fadeIn();

                    autoSlider();
                });
            }
        })
    }());

    // Trigger Mixitup

    $('#Container').mixItUp();

    //Adjust Shuffle Links

    $('.shuffle').click(function () {

        $(this).addClass('active').siblings().removeClass('active');
    });

    //Trigger Nice Scroll

    $("body").niceScroll({
        cursorcolor:"#19BC9C"
    });
});
