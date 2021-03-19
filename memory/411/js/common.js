//UTF-8
$(function() {

    /*▼アドレスバー非表示▼*/
    addEventListener("DOMContentLoaded", function() {
        setTimeout(hideURLbar, 100);
    }, false);
    function hideURLbar() {
        if (window.pageYOffset === 0)
            window.scrollTo(0, 1);
    }

    /*▼ua判定▼*/
    var ua = navigator.userAgent;
    if (ua.indexOf('ChromeApp') > -1) {
        var start = "mousedown";
        var end = "mouseup";
    } else if ((ua.indexOf('iPhone') > -1 || ua.indexOf('iPod') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) && 'ontouchstart'in window) {
        var start = "touchstart";
        var end = "touchend";
    } else {
        var start = "mousedown";
        var end = "mouseup";
    }
    window.start = start;
    window.end = end;

    /*▼カード一括選択on,off▼*/
    var cardChk = 0;
    $("#card_lump").click(function() {
        if (cardChk == 0) {
            $(".chkbox").prop("checked", true);
            $("#lnk_msg").text("全てチェックを外す");
            cardChk = 1;
        } else {
            $(".chkbox").prop("checked", false);
            $("#lnk_msg").text("全てチェックを付ける");
            cardChk = 0;
        }
        return false;
    });
    $("#chks_change").click(function() {
        if (cardChk == 0) {
            $(".chkbox").prop("checked", false);
            $("#lnk_msg").text("全てチェックを付ける");
            cardChk = 1;
        } else {
            $(".chkbox").prop("checked", true);
            $("#lnk_msg").text("全てチェックを外す");
            cardChk = 0;
        }
        return false;
    });

    /* ボタン凹み */
    (function() {
        var actions = {};
        actions[window.start] = function(e) {
            $(e.currentTarget).addClass('_hover');
        }
        ;
        actions[window.end] = function(e) {
            $(e.currentTarget).removeClass('_hover');
        }
        ;
        actions["mouseleave"] = function(e) {
            $(e.currentTarget).removeClass('_hover');
        }
        ;
        var onBtnElem = $('.jsOnBtn a, .jsOnBtn :submit, .jsOnBtn label, .jsOnBtnSelf');
        onBtnElem.on(actions);
        $('.jsOnBtn-wrap').on(actions, 'a, :submit, label');
    }
    )();

    $(window).load(function() {
        var small_threshold = 2200;
        var on_css = {
            "transform": "scale(0.95,0.95)",
            "-webkit-transform": "scale(0.95,0.95)"
        };
        var on_css_small = {
            "transform": "scale(0.9,0.9)",
            "-webkit-transform": "scale(0.9,0.9)"
        };
        var off_css = {
            "transform": "",
            "-webkit-transform": ""
        };
        var actions = {
            'touchstart mousedown': function(e) {
                var $target = get_target(e);
                if ($target.width() * $target.height() <= small_threshold) {
                    get_target(e).css(on_css_small);
                } else {
                    get_target(e).css(on_css);
                }
            },
            'touchend mouseup mouseleave': function(e) {
                get_target(e).css(off_css)
            },
        }
        /* デザインボタン凹み */
        $('.jsOnDesignBtn').on(actions);

        /* 将来的に生成されるdomに対しての縮小処理 */
        $('.jsOnDesignBtn-wrap').on(actions, '.jsOnDesignBtn');

        function get_target(e) {
            var $target = $(e.currentTarget);
            if ($target.prop("tagName") == "A" && $target.css("display") == "inline" && $target.find("img").size() >= 1) {
                $target = $target.find("img");
            }
            return $target;
        }
    });

    /*▼ヘッダー折りたたみメニュー▼*/
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

    /*▼ヘッダーメニューポップアップ▼*/
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

    /*▼トップページタブメニュー▼*/
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
        if (has_local_storage)
            localStorage.setItem('topTab', a);
        return false;
    });

    /*▼ページ内スクロール▼*/
    $('#toPageTop').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, '250');
        return false;
    })

    /* タイトル文字サイズ */
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

    /*ﾎﾞﾀﾝ凹み*/
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

    // $('[class^="frame-"]').append('<div class="_frame_bg"></div>');
    // $('[class^="frame-"]').each(function(){
    // 	if($(this).hasClass('_has_hd'))
    // 	{
    // 		$(this).find('._frame_bg').before('<div class="_frame_hd"></div>');
    // 	}
    // });

});

/* 個人設定 */
var Imascg = Imascg || {};
Imascg.PersonalOption = {
    updateSetting: function(url, post_json, android_app_flg) {
        if (android_app_flg) {
            $.post(url, {
                json: post_json
            }).done(function(data) {
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
    },
    isNewEventWork: function() {
        return false;
    }
};

var atsu_flg = false;

var number_format = function(num) {
    var num = num.toString()
      , number = ""
      , count = 0;
    for (var n = num.length - 1; n >= 0; n--) {
        number = (++count % 3 == 0 && num.length != count ? "," : "") + num[n] + number;
    }
    return number;
};
(function($) {
    $.ibox = function(el, options) {
        var vars = $.extend({}, $.ibox.defaults, options)
          , name = el.attr('class')
          , content = null
          , $contents = null
          , $clone = false
          , $mask = false
          , vp = false
          , aa_flag = navigator.userAgent.indexOf('AAWebview') > -1
          ,
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
                if (vars.$clone) {
                    vars.$clone.hide();
                }
                if (vars.$mask) {
                    vars.$mask.hide();
                    vars.$mask.empty();
                }
            },
            check: function() {
                console.log(vars.$clone);
            }
        }
        el.click(function() {
            vars.content = $(this).attr('href');
            if (typeof vars.content == 'undefind')
                return false;

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
        if (typeof click_el == 'undefind' || typeof call == 'function')
            return false;
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
        return new $.ibox(this,options);
    }

}
)(jQuery);

function getAudio(url) {
    var audio = new Audio();
    if (url) {
        audio.autoplay = false;
        audio.src = url
    }

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
    // 通常メニュー
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

    // 新お仕事演出メニュー
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

//旧設定の表示用
function setOldViewIdolCounter($idolStatus, $btn_lump_check, $btn_lump_check_text, checked_count, checked_count_in_page) {
    /* このページ以外のページで選択されているアイドルの数を計算して格納 */
    var other_checked_count = checked_count - checked_count_in_page;
    var max_checked_count = Math.min(10 - other_checked_count, $idolStatus.size());
    var check_btn_text = {
        "check": "先頭" + max_checked_count + "人をチェック",
        "uncheck": "ﾍﾟｰｼﾞ内のﾁｪｯｸを外す",
    }
    var ENUM_CHECK_BTN_STATUS = {
        "UNCHECK": 0,
        "CHECK": 1,
    }
    var check_btn_status = null;

    var already_checked = false;
    idol_status_each(function($target) {
        if ($target.find(".chkbox").prop("checked")) {
            already_checked = true;
        }
    })
    /* このページで誰も選択されていない場合 */
    if (!already_checked) {
        $btn_lump_check_text.text(check_btn_text["check"]);
        check_btn_status = ENUM_CHECK_BTN_STATUS.CHECK;
    } else {
        $btn_lump_check_text.text(check_btn_text["uncheck"]);
        check_btn_status = ENUM_CHECK_BTN_STATUS.UNCHECK;
    }
    update_count();

    /* 全選択/全外しボタンが押されたとき */
    $btn_lump_check.click(function() {
        /* 全てチェックをつける */
        if (check_btn_status == ENUM_CHECK_BTN_STATUS.CHECK) {
            set_btn_status_uncheck()
            do_btn_check();
            /* 全てチェックを外す */
        } else {
            set_btn_status_check()
            do_btn_uncheck();
        }
        update_count();
        return false;
    });
    /* チェックボックスが押されたとき */
    $(".chkbox").on("click", function(e) {
        if ($(e.currentTarget).closest(".js_sale_checkbox").is(":visible")) {
            update_count();
        } else {
            return false;
        }
    })
    /* ボタンをcheckステータスに設定 */
    function set_btn_status_check() {
        $btn_lump_check_text.text(check_btn_text["check"]);
        $btn_lump_check_text.parent().removeClass('btn_cancel_line_2').addClass('btn_normal_line_2');
        check_btn_status = ENUM_CHECK_BTN_STATUS.CHECK;
    }
    /* ボタンをuncheckステータスに設定 */
    function set_btn_status_uncheck() {
        $btn_lump_check_text.text(check_btn_text["uncheck"]);
        $btn_lump_check_text.parent().addClass('btn_cancel_line_2').removeClass('btn_normal_line_2');
        check_btn_status = ENUM_CHECK_BTN_STATUS.UNCHECK;
    }
    /* checkステータスのボタンが押された時 */
    function do_btn_check() {
        var counter = 0;
        idol_status_each(function($target) {
            if (counter + other_checked_count < 10) {
                $target.find(".chkbox").prop("checked", true);
                counter++;
            }
        })
    }
    /* uncheckステータスのボタンが押された時 */
    function do_btn_uncheck(el) {
        $(".chkbox").prop("checked", false);
    }

    /* アイドル一覧を走査するヘルパー関数 */
    function idol_status_each(func) {
        $idolStatus.each(function(index) {
            var $target = $idolStatus.eq(index);
            func($target);
        })
    }

    /* チェックボックスの状態を画面に反映 */
    function update_count() {
        var count = $(".chkbox").filter(":checked").size();
        var count_sum = other_checked_count + count;
        $(".js_checked_count").text(count_sum);
        /* 選択の上限に達した場合は非選択のチェックボックスを隠す */
        if (count_sum >= 10) {
            idol_status_each(function($target) {
                if (!$target.find(".chkbox").prop("checked")) {
                    $target.find(".js_sale_parts").addClass("line02");
                    $target.find(".js_sale_checkbox").hide();
                } else {
                    $target.find(".js_sale_parts").removeClass("line02");
                    $target.find(".js_sale_checkbox").show();
                }
            })
        }/* 選択の上限に達していない場合は非選択のチェックボックスを表示する */
        else {
            idol_status_each(function($target) {
                if (!$target.find(".chkbox").prop("checked")) {
                    $target.find(".js_sale_parts").removeClass("line02");
                }
                $target.find(".js_sale_checkbox").show();
            })
        }
        /* このページで一人も選択されてなければボタンのステータスをcheckに */
        if (count == 0) {
            set_btn_status_check();
        }/* このページで一人でも選択されていればボタンのステータスをuncheckに */
        else {
            set_btn_status_uncheck();
        }
    }
}
ICount.prototype.setDelay = function(server_time) {
    var delayElm = document.getElementById('delay');
    if (delayElm.value != 0) {
        this.delay = delayElm.value == 'same' ? 0 : parseInt(delayElm.value);
        return true;
    }
    if (server_time == void 0 || !server_time)
        return false;
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
        this.list[query.toString()] = new CountData(query,endTime,dateFormat,this);
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
                print += hour + "時間";
            }
            if (hour || min) {
                print += (min < 10 ? "0" + min : min) + "分";
            }
            if (hour || min || sec) {
                print += (sec < 10 ? "0" + sec : sec) + "秒";
            }
        } else {
            var print = hour + ':' + (min < 10 ? "0" + min : min) + ':' + (sec < 10 ? "0" + sec : sec);
        }
        if (this.query)
            this.query.innerText = print;
    } else if (remain == 0) {
        if (!this.query)
            return;
        if (this.dateFormat == "short") {
            this.query.innerText = "00:00";
        } else if (this.dateFormat == "string") {
            this.query.innerText = "00秒";
        } else {
            this.query.innerText = "0:00:00";
        }
    } else {
        if (!this.query)
            return;
        if (this.dateFormat == "short") {
            this.query.innerText = "00:00";
        } else if (this.dateFormat == "string") {
            this.query.innerText = "00秒";
        } else {
            this.query.innerText = "0:00:00";
        }
        if (typeof this.callback == 'function')
            this.callback();
        for (var i in this.parent.list) {
            if (this.parent.list[i] == this) {
                delete this.parent.list[i];
            }
        }
    }
}
;

// 全角・半角カナ変換
// @param
// str     変換する文字列
// type    全角→半角:han / 半角→全角:zen
function convertKana(str, type) {
    var zen = new Array('ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ヰ','ユ','ヱ','ヨ','ラ','リ','ル','レ','ロ','ワ','ヲ','ン','ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ','パ','ピ','プ','ペ','ポ','ヴ','ァ','ィ','ゥ','ェ','ォ','ャ','ュ','ョ','ッ','゛','°','、','。','「','」','ー','・');

    var han = new Array('ｱ','ｲ','ｳ','ｴ','ｵ','ｶ','ｷ','ｸ','ｹ','ｺ','ｻ','ｼ','ｽ','ｾ','ｿ','ﾀ','ﾁ','ﾂ','ﾃ','ﾄ','ﾅ','ﾆ','ﾇ','ﾈ','ﾉ','ﾊ','ﾋ','ﾌ','ﾍ','ﾎ','ﾏ','ﾐ','ﾑ','ﾒ','ﾓ','ﾔ','ｲ','ﾕ','ｴ','ﾖ','ﾗ','ﾘ','ﾙ','ﾚ','ﾛ','ﾜ','ｦ','ﾝ','ｶﾞ','ｷﾞ','ｸﾞ','ｹﾞ','ｺﾞ','ｻﾞ','ｼﾞ','ｽﾞ','ｾﾞ','ｿﾞ','ﾀﾞ','ﾁﾞ','ﾂﾞ','ﾃﾞ','ﾄﾞ','ﾊﾞ','ﾋﾞ','ﾌﾞ','ﾍﾞ','ﾎﾞ','ﾊﾟ','ﾋﾟ','ﾌﾟ','ﾍﾟ','ﾎﾟ','ｳﾞ','ｧ','ｨ','ｩ','ｪ','ｫ','ｬ','ｭ','ｮ','ｯ','ﾞ','ﾟ','､','｡','｢','｣','ｰ','･');

    var result = "";

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (type == 'han') {
            var index = zen.indexOf(char);
            if (index >= 0) {
                char = han[index];
            }
        } else if (type == 'zen') {
            var index = han.indexOf(char);
            if (index >= 0) {
                char = zen[index];
            }
        }
        result += char;
    }

    return result;
}
