! function () {
	var t = {
		Models: {},
		Views: {},
		Controllers: {}
	};
	window.PetitCommon = t
}(), ! function () {
	var t = {};
	t.progress = "0", t.save = function (e) {
		$.ajax({
			type: "POST",
			url: window.path.tutorialProgress,
			data: $.extend({
				avoidCacheParam: (new Date).getTime(),
				progress: t.progress
			}, e.data),
			dataType: "json",
			headers: {
				Pragma: "no-cache"
			},
			success: e.success,
			error: e.error
		})
	}, PetitCommon.TutorialProgress = t
}(), this.JST = {
	chara_change: function (obj) {
		obj || (obj = {}); {
			var __p = "";
			_.escape
		}
		with(obj) __p += "<div class='cc__bg'>\n    <div class='cc__inner'>\n        <div class='cc__left'>\n            <div id='cc-left' ></div>\n        </div>\n        <div class='cc__center'>\n            <div id='cc-center' ></div>\n        </div>\n        <div class='cc__right'>\n            <div id='cc-right' ></div>\n        </div>\n    </div>\n</div>\n";
		return __p
	},
	help_modal: function (obj) {
		obj || (obj = {}); {
			var __p = "";
			_.escape
		}
		with(obj) __p += "<div class='p-help-modal'>\n    <div data-help-modal-bg class='p-help-modal__bg' data-help-modal-close></div>\n    <div data-help-modal-window class='p-help-modal__window'>\n        <div class='p-help-modal__inner'>\n            <div class='p-help-modal__header'>\n                <span data-help-modal-title></span>\n                <div class='p-help-modal__header-star-left'></div>\n                <div class='p-help-modal__header-star-right'></div>\n                <div class='p-help-modal__header-close' data-help-modal-close></div>\n            </div>\n            <div class='p-help-modal__body'>\n                <div data-help-modal-left-arrow class='p-help-modal__left-arrow'></div>\n                <div data-help-modal-right-arrow class='p-help-modal__right-arrow'></div>\n                <div data-help-modal-include-area></div>\n            </div>\n            <ul data-help-modal-dot-list class='p-help-modal__dot-list'>\n            </ul>\n            <script type='javascript/template' data-help-modal-dot-template>\n                <li class='p-help-modal__dot' data-help-modal-dot></li>\n            </script>\n        </div>\n    </div>\n</div>\n";
		return __p
	},
	loading: function (obj) {
		obj || (obj = {}); {
			var __p = "";
			_.escape
		}
		with(obj) __p += "<div class='p-loading'>\n    <div class='p-loading__bg'></div>\n    <div class='p-loading__label'></div>\n    <div class='p-loading__chara'></div>\n</div>\n";
		return __p
	},
	tutorial_modal: function (obj) {
		obj || (obj = {}); {
			var __p = "";
			_.escape
		}
		with(obj) __p += "<div id='p-tutorial-modal' class='p-help-modal'>\n    <div id=\"p-tutorial-modal-bg\" class='p-help-modal__bg' data-tutorial-modal-close></div>\n    <div id='p-tutorial-modal-window' class='p-help-modal__window'>\n        <div class='p-help-modal__inner'>\n            <div class='p-help-modal__header'>\n                <span id='p-tutorial-modal-title'></span>\n                <div class='p-help-modal__header-star-left'></div>\n                <div class='p-help-modal__header-star-right'></div>\n            </div>\n            <div class='p-help-modal__body'>\n                <div id='p-tutorial-modal-include-area'></div>\n            </div>\n        </div>\n    </div>\n</div>\n";
		return __p
	},
	tutorial_other_modal: function (obj) {
		obj || (obj = {}); {
			var __p = "";
			_.escape
		}
		with(obj) __p += "<div id='p-tutorial-other-modal' class='p-help-modal'>\n    <div id=\"p-tutorial-other-modal-bg\" class='p-help-modal__bg' data-tutorial-other-modal-close></div>\n    <div id='p-tutorial-other-modal-window' class='p-help-modal__window p-help-modal__window-blue'>\n        <div class='p-help-modal__inner'>\n            <div class='p-help-modal__header p-help-modal__header-blue'>\n                <span id='p-tutorial-other-modal-title'></span>\n                <div class='p-help-modal__header-star-left'></div>\n                <div class='p-help-modal__header-star-right'></div>\n            </div>\n            <div class='p-help-modal__body'>\n                <div id='p-tutorial-other-modal-left-arrow' class='p-help-modal__left-wrapper'>\n                    <div class='p-help-modal__left-arrow'></div>\n                </div>\n                <div id='p-tutorial-other-modal-right-arrow' class='p-help-modal__right-wrapper'>\n                    <div class='p-help-modal__right-arrow'></div>\n                </div>\n                <div id='p-tutorial-other-modal-include-area'></div>\n            </div>\n            <ul id='p-tutorial-other-modal-dot-list' class='p-help-modal__dot-list'>\n            </ul>\n            <script type='javascript/template' id='p-tutorial-other-modal-dot-template'>\n                <li class='p-help-modal__dot' data-tutorial-other-modal-dot></li>\n            </script>\n        </div>\n    </div>\n</div>\n";
		return __p
	}
}, ! function () {
	var t = "data-not-allow-close",
		e = function () {};
	e.prototype.onClickClose = function () {
		var i = e.findAt(this.$rawModals, this.selectedIndex);
		if ("undefined" == typeof $(i).attr(t) && this.showTime + 500 < (new Date).getTime()) {
			this.hide(), se_play("se_009");
			var o = e.findAt(this.$modalList, this.selectedIndex),
				a = o.find("[data-tutorial-modal-hide]");
			a.size() > 0 && a.click()
		}
	}, e.prototype.onClickHide = function () {
		this.showTime + 500 < (new Date).getTime() && this.hide()
	}, e.prototype._select = function (t, i, o) {
		this.selectedIndex = t, e.doIfSameIndex(this.$modalList, this.selectedIndex, function (t) {
			t.show()
		}, function (t) {
			t.hide()
		}), e.doIfSameIndex(this.$rawModals, this.selectedIndex, $.proxy(function (t) {
			var e = $(t).attr(i);
			"string" != typeof e && "string" == typeof o && (e = $(t).attr(o)), this.$ui.title.text(e)
		}, this))
	}, e.prototype._show = function () {
		if (this.showTime = (new Date).getTime(), $("html").css("zoom") < 2) var t = i(this.$ui.modalWindow, $(window), $("html").css("zoom"));
		else var t = i(this.$ui.modalWindow, $(window), 1);
		this.$ui.modalWindow.css("top", t.top + "px"), this.$ui.modalWindow.css("left", t.left + "px"), this.$el.css("visibility", "visible")
	}, e.prototype.show = function () {
		this._show()
	}, e.prototype.hide = function () {
		this.$el.css("visibility", "hidden")
	}, e.prototype.isVisible = function () {
		return "visible" === this.$el.css("visibility")
	}, e.prototype.showArrow = function (t) {
		if (t.length <= 1) return this.$ui.leftArrow.hide(), this.$ui.rightArrow.hide(), void 0;
		switch (this.selectedIndex) {
		case 0:
			this.$ui.leftArrow.hide(), this.$ui.rightArrow.show();
			break;
		case t.length - 1:
			this.$ui.leftArrow.show(), this.$ui.rightArrow.hide();
			break;
		default:
			this.$ui.leftArrow.show(), this.$ui.rightArrow.show()
		}
	}, e.prototype._renderDot = function () {}, e.getInnerTemplates = function (t, e) {
		var i = $("script[" + t + "]");
		return _.map(i, function (t) {
			var i = $(t);
			if ("string" == typeof e) {
				var o = i.attr(e);
				"string" == typeof o && (i = i.clone(!0), i.empty())
			}
			return i
		})
	}, e.escapeToOneLine = function (t) {
		return t.replace(/[\r\n]/g, "").replace(/^\s+/, "")
	}, e.getModalTemplate = function (t) {
		return $.map(t, function (t) {
			var e = $(t).html(),
				i = PetitCommon.BaseModal.escapeToOneLine(e),
				o = $("<div data-modal-wrapper>" + i + "</div>");
			return o.css("display", "none"), o
		})
	}, e.doIfSameIndex = function (t, e, i, o) {
		for (var a = 0; a < t.length; a++) {
			var d = t[a];
			a === e ? "function" == typeof i && i.call(this, d) : "function" == typeof o && o.call(this, d)
		}
	}, e.findAt = function (t, e) {
		for (var i = 0; i < t.length; i++)
			if (i === e) return t[i]
	};
	var i = function (t, e, i) {
		i = "undefined" == typeof i ? 1 : Number(i);
		var o = window.innerHeight ? window.innerHeight : $(window).height(),
			a = window.innerWidth ? window.innerWidth : $(window).width(),
			d = (o / i - t.height()) / 2,
			l = (a / i - t.width()) / 2;
		return {
			top: Math.round(d),
			left: Math.round(l)
		}
	};
	PetitCommon.BaseModal = e
}(), ! function () {
	var t = function (e, i, o, a, d) {
		var l = _.template(t.jst());
		this.$el = $(e), this.$el.append(l), this.idolId = i, this.idolIdCenter = o, this.idolIdLeft = a, this.idolIdRight = d, this.$ui = {
			left: $(document.getElementById("cc-left")),
			center: $(document.getElementById("cc-center")),
			right: $(document.getElementById("cc-right"))
		}, this.status = this.initState(), this.initIcon(), $(document.getElementById("cc-left")).on("click", $.proxy(this.onClickLeft, this)), $(document.getElementById("cc-center")).on("click", $.proxy(this.onClickCenter, this)), $(document.getElementById("cc-right")).on("click", $.proxy(this.onClickRight, this))
	};
	t.prototype.initState = function () {
		return {
			center: a(this.idolId, this.idolIdCenter),
			left: a(this.idolId, this.idolIdLeft),
			right: a(this.idolId, this.idolIdRight)
		}
	}, t.prototype.initIcon = function () {
		i(this.$ui.center, this.status.center), i(this.$ui.left, this.status.left), i(this.$ui.right, this.status.right)
	}, t.prototype.onClickLeft = function () {
		return se_play("se_113"), e(this.idolId, this.idolIdLeft)
	}, t.prototype.onClickRight = function () {
		return se_play("se_113"), e(this.idolId, this.idolIdRight)
	}, t.prototype.onClickCenter = function () {
		return se_play("se_113"), e(this.idolId, this.idolIdCenter)
	};
	var e = function (t, e) {
			if (t == e) return !1;
			var i = "";
			if ("0" == e) i = window.path.charaChangeDeck;
			else {
				var i = window.path.charaChange;
				i = i.replace("replacedidolid", e)
			}
			window.location.href = i
		},
		i = function (t, e) {
			switch (e) {
			case o.NONE:
				t.addClass("cc__icon-none");
				break;
			case o.SELECTED:
				t.addClass("cc__icon-selected");
				break;
			case o.UNSELECTED:
				t.addClass("cc__icon-unselected")
			}
		},
		o = {
			NONE: "none",
			SELECTED: "selected",
			UNSELECTED: "unselected"
		},
		a = function (t, e) {
			switch (e) {
			case "0":
				return o.NONE;
			case t:
				return o.SELECTED;
			default:
				return o.UNSELECTED
			}
		};
	t.jst = JST.chara_change, PetitCommon.CharaChange = PetitCommon.Views.CharaChange = t
}(), ! function () {
	var t = "data-help-modal",
		e = function (i) {
			this.$el = $(e.jst()), this.$rawModals = "undefined" == typeof i ? PetitCommon.BaseModal.getInnerTemplates(t) : i, this.$modalList = PetitCommon.BaseModal.getModalTemplate(this.$rawModals), this.hide(), this.render(), this.$ui = {
				title: this.$el.find("[data-help-modal-title]"),
				modalWindow: this.$el.find("[data-help-modal-window]"),
				dots: this.$el.find("li[data-help-modal-dot]"),
				rightArrow: this.$el.find("[data-help-modal-right-arrow]"),
				leftArrow: this.$el.find("[data-help-modal-left-arrow]")
			}, this.$ui.rightArrow.on("click", $.proxy(this.onClickRight, this)), this.$ui.leftArrow.on("click", $.proxy(this.onClickLeft, this)), this.$ui.dots.on("click", $.proxy(this.onClickDot, this)), this.$el.find("[data-help-modal-close]").on("click", $.proxy(this.onClickClose, this)), this.select(0)
		};
	$.extend(e.prototype, PetitCommon.BaseModal.prototype), e.prototype.onClickRight = function () {
		this.select(this.selectedIndex + 1)
	}, e.prototype.onClickLeft = function () {
		this.select(this.selectedIndex - 1)
	}, e.prototype.onClickDot = function (t) {
		var e = $(t.target).attr("data-index");
		this.select(Number(e))
	}, e.prototype.render = function () {
		$(document.body).append(this.$el);
		var t = this.$el.find("[data-help-modal-include-area]");
		$.each(this.$modalList, function (e, i) {
			t.append(i)
		});
		var e = this.$el.find("[data-help-modal-dot-list]"),
			i = this.$el.find("[data-help-modal-dot-template]").text();
		$.each(this.$modalList, function (t) {
			var o = $(PetitCommon.BaseModal.escapeToOneLine(i));
			o.attr("data-index", t), e.append(o)
		}), this.$modalList.length <= 1 && e.hide()
	}, e.prototype.select = function (e) {
		this._select(e, t), PetitCommon.BaseModal.doIfSameIndex(this.$ui.dots, this.selectedIndex, function (t) {
			$(t).addClass("p-help-modal__dot-selected")
		}, function (t) {
			$(t).removeClass("p-help-modal__dot-selected")
		}), this.showArrow(this.$modalList)
	}, e.jst = JST.help_modal, PetitCommon.Views.HelpModal = PetitCommon.HelpModal = e
}(), ! function () {
	var t = function (e) {
		var i = t.jst();
		this.$loading = $(i), this.$loading.css("visibility", "hidden"), this.$el = $(e), this.$el.append(this.$loading)
	};
	t.prototype.show = function () {
		this.$loading.css("visibility", "visible")
	}, t.prototype.hide = function () {
		this.$loading.css("visibility", "hidden")
	}, t.jst = JST.loading, PetitCommon.Views.Loading = PetitCommon.Loading = t
}(), ! function () {
	var t = "data-help-group-name",
		e = "data-help-modal-group-name",
		i = function () {
			$("a[" + t + "]").on("click", _.bind(this.onClickHelp, this)), this.helpModals = {}, _.each($("a[" + t + "]"), function (i) {
				var o = $(i).attr(t),
					a = $("script[" + e + "='" + o + "']");
				this.helpModals[o] = new PetitCommon.Views.HelpModal(a)
			}, this)
		};
	i.prototype.onClickHelp = function (e) {
		e.preventDefault();
		var i = $(e.target).attr(t);
		this.helpModals[i].show()
	}, PetitCommon.Views.PetitHelp = PetitCommon.PetitHelp = i
}(), ! function () {
	var t = "data-tutorial-modal",
		e = "data-modal-select-group-id",
		i = function () {
			this.$el = $(i.jst()), this.$rawModals = PetitCommon.BaseModal.getInnerTemplates(t, e), this.$modalList = PetitCommon.BaseModal.getModalTemplate(this.$rawModals), this.groupModals = this.createSameGroupModal(this.$rawModals), this.hide(), this.render(), this.$ui = {
				title: $(document.getElementById("p-tutorial-modal-title")),
				modalWindow: $(document.getElementById("p-tutorial-modal-window"))
			}, this.$el.find("[data-tutorial-modal-close]").on("click", $.proxy(this.onClickClose, this)), this.$el.find("[data-tutorial-modal-hide]").on("click", $.proxy(this.onClickHide, this)), this.select(0)
		};
	$.extend(i.prototype, PetitCommon.BaseModal.prototype), i.prototype.showNext = function () {
		this.select(this.selectedIndex + 1), this.show()
	}, i.prototype.showPrevious = function () {
		this.select(this.selectedIndex - 1), this.show()
	}, i.prototype.createSameGroupModal = function (t) {
		return _.reduce(t, function (t, i) {
			var o = $(i).attr(e);
			if ("string" == typeof o || "number" == typeof o) {
				var a = $("[" + e + "='" + o + "']"),
					d = new PetitCommon.TutorialOtherModal(a);
				t[o] = d
			}
			return t
		}, {})
	}, i.prototype.render = function () {
		$(document.body).append(this.$el);
		var t = $(document.getElementById("p-tutorial-modal-include-area"));
		$.each(this.$modalList, function (e, i) {
			t.append(i)
		})
	}, i.prototype.select = function (e) {
		this._select(e, t)
	}, i.prototype.show = function () {
		var t = PetitCommon.BaseModal.findAt(this.$rawModals, this.selectedIndex),
			i = $(t).attr(e);
		"string" == typeof i || "number" == typeof i ? this.groupModals[i].show() : this._show()
	}, i.jst = JST.tutorial_modal, PetitCommon.Views.TutorialModal = PetitCommon.TutorialModal = i
}(), ! function () {
	var t = "data-tutorial-other-modal",
		e = "data-tutorial-modal",
		i = function (t) {
			this.$el = $(i.jst()), this.$rawModals = t, this.$modalList = PetitCommon.BaseModal.getModalTemplate(this.$rawModals), this.hide(), this.render(), this.$ui = {
				title: $(document.getElementById("p-tutorial-other-modal-title")),
				modalWindow: $(document.getElementById("p-tutorial-other-modal-window")),
				dots: this.$el.find("li[data-tutorial-other-modal-dot]"),
				rightArrow: $(document.getElementById("p-tutorial-other-modal-right-arrow")),
				leftArrow: $(document.getElementById("p-tutorial-other-modal-left-arrow"))
			}, this.$ui.rightArrow.on("click", $.proxy(this.onClickRight, this)), this.$ui.leftArrow.on("click", $.proxy(this.onClickLeft, this)), this.$ui.dots.on("click", $.proxy(this.onClickDot, this)), this.$el.find("[data-tutorial-other-modal-close]").on("click", $.proxy(this.onClickClose, this)), this.$el.find("[data-tutorial-modal-hide]").on("click", $.proxy(this.onClickHide, this)), this.select(0)
		};
	$.extend(i.prototype, PetitCommon.BaseModal.prototype), i.prototype.onClickRight = function () {
		this.select(this.selectedIndex + 1)
	}, i.prototype.onClickLeft = function () {
		this.select(this.selectedIndex - 1)
	}, i.prototype.onClickDot = function (t) {
		var e = $(t.target).attr("data-index");
		this.select(Number(e))
	}, i.prototype.render = function () {
		$(document.body).append(this.$el);
		var t = $(document.getElementById("p-tutorial-other-modal-include-area"));
		$.each(this.$modalList, function (e, i) {
			t.append(i)
		});
		var e = $(document.getElementById("p-tutorial-other-modal-dot-list")),
			i = $(document.getElementById("p-tutorial-other-modal-dot-template")).text();
		$.each(this.$modalList, function (t) {
			var o = $(PetitCommon.BaseModal.escapeToOneLine(i));
			o.attr("data-index", t), e.append(o)
		})
	}, i.prototype.select = function (i) {
		this._select(i, t, e), PetitCommon.BaseModal.doIfSameIndex(this.$ui.dots, this.selectedIndex, function (t) {
			$(t).addClass("p-help-modal__dot-selected")
		}, function (t) {
			$(t).removeClass("p-help-modal__dot-selected")
		}), this.showArrow(this.$modalList)
	}, i.jst = JST.tutorial_other_modal, PetitCommon.Views.TutorialOtherModal = PetitCommon.TutorialOtherModal = i
}();
