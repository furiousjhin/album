"use strict";
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
}
: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
  , _createClass = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value"in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i),
        a && e(t, a),
        t
    }
}();
!function(e) {
    function t(a) {
        if (i[a])
            return i[a].exports;
        var n = i[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, t),
        n.l = !0,
        n.exports
    }
    var i = {};
    t.m = e,
    t.c = i,
    t.d = function(e, i, a) {
        t.o(e, i) || Object.defineProperty(e, i, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }
    ,
    t.n = function(e) {
        var i = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return t.d(i, "a", i),
        i
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 0)
}([function(e, t, i) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(1);
    window.petitManager = window.petitManager || new a["a"]
}
, function(e, t, i) {
    i.d(t, "a", function() {
        return n
    });
    var a = i(2)
      , n = function() {
        function e(t) {
            var i = this;
            _classCallCheck(this, e);
            var a = t || {};
            this.cloth_data = {},
            this.el = "#animation-container",
            this.$el = null,
            this.prefetch = null,
            this.loaded_action = null,
            this.deleteQue = [],
            this.headDOM = document.getElementsByTagName("head")[0],
            this.fps = 18,
            this.cjs = null,
            this.stage = null,
            this.images = {},
            this.canvas_recreate_flag = !1,
            this.canvas_width = 640,
            this.canvas_height = 840,
            this.canvas_id = "",
            this.getCharacterLength = function() {
                return i.getCharactersKeys().length
            }
            ,
            this.getCharactersKeys = function() {
                return Object.keys(a)
            }
            ,
            this.setCharacters = function(e, t) {
                if ("object" != (void 0 === e ? "undefined" : _typeof(e)))
                    return !1;
                for (var n in e) {
                    var s = $.extend({}, e[n]);
                    a[n] = s
                }
                return !!t || (i.initCharacters(),
                !0)
            }
            ,
            this.initCharacters = function() {
                i.init(a)
            }
            ,
            this.deleteCharacter = function(e) {
                return void 0 != a[e] && (void 0 != a[e].api && a[e].delPex(),
                delete a[e],
                !0)
            }
            ,
            this.changeOption = function() {
                for (var e in a)
                    a[e].changeOption()
            }
            ,
            this.getChracter = function(e) {
                return void 0 === e ? a : a[e]
            }
            ,
            this.getAllChracter = function() {
                return a
            }
        }
        return _createClass(e, [{
            key: "requireCJS",
            value: function(e) {
                var t = this;
                this.clearImages(),
                window.images = this.images;
                var i = $.Deferred();
                return requirejs(["easeljs_0_7_1", "tweenjs"], function() {
                    requirejs(["movieclipjs"], function() {
                        requirejs(e, function() {
                            t.elementsInitialize(),
                            t.stage = new createjs.Stage(t.canvas),
                            createjs.Ticker.hasEventListener("tick") || (createjs.Ticker.setFPS(t.fps),
                            createjs.Ticker.addEventListener("tick", function() {
                                try {
                                    t.stage.update()
                                } catch (e) {}
                            })),
                            i.resolve()
                        })
                    })
                }),
                i.promise()
            }
        }, {
            key: "clearImages",
            value: function() {
                for (var e in window.images)
                    delete window.images[e]
            }
        }, {
            key: "init",
            value: function(e) {
                if (this.deleteQue.length) {
                    for (var t in this.deleteQue)
                        this.deleteCharacter(this.deleteQue[t]);
                    this.deleteQue.splice(0, this.deleteQue.length)
                }
                for (var i in e)
                    if (void 0 == e[i].cjs) {
                        var n = new a["a"]({
                            position: i,
                            parent: this,
                            lib: "lib",
                            img: "images"
                        });
                        e[i] = $.extend(n, e[i])
                    }
                this.initReady(e)
            }
        }, {
            key: "cjsStop",
            value: function() {
                createjs.Ticker.setPaused(!0),
                createjs.Ticker.reset()
            }
        }, {
            key: "elementsInitialize",
            value: function() {
                this.$el && !this.canvas_recreate_flag || (this.$el = $(this.el),
                this.canvas = document.createElement("canvas"),
                this.canvas.width = this.canvas_width,
                this.canvas.height = this.canvas_height,
                this.canvas.id = this.canvas_id,
                this.canvas.canvas_recreate_flag = this.canvas_recreate_flag,
                this.$el.append(this.canvas))
            }
        }, {
            key: "setPrefetch",
            value: function() {
                if (!this.prefetch) {
                    var e = document.getElementById("prefetch");
                    e || (e = document.createElement("div"),
                    e.id = "prefetch",
                    this.headDOM.appendChild(e)),
                    this.prefetch = e
                }
            }
        }, {
            key: "initReady",
            value: function(e) {
                this.clothMerge(e)
            }
        }, {
            key: "clothMerge",
            value: function(e) {
                var t = {};
                for (var i in e)
                    $.extend(t, e[i].image_url_list);
                for (var a = 1; a <= 3; a++)
                    t["cheek" + a] = "";
                this.loadClothData(t, e)
            }
        }, {
            key: "loadClothData",
            value: function(e, t) {
                var i = this
                  , a = [];
                for (var n in e) {
                    var s = $.Deferred();
                    a.push(s.promise()),
                    void 0 === this.cloth_data[n] ? void 0 !== window[n] ? this.imageAlready(n, window[n], s) : this.loadImageJs(e[n], n, s) : s.resolve()
                }
                $.when.apply($, a).then(function() {
                    $(i.prefetch).empty(),
                    i.ready(t)
                })
            }
        }, {
            key: "loadImageJs",
            value: function(e, t, i) {
                var a = this
                  , n = document.createElement("script");
                n.onload = function() {
                    a.imageAlready(t, window[t], i)
                }
                ,
                n.src = e,
                this.headDOM.appendChild(n)
            }
        }, {
            key: "imageAlready",
            value: function(e, t, i) {
                var a = [];
                for (var n in t) {
                    var s = $.Deferred();
                    a.push(s),
                    this.cloth_data[e] = [],
                    this.imageToReplace(e, t[n], "petit_base_" + n, s)
                }
                $.when.apply($, a).then(function() {
                    i.resolve()
                })
            }
        }, {
            key: "imageToReplace",
            value: function(e, t, i, a) {
                var n = this
                  , s = new Image;
                s.onload = function() {
                    n.cloth_data[e][i] = s,
                    a.resolve()
                }
                ,
                s.src = t,
                this.setPrefetch(),
                this.prefetch.appendChild(s)
            }
        }, {
            key: "ready",
            value: function(e) {
                var t = this
                  , i = [];
                for (var a in e) {
                    var n = $.Deferred();
                    e[a].init(n),
                    i.push(n.promise())
                }
                $.when.apply($, i).then(function() {
                    "function" == typeof t.loaded_action && t.loaded_action()
                })
            }
        }]),
        e
    }()
}
, function(e, t, i) {
    i.d(t, "a", function() {
        return a
    });
    var a = function() {
        function e(t) {
            var i = this;
            _classCallCheck(this, e);
            var a = t.position
              , n = t.parent
              , s = t.lib
              , r = void 0 === s ? "lib" : s
              , o = t.img
              , c = void 0 === o ? "images" : o
              , h = t.index
              , l = void 0 === h ? 0 : h;
            this.shortpants = !1,
            this.callaction = null,
            this.cjs = null,
            this.lib = r,
            this.img = c,
            this.index = l,
            this.shadow_flg = !1,
            this.images_backup = {},
            this.pose_id = 1,
            this.getParent = function() {
                return n
            }
            ,
            this.getPosition = function() {
                return parseInt(a)
            }
            ,
            this.callback = null;
            var u = "stay";
            this.changeMotion = function(e) {
                u = e,
                i.doAction(u)
            }
            ,
            this.getMotion = function() {
                return u
            }
            ,
            this.changePosition = function(e, t) {
                var a = i.getVariables();
                a.chara_order = e,
                a.motion_act = t,
                i.changeOption(a)
            }
        }
        return _createClass(e, [{
            key: "isShortpants",
            value: function(e) {
                var t = !1
                  , i = this.getParent().cloth_data[e];
                if (i)
                    for (var a in i)
                        "petit_base_replace_leg_L_front" == a && (t = !0);
                this.shortpants = t
            }
        }, {
            key: "init",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                for (var t in this.image_url_list)
                    t.indexOf("costume") > -1 && this.isShortpants(t);
                var i = {};
                for (var a in this.image_url_list)
                    for (var n in this.getParent().cloth_data[a]) {
                        if (a.indexOf("costume") > -1) {
                            if ((2 == this.breast_size || 3 == this.breast_size) && "petit_base_replace_breast_L" == n)
                                continue;
                            if ((1 == this.breast_size || 3 == this.breast_size) && "petit_base_replace_breast_S" == n)
                                continue
                        }
                        if (a.indexOf("leg") > -1)
                            if (this.shortpants) {
                                if ("petit_base_replace_item_foot_L_back" == n)
                                    continue
                            } else if ("petit_base_replace_item_foot_L_front" == n)
                                continue;
                        i[n] = this.getParent().cloth_data[a][n]
                    }
                var s = this.getParent().cloth_data["cheek" + (4 == this.body_type ? 1 : this.body_type)];
                for (var r in s)
                    i[r] = s[r];
                this.runCjs(i, e, this.img, this.index)
            }
        }, {
            key: "getVariables",
            value: function() {
                var e = this;
                return {
                    small_character_flg: 2 == this.body_type ? 1 : 0,
                    big_character_flg: 4 == this.body_type ? 1 : 0,
                    chara_num: this.getParent().getCharacterLength(),
                    chara_order: this.getPosition(),
                    motion_act: this.getMotion(),
                    shadow_flg: this.shadow_flg,
                    pose_id: this.pose_id,
                    motion_finish_callback: function(t, i) {
                        e.callback && e.callback(t, i)
                    }
                }
            }
        }, {
            key: "setVariables",
            value: function(e, t) {
                this[e] = t
            }
        }, {
            key: "changeOption",
            value: function(e) {
                e || (e = this.getVariables()),
                this.cjs.init(e)
            }
        }, {
            key: "doAction",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wait";
                this.cjs.motion_set(e)
            }
        }, {
            key: "runCjs",
            value: function(e, t, i, a) {
                var n = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                  , s = this.getParent();
                s.clearImages();
                var r = window.AdobeAn.getComposition("petit_base");
                window[this.img] = r.getImages(),
                $.extend(window[this.img], e),
                $.extend(this.images_backup, e);
                var o = r.getLibrary();
                this.cjs = new o.character_container,
                this.cjs.visible = n,
                s.stage.addChildAt(this.cjs, a),
                s.stage.update(),
                this.changeOption(),
                t && t.resolve()
            }
        }, {
            key: "cloneTo",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.getParent().clearImages(),
                $.extend(window[this.img], this.images_backup);
                var i = window[this.lib]
                  , a = new i
                  , n = this.getVariables();
                return null == t ? e.addChild(a) : e.addChildAt(a, t),
                e.update(),
                a.init(n),
                a
            }
        }]),
        e
    }()
}
]);
