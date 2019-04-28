! function () {
	var t = {};
	window.IBase = t
}(), ! function (t) {
	var i = {
			TEXT: "data-bind-text",
			HTML: "data-bind-html",
			SHOW: "data-bind-show",
			SHOW_EQUAL: "data-bind-show-equal",
			HIDE: "data-bind-hide",
			ID: "data-bind-id",
			LOOP: "data-bind-loop",
			CLASS: "data-bind-class",
			CLASS_ADD: "data-bind-class-add",
			TEMPLATE_ID: "data-bind-template-id",
			LOOP_ITEM_TEXT: "data-bind-loop-text",
			LOOP_ITEM_HTML: "data-bind-loop-html",
			LOOP_ITEM_ID: "data-bind-loop-id",
			LOOP_ITEM_CLASS: "data-bind-loop-class",
			LOOP_ITEM_CLASS_ADD: "data-bind-loop-class-add"
		},
		n = {
			ID: "data-id"
		},
		e = function (t) {
			this.$el = t, this.cached = {}
		};
	e.prototype.set = function (t, i) {
		this.cached[t] = i, o(this.$el, t, i), r(this.$el, t, i), d(this.$el, t, i), u(this.$el, t, i), f(this.$el, t, i), c(this.$el, t, i), l(this.$el, t, i)
	}, e.prototype.get = function (t) {
		return this.cached[t]
	};
	var s = function (t, i) {
			return "[" + t + "='" + i + "']"
		},
		a = function (t, i, n, e, a, o) {
			var r = s(a, i),
				d = t.find(r);
			o ? d.text(n) : d.html(n)
		},
		o = function (t, n, e, s) {
			var o = s ? i.LOOP_ITEM_TEXT : i.TEXT;
			a(t, n, e, s, o, !0)
		},
		r = function (t, n, e, s) {
			var o = s ? i.LOOP_ITEM_HTML : i.HTML;
			a(t, n, e, s, o, !1)
		},
		d = function (n, e, a) {
			var o = s(i.SHOW, e),
				r = n.find(o);
			r.each(function (n, e) {
				var s, o = t(e),
					r = o.attr(i.SHOW_EQUAL);
				s = "undefined" != typeof r ? a === r ? !0 : !1 : !!a, h(o, s)
			})
		},
		u = function (t, n, e) {
			var a = s(i.HIDE, n);
			h(t.find(a), !e)
		},
		h = function (t, i) {
			i ? t.show() : t.hide()
		},
		f = function (t, n, e, a) {
			var o = a ? i.LOOP_ITEM_CLASS_ADD : i.CLASS_ADD,
				r = s(o, n),
				d = t.find(r),
				u = d.attr(a ? i.LOOP_ITEM_CLASS : i.CLASS);
			u = "string" == typeof u ? u : e, e ? d.addClass(u) : d.removeClass(u)
		},
		c = function (t, e, a, o) {
			var r = o ? i.LOOP_ITEM_ID : i.ID,
				d = s(r, e),
				u = t.find(d);
			u.attr(n.ID, a)
		},
		l = function (n, e, a) {
			if (!t.isArray(a)) return !1;
			var d = s(i.LOOP, e),
				u = n.find(d);
			if (0 === u.size()) return !1;
			u.empty();
			var h = document.getElementById(u.attr(i.TEMPLATE_ID));
			if (null === h) return !1;
			for (var l = 0; l < a.length; l++) {
				var p = a[l],
					g = t("<div>" + h.innerHTML + "</div>");
				for (var e in p) o(g, e, p[e], !0), r(g, e, p[e], !0), f(g, e, p[e], !0), c(g, e, p[e], !0);
				u.append(g.children())
			}
		};
	window.DataBinding = e
}($), ! function (t) {
	var i = {};
	i.centerOffset = function (i, n, e) {
		e = "undefined" == typeof e ? 1 : Number(e);
		var s = window.innerHeight ? window.innerHeight : t(window).height(),
			a = window.innerWidth ? window.innerWidth : t(window).width(),
			o = (s / e - i.height()) / 2,
			r = (a / e - i.width()) / 2;
		return {
			top: Math.round(o),
			left: Math.round(r)
		}
	}, IBase.ModalBase = i
}($),
function () {
	var t = function () {
		this.tasks = {}
	};
	t.prototype.subscribe = function (t, i) {
		var n = new e(i);
		return "undefined" == typeof this.tasks[t] ? this.tasks[t] = [n] : this.tasks[t].push(n), n.id
	}, t.prototype.publish = function (t) {
		var i = Array.prototype.slice.call(arguments);
		if (i.shift(), "undefined" == typeof this.tasks[t]) return !1;
		for (var n = 0; n < this.tasks[t].length; n++) {
			var e = this.tasks[t][n];
			e.callback.apply(this, i)
		}
	}, t.prototype.unsubscribe = function (t, n) {
		"undefined" != typeof this.tasks[t] && ("function" == typeof n ? i(this.tasks[t], n, function (t, i) {
			return t.callback === i
		}) : "number" == typeof n ? i(this.tasks[t], n, function (t, i) {
			return t.id === i
		}) : delete this.tasks[t])
	};
	var i = function (t, i, n) {
			for (var e = 0; e < t.length; e++)
				if (n.call(this, t[e], i)) {
					t.splice(e, 1);
					break
				}
		},
		n = 0,
		e = function (t) {
			this.id = n++, this.callback = t
		};
	IBase.PubSub = t, window.pubsub = new IBase.PubSub
}(), ! function () {
	var t = function (t) {
			if (this.states = t.stateNodes, this.state = t.initialState, this.trans = i.createIndex(t.transitionEdges), this.tasks = {}, this.logger = new n(t.debug), !this.initValidate()) throw this.logger.info("nods in options is not existed in stateNodes"), "nods in options is not existed in stateNodes"
		},
		i = function (t, i) {
			this.from = t, this.to = i
		};
	i.createIndex = function (t) {
		for (var n = {}, e = 0; e < t.length; e++) {
			var s = t[e];
			n[s.name] = new i(s.from, s.to)
		}
		return n
	}, t.prototype.transition = function (t) {
		var i = Array.prototype.slice.call(arguments);
		i.shift();
		var n = this.trans[t];
		if ("undefined" == typeof n) throw this.logger.info("not exist transition: " + t), "not exist transition: " + t;
		return this.state === n.from ? (this.publish.apply(this, ["before:" + t].concat(i)), this.state = n.to, this.publish.apply(this, ["after:" + t].concat(i)), this.logger.info("state changed to:" + this.state), !0) : (this.logger.info("fail transition:" + t), this.logger.info("state is " + this.state + ", but expect " + n.from), !1)
	}, t.prototype.subscribe = function (t, i) {
		if (!this.isValidTaskName(t)) return this.logger.info("invalid task:" + t), !1;
		var n = new s(i);
		return "undefined" == typeof this.tasks[t] ? this.tasks[t] = [n] : this.tasks[t].push(n), n.id
	}, t.prototype.publish = function (t) {
		if (!this.isValidTaskName(t)) return this.logger.info("invalid task:" + t), !1;
		var i = Array.prototype.slice.call(arguments);
		if (i.shift(), "undefined" == typeof this.tasks[t]) return !1;
		for (var n = 0; n < this.tasks[t].length; n++) this.tasks[t][n].callback.apply(this, i)
	}, t.prototype.unsubscribeById = function (t) {
		for (var i = 0; i < Object.keys(this.tasks).length; i++) {
			for (var n, e = this.tasks[Object.keys(this.tasks)[i]], s = 0; s < e.length; s++) {
				var a = e[s];
				if (a.id === t) {
					n = s;
					break
				}
			}
			if ("number" == typeof n) {
				e.splice(n, 1);
				break
			}
		}
	}, t.prototype.initValidate = function () {
		if (!this.isValidState(this.state)) return this.logger.info("validate1"), !1;
		for (var t = !0, i = 0; i < Object.keys(this.trans).length; i++) {
			var n = this.trans[Object.keys(this.trans)[i]];
			if (!this.isValidState(n.from) || !this.isValidState(n.to)) {
				t = !1;
				break
			}
		}
		return this.logger.info("validate2" + t), t
	}, t.prototype.isValidState = function (t) {
		for (var i = !1, n = 0; n < this.states.length; n++)
			if (this.states[n] === t) {
				i = !0;
				break
			}
		return i || this.logger.info("invalid state: " + t), i
	}, t.prototype.isValidTaskName = function (t) {
		if (t.match(/^(before|after)\:(.+)$/))
			for (var i = Object.keys(this.trans), n = 0; n < i.length; n++)
				if (i[n] === RegExp.$2) return !0;
		return !1
	};
	var n = function (t) {
		this.isDebug = t
	};
	n.prototype.info = function (t) {
		this.isDebug && console.log(t)
	};
	var e = 0,
		s = function (t) {
			this.id = e++, this.callback = t
		};
	IBase.StateMachine = t
}(), ! function () {
	var t = "data-touch-blink-class",
		i = "[" + t + "]",
		n = function () {
			var t = $(i);
			t.on("touchstart mousedown", this.onTouchStart), t.on("touchend mouseup mouseleave", this.onTouchEnd)
		};
	n.prototype.onTouchStart = function (t) {
		e($(t.target), function (t, i) {
			t.addClass(i)
		})
	}, n.prototype.onTouchEnd = function (t) {
		e($(t.target), function (t, i) {
			t.removeClass(i)
		})
	};
	var e = function (n, e) {
		var s = "string" == typeof n.attr(t) ? n : n.closest(i),
			a = s.attr(t);
		"string" == typeof a && e.call(this, s, a)
	};
	IBase.TouchBlinker = n
}(), ! function () {
	var t = {};
	t.isAndroid = function () {
		return !!(navigator.userAgent.indexOf("Android") > 0)
	}, t.isAndroidVer2 = function () {
		return t._isAndroidVer2(navigator.userAgent)
	}, t.isLegacyAndroid = function () {
		return t._isLegacyAndroid(navigator.userAgent)
	}, t.isLittleLegacyAndroid = function () {
		return t._isLittleLegacyAndroid(navigator.userAgent)
	}, t.isAndroid4 = function () {
		return t._isAndroid4(navigator.userAgent)
	}, t._isAndroidVer2 = function (t) {
		return !!t.match(/Android\s?2/)
	}, t._isLegacyAndroid = function (t) {
		return !!t.match(/Android\s?(2|3|4\.0)/)
	}, t._isLittleLegacyAndroid = function (t) {
		return !!t.match(/Android\s?(4\.[12])/)
	}, t._isAndroid4 = function (t) {
		return !!t.match(/Android\s?4/)
	}, IBase.Util = t
}(), this.JST = {};
