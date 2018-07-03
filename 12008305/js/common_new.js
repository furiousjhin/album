/*
	蜷榊燕遨ｺ髢鍋畑
*/
var Commonjs = Commonjs || (function() {
    function Canvas() {}

    Canvas.prototype.init = function(canvas_element, manifest, lib, name, fps, callback, tick_flg) {
        this.name = name;
        this.lib = lib;
        this.images = [];
        this.canvas = canvas_element;
        this.fps = fps;
        this.counter = 0;
        this.count_max = Object.keys(manifest).length;
        this.callback = callback;
        if (tick_flg == null) {
            this.tick_flg = true;
        } else {
            this.tick_flg = tick_flg;
        }
        var self = this;
        for (var i = 0; i < manifest.length; i++) {
            var img = new Image();
            img.onload = self.handleFileLoad(manifest[i]);
            img.src = manifest[i].src;
        }
    };

    Canvas.prototype.handleFileLoad = function(image) {
        window.images[image.id] = image.src;

        this.counter++;
        if (this.counter >= this.count_max)
            this.handleComplete();
    }

    Canvas.prototype.handleComplete = function() {
        var self = this;
        this.stage = new createjs.Stage(this.canvas);
        if (this.name == null) {} else {
            this.addChild(this.name);
        }
        this.stage.update();

        createjs.Ticker.setFPS(this.fps);
        if (this.tick_flg) {
            createjs.Ticker.addEventListener("tick", this.stage);
        }
        if (this.callback != null) {
            this.callback();
        }
    }
    Canvas.prototype.addChild = function(name) {
        this.exportRoot = new this.lib[name]();
        this.stage.addChild(this.exportRoot);
        return this.exportRoot;
    }
    Canvas.stop = function() {
        createjs.Ticker.setPaused(true);
        createjs.Ticker.reset();
    }

    function PopupTemplate(doc, default_param) {
        this.default_param = {
            "title": "default title",
            "contents": "default contents.",
            "closable": true,
            "full_display_flg": false,
        };
        if (doc)
            this.doc = doc;
        if (default_param)
            this.default_param = default_param;

        if (this.doc instanceof $)
            this.doc_type = "jQuery";
        else
            this.doc_type = typeof this.doc;
    };
    PopupTemplate.prototype.get_template = function() {
        switch (this.doc_type) {
            case "jQuery":
                return this.doc.prop("outerHTML");
            case "function":
                return this.doc().trim().replace(/>\s+</g, '><');
            case "string":
            default:
                return this.doc;
        }
    };
    PopupTemplate.prototype.doc = function() {
        return '\
			<div id="<%- _id %>" class="area-popup_common _hd_blue _bd_black">\
			    <div class="area-popup_wrap t-Cnt">\
			        <h3 class="area-popup_header">\
			            <div class="area-popup_title"><%- title %></div>\
			        </h3>\
			        <% if(full_display_flg) { %>\
						<%- contents %>\
					<% } else { %>\
						<div class="area-popup_contents">\
							<%- contents %>\
						</div>\
					<% } %>\
			        <div class="area-popup_bg_image"></div>\
			    </div>\
			    <% if(closable) { %>\
			    	<div class="popup-common_btn_close js_popup_close jsOnDesignBtn"></div>\
			    <% } %>\
			</div>\
		';
    };

    function Popup(id, template) {
        this._id = id || "popup-default";
        this._mask = null;
        this._dom = null;
        this._param = null;
        this._state = Popup.enum_state.CLOSE;
        this._listeners = {};
        this._closable = true;
        this._template = template || Popup.enum_template.TYPE_1;

        if (Popup._mask == null) {
            if ($("#ibox_mask").size() > 0)
                Popup._mask = $("#ibox_mask");
            else {
                Popup._mask = $("<div />").attr("id", "ibox_mask");
                $("body").append(Popup._mask);
            }
        }
        Popup._mask.on("click", $.proxy(this.close, this));
    };
    Popup.enum_state = {
        "CLOSE": 1,
        "OPEN": 2,
    };
    Popup.enum_template = {
        "TYPE_1": new PopupTemplate(),
        "TYPE_2": new PopupTemplate(
            function() {
                return '\
					<div id="<%- _id %>" class="t-Cnt" style="position:relative;width:320px;margin:auto;">\
						<% if(closable) { %>\
							<a class="intro_close_btn idol js_popup_close"></a>\
						<% } %>\
						<div class="intro_idol">\
							<div class="intro_before">\
								<%- title %>\
							</div>\
							<div class="intro_main t-Cnt">\
								<%- contents %>\
							</div>\
							<div class="intro_after">\
								<% if(closable) { %>\
									<a class="intro_text_close_btn js_popup_close"></a>\
								<% } %>\
							</div>\
						</div>\
					</div>\
				';
            }
        ),
        "TYPE_3": new PopupTemplate(
            function() {
                return '\
					<section id="<%- _id %>" class="newInfoArea" style="display:none;">\
						<div class="statusArea event_common" style="margin-left: 15px;">\
							<div class="title">\
								<%- title %>\
							</div>\
							<div class="frame">\
								<%- contents %>\
							</div>\
						</div>\
						<% if(closable) { %>\
							<div><a class="check_close_btn js_popup_close" style="top:-2px; right:16px;"></a></div>\
						<% } %>\
					</section>\
				';
            }
        ),
    };
    Popup._mask = null;
    Popup._parse_val = function(target) {
        if (target instanceof $)
            return target.prop("outerHTML");
        else
            return target;
    };
    Popup.prototype.get_contents = function(type) {
        var _type = type || "jQuery";
        if (_type == "jQuery")
            return this._dom;
        else
            return this._dom.prop("outerHTML");
    }
    Popup.prototype.get_param = function() {
        return this._param;
    }
    Popup.prototype.get_state = function() {
        return this._state;
    };
    Popup.prototype.dispatchEvent = function(event_names) {
        var targets = this._listeners[event_names];
        if (targets) {
            for (var i = 0; i < targets.length; i++)
                targets[i](this);
        }
    };
    Popup.prototype.on = function(event_name, callback) {
        if (this._listeners[event_name] === undefined)
            this._listeners[event_name] = [];
        this._listeners[event_name].push(callback);
        return this;
    };

    /*
    	param:
    		template縺ｫ貂｡縺吝､画焚([id|title|contents|...])
    */
    Popup.prototype.set = function(param) {
        param = $.extend({}, this._template.default_param, param);
        param._id = this._id;
        Object.keys(param).forEach(function(key) {
            param[key] = Popup._parse_val(param[key]);
        });
        this._param = param;
        this._closable = param.closable;

        //set dom
        this._dom = $(
            _.unescape(
                _.template(this._template.get_template(), this._param)
            )
        );
        this.setClickInteraction();
        this._dom.on("click", function(e) {
            e.stopPropagation();
        });
        this.setStopRepeatLink();
        this._dom.find(".js_popup_close").on("click",
            $.proxy(this.close, this)
        );

        //clear events
        this._listeners = {};
        return this;
    };
    Popup.prototype.setStopRepeatLink = function() {
        this._dom.find(".stop-repeat-link").on("click", function() {
            var self = $('.stop-repeat-link');
            self.css({
                'pointer-events': 'none',
                'opacity': 0.6
            });
            setTimeout(function() {
                self.css({
                    'pointer-events': 'auto',
                    'opacity': 1
                });
            }, 2500);
        });
    }
    Popup.prototype.setClickInteraction = function() {
        //繝懊ち繝ｳ縺ｮ蜃ｹ縺ｿ
        var onBtnElem = this._dom.find('a,:submit,label');
        onBtnElem.on(window.start, function() {
            $(this).addClass('_hover');
        }).on(window.end, function() {
            $(this).removeClass('_hover');
        }).on('mouseleave', function() {
            $(this).removeClass('_hover');
        });
        //逕ｻ蜒上�繧ｿ繝ｳ逕ｨ縺ｫ諡｡邵ｮ繧定ｨｭ螳�
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
            'touchend mouseup': function(e) {
                get_target(e).css(off_css)
            }
        }
        /* 繝�じ繧､繝ｳ繝懊ち繝ｳ蜃ｹ縺ｿ */
        this._dom.find('.jsOnDesignBtn').on(actions);

        /* 蟆�擂逧�↓逕滓�縺輔ｌ繧掬om縺ｫ蟇ｾ縺励※縺ｮ邵ｮ蟆丞�逅� */
        this._dom.find('.jsOnDesignBtn-wrap').on(actions, '.jsOnDesignBtn');

        function get_target(e) {
            var $target = $(e.currentTarget);
            if ($target.prop("tagName") == "A" && $target.css("display") == "inline" && $target.find("img").size() >= 1) {
                $target = $target.find("img");
            }
            return $target;
        }
    }
    Popup.prototype.open = function() {
        var window_height, position_top;
        if (this._state == Popup.enum_state.OPEN)
            return this;
        this._state = Popup.enum_state.OPEN;

        if (document.doctype)
            window_height = $(window).height();
        else
            window_height = window.innerHeight;

        Popup._mask.show().css("height", $(document).height());
        Popup._mask.append(this._dom);
        this._dom.show();

        var zoom = $("html").css("zoom");
        if (this._dom.height() > window_height)
            position_top = $(window).scrollTop() + 20;
        else
            position_top = (window_height - this._dom.height() * zoom) / 2 + $(window).scrollTop();
        position_top /= zoom;
        this._dom.css("top", position_top);
        this.dispatchEvent("open");
        return this;
    };
    Popup.prototype.close = function(e) {
        var closable;

        if (e && e.currentTarget && e.currentTarget.id == "ibox_mask")
            closable = this._closable;
        else
            closable = true;

        if (this._state == Popup.enum_state.CLOSE || !closable)
            return;
        this._state = Popup.enum_state.CLOSE;
        this._dom.detach();
        Popup._mask.hide();
        this.dispatchEvent("close");
        se_play('se_009');
        return this;
    };

    return {
        isIOS: function() {
            var uaInfo = this.getUAInfo();
            if (uaInfo != void 0) {
                return uaInfo["os"] == "iOS";
            }
            return false;
        },
        isAndroid: function() {
            var uaInfo = this.getUAInfo();
            if (uaInfo != void 0) {
                return this.getUAInfo()["os"] == "android";
            }
            return false;
        },
        getUAInfo: function() {
            var result = {};
            var ua = navigator.userAgent;
            var ios_match = ua.match(/(iPod|iPad|iPhone);.+OS ([\d_]+)/);
            if (ios_match) {
                result["os"] = "iOS";
                result["gadget"] = ios_match[1];
                result["version"] = ios_match[2].split("_");
                return result;
            }
            var android_match = ua.match(/Android ([\d\.]+).*?; ([^;]+) Build/);
            if (android_match) {
                result["os"] = "android";
                result["gadget"] = android_match[2];
                result["version"] = android_match[1].split(".");
                return result;
            }
        },
        textSelect: function(param) {
            var $trigger = param.$trigger;
            var $target = param.$target;
            var self = this;
            $trigger.on('click', function(e) {
                $target.select();
                $target[0].selectionStart = 0;
                $target[0].selectionEnd = $target[0].value.length;
                e.preventDefault();
            });
        },
        formatComma: function(val) {
            return String(val).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        },
        /*
        	param:
        		maxCnt:譛螟ｧ譁�ｭ玲焚
        		$textCnt:繧ｫ繧ｦ繝ｳ繧ｿ繝ｼ繧ｪ繝悶ず繧ｧ繧ｯ繝�
        		$input:蜈･蜉帙ヵ繧ｩ繝ｼ繝�繧ｪ繝悶ず繧ｧ繧ｯ繝�
        		event_listeners:繧､繝吶Φ繝医Μ繧ｹ繝翫�鄒､
        			onChange:繧ｭ繝ｼ縺ｮ蜈･蜉帙ｄ繝輔か繝ｼ繧ｫ繧ｹ縺ｮ譛臥┌縺後≠縺｣縺溘→縺�
        			onEmpty:遨ｺ縺ｫ縺ｪ縺｣縺溘→縺�
        			onSubmittable:騾∽ｿ｡蜿ｯ閭ｽ縺ｪ譁�ｭ玲焚縺ｮ縺ｨ縺�
        			onMax:譛螟ｧ譁�ｭ玲焚繧定ｶ�∴縺溘→縺�
        		is_first_trigger:譁�ｭ玲焚縺ｮ蛻晏屓陦ｨ遉ｺ繝輔Λ繧ｰ
        */
        setTextCounter: function(param) {
            var maxCnt = param.maxCnt;
            var $textCnt = param.$textCnt;
            var $input = param.$input;
            var is_first_trigger = param.is_first_trigger || true;
            var onChangeListener, onEmptyListener, onSubmittableListener, onMaxListener;
            if (param.event_listeners != null) {
                onChangeListener = param.event_listeners.onChange;
                onEmptyListener = param.event_listeners.onEmpty;
                onSubmittableListener = param.event_listeners.onSubmittable;
                onMaxListener = param.event_listeners.onMax;
            }
            var textLen = maxCnt - $textCnt.val().length;
            $textCnt.text(textLen);

            $input.on("keyup keydown change mouseout", function() {
                if (onChangeListener != null) {
                    onChangeListener();
                }
                $textCnt.removeClass();
                textLen = maxCnt - $(this).val().length;
                if (textLen < 0) {
                    $textCnt.addClass('red');
                    if (onMaxListener != null) {
                        onMaxListener();
                    }
                } else if (textLen >= maxCnt) {
                    if (onEmptyListener != null) {
                        onEmptyListener();
                    }
                } else {
                    if (onSubmittableListener != null) {
                        onSubmittableListener();
                    }
                    $textCnt.addClass('yellow');
                }
                $textCnt.text(textLen);
            });
            if (is_first_trigger) {
                $input.trigger("change");
            }
        },
        /*
        	param:
        		$tabs:繧ｿ繝悶が繝悶ず繧ｧ繧ｯ繝�
        		is_init : 蛻晄悄蛹悶ヵ繝ｩ繧ｰ
        		func : 繧ｿ繝門�繧頑崛縺域凾縺ｫ蜻ｼ縺ｰ繧後ｋ髢｢謨ｰ
        	usage:
        		Commonjs.setTab({
        			$tabs:$(".btn_2"),
        		});
        */
        setTab: function(param) {
            var $tabs = param.$tabs;
            var is_init = param.is_init || true;
            var func = param.func || default_change_area;
            $tabs.on("click", function(e, is_init) {
                if (!is_init && $(this).hasClass("selected"))
                    return;
                tab_change(this);
                func(this);
            });

            function default_change_area(target_tab) {
                var target_area_selector = $(target_tab).data("area");
                $tabs.each(function() {
                    var area_selector = $(this).data("area");
                    $(area_selector).toggle(area_selector == target_area_selector);
                });
            }

            function tab_change(target) {
                $tabs.each(function() {
                    $(this).toggleClass("selected", this == target);
                })
            }
            $tabs.filter(".selected").trigger("click", is_init);
        },
        /*
        	谿九ｊ譎る俣繧定ｿ斐☆髢｢謨ｰ縲�
        	param:
        		msecond:繝溘Μ遘�
        		format:蠖｢蠑�
        		is_short:0縺ｮ譎ょ�遘偵ｒ蜑翫ｋ繝輔Λ繧ｰ
        */
        getFormatTime: function(msecond, format, is_short) {
            var second = Math.ceil(msecond / 1000);
            var format = format || "hh譎Ｎm蛻�ss遘�";
            var is_short = (is_short === undefined) ? false : is_short;
            var h, m, s;

            h = Math.floor(second / (60 * 60));
            m = Math.floor((second / 60) % 60);
            s = Math.floor(second % 60);

            if (format.match(/hh/))
                h = "" + ("0" + h).slice(-2);
            if (format.match(/mm/))
                m = "" + ("0" + m).slice(-2);
            if (format.match(/ss/))
                s = "" + ("0" + s).slice(-2);

            if (is_short) {
                if (+h == 0)
                    format = format.replace(/^.*?m/, "m")
            }

            return format.replace(/hh?/, h).replace(/mm?/, m).replace(/ss?/, s);
        },
        replacePremiumCard: function(param) {
            var canvas = new Canvas();
            var canvas_w = 640;
            var canvas_h = 800;
            var fps = param.fps || 18;
            var zoom = String(param.width).replace("px", "") / canvas_w;
            var $target_element = $("<canvas/>")
                .attr("width", canvas_w)
                .attr("height", canvas_h)
                .css("zoom", zoom)[0];
            var idol_base_id = param.idol_base_id;
            var $replace_element = $(param.replace_element);
            var manifest = [{
                src: param.card_image,
                id: "replace_image_" + idol_base_id
            }];
            require(['easeljs', 'tweenjs'], function() {
                require([param.script], function() {
                    canvas.init($target_element, manifest, lib, "sign_effect_" + idol_base_id, fps);
                    $replace_element.after($target_element)
                    $replace_element.remove();
                })
            })
            return canvas;
        },
        Canvas: Canvas,
        Popup: Popup,
        PopupTemplate: PopupTemplate,
        createPopupByTemplate: function(p) {
            var id = p.id || "popup-id";
            var $trigger = p.$trigger || null;
            var $template = $("#" + id);
            var template = $template.html();
            var custom_flg = p.custom_flg || null;
            var full_display_flg = p.full_display_flg || false;
            if (custom_flg) {
                var popup = new Commonjs.Popup("popup-" + id, new Commonjs.PopupTemplate(template));
            } else {
                var popup = new Commonjs.Popup("popup-" + id);
            }

            var title = $template.data("title");
            var param = p.param || {};
            var se_flag = p.se_flag || false;
            var trigger_param = p.trigger_param || null;
            var trigger_title = p.trigger_title || null;
            var onTrigger = p.onTrigger || function() {
                popup.open()
            };
            var onClose = p.onClose || null;
            if ($trigger == null) {
                popup.set({
                    "title": title,
                    "contents": _.template(template, param),
                    "full_display_flg": full_display_flg,
                });
            } else {
                $trigger.on("click", function(e) {
                    if (se_flag) {
                        se_play('se_008');
                    }
                    popup.set({
                        "title": trigger_title != null ? trigger_title(e.currentTarget) : title,
                        "contents": _.template(template, trigger_param != null ? trigger_param(e.currentTarget) : param),
                        "full_display_flg": full_display_flg,
                    });
                    onTrigger(e, popup);
                })
            }
            if (onClose != null) {
                popup.on("close", function() {
                    onClose(popup);
                })
            }
            return popup;
        },
        setRotationButton: function($container, callback) {
            var current = 0;
            var $children = $container.children();
            $children.hide();
            $children.eq(current).show();
            var size = $children.size();
            $children.on("click", function(e) {
                $children.eq(current).hide();
                current = (current + 1) % size;
                $children.eq(current).show();
                if (callback != null) {
                    callback(e, current);
                }
                return false;
            })
        },
        /*
        	keyname:
        		繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ繧呈桃菴懊☆繧九く繝ｼ蜷�
        	param:
        		菫晏ｭ倥☆繧句､
        	窶ｻ菫晏ｭ倥☆繧矩圀縺ｫJSON蠖｢蠑上�驕ｿ縺代※縺上□縺輔＞縲ゑｼ井ｻ墓ｧ倅ｸ翫�菫晏ｭ倥〒縺阪∪縺吶′縲∽ｸ頑焔縺丞虚菴懊＠縺ｪ縺�ｫｯ譛ｫ繧ゅ≠繧狗ぜ��
        */
        loadLocalStorage: function(keyname) {
            if (window.localStorage) {
                if (localStorage.getItem(keyname)) return localStorage.getItem(keyname);
                else return false;
            } else {
                return false;
            }
        },
        saveLocalStorage: function(keyname, param) {
            if (window.localStorage) localStorage.setItem(keyname, param);
            else return false;
        },
        /*
         */
        escapeHTML: function(str) {
            return str.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        },
        /*
         */
        unescapeHTML: function(str) {
            return str.replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, '\'');
        },
        setSearchMore: function(param) {
            var $trigger = param.$trigger;
            var $contents = param.$contents;
            if ($contents.data("status") === void 0) {
                $contents.data("status", "closed");
            }
            $trigger.on("click", function() {
                var title = $(this).data('title');
                switch ($contents.data("status")) {
                    case "opened":
                        if (title) {
                            $trigger.html(title);
                        } else {
                            $trigger.html("邨槭ｊ霎ｼ縺ｿ笆ｼ");
                        }
                        $contents.data("status", "closing");
                        $contents.slideUp(350, function() {
                            $contents.data("status", "closed");
                        });
                        break;
                    case "opening":
                        break;
                    case "closing":
                        break;
                    case "closed":
                        $trigger.html("髢峨§繧銀夢");
                        $contents.data("status", "opening");
                        $contents.slideDown(350, function() {
                            $contents.data("status", "opened");
                        });
                        break;
                    default:
                        break;
                }
                return false;
            })
        },
        setSearchCheckBox: function($checkbox) {
            $checkbox.on("click", function(e) {
                var $t = $(e.currentTarget);
                if ($t.hasClass("_selected")) {
                    $t.removeClass("_selected");
                    $t.find("input").prop("checked", false).trigger('change');
                } else {
                    $t.addClass("_selected");
                    $t.find("input").prop("checked", true).trigger('change');
                }
            })
            $checkbox.each(function(e, target) {
                var $t = $(target);
                if ($t.find("input").prop("checked")) {
                    $t.addClass("_selected");
                } else {
                    $t.removeClass("_selected");
                }
            })
        },
        setSearchRadio: function($radio) {
            $radio.on("click", function(e) {
                var $t = $(e.currentTarget);
                if ($t.hasClass("_selected")) {
                    return;
                } else {
                    $t.addClass("_selected");
                    $t.find("input").prop("checked", true);
                }
                $radio.each(function(e, target) {
                    var $t = $(target);
                    if ($t.find("input").prop("checked")) {
                        $t.addClass("_selected");
                    } else {
                        $t.removeClass("_selected");
                    }
                })
            })
            $radio.each(function(e, target) {
                var $t = $(target);
                if ($t.find("input").prop("checked")) {
                    $t.addClass("_selected");
                } else {
                    $t.removeClass("_selected");
                }
            })
        },
        setSearchClear: function(param) {
            var $trigger = param.$trigger;
            var targets = param.targets;
            $trigger.on("click", function() {
                for (var i = 0; i < targets.length; i++) {
                    switch (targets[i].attr("type")) {
                        case "text":
                            targets[i].val("");
                            break;
                        case "textarea":
                            targets[i].val("");
                            break;
                        case "checkbox":
                            targets[i].prop('checked', false);
                            targets[i].parent().removeClass("_selected");
                            break;
                        default:
                            targets[i].val("");
                            break;
                    }
                    if (targets[i].prop('tagName') == 'SELECT') {
                        var option = targets[i].children();
                        var firstOption = option.first().val();
                        targets[i].val(firstOption).trigger('change');
                    }
                }
            })
        },
        setSearchSelectRgt: function() {
            $('select').change(function() {
                if ($(this).children(':selected').text().match(/^[0-9\.\,]+$/)) {
                    $(this).addClass('_rtl');
                } else {
                    $(this).removeClass('_rtl');
                }
            })
        },
        setAccordion: function(param) {
            if (param == null) {
                param = {};
            }
            var $targets = param.$targets || $(".selectArea_accordion");
            $targets.find('.selectArea_accordion_title').click(function(e, is_animation) {
                var $this = $(e.currentTarget);
                var $parent = $this.parent();
                var $target = $parent.find(".selectArea_accordion_body");
                if (is_animation == null) {
                    is_animation = true;
                }
                if ($target.is(":visible")) {
                    $parent.removeClass("_opened");
                    $target.slideUp(350, function() {});
                    se_play('se_002');
                } else {
                    $parent.addClass("_opened");
                    if (is_animation) {
                        $target.slideDown(350, function() {});
                        se_play('se_002');
                    } else {
                        $target.show();
                    }
                }
            });
        }
    }
})();
