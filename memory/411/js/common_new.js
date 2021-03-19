/*
	名前空間用
*/
var Commonjs = Commonjs || (function() {
    function CreateJsCanvas() {}
    ;var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    CreateJsCanvas.prototype.init = function(_canvas, _adobeid, manifest, _stage, tick_flg, callback) {

        var self = this;

        this.cjs_deferred = $.Deferred();

        this.exportRoot = null;
        this.callback = callback;
        this.tick_flg = tick_flg || true;

        canvas = _canvas;
        stage = _stage || null;
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");

        var comp = AdobeAn.getComposition(_adobeid);
        var lib = comp.getLibrary();

        createjs.MotionGuidePlugin.install();
        var loader = new createjs.LoadQueue(false);
        if (lib.properties.manifest.length <= 0) {
            self.handleComplete({}, comp, _adobeid);
        } else {
            loader.addEventListener("fileload", function(evt) {
                self.handleFileLoad(evt, comp);
            });
            loader.addEventListener("complete", function(evt) {
                self.handleComplete(evt, comp, _adobeid);
            });
            var lib = comp.getLibrary();
            loader.loadManifest(manifest);
        }
    }
    ;

    CreateJsCanvas.prototype.handleFileLoad = function(evt, comp) {
        var images = comp.getImages();
        if (evt && (evt.item.type == "image")) {
            images[evt.item.id] = evt.result;
        }
    }
    ;

    CreateJsCanvas.prototype.handleComplete = function(evt, comp, _adobeid) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var self = this;
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                "images": [queue.getResult(ssMetadata[i].name)],
                "frames": ssMetadata[i].frames
            })
        }

        window.exportRoot = this.exportRoot = exportRoot = new lib[_adobeid]();
        window.stage = stage = stage || new lib.Stage(canvas);

        //Registers the "tick" event listener.
        fnStartAnimation = function() {
            stage.addChild(exportRoot);
            createjs.Ticker.setFPS(lib.properties.fps);

            if (self.tick_flg) {
                createjs.Ticker.addEventListener("tick", stage);
            }

            if (self.callback != null) {
                self.callback();
            }

            self.cjs_deferred.resolve();
        }
        //Code to support hidpi screens and responsive scaling.
        if (AdobeAn.makeResponsive && anim_container != null && dom_overlay_container != null) {
            AdobeAn.makeResponsive(true, 'width', true, 1, [canvas, anim_container, dom_overlay_container]);
        }
        AdobeAn.compositionLoaded(lib.properties.id);
        fnStartAnimation();

    }
    ;
    CreateJsCanvas.prototype.rehash = function() {
        createjs.Ticker.removeEventListener("tick", stage);
        createjs.Tween.removeAllTweens();
        if (stage) {
            stage.removeAllEventListeners();
            stage.removeAllChildren();
            stage.clear();
        }
        window.exportRoot = exportRoot = null;
        window.stage = stage = null
    }

    function Canvas() {}

    Canvas.prototype.init = function(canvas_element, manifest, lib, name, fps, callback, tick_flg, stage) {
        this.name = name;
        this.lib = lib;
        this.images = [];
        this.canvas = canvas_element;
        this.fps = fps;
        this.counter = 0;
        this.count_max = Object.keys(manifest).length;
        this.callback = callback;
        this.stage = stage;
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
    }
    ;

    Canvas.prototype.handleFileLoad = function(image) {
        window.images[image.id] = image.src;

        this.counter++;
        if (this.counter >= this.count_max)
            this.handleComplete();
    }

    Canvas.prototype.handleComplete = function() {
        var self = this;
        var is_instantiate = false;
        if (this.stage == null) {
            is_instantiate = true;
            this.stage = new createjs.Stage(this.canvas);
        }
        if (this.name == null) {} else {
            this.addChild(this.name);
        }
        if (is_instantiate) {
            this.stage.update();
        }

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
    }
    ;PopupTemplate.prototype.get_template = function() {
        switch (this.doc_type) {
        case "jQuery":
            return this.doc.prop("outerHTML");
        case "function":
            return this.doc().trim().replace(/>\s+</g, '><');
        case "string":
        default:
            return this.doc;
        }
    }
    ;
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
    }
    ;

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
    }
    ;Popup.enum_state = {
        "CLOSE": 1,
        "OPEN": 2,
    };
    Popup.enum_template = {
        "TYPE_1": new PopupTemplate(),
        "TYPE_2": new PopupTemplate(function() {
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
        "TYPE_3": new PopupTemplate(function() {
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
        "TYPE_4": new PopupTemplate(function() {
            return '\
					<div id="<%- _id %>" class="frame-<%- (is_event) ? "event" : "common" %> _hd_<%- (color) ? color : "" %> m-Cnt">\
						<div class="_header">\
							<div class="_title"><%- title %></div>\
						</div>\
						<div class="_wrapper">\
							<% if(full_display_flg) { %>\
								<%- contents %>\
							<% } else { %>\
								<div class="_contents">\
									<%- contents %>\
								</div>\
							<% } %>\
						</div>\
						<% if(closable) { %>\
							<div class="_btn_close js_popup_close jsOnDesignBtn"></div>\
						<% } %>\
					</div>\
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
    }
    ;
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
    }
    ;
    Popup.prototype.dispatchEvent = function(event_names) {
        var targets = this._listeners[event_names];
        if (targets) {
            for (var i = 0; i < targets.length; i++)
                targets[i](this);
        }
    }
    ;
    Popup.prototype.on = function(event_name, callback) {
        if (this._listeners[event_name] === undefined)
            this._listeners[event_name] = [];
        this._listeners[event_name].push(callback);
        return this;
    }
    ;

    /*
		param:
			templateに渡す変数([id|title|contents|...])
	*/
    Popup.prototype.set = function(param) {
        param = $.extend({}, this._template.default_param, param);
        param._id = this._id;
        Object.keys(param).forEach(function(key) {
            param[key] = Popup._parse_val(param[key]);
        });
        this._param = param;
        this._closable = param.closable;
        this._new_layout = param.new_layout;

        this._param.is_event = param.is_event || false;
        this._param.color = param.color || false;

        if (this._new_layout) {
            this._template = Popup.enum_template.TYPE_4;
        }

        //set dom
        this._dom = $(_.unescape(_.template(this._template.get_template(), this._param)));
        this.setClickInteraction();
        this._dom.on("click", function(e) {
            e.stopPropagation();
        });
        this.setStopRepeatLink();
        this._dom.find(".js_popup_close").on("click", $.proxy(this.close, this));

        //clear events
        this._listeners = {};
        return this;
    }
    ;
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
        //ボタンの凹み
        var onBtnElem = this._dom.find('a,:submit,label');
        onBtnElem.on(window.start, function() {
            $(this).addClass('_hover');
        }).on(window.end, function() {
            $(this).removeClass('_hover');
        }).on('mouseleave', function() {
            $(this).removeClass('_hover');
        });
        //画像ボタン用に拡縮を設定
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
        /* デザインボタン凹み */
        this._dom.find('.jsOnDesignBtn').on(actions);

        /* 将来的に生成されるdomに対しての縮小処理 */
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

        var htmlZoom = $("html").css("zoom");
        var zoom = (htmlZoom >= 2) ? 1 : htmlZoom;
        if (this._dom.height() * zoom > window_height)
            position_top = $(window).scrollTop() + 20;
        else
            position_top = (window_height - this._dom.height() * zoom) / 2 + $(window).scrollTop();

        position_top /= zoom;
        this._dom.css("top", position_top);
        this.dispatchEvent("open");
        return this;
    }
    ;
    Popup.prototype.close = function(mask_off) {

        var closable;
        var _mask_off = (mask_off != undefined) ? mask_off : true;

        if (event && event.currentTarget && event.currentTarget.id == "ibox_mask")
            closable = this._closable;
        else
            closable = true;

        if (this._state == Popup.enum_state.CLOSE || !closable)
            return;
        this._state = Popup.enum_state.CLOSE;
        this._dom.detach();

        // マスクOFFしない場合はマスク消さない
        if (_mask_off) {
            Popup._mask.hide();
        }

        this.dispatchEvent("close");
        se_play('se_009');
        return this;
    }
    ;

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
				maxCnt:最大文字数
				$textCnt:カウンターオブジェクト
				$input:入力フォームオブジェクト
				event_listeners:イベントリスナー群
					onChange:キーの入力やフォーカスの有無があったとき
					onEmpty:空になったとき
					onSubmittable:送信可能な文字数のとき
					onMax:最大文字数を超えたとき
				is_first_trigger:文字数の初回表示フラグ
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
				$tabs:タブオブジェクト
				is_init : 初期化フラグ
				func : タブ切り替え時に呼ばれる関数
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
			残り時間を返す関数。
			param:
				msecond:ミリ秒
				format:形式
				is_short:0の時分秒を削るフラグ
		*/
        getFormatTime: function(msecond, format, is_short) {
            var second = Math.ceil(msecond / 1000);
            var format = format || "hh時mm分ss秒";
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
            var $target_element = $("<canvas/>").attr("width", canvas_w).attr("height", canvas_h).css("zoom", zoom)[0];
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
        replacePremiumCardNew: function(param, _height, card_hidden) {
            var canvas = new CreateJsCanvas();
            var canvas_w = 640;
            var canvas_h = _height || 800;
            var fps = param.fps || 18;
            var zoom = String(param.width).replace("px", "") / canvas_w;
            var $target_element = $("<canvas/>").attr("width", canvas_w).attr("height", canvas_h).attr("id", "canvas").css("zoom", zoom)[0];
            var idol_base_id = param.idol_base_id;
            var $replace_element = $(param.replace_element);
            var manifest = [{
                src: param.card_image,
                id: "replace_image_" + idol_base_id
            }];

            canvas.init($target_element, "_" + idol_base_id + "_sign_effect");
            $replace_element.before($target_element)
            if (!card_hidden) {
                $replace_element.remove();
            }
            return canvas;
        },
        CreateJsCanvas: CreateJsCanvas,
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
                var popup = new Commonjs.Popup("popup-" + id,new Commonjs.PopupTemplate(template));
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
            }
            ;
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
				ローカルストレージを操作するキー名
			param:
				保存する値
			※保存する際にJSON形式は避けてください。（仕様上は保存できますが、上手く動作しない端末もある為）
		*/
        loadLocalStorage: function(keyname) {
            if (window.localStorage) {
                if (localStorage.getItem(keyname))
                    return localStorage.getItem(keyname);
                else
                    return false;
            } else {
                return false;
            }
        },
        saveLocalStorage: function(keyname, param) {
            if (window.localStorage)
                localStorage.setItem(keyname, param);
            else
                return false;
        },
        /*
		*/
        escapeHTML: function(str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
        },
        /*
		*/
        unescapeHTML: function(str) {
            return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, '\'');
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
                        $trigger.html("絞り込み▼");
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
                    $trigger.html("閉じる▲");
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
        },
        openBrowserByAndapp: function(url) {
            var popup = new Commonjs.Popup("openBrowserByAndapp");
            popup.set({
                "title": "外部サイト移動確認",
                "contents": '\
					<div style="margin:8px 12px;font-size:12px">\
						外部サイトに移動しようとしています。<br>\
						※ここから先はモバゲーではありません\
					</div>\
					<div style="margin:8px 12px;font-size:12px">\
						外部サイトへ移動しますか？\
					</div>\
					<a class="btn_decision_line_2 m-Cnt m-Btm4" style="font-size:12px" id="jsOpenBrowserByAndapp">リンク先へ移動する</a>\
				'
            });
            popup.open();
            popup.get_contents().find("#jsOpenBrowserByAndapp").on("click", function() {
                EL_IMAS.shellapp.openUrl(url);
            })
        },
    }
}
)();
