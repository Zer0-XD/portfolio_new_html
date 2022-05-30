var $ = require("jquery");

$(window).scroll(function (event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
        $(".scroll-down").addClass("scroll-down-hidden");
    }
    else {
        $(".scroll-down").removeClass("scroll-down-hidden");
    }
});
