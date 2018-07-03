;
(function($) {
    /***********************************************************************************************/
    //  繧ｿ繝夜∈謚槭Λ繧､繝悶Λ繝ｪ繝ｼ  
    /***********************************************************************************************/
    $.tab_switch = function(el, options) {

        var vars = $.extend({}, $.tab_switch.defaults, options),
            tabs = vars.tabs,
            selected = vars.selected,
            start = vars.start,
            storage = vars.storage,
            impotant_start = vars.impotant_start,
            $contents = $(vars.contents),
            $tabs = false,
            methods = {};

        methods = {
            //蛻晄悄蛹�
            init: function() {
                $tabs = el.find(tabs);
                methods.loadtab();
                methods.show();
                methods.change();
            },
            //驕ｸ謚槭＆繧後◆繧ｿ繝悶ｒ蛻､譁ｭ
            loadtab: function() {
                if (window.localStorage && storage) {
                    var getstorage = localStorage.getItem(storage);
                    if (getstorage && !start) start = getstorage;
                }
            },
            //load縺輔ｌ縺溘ち繝悶ｒ陦ｨ遉ｺ
            show: function() {
                if (($contents.length - 1) < start) start = 0;
                if (impotant_start) start = vars.start;
                $tabs.removeClass(selected).eq(start).addClass(selected);
                $contents.hide().eq(vars.tabs_name ? $tabs.eq(start).attr('name').replace(vars.tabs_name, '') : start).show();
            },
            //繧ｯ繝ｪ繝�け縺励◆譎ゅち繝悶ｒ謠帙∴繧句�逅�
            change: function() {
                $tabs.click(function() {
                    if ($(this).hasClass(selected)) return false;
                    if (vars.tabs_name) {
                        var name_selected = $(this).attr('name').replace(vars.tabs_name, '');
                    } else {
                        var name_selected = $tabs.index(this);
                    }

                    $(this).addClass(selected);
                    $contents.eq(name_selected).show();
                    //繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ蜿ら�
                    if (window.localStorage && storage) {
                        localStorage.setItem(storage, name_selected);
                    }
                    for (var i = 0; i < $tabs.length; i++) {
                        if (i != $tabs.index(this)) $tabs.eq(i).removeClass(selected);
                        if (i != name_selected) $contents.eq(i).hide();
                    }

                    return false;
                });
            }
        }
        methods.init();
    }

    $.tab_switch.defaults = {
        tabs: "[class^='tab_']",
        tabs_name: false,
        contents: ".contents",
        selected: "selected",
        storage: false,
        start: 0,
        impotant_start: null,
    }

    $.fn.tab_switch = function(options) {
        new $.tab_switch(this, options);
    }
    /***********************************************************************************************/
    //  蜷ｹ縺榊�縺励Λ繧､繝悶Λ繝ｪ繝ｼ  
    /***********************************************************************************************/

    $.comment_timer = function(el, options) {
        var vars = $.extend({}, $.comment_timer.defaults, options),
            $click = el.find('.' + vars.click),
            methods = {};
        vars.timer = new Array();
        methods = {
            //蛻晄悄蛹�
            init: function(clicked) {
                var data = new Array();
                var $parent = $(clicked).parents('.' + el.attr('class'));
                data['index'] = el.index($parent);
                clearInterval(vars.timer[data.index]);
                data['comment'] = $parent.find('.' + vars.comment);
                $parent.find('.' + vars.selected).removeClass(vars.selected);
                $(clicked).addClass(vars.selected);
                data.comment.text('');
                return data;
            },
            timer: function(clicked, data) {
                var selected_comment = typeof(data.comment.data(vars.comment)) == 'string' ? data.comment.data(vars.comment) : data.comment.data(vars.comment)[$click.index(clicked) % ($click.length / el.length)],
                    count = 1;
                vars.timer[data.index] = setInterval(function() {
                    data.comment.text(selected_comment.slice(0, count));
                    count++;
                    if (count > selected_comment.length) {
                        clearInterval(vars.timer[data.index]);
                        if (typeof vars.call == 'function') vars.call(clicked);
                    };
                }, vars.speed);
            }
        }
        $click.click(function(e) {
            for (var i in vars.timer) {
                clearInterval(vars.timer[i]);
            }
            if (vars.selected && $(this).hasClass(vars.selected)) return;
            methods.timer(this, methods.init(e.currentTarget));
            return false;
        });
        return vars;
    }
    $.comment_timer.defaults = {
        click: 'btn',
        selected: false,
        comment: 'comment',
        speed: 25,
        call: function() {}
    }
    $.fn.comment_timer = function(options) {
        return new $.comment_timer(this, options);
    }
})(jQuery);
/*******************************************************************************/
