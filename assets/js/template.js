/* ----------------------------------------------------------------

[ Custom settings ]

01. Mobile 
02. Preloader
03. ScrollIt
04. Full Height
05. Animations
06. Navbar scrolling background
07. Close navbar-collapse when a clicked
08. Sections background image from data background 
09. YouTubePopUp
10. Story owlCarousel
11. Events owlCarousel
12. Gift Registry owlCarousel
13. Slider
14. Gallery
15. Magnific Popup
16. Progress-wrap
17. RSVP Form
18. Countdown wedding


------------------------------------------------------------------- */

(function () {
  "use strict";

  // Mobile
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  // Preloader
  jQuery(window).load(function () {
    jQuery(".preloader").fadeOut("slow");
  });

  var wind = jQuery(window);

  jQuery(function ($) {
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "swing", // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: "active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: -70, // offste (in px) for fixed top navigation
    });
  });

  // Full Height
  var fullHeight = function () {
    if (!isMobile.any()) {
      jQuery(".js-fullheight").css("height", jQuery(window).height());
      jQuery(window).resize(function () {
        jQuery(".js-fullheight").css("height", jQuery(window).height());
      });
    }
  };

  // Animations
  var contentWayPoint = function () {
    var i = 0;
    jQuery(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !jQuery(this.element).hasClass("animated")
        ) {
          i++;
          jQuery(this.element).addClass("item-animate");
          setTimeout(function () {
            jQuery("body .animate-box.item-animate").each(function (k) {
              var el = jQuery(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      {
        offset: "85%",
      }
    );
  };

  // Navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = jQuery(".navbar"),
      logo = jQuery(".navbar .logo> img");
    if (bodyScroll > 100) {
      navbar.addClass("nav-scroll");
      logo.attr("src", "images/logo-dark.png");
    } else {
      navbar.removeClass("nav-scroll");
      logo.attr("src", "images/logo-light.png");
    }
  });

  // Close navbar-collapse when a  clicked
  jQuery(".navbar-nav .dropdown-item a").on("click", function () {
    jQuery(".navbar-collapse").removeClass("show");
  });

  // Sections background image from data background
  var pageSection = jQuery(".bg-img, section");
  pageSection.each(function (indx) {
    if (jQuery(this).attr("data-background")) {
      jQuery(this).css(
        "background-image",
        "url(" + jQuery(this).data("background") + ")"
      );
    }
  });

  jQuery(function () {
    contentWayPoint();
  });

  // // YouTubePopUp
  // jQuery("a.vid").YouTubePopUp();

  // Story owlCarousel
  jQuery(".story .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: true,
    nav: false,
    animateOut: "fadeOut",
    navText: [
      '<i class="ti-arrow-left" aria-hidden="true"></i>',
      '<i class="ti-arrow-right" aria-hidden="true"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Events owlCarousel
  jQuery(".events .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    mouseDrag: true,
    autoplay: false,
    dots: true,
    nav: false,
    animateOut: "fadeOut",
    navText: [
      '<i class="ti-arrow-left" aria-hidden="true"></i>',
      '<i class="ti-arrow-right" aria-hidden="true"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Bridesmaid owlCarousel
  jQuery(".bridesmaid .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    mouseDrag: true,
    autoplay: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Groomsmen owlCarousel
  jQuery(".groomsmen .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    mouseDrag: true,
    autoplay: false,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Gift Registry owlCarousel
  jQuery(".gift-registry .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    mouseDrag: true,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 10,
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  // Slider
  var sliderMain = function () {
    jQuery(".flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      slideshow: false,
      directionNav: true,
      start: function () {
        setTimeout(function () {
          jQuery(".slider-text").removeClass("animated fadeInUp");
          jQuery(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
      before: function () {
        setTimeout(function () {
          jQuery(".slider-text").removeClass("animated fadeInUp");
          jQuery(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
    });
  };

//   // Gallery
//   jQuery(window).on("load", function () {
//     var e = jQuery(".gallery-filter"),
//       a = jQuery("#gallery-filter");
//     e.isotope({
//       filter: "*",
//       layoutMode: "masonry",
//       animationOptions: {
//         duration: 750,
//         easing: "linear",
//       },
//     }),
//       a.find("a").on("click", function () {
//         var o = jQuery(this).attr("data-filter");
//         return (
//           a.find("a").removeClass("active"),
//           jQuery(this).addClass("active"),
//           e.isotope({
//             filter: o,
//             animationOptions: {
//               animationDuration: 750,
//               easing: "linear",
//               queue: !1,
//             },
//           }),
//           !1
//         );
//       });
//   });

//   Magnific Popup
      jQuery(".img-zoom").magnificPopup({
      type: "image"
      , closeOnContentClick: !0
      , mainClass: "mfp-fade"
      , gallery: {
          enabled: !0
          , navigateByImgClick: !0
          , preload: [0, 1]
      }
  });

  // Document on load.
  jQuery(function () {
    fullHeight();
    contentWayPoint();
    sliderMain();
  });

  // Progress-wrap
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = jQuery(window).scrollTop();
    var height = jQuery(document).height() - jQuery(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  jQuery(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
})();

// Countdown wedding
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let birthday = "July 22, 2025 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = String(
        Math.floor(distance / day)
      ).padStart(2, "0");
      document.getElementById("hours").innerText = String(
        Math.floor((distance % day) / hour)
      ).padStart(2, "0");
      document.getElementById("minutes").innerText = String(
        Math.floor((distance % hour) / minute)
      ).padStart(2, "0");
      document.getElementById("seconds").innerText = String(
        Math.floor((distance % minute) / second)
      ).padStart(2, "0");

      //do something later when date is reached
      if (distance < 0) {
        //   let headline = document.getElementById("headline"),
        //       countdown = document.getElementById("countdown"),
        //       content = document.getElementById("content");

        //   headline.innerText = "It's our wedding!";
        //   countdown.style.display = "none";
        //   content.style.display = "block";
        const countdownElement = document.querySelector(
          "section#section-countdown"
        );
        countdownElement.style.display = "none";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();
