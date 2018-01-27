/******** 倒计时    *********/
$(function () {

    var endDateStr = '2018/1/14 15:57:00';

    /*初始隐藏按钮*/
    /*按钮*/
    var _time_btns_container = $('#time_btns_container');
    console.log(_time_btns_container);
    hideBtn();

    var endTime = new Date(endDateStr).getTime();
    var startTime = new Date().getTime();

    var leftTime = endTime - startTime;

    if ( leftTime < 0 || leftTime == 0 ) { showBtn(); return false }

    var _day = $('#item_cont_day');
    var _hour = $('#item_cont_hour');
    var _minute = $('#item_cont_minute');
    var _second = $('#item_cont_second');


    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s, tid;



    clearInterval(tid);
    tid = setInterval(function () {
        if ( leftTime >= 0 ) {
            d = Math.floor( leftTime / 1000 / 60 / 60 / 24 );
            h = Math.floor( leftTime / 1000 / 60 / 60 % 24 );
            m = Math.floor( leftTime / 1000 / 60 % 60 );
            s = Math.floor( leftTime / 1000 % 60 );


            if( d <  10 ) { d = '0' + d }
            if( h <  10 ) { h = '0' + h }
            if( m <  10 ) { m = '0' + m }
            if( s <  10 ) { s = '0' + s }
            //将倒计时赋值到div中
            _day.html(d);
            _hour.html(h);
            _minute.html(m);
            _second.html(s);

            //
            leftTime -= 1000;
        } else if( leftTime == 0 || leftTime < 0 ) { showBtn(); clearInterval(tid); }
    }, 1000);




    function showBtn() {
        console.log(2);
        _time_btns_container.show();
    }
    function hideBtn() {
        console.log(1);
        _time_btns_container.hide();
    }
});

// var tid, tid_resize, realClientHeight, clientHeight;
// $(function () {
//     clientHeight = window.innerHeight || document.body.clientHeight || document.body.offsetHeight;
//     realClientHeight = clientHeight ? clientHeight - 90 : 50;
// });
// $(window).resize(function () {
//     clearTimeout(tid_resize);
//     tid_resize = setTimeout(function () {
//         clientHeight = window.innerHeight || document.body.clientHeight || document.body.offsetHeight;
//         realClientHeight = clientHeight ? clientHeight - 90 : 50;
//     }, 50)
// });
// jQuery to collapse the navbar on scroll
function resetScroll() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
}
var tid;
$(window).scroll(function () {
    clearTimeout(tid);
    tid = setTimeout(function () {
        resetScroll();
    }, 50)
});
$(function () {
    resetScroll();
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.overlay-menu ul li a,.scroll-top a,.navbar-nav a,footer .link a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            // scrollTop: $($anchor.attr('href')).offset().top
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// WOW.js initialise
// WOW.js uses animate.css to animate/reveal elements.
// Browse the list of animation effects available here-> https://daneden.github.io/animate.css/
$(function () {
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
});



// Closes the Responsive Menu on Menu Item Click
$('.overlay-menu ul li a').click(function () {
    $('.button_container:visible').click();
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Navigation show/hide
$('.toggle').click(function () {
    if ($('#overlay.open')) {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    }
});


// Client testimonials
/*$(function () {

    var owl = $(".client-testimonials");
    owl.owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
});*/

// Client Slider Carousel
/*$(function () {

    var owl = $(".client-slider");
    if( !owl ) { return false }
    owl.owlCarousel({
        items: 4, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 2], //1 item between 480 and 0
        pagination: false, // Show pagination
        navigation: false // Show navigation
    });

});*/

// Team
/*$(function () {
    var owl = $(".team-ljp");
    if( !owl ) { return false }
    owl.owlCarousel({
        autoPlay: 3000,
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 3], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });
    // Custom Navigation Events
    $("#team .btn-next").on('click', function () {
        owl.trigger('owl.next');
    });
    $("#team .btn-prev").on('click', function () {
        owl.trigger('owl.prev');
    })
    var owl_guwen = $(".team-2jp");
    owl_guwen.owlCarousel({
        autoPlay: 3000,
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });
    // Custom Navigation Events
    $("#guwen .btn-next").on('click', function () {
        owl_guwen.trigger('owl.next');
    });
    $("#guwen .btn-prev").on('click', function () {
        owl_guwen.trigger('owl.prev');
    })

});*/

// Recent Project Carousel
/*$(function () {
    var owl = $(".recent-project-carousel");
    if( !owl ) { return false }
    owl.owlCarousel({
        items: 1, //5 items above 1000px browser width
        itemsDesktop: [1024, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });

    // Custom Navigation Events
    $("#portfolio .btn-next").on('click', function () {
        owl.trigger('owl.next');
    });
    $("#portfolio .btn-prev").on('click', function () {
        owl.trigger('owl.prev');
    });
    $("#portfolio .table-bordered td").on("click", function () {
        var index = ~~$(this).attr("data-index");
        owl.trigger('owl.goTo', index);
    });
});*/


// Lightbox
/*$(function () {
    $('.popup-gallery').magnificPopup({
        delegate: '.full-project a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title') + '<small>by Hallooou</small>';
            }
        }
    });

});*/

//news
$(function () {
    $("li[data-content='article']").click(function () {
        $("#news-modal").modal();
        $("#news-modal .modal-services-content").load($(this).attr("data-href"));
    });
});