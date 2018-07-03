//UTF-8
$(function() {

    /*笆ｼ繧｢繝峨Ξ繧ｹ繝舌�髱櫁｡ｨ遉ｺ笆ｼ*/
    addEventListener("DOMContentLoaded", function() {
        setTimeout(hideURLbar, 100);
    }, false);

    function hideURLbar() {
        if (window.pageYOffset === 0)
            window.scrollTo(0, 1);
    }


    /*笆ｼua蛻､螳壺名*/
    var ua = navigator.userAgent;
    if (ua.indexOf('ChromeApp') > -1) {
        var start = "mousedown";
        var end = "mouseup";
    } else if ((ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) && 'ontouchstart' in window) {
        var start = "touchstart";
        var end = "touchend";
    } else {
        var start = "mousedown";
        var end = "mouseup";
    }
    window.start = start;
    window.end = end;

    /*笆ｼ繧ｫ繝ｼ繝我ｸ諡ｬ驕ｸ謚柞n,off笆ｼ*/
    var cardChk = 0;
    $("#card_lump").click(function() {
        if (cardChk == 0) {
            $(".chkbox").prop("checked", true);
            $("#lnk_msg").text("蜈ｨ縺ｦ繝√ぉ繝�け繧貞､悶☆");
            cardChk = 1;
        } else {
            $(".chkbox").prop("checked", false);
            $("#lnk_msg").text("蜈ｨ縺ｦ繝√ぉ繝�け繧剃ｻ倥￠繧�");
            cardChk = 0;
        }
        return false;
    });
    $("#chks_change").click(function() {
        if (cardChk == 0) {
            $(".chkbox").prop("checked", false);
            $("#lnk_msg").text("蜈ｨ縺ｦ繝√ぉ繝�け繧剃ｻ倥￠繧�");
            cardChk = 1;
        } else {
            $(".chkbox").prop("checked", true);
            $("#lnk_msg").text("蜈ｨ縺ｦ繝√ぉ繝�け繧貞､悶☆");
            cardChk = 0;
        }
        return false;
    });



    /* 繝懊ち繝ｳ蜃ｹ縺ｿ */
    (function() {
        var actions = {};
        actions[window.start] = function(e) {
            $(e.currentTarget).addClass('_hover');
        };
        actions[window.end] = function(e) {
            $(e.currentTarget).removeClass('_hover');
        };
        actions["mouseleave"] = function(e) {
            $(e.currentTarget).removeClass('_hover');
        };
        var onBtnElem = $('.jsOnBtn a, .jsOnBtn :submit, .jsOnBtn label');
        onBtnElem.on(actions);
        $('.jsOnBtn-wrap').on(actions, 'a, :submit, label');
    })();

    $(window).load(function() {
        var on_css = {
            "transform": "scale(0.95,0.95)",
            "-webkit-transform": "scale(0.95,0.95)"
        };
        var off_css = {
            "transform": "",
            "-webkit-transform": ""
        };
        var actions = {
            'touchstart mousedown': function(e) {
                get_target(e).css(on_css)
            },
            'touchend mouseup mouseleave': function(e) {
                get_target(e).css(off_css)
            },
        }
        /* 繝�じ繧､繝ｳ繝懊ち繝ｳ蜃ｹ縺ｿ */
        $('.jsOnDesignBtn').on(actions);

        /* 蟆�擂逧�↓逕滓�縺輔ｌ繧掬om縺ｫ蟇ｾ縺励※縺ｮ邵ｮ蟆丞�逅� */
        $('.jsOnDesignBtn-wrap').on(actions, '.jsOnDesignBtn');

        function get_target(e) {
            var $target = $(e.currentTarget);
            if ($target.prop("tagName") == "A" && $target.css("display") == "inline" && $target.find("img").size() >= 1) {
                $target = $target.find("img");
            }
            return $target;
        }
    });

    /*笆ｼ繝倥ャ繝繝ｼ謚倥ｊ縺溘◆縺ｿ繝｡繝九Η繝ｼ笆ｼ*/
    var menuItem = $("#headerAcd");
    var panel = $("#headerAccordion");
    panel.hide();
    //	menuItem.on(window.start,function(){
    menuItem.click(function() {
        if ($(panel).css("display") == "none") {
            $(panel).slideDown();
            if (ua.indexOf("ChromeApp") >= 0) {
                se_play('se_006');
            }
        } else {
            panel.slideUp();
            if (ua.indexOf("ChromeApp") >= 0) {
                se_play('se_007');
            }
        }
        return false;
    });

    /*笆ｼ繝倥ャ繝繝ｼ繝｡繝九Η繝ｼ繝昴ャ繝励い繝��笆ｼ*/
    $('.head_menu_06').on('click', function(e) {
        var elem = $('#headerPopupMenu');
        if (elem.css('display') == 'none') {
            $('.page_container').css('min-height', '650px');
            elem.show();
            $('body').addClass('lightbox');
            $(this).addClass("head_menu_07");
            se_play('se_006');
        } else {
            $('.page_container').css('min-height', '0px');
            elem.hide();
            $('body').removeClass('lightbox');
            $(this).removeClass("head_menu_07");
            se_play('se_007');
        }
        e.preventDefault();
    });

    /*笆ｼ繝医ャ繝励�繝ｼ繧ｸ繧ｿ繝悶Γ繝九Η繝ｼ笆ｼ*/
    var tab_panel = $('section.tabArea div.tabElm');
    var tab_btn = $('section.tabArea div.tabMenu a');
    var has_local_storage = (window.localStorage) ? true : false;
    $(tab_panel).hide();
    if (has_local_storage && localStorage.getItem('topTab')) {
        $(localStorage.getItem('topTab')).show();
    } else {
        $('#tab_01').show();
    }
    $(tab_btn).on('click', function() {
        var a = $(this).attr('href');
        $(tab_panel).hide();
        $(a).show();
        if (has_local_storage) localStorage.setItem('topTab', a);
        return false;
    });

    /*笆ｼ繝壹�繧ｸ蜀�せ繧ｯ繝ｭ繝ｼ繝ｫ笆ｼ*/
    $('#toPageTop').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, '250');
        return false;
    })

    /* 繧ｿ繧､繝医Ν譁�ｭ励し繧､繧ｺ */
    var text_length_14 = $('#JtextLimit');
    if (text_length_14.text().length > 22) {
        text_length_14.css({
            'font-size': '10px',
            'letter-spacing': '-0.4px'
        });
    } else if (text_length_14.text().length > 14) {
        text_length_14.css('font-size', '10px');
    }
    var text_length_22 = $('.JtextLimit_22');
    if (text_length_22.text().length > 22) {
        text_length_22.css('font-size', '10.5px');
    }

    /*�趣ｾ橸ｾ�晏�縺ｿ*/
    $('.bt_switch').on(start, function() {
        $(this).addClass('dent');
    }).on(end, function() {
        $(this).removeClass('dent');
    }).on('mouseout', function() {
        $(this).removeClass('dent');
    });
    //	$('.bt_switch_parent a').on(start, function(){ var className = $(this).attr('class');$(this).removeClass().addClass(className+'_gray'); }).on(end, function(){ var className = $(this).attr('class');$(this).removeClass().addClass( className.replace('_gray','') ); }).on('mouseout', function(){ var className = $(this).attr('class');$(this).removeClass().addClass( className.replace('_gray','') ); });
    $('body').on(end, function() {
        $('.dent').removeClass('dent');
    });

    // 譁ｰ縺贋ｻ穂ｺ九�蟇ｾ蠢�
    var quest_forms = $("form[name=quest_form]");
    if (quest_forms && Imascg.PersonalOption.isNewWork()) {
        $.each(quest_forms, function(i, _form) {
            var form = $(_form);
            var action = form.attr('action');
            var url = action.replace('play', 'work');
            form.submit(function(e) {
                e.preventDefault();
                location.href = url;
            });
        });
    }

    // 繧､繝吶Φ繝医♀莉穂ｺ九ｒ譁ｰ縺贋ｻ穂ｺ区ｼ泌�縺吶ｋ
    function changeEventWorkURL(event_path) {
        if (!Imascg.PersonalOption.isNewEventWork()) {
            return;
        }
        if (new RegExp(event_path).test(location.href)) {
            Imascg.PersonalOption.changeNewWorkUrl(event_path);
            Imascg.PersonalOption.changeNewWorkForm(event_path);
        }
        // 繧｢繧､繝�Β菴ｿ逕ｨ邨先棡縺ｮ繧､繝吶Φ繝医♀莉穂ｺ九Μ繝ｳ繧ｯ
        if (/item(\/|%2F)result/.test(location.href)) {
            Imascg.PersonalOption.changeNewWorkUrl(event_path);
        }
    }
    // 繧､繝吶Φ繝医�譁ｰ縺贋ｻ穂ｺ区ｼ泌�
    changeEventWorkURL('event_carnival');
    changeEventWorkURL('event_royale');
    changeEventWorkURL('event_dream');
    changeEventWorkURL('event_talk');
    changeEventWorkURL('event_challenge');
    changeEventWorkURL('event_teamtalk');
    changeEventWorkURL('event_produce');
    changeEventWorkURL('event_produce_grow_idol');
});

/* 蛟倶ｺｺ險ｭ螳� */
var Imascg = Imascg || {};
Imascg.PersonalOption = {
    SETTINGS: {
        // 譌ｧ縺贋ｻ穂ｺ玖ｨｭ螳�
        OLD_WORK: '1',
        // 譁ｰ縺贋ｻ穂ｺ玖ｨｭ螳�
        NEW_WORK: '2',
        // 繧､繝吶Φ繝医�譌ｧ縺贋ｻ穂ｺ玖ｨｭ螳�
        OLD_EVENT_WORK: '1',
        // 繧､繝吶Φ繝医�譁ｰ縺贋ｻ穂ｺ玖ｨｭ螳�
        NEW_EVENT_WORK: '2'
    },
    hasLocalStorage: function() {
        return window.localStorage ? true : false;
    },
    isNewWork: function() {
        return (this.hasLocalStorage() && window.localStorage.getItem('WorkType') === this.SETTINGS.NEW_WORK) ? true : false;
    },
    isNewEventWork: function() {
        return (this.hasLocalStorage() && window.localStorage.getItem('EventWorkType') === this.SETTINGS.NEW_EVENT_WORK) ? true : false;
    },
    changeNewWorkUrl: function(event_path) {
        var re = new RegExp(event_path + '(\/|%2F)(mission_list|play)');
        $.each($('a'), function(i, link) {
            var href = $(link).attr('href');
            if (re.test(href)) {
                href = href.replace(/mission_list|play/, 'work');
                $(link).attr('href', href);
            }
        });
    },
    changeNewWorkForm: function(event_path) {
        var re = new RegExp(event_path + '(\/|%2F)(play|mission_list)');
        $.each($('form'), function(i, _form) {
            var form = $(_form);
            var action = form.attr('action');
            if (re.test(action)) {
                form.submit(function(e) {
                    e.preventDefault();
                    location.href = action.replace(/(play|mission_list)/, 'work');
                });
            }
        });
    },
    updateSetting: function(url, post_json, android_app_flg) {
        if (android_app_flg) {
            $.post(url, {
                    json: post_json
                })
                .done(function(data) {
                    window.location.reload();
                });
        } else {
            window.location.reload();
        }
        return false;
    },
    initSettings: function(url, android_app_flg) {
        if (!android_app_flg || !localStorage || localStorage.getItem('initGameSettings')) {
            return;
        }
        $.get(url, function(data) {
            $.each(data, function(name, value) {
                localStorage.setItem(name, value);
            });
            localStorage.setItem('initGameSettings', 1);
        });
    }
};

var number_format = function(num) {
    var num = num.toString(),
        number = "",
        count = 0;
    for (var n = num.length - 1; n >= 0; n--) {
        number = (++count % 3 == 0 && num.length != count ? "," : "") + num[n] + number;
    }
    return number;
};
(function($) {
    $.ibox = function(el, options) {
        var vars = $.extend({}, $.ibox.defaults, options),
            name = el.attr('class'),
            content = null,
            $contents = null,
            $clone = false,
            $mask = false,
            vp = false,
            aa_flag = navigator.userAgent.indexOf('AAWebview') > -1,

            methods = {
                init: function() {
                    var mask_index = $("div[id^='ibox_mask']").length;
                    $(document.body).append("<div id='ibox_mask" + mask_index + "' class='" + vars.close.replace(/\.|\#/, '') + " ibox_mask jsOnDesignBtn-wrap'></div>");
                    vars.$mask = $('#ibox_mask' + mask_index);
                    vars.$mask.ibox_methods = methods;
                    if (navigator.userAgent.indexOf('Android') > -1) {
                        if (window.localStorage) {
                            vars.vp = localStorage.getItem('DisplayPositionSet') == 1 ? true : false;
                        }
                    } else if (navigator.userAgent.indexOf('ChromeApp') > -1) {
                        vars.vp = true;
                    }

                    vars.$mask.on(window.start, "a, input[type=submit], label", function() {
                        $(this).addClass('_hover');
                    }).on(window.end, "a, input[type=submit], label", function() {
                        $(this).removeClass('_hover');
                    }).on('mouseleave', "a, input[type=submit], label", function() {
                        $(this).removeClass('_hover');
                    });

                    if (vars.version && _ !== void 0) {
                        vars.$mask.on('click', vars.close, function(e) {
                            var $this = $(this);
                            if ($this.is(".no_se")) {
                                methods.close();
                            } else {
                                se_play('se_009');
                                methods.close();
                            }
                            return $this.is('input') ? true : false;
                        });
                    } else {
                        vars.$mask.click(function(e) {
                            if ($(event.toElement).is(vars.close)) {
                                if ($(event.toElement).is(".no_se")) {
                                    methods.close();
                                } else {
                                    se_play('se_009');
                                    methods.close();
                                }
                                return $(event.toElement).is('input') ? true : false;
                            } else {
                                return true;
                            }
                        });
                    }
                },
                close: function() {
                    vars.$clone.hide();
                    vars.$mask.hide();
                    vars.$mask.empty();
                }
            }
        el.click(function() {
            vars.content = $(this).attr('href');
            if (typeof vars.content == 'undefind') return false;

            if (typeof vars.content == 'string') {
                vars.$contents = $(vars.content);
            }

            if (vars.version && _ !== void 0 && $.ibox.defaults.template) {
                var compiled = _.template(vars.$contents.text());
                var clone = compiled($.ibox.defaults.template);
                vars.$mask.html(clone);
                vars.$clone = vars.$mask.children();
            } else {
                vars.$clone = vars.$contents.clone(true);
                vars.$clone.attr('id', vars.$clone.attr('id') + '_clone');
                vars.$mask.append(vars.$clone);
            }

            vars.$clone.show();
            vars.$mask.show();

            if ($(window).height() > vars.$contents.height()) {
                if (vars.vp || aa_flag) {
                    var dcTop = ($(window).height() - vars.$clone.height() * ($(window).width() / 320)) * 0.5;
                } else {
                    var dcTop = ($(window).height() - vars.$clone.height()) * 0.5;
                }
            } else {
                dcTop = 10;
            }
            dcTop += $(window).scrollTop();
            dcTop *= (vars.vp || aa_flag ? (320 / $(window).width()) : 1);

            vars.$clone.css({
                'margin-left': 'auto',
                'margin-right': 'auto',
                'margin-top': (dcTop > 10 ? dcTop : 10) + 'px'
            });
            vars.$mask.css('height', $('body').height());
            return false;
        });

        methods.init();
        return vars.$mask;
    }

    $.ibox.defaults = {
        close: '.ibox_close',
        version: null,
        template: null
    }
    $.fn.iboxClick = function(click_el, callback) {
        if (typeof click_el == 'undefind' || typeof call == 'function') return false;
        this.click(function(e) {
            if ($(event.toElement).is(click_el)) {
                callback(event.toElement);
                return false;
            } else {
                return true;
            }
        });
    }

    $.fn.ibox = function(options) {
        return new $.ibox(this, options);
    }
})(jQuery);

function getAudio(url) {
    var audio = new Audio(url);
    if (/Android/.test(navigator.userAgent)) {
        audio.addEventListener('play', function() {
            bgm_pause();
        }, false);
        audio.addEventListener('ended', function() {
            bgm_resume();
        }, false);
    }
    audio.addEventListener('pause', function() {
        bgm_resume();
    }, false);
    return audio;
}

function toggleMenu() {
    // 騾壼ｸｸ繝｡繝九Η繝ｼ
    var menu = $("#headerAccordion");
    if (menu.length) {
        $('html,body').animate({
            scrollTop: $('#headerNaviPetitOn').position().top
        }, '250');
        if (menu.css("display") === "none") {
            menu.slideDown();
            se_play('se_006');
        } else {
            menu.slideUp();
            se_play('se_007');
        }
    }

    // 譁ｰ縺贋ｻ穂ｺ区ｼ泌�繝｡繝九Η繝ｼ
    var workMenu = $('#header_menus');
    if (workMenu.length) {
        $('html,body').animate({
            scrollTop: $('#wrap').position().top
        }, '250');
        Imascg.QuestModel.toggleMenu(workMenu);
    }
}

//Electron menu
function EL_menuOpen() {
    $('.head_menu_06').trigger('click');
    $('html,body').animate({
        scrollTop: 0
    }, '250');
}

function ICount(server_time) {
    this.delay = 0;
    this.setDelay(server_time);
    this.list = new Object();
    this.now = Math.floor(new Date() * 0.001);
    var self = this;
    this.timer = setInterval(function() {
        self.now = Math.floor(new Date() * 0.001);
        for (var i in self.list) {
            self.list[i].displayCount();
        }
    }, 500);
}
ICount.prototype.setDelay = function(server_time) {
    var delayElm = document.getElementById('delay');
    if (delayElm.value != 0) {
        this.delay = delayElm.value == 'same' ? 0 : parseInt(delayElm.value);
        return true;
    }
    if (server_time == void 0 || !server_time) return false;
    var currentTime = Math.floor(new Date() * 0.001);
    if (server_time == currentTime) {
        delayElm.value = 'same';
        this.delay = 0;
    } else {
        var delay = server_time - currentTime;
        delayElm.value = delay;
        this.delay = delay;
    }
    return true;
}
ICount.prototype.addCount = function(query, endTime, date_format) {
    if (endTime == void 0) {
        console.log('endTime is null');
        return false;
    } else if (this.list[query.toString()] === void 0) {
        var dateFormat = date_format === void 0 ? "normal" : date_format;
        this.list[query.toString()] = new CountData(query, endTime, dateFormat, this);
        return true;
    } else {
        console.log('duplicate id: ' + query.toString());
        return false;
    }
}
ICount.prototype.editCount = function(query, endTime, date_format) {
    if (this.list[query.toString()] === void 0) {
        console.log("no match id: " + query.toString());
        return false;
    }
    if (endTime == void 0) {
        console.log('endTime is null');
        return false;
    }
    this.list[query.toString()].endTime = endTime;
    this.list[query.toString()].init();
    if (date_format !== void 0) {
        this.list[query.toString()].dateFormat = date_format;
    }
    return true;
}
ICount.prototype.deleteCount = function(query) {
    if (this.list[query.toString()] === void 0) {
        console.log("no match id: " + query.toString());
        return false;
    }
    delete this.list[query];
    return true;
}
ICount.prototype.setCallback = function(query, callback) {
    if (this.list[query.toString()] === void 0) {
        console.log("no match id: " + query.toString());
        return false;
    }
    if (typeof callback !== 'function') {
        console.log("argument callback is not function");
        return false;
    }
    this.list[query.toString()].callback = callback;
    return true;
}

function CountData(query, endTime, dateFormat, parent) {
    if (query === void 0 || endTime === void 0) {
        console.log('data is undefind');
        return false;
    }
    this.query_string = query;
    this.query = null;
    this.init();
    this.endTime = endTime;
    this.callback = null;
    this.dateFormat = dateFormat;
    this.parent = parent;
}
CountData.prototype.init = function() {
    this.query = $(this.query_string)[0];
}
CountData.prototype.displayCount = function() {
    var remain = this.endTime - this.parent.now - this.parent.delay;
    if (remain > 0) {
        var hour = Math.floor(remain / 3600);
        var min = (this.dateFormat == "short") ? Math.floor(remain / 60) : Math.floor((remain % 3600) / 60);
        var sec = Math.floor(remain % 60);
        if (this.dateFormat == "short") {
            var print = (min < 10 ? "0" + min : min) + ':' + (sec < 10 ? "0" + sec : sec);
        } else if (this.dateFormat == "string") {
            var print = '';
            if (hour) {
                print += hour + "譎る俣";
            }
            if (hour || min) {
                print += (min < 10 ? "0" + min : min) + "蛻�";
            }
            if (hour || min || sec) {
                print += (sec < 10 ? "0" + sec : sec) + "遘�";
            }
        } else {
            var print = hour + ':' + (min < 10 ? "0" + min : min) + ':' + (sec < 10 ? "0" + sec : sec);
        }
        if (this.query) this.query.innerText = print;
    } else if (remain == 0) {
        if (!this.query) return;
        if (this.dateFormat == "short") {
            this.query.innerText = "00:00";
        } else if (this.dateFormat == "string") {
            this.query.innerText = "00遘�";
        } else {
            this.query.innerText = "0:00:00";
        }
    } else {
        if (!this.query) return;
        if (this.dateFormat == "short") {
            this.query.innerText = "00:00";
        } else if (this.dateFormat == "string") {
            this.query.innerText = "00遘�";
        } else {
            this.query.innerText = "0:00:00";
        }
        if (typeof this.callback == 'function') this.callback();
        for (var i in this.parent.list) {
            if (this.parent.list[i] == this) {
                delete this.parent.list[i];
            }
        }
    }
};
