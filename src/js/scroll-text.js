var $ = require("jquery");

$(window).scroll(function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
        $(".scroll-down").addClass("scroll-down-hidden");
    }
    else {
        $(".scroll-down").removeClass("scroll-down-hidden");
    }

    if ($(window).scrollTop() > 300) {
        $(".scroll-top").addClass("scroll-top-visible");
    }
    else {
        $(".scroll-top").removeClass("scroll-top-visible");
    }
});