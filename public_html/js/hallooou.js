/******** 倒计时    *********/
$(function () {

    var endDateStr = '2018/1/26 19:57:00';

    /*初始隐藏按钮*/
    /*按钮*/
    var _time_btns_container = $('#time_btns_container');
    // console.log(_time_btns_container);
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
        // console.log(2);
        _time_btns_container.show();
    }
    function hideBtn() {
        // console.log(1);
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
            scrollTop: $($anchor.attr('href')).offset().top - 60
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


// jQuery Parallax. More info here-> https://github.com/IanLunn/jQuery-Parallax
$(function () {
    // apply parallax effect only when body has the ".parallax-page" class
    if ($('body').hasClass('parallax-page')) {
        //.parallax(xPosition, speedFactor, outerHeight) options:
        //xPosition - Horizontal position of the element
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport

        $('#parallax-slide').parallax("50%", 0.1);
        $('#products').parallax("50%", 0.1);
        $('#portfolio').parallax("50%", 0.1);
        $('#page-aboutus').parallax("50%", 0.1);
    }
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
// $(function () {
//
//     var owl = $(".client-testimonials");
//
//     owl.owlCarousel({
//         navigation: false, // Show next and prev buttons
//         slideSpeed: 300,
//         paginationSpeed: 400,
//         singleItem: true
//     });
//
// });

// Client Slider Carousel
// $(function () {
//
//     var owl = $(".client-slider");
//
//     owl.owlCarousel({
//         items: 4, //5 items above 1000px browser width
//         itemsDesktop: [1024, 4], //4 items between 1000px and 901px
//         itemsDesktopSmall: [900, 3], // betweem 900px and 601px
//         itemsTablet: [600, 2], //2 items between 600 and 480
//         itemsMobile: [479, 2], //1 item between 480 and 0
//         pagination: false, // Show pagination
//         navigation: false // Show navigation
//     });
//
// });

//业务
$(function () {
    $("#services").on("click", ".services-item[data-target]", function (event, data) {
        var $t = $(this),
            $target = $($t.attr("data-target")),
            $p = $target.closest(".services-proj")
            ;
        if ($p.is(":hidden")) {
            $p.show();
            setTimeout(function () {
                $p.addClass("in");
            }, 200);
        } else {
            //$p.removeClass("in");
        }
    }).on("click", ".close", function (event, data) {
        var $t = $(this).closest(".services-proj").removeClass("in");
        setTimeout(function () {
            $t.hide();
        }, 200);
    })
});

// Team
$(function () {
    var owl = $(".team-ljp");
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
    // var owl_guwen = $(".team-2jp");
    // owl_guwen.owlCarousel({
    //     autoPlay: 3000,
    //     items: 3, //5 items above 1000px browser width
    //     itemsDesktop: [1024, 4], //4 items between 1000px and 901px
    //     itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    //     itemsTablet: [600, 2], //2 items between 600 and 480
    //     itemsMobile: [479, 1], //1 item between 480 and 0
    //     pagination: true, // Show pagination
    //     navigation: false // Show navigation
    // });
    // // Custom Navigation Events
    // $("#guwen .btn-next").on('click', function () {
    //     owl_guwen.trigger('owl.next');
    // });
    // $("#guwen .btn-prev").on('click', function () {
    //     owl_guwen.trigger('owl.prev');
    // })

});

// Recent Project Carousel
// $(function () {
//     var owl = $(".recent-project-carousel");
//     owl.owlCarousel({
//         items: 1, //5 items above 1000px browser width
//         itemsDesktop: [1024, 4], //4 items between 1000px and 901px
//         itemsDesktopSmall: [900, 2], // betweem 900px and 601px
//         itemsTablet: [600, 2], //2 items between 600 and 480
//         itemsMobile: [479, 1], //1 item between 480 and 0
//         pagination: true, // Show pagination
//         navigation: false // Show navigation
//     });
//
//     // Custom Navigation Events
//     $("#portfolio .btn-next").on('click', function () {
//         owl.trigger('owl.next');
//     });
//     $("#portfolio .btn-prev").on('click', function () {
//         owl.trigger('owl.prev');
//     });
//     $("#portfolio .table-bordered td").on("click", function () {
//         var index = ~~$(this).attr("data-index");
//         owl.trigger('owl.goTo', index);
//     });
// });


// Counter
$(function () {

    $('.counter-section').on('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });

});


// Carousel Slider
$(function () {
    interval: 8000 //changes the speed
});


// YouTube Player
$(function () {
    $(".player").mb_YTPlayer();

    $('#video-play').click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('fa-play')) {
            $('.player').playYTP();
        } else {
            $('.player').pauseYTP();
        }
        $(this).toggleClass('fa-play fa-pause');
        return false;
    });

    $('#video-volume').click(function (event) {
        event.preventDefault();
        $('.player').toggleVolume();
        $(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });
});


// HTML5 Player
$(function () {

    var vid = $("#html5-video").get(0);

    $('#html5-video-play').click(function (event) {
        event.preventDefault();
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
        $(this).toggleClass('fa-play fa-pause');
        return false;
    });

    $('#html5-video-volume').click(function (event) {
        event.preventDefault();
        if (vid.muted) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
        $(this).toggleClass('fa-volume-off fa-volume-up');
        return false;
    });
});


// Lightbox
$(function () {
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

});

//news
$(function () {
    $("li[data-content='article']").click(function () {
        $("#news-modal").modal();
        $("#news-modal .modal-services-content").load($(this).attr("data-href"));
    });
});

// Contact form
$(function () {
    // validate contact form on keyup and submit
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                lettersonly: true
            },
            email: {
                required: true,
                minlength: 6,
                email: true
            },
            phone: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 15
            },
            message: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Minimum 2 characters",
                lettersonly: "Only letters please!"
            },
            email: {
                required: "Please enter your email address",
                minlength: "Minimum 6 characters",
                email: "That's an invalid email"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Only digits (no spaces)",
                minlength: "Minimum 10 characters",
                maxlength: "Maximum 15 characters"
            },
            message: {
                required: "Please enter your message",
                minlength: "Minimum 6 characters"
            }
        },
        success: function (label) {
            label.addClass("valid").text("Perfect!");
        },
        submitHandler: function (element) {

            var ajaxform = $(element),
                url = ajaxform.attr('action'),
                type = ajaxform.attr('method'),
                data = {};

            $(ajaxform).find('[name="submit"]').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Sending...');


            ajaxform.find('[name]').each(function (index, value) {
                var field = $(this),
                    name = field.attr('name'),
                    value = field.val();

                data[name] = value;

            });

            $.ajax({
                url: url,
                type: type,
                data: data,
                success: function (response) {
                    if (response.type == 'success') {
                        $("#contactForm").before("<div class='alert alert-success' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        $(ajaxform).each(function () {
                            this.reset();
                            $(this).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                        }).find('.valid').each(function () {
                            $(this).remove('label.valid');
                        })
                    } else if (response.type == 'error') {
                        $("#contactForm").before("<div class='alert alert-danger' role='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a>" + response.text + "</div>");
                        $(ajaxform).find('[name="submit"]').html('<i class="fa fa-paper-plane fa-fw"></i> Send');
                    }
                }
            });

            return false;
        }
    });

});
