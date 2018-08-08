ua = navigator.userAgent;
android = ua.search(/Android/);

if (android == -1) {
    ios = ua.match(/(CPU|iPhone) OS (\w+){1,3}/g);
    if (ios) {
        iosv = ios.toString().search("7_");
    } else {
        iosv = -1;
    }
} else {
    iosv = -1;
}

loop = (iosv <= -1);

(function($) {
    $(function() {
        $(".flexslider").flexslider({
            animation: "slide",
            slideshowSpeed: 5000, //繧ｹ繝ｩ繧､繝峨す繝ｧ繝ｼ縺ｮ譎る俣//
            pauseOnAction: false,
            animationLoop: loop,
        });
    });
})(jQuery);
