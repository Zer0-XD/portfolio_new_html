var $ = require("jquery");

$(window).scroll(function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
        $(".scroll-down").addClass("scroll-down-hidden");
        // $("#scroll-down").removeClass("scroll-down");
        // $("scroll-down").href = "#";
        $('#scroll-down').css('pointer-events', 'none');
    }
    else {
        $(".scroll-down").removeClass("scroll-down-hidden");
        // $("#scroll-down").addClass("scroll-down");
        $('#scroll-down').css('pointer-events', 'none');
        // $("scroll-down").attr("href", "#about-section");
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1300) {
        $('#scroll-down').css('pointer-events', 'none');
    }
    else {
        $('#scroll-down').css('pointer-events', 'auto');
    }

    if ($(window).scrollTop() > 300) {
        $(".scroll-top").addClass("scroll-top-visible");
    }
    else {
        $(".scroll-top").removeClass("scroll-top-visible");
    }
});