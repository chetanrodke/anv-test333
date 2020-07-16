/* =================================
            Preloader
==================================== */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(380).fadeOut('slow');
});

/* =================================
            Team members
==================================== */
$(function () {

    $("#team-members").owlCarousel({

        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },

            // break point from 480 up
            480: {
                items: 2
            }
        }
    });
});
/* =================================
            Progress bar
==================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/* =================================
            Responsive Tabs
==================================== */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/* =================================
            Portfolio 
==================================== */
$(window).on('load', function () {

    // Initialize isotope
    $("#isotope-container").isotope({});
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =================================
             Magnifier
==================================== */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});
/* =================================
             Testimonials
==================================== */
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 250,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =================================
             Stats
==================================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});
/* =================================
         Clients
==================================== */
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 250,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },

            // break point from 480 up
            480: {
                items: 3
            },

            // break point from 768 up
            768: {
                items: 6
            }
        }
    });
});
/* =================================
         Google Map
==================================== */
$(window).on('load', function () {
    // Map Variables
    var addressString = 'Anveshak Technology, Hingne Khurd, Pune, Maharashtra 411051';
    //    var mylatlng = {lat: 18.478307, lng: 73.830761};
    // 1. Remder Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: mylatlng
    });

});
/* =================================
         Navigation
==================================== */
/* Show & hide White Navigation */
$(function () {

    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        //show/hide nav on windows scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            //show white nav
            $("nav").addClass("white-nav-top");

            //show dark logo
            $(".navbar-brand img").attr("src", "img/logo/anv_dark.svg");

            // show back to top button
            $("#back-to-top").fadeIn();

        } else {

            //show white nav
            $("nav").removeClass("white-nav-top");

            //show logo
            $(".navbar-brand img").attr("src", "img/logo/anv_white.svg");

            // hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get section id like #about, #sevices, #team, etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});

/* =================================
         Mobile Menu
==================================== */
$(function () {
    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    
    // hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
    
});
/* =================================
         Animation
==================================== */
// animate on scroll
$(function () {
     new WOW().init();  
});

$(window).on('load', function () {
    
   $("#home-heading-1").addClass("animated fadeInDown"); 
    
});













