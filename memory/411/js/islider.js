;(function($) {

    $.iSlider = function(el, options) {

        var vars = $.extend({}, $.iSlider.defaults, options)
          , list = el.find(vars.elem)
          , container = el.find(vars.elem + ' > li')
          , touch = false
          , isTouch = false
          , timeSw = false
          , length = false
          , width = 0
          , height = parseInt(vars.height)
          , move = 0
          , point = 0
          , pointY = 0
          , pointX = 0
          , identifier = 0
          , currentMove = 0
          , afterTouch = false
          , touchFlag = vars.touch
          , navi = vars.navi + ":not('.clone')"
          , navi_child = vars.navi_child
          , selected = vars.selected
          , loop = vars.loop
          , startSlide = (vars.loop ? 1 : 0) + (vars.start)
          , engine = ""
          , $currentSlide = false
          , scroll_end = false
          , zoom = vars.zoom
          , zoom_start_length = 0
          , zoom_margin = []
          , zoom_mag = 0
          , zoomin = 1
          , zoom_end = []
          , margin = []
          , target = []
          , left = []
          , top = []
          , methods = {}
          , trimetric = {};

        trimetric = {
            scalar: function(x, y) {
                return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            },
            unit_vector: function(stx, tax, sty, tay) {
                var vector = [];
                var vscalar = trimetric.scalar(tax - stx, tay - sty);
                vector[0] = (tax - stx) / vscalar;
                vector[1] = (tay - sty) / vscalar;
                return vector;
            }
        }

        methods = {
            init: function() {

                length = container.css({
                    'float': 'left',
                    'display': 'block'
                }).length;

                if (length <= 1)
                    vars.slideshowSpeed = 0;

                if (loop) {
                    before = container.eq(length - 1).clone().addClass('clone');
                    after = container.eq(0).clone().addClass('clone');
                    before.appendTo(list);
                    container.appendTo(list);
                    after.appendTo(list);
                }

                container = el.find(vars.elem + ' > li');
                var c_css = {
                    "overflow": "hidden",
                    "position": vars.position,
                    "width": vars.width
                };
                $.extend(c_css, vars.css);
                cover = $('<div class="cover"></div>').css(c_css);
                el.append(cover);

                view = list.appendTo(cover);
                width = parseInt(cover.css('width'));
                view.css('width', (width * (length + 2)) + "px");
                view.show();

                if (!height)
                    height = parseInt(container.css('height'));

                el.append($("<input type='hidden' class='currentSlide' value='" + startSlide + "' loop='" + loop + "'>"));

                if (navi) {
                    if (navi_child) {
                        $(navi).find(navi_child).eq(vars.start).addClass(selected);
                    } else {
                        $(navi).find("li > a").eq(vars.start).addClass(selected);
                    }
                }

                $currentSlide = el.find('.currentSlide');

                methods.getEngine();

                list.css(engine + 'transform', "translate3d(-" + (startSlide * width) + "px, 0,0)").css(engine + "transition-duration", "0ms");

                methods.timer();
                if (touchFlag) {
                    methods.touch();
                }
            },
            timer: function() {
                if (!vars.slideshowSpeed)
                    return;
                timeSw = setTimeout(function() {
                    list.css(engine + "transition", "600ms");

                    nextSlide = parseInt($currentSlide.val()) + 1;

                    if (!loop && nextSlide == length) {
                        clearTimeout(timeSw);
                        return;
                    } else if (loop && nextSlide > length + 1) {
                        nextSlide = 0;
                    }

                    $currentSlide.val(nextSlide).trigger('change');

                }, vars.slideshowSpeed);
            },

            touch: function() {
                isTouch = ('ontouchstart'in window);
            },
            move: function(e) {
                var $zoom_img = container.eq($currentSlide.val()).find('img');

                if (zoom_end[$currentSlide.val()] > 1) {
                    if (methods.zoom_point_move(e))
                        return;
                }
                if (!touch)
                    return;

                currentPoint = (isTouch ? event.changedTouches[0].pageX : e.pageX);

                move = point - currentPoint;
                if (Math.abs(move) > 7 && isTouch) {
                    event.preventDefault();
                }
                if ((($currentSlide.val() * width) + move) > (length + (loop ? 1 : -1)) * width) {
                    currentMove = (length + (loop ? 1 : -1)) * width;
                    scroll_end = true;
                } else if ((($currentSlide.val() * width) + move) < 0) {
                    currentMove = 0;
                    scroll_end = true;
                } else {
                    currentMove = (($currentSlide.val() * width) + move);
                    scroll_end = false;
                }

                window.iSliderScrollEnd = scroll_end;

                list.css(engine + "transform", "translate3d(-" + currentMove + "px, 0,0)");
            },

            stop: function(e) {
                if (!touch)
                    return;

                touch = false;
                scroll = false;
                point = 0;
                pointX = 0;
                pointY = 0;
                movingSlide = parseInt(Math.abs(move) / width);

                if (Math.abs(move) % width > width / 3) {
                    movingSlide++;
                }
                move < 0 ? lr = -1 : lr = 1;
                move = 0;
                nextSlide = parseInt($currentSlide.val()) + (movingSlide * lr);

                if (nextSlide > length + (loop ? 1 : -1)) {
                    nextSlide = length + (loop ? 1 : -1);
                } else if (nextSlide < 0) {
                    nextSlide = 0;
                }
                $currentSlide.val(nextSlide).trigger('change', [true]);
            },
            checkClone: function() {
                if ($currentSlide.val() == 0) {
                    $currentSlide.val(length);
                } else {
                    $currentSlide.val(1);
                }
                setTimeout(function() {

                    list.css(engine + "transition", "0ms").css(engine + "transform", "translate3d(-" + ($currentSlide.val() * width) + "px, 0,0)");
                }, 0);

            },
            getEngine: function() {
                var info = document.createElement('div')
                  , engines = ['WebkitPerspective', 'MozPerspective', 'OPerspective'];
                for (var i in engines) {
                    if (info.style[engines[i]] !== undefined) {
                        engine = "-" + engines[i].replace('Perspective', '').toLowerCase() + "-";
                        return;
                    }
                }
            },
            currentNavi: function() {
                if (navi) {
                    var $navi;
                    var notclone = vars.child_elem ? $(vars.child_elem + ':not(".clone")') : $(document);
                    if (navi_child) {
                        $navi = notclone.find(navi).find(navi_child);
                    } else {
                        $navi = notclone.find(navi).find('li > a');
                    }
                    for (var i = 0; i < $navi.length; i++) {
                        if (parseInt($currentSlide.val()) + (loop ? -1 : 0) == i) {
                            $navi.eq(i).addClass(selected);
                        } else {
                            $navi.eq(i).removeClass(selected);
                        }
                    }
                    if (loop && container.eq($currentSlide.val()).hasClass('clone')) {
                        if ($currentSlide.val() > length) {
                            $navi.eq(0).addClass(selected);
                        } else {
                            $navi.eq(length - 1).addClass(selected);
                        }
                    }
                }

            },
            set_zoom_assign: function() {

                zoom_start_length = Math.sqrt(Math.pow(Math.abs(event.touches[0].pageX - event.touches[1].pageX), 2) + Math.pow(Math.abs(event.touches[0].pageY - event.touches[1].pageY), 2));
                zoom_margin[0] = methods.centerLocation(event.touches[0].pageX, event.touches[1].pageX);
                zoom_margin[1] = methods.centerLocation(event.touches[0].pageY, event.touches[1].pageY) - (el.offset().top);
                if (zoom_margin[0] < 0)
                    zoom_margin[0] = 0;
                if (zoom_margin[1] < 0)
                    zoom_margin[1] = 0;

                if (!zoom_end[$currentSlide.val()])
                    zoom_end[$currentSlide.val()] = 1;

                var $zoom_img = container.eq($currentSlide.val()).find('img');
                if (!left[$currentSlide.val()])
                    left[$currentSlide.val()] = parseInt($zoom_img.css('margin-left')) + ((width * zoom_end[$currentSlide.val()]) - width) * 0.5;
                if (!top[$currentSlide.val()])
                    top[$currentSlide.val()] = parseInt($zoom_img.css('margin-top')) + ((height * zoom_end[$currentSlide.val()]) - height) * 0.5;
            },
            centerLocation: function(a, b) {
                return (a + b) / 2;
            },
            zoom_move: function(e) {
                if (identifier)
                    return;
                event.preventDefault();
                var $zoom_img = container.eq($currentSlide.val()).find('img');

                var current_zoom = trimetric.scalar(Math.abs(event.touches[0].pageX - event.touches[1].pageX), Math.abs(event.touches[0].pageY - event.touches[1].pageY));
                zoom_mag = zoom / trimetric.scalar(width * zoom_end[$currentSlide.val()], height * zoom_end[$currentSlide.val()]);
                zoomin = (current_zoom - zoom_start_length) * zoom_mag + zoom_end[$currentSlide.val()];
                if (zoomin < 1) {
                    zoomin = 1;
                } else if (zoomin > zoom) {
                    zoomin = zoom;
                }

                $zoom_img.css({
                    'height': (height * zoomin) + 'px',
                    'width': (width * zoomin) + 'px'
                });

                var center_horizontal = left[$currentSlide.val()] - ((width * zoomin) - width) * 0.5
                  , center_vertical = top[$currentSlide.val()] - ((height * zoomin) - height) * 0.5;

                if (zoomin == zoom) {
                    var x = parseInt($zoom_img.css('margin-left'))
                      , y = parseInt($zoom_img.css('margin-top'));
                } else if (zoom_end[$currentSlide.val()] > zoomin) {
                    var x1 = left[$currentSlide.val()]
                      , x2 = 0
                      , y1 = -top[$currentSlide.val()]
                      , y2 = 0;
                    var vector = trimetric.unit_vector(x1, x2, y1, y2);
                    var x = -((current_zoom - zoom_start_length) * vector[0]) + center_horizontal
                      , y = -((current_zoom - zoom_start_length) * vector[1]) + center_vertical;

                } else {
                    var x1 = zoom_margin[0] * zoomin
                      , x2 = width * 0.5 * zoomin
                      , y1 = -1 * zoom_margin[1] * zoomin
                      , y2 = -1 * height * 0.5 * zoomin;
                    var vector = trimetric.unit_vector(x1, x2, y1, y2);
                    var x = ((current_zoom - zoom_start_length) * vector[0]) + center_horizontal
                      , y = -((current_zoom - zoom_start_length) * vector[1]) + center_vertical;

                }

                if (x > 0) {
                    x = 0;
                } else if ((width * zoomin) + x - width < 0) {
                    x = -(width * zoomin) + width;
                }

                if (y > 0) {
                    y = 0;
                } else if ((height * zoomin) + y - height < 0) {
                    y = -(height * zoomin) + height;
                }

                $zoom_img.css({
                    "margin-left": x + "px",
                    "margin-top": y + "px"
                });

            },
            zoom_point_move: function(e) {
                var $zoom_img = container.eq($currentSlide.val()).find('img');

                var currentY = (isTouch ? event.changedTouches[0].pageY : e.pageY)
                  , currentX = (isTouch ? event.changedTouches[0].pageX : e.pageX);

                var moveX = currentX - pointX
                  , moveY = currentY - pointY;

                var currentTop = top[$currentSlide.val()] - (((height * zoom_end[$currentSlide.val()]) - height) * 0.5)
                  , currentLeft = left[$currentSlide.val()] - (((width * zoom_end[$currentSlide.val()]) - width) * 0.5);

                if (currentTop + moveY < 0 && (height * zoom_end[$currentSlide.val()] - height) >= -1 * (currentTop + moveY) && Math.abs(move) < 7) {
                    event.preventDefault();
                    $zoom_img.css("margin-top", currentTop + moveY);
                }

                if (currentLeft + moveX < 0 && (width * zoom_end[$currentSlide.val()] - width) >= -1 * (currentLeft + moveX)) {
                    $zoom_img.css("margin-left", currentLeft + moveX);
                    point = currentX;
                    return true;

                } else {
                    return false;
                }
            }
        }

        methods.init();

        list.bind("webkitTransitionEnd transitionend", function() {

            if (container.eq($currentSlide.val()).hasClass('clone') && loop) {
                methods.checkClone();
            }
        });

        $currentSlide.change(function() {

            if ($currentSlide.val() < 0) {
                $currentSlide.val(0);
            } else if ($currentSlide.val() > (length + 1) && loop) {
                $currentSlide.val((length + 1));
            } else if ($currentSlide.val() > (length - 1) && !loop) {
                $currentSlide.val((length - 1));
            }

            clearTimeout(timeSw);
            list.css(engine + "transition-duration", "600ms");
            setTimeout(function() {
                list.css(engine + "transform", "translate3d(-" + ($currentSlide.val() * width) + "px, 0,0)");
            }, "0ms");

            if (scroll_end && loop) {
                methods.checkClone();
                scroll_end = false;
            } else if (container.eq($currentSlide.val()).hasClass('clone') && currentMove == ($currentSlide.val() * width) && loop && afterTouch) {
                methods.checkClone();
            }

            methods.currentNavi();
            currentMove = 0;
            afterTouch = false;
            methods.timer();

            window.iSliderAfterTouch = afterTouch;
        });

        if (navi) {

            var $navi;
            if (navi_child) {
                $navi = $(navi).find(navi_child);
            } else {
                $navi = $(navi).find('li > a');
            }

            $navi.click(function() {
                $currentSlide.val($navi.index(this) + (loop ? +1 : 0)).trigger('change');
            });
        }

        el.bind(isTouch ? 'touchstart' : 'mousedown', function(e) {
            if (!touchFlag)
                return;
            if (isTouch) {
                if (event.touches.length == 2 && zoom > 1 && Math.abs(move) < 8) {
                    identifier = 0;
                    methods.set_zoom_assign();
                } else if (!identifier) {
                    identifier = event.changedTouches[0].identifier;
                } else if (event.touches.length == 1) {
                    identifier = event.changedTouches[0].identifier;
                } else {
                    return;
                }
            }
            clearTimeout(timeSw);
            point = (isTouch ? event.changedTouches[0].pageX : e.pageX);
            pointX = (isTouch ? event.changedTouches[0].pageX : e.pageX);
            pointY = (isTouch ? event.changedTouches[0].pageY : e.pageY);
            afterTouch = true;
            touch = true;
            list.css(engine + "transition-duration", "0ms");

            window.iSliderAfterTouch = afterTouch;
        });

        if (!isTouch) {
            $(window).bind('mousemove', function(e) {
                methods.move(e);
            });

            $(window).bind('mouseup', function(e) {
                methods.stop(e);
            });
        } else {

            el.bind('gestureend', function(e) {
                if (zoomin)
                    zoom_end[$currentSlide.val()] = zoomin;
                //zoomin = 1;
            });

            el.bind('touchmove', function(e) {
                if (zoom_margin.length) {
                    methods.zoom_move();
                    return;
                }
                if (event.changedTouches[0].identifier != identifier)
                    return;
                methods.move(e);
            });
            el.bind('touchend', function(e) {
                if (zoom_end[$currentSlide.val()]) {
                    var $zoom_img = container.eq($currentSlide.val()).find('img');
                    left[$currentSlide.val()] = parseInt($zoom_img.css('margin-left')) + ((width * zoom_end[$currentSlide.val()]) - width) * 0.5;
                    top[$currentSlide.val()] = parseInt($zoom_img.css('margin-top')) + ((height * zoom_end[$currentSlide.val()]) - height) * 0.5;
                }
                if (zoom_margin.length) {
                    zoom_margin = [];
                }
                if (event.changedTouches[0].identifier != identifier)
                    return;

                methods.stop(e);
                identifier = 0;

            });

        }

        $('img').on('dragstart', function(event) {
            if (!isTouch) {
                event.preventDefault();
            }
        });
        el.css(engine + "user-select", "none").css(engine + "tap-highlight-color", "rgba(0,0,0,0)");

    }

    $.iSlider.defaults = {
        elem: ".slides",
        position: 'absolute',
        css: {},
        navi: false,
        navi_child: false,
        child_elem: false,
        selected: "selected",
        loop: true,
        touch: true,
        slideshowSpeed: 5000,
        height: 0,
        width: "320px",
        zoom: 1,
        start: 0
    }
    $.fn.iSlider = function(options) {
        new $.iSlider(this,options);
    }

}
)(jQuery);
