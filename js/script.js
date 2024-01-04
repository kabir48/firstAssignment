$(function($) {

    //scrollspy menu
    $('body').scrollspy({
        target: '.customnav',
        offset: 80
    });


    //menu js
    var scrltop = $(".customnav").offset().top;

    $(window).scroll(function() {

        var scroll = $(this).scrollTop();

        if (scroll >= scrltop) {
            $(".customnav").addClass("fixtop");
        } else {
            $(".customnav").removeClass("fixtop");
        }

    });

    $('a[href*="#"]:not([href="#').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });


    //header slider js
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow',
        speed: 1000,
        fade: true
    });


});