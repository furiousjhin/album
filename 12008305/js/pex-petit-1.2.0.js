"Pex: https://github.com/PexJS/PexJS";
"version: 72e33c9(sjis)";
(function() {
    "use strict";
    var a = "1.2.0";
    var b = function(a) {
        console.log.apply(console, Array.prototype.slice.apply(arguments))
    };
    var c = function(a) {
        console.error.apply(console, Array.prototype.slice.apply(arguments));
        throw a
    };
    var d = function() {
        console.warn.apply(console, Array.prototype.slice.apply(arguments))
    };
    var e = function(a) {
        if (a.constructor == Array) {
            return [].concat(a)
        }
        var b = {};
        for (var c in a) {
            b[c] = a[c]
        }
        return b
    };
    var f = {
        shapeDetail: null,
        partialDraw: false,
        delayEval: true,
        fixRatio: true,
        width: null,
        height: null,
        transparent: false,
        fps: null,
        frameCallback: {},
        disableFrameSkip: false,
        cacheColoredImage: true,
        stopOnStart: false,
        enableButton: false,
        enableTouch: false,
        debug: false,
        suppressLog: {},
        origin: null,
        frameRect: null,
        compileAction: true,
        operation: {},
        cacheMaxShapeSize: null,
        cacheMaxTotalSize: null,
        onerror: null,
        enableStyleText: false,
        _enableWorkaroundForUnicolor: false,
        colorLevels: 16,
        swfBinary: null,
        forceDisableBlendMode: false
    };
    var g = {};
    g.Ub = 0;
    g._b = 1;
    g.Nb = 2;
    g.Xb = 4;
    g.Cb = 6;
    g.Hb = 7;
    g.Wb = 8;
    g.$b = 9;
    g.Kb = 10;
    g.Rb = 11;
    g.Tb = 12;
    g.Fb = 20;
    g.Db = 21;
    g.Ob = 22;
    g.Yb = 26;
    g.Zb = 28;
    g.Pb = 32;
    g.Sb = 33;
    g.Ib = 34;
    g.Eb = 35;
    g.Gb = 36;
    g.Jb = 37;
    g.Qb = 39;
    g.Vb = 43;
    g.Mb = 46;
    g.Lb = 48;
    var h = {};
    h.Ab = 0;
    h.tb = 1;
    h.Bb = 2;
    var i = {};
    i.zb = 0;
    i.ub = 16;
    i.xb = 18;
    i.yb = 64;
    i.sb = 65;
    i.wb = 66;
    i.vb = 67;
    var j = {};
    j.S = 4;
    j.X = 5;
    j.V = 6;
    j.fb = 7;
    j.ob = 8;
    j.gb = 9;
    j.W = 23;
    j.o = 10;
    j.mb = 11;
    j.R = 12;
    j.w = 13;
    j.A = 14;
    j.M = 15;
    j.q = 16;
    j.U = 17;
    j.T = 18;
    j.ib = 19;
    j.kb = 20;
    j.jb = 21;
    j.nb = 24;
    j.G = 28;
    j.db = 29;
    j.cb = 32;
    j.hb = 33;
    j.C = 34;
    j.ab = 35;
    j.v = 36;
    j._ = 37;
    j.pb = 38;
    j.eb = 39;
    j.z = 40;
    j.lb = 41;
    j.B = 45;
    j.$ = 48;
    j.Q = 49;
    j.u = 50;
    j.r = 51;
    j.D = 52;
    j.P = 53;
    j.O = 54;
    j.N = 55;
    j.Z = 76;
    j.I = 129;
    j.E = 131;
    j.qb = 138;
    j.bb = 139;
    j.H = 140;
    j.Y = 150;
    j.L = 153;
    j.K = 157;
    j.s = 158;
    j.J = 159;
    j.rb = 141;
    j.F = 154;
    var k = function Jc(a) {
        var b = a.charCodeAt(0);
        Jc.Ch = Jc.Ch || new RegExp("[\uff61\uff62\uff63\uff64\uff65\uff66\uff67\uff68\uff69\uff6a\uff6b\uff6c\uff6d\uff6e\uff6f\uff70\uff71\uff72\uff73\uff74\uff75\uff76\uff77\uff78\uff79\uff7a\uff7b\uff7c\uff7d\uff7e\uff7f\uff80\uff81\uff82\uff83\uff84\uff85\uff86\uff87\uff88\uff89\uff8a\uff8b\uff8c\uff8d\uff8e\uff8f\uff90\uff91\uff92\uff93\uff94\uff95\uff96\uff97\uff98\uff99\uff9a\uff9b\uff9c\uff9d\uff9e\uff9f]");
        return 32 <= b && b <= 126 || Jc.Ch.test(a)
    };
    var l = function(a, b, c) {
        return [a[0] * b + a[2] * c + a[4] * 20, a[1] * b + a[3] * c + a[5] * 20]
    };
    var m = function(b, d, e) {
        if (a.indexOf(b.JSON_VERSION) != 0 && a.indexOf(b.JSON_VERSION) != 1) {
            c("src object is not compatible with this Pex version. Please regenerate new one using parse_swf.")
        }
        if (!d) {
            d = {}
        }
        var f = {
            Af: b.Af,
            Ii: [],
            Pd: true,
            loadingImageCount: 0
        };
        var g = b.Ii;
        for (var h = 0, i = g.length; h < i; h++) {
            var j = g[h];
            if (j.hasOwnProperty("img")) {
                var k = d[j.img] || document.createElement("img");
                if (!k.src) {
                    k.onload = function() {
                        if (--f.loadingImageCount === 0) {
                            e && e()
                        }
                    };
                    k.src = j.img;
                    ++f.loadingImageCount
                }
                j.img = k
            }
            f.Ii.push(j)
        }
        if (f.loadingImageCount === 0) {
            e && e()
        }
        return f
    };
    var n = function() {
        this.data = {};
        this.Je = [];
        this.debug = false;
        this.suppressFPS = false;
        this.af = 0;
        this.rg = 0;
        var a = this;
        (function c() {
            setTimeout(c, 1e3 / 60);
            var d = Date.now();
            var e = false;
            for (var f = 0; f < a.Je.length; f++) {
                e = a.Je[f].Qi(d) || e
            }
            e && a.af++;
            var g = a.rg = a.rg || d;
            if (d - g > 1e3) {
                a.debug && !a.suppressFPS && b("fps:" + a.af * 1e3 / (d - g));
                a.af = 0;
                a.rg = d
            }
        })()
    };
    n.rf = function() {
        var a = n;
        if (a.bc) {
            return a.bc
        }
        return a.bc = new a
    };
    n.prototype.Eg = function(a, b, d) {
        var e;
        if (typeof a == "string") {
            var f = d && d.name || a;
            e = this.data[f];
            if (!e) {
                if (typeof f == "string") {
                    if (d && d.ig) {
                        c("unimplemented json reader")
                    } else {
                        var g = new Hb(d);
                        var h = new p(g, b, d);
                        g.Eg(a, function(a) {
                            return function() {
                                a.me.apply(a, arguments)
                            }
                        }(h));
                        if (!d || !d.solo) {
                            this.data[f] = g
                        }
                        this.Je.push(h);
                        return h
                    }
                }
            } else {
                var h = new p(e, b, d);
                e.Ic(function(a) {
                    return function() {
                        a.me.apply(a, arguments)
                    }
                }(h));
                this.Je.push(h);
                return h
            }
            return null
        }
        if (typeof a == "object") {
            var f = d && d.name || a;
            if (typeof f.c_name != 'undefined') {
                var fn = f.c_name
            } else {
                var fn = f.Af.Me
            }
            e = this.data[fn];
            if (!e) {
                var g = m(a, d && d.Kf);
                var h = new p(g, b, d);
                h.me();
                if (!d || !d.solo) {
                    this.data[fn] = g
                }
                this.Je.push(h);
                return h
            } else {
                var h = new p(e, b, d);
                h.me();
                this.Je.push(h);
                return h
            }
        }
        return null
    };
    n.prototype.Gj = function(a) {
        var b = this.Je;
        var c = b.length;
        for (var d = 0; d < c; d++) {
            if (b[d] == a) {
                b.splice(d, 1);
                return true
            }
        }
        return false
    };
    var o = function(a, c, d) {
        o.Te = o.Te || Date.now();
        d = d || {};
        var e = n.rf();
        e.debug = e.debug || d.debug;
        for (var g in f) {
            g in d || (d[g] = f[g])
        }
        for (var g in d) {
            if (!g in f) {
                d.debug && b("unknown option: " + g)
            }
        }
        e.suppressFPS |= d.suppressLog.fps;
        return e.Eg(a, c, d)
    };
    window.Pex = o;
    var p = function(a, b, c) {
        this.le = a;
        this.Qd = typeof b == "string" ? document.getElementById(b) : b;
        this.ch = q(c);
        this.canvas = null;
        if (c.partialDraw) {
            this.Ih = new eb(this)
        } else {
            this.Ih = new db(this)
        }
        this.onCreateMC = [];
        this.newMcList = [];
        this.kj = new y(this);
        this.ue = {
            name: ""
        };
        this.Qg = {};
        this.$c = null;
        this.Ri = [];
        this.ag = false;
        this.Sc = null;
        this.jd = [];
        this.Ui = new K(this);
        var d = this;
        this.readyCallbacks = [];
        this.Fj = function() {
            var a = d.readyCallbacks;
            var b = a.length;
            for (var c = 0; c < b; c++) {
                a[c]()
            }
            d.Fj = null
        };
        this.noskip = false;
        this.frameSkipRatio = 0;
        this.logicalRenderCount = 0;
        this.Sf()
    };
    p.prototype.Sf = function() {
        var a = this.ch;
        var b = this.le;
        var c = new x;
        this.Rc = new r(this, c, b.Ii);
        this.Qh = new t(this, c, null, null);
        this.Ri.push(this.Qh);
        var d = b.Af;
        this.Qh.yh["uc"] = d.df;
        this.mf = a.fps || d.mf;
        d.nf && this.Ih._h(d.nf);
        this.df = 0;
        this.renderCount = 0;
        this.Vh = !a.stopOnStart;
        X(a.forceDisableBlendMode, a.debug)
    };
    p.prototype.me = function() {
        var a = this.le;
        if (a.Pd) {
            this.ch.debug && b("parse completed: " + (Date.now() - o.Te));
            this.Fg = true
        }
        var c = a.Af;
        if (this.Qh) {
            this.Qh.yh["uc"] = c.df
        }
        this.mf = this.ch.fps || c.mf;
        this.Rc.Nc(this.ue);
        c.nf && this.Ih._h(c.nf);
        this.Ih.Ej && this.Ih.Ej()
    };
    p.prototype.Qi = function(a) {
        var c = this.df;
        var d;
        if (!this.stopFrame) {
            if (this.yi) {
                d = this.mf * (a - this.yi) / 1e3 | 0;
                if (this.frameSkipRatio) {
                    var e = d * (1 - this.frameSkipRatio) | 0;
                    if (e <= this.logicalRenderCount) {
                        return
                    }
                    this.logicalRenderCount = e
                }
            } else {
                this.yi = a;
                d = 1
            }
        } else {
            d = Number.MAX_VALUE
        }
        if (c == d || this.le.loadingImageCount > 0) {
            return
        }
        this.Fj && this.Fg && this.Fj();
        if (!this.stopFrame) {
            if (!this.Vh) {
                return
            }
            if (c <= 1 || this.ch.disableFrameSkip && d - c > 1 || d - c > 30) {
                d = c + 1;
                this.yi = a - c / this.mf * 1e3
            }
        }
        var f = false;
        var g = false;
        var h = [];
        while (c < d) {
            c++;
            var i;
            if (!this.kj.Vh) {
                if (this.ag) {
                    i = this.Si
                } else {
                    i = this.Ri.length - 1
                }
                for (var j = i; j >= 0; j--) {
                    var k = this.Ri[j];
                    if (k.dg) {
                        var l = 1;
                        if (k.yh.dc < k.yh["uc"]) {
                            l = k.yh.dc + 1
                        }
                        if (!this.gotoFrame(k, l)) {
                            this.ch.debug && b("gotoFrame: try to go to non-loading frame at mclist");
                            this.ag = true;
                            this.Si = j;
                            return false
                        }
                    }
                    if (k.onEnterFrames.length) {
                        h.push(k)
                    }
                }
                var m = h.length;
                for (var j = 0; j < m; j++) {
                    var k = h[j];
                    var n = k.Cc || "/";
                    var o = k.yh.dc;
                    var p = k.onEnterFrames;
                    var q = p.length;
                    for (var r = 0; r < q; r++) {
                        p[r](this.Sc, n, o)
                    }
                }
                h = []
            }
            if (!this.kj.Uh()) {
                this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM");
                return false
            }
            if (this.ch.enableButton && this.Bj()) {
                if (!this.kj.Uh()) {
                    this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM");
                    return false
                }
            }
            if (this.onCreateMC.length) {
                var s = this.onCreateMC;
                var t = s.length;
                var u = this.newMcList;
                var m = u.length;
                for (var j = 0; j < m; j++) {
                    var n = u[j].Cc || "/";
                    for (var r = 0; r < t; r++) {
                        s[r](this.Sc, n)
                    }
                }
            }
            this.newMcList = [];
            this.ag = false;
            g = true;
            if (this.noskip) {
                this.ch.debug && b("noskip frame and force rendering");
                this.Ih.Hh();
                f = true;
                this.noskip = false
            }
            if (this.stopFrame) {
                var v = this.Qh.yh["dc"];
                var w = this.stopFrame % this.Qh.yh["uc"];
                if (w == 0) {
                    w = this.Qh.yh["uc"]
                }
                if (v == w) {
                    this.lastStopFrame = this.stopFrame;
                    this.stopFrame = 0;
                    break
                }
            }
        }
        this.df = c;
        if (!f) {
            this.Ih.Hh()
        }
        g && this.renderCount++;
        return true
    };
    p.prototype.Bj = function() {
        var a = false;
        var b = this.jd;
        for (var c = b.length - 1; c >= 0; c--) {
            var d = b[c];
            var e = d.Pg;
            if (d.Yf) {
                continue
            }
            var f = false;
            for (var g in e.fd) {
                if (this.Ui._f(g) && d.Zf(true)) {
                    this.kj.Hc(d.nh, e.fd[g]);
                    f = true;
                    break
                } else if (g == "sh" && this.Ui.Vg) {
                    if (d.$f(this.Ui.Vg.x, this.Ui.Vg.y)) {
                        this.kj.Hc(d.nh, e.fd[g]);
                        f = true;
                        break
                    }
                } else if (g == "Dh" && this.Ui.Wg) {
                    if (d.$f(this.Ui.Wg.x, this.Ui.Wg.y)) {
                        this.kj.Hc(d.nh, e.fd[g]);
                        f = true;
                        break
                    }
                }
            }
            if (f) {
                a = true;
                break
            }
        }
        this.Ui.Cd();
        this.Ui.Dd();
        return a
    };
    p.prototype.gotoFrame = function(a, b, c) {
        b = +b;
        var d = a.yh["dc"];
        b = b < 1 ? 1 : b;
        var e = true;
        if (b > a.yh["uc"]) {
            b = a.yh["uc"];
            e = false
        }
        if (a.Yf || b === d) {
            return true
        }
        if (b > a.yh["gc"]) {
            return false
        }
        var f = false;
        if (b == d + 1) {
            f = true
        }
        var g = a.Pg;
        a.yh["dc"] = b;
        var h = g.bf[b];
        if (e && h) {
            var i = h.length;
            for (var j = 0; j < i; j++) {
                this.kj.Hc(a, h[j])
            }
        }
        if (f) {
            var k = g.ef[b];
            var i = k.length;
            for (var j = 0; j < i; j++) {
                a.Fh(k[j])
            }
            var l = g.cf[b];
            var m = l.length;
            for (var j = 0; j < m; j++) {
                a.ae(b, l[j])
            }
            var n = g.gf[b];
            var o = false;
            for (var j in n) {
                if (n[j]) {
                    o = true;
                    var p = a.zd[j];
                    var q = g.hf[b][j].Mg;
                    if (p && !p.ag && q) {
                        p.ai(q)
                    }
                }
            }
            if (o) {
                a.og = this.df
            }
        } else {
            var r = g.ff[d];
            var s = r.length;
            var t = g.ff[b];
            var u = t.length;
            var j = 0,
                v = 0;
            var l = [];
            var w = [];
            while (j < u && v < s) {
                var x = t[j];
                var y = r[v];
                if (x === y) {
                    w[w.length] = x;
                    j++;
                    v++
                } else if (x < y) {
                    l[l.length] = x;
                    j++
                } else {
                    a.Fh(y);
                    v++
                }
            }
            if (j != u) {
                while (j < u) {
                    l.push(t[j++])
                }
            } else if (v != s) {
                while (v < s) {
                    a.Fh(r[v++])
                }
            }
            var i = l.length;
            for (var j = 0; j < i; j++) {
                var z = l[j];
                a.ae(b, z, g.Df[z].bd != b)
            }
            a.og = this.df;
            i = w.length;
            for (var j = 0; j < i; j++) {
                var z = w[j];
                var p = a.zd[z];
                var q = g.hf[b][z].Mg;
                if (p && !p.ag && q) {
                    p.ai(q)
                }
            }
        }
        var A = this.ch.frameCallback;
        var B = A[a.yh.jc];
        if (!B) {
            B = A[a.Cc === "" ? "/" : a.Cc]
        }
        if (B) {
            var C = g.jf;
            for (var D in C) {
                if (b == C[D] && B[D]) {
                    B[D](this)
                }
            }
            var E = B[b] || b == a.yh["uc"] && B["last"];
            E && E(this)
        }
        if (g.noskipFrameList[b]) {
            this.noskip = true
        }
        return true
    };
    p.prototype.getAPI = function() {
        return this.Sc || (this.Sc = new I(this))
    };
    p.prototype.getFPS = function() {
        return this.mf
    };
    p.prototype.setFPS = function(a) {
        this.yi && (this.yi = Date.now() - this.df / a * 1e3);
        this.mf = this.ch.fps = a
    };
    p.prototype.getFrameSkipRatio = function() {
        return this.frameSkipRatio
    };
    p.prototype.setFrameSkipRatio = function(a) {
        this.logicalRenderCount = this.mf * (Date.now() - this.yi) * (1 - a) / 1e3 | 0;
        this.frameSkipRatio = a;
        return true
    };
    var q = function(a) {
        var b = function(a, c) {
            for (var d in a) {
                var e = a[d];
                if (e instanceof HTMLElement || e instanceof Function) {
                    c[d] = e
                } else if (e instanceof Array) {
                    c[d] = [];
                    b(e, c[d])
                } else if (e instanceof Object) {
                    c[d] = {};
                    b(e, c[d])
                } else {
                    c[d] = e
                }
            }
        };
        var c = {};
        b(a, c);
        return c
    };
    var r = function(a, b, c, d, e) {
        this.Ie = a;
        this.Pg = b;
        this.Ii = c;
        this.hd = d;
        this.gd = e;
        this.Qc = 0;
        this.af = 1;
        this.Cf = 0;
        this.Ef = [];
        this.cd = [];
        this.ne = [];
        this.Gf = {};
        this.Ff = {};
        this.ug = {}
    };
    r.prototype.Nc = function(a) {
        if (this.Ii) {
            this.Pc(a)
        } else {
            this.Oc(a)
        }
    };
    r.prototype.Pc = function(a) {
        var b = this.Ie;
        var c = this.Pg;
        var e = this.Ii;
        var f = e.length;
        a: for (var h = this.Qc; h < f; h++) {
            var i = e[h];
            switch (i.aj) {
                case g.Ub:
                    c.wj = this.af - 1;
                    break a;
                case g.$b:
                    !b.ch.transparent && (b.$c || (b.$c = i.Kd));
                    break;
                case g.Vb:
                    c.jf[i.name] = this.af;
                    if (i.name.toLowerCase() === "_noskip") {
                        c.noskipFrameList[this.af] = true
                    }
                    break;
                case g._b:
                    var j = this.af;
                    c.ff[j] = [].concat(this.Ef);
                    c.cf[j] = this.cd;
                    c.ef[j] = this.ne;
                    c.gf[j] = this.Ff;
                    this.cd = [];
                    this.ne = [];
                    this.Ff = {};
                    var k = {};
                    for (var l in this.Gf) {
                        k[l] = this.Gf[l]
                    }
                    c.hf[j] = k;
                    this.af++;
                    break;
                case g.Yb:
                    var m = i.wd;
                    var n = i.re;
                    var o = this.ug[i.re];
                    var p = m || this.Gf[o].wd;
                    var q = a[p];
                    if (q.aj == g.Mb || p >= 65536 && p <= 4294967295) {
                        if (p >= 65536) {
                            q = a[q.dh]
                        }
                        var r = {};
                        var t = this.Gf[o];
                        for (var l in i) {
                            r[l] = i[l] || t && t[l]
                        }
                        r.wd = s(b, q, i.Ah, a);
                        i = r;
                        m = r.wd
                    }
                    if (i.Xg && !m) {
                        var u = this.Gf[o];
                        var v = {};
                        for (var l in i) {
                            v[l] = i[l]
                        }
                        for (var l in u) {
                            if (i[l] == null && u[l] != null) {
                                v[l] = u[l]
                            }
                        }
                        this.Gf[o] = v;
                        this.Ff[o] = true
                    } else {
                        if (i.Xg) {
                            var u = this.Gf[o];
                            var v = {};
                            for (var l in i) {
                                v[l] = i[l]
                            }
                            for (var l in u) {
                                if (i[l] == null && u[l] != null) {
                                    v[l] = u[l]
                                }
                            }
                            i = v;
                            this.Ef.splice(this.Ef.indexOf(o), 1);
                            this.ne.push(o)
                        }
                        var w = ++this.Cf;
                        this.Ef.push(w);
                        this.Gf[w] = i;
                        this.cd.push(w);
                        var x = {};
                        x.id = w;
                        x.wd = i.wd;
                        x.tg = i.re;
                        x.bd = this.af;
                        x.rh = i;
                        x.Dj = {};
                        c.Df[w] = x;
                        this.ug[i.re] = w
                    }
                    break;
                case g.Zb:
                    var o = this.ug[i.re];
                    this.Ef.splice(this.Ef.indexOf(o), 1);
                    this.ne.push(o);
                    delete this.Gf[o];
                    delete this.ug[i.re];
                    break;
                case g.Tb:
                    var y = (b.ch.compileAction ? z : A)(i.Gc, b.ch.debug);
                    (c.bf[this.af] || (c.bf[this.af] = [])).push(y);
                    break;
                case g.Wb:
                    break;
                case g.Cb:
                case g.Db:
                case g.Eb:
                case g.Fb:
                case g.Gb:
                case g.Nb:
                case g.Ob:
                case g.Pb:
                case g.Hb:
                case g.Ib:
                case g.Kb:
                case g.Lb:
                case g.Rb:
                case g.Sb:
                case g.Jb:
                case g.Mb:
                case g.Qb:
                    a[i.id] = i;
                    break;
                default:
                    d("Analyzer: unknown tag detected [" + i.aj + "]");
                    break
            }
        }
        this.Qc = f;
        c.of = this.af - 1;
        c.Cf = this.Cf;
        c.bj()
    };
    r.prototype.Oc = function(a) {
        var b = this.Ie;
        var c = this.Pg;
        var d = this.hd;
        var e = this.gd;
        var f = [null, [],
            [],
            [],
            []
        ];
        var h = [null, [],
            [],
            [],
            []
        ];
        var i = [null, [],
            [],
            [],
            []
        ];
        var j = [null, {}, {}, {}, {}];
        var k = d.length;
        for (var l = 0; l < k; l++) {
            var m = d[l];
            var n = m.wd;
            var o = a[n];
            var p = ++this.Cf;
            var q = null;
            var r = {
                aj: g.Yb,
                Xg: 0,
                re: m.re,
                wd: n,
                Mg: m.Mg,
                ie: m.Ld,
                name: null,
                Ed: null
            };
            if (m.Ei) {
                f[1].push(p);
                j[1][p] = r;
                h[1].push(p);
                if (!m.Di) {
                    i[2].push(p)
                }
                if (!q) q = 1
            }
            if (m.Di) {
                f[2].push(p);
                j[2][p] = r;
                if (!m.Ei) {
                    h[2].push(p)
                }
                if (!m.Bi) {
                    i[3].push(p)
                }
                if (!q) q = 2
            }
            if (m.Bi) {
                f[3].push(p);
                j[3][p] = r;
                if (!m.Di) {
                    h[3].push(p)
                }
                if (!m.Ci) {
                    i[4].push(p)
                }
                if (!q) q = 3
            }
            if (m.Ci) {
                var s = m.Di;
                for (var t = 1; t <= 3; t++) {
                    f[t].push(p);
                    j[t][p] = r;
                    if (!s) {
                        h[t].push(p)
                    }
                }
                if (!q) q = 4
            }
            var u = {};
            u.id = p;
            u.wd = n;
            u.tg = m.re + (q == 4 ? 65536 : 0);
            u.bd = q;
            u.rh = r;
            u.Dj = {};
            c.Df[p] = u
        }
        for (var l in e) {
            var v = e[l];
            if (v.lg) {
                c.fd[v.lg] = z(v.Gc)
            }
            if (v.mh) {
                c.fd["sh"] = z(v.Gc)
            } else if (v.kh) {
                c.fd["Dh"] = z(v.Gc)
            }
        }
        c.ff = f;
        c.cf = h;
        c.ef = i;
        c.hf = j;
        c.gf = [{}, {}, {}, {}];
        c.jf = {
            ac: 1,
            j: 2,
            d: 3,
            g: 4
        };
        c.bf = {};
        c.of = 3;
        c.Cf = this.Cf;
        c.bj();
        this.Qc = k
    };
    var s = function(a, b, d, e) {
        d = d || 0;
        var f = b.id * 65536 + d;
        var i = e[f];
        if (i) {
            return f
        }
        i = {
            id: f,
            dh: b.id,
            aj: g.Nb
        };
        var j = d / 65536;
        var k = 1 - j;
        var l = [];
        for (var m = 0; m < 4; m++) {
            l.push(b.ti[m] * k + b.Ce[m] * j)
        }
        i.dd = l;
        var n = [];
        var o = b.Qe.length;
        for (var m = 0; m < o; m++) {
            var p = b.Qe[m];
            var q = {
                zf: {}
            };
            q.aj = p.aj;
            if (p.aj == 0) {
                q.Kd = p.start * k + p.end * j
            } else if (p.aj == 16 || p.aj == 18) {
                var r = [];
                for (var s = 0; s < 6; s++) {
                    r[s] = p.start[s] * k + p.end[s] * j
                }
                q.Mg = r;
                var t = [];
                var u = p.zf.Bh.length;
                for (var s = 0; s < u; s++) {
                    var v = p.zf.Bh[s];
                    t[s] = {
                        Ah: v.xi * k + v.Ge * j,
                        Kd: v.ui * k + v.De * j
                    }
                }
                q.zf.Bh = t
            } else {
                c("createVirtualShapeFromMorph: unsupported morphing param:", p.aj)
            }
            n.push(q)
        }
        i.Qe = n;
        var w = [];
        var o = b.Bg.length;
        for (var m = 0; m < o; m++) {
            var x = b.Bg[m];
            var y = {
                width: x.zi * k + x.He * j,
                Kd: x.ui * k + x.De * j
            };
            w.push(y)
        }
        i.Bg = w;
        if (b.vi.length > b.Ee.length) {
            c("createVirtualShapeFromMorph: difference detected at startEdges and endEdges")
        }
        var z = b.vi.length;
        var A = [];
        for (var m = 0; m < z; m++) {
            var B = b.vi[m];
            var C = b.Ee[m];
            var D = {};
            if (B.aj == h.tb && C.aj == h.Ab) {
                C.aj = h.tb;
                C.Wc = C.he = C.x / 2;
                C.Xc = C.ke = C.y / 2
            } else if (B.aj == h.Ab && C.aj == h.tb) {
                B.aj = h.tb;
                B.Wc = B.he = B.x / 2;
                B.Xc = B.ke = B.y / 2
            }
            D.aj = B.aj;
            if (B.aj == h.Bb) {
                D.Ag = B.Ag;
                D.Oe = B.Oe;
                D.Pe = B.Pe;
                D.Ae = B.Ae * k + C.Ae * j;
                D.Be = B.Be * k + C.Be * j;
                D.Bg = B.Bg;
                D.Qe = B.Qe
            } else if (B.aj == h.Ab) {
                D.x = B.x * k + C.x * j;
                D.y = B.y * k + C.y * j
            } else if (B.aj == h.tb) {
                D.he = B.he * k + C.he * j;
                D.ke = B.ke * k + C.ke * j;
                D.Wc = B.Wc * k + C.Wc * j;
                D.Xc = B.Xc * k + C.Xc * j
            } else {
                c("createVirtualShapeFromMorph: unknown edge type:", B.aj)
            }
            A.push(D)
        }
        i.hi = A;
        e[f] = i;
        return f
    };
    var t = function(a, b, c, d, e) {
        this.Ie = a;
        this.Pg = b;
        b.bh = function(a) {
            return function() {
                a.Rg.apply(a, arguments)
            }
        }(this);
        this.we = {};
        this.displayListCount = {};
        this.yh = {
            yc: 0,
            Ac: 0,
            dc: 0,
            uc: b.of,
            cc: 100,
            wc: 1,
            xc: 0,
            hc: 0,
            tc: null,
            gc: b.of,
            jc: null,
            ec: null,
            vc: null,
            ic: 1,
            fc: 0,
            zc: 100,
            Bc: 100,
            nc: 0,
            oc: 90,
            rc: 1,
            sc: 1,
            kc: 0,
            lc: 0
        };
        this.hj = {};
        this.ag = false;
        this.dg = true;
        this.Xf = false;
        this.Vf = false;
        this.Yf = false;
        this.nh = c;
        this.children = [];
        this.Ad = {};
        this.zd = {};
        this.Tf = 0;
        this.og = 0;
        this.Bd = {
            yd: -1,
            Ug: true
        };
        this.Pf(d);
        this.Cc = c ? c.Cc + "/" + this.yh.jc : "";
        this.id = null;
        this.onEnterFrames = [];
        if (e) {
            this.Ke = true
        } else {
            this.Ie.newMcList.push(this)
        }
        this.ue = c && c.ue || a.ue;
        this.Qg = c && c.Qg || a.Qg
    };
    t.prototype.Rg = function() {
        this.yh["gc"] = this.Pg.of;
        if (this.Pg.wj) this.yh["uc"] = this.Pg.wj
    };
    t.prototype.Pf = function(a) {
        var b = this.nh;
        if (a) {
            if (a.name) {
                this.yh.jc = a.name
            } else {
                if (b) {
                    this.yh.jc = "instance" + ++b.Tf
                } else {
                    this.yh.jc = "instance1"
                }
            }
            this.ai(a.Mg)
        }
        if (b) {
            b.children.push(this);
            var c = this.yh.jc;
            b.Ad[c] && b.Ad[c].push(this) || (b.Ad[c] = [this])
        }
    };
    var u = function(a, b, c, d, e, f, h, i) {
        var j = {};
        c *= 20;
        d *= 20;
        var k = h ? c * h : 0;
        var l = i ? d * i : 0;
        var m = w(a);
        a[m] = {
            aj: g.Db,
            id: m,
            img: b
        };
        m++;
        j.shapeId = m;
        a[j.shapeId] = {
            aj: g.Nb,
            id: j.shapeId,
            dd: [-k, c - k, -l, d - l],
            Qe: [{
                aj: 65,
                _c: j.shapeId - 1,
                Mg: [20, 0, 0, 20, -k / 20, -l / 20]
            }],
            Bg: [],
            hi: [{
                aj: 2,
                Ae: c - k,
                Be: d - l,
                Pe: 1
            }, {
                aj: 0,
                x: -c,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: -d
            }, {
                aj: 0,
                x: c,
                y: 0
            }, {
                aj: 0,
                x: 0,
                y: d
            }]
        };
        m++;
        j.containerId = m;
        a[j.containerId] = {
            aj: g.Qb,
            id: j.containerId,
            df: 1,
            Ji: [{
                aj: g.Yb,
                wd: j.shapeId,
                re: 1,
                Xg: 0,
                Mg: [e, 0, 0, f, 0, 0]
            }, {
                aj: g._b
            }, {
                aj: g.Ub
            }]
        };
        j.rh = {
            aj: g.Yb,
            wd: j.containerId,
            re: 1,
            Mg: [1, 0, 0, 1, 0, 0],
            Xg: 0
        };
        return j
    };
    t.prototype.replaceMovieClip = function(a, b, c, e, f, g) {
        var h = a.width;
        var i = a.height;
        if (!h || !i) {
            d("[MovieClip#replaceMovieClip] Unable to replace because image might not be loaded.");
            return false
        }
        var j = b ? b / h : 1;
        var k = c ? c / i : 1;
        if (e) {
            k = j = Math.min(j, k)
        }
        this._resetDisplayList();
        this.dg = false;
        var l = u(this.ue, a, h, i, j, k, f, g);
        var m = this.nh.Pg;
        m.Cf++;
        var n = m.Cf;
        var o = {};
        var p = this.yh.dc;
        o.id = n;
        o.wd = l.containerId;
        o.tg = 1;
        o.bd = p;
        o.rh = l.rh;
        o.Dj = {};
        this.Pg.Df[n] = o;
        for (var q = 1; q <= this.yh.uc; q++) {
            this.Pg.hf[q][n] = l.rh
        }
        this.ae(this.af, n);
        return true
    };
    t.prototype.Gd = function(a, b) {
        var c = this.nh;
        var d = c.Pg;
        var e = c.Pg.Df[this.id];
        var f = e.id;
        d.Cf++;
        var g = d.Cf;
        var h = G(e.rh);
        h.name = a;
        var i = G(e);
        i.rh = h;
        i.id = g;
        i.tg = b;
        c.Pg.Df[g] = i;
        c.ae(null, g);
        var j = c.zd[g];
        var k = j.yh;
        var l = k.jc;
        k = G(this.yh);
        k.jc = l;
        k.dc = 1;
        j.Xf = true;
        j.og = this.Ie.df;
        var m = d.hf;
        var n = m.length;
        var o = 0;
        var p = 0;
        for (var q = 1; q < n; q++) {
            if (m[q] && m[q][f]) {
                if (o == 0) {
                    o = q
                }
                p = q - o + 1;
                m[p][g] = G(m[q][f]);
                m[p][g].name = a
            } else if (o > 0) {
                p = q - o + 1;
                var r = q - o;
                while (p < n) {
                    m[p][g] = m[p - r][g];
                    p++
                }
                break
            }
        }
        return j
    };
    t.prototype.ae = function(a, c, d) {
        var e = this.ue;
        var f = this.Ie.ch;
        var h = this.Pg.Df[c];
        var i = h.wd;
        var j = e[i];
        var k = h.tg;
        this.og = this.Ie.df;
        if (this.we[k]) {
            var l = this.displayListCount[k] || 0;
            ++l;
            k = k + "." + ("000" + l).slice(-4);
            h.tg = k;
            this.displayListCount[k] = l
        }
        this.we[k] = h;
        var m = false;
        switch (j.aj) {
            case g.Hb:
            case g.Ib:
                m = true;
            case g.Qb:
                var n = h.rh;
                var o = this.Ie;
                var p = this.Qg;
                var q = p[i];
                if (!q) {
                    q = new x;
                    var s = new r(o, q, j.Ji, j.xd, j.Gc);
                    s.Nc(e);
                    p[i] = q
                }
                var u = new t(o, q, this, n);
                h.Dj[c] = u;
                if (m) {
                    u.dg = false;
                    u.Vf = true;
                    this.Ie.jd.push(u)
                }
                o.Ri.push(u);
                var v = o.gotoFrame(u, 1, false);
                u.id = c;
                this.zd[c] = u;
                if (f.replace && n.name) {
                    var w = f.replace;
                    var y = w.length;
                    for (var z = 0; z < y; z++) {
                        var A = w[z];
                        if (n.name == A.name) {
                            u.replaceMovieClip(A.img, A.width, A.height, A.keepAspect, A.xratio, A.yratio)
                        }
                    }
                }
                break;
            case g.Jb:
                var B = e[j.id];
                var C = D(this, B.gj);
                var E = C[0];
                var F = C[1];
                if (E) {
                    if (typeof E.hj[F] == "undefined") {
                        if (F) {
                            E.hj[F] = B.Rf
                        }
                    } else {
                        B.Rf = E.hj[F] + ""
                    }
                } else {
                    this.Ie.ch.debug && b("[DefineEditText:variableName] unable to access: " + B.gj)
                }
                break
        }
    };
    t.prototype.Fh = function(a) {
        var b = this.Pg.Df[a];
        var c = b.wd;
        var d = b.tg;
        this.og = this.Ie.df;
        delete this.we[d];
        var e = this.zd;
        var f = e[a];
        delete e[a];
        f && this.Eh(f)
    };
    t.prototype.Eh = function(a, b) {
        a.og = this.Ie.df;
        if (!b) {
            var c = a.nh;
            c.og = this.Ie.df;
            var d = c.children;
            var e = d.length;
            for (var f = 0; f < e; f++) {
                if (a == d[f]) {
                    d.splice(f, 1);
                    break
                }
            }
            var g = c.Ad[a.yh.jc];
            var e = g.length;
            for (var f = 0; f < e; f++) {
                if (a == g[f]) {
                    g.splice(f, 1);
                    if (g.length == 0) {
                        delete c.Ad[a.yh.jc]
                    }
                    break
                }
            }
        }
        var d = a.children;
        var e = a.children.length;
        for (var f = 0; f < e; f++) {
            a.Eh(d[f], true)
        }
        var h = this.Ie.Ri;
        var e = h.length;
        for (var f = 0; f < e; f++) {
            var i = h[f];
            if (i == a) {
                h.splice(f, 1);
                break
            }
        }
        var j = this.Ie.jd;
        var e = j.length;
        for (var f = 0; f < e; f++) {
            var k = j[f];
            if (k == a) {
                j.splice(f, 1);
                break
            }
        }
        a.Yf = true
    };
    t.prototype.Re = function(a) {
        var b = this.Ad;
        var c = b[a];
        if (c && c[0]) {
            return c[0]
        } else {
            a = a.toLowerCase();
            for (var d in b) {
                if (d.toLowerCase() == a) {
                    return b[d][0]
                }
            }
        }
        return null
    };
    t.prototype.td = function() {
        this.og = this.Ie.df;
        var a = this.yh;
        a.zc = Math.sqrt(a.rc * a.rc + a.kc * a.kc) * 100;
        a.Bc = Math.sqrt(a.sc * a.sc + a.lc * a.lc) * 100;
        a.nc = Math.atan2(a.kc, a.rc) * 180 / Math.PI;
        a.oc = Math.atan2(a.sc, a.lc) * 180 / Math.PI
    };
    t.prototype.sf = function() {
        var a = this.yh;
        return [a.rc, a.kc, a.lc, a.sc, a.yc, a.Ac]
    };
    t.prototype.ci = function(a) {
        var b = this.yh;
        var c = (a - b.nc) / 180 * Math.PI;
        var d = Math.cos(c);
        var e = Math.sin(c);
        var f = [d, e, -e, d, 0, 0];
        var g = l(f, b.rc, b.kc);
        var h = l(f, b.lc, b.sc);
        b.rc = g[0];
        b.kc = g[1];
        b.lc = h[0];
        b.sc = h[1];
        this.td()
    };
    t.prototype.ei = function(a) {
        this.og = this.Ie.df;
        var b = this.yh;
        var c = b.zc;
        if (c != 0) {
            var d = a / c;
            b.rc *= d;
            b.kc *= d;
            if (a == 0) {
                b.nc = v(b.nc)
            } else if (a < 0) {
                b.nc = Math.atan2(b.kc, b.rc) * 180 / Math.PI
            }
        } else {
            var e = b.nc / 180 * Math.PI;
            b.rc = a / 100 * Math.cos(e);
            b.kc = a / 100 * Math.sin(e)
        }
        b.zc = Math.sqrt(b.rc * b.rc + b.kc * b.kc) * 100
    };
    t.prototype.fi = function(a) {
        this.og = this.Ie.df;
        var b = this.yh;
        var c = b.Bc;
        if (c != 0) {
            var d = a / c;
            b.sc *= d;
            b.lc *= d;
            if (a == 0) {
                b.oc = v(b.oc)
            } else if (a < 0) {
                b.oc = Math.atan2(b.sc, b.lc) * 180 / Math.PI
            }
        } else {
            var e = b.oc / 180 * Math.PI;
            b.sc = a / 100 * Math.cos(e);
            b.lc = a / 100 * Math.sin(e)
        }
        b.Bc = Math.sqrt(b.sc * b.sc + b.lc * b.lc) * 100
    };
    t.prototype.bi = function(a, b) {
        this.og = this.Ie.df;
        this.yh[a] = b
    };
    t.prototype.ai = function(a) {
        this.yh.rc = a[0];
        this.yh.kc = a[1];
        this.yh.lc = a[2];
        this.yh.sc = a[3];
        this.yh.yc = a[4];
        this.yh.Ac = a[5];
        this.td()
    };
    t.prototype.wf = function() {
        var a = this.nh;
        if (this.nh) {
            var b = this.ag ? this.sf() : a.Pg.hf[a.yh.dc][this.id].Mg;
            return M(a.wf(), b || [1, 0, 0, 1, 0, 0])
        } else {
            return this.Ie.Sh || [1, 0, 0, 1, 0, 0]
        }
    };
    t.prototype.Zf = function(a) {
        if (a) {
            var b = this;
            while (b) {
                if (!b.Zf()) {
                    return false
                }
                b = b.nh
            }
            return true
        }
        var c = this.yh;
        return c.wc - 0 && c.zc > 0 && c.Bc > 0
    };
    t.prototype.qf = function(a) {
        var b = this.we;
        var d = this.yh.dc;
        var e = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
        for (var f in b) {
            var g = b[f];
            var h = g.id;
            var i = this.Pg.hf[d][h];
            var j = this.zd[h];
            var k;
            if (j) {
                var l = j.ag ? j.sf() : i.Mg;
                k = j.qf(l)
            } else {
                var m = this.ue[g.wd];
                var n = m.dd;
                if (n) {
                    k = i.Mg ? N(i.Mg, n) : n
                } else {
                    c("bounds not found")
                }
            }
            if (k[0] < e[0]) {
                e[0] = k[0]
            }
            if (k[1] > e[1]) {
                e[1] = k[1]
            }
            if (k[2] < e[2]) {
                e[2] = k[2]
            }
            if (k[3] > e[3]) {
                e[3] = k[3]
            }
        }
        if (Object.keys(b).length == 0) {
            e = [0, 0, 0, 0]
        }
        if (!a) {
            if (this.ag) {
                a = this.sf()
            } else {
                var o = this.nh;
                if (o) {
                    var p = o.yh.dc;
                    a = o.Pg.hf[p][this.id].Mg
                } else {
                    a = [1, 0, 0, 1, 0, 0]
                }
            }
        }
        return N(a, e)
    };
    t.prototype.$f = function(a, b) {
        var c = this;
        while (c) {
            if (!c.Zf()) {
                return false
            }
            c = c.nh
        }
        a *= 20;
        b *= 20;
        var d = this.qf(this.wf());
        return d[0] <= a && a <= d[1] && d[2] <= b && b <= d[3]
    };
    var v = function(a) {
        while (a > 180) {
            a -= 360
        }
        while (a <= -180) {
            a += 360
        }
        if (a <= -150) {
            return 180
        } else if (a <= -120) {
            return -135
        } else if (a <= -60) {
            return -90
        } else if (a <= -30) {
            return -45
        } else if (a <= 30) {
            return 0
        } else if (a <= 60) {
            return 45
        } else if (a <= 120) {
            return 90
        } else if (a <= 150) {
            return 135
        } else {
            return 180
        }
    };
    t.prototype.bg = function(a) {
        var b = this.og;
        if (b >= a) {
            return true
        }
        if (this.Wf(a)) {
            return true
        }
        var c = this.nh;
        while (c) {
            if (c.og >= a) {
                return true
            }
            c = c.nh
        }
        return false
    };
    t.prototype.Wf = function(a) {
        if (this.Bd.yd == this.Ie.df) {
            return this.Bd.Ug
        } else {
            this.Bd.yd = this.Ie.df;
            var b = this.we;
            var c = this.ue;
            for (var d in b) {
                var e = b[d];
                var f = this.zd[e.id];
                if (f && f.bg(a)) {
                    this.Bd.Ug = true;
                    return true
                }
                if (c[e.rh.wd].aj == 37) {
                    this.Bd.Ug = true;
                    return true
                }
            }
            this.Bd.Ug = false;
            return false
        }
    };
    t.prototype.loadMovie = function(a, b, c) {
        var d;
        var e;
        var f = this;
        var g = function() {
            e.Nc(h);
            if (!d.Pd) {
                return
            }
            if (d.loadingImageCount > 0) {
                setTimeout(g, 0);
                return
            }
            f.ue = h;
            f.Qg = i;
            var a = d.Af.nf;
            var b = (a[1] - a[0]) / 20;
            var k = (a[3] - a[2]) / 20;
            var l = c.width || b;
            var m = c.height || k;
            var n = l / b;
            var o = m / k;
            var p = -l * c.xratio || 0;
            var q = -m * c.yratio || 0;
            f._startMovie(j, d.Ii, n, o, p, q, c.name, c.onready)
        };
        var h = {
            name: this.Cc
        };
        var i = {};
        var j = w(h);
        var k = i[j] = new x;
        if (typeof b == "object") {
            d = m(b, this.Ie.ch.Kf, g);
            e = new r(this.Ie, k, d.Ii);
            e.Nc(h);
            return true
        }
        var l = n.rf().data;
        d = l[b];
        if (d) {
            e = new r(this.Ie, k, d.Ii);
            g();
            return true
        }
        d = l[b] = new Hb({
            onerror: c.onerror,
            delayEval: c.delayEval || c.delayEval == null
        });
        e = new r(this.Ie, k, d.Ii);
        d.Eg(b, g);
        return true
    };
    t.prototype._startMovie = function(a, b, c, d, e, f, h, i) {
        var j = this.Ie;
        this._resetDisplayList();
        this.dg = false;
        var k = this.ue;
        k[a] = {
            aj: g.Qb,
            id: a,
            df: 1,
            Ji: b
        };
        var l = {
            aj: g.Yb,
            wd: a,
            re: 1,
            Mg: [c, 0, 0, d, e, f],
            Xg: 0,
            name: h || ""
        };
        var m = ++this.Pg.Cf;
        var n = this.yh.dc;
        this.Pg.Df[m] = {
            id: m,
            wd: a,
            tg: 1,
            bd: n,
            rh: l,
            Dj: {}
        };
        for (var o = 1; o <= this.yh.uc; o++) {
            this.Pg.hf[o][m] = l
        }
        this.ae(this.af, m, null);
        i && i()
    };
    t.prototype._resetDisplayList = function() {
        var a = this.we;
        for (var b in a) {
            var c = a[b];
            this.Fh(c.id)
        }
    };
    var w = function(a) {
        var b = 4294967296;
        while (a[b]) {
            b++
        }
        return b
    };
    var x = function() {
        this.bh = null;
        this.of = 0;
        this.wj = 0;
        this.ff = [];
        this.cf = [];
        this.ef = [];
        this.hf = [];
        this.gf = [];
        this.Df = {};
        this.jf = {};
        this.bf = {};
        this.fd = {};
        this.noskipFrameList = [];
        this.Cf = 0
    };
    x.prototype.bj = function() {
        this.bh && this.bh()
    };
    var y = function(a) {
        this.Ie = a;
        this.Le = new t(a, new x, null, null, true);
        this.Ec = [];
        this.uh = [];
        this.Vh = false;
        this.Fc = [];
        this.Sd = [];
        this.ce = null
    };
    y.prototype.Hc = function(a, b, c) {
        var d = this.Fc;
        if (d && c) {
            debugger
        }
        var e = d || (c ? this.uh : this.Ec);
        e[e.length] = [a, b]
    };
    y.prototype.executeAction = function(a, c, d) {
        if (a.yh.dc == 0) {
            this.Hc(a, c, d);
            return true
        }
        var e = this.ce;
        var f = this.Fc;
        var g = this.Sd;
        var h = f.splice(0, f.length);
        var i = g.splice(0, g.length);
        this.Hc(a, c, d);
        var j = this.Uh();
        if (!j) {
            this.Ie.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM")
        }
        this.ce = e;
        f.push.apply(f, h);
        g.push.apply(g, i);
        return j
    };
    y.prototype.Uh = function() {
        var a = this.uh;
        var c = this.Ec;
        var e = this.Fc;
        var f = this.Sd;
        a.length && (e = a, this.uh = []);
        c.length && (e.push.apply(e, c), this.Ec = []);
        var g = this.Vh;
        this.Vh = true;
        var h = this.ce;
        this.ce = null;
        while (e.length) {
            var i = e[0];
            var j = i[0];
            h = h || {
                qh: 0,
                Og: j,
                eh: j,
                qi: [],
                Se: false,
                ud: null
            };
            if (!j.Yf) {
                var k = i[1];
                var l = k(this, h, B, C, D, E, F, G, H, b, d);
                if (!l) {
                    this.ce = h;
                    return false
                }
                if (h.Se) {
                    e.shift();
                    h = f.pop()
                } else {
                    f[f.length] = h;
                    e.unshift.apply(e, h.ud);
                    var m = h.ud.length;
                    for (var n = 1; n < m; n++) {
                        f[f.length] = null
                    }
                    h = null
                }
            } else {
                e.shift();
                h = f.pop()
            }
        }
        this.Vh = g;
        return true
    };
    var z = function(a, b) {
        var c = "var c=d.qh;var e=d.Og;var f=d.qi;while(c>=0){switch('o'+c){";
        var e = a.length;
        for (var f = 0; f < e; f++) {
            var g = a[f];
            c += "case 'o" + g._g + "':";
            switch (g.Id) {
                case j.Z:
                    c += "f[f.length]=f[f.length-1];";
                    break;
                case j.W:
                    c += "f.length--;";
                    break;
                case j.o:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=a+b;";
                    c += "f.length--;";
                    break;
                case j.mb:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=b-a;";
                    c += "f.length--;";
                    break;
                case j.R:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=a*b;";
                    c += "f.length--;";
                    break;
                case j.w:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "var b=(+f[f.length-2])||0;";
                    c += "f[f.length-2]=(a==0)?'#ERROR':b/a;";
                    c += "f.length--;";
                    break;
                case j.M:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(b<a)?1:0;";
                    break;
                case j.A:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a==b)?1:0;";
                    break;
                case j.q:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a&&b)?1:0;";
                    break;
                case j.U:
                    c += "var a=(+f.pop())||0;";
                    c += "var b=(+f.pop())||0;";
                    c += "f[f.length]=(a||b)?1:0;";
                    break;
                case j.T:
                    c += "var a=(+f[f.length-1])||0;";
                    c += "f[f.length-1]=(a==0)?1:0;";
                    break;
                case j.hb:
                    c += "var a=f[f.length-1];a=(a==null)?'':a;";
                    c += "var b=f[f.length-2];b=(b==null)?'':b;";
                    c += "f[f.length-2]=b+''+a;";
                    c += "f.length--;";
                    break;
                case j.ib:
                    c += "var a=f.pop()+'';";
                    c += "var b=f.pop()+'';";
                    c += "f[f.length]=(a==b)?1:0;";
                    break;
                case j.jb:
                    c += "var g=+f.pop();";
                    c += "var h=+f.pop()-1;";
                    c += "var k=f.pop()+'';";
                    c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{";
                    c += "h=(h<0)?0:h;";
                    c += "g=(g<0)?m(k):g;";
                    c += "f[f.length]=n(k,h,g);}";
                    break;
                case j.P:
                    c += "var g=+f.pop();";
                    c += "var h=+f.pop()-1;";
                    c += "var k=f.pop()+'';";
                    c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{";
                    c += "h=(h<0)?0:h;";
                    c += "g=(g<0)?k.length:g;";
                    c += "f[f.length]=k.substr(h,g);}";
                    break;
                case j.kb:
                    c += "var k=f[f.length-1]+'';";
                    c += "f[f.length-1]=m(k);";
                    break;
                case j.Q:
                    c += "var k=f[f.length-1]+'';";
                    c += "f[f.length-1]=k.length;";
                    break;
                case j.lb:
                    c += "var b=f.pop()+'';";
                    c += "var a=f.pop()+'';";
                    c += "f[f.length]=(a<b)?1:0;";
                    break;
                case j.nb:
                    c += "f[f.length-1]=(+(f[f.length-1]))|0;";
                    break;
                case j.u:
                    d("ActionCharToAscii: unimplemented correctly");
                    c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                    break;
                case j.r:
                    d("ActionAsciiToChar: unimplemented correctly");
                    c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                    break;
                case j.O:
                    c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                    break;
                case j.N:
                    c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                    break;
                case j.K:
                    c += "var b=+f.pop();";
                    c += "if(b){c=" + (g.ed == null ? "-1" : g.$g + g.ed) + ";break;}";
                    break;
                case j.L:
                    c += "c=" + (g.ed == null ? "-1" : g.$g + g.ed) + ";break;";
                    break;
                case j.Y:
                    var h = g.fj.length;
                    for (var i = 0; i < h; i++) {
                        var k = g.fj[i];
                        c += "f[f.length]=";
                        if (k == null) {
                            c += "null;"
                        } else if (typeof k == "string") {
                            c += "unescape('" + escape(k) + "');"
                        } else {
                            c += k + ";"
                        }
                    }
                    break;
                case j.G:
                    c += "var o=f.pop();";
                    c += "var value;";
                    c += "var q=r(e,o);";
                    c += "var s=q[0];var t=q[1];";
                    c += "value=(s&&(((s==u.Le)?u.Ie.Qh:s).hj[t]));";
                    c += "value=(typeof(value)=='undefined')?'':value;";
                    c += "f[f.length]=value;";
                    break;
                case j.db:
                    c += "var value=f.pop();";
                    c += "var t=f.pop();";
                    c += "var q=r(e,t);";
                    c += "q[0] && (((q[0]==u.Le)?u.Ie.Qh:q[0]).hj[q[1]]=value);";
                    break;
                case j.C:
                    c += "var p=f.pop();";
                    c += "var v=f.pop();";
                    c += "var w=x(e,v);";
                    c += "var name=z[p];";
                    c += "if(w&&w!=u.Le){if(!name){f[f.length]=0}else{";
                    c += "switch(name){case'tc':f[f.length]=(w.nh&&w.Cc)||'/';break;";
                    c += "case'xc':var A=w.qf();f[f.length]=(A[1]-A[0])/20;break;";
                    c += "case'hc':var A=w.qf();f[f.length]=(A[3]-A[2])/20;break;";
                    c += "case'yc':case'Ac':if(w.ag){f[f.length]=((w.yh[name]*50)|0)/50;}";
                    c += "else{var B=w.nh;var C=B&&B.yh.dc;var h=(name=='yc'?4:5);";
                    c += "f[f.length]=B?((B.Pg.hf[C][w.id].Mg[h]*50)|0)/50:0}break;";
                    c += "default:f[f.length]=w.yh[name];}}}else{f[f.length]=p;}";
                    break;
                case j.ab:
                    c += "var value=f.pop();";
                    c += "var p=f.pop();";
                    c += "var v=f.pop();";
                    c += "var w=x(e,v);";
                    c += "var name=z[p];";
                    c += "if(w&&w!=u.Le){var D=(value==parseFloat(value));switch(name){";
                    c += "case'nc':if(D){w.ag=true;w.ci(+value);}break;";
                    c += "case'zc':if(D){w.ag=true;w.ei(+value);}break;";
                    c += "case'Bc':if(D){w.ag=true;w.fi(+value);}break;";
                    c += "case'cc':case'yc':case'Ac':if(D){w.ag=true;w.bi(name,(+value)||0);}break;";
                    c += "case'fc':case'ic':case'wc':if(value==0||value==1){w.bi(name,+value);}break;";
                    c += "case'xc':var A=w.qf();var E=(A[1]-A[0])/20;var F=w.yh.zc;";
                    c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.ei(+value/(E||1));break;";
                    c += "case'hc':var A=w.qf();var E=(A[3]-A[2])/20;var F=w.yh.Bc;";
                    c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.fi(+value/(E||1));break;";
                    c += "case'dc':case'tc':case'uc':case'jc':break;";
                    c += "default:w.yh[name]=value;break;}}";
                    break;
                case j.V:
                    c += "e.dg=true;";
                    break;
                case j.fb:
                    c += "e.dg=false;";
                    break;
                case j.s:
                    c += "var o=f.pop();";
                    c += "var q=r(e,o);";
                    c += "var w=q[0];if(w&&!w.Yf){";
                    c += "var G=q[1];var H=w.Pg.jf[(G+'')]||G;";
                    c += "if(!isNaN(parseInt(H))){var I=w.Pg.bf[H];if(I){";
                    c += "var J=I.length;var q=[];for(var i=0;i<J;i++){q[q.length]=[w,I[i]];}";
                    c += "d.Se=false;d.qh=" + g.$g + ";d.Og=e;d.ud=q;return true;}}}";
                    break;
                case j.H:
                    c += "e.dg=false;var H=e.Pg.jf[unescape('" + escape(g.ng) + "')];";
                    c += "if(H){var q=u.Ie.gotoFrame(e,H);if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                    break;
                case j.I:
                    c += "if(e!=u.Le){e.dg=false;var q=u.Ie.gotoFrame(e," + g.af + ");";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                    break;
                case j.J:
                    c += "var o=f.pop()+'';var q=r(e,o);var w=q[0];";
                    c += "if(w&&w!=u.Le){var G=q[1];var H=w.Pg.jf[(G+'')]||G;";
                    c += "if(!isNaN(parseInt(H))){w.dg=" + (g.play ? "true" : "false") + ";var q=u.Ie.gotoFrame(w,H);";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;f[f.length]=o;return false;}}}";
                    break;
                case j.S:
                    c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc+1);";
                    c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}";
                    break;
                case j.X:
                    c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc-1);";
                    break;
                case j.bb:
                    c += "e=x(d.eh,'" + g.name + "')||u.Le;";
                    break;
                case j.cb:
                    c += "var K=f.pop();e=x(d.eh,K)||u.Le;";
                    break;
                case j.F:
                    c += "var L=f.pop();var M=f.pop();";
                    if (g.Gg) {
                        d("not implemented:GetURL2 load sprite. ignored")
                    }
                    c += "if(M){";
                    if (g.$h == 1 || g.$h == 2) {
                        c += "var N=e.hj;";
                        c += "var O=[];for(var P in N){O.push(P+'='+(encodeURI(N[P])||''))}";
                        c += "if(O.length>0)M+=(M.indexOf('?')>=0?'&':'?')+O.join('&');"
                    }
                    if (g.Hg) {
                        c += "var Q=new XMLHttpRequest();";
                        switch (g.$h) {
                            case 0:
                            case 1:
                                c += "Q.open('GET', M, true);";
                                c += "Q.send('');";
                                break;
                            case 2:
                                c += "Q.open('POST', M, true);";
                                c += "Q.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');";
                                c += "Q.send(O.join('&'));";
                                break
                        }
                        c += "Q.onreadystatechange=(function(R){return function(){if(Q.readyState == 4 && Q.status == 200){";
                        c += "var S=x(R,L);";
                        c += "if(!S){console.warn('[getURL2] Not found S');S=R}";
                        c += "var T=decodeURI(Q.responseText).split('&');var J=T.length;";
                        c += "for(var P=0;P<J;P++){var U=T[P].split('=');S.hj[U[0]]=U[1];}";
                        c += "}};})(e);"
                    } else {
                        switch (g.$h) {
                            case 0:
                            case 1:
                                c += "location.href=M;";
                                break;
                            case 2:
                                c += "var form = document.createElement('form');document.body.appendChild(form);";
                                c += "form.action=M;form.method='post';var N=e.hj;";
                                c += "for(var P in N){var input=document.createElement('input');input.aj='hidden';input.name=P;input.value=encodeURI(N[P]||'');form.appendChild(input);}";
                                c += "form.submit();";
                                break
                        }
                    }
                    c += "}else{EngineLogW(\"'cj' argument of getURL() is empty\");V(e,L);}";
                    break;
                case j.v:
                    c += "var W=f.pop();var X=''+f.pop();var Y=''+f.pop();";
                    c += "var Z=x(e,Y);";
                    c += "var $=Z&&Z.wd;";
                    c += "var B=(Z&&Z.nh)||null;";
                    c += "if(B!=null){var _ = B.we[W];";
                    c += "if(_){var ab=_.id;if(_.Dj&&_.Dj[ab]&&_.Dj[ab].Xf){B.Fh(ab);}else{break;}}";
                    c += "var bb=Z.Gd(X,W);bb.yh.wc=1;}";
                    break;
                case j._:
                    c += "var L=''+f.pop();V(e,L);";
                    break;
                case j.D:
                    c += "f[f.length]=Date.now();";
                    break;
                case j.$:
                    c += "f[f.length-1]=(Math.random()*f[f.length-1])|0;";
                    break;
                case j.B:
                    c += "var cb=f.pop();var db=f.length;";
                    c += "if(f[db-1]=='JavaScript'){";
                    c += "var eb=[];var jsFuncName = f[db-2];var fb=eval(jsFuncName);if(typeof fb!=='function'){EngineLogW('Function \"'+jsFuncName+'\" does not exist in the global');f.length-=cb;f[f.length]=-1;}else{f.length-=2;var J=cb-2;for(var i=0;i<J;i++){eb[i]=f.pop();}fb.apply(null,eb);f[f.length]=0;}";
                    c += "}else{f.length-=cb;f[f.length]=-1;}";
                    break;
                case j.pb:
                    c += b ? "EngineLogD('Trace: '+f.pop());" : "f.pop();";
                    break;
                case 0:
                    break;
                default:
                    d("not implemented action:" + g.Id);
                    c += "/* not implemented */";
                    break
            }
        }
        c += "c=-1;break;default:gb('jump miss');}}d.Se=true;return true;";
        return new Function("u,d,m,n,r,x,z,hb,V,EngineLogD,EngineLogW", c)
    };
    var A = function(a, b) {
        return function(c, d, e, f, g, h, i, k, l, m, n) {
            var o = d.Og;
            var p = d.qi;
            var q = {};
            var r = a.length;
            for (var s = 0; s < r; s++) {
                var t = a[s];
                q[t._g] = s
            }
            for (var s = q[d.qh]; s < r; s++) {
                var t = a[s];
                switch (t.Id) {
                    case j.Z:
                        p[p.length] = p[p.length - 1];
                        break;
                    case j.W:
                        p.length--;
                        break;
                    case j.o:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u + v;
                        p.length--;
                        break;
                    case j.mb:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = v - u;
                        p.length--;
                        break;
                    case j.R:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u * v;
                        p.length--;
                        break;
                    case j.w:
                        var u = +p[p.length - 1] || 0;
                        var v = +p[p.length - 2] || 0;
                        p[p.length - 2] = u == 0 ? "#ERROR" : v / u;
                        p.length--;
                        break;
                    case j.M:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = v < u ? 1 : 0;
                        break;
                    case j.A:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u == v ? 1 : 0;
                        break;
                    case j.q:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u && v ? 1 : 0;
                        break;
                    case j.U:
                        var u = +p.pop() || 0;
                        var v = +p.pop() || 0;
                        p[p.length] = u || v ? 1 : 0;
                        break;
                    case j.T:
                        var u = +p[p.length - 1] || 0;
                        p[p.length - 1] = u == 0 ? 1 : 0;
                        break;
                    case j.hb:
                        var u = p[p.length - 1];
                        u = u == null ? "" : u;
                        var v = p[p.length - 2];
                        v = v == null ? "" : v;
                        p[p.length - 2] = v + "" + u;
                        p.length--;
                        break;
                    case j.ib:
                        var u = p.pop() + "";
                        var v = p.pop() + "";
                        p[p.length] = u == v ? 1 : 0;
                        break;
                    case j.jb:
                        var w = +p.pop();
                        var x = +p.pop() - 1;
                        var y = p.pop() + "";
                        if (isNaN(w) || isNaN(x)) {
                            p[p.length] = ""
                        } else {
                            x = x < 0 ? 0 : x;
                            w = w < 0 ? e(y) : w;
                            p[p.length] = f(y, x, w)
                        }
                        break;
                    case j.P:
                        var w = +p.pop();
                        var x = +p.pop() - 1;
                        var y = p.pop() + "";
                        if (isNaN(w) || isNaN(x)) {
                            p[p.length] = ""
                        } else {
                            x = x < 0 ? 0 : x;
                            w = w < 0 ? y.length : w;
                            p[p.length] = y.substr(x, w)
                        }
                        break;
                    case j.kb:
                        var y = p[p.length - 1] + "";
                        p[p.length - 1] = e(y);
                        break;
                    case j.Q:
                        var y = p[p.length - 1] + "";
                        p[p.length - 1] = y.length;
                        break;
                    case j.lb:
                        var v = p.pop() + "";
                        var u = p.pop() + "";
                        p[p.length] = u < v ? 1 : 0;
                        break;
                    case j.nb:
                        p[p.length - 1] = +p[p.length - 1] | 0;
                        break;
                    case j.u:
                        n("ActionCharToAscii: unimplemented correctly");
                        p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                        break;
                    case j.r:
                        n("ActionAsciiToChar: unimplemented correctly");
                        p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                        break;
                    case j.O:
                        p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                        break;
                    case j.N:
                        p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                        break;
                    case j.K:
                        var v = +p.pop();
                        if (v) s = t.ed == null ? r : q[t.$g + t.ed] - 1;
                        break;
                    case j.L:
                        s = t.ed == null ? r : q[t.$g + t.ed] - 1;
                        break;
                    case j.Y:
                        Array.prototype.push.apply(p, t.fj);
                        break;
                    case j.G:
                        var z = p.pop();
                        var A;
                        var B = g(o, z);
                        var C = B[0];
                        var D = B[1];
                        A = C && (C == c.Le ? c.Ie.Qh : C).hj[D];
                        A = typeof A == "undefined" ? "" : A;
                        p[p.length] = A;
                        break;
                    case j.db:
                        var A = p.pop();
                        var D = p.pop();
                        var B = g(o, D);
                        B[0] && ((B[0] == c.Le ? c.Ie.Qh : B[0]).hj[B[1]] = A);
                        break;
                    case j.C:
                        var E = p.pop();
                        var F = p.pop();
                        var G = h(o, F);
                        var H = i[E];
                        if (G && G != c.Le) {
                            if (!H) {
                                p[p.length] = 0
                            } else {
                                switch (H) {
                                    case "tc":
                                        p[p.length] = G.nh && G.Cc || "/";
                                        break;
                                    case "xc":
                                        var I = G.qf();
                                        p[p.length] = (I[1] - I[0]) / 20;
                                        break;
                                    case "hc":
                                        var I = G.qf();
                                        p[p.length] = (I[3] - I[2]) / 20;
                                        break;
                                    case "yc":
                                    case "Ac":
                                        if (G.ag) {
                                            p[p.length] = (G.yh[H] * 50 | 0) / 50
                                        } else {
                                            var J = G.nh;
                                            var K = J && J.yh.dc;
                                            var x = H == "yc" ? 4 : 5;
                                            p[p.length] = J ? (J.Pg.hf[K][G.id].Mg[x] * 50 | 0) / 50 : 0
                                        }
                                        break;
                                    default:
                                        p[p.length] = G.yh[H]
                                }
                            }
                        } else {
                            p[p.length] = E
                        }
                        break;
                    case j.ab:
                        var A = p.pop();
                        var E = p.pop();
                        var F = p.pop();
                        var G = h(o, F);
                        var H = i[E];
                        if (G && G != c.Le) {
                            var L = A == parseFloat(A);
                            switch (H) {
                                case "nc":
                                    if (L) {
                                        G.ag = true;
                                        G.ci(+A)
                                    }
                                    break;
                                case "zc":
                                    if (L) {
                                        G.ag = true;
                                        G.ei(+A)
                                    }
                                    break;
                                case "Bc":
                                    if (L) {
                                        G.ag = true;
                                        G.fi(+A)
                                    }
                                    break;
                                case "cc":
                                case "yc":
                                case "Ac":
                                    if (L) {
                                        G.ag = true;
                                        G.bi(H, +A || 0)
                                    }
                                    break;
                                case "fc":
                                case "ic":
                                case "wc":
                                    if (A == 0 || A == 1) {
                                        G.bi(H, +A)
                                    }
                                    break;
                                case "xc":
                                    var I = G.qf();
                                    var M = (I[1] - I[0]) / 20;
                                    var N = G.yh.zc;
                                    if (N != 0) {
                                        M /= Math.abs(N)
                                    }
                                    G.ag = true;
                                    G.ei(+A / (M || 1));
                                    break;
                                case "hc":
                                    var I = G.qf();
                                    var M = (I[3] - I[2]) / 20;
                                    var N = G.yh.Bc;
                                    if (N != 0) {
                                        M /= Math.abs(N)
                                    }
                                    G.ag = true;
                                    G.fi(+A / (M || 1));
                                    break;
                                case "dc":
                                case "tc":
                                case "uc":
                                case "jc":
                                    break;
                                default:
                                    G.yh[H] = A;
                                    break
                            }
                        }
                        break;
                    case j.V:
                        o.dg = true;
                        break;
                    case j.fb:
                        o.dg = false;
                        break;
                    case j.s:
                        var z = p.pop();
                        var B = g(o, z);
                        var G = B[0];
                        if (G && !G.Yf) {
                            var O = B[1];
                            var P = G.Pg.jf[O + ""] || O;
                            if (!isNaN(parseInt(P))) {
                                var Q = G.Pg.bf[P];
                                if (Q) {
                                    var R = Q.length;
                                    var B = [];
                                    for (var S = 0; S < R; S++) {
                                        B[B.length] = [G, Q[S]]
                                    }
                                    d.Se = false;
                                    d.qh = t.$g;
                                    d.Og = o;
                                    d.ud = B;
                                    return true
                                }
                            }
                        }
                        break;
                    case j.H:
                        o.dg = false;
                        var P = o.Pg.jf[t.ng];
                        if (P) {
                            var B = c.Ie.gotoFrame(o, P);
                            if (!B) {
                                d.qh = t._g;
                                d.Og = o;
                                return false
                            }
                        }
                        break;
                    case j.I:
                        if (o != c.Le) {
                            o.dg = false;
                            var B = c.Ie.gotoFrame(o, t.af);
                            if (!B) {
                                d.qh = t.af;
                                d.Og = o;
                                return false
                            }
                        }
                        break;
                    case j.J:
                        var z = p.pop() + "";
                        var B = g(o, z);
                        var G = B[0];
                        if (G && G != c.Le) {
                            var O = B[1];
                            var P = G.Pg.jf[O + ""] || O;
                            if (!isNaN(parseInt(P))) {
                                G.dg = t.play;
                                var B = c.Ie.gotoFrame(G, P);
                                if (!B) {
                                    d.qh = t._g;
                                    d.Og = o;
                                    p[p.length] = z;
                                    return false
                                }
                            }
                        }
                        break;
                    case j.S:
                        o.dg = false;
                        var B = c.Ie.gotoFrame(o, o.yh.dc + 1);
                        if (!B) {
                            d.qh = t._g;
                            d.Og = o;
                            return false
                        }
                        break;
                    case j.X:
                        o.dg = false;
                        var B = c.Ie.gotoFrame(o, o.yh.dc - 1);
                        break;
                    case j.bb:
                        o = h(d.eh, t.name) || c.Le;
                        break;
                    case j.cb:
                        var T = p.pop();
                        o = h(d.eh, T) || c.Le;
                        break;
                    case j.F:
                        if (t.Gg) {
                            n("not implemented:GetURL2 load sprite. ignored")
                        }
                        var U = p.pop();
                        var V = p.pop();
                        if (V) {
                            if (t.$h == 1 || t.$h == 2) {
                                var W = o.hj;
                                var X = [];
                                for (var Y in W) {
                                    X.push(Y + "=" + (encodeURI(W[Y]) || ""))
                                }
                                if (X.length > 0) V += (V.indexOf("?") >= 0 ? "&" : "?") + X.join("&")
                            }
                            if (t.Hg) {
                                var Z = new XMLHttpRequest;
                                switch (t.$h) {
                                    case 0:
                                    case 1:
                                        Z.open("GET", V, true);
                                        Z.send("");
                                        break;
                                    case 2:
                                        Z.open("POST", V, true);
                                        Z.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=Shift-jis");
                                        Z.send(X.join("&"));
                                        break
                                }
                                Z.onreadystatechange = function(a) {
                                    return function() {
                                        if (Z.readyState == 4 && Z.status == 200) {
                                            var b = h(a, U);
                                            if (!b) {
                                                console.warn("[getURL2] Not found targetMC");
                                                b = a
                                            }
                                            var c = decodeURI(Z.responseText).split("&");
                                            var d = c.length;
                                            for (var e = 0; e < d; e++) {
                                                var f = c[e].split("=");
                                                b.hj[f[0]] = f[1]
                                            }
                                        }
                                    }
                                }(o)
                            } else {
                                switch (t.$h) {
                                    case 0:
                                    case 1:
                                        location.href = V;
                                        break;
                                    case 2:
                                        var $ = document.createElement("form");
                                        document.body.appendChild($);
                                        $.action = V;
                                        $.method = "post";
                                        var W = o.hj;
                                        for (var Y in W) {
                                            var _ = document.createElement("input");
                                            _.aj = "hidden";
                                            _.name = Y;
                                            _.value = encodeURI(W[Y] || "");
                                            $.appendChild(_)
                                        }
                                        $.submit();
                                        break
                                }
                            }
                        } else {
                            n("'url' argument of getURL() is empty");
                            l(o, U)
                        }
                        break;
                    case j.v:
                        var ab = p.pop();
                        var bb = "" + p.pop();
                        var cb = "" + p.pop();
                        var db = h(o, cb);
                        var eb = db && db.wd;
                        var J = db && db.nh || null;
                        if (J != null) {
                            var fb = J.we[ab];
                            if (fb) {
                                var gb = fb.id;
                                if (fb.Dj && fb.Dj[gb] && fb.Dj[gb].Xf) {
                                    J.Fh(gb)
                                } else {
                                    return -1
                                }
                            }
                            var hb = db.Gd(bb, ab);
                            hb.yh.wc = 1
                        }
                        break;
                    case j._:
                        var U = "" + p.pop();
                        l(o, U);
                        break;
                    case j.D:
                        p[p.length] = Date.now();
                        break;
                    case j.$:
                        p[p.length - 1] = Math.random() * p[p.length - 1] | 0;
                        break;
                    case j.B:
                        var ib = p.pop();
                        var jb = p.length;
                        if (p[jb - 1] == "JavaScript") {
                            var kb = [];
                            var lb = p[jb - 2];
                            var mb = eval(lb);
                            if (typeof mb !== "function") {
                                n('Function "' + lb + '" does not exist in the global');
                                p.length -= ib;
                                p[p.length] = -1;
                                break
                            }
                            p.length -= 2;
                            var nb = ib - 2;
                            for (var S = 0; S < nb; S++) {
                                kb[S] = p.pop()
                            }
                            mb.apply(null, kb);
                            p[p.length] = 0
                        } else {
                            p.length -= ib;
                            p[p.length] = -1
                        }
                        break;
                    case j.pb:
                        b ? m("Trace: " + p.pop()) : p.pop();
                        break;
                    case 0:
                        break;
                    default:
                        n("not implemented action:" + t.Id);
                        break
                }
            }
            d.Se = true;
            return true
        }
    };
    var B = function(a) {
        var b = 0;
        for (var c = 0; c < a.length; c++) {
            b += k(a.charAt(c)) ? 1 : 2
        }
        return b
    };
    var C = function(a, b, c) {
        var d = 0;
        var e = 0;
        var f = [];
        var g = 0;
        while (e < b) {
            var h = a.charAt(d);
            var i = k(h) ? 1 : 2;
            e += i;
            d++
        }
        if (e != b) {
            f.push("\uff65");
            g = 1
        }
        for (; d < a.length && g < c; d++) {
            var h = a.charAt(d);
            var i = k(h) ? 1 : 2;
            if (g + i > c) {
                f[f.length] = "\uff65";
                g += 1
            } else {
                f[f.length] = h;
                g += i
            }
        }
        return f.join("")
    };
    var D = function(a, b) {
        var c = a.Vf && a.nh || a;
        var d = b + "";
        var e = d.split(":");
        if (e.length == 2) {
            c = E(a, e[0]);
            d = e[1]
        }
        return [c, d]
    };
    var E = function(a, b) {
        if (b == "") {
            return !a.Ke && a || null
        }
        a = a.Ke && a.Ie.Qh || a;
        if (b == "_level0") {
            return a.Ie.Qh
        }
        var c = b.split("/");
        var d = 0;
        if (c[0] == "") {
            a = a.Ie.Qh;
            d++
        }
        var e;
        for (; d < c.length; d++) {
            e = c[d];
            if (e == "" || e == ".") {} else if (e == "..") {
                if (a.nh) {
                    a = a.nh;
                    while (a.Vf) {
                        a = a.nh
                    }
                } else {
                    return null
                }
            } else {
                e.charAt(0) == "." && (e = e.substring(1));
                a = a.Re(e);
                if (!a) {
                    return null
                }
            }
        }
        return a
    };
    var F = ["yc", "Ac", "zc", "Bc", "dc", "uc", "cc", "wc", "xc", "hc", "nc", "tc", "gc", "jc", "ec", "vc", "ic", "fc"];
    var G = function(a) {
        var b = {};
        for (var c in a) {
            b[c] = a[c]
        }
        return b
    };
    var H = function(a, b) {
        var c = E(a, b);
        var e = c ? c.nh : null;
        if (e == null || c == null) {
            return
        }
        for (var f in e.we) {
            if (f >= 16384) {
                var g = e.we[f];
                a = g.Dj[g.id];
                if (a == c) {
                    if (a.Xf) {
                        e.Fh(g.id);
                        return
                    } else {
                        d("[removeSprite] not cloned", a, b)
                    }
                }
            }
        }
    };
    var I = function(a) {
        this.Ie = a
    };
    I.prototype.gotoFrame = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        b = +(e.Pg.jf[b + ""] || b);
        if (!b) {
            return false
        }
        var f = z([{
            Id: j.I,
            af: b,
            _g: 0
        }, {
            Id: j.V,
            _g: 4
        }]);
        if (c || typeof c === "undefined") {
            d.kj.executeAction(e, f);
            return true
        }
        d.kj.Hc(e, f);
        return true
    };
    I.prototype.gotoAndStop = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        b = +(e.Pg.jf[b + ""] || b);
        var f = z([{
            Id: j.I,
            af: b,
            _g: 0
        }, {
            Id: j.fb,
            _g: 0
        }]);
        if (c || typeof c === "undefined") {
            d.kj.executeAction(e, f);
            return true
        }
        d.kj.Hc(e, f);
        return true
    };
    I.prototype.keyDown = function(a) {
        this.Ie.Ui.keyDown(a)
    };
    I.prototype.play = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        c.dg = true;
        return true
    };
    I.prototype.stop = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        var d = z([{
            Id: j.fb,
            _g: 0
        }]);
        b.kj.Hc(c, d);
        return true
    };
    I.prototype.stopAll = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return false
        }
        var d = function(a) {
            var c = z([{
                Id: j.fb,
                _g: 0
            }]);
            b.kj.Hc(a, c);
            var e = a.children;
            var f = e.length;
            for (var g = 0; g < f; g++) {
                d(e[g])
            }
        };
        d(c);
        return true
    };
    I.prototype.getVariable = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (!d) {
            return undefined
        }
        return d.hj[b]
    };
    I.prototype.getVariables = function(a, b) {
        var c = E(this.Ie.Qh, a);
        if (!c) {
            return
        }
        if (!b) {
            return c.hj
        } else if (!(b instanceof Array)) {
            d("variableNames should be an Array.");
            return
        }
        var e = {};
        var f = c.hj;
        var g = b.length;
        var h;
        for (var i = 0; i < g; i++) {
            h = b[i];
            if (f.hasOwnProperty(h)) {
                e[h] = f[h]
            }
        }
        return e
    };
    I.prototype.destroy = function() {
        this.Ie.Ui.removeAllListeners();
        var a = n.rf();
        return a.Gj(this.Ie)
    };
    I.prototype.setVariable = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        e.hj[b] = c;
        return true
    };
    I.prototype.setVariables = function(a, b) {
        var c = E(this.Ie.Qh, a);
        if (!c) {
            return false
        }
        var d = c.hj;
        for (var e in b) {
            d[e] = b[e]
        }
        return true
    };
    var J = function(a, b, c) {
        var d = a.Ie;
        var e = b && E(d.Qh, b);
        if (!e) {
            return void 0
        }
        return e.yh[c]
    };
    I.prototype.getCurrentFrame = function(a) {
        return J(this, a || "/", "dc")
    };
    I.prototype.getTotalFrames = function(a) {
        return J(this, a || "/", "uc")
    };
    I.prototype.getVisible = function(a) {
        return J(this, a || "/", "wc")
    };
    I.prototype.setVisible = function(a, b) {
        var c = this.Ie;
        var e = E(c.Qh, a);
        if (!e) {
            return false
        }
        var f = +b;
        if (f == 0 || f == 1) {
            e.bi("wc", f);
            return true
        } else {
            d("Invalid value: " + b);
            return false
        }
    };
    I.prototype.setPosition = function(a, b, c) {
        var d = E(this.Ie.Qh, a);
        if (!d) {
            return false
        }
        d.ag = true;
        d.bi("yc", +b || 0);
        d.bi("Ac", +c || 0);
        return true
    };
    I.prototype.setMovieClipProperty = function(a, b, c) {
        var d = this.Ie;
        var e = E(d.Qh, a);
        if (!e) {
            return false
        }
        switch (b) {
            case "zc":
                e.ag = true;
                e.ei(+c || 0);
                break;
            case "Bc":
                e.ag = true;
                e.fi(+c || 0);
                break;
            case "nc":
                e.ag = true;
                e.ci(+c || 0);
                break;
            case "yc":
            case "Ac":
            case "cc":
                e.ag = true;
                e.bi(b, +c || 0);
                break;
            case "fc":
            case "ic":
            case "wc":
                if (c == 0 || c == 1) {
                    e.bi(b, +c)
                }
                break;
            default:
                return false
        }
        return true
    };
    I.prototype.getMovieClipProperty = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (d) {
            return d.yh[b]
        }
    };
    I.prototype.ready = function(a) {
        if (!this.Ie.Fg) {
            this.Ie.readyCallbacks.push(a)
        } else {
            a()
        }
    };
    I.prototype.engineStart = function() {
        this.Ie.Vh = true;
        return true
    };
    I.prototype.engineStop = function() {
        this.Ie.Vh = false;
        return true
    };
    I.prototype.getMovieClipNames = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return null
        }
        return Object.keys(c.Ad)
    };
    I.prototype.getFrameLabelMap = function(a) {
        var b = this.Ie;
        var c = a && E(b.Qh, a) || b.Qh;
        if (!c) {
            return null
        }
        var d = c.Pg.jf;
        var e = {};
        for (var f in d) {
            e[f] = d[f]
        }
        return e
    };
    I.prototype._getCacheImageInfo = function() {
        var a = this.Ie.Ih;
        return a && a.pd
    };
    I.prototype.replaceMovieClip = function(a, b, c, d, e, f, g) {
        var h = this.Ie;
        var i = h.Ri;
        for (var j = 0; j < i.length; j++) {
            var k = i[j];
            if (k.yh.jc == a) {
                k.replaceMovieClip(b, c, d, e, f, g)
            }
        }
        var l = h.ch.replace || (h.ch.replace = []);
        for (var j = 0; j < l.length; j++) {
            var m = l[j];
            if (m.name == a) {
                m.img = b;
                m.width = c;
                m.height = d;
                m.keepAspect = e;
                m.xratio = f;
                m.yratio = g;
                return
            }
        }
        l.push({
            name: a,
            img: b,
            width: c,
            height: d,
            keepAspect: e,
            xratio: f,
            yratio: g
        });
        return
    };
    I.prototype.getRenderingContext = function() {
        return this.Ie && this.Ie.Ih && this.Ie.Ih.be
    };
    I.prototype._getStatics = function() {
        return {
            _frameCount: this.Ie.df,
            renderCount: this.Ie.renderCount
        }
    };
    I.prototype.getMovieClipNamesAtPoint = function(a, b) {
        var c = [];
        a *= 20;
        b *= 20;
        var d = function(e) {
            var f = e.qf(e.wf());
            if (f[0] <= a && a <= f[1] && f[2] <= b && b <= f[3]) {
                c.push(e.Cc || "/");
                var g = e.children;
                var h = g.length;
                for (var i = 0; i < h; i++) {
                    d(g[i])
                }
            }
        };
        d(this.Ie.Qh);
        return c
    };
    I.prototype.addEventListener = function(a, b, c) {
        switch (a.toLowerCase()) {
            case "enterframe":
                var e = E(this.Ie.Qh, c);
                if (!e) {
                    return false
                }
                var f = e.onEnterFrames.indexOf(b);
                if (f !== -1) {
                    return false
                }
                e.onEnterFrames.push(b);
                break;
            case "movieclipcreate":
                var g = this.Ie;
                var f = g.onCreateMC.indexOf(b);
                if (f !== -1) {
                    return false
                }
                g.onCreateMC.push(b);
                break;
            default:
                d("Invalid event: " + a);
                break
        }
        return true
    };
    I.prototype.removeEventListener = function(a, b, c) {
        switch (a.toLowerCase()) {
            case "enterframe":
                var e = E(this.Ie.Qh, c);
                if (!e) {
                    return false
                }
                var f = e.onEnterFrames.indexOf(b);
                if (f === -1) {
                    return false
                }
                e.onEnterFrames.splice(f, 1);
                break;
            case "movieclipcreate":
                var g = this.Ie;
                var f = g.onCreateMC.indexOf(b);
                if (f === -1) {
                    return false
                }
                g.onCreateMC.splice(f, 1);
                break;
            default:
                d("Invalid event: " + a);
                break
        }
        return true
    };
    I.prototype.redraw = function() {
        this.Ie.Ih.Hh()
    };
    I.prototype.getFPS = function() {
        return this.Ie.getFPS()
    };
    I.prototype.setFPS = function(a) {
        this.Ie.setFPS(a)
    };
    I.prototype.getFrameSkipRatio = function() {
        return this.Ie.getFrameSkipRatio()
    };
    I.prototype.setFrameSkipRatio = function(a) {
        return this.Ie.setFrameSkipRatio(a)
    };
    I.prototype.callActions = function(a, b) {
        var c = this.Ie;
        var d = E(c.Qh, a);
        if (!d) {
            return false
        }
        b = +(d.Pg.jf[b + ""] || b);
        if (!b) {
            return false
        }
        var e = z([{
            Id: j.Y,
            fj: [b],
            _g: 0
        }, {
            Id: j.s,
            $g: 2,
            _g: 1
        }, {
            Id: 0,
            _g: 2
        }]);
        c.kj.executeAction(d, e);
        return true
    };
    I.prototype.loadMovie = function(a, b, c) {
        var d = E(this.Ie.Qh, a);
        if (!d) {
            return false
        }
        d.loadMovie(a, b, c)
    };
    I.prototype.showFrame = function(a) {
        var b = this.Ie.lastStopFrame || 0;
        var c = 1 + a * this.Ie.mf | 0;
        if (b != c) {
            this.Ie.stopFrame = c;
            this.Ie.Qi(Date.now())
        }
        return this.Ie.Qh.yh["dc"]
    };
    var K = function(a) {
        this.Ie = a;
        this.eg = false;
        this.Vg = null;
        this.Wg = null;
        this.ee = {
            x: 0,
            y: 0
        };
        this.kg = {};
        this.listenerList = [];
        if (this.Ie.ch.enableTouch) {
            var c = this;
            this.addListener(document, "keydown", function(a) {
                c.keyDown(a.keyCode)
            }, false);
            if (!("ontouchstart" in document.body)) {
                a.ch.debug && b("PC browser mode detected");
                this.addListener(a.Qd, "mousedown", function(a) {
                    c.Xi.call(c, a);
                    a.preventDefault()
                }, false);
                this.addListener(document, "mouseup", function(a) {
                    c.Wg = {
                        x: c.ee.x,
                        y: c.ee.y
                    };
                    if (c.eg) {
                        c.Wi.call(c, a);
                        a.preventDefault()
                    }
                }, false)
            }
            this.addListener(a.Qd, "touchstart", function(a) {
                c.Xi.call(c, a.touches[0]);
                a.preventDefault()
            }, false);
            this.addListener(document, "touchend", function(a) {
                c.Wg = {
                    x: c.ee.x,
                    y: c.ee.y
                };
                if (c.eg) {
                    c.Wi.call(c, a);
                    a.preventDefault()
                }
            }, false)
        }
    };
    K.prototype.vf = function(a) {
        var b = a.pageX;
        var c = a.pageY;
        var d = this.Ie.Qd.style.zoom;
        if (d) {
            var e = d.substring(0, d.length - 1) / 100;
            b /= e;
            c /= e
        }
        var f = this.Ie.canvas;
        while (f) {
            b -= f.offsetLeft;
            c -= f.offsetTop;
            f = f.offsetParent
        }
        return {
            x: b,
            y: c
        }
    };
    K.prototype.keyDown = function(a) {
        this.kg[a] = true
    };
    K.prototype.Xi = function(a) {
        var b = this.vf(a);
        this.di(b.x, b.y);
        if (this.yg) {
            this.Vi(b.x, b.y);
            return false
        }
        this.eg = true;
        this.yi = (new Date).getTime();
        this.Yi = b;
        this.Qf = b;
        this.sg = b;
        return false
    };
    K.prototype.Wi = function(a) {
        this.eg = false;
        this.Wg = {
            x: this.sg.x,
            y: this.sg.y
        };
        this.Zh();
        return false
    };
    K.prototype.Dd = function() {
        this.Vg = null;
        this.Wg = null
    };
    K.prototype.Cd = function() {
        this.kg = {}
    };
    K.prototype._f = function(a) {
        return this.kg[a] || false
    };
    K.prototype.Vi = function(a, b) {
        if (!(this.ah && this.ah(a, b))) {
            this.Vg = {
                x: a,
                y: b
            };
            if (this.yg && this.yg !== true) {
                this.keyDown(this.yg)
            }
            if (!this.yg && this.Ve && this.Ve.Ui) {
                this.keyDown(this.Ve.Ui)
            }
        }
    };
    K.prototype.Zh = function() {
        if (!this.sg || this.sg.x == this.Qf.x && this.sg.y == this.Qf.y) {
            this.Vi(this.Yi.x, this.Yi.y);
            return
        }
        if (this.Ve) {
            var a = Math.atan2(this.sg.x - this.Qf.x, -this.sg.y + this.Qf.y) / Math.PI * 180;
            for (var b in this.Ve) {
                var c = b.split(":");
                if (c.length == 2) {
                    if (c[0] <= a && a <= c[1] || c[0] <= a + 360 && a + 360 <= c[1]) {
                        this.keyDown(this.Ve[b])
                    }
                }
            }
        }
    };
    K.prototype.di = function(a, b) {
        return
    };
    K.prototype.addListener = function(a, b, c, d) {
        this.listenerList.push([a, b, c]);
        a.addEventListener(b, c, d)
    };
    K.prototype.removeAllListeners = function() {
        var a = this.listenerList.length;
        for (var b = 0; b < a; b++) {
            var c = this.listenerList[b];
            c[0].removeEventListener(c[1], c[2], false);
            this.listenerList[b] = null
        }
    };
    var L = function(a) {
        var b = a[0] * a[3] - a[1] * a[2];
        if (b == 0) {
            d("revTransform: detT == 0")
        }
        return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b]
    };
    var M = function(a, b) {
        if (a[2] == 0 && a[1] == 0) {
            if (b[2] == 0 && b[1] == 0) {
                return [a[0] * b[0], 0, 0, a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]]
            } else {
                return [a[0] * b[0], a[3] * b[1], a[0] * b[2], a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]]
            }
        } else {
            if (b[2] == 0 && b[1] == 0) {
                return [a[0] * b[0], a[1] * b[0], a[2] * b[3], a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
            } else {
                return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
            }
        }
    };
    var N = function(a, b, c) {
        var d = [];
        var e = b[0];
        var f = b[1];
        var g = b[2];
        var h = b[3];
        var i = f - e;
        var j = h - g;
        var k = c ? [a[0] * e + a[2] * g + a[4], a[1] * e + a[3] * g + a[5]] : l(a, e, g);
        var m = a[0] * i;
        var n = a[1] * i;
        var o = a[2] * j;
        var p = a[3] * j;
        if (m >= 0) {
            if (o >= 0) {
                d[1] = k[0] + m + o;
                d[0] = k[0]
            } else {
                d[1] = k[0] + m;
                d[0] = k[0] + o
            }
        } else {
            if (o >= 0) {
                d[1] = k[0] + o;
                d[0] = k[0] + m
            } else {
                d[1] = k[0];
                d[0] = k[0] + m + o
            }
        }
        if (n >= 0) {
            if (p >= 0) {
                d[3] = k[1] + n + p;
                d[2] = k[1]
            } else {
                d[3] = k[1] + n;
                d[2] = k[1] + p
            }
        } else {
            if (p >= 0) {
                d[3] = k[1] + p;
                d[2] = k[1] + n
            } else {
                d[3] = k[1];
                d[2] = k[1] + n + p
            }
        }
        return d
    };
    var O = function(a) {
        var b = [a >> 16 & 255, a >> 8 & 255, a & 255, (a >> 24 & 255) / 255];
        return "rgba(" + b.join() + ")"
    };
    var P = function(a, b, c) {
        var d = function(a) {
            return Math.round(a * 100)
        };
        if (c) {
            if (d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1])) {
                return true
            }
        } else {
            if (d(a[4]) == d(b[4]) && d(a[5]) == d(b[5]) && d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1])) {
                return true
            }
        }
        return false
    };
    var Q = function(a, b) {
        if (a.length != b.length) {
            return false
        }
        var c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            var f = b[d];
            for (var g = 0; g < 8; g++) {
                if (e[g] != f[g]) {
                    return false
                }
            }
        }
        return true
    };
    var R = function(a, b) {
        var c = a.length;
        if (!c) {
            return O(b)
        }
        var d = [b >> 16 & 255, b >> 8 & 255, b & 255, b >> 24 & 255];
        for (var e = c - 1; e >= 0; e--) {
            var f = a[e];
            d[0] = Math.max(0, Math.min(255, d[0] * f[0] / 256 + f[4])) | 0;
            d[1] = Math.max(0, Math.min(255, d[1] * f[1] / 256 + f[5])) | 0;
            d[2] = Math.max(0, Math.min(255, d[2] * f[2] / 256 + f[6])) | 0;
            d[3] = Math.max(0, Math.min(255, d[3] * f[3] / 256 + f[7]))
        }
        d[3] /= 255;
        return "rgba(" + d.join() + ")"
    };
    var S = function(a) {
        return function(b, c) {
            if (!c.width) {
                return c
            }
            var d = b.length;
            if (!d) {
                return c
            }
            var e = c.width;
            var f = c.height;
            var g = e * f;
            for (var h = 0; h < d; h++) {
                g += "-" + b[h].join()
            }
            var i = a.getColoredImage(g, c);
            if (i) {
                return i
            }
            i = Y(b, c);
            a.cacheColoredImage(g, c, i);
            Y.hh = null;
            return i
        }
    };
    var T = function(a, b) {
        if (!b.width) {
            return b
        }
        var c = a.length;
        if (!c) {
            return b
        }
        var e = b.width;
        var f = b.height;
        var g = Y.hh || (Y.hh = cb.getFreeCanvas());
        g.width = e;
        g.height = f;
        var h = g.getContext("2d");
        if (a.length === 1) {
            var i = a[0];
            if (i[0] === 256 && i[1] === 256 && i[2] === 256 && i[4] === 0 && i[5] === 0 && i[6] === 0) {
                h.globalAlpha = i[3] / 256;
                h.drawImage(b, 0, 0);
                return g
            }
        }
        h.drawImage(b, 0, 0);
        h.globalCompositeOperation = "multiply";
        h.fillStyle = "rgba(255,255,255,1)";
        h.fillRect(0, 0, e, f);
        var j = Y.Mc || (Y.Mc = cb.getFreeCanvas());
        j.width = e;
        j.height = f;
        var k = j.getContext("2d");
        k.drawImage(b, 0, 0);
        k.globalCompositeOperation = "source-atop";
        k.fillStyle = "rgba(255,255,255,1)";
        k.fillRect(0, 0, e, f);
        for (var l = c - 1; l >= 0; l--) {
            var i = a[l];
            var m = [];
            var n = false;
            for (var o = 0; o < 3; o++) {
                if (i[o] != 256) {
                    n = true
                }
                m.push(i[o] / 256 * 255 | 0)
            }
            if (n) {
                h.globalCompositeOperation = "multiply";
                h.fillStyle = "rgb(" + m.join() + ")";
                h.fillRect(0, 0, e, f)
            }
            var p = [];
            var q = false;
            var r = [];
            var s = false;
            for (var o = 4; o < 7; o++) {
                var t = i[o];
                if (t === 0) {
                    p.push(0);
                    r.push(0)
                } else if (t > 0) {
                    p.push(t);
                    r.push(0);
                    q = true
                } else {
                    p.push(0);
                    r.push(-t);
                    s = true
                }
            }
            if (q) {
                h.globalCompositeOperation = "lighter";
                h.fillStyle = "rgba(" + p.join() + ",1)";
                h.fillRect(0, 0, e, f)
            }
            if (s) {
                h.globalCompositeOperation = "difference";
                h.fillStyle = "rgba(255,255,255,1)";
                h.fillRect(0, 0, e, f);
                h.globalCompositeOperation = "lighter";
                h.fillStyle = "rgba(" + r.join() + ",1)";
                h.fillRect(0, 0, e, f);
                h.globalCompositeOperation = "difference";
                h.fillStyle = "rgba(255,255,255,1)";
                h.fillRect(0, 0, e, f)
            }
            if (i[3] < 256) {
                k.globalCompositeOperation = "destination-in";
                k.globalAlpha = i[3] / 256;
                k.fillRect(0, 0, e, f)
            }
            if (i[7]) {
                if (i[7] > 0) {
                    k.globalCompositeOperation = "lighter";
                    k.globalAlpha = i[7] / 255;
                    k.fillRect(0, 0, e, f)
                }
                d("[transformImageColor] addAlpha detected. not support")
            }
        }
        h.globalCompositeOperation = "destination-in";
        h.globalAlpha = 1;
        h.drawImage(j, 0, 0);
        return g
    };
    var U = function(a) {
        if (/Chrome\//.test(a)) {
            return parseFloat(a.split("Chrome/")[1])
        }
        return 0
    };
    var V = function(a) {
        if (/(iPhone|iPad|iPod)/.test(a) && /Safari\//.test(a)) {
            return parseFloat(a.split("Version/")[1])
        }
        return 0
    };
    var W = function() {
        var a = document.createElement("canvas").getContext("2d");
        return ["difference", "multiply"].every(function(b) {
            a.globalCompositeOperation = b;
            return a.globalCompositeOperation === b
        })
    };
    var X = function(a, b) {
        var c = false;
        if (W()) {
            if (U(navigator.userAgent) >= 40 || V(navigator.userAgent) >= 8) {
                c = true;
                if (a) {
                    c = false
                }
            }
        }
        if (c) {
            Y = T;
            if (b) {
                d("overrideTransformImageColorFunction")
            }
        }
        X = function() {}
    };
    var Y = function() {
        var a = null;
        if (navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/) && RegExp.$1 < 27) {
            var b;
            var c = function(a, d, e, f) {
                if (e * f > 65536) {
                    if (e > f) {
                        var g = e * .5 | 0;
                        c(a, d, g, f);
                        c(a + g, d, e - g, f)
                    } else {
                        var h = f * .5 | 0;
                        c(a, d, e, h);
                        c(a, d + h, e, f - h)
                    }
                } else {
                    b.push([a, d, e, f])
                }
            };
            a = function(a, d) {
                b = [];
                c(0, 0, a, d);
                return b
            }
        }
        var e = ["#ff0000", "#00ff00", "#0000ff"];
        var f = function(a, b, c, d, e, f) {
            for (var g = b.length - 1; g >= 0; g--) {
                var h = b[g];
                if (h[e] != 256) {
                    a.globalCompositeOperation = "source-over";
                    a.fillStyle = "rgb(0,0,0)";
                    a.globalAlpha = 1 - h[e] / 256;
                    a.fillRect(0, 0, c, d)
                }
                if (h[e + 4] != 0) {
                    var i = h[e + 4] / 255;
                    if (i < 0) {
                        a.globalCompositeOperation = "darker";
                        a.fillStyle = "rgb(0,0,0)";
                        i = -i
                    } else {
                        a.globalCompositeOperation = "lighter";
                        a.fillStyle = f
                    }
                    a.globalAlpha = i;
                    a.fillRect(0, 0, c, d)
                }
            }
        };
        return function(b, c) {
            if (!c.width) {
                return c
            }
            var g = b.length;
            if (!g) {
                return c
            }
            var h = c.width;
            var i = c.height;
            var j = Y.hh || (Y.hh = cb.getFreeCanvas());
            j.width = h;
            j.height = i;
            var k = j.getContext("2d");
            if (b.length == 1) {
                var l = b[0];
                if (l[0] == 256 && l[1] == 256 && l[2] == 256 && l[4] == 0 && l[5] == 0 && l[6] == 0) {
                    k.globalAlpha = l[3] / 256;
                    k.drawImage(c, 0, 0);
                    return j
                }
            }
            var m = Y.Mc || (Y.Mc = cb.getFreeCanvas());
            m.width = h;
            m.height = i;
            var n = m.getContext("2d");
            n.drawImage(c, 0, 0);
            n.globalCompositeOperation = "source-atop";
            n.fillStyle = "rgba(255,255,255,1)";
            n.fillRect(0, 0, h, i);
            for (var o = g - 1; o >= 0; o--) {
                var l = b[o];
                n.globalCompositeOperation = "destination-in";
                n.globalAlpha = Math.min(Math.max(0, l[3] / 256), 1);
                n.fillRect(0, 0, h, i);
                if (l[7]) {
                    n.globalCompositeOperation = "lighter";
                    n.fillStyle = "rgba(255,255,255,1)";
                    n.globalAlpha = l[7] / 255;
                    n.fillRect(0, 0, h, i);
                    d("[transformImageColor] addAlpha detected. not support")
                }
            }
            var p = true;
            for (var o = g - 1; o >= 0; o--) {
                var l = b[o];
                var q = l[0];
                var r = l[4];
                if (q != l[1] || q != l[2] || r != l[5] || r != l[6]) {
                    p = false;
                    break
                }
            }
            var s = a && a(h, i) || [
                [0, 0, h, i]
            ];
            if (p) {
                var t = "rgb(255,255,255)";
                if (s.length === 1) {
                    k.drawImage(c, 0, 0);
                    f(k, b, h, i, 0, t)
                } else {
                    var u = Y.regionCanvas || (Y.regionCanvas = cb.getFreeCanvas());
                    var v = u.getContext("2d");
                    for (var w = s.length - 1; w >= 0; w--) {
                        var x = s[w];
                        var y = x[0];
                        var z = x[1];
                        var A = u.width = x[2];
                        var B = u.height = x[3];
                        v.drawImage(c, y, z, A, B, 0, 0, A, B);
                        f(v, b, A, B, 0, t);
                        k.drawImage(u, y, z)
                    }
                }
            } else {
                var C = Y.Nh || (Y.Nh = []);
                var D = Y.Mh || (Y.Mh = []);
                for (var E = s.length - 1; E >= 0; E--) {
                    var x = s[E];
                    var y = x[0];
                    var z = x[1];
                    var A = x[2];
                    var B = x[3];
                    for (var w = 0; w < 3; w++) {
                        var F = D[w] || (D[w] = cb.getFreeCanvas());
                        F.width = A;
                        F.height = B;
                        var G = C[w] || (C[w] = F.getContext("2d"));
                        G.drawImage(c, y, z, A, B, 0, 0, A, B);
                        G.globalCompositeOperation = "darker";
                        G.fillStyle = e[w];
                        G.fillRect(0, 0, A, B)
                    }
                    k.globalCompositeOperation = "lighter";
                    for (var w = 0; w < 3; w++) {
                        f(C[w], b, A, B, w, e[w]);
                        k.drawImage(D[w], y, z)
                    }
                }
            }
            k.globalCompositeOperation = "destination-in";
            k.globalAlpha = 1;
            k.drawImage(m, 0, 0);
            return j
        }
    }();
    var Z = function(a, b) {
        a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        if (b == 0) {
            return a.split("\n")
        }
        var c = [];
        var d = "";
        var e = 0;
        var f = 0;
        var g = "";
        var h = a.length;
        for (var i = 0; i < h; i++) {
            var j = a.charAt(i);
            var l = k(j) ? 1 : 2;
            if (j == "\n") {
                if (e + f > b) {
                    c.push(d);
                    c.push(g)
                } else {
                    c.push(d + g)
                }
                d = "";
                e = 0;
                g = "";
                f = 0
            } else {
                if (f + l > b) {
                    if (d == "") {
                        c.push(g)
                    } else {
                        c.push(d);
                        c.push(g);
                        d = "";
                        e = 0
                    }
                    g = "";
                    f = 0
                }
                g += j;
                f += l
            }
            if (j == " " || i == h - 1) {
                if (e + f > b) {
                    c.push(d);
                    d = g;
                    e = f
                } else {
                    d += g;
                    e += f
                }
                g = "";
                f = 0
            }
        }
        c.push(d);
        return c
    };
    var $ = function(a, b) {
        var c = b.Rf;
        var e = b.gj;
        if (e) {
            var f;
            if (e.charAt(0) == "/" || e.charAt(0) == ".") {
                f = e
            } else {
                f = a.Cc + ":" + e
            }
            var g = D(a, f);
            if (g[0]) {
                var h = g[0].hj[g[1]];
                if (typeof h === "undefiend") {
                    d("Cannot found:" + e, a, b)
                } else {
                    c = h + ""
                }
            } else {
                d("Invalid movie clip name specified:" + e, a, b)
            }
        }
        return c
    };
    var _ = function(a, b, d, e, f, g, j) {
        var k = "";
        var m = b.gi[d];
        var n = [{
            cmd: "SolidFill",
            Kd: e,
            aj: i.zb
        }];
        var o = function() {
            var a;
            var b;
            var d;
            var e;
            var f;
            var g;
            var j;
            var m;
            var n;
            var o;
            var p = function(a) {
                var b = [];
                var c = a.length;
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (e.he != null) {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            he: e.he,
                            ke: e.ke,
                            pj: e.oj,
                            sj: e.rj
                        })
                    } else {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            pj: e.oj,
                            sj: e.rj
                        })
                    }
                }
                return b
            };
            var q = function(a) {
                if (!m.length) {
                    return
                }
                if (f != 0) {
                    b[f - 1] = b[f - 1] || [];
                    b[f - 1].push(m)
                } else if (g != 0 && j != 0) {
                    if (o[g - 1].aj == i.zb) {
                        e[g - 1] = e[g - 1] || [];
                        e[g - 1].push(m)
                    } else if (o[j - 1].aj == i.zb) {
                        e[j - 1] = e[j - 1] || [];
                        e[j - 1].push(m)
                    }
                }
                if (g != 0) {
                    var c = g - 1;
                    if (a) {
                        c = 0
                    }
                    d[c] = d[c] || [];
                    d[c].push(m)
                }
                if (j != 0) {
                    var c = j - 1;
                    if (a) {
                        c = 0
                    }
                    d[c] = d[c] || [];
                    d[c].push(p(m))
                }
                m = []
            };
            var r = function() {
                a.push({
                    Bg: n,
                    Qe: o,
                    zg: b,
                    Ne: d,
                    Lg: e
                });
                b = [];
                d = [];
                e = []
            };
            var s = function(a, b) {
                k += "ib.beginPath();";
                v(a);
                var c = b.length;
                for (var d = 0; d < c; d++) {
                    var e = b[d];
                    k += "ib.moveTo(" + e[0].oj / 20 + "," + e[0].rj / 20 + ");";
                    var f = e.length;
                    for (var g = 0; g < f; g++) {
                        var h = e[g];
                        if (h.he != null) {
                            k += "ib.quadraticCurveTo(" + h.he / 20 + "," + h.ke / 20 + "," + h.pj / 20 + "," + h.sj / 20 + ");"
                        } else {
                            k += "ib.lineTo(" + h.pj / 20 + "," + h.sj / 20 + ");"
                        }
                    }
                }
                k += "ib.stroke();"
            };
            var t = function(a, b) {
                if (!b) {
                    return a
                }
                var c;
                var d = {};
                c = l(b, a.oj, a.rj);
                d.oj = c[0];
                d.rj = c[1];
                c = l(b, a.pj, a.sj);
                d.pj = c[0];
                d.sj = c[1];
                if (a.he != null) {
                    c = l(b, a.he, a.ke);
                    d.he = c[0];
                    d.ke = c[1]
                }
                return d
            };
            var u = function(a) {
                do {
                    var b = [];
                    var c = false;
                    var d = a.length;
                    for (var e = 0; e < d; e++) {
                        var f = b.length;
                        for (var g = 0; g < f; g++) {
                            var h = a[e].length - 1;
                            var i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]);
                                c = true;
                                break
                            } else if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]);
                                c = true;
                                break
                            }
                        }
                        if (g == b.length) {
                            b.push(a[e])
                        }
                    }
                    a = b
                } while (c);
                return a
            };
            var v = function(a) {
                if (a.width != null) {
                    var b = a.width / 20;
                    k += "ib.lineWidth=" + b + "*jb<1?1/jb:" + b + ";"
                }
                if (a.Kd != null) {
                    k += "ib.strokeStyle=kb(lb," + a.Kd + ");"
                }
            };
            var w = function(a) {
                var b = null;
                switch (a.aj) {
                    case i.zb:
                        k += "ib.fillStyle=kb(lb," + a.Kd + ");";
                        break;
                    case i.yb:
                    case i.sb:
                    case i.wb:
                    case i.vb:
                        var d = a.Mg;
                        b = [d[0] / 20, d[1] / 20, d[2] / 20, d[3] / 20, d[4], d[5]];
                        k += "var img=mb[" + a._c + "].img;";
                        k += "if(img.width==0&&img.height==0){return false;}";
                        k += "if(lb.length) {img=nb(lb,img);}";
                        k += "ib.fillStyle=ib.createPattern(img,'repeat');";
                        break;
                    case i.ub:
                    case i.xb:
                        b = a.Mg;
                        k += "var ob;";
                        if (a.aj == i.ub) {
                            k += "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);"
                        } else {
                            k += "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);"
                        }
                        var e = a.zf.Bh.length;
                        for (var f = 0; f < e; f++) {
                            var g = a.zf.Bh[f];
                            k += "ob.addColorStop(" + g.Ah / 255 + ",kb(lb, " + g.Kd + "));"
                        }
                        k += "ib.fillStyle=ob;";
                        break;
                    default:
                        c("renderShape.setFillStyle: unknown draw type called: " + a.aj);
                        break
                }
                return b
            };
            var x = function(a, b) {
                if (b.aj != i.sb) {
                    return false
                }
                var c = b.Mg;
                if (!c || c[0] != c[3] || c[1] != 0 || c[2] != 0) {
                    return false
                }
                if (a.length != 1) {
                    return false
                }
                var d = a[0];
                if (d.length != 4) {
                    return false
                }
                var e = [];
                for (var f = 0; f < 4; f++) {
                    var g = d[f];
                    if (g.he || g.ke) return false;
                    e[e.length] = {
                        x: g.pj - g.oj,
                        y: g.sj - g.rj
                    }
                }
                if (e[0].x == 0 && e[1].y == 0 && e[2].x == 0 && e[3].y == 0 && e[0].y == -e[2].y && e[1].x == -e[3].x || e[0].y == 0 && e[1].x == 0 && e[2].y == 0 && e[3].x == 0 && e[0].x == -e[2].x && e[1].y == -e[3].y) {
                    var h = [c[0] / 20, c[1], c[2], c[3] / 20, c[4], c[5]];
                    var j = b._c;
                    k += "var img=mb[" + j + "].img;";
                    k += "if(img.width==0&&img.height==0){return false;}";
                    k += "if(lb.length) {img=nb(lb,img);}";
                    k += "ib.transform(" + h.join() + ");";
                    k += "ib.drawImage(img, 0, 0);";
                    k += "ib.transform(" + L(h).join() + ");";
                    return true
                }
                return false
            };
            return function(i, l, p, v) {
                a = [];
                o = i;
                n = l;
                b = [];
                d = [];
                e = [];
                f = 0;
                g = 0;
                j = 0;
                m = [];
                var y = 0;
                var z = 0;
                var A = p.length;
                for (var B = 0; B < A; B++) {
                    var C = p[B];
                    switch (C.aj) {
                        case h.tb:
                            var D = y + C.he;
                            var E = z + C.ke;
                            var F = D + C.Wc;
                            var G = E + C.Xc;
                            m.push({
                                oj: y,
                                rj: z,
                                he: D,
                                ke: E,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Ab:
                            var F = y + C.x;
                            var G = z + C.y;
                            m.push({
                                oj: y,
                                rj: z,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Bb:
                            q(v);
                            if (C.Bg || C.Qe) {
                                r();
                                n = C.Bg || n;
                                o = C.Qe || o
                            }
                            if (C.Ae != null) {
                                y = C.Ae
                            }
                            if (C.Be != null) {
                                z = C.Be
                            }
                            if (C.Ag != null) {
                                f = C.Ag
                            }
                            if (C.Oe != null) {
                                g = C.Oe
                            }
                            if (C.Pe != null) {
                                j = C.Pe
                            }
                            break;
                        default:
                            c("drawObject.renderShape: Unknown type detected:", C.aj);
                            break
                    }
                }
                q(v);
                r();
                k += "ib.lineCap='round';";
                var H = a.length;
                for (var B = 0; B < H; B++) {
                    var I = a[B];
                    n = I.Bg;
                    o = I.Qe;
                    b = I.zg;
                    d = I.Ne;
                    e = I.Lg;
                    if (!v) {
                        var J = e.length;
                        for (var K = 0; K < J; K++) {
                            var M = e[K];
                            if (M) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, M)
                            }
                        }
                    }
                    var O = d.length;
                    for (var K = 0; K < O; K++) {
                        var P = d[K];
                        var Q;
                        if (P) {
                            P = u(P);
                            if (x(P, o[K])) continue;
                            if (!v) {
                                var R = w(o[K]);
                                if (R) {
                                    k += "ib.transform(" + R.join() + ");"
                                }
                                Q = R && L(R) || null
                            }
                            if (!v || B == 0 && K == 0) {
                                k += "ib.beginPath();"
                            }
                            var S = P.length;
                            for (var T = 0; T < S; T++) {
                                var U = P[T];
                                if (U) {
                                    var V = t(U[0], Q);
                                    k += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    var W = U.length;
                                    for (var X = 0; X < U.length; X++) {
                                        var Y = t(U[X], Q);
                                        if (Y.he != null) {
                                            k += "ib.quadraticCurveTo(" + Y.he / 20 + "," + Y.ke / 20 + "," + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        } else {
                                            k += "ib.lineTo(" + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        }
                                    }
                                }
                            }
                            if (v) {
                                if (B == a.length - 1 && K == d.length - 1) {
                                    k += "ib.clip();";
                                    k += "if(ib.globalCompositeOperation!='source-over'){";
                                    k += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';";
                                    k += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);";
                                    k += "ib.drawImage(copiedCanvas,0,0);ib.restore();}"
                                }
                            } else {
                                k += "ib.fill();";
                                if (Q) {
                                    k += "ib.transform(" + Q.join() + ");"
                                }
                            }
                        }
                    }
                    if (!v) {
                        var Z = b.length;
                        for (var K = 0; K < Z; K++) {
                            var M = b[K];
                            M && s(n[K], M)
                        }
                    }
                }
            }
        }();
        o(n, null, m, f);
        return k
    };
    var ab = function(a, b, c, d, e, f, g, h, i) {
        var j = [];
        var k = 0;
        var l = 0;
        var m = a.length;
        var n;
        var o;
        var p;
        var q;
        while (k < m) {
            n = 0;
            o = [];
            p = [];
            q = 0;
            for (; k < m; k++) {
                var r = a.charCodeAt(k);
                var s = -1;
                if (i.multiline == 1 && r == 10) {
                    if (n + q > b) {
                        k -= p.length - 1;
                        break
                    } else {
                        k++;
                        o = o.concat(p);
                        n += q
                    }
                    break
                }
                for (var t in g.Jd) {
                    if (g.Jd[t] == r) {
                        s = t;
                        break
                    }
                }
                if (s != -1) {
                    var u = g.We[s];
                    if (q + u > b) {
                        if (o.length) {
                            k -= p.length
                        } else {
                            if (u > b && p.length == 0) {
                                o.push(s);
                                n = u;
                                k++;
                                break
                            }
                            o = o.concat(p);
                            n += q
                        }
                        break
                    } else {
                        p.push(s);
                        q += u
                    }
                    if (r == 32 || k == m - 1) {
                        if (i.multiline == 1 && i.mj == 1 && n + q > b) {
                            k -= p.length - 1;
                            break
                        }
                        o = o.concat(p);
                        n += q;
                        q = 0;
                        p = []
                    }
                }
            }
            var v = 0;
            switch (i.align) {
                case 1:
                    v = (d - c) / h * 20 - n;
                    break;
                case 2:
                case 3:
                    v = ((d - c) / h * 20 - n) / 2;
                    break;
                default:
                    break
            }
            j.push({
                indices: o,
                align: v / 20
            })
        }
        return j
    };
    var bb = function(a) {
        var b = a.width;
        var c = a.height;
        if (b * c <= 65536 || b >= 4096 || c >= 4096) {
            return
        }
        var d = document.createElement("div");
        d.style.width = b + "px";
        d.style.height = c + "px";
        d.style.overflow = "hidden";
        var e = a.parentNode;
        e.insertBefore(d, a);
        e.removeChild(a);
        d.appendChild(a);
        if (b > c) {
            a.width = 4096
        } else {
            a.height = 4096
        }
    };
    var cb = function(a) {
        this._cacheMaxTotalSize = a || 15728640;
        this._cacheSize = 0;
        this._coloredImageCache = {};
        this._imageInfoCache = {};
        this._usedCanvases = []
    };
    cb._freeCanvases = [];
    cb.getFreeCanvas = function() {
        return cb._freeCanvases.pop() || document.createElement("canvas")
    };
    cb.destroyCanvas = function(a) {
        a.width = a.height = 16;
        cb._freeCanvases.push(a)
    };
    cb.prototype.getImageInfo = function(a) {
        return this._imageInfoCache[a]
    };
    cb.prototype.cacheImageInfo = function(a, b) {
        if (!b) {
            return
        }
        var c = b.img;
        var d = c.width * c.height << 2;
        if (this._cacheSize + d > this._cacheMaxTotalSize) {
            this.clearCache()
        }
        this._imageInfoCache[a] = b;
        this._cacheSize += d;
        this._usedCanvases.push(c)
    };
    cb.prototype.getColoredImage = function(a, b) {
        var c = this._coloredImageCache[a];
        if (c) {
            var d = c.length;
            for (var e = 0; e < d; e++) {
                var f = c[e];
                if (f[0] == b) {
                    return f[1]
                }
            }
        }
        return null
    };
    cb.prototype.cacheColoredImage = function(a, b, c) {
        var d = c.width * c.height << 2;
        var e = this._coloredImageCache[a] || (this._coloredImageCache[a] = []);
        if (this._cacheSize + d > this._cacheMaxTotalSize) {
            this.clearCache()
        }
        e.push([b, c]);
        this._cacheSize += d;
        this._usedCanvases.push(c)
    };
    cb.prototype.clearCache = function() {
        this._imageInfoCache = {};
        this._coloredImageCache = {};
        this._cacheSize = 0;
        var a = this._usedCanvases;
        var b = cb._freeCanvases;
        var c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            e.width = e.height = 16;
            b.push(e)
        }
        this._usedCanvases = []
    };
    var db = function(a) {
        this.Ie = a;
        this.Qd = a.Qd;
        this.qd = {};
        this.od = {};
        this.nd = {};
        this.Rh = 1;
        this.cacheController = new cb(a.ch.cacheMaxTotalSize);
        this.Zi = a.ch.cacheColoredImage ? S(this.cacheController) : Y
    };
    db.sd = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    };
    db.prototype._h = function(a) {
        this._i = a[1] - a[0];
        this.$i = a[3] - a[2];
        if (!this.be) {
            var c;
            if (this.Qd.tagName.toLowerCase() == "canvas") {
                c = this.Ie.canvas = this.Qd
            } else {
                c = this.Ie.canvas = document.createElement("canvas");
                this.Qd.appendChild(c)
            }
            var e = this._i / 20;
            var f = this.$i / 20;
            var g = this.Ie.ch;
            var h = null;
            var i;
            var j;
            var k;
            if (g.width || g.height) {
                if (g.fixRatio) {
                    i = g.width && g.width / e || g.height && g.height / f || 1;
                    var l = e * i | 0;
                    var m = f * i | 0;
                    j = l / e;
                    k = m / f;
                    e = l;
                    f = m
                } else {
                    var j = g.width && g.width / e || 1;
                    var k = g.height && g.height / f || 1;
                    e = g.width || e;
                    f = g.height || f
                }
                h = [j, 0, 0, k, 0, 0];
                i = j > k ? j : k
            } else {
                i = 1
            }
            this.Ah = i;
            if (g.frameRect) {
                var n = g.frameRect;
                e = n[2] * (j || i);
                f = n[3] * (k || i);
                if (!h) {
                    h = [1, 0, 0, 1, 0, 0]
                }
                h[4] = -n[0] * (j || i);
                h[5] = -n[1] * (k || i)
            }
            if (c.width != (e | 0)) {
                g.debug && b("set canvas width to " + (e | 0));
                c.width = e | 0
            }
            if (c.height != (f | 0)) {
                g.debug && b("set canvas height to " + (f | 0));
                c.height = f | 0
            }
            this.frameWidth = c.width;
            this.frameHeight = c.height;
            g._enableWorkaroundForUnicolor && bb(c);
            this.width = h && e / h[0] || e;
            this.height = h && f / h[3] || f;
            var o = c.getContext("2d");
            this.be = o;
            if (h) {
                if (g.origin) {
                    if (g.frameRect) {
                        d("option.origin is ignored because option.frameRect is specified.")
                    } else {
                        h[4] = g.origin[0];
                        h[5] = g.origin[1]
                    }
                }
                o.transform.apply(o, h);
                this.Ie.Sh = h;
                this.Rh = db.sd(h)
            }
        }
    };
    db.prototype.Hh = function(a, c, d, e) {
        var f = this.Ie;
        var g = f.ch;
        var h = this.be;
        if (!h) {
            return
        }
        if (!a) {
            var i = h.canvas;
            if (f.$c != null) {
                h.fillStyle = O(f.$c);
                h.fillRect(0, 0, this.width + 1, this.height)
            } else {
                h.clearRect(0, 0, this.width + 1, this.height)
            }
            h.save();
            a = this.Ie.Qh;
            c = []
        }
        if (!a.yh.wc) {
            return
        }
        var j = h.globalCompositeOperation;
        for (var k in g.operation) {
            if (k == a.yh["jc"]) {
                h.globalCompositeOperation = g.operation[k]
            }
        }
        e = g.shapeDetail && g.shapeDetail[a.yh["jc"]] || e;
        var l = a.Pg;
        var m = a.yh["dc"];
        var n = [];
        var o = [];
        for (var p in a.we) {
            p < 65536 && (o[o.length] = p)
        }
        o.sort(function(a, b) {
            return a - b
        });
        var q = this.cacheController;
        var r = o.length;
        var s = a.ue;
        for (var t = 0; t < r; t++) {
            var u = a.we[o[t]];
            var v = u.id;
            var w = l.Df[v];
            var x = l.hf[m][v];
            var y = false;
            var z = d || this.Rh;
            var A = s[u.wd];
            if (x.Ed) {
                h.save();
                n.push(x.Ed);
                y = true
            }
            var B = null;
            var C = a.zd[v];
            var D = x.ie;
            if (D && D[0] == 256 && D[1] == 256 && D[2] == 256 && D[3] == 256 && D[4] == 0 && D[5] == 0 && D[6] == 0 && D[7] == 0) {
                D = null
            }
            D && c.push(D);
            if (C) {
                var E = C.yh;
                if (E.zc != 0 && E.Bc != 0) {
                    if (!C.ag) {
                        B = x.Mg
                    } else {
                        B = C.sf()
                    }
                    if (B) {
                        if (!y) h.save();
                        h.transform.apply(h, B);
                        z *= db.sd(B)
                    }
                    this.Hh(C, c, z, e)
                }
            } else if (A.aj == 34) {
                B = x.Mg;
                if (B) {
                    if (!y) h.save();
                    h.transform.apply(h, B);
                    z *= db.sd(B)
                }
            } else {
                B = x.Mg;
                if (B) {
                    if (!y) h.save();
                    h.transform.apply(h, B);
                    z *= db.sd(B)
                }
                var F = "";
                if (A.aj == 37) {
                    F = $(a, A)
                }
                var G = A.id + s["name"];
                if (y) {
                    var H = h.globalCompositeOperation;
                    if (H != "source-over") {
                        var i = h.canvas;
                        var I = cb.getFreeCanvas();
                        I.width = this.frameWidth;
                        I.height = this.frameHeight;
                        I.getContext("2d").drawImage(i, 0, 0);
                        h.globalCompositeOperation = H
                    }(this.nd[G] || (this.nd[G] = fb(f, A, true, s)))(f, h, A, x.Mg, c, F, R, this.Zi, Z, z, ab, _, I, s);
                    if (I) {
                        cb.destroyCanvas(I);
                        I = null
                    }
                    h.save()
                } else {
                    var J = g.shapeDetail;
                    var K = this.qd[G] || J && (J[G] && J[G].method || e && e.method || J.all && J.all.method);
                    this.qd[G] || (this.qd[G] = A.aj != 37 && K || "func");
                    var M = false;
                    if (K == "cache") {
                        if (c && c.length) {
                            var N = ",";
                            var P = c.length;
                            for (var Q = 0; Q < P; Q++) {
                                N += c[Q].join()
                            }
                            G += N
                        }
                        var S = q.getImageInfo(G);
                        if (!S) {
                            var T = J && +(J[G] && J[G].cacheScale || e && e.cacheScale || J.all && J.all.cacheScale || this.Rh) || z;
                            var U = J && +(J[G] && J[G].adjustLineScale || e && e.adjustLineScale || J.all && J.all.adjustLineScale);
                            var V = z;
                            U && (V = U * this.Rh);
                            var W = fb(f, A, false, s);
                            var X = A.dd;
                            var Y = (A.dd[1] - A.dd[0]) / 20;
                            var bb = (A.dd[3] - A.dd[2]) / 20;
                            if (Y * (T || 1) < this._i / 20 * this.Rh * 2 && bb * (T || 1) < this.$i / 20 * this.Rh * 2) {
                                var i = cb.getFreeCanvas();
                                i.width = Math.ceil(Y * (T || 1)) || 1;
                                i.height = Math.ceil(bb * (T || 1)) || 1;
                                g.debug && !g.suppressLog.drawCache && b("create cache for [" + A.id + "] width: " + i.width + " height:" + i.height);
                                var eb = i.getContext("2d");
                                eb.transform(i.width / Y, 0, 0, i.height / bb, 0, 0);
                                eb.transform(1, 0, 0, 1, -A.dd[0] / 20, -A.dd[2] / 20);
                                if (W(f, eb, A, x.Mg, c, F, R, this.Zi, Z, V, ab, _, null, s)) {
                                    S = {
                                        img: i,
                                        x: A.dd[0] / 20,
                                        y: A.dd[2] / 20,
                                        width: Y,
                                        height: bb,
                                        scale: T
                                    };
                                    q.cacheImageInfo(G, S)
                                } else {}
                            } else {
                                this.qd[G] = "func";
                                g.shapeDetail = g.shapeDetail || {};
                                g.shapeDetail[G] = "func";
                                g.debug && b("cache avoided: " + u.wd)
                            }
                        }
                        if (S) {
                            S.width && S.height && (S.scale && (h.drawImage(S.img, S.x, S.y, S.width, S.height) || true) || h.drawImage(S.img, S.x, S.y));
                            M = true
                        }
                    }
                    if (!M) {
                        var G = A.id + (y ? "c" : "") + s["name"];
                        (this.od[G] || (this.od[G] = fb(f, A, y, s)))(f, h, A, x.Mg, c, F, R, this.Zi, Z, z, ab, _, null, s)
                    }
                }
            }
            B && y ? h.transform.apply(h, L(B)) : h.restore();
            D && c.pop();
            if (n.length) {
                var gb = n[n.length - 1];
                var hb = o[t + 1];
                if (hb == null || hb > gb) {
                    n.pop();
                    h.restore();
                    h.restore()
                }
            }
        }
        h.globalCompositeOperation = j;
        if (a == this.Ie.Qh) {
            h.restore()
        }
    };
    var eb = function(a) {
        this.Ie = a;
        a.Sh = [1, 0, 0, 1, 0, 0];
        this.Qd = a.Qd;
        this.qd = {};
        this.od = {};
        this.nd = {};
        this.Rh = 1;
        this.Fd;
        this.tagListCursor = 0;
        this.pg = -1;
        this.qg = {};
        this.ve = [];
        a.ch.debug && b("dirty rect start");
        this.cacheController = new cb(a.ch.cacheMaxTotalSize);
        this.Zi = a.ch.cacheColoredImage ? S(this.cacheController) : Y
    };
    eb.prototype._h = function(a) {
        this._i = a[1] - a[0];
        this.$i = a[3] - a[2];
        if (!this.be) {
            var c;
            if (this.Qd.tagName.toLowerCase() == "canvas") {
                c = this.Ie.canvas = this.Qd
            } else {
                c = this.Ie.canvas = document.createElement("canvas");
                this.Qd.appendChild(c)
            }
            var e = this._i / 20;
            var f = this.$i / 20;
            var g = this.Ie.ch;
            var h = null;
            var i;
            var j;
            var k;
            if (g.width || g.height) {
                if (g.fixRatio) {
                    i = g.width && g.width / e || g.height && g.height / f || 1;
                    var l = e * i | 0;
                    var m = f * i | 0;
                    j = l / e;
                    k = m / f;
                    e = l;
                    f = m
                } else {
                    j = g.width && g.width / e || 1;
                    k = g.height && g.height / f || 1;
                    e = g.width || e;
                    f = g.height || f
                }
                h = [j, 0, 0, k, 0, 0];
                i = j > k ? j : k
            } else {
                i = 1
            }
            this.Ah = i;
            if (g.frameRect) {
                var n = g.frameRect;
                e = n[2] * (j || i);
                f = n[3] * (k || i);
                if (!h) {
                    h = [1, 0, 0, 1, 0, 0]
                }
                h[4] = -n[0] * (j || i);
                h[5] = -n[1] * (k || i)
            }
            if (c.width != (e | 0)) {
                g.debug && b("set canvas width to " + (e | 0));
                c.width = e | 0
            }
            if (c.height != (f | 0)) {
                g.debug && b("set canvas height to " + (f | 0));
                c.height = f | 0
            }
            this.frameWidth = c.width;
            this.frameHeight = c.height;
            g._enableWorkaroundForUnicolor && bb(c);
            this.width = h && e / h[0] || e;
            this.height = h && f / h[3] || f;
            var o = c.getContext("2d");
            o.getImageData(0, 0, 1, 1);
            this.be = o;
            if (h) {
                if (g.origin) {
                    if (g.frameRect) {
                        d("option.origin is ignored because option.frameRect is specified.")
                    } else {
                        h[4] = g.origin[0];
                        h[5] = g.origin[1]
                    }
                }
                this.Ie.Sh = h;
                this.Rh = db.sd(h)
            }
            if (this.Ie.$c != null) {
                c.style.backgroundColor = O(this.Ie.$c)
            }
        }
    };
    eb.prototype.Aj = function(a, b, c, d, e, f) {
        var g = [];
        if (!a) {
            a = this.Ie.Qh;
            b = this.Ie.Sh;
            c = [];
            this.Fd = 1;
            d = ""
        }
        if (!a.yh.wc) {
            return
        }
        if (!a.bg(this.pg)) {
            return a.rd
        }
        var h = [];
        var i = a.Pg;
        var j = a.yh["dc"];
        var k = this.Ie;
        var l = a.ue;
        var m = k.ch;
        for (var n in m.operation) {
            if (n == a.yh["jc"]) {
                e = m.operation[n]
            }
        }
        f = m.shapeDetail && m.shapeDetail[a.yh["jc"]] || f;
        var o = [];
        for (var p in a.we) {
            p < 65536 && (o[o.length] = p)
        }
        o.sort(function(a, b) {
            return a - b
        });
        var q = o.length;
        for (var r = 0; r < q; r++) {
            var s = a.we[o[r]];
            var t = s.id;
            var u = i.hf[j][t];
            var v = l[s.wd];
            var w;
            var x = u.ie;
            var y;
            if (x && !(x[0] == 256 && x[1] == 256 && x[2] == 256 && x[3] == 256 && x[4] == 0 && x[5] == 0 && x[6] == 0 && x[7] == 0)) {
                y = c.concat([x])
            } else {
                y = c
            }
            var z = a.zd[t];
            var A = d + ("0000" + t.toString(16)).slice(-4);
            if (u.Ed) {
                h.push([u.Ed, this.Fd]);
                g.push(this.Fd++)
            }
            if (z) {
                if (!z.ag) {
                    w = u.Mg
                } else {
                    w = z.sf()
                }
                Array.prototype.push.apply(g, this.Aj(z, w && M(b, w) || b, y, A, e, f))
            } else {
                w = u.Mg;
                if (w[0] * w[3] == w[1] * w[2]) continue;
                w = w && M(b, w) || b;
                var B = N(w, v.dd);
                var C = eb.te(B);
                var D = "";
                if (v.aj == 37) {
                    D = $(a, v)
                }
                g.push({
                    rh: u,
                    transform: w,
                    je: y,
                    vj: A,
                    operation: e || "source-over",
                    detail: f,
                    rect: C,
                    Pi: D,
                    ue: l
                })
            }
            if (h.length) {
                var E = h[h.length - 1];
                var F = E[0];
                var G = o[r + 1];
                if (G == null || G > F) {
                    g.push(-E[1]);
                    h.pop()
                }
            }
        }
        a.rd = g;
        return g
    };
    eb.sd = function(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    };
    eb.Th = function(a) {
        var b = [];
        for (var c = 0; c < 4; c++) b[c] = a[c];
        for (var c = 4; c < 6; c++) b[c] = Math.round(a[c]);
        return b
    };
    eb.te = function(a) {
        var b = [];
        b[0] = Math.floor(a[0] / 20) - 1;
        b[2] = Math.floor(a[2] / 20) - 1;
        b[1] = Math.ceil((a[1] - a[0]) / 20) + b[0] + 2;
        b[3] = Math.ceil((a[3] - a[2]) / 20) + b[2] + 2;
        return b
    };
    eb.prototype.Jc = function(a) {
        var b = this.be.canvas;
        var c = this.frameWidth - 1;
        var d = this.frameHeight - 1;
        if (a[0] > c || a[1] < 0 || a[2] > d || a[3] < 0) {
            return
        }
        var e = a[0] > 0 ? a[0] : 0;
        var f = a[1] < c ? a[1] : c;
        var g = a[2] > 0 ? a[2] : 0;
        var h = a[3] < d ? a[3] : d;
        var i = this.ve;
        for (var j = 0; j < i.length; j++) {
            var k = i[j];
            if (f < k[0] || k[1] < e || h < k[2] || k[3] < g) {
                continue
            }
            e = k[0] > e ? e : k[0];
            f = k[1] < f ? f : k[1];
            g = k[2] > g ? g : k[2];
            h = k[3] < h ? h : k[3];
            i.splice(j, 1);
            j = -1
        }
        i[i.length] = [e, f, g, h]
    };
    eb.Nd = function(a, b, c, d) {
        if (P(a.transform, b.transform, c)) {
            if (d || Q(a.je, b.je)) {
                if (a.Pi === b.Pi) {
                    return true
                }
            }
        }
        return false
    };
    eb.prototype.zj = function(a, c, d, e, f, g) {
        var h = this.Ie;
        var i = a.id + g["name"];
        var j = this.od[i] || (this.od[i] = fb(h, a, false, g));
        var k = a.dd;
        var l = (a.dd[1] - a.dd[0]) / 20;
        var m = (a.dd[3] - a.dd[2]) / 20;
        var n = this.Ie.ch;
        var o = n.cacheMaxShapeSize || 2;
        if (l * (e || 1) > this._i / 20 * this.Rh * o || m * (e || 1) > this.$i / 20 * this.Rh * o) {
            return null
        }
        var p = cb.getFreeCanvas();
        p.width = Math.ceil(l * (e || 1)) || 1;
        p.height = Math.ceil(m * (e || 1)) || 1;
        n.debug && !n.suppressLog.drawCache && b("create cache for [" + a.id + "] width: " + p.width + " height:" + p.height);
        var q = p.getContext("2d");
        q.transform(p.width / l, 0, 0, p.height / m, 0, 0);
        q.transform(1, 0, 0, 1, -a.dd[0] / 20, -a.dd[2] / 20);
        f && (d = f * this.Rh);
        if (j(h, q, a, null, c, "", R, this.Zi, Z, d, ab, _, null, g)) {
            (p.width == 0 || p.height == 0) && (p.width = 1, p.height = 1);
            return {
                img: p,
                x: a.dd[0] / 20,
                y: a.dd[2] / 20,
                width: l,
                height: m,
                scale: e
            }
        } else {
            return null
        }
    };
    eb.prototype.Wd = function(a) {
        this.ve = [];
        var b = a.length;
        for (var c = 0; c < b; c++) {
            var d = a[c];
            if (typeof d === "number") continue;
            var e = d.vj;
            var f = this.qg[e];
            if (f) {
                if (!eb.Nd(d, f)) {
                    this.Jc(d.rect);
                    this.Jc(f.rect)
                }
                delete this.qg[e]
            } else {
                this.Jc(d.rect)
            }
        }
        for (var g in this.qg) {
            this.Jc(this.qg[g].rect);
            delete this.qg[g]
        }
    };
    eb.prototype.Ej = function() {
        var a = this.Ie;
        var c = a.ch;
        var d = c.shapeDetail;
        if (d) {
            var e = this.cacheController;
            if (d.all && d.all.preload) {
                c.debug && b("preload: all");
                var f = a.le.Ii;
                var h = f.length;
                for (var i = this.tagListCursor; i < h; i++) {
                    var j = f[i];
                    switch (j.aj) {
                        case g.Nb:
                        case g.Ob:
                        case g.Pb:
                        case g.Rb:
                        case g.Sb:
                        case g.Jb:
                            var k = j.id;
                            var l = j;
                            var m = this.qd[k] || d[k] && d[k].method || d.all && d.all.method;
                            m = l.aj != 37 && m || "func";
                            this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m);
                            if (m == "cache") {
                                var n = d[k] && d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                                var o = d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                                e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                            } else {
                                this.od[k] || (this.od[k] = fb(a, l, false, this.Ie.ue))
                            }
                            break
                    }
                }
                this.tagListCursor = h
            } else {
                for (var k in d) {
                    var l = a.ue[k];
                    if (l && d[k].preload) {
                        if (this.qd[k]) {
                            continue
                        }
                        c.debug && b("preload: " + k);
                        var m = this.qd[k] || d[k].method || d.all && d.all.method;
                        m = l.aj != 37 && m || "func";
                        this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m);
                        if (m == "cache") {
                            var n = d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                            var o = d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                            e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                        } else {
                            this.od[k] || (this.od[k] = fb(a, l, false, this.Ie.ue))
                        }
                    }
                }
            }
        }
    };
    eb.prototype.Hh = function() {
        var a = this.be;
        if (!a) {
            return
        }
        var c = this.Aj() || [];
        this.Wd(c);
        var d = this.Ie;
        var e = d.ch;
        var f = this.ve;
        var g = f.length;
        var h = a.canvas;
        a.fillStyle = O(this.Ie.$c);
        for (var i = 0; i < g; i++) {
            var j = f[i];
            if (e.transparent) {
                if (j[0] == 0 && j[1] + 1 == a.canvas.width) {
                    j[1]++
                }
                a.clearRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
            } else {
                if (j[0] == 0 && j[1] + 1 == a.canvas.width) {
                    j[1]++
                }
                a.fillRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
            }
        }
        a.fillStyle = "rgba(0,0,0,1)";
        a.save();
        a.beginPath();
        for (var i = 0; i < g; i++) {
            var j = f[i];
            a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
        }
        a.clip();
        var k = this.cacheController;
        var l = c.length;
        var m = 0;
        for (var n = 0; n < l; n++) {
            var o = c[n];
            if (typeof o === "number") {
                if (o > 0) {
                    a.save()
                } else {
                    for (; m > 0; m--) {
                        a.restore()
                    }
                    a.restore()
                }
                continue
            }
            var p = o.rh;
            var q = o.transform;
            var r = o.je;
            var s = o.rect;
            var t = o.Pi;
            var u = eb.sd(q);
            var v = o.ue;
            var w = v[p.wd];
            var x = p.Ed;
            var y = false;
            for (var i = 0; i < g; i++) {
                var j = f[i];
                if (j[1] >= s[0] && s[1] >= j[0] && j[3] >= s[2] && s[3] >= j[2]) {
                    y = true;
                    break
                }
            }
            if (!y && !x) {
                continue
            }
            a.globalCompositeOperation = o.operation;
            var z = o.detail;
            if (x) {
                var A = a.globalCompositeOperation;
                if (A != "source-over") {
                    a.restore();
                    a.restore();
                    var B = cb.getFreeCanvas();
                    B.width = this.frameWidth;
                    B.height = this.frameHeight;
                    B.getContext("2d").drawImage(h, 0, 0);
                    a.save();
                    if (m > 0) {
                        a.clip()
                    } else {
                        a.save();
                        for (var i = 0; i < g; i++) {
                            var j = f[i];
                            a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
                        }
                        a.clip()
                    }
                    a.save();
                    a.globalCompositeOperation = A
                }
                a.transform.apply(a, q);
                var C = w.id + v["name"];
                (this.nd[C] || (this.nd[C] = fb(d, w, true, v)))(d, a, w, q, r, t, R, this.Zi, Z, u, ab, _, B, v);
                if (B) {
                    cb.destroyCanvas(B);
                    B = null
                }
                a.save();
                m++;
                a.transform.apply(a, L(q))
            } else {
                var C = w.id + v["name"];
                var D = e.shapeDetail;
                var E = this.qd[C] || D && (D[C] && D[C].method || z && z.method || D.all && D.all.method);
                E = w.aj != 37 && E || "func";
                this.qd[C] || (this.qd[C] = E) && e.debug && !e.suppressLog.drawCache && b("CacheMethod[" + C + "]=" + E);
                var F = false;
                if (E == "cache") {
                    var G = C;
                    if (r && r.length) {
                        var H = ",";
                        var I = r.length;
                        for (var J = 0; J < I; J++) {
                            H += r[J].join()
                        }
                        G += H
                    }
                    var K = k.getImageInfo(G);
                    if (!K) {
                        var M = D && +(D[C] && D[C].cacheScale || z && z.cacheScale || D.all && D.all.cacheScale || this.Rh) || u;
                        var N = D[C] && D[C].adjustLineScale || z && z.adjustLineScale || D.all && D.all.adjustLineScale;
                        K = this.zj(w, r, u, M, N, v);
                        K && k.cacheImageInfo(G, K);
                        if (!K) {
                            this.qd[C] = "func";
                            e.shapeDetail = e.shapeDetail || {};
                            e.shapeDetail[C] = "func";
                            e.debug && b("cache avoided: " + p.wd)
                        }
                    }
                    if (K && K.width && K.height) {
                        F = true;
                        a.save();
                        if (q[1] == 0 && q[2] == 0) {
                            var P = q[0];
                            var Q = q[3];
                            var S = P > 0 ? 1 : -1;
                            var T = Q > 0 ? 1 : -1;
                            var U = Math.round(S * K.width * P);
                            var V = Math.round(S * (K.x * P + q[4]));
                            var W = Math.round(T * K.height * Q);
                            var X = Math.round(T * (K.y * Q + q[5]));
                            a.transform(S, 0, 0, T, 0, 0);
                            a.drawImage(K.img, V, X, U, W)
                        } else {
                            a.transform.apply(a, q);
                            a.drawImage(K.img, K.x, K.y, K.width, K.height)
                        }
                        a.restore()
                    }
                }
                if (!F) {
                    var C = w.id + v["name"];
                    a.save();
                    a.transform.apply(a, q);
                    (this.od[C] || (this.od[C] = fb(d, w, false, v)))(d, a, w, p.Mg, r, t, R, this.Zi, Z, u, ab, _, null, v) || (c[n] = NaN);
                    a.restore()
                }
            }
        }
        a.restore();
        a.globalCompositeOperation = "source-over";
        this.pg = this.Ie.df;
        this.qg = {};
        for (var n = 0; n < c.length; n++) {
            var o = c[n];
            if (typeof o === "number") {
                continue
            }
            var Y = o.vj;
            this.qg[Y] = o
        }
    };
    var fb = function() {
        var a = "";
        var b = false;
        var d = function() {
            var b;
            var d;
            var e;
            var f;
            var g;
            var j;
            var k;
            var m;
            var n;
            var o;
            var p = function(a) {
                var b = [];
                var c = a.length;
                for (var d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    if (e.he != null) {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            he: e.he,
                            ke: e.ke,
                            pj: e.oj,
                            sj: e.rj
                        })
                    } else {
                        b.push({
                            oj: e.pj,
                            rj: e.sj,
                            pj: e.oj,
                            sj: e.rj
                        })
                    }
                }
                return b
            };
            var q = function(a) {
                if (!m.length) {
                    return
                }
                if (g != 0) {
                    d[g - 1] = d[g - 1] || [];
                    d[g - 1].push(m)
                } else if (j != 0 && k != 0) {
                    if (o[j - 1].aj == i.zb) {
                        f[j - 1] = f[j - 1] || [];
                        f[j - 1].push(m)
                    } else if (o[k - 1].aj == i.zb) {
                        f[k - 1] = f[k - 1] || [];
                        f[k - 1].push(m)
                    }
                }
                if (j != 0) {
                    var b = j - 1;
                    if (a) {
                        b = 0
                    }
                    e[b] = e[b] || [];
                    e[b].push(m)
                }
                if (k != 0) {
                    var b = k - 1;
                    if (a) {
                        b = 0
                    }
                    e[b] = e[b] || [];
                    e[b].push(p(m))
                }
                m = []
            };
            var r = function() {
                b.push({
                    Bg: n,
                    Qe: o,
                    zg: d,
                    Ne: e,
                    Lg: f
                });
                d = [];
                e = [];
                f = []
            };
            var s = function(b, c) {
                a += "ib.beginPath();";
                v(b);
                var d = c.length;
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    a += "ib.moveTo(" + f[0].oj / 20 + "," + f[0].rj / 20 + ");";
                    var g = f.length;
                    for (var h = 0; h < g; h++) {
                        var i = f[h];
                        if (i.he != null) {
                            a += "ib.quadraticCurveTo(" + i.he / 20 + "," + i.ke / 20 + "," + i.pj / 20 + "," + i.sj / 20 + ");"
                        } else {
                            a += "ib.lineTo(" + i.pj / 20 + "," + i.sj / 20 + ");"
                        }
                    }
                }
                a += "ib.stroke();"
            };
            var t = function(a, b) {
                if (!b) {
                    return a
                }
                var c;
                var d = {};
                c = l(b, a.oj, a.rj);
                d.oj = c[0];
                d.rj = c[1];
                c = l(b, a.pj, a.sj);
                d.pj = c[0];
                d.sj = c[1];
                if (a.he != null) {
                    c = l(b, a.he, a.ke);
                    d.he = c[0];
                    d.ke = c[1]
                }
                return d
            };
            var u = function(a) {
                do {
                    var b = [];
                    var c = false;
                    var d = a.length;
                    for (var e = 0; e < d; e++) {
                        var f = b.length;
                        for (var g = 0; g < f; g++) {
                            var h = a[e].length - 1;
                            var i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]);
                                c = true;
                                break
                            } else if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]);
                                c = true;
                                break
                            }
                        }
                        if (g == b.length) {
                            b.push(a[e])
                        }
                    }
                    a = b
                } while (c);
                return a
            };
            var v = function(b) {
                if (b.width != null) {
                    var c = b.width / 20;
                    a += "ib.lineWidth=" + c + "*jb<1?1/jb:" + c + ";"
                }
                if (b.Kd != null) {
                    a += "ib.strokeStyle=kb(lb," + b.Kd + ");"
                }
            };
            var w = function(b) {
                var d = null;
                switch (b.aj) {
                    case i.zb:
                        a += "ib.fillStyle=kb(lb," + b.Kd + ");";
                        break;
                    case i.yb:
                    case i.sb:
                    case i.wb:
                    case i.vb:
                        var e = b.Mg;
                        d = [e[0] / 20, e[1] / 20, e[2] / 20, e[3] / 20, e[4], e[5]];
                        a += "var img=mb[" + b._c + "].img;";
                        a += "if(img.width==0&&img.height==0){return false;}";
                        a += "if(lb.length) {img=nb(lb,img);}";
                        a += "ib.fillStyle=ib.createPattern(img,'repeat');";
                        break;
                    case i.ub:
                    case i.xb:
                        d = b.Mg;
                        a += "var ob;";
                        if (b.aj == i.ub) {
                            a += "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);"
                        } else {
                            a += "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);"
                        }
                        var f = b.zf.Bh.length;
                        for (var g = 0; g < f; g++) {
                            var h = b.zf.Bh[g];
                            a += "ob.addColorStop(" + h.Ah / 255 + ",kb(lb, " + h.Kd + "));"
                        }
                        a += "ib.fillStyle=ob;";
                        break;
                    default:
                        c("renderShape.setFillStyle: unknown draw type called: " + b.aj);
                        break
                }
                return d
            };
            var x = function(b, c) {
                if (c.aj != i.sb) {
                    return false
                }
                var d = c.Mg;
                if (!d || Math.abs(d[0]) != Math.abs(d[3]) || d[1] != 0 || d[2] != 0) {
                    return false
                }
                if (b.length != 1) {
                    return false
                }
                var e = b[0];
                if (e.length != 4) {
                    return false
                }
                var f = [];
                for (var g = 0; g < 4; g++) {
                    var h = e[g];
                    if (h.he || h.ke) return false;
                    f[f.length] = {
                        x: h.pj - h.oj,
                        y: h.sj - h.rj
                    }
                }
                if (f[0].x == 0 && f[1].y == 0 && f[2].x == 0 && f[3].y == 0 && f[0].y == -f[2].y && f[1].x == -f[3].x || f[0].y == 0 && f[1].x == 0 && f[2].y == 0 && f[3].x == 0 && f[0].x == -f[2].x && f[1].y == -f[3].y) {
                    var j = [d[0] / 20, d[1], d[2], d[3] / 20, d[4], d[5]];
                    var k = c._c;
                    a += "var img=mb[" + k + "].img;";
                    a += "if(img.width==0&&img.height==0){return false;}";
                    a += "if(lb.length) {img=nb(lb,img);}";
                    a += "ib.transform(" + j.join() + ");";
                    a += "ib.drawImage(img, 0, 0);";
                    a += "ib.transform(" + L(j).join() + ");";
                    return true
                }
                return false
            };
            return function(i, l, p, v) {
                b = [];
                o = i;
                n = l;
                d = [];
                e = [];
                f = [];
                g = 0;
                j = 0;
                k = 0;
                m = [];
                var y = 0;
                var z = 0;
                var A = p.length;
                for (var B = 0; B < A; B++) {
                    var C = p[B];
                    switch (C.aj) {
                        case h.tb:
                            var D = y + C.he;
                            var E = z + C.ke;
                            var F = D + C.Wc;
                            var G = E + C.Xc;
                            m.push({
                                oj: y,
                                rj: z,
                                he: D,
                                ke: E,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Ab:
                            var F = y + C.x;
                            var G = z + C.y;
                            m.push({
                                oj: y,
                                rj: z,
                                pj: F,
                                sj: G
                            });
                            y = F;
                            z = G;
                            break;
                        case h.Bb:
                            q(v);
                            if (C.Bg || C.Qe) {
                                r();
                                n = C.Bg || n;
                                o = C.Qe || o
                            }
                            if (C.Ae != null) {
                                y = C.Ae
                            }
                            if (C.Be != null) {
                                z = C.Be
                            }
                            if (C.Ag != null) {
                                g = C.Ag
                            }
                            if (C.Oe != null) {
                                j = C.Oe
                            }
                            if (C.Pe != null) {
                                k = C.Pe
                            }
                            break;
                        default:
                            c("drawObject.renderShape: Unknown type detected:", C.aj);
                            break
                    }
                }
                q(v);
                r();
                a += "ib.lineCap='round';";
                var H = b.length;
                for (var B = 0; B < H; B++) {
                    var I = b[B];
                    n = I.Bg;
                    o = I.Qe;
                    d = I.zg;
                    e = I.Ne;
                    f = I.Lg;
                    if (!v) {
                        var J = f.length;
                        for (var K = 0; K < J; K++) {
                            var M = f[K];
                            if (M) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, M)
                            }
                        }
                    }
                    var O = e.length;
                    for (var K = 0; K < O; K++) {
                        var P = e[K];
                        var Q;
                        if (P) {
                            P = u(P);
                            if (x(P, o[K])) continue;
                            if (!v) {
                                var R = w(o[K]);
                                if (R) {
                                    a += "ib.transform(" + R.join() + ");"
                                }
                                Q = R && L(R) || null
                            }
                            if (!v || B == 0 && K == 0) {
                                a += "ib.beginPath();"
                            }
                            var S = P.length;
                            for (var T = 0; T < S; T++) {
                                var U = P[T];
                                if (U) {
                                    var V = t(U[0], Q);
                                    a += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    var W = U.length;
                                    for (var X = 0; X < U.length; X++) {
                                        var Y = t(U[X], Q);
                                        if (Y.he != null) {
                                            a += "ib.quadraticCurveTo(" + Y.he / 20 + "," + Y.ke / 20 + "," + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        } else {
                                            a += "ib.lineTo(" + Y.pj / 20 + "," + Y.sj / 20 + ");"
                                        }
                                    }
                                }
                            }
                            if (v) {
                                if (B == b.length - 1 && K == e.length - 1) {
                                    a += "ib.clip();";
                                    a += "if(ib.globalCompositeOperation!='source-over'){";
                                    a += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';";
                                    a += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);";
                                    a += "ib.drawImage(copiedCanvas,0,0);ib.restore();}"
                                }
                            } else {
                                a += "ib.fill();";
                                if (Q) {
                                    a += "ib.transform(" + Q.join() + ");"
                                }
                            }
                        }
                    }
                    if (!v) {
                        var Z = d.length;
                        for (var K = 0; K < Z; K++) {
                            var M = d[K];
                            M && s(n[K], M)
                        }
                    }
                }
            }
        }();
        var e = function(b, c, e, f) {
            if (c.Mg) {
                a += "ib.transform(" + c.Mg.join() + ");"
            }
            var g = c.Bh;
            var h, j = 0,
                k = 0,
                l, m;
            var n = g.length;
            for (var o = 0; o < n; o++) {
                var p = g[o];
                if (p.Ze != null) {
                    h = f[p.Ze]
                }
                if (p.Kd != null) {
                    m = p.Kd
                }
                if (p.x != null) {
                    j = p.x
                }
                if (p.y != null) {
                    k = p.y
                }
                if (p.height != null) {
                    l = p.height
                }
                var q = p.xf.length;
                for (var r = 0; r < q; r++) {
                    var s = p.xf[r];
                    var t = l / 1024;
                    a += "ib.transform(1,0,0,1," + j / 20 + "," + k / 20 + ");";
                    a += "ib.transform(" + t + ",0,0," + t + ",0,0);";
                    d([{
                        Kd: m,
                        aj: i.zb
                    }], null, h.gi[s.Mf], e);
                    a += "ib.transform(" + 1 / t + ",0,0," + 1 / t + ",0,0);";
                    a += "ib.transform(1,0,0,1," + -j / 20 + "," + -k / 20 + ");";
                    j += s.Kc
                }
            }
            if (c.Mg) {
                a += "ib.transform(" + L(c.Mg).join() + ");"
            }
        };
        var f = function(c, d, e, f) {
            if (d.ej) {
                var g = d.dd[0] / 20 + 2;
                var h = d.dd[1] / 20 - 2;
                var i = d.dd[2] / 20 + 2;
                var j = d.dd[3] / 20 - 2;
                var k = f[d.Ze];
                var l = d.height / 1024;
                var m = (h - g) / l * 20;
                a += "var font=mb[pb.Ze];";
                a += "var glyphInfo=makeGlyphInfo(qb," + m + "," + g + "," + h + "," + i + "," + j + ",font," + l + ",pb);";
                a += "var J = glyphInfo.length;";
                a += "for (var line = 0; line < J; line++) {";
                a += "var align = glyphInfo[line].align;";
                a += "var indices = glyphInfo[line].indices;";
                a += "ib.save();";
                a += "ib.transform(1,0,0,1," + g + "," + (i + k.Xe * l / 20) + ");";
                a += "ib.transform(" + l + ",0,0," + l + ",0,0);";
                a += "ib.transform(1,0,0,1,align,0);";
                a += "for(var l = 0; l < indices.length; l++) {";
                a += "var h = indices[l];";
                a += "var clippingState = " + (e ? "{begin: l == 0 && line == 0, end: l == indices.length - 1}" : "null") + ";";
                a += "eval(renderFont(/*ib*/null,font,h,pb.Kd,clippingState,/*rb*/null,sb));";
                a += "ib.transform(1,0,0,1,font.We[h]/20.0,0);";
                a += "}";
                a += "ib.restore();";
                a += "ib.transform(1,0,0,1,0," + (k.Xe + k.Ye) * l / 20 + ");";
                a += "}";
                a += "ib.transform(1,0,0,1,0," + -(k.Xe + k.Ye) * l / 20 + "*line);"
            } else {
                var g = (d.dd[0] + d.wg) / 20;
                var h = (d.dd[1] - d.Oh) / 20;
                var i = d.dd[2] / 20;
                var j = d.dd[3] / 20;
                a += "ib.beginPath();";
                a += "ib.moveTo(" + g + "," + i + ");";
                a += "ib.lineTo(" + g + "," + j + ");";
                a += "ib.lineTo(" + h + "," + j + ");";
                a += "ib.lineTo(" + h + "," + i + ");";
                a += "ib.closePath();";
                var n = d.height / 20;
                var o = (d.height + d.vg) / 20;
                var p = d.mj && d.multiline ? Math.ceil((h - g) / n * 2) : 0;
                a += "ib.font = '" + n + "px sans-serif';";
                a += "ib.fillStyle=kb(lb," + d.Kd + ");";
                a += "ib.textBaseline='top';";
                var q = 0,
                    r = 0;
                switch (d.align) {
                    case 1:
                        a += "ib.textAlign='end';";
                        q = h - 4;
                        r = i + 2;
                        break;
                    case 2:
                        a += "ib.textAlign='center';";
                        q = (g + h) / 2 + 2;
                        r = i + 2;
                        break;
                    case 3:
                    default:
                        a += "ib.textAlign='start';";
                        q = g + 2;
                        r = i + 2;
                        break
                }
                if (b) {
                    a += "ib.textAlign='start';";
                    a += "var styles_=[{'_g':0}],offsetDiff=0,textProp='te'+'xt',colorProp='co'+'lor';";
                    a += "qb=qb.replace(/(?:([\\r\\n]+)|\\{(\\{.*?\\})\\})/g,function(match_,crlf,tb,c){";
                    a += "if(crlf){offsetDiff-=match_.length;return match_;}";
                    a += "var data_=JSON.parse(tb);var qb=data_[textProp]||'';var textLength=qb.length;var actualOffset=c+offsetDiff;";
                    a += "styles_.push({'_g':actualOffset,'Kd':data_[colorProp]});styles_.push({'_g':actualOffset+textLength});";
                    a += "offsetDiff-=match_.length-textLength;return qb;});";
                    a += "var startPos=0,c=0,defaultColor=kb(lb," + d.Kd + "),style_=styles_[0],nextStyle=styles_[1],j=0,drawString,endPos,offsetWidth_,partialString;"
                }
                a += "var ub = vb(qb," + p + ");";
                a += "var J = ub.length;";
                a += "for(var i = 0, y = " + r + "; i < J; i++, y+=" + o + ") {";
                if (b) {
                    a += "drawString=ub[i];endPos=drawString.length+c;offsetWidth_=0;";
                    switch (d.align) {
                        case 1:
                            a += "offsetWidth_-=ib.measureText(drawString).width;";
                            break;
                        case 2:
                            a += "offsetWidth_-=ib.measureText(drawString).width*0.5;";
                            break;
                        case 3:
                            break
                    }
                    a += "while(nextStyle&&nextStyle._g<endPos){partialString=drawString.slice(startPos,nextStyle._g-c);";
                    if (d.Ng) {
                        a += "ib.fillText(partialString," + q + "+offsetWidth_,y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(partialString," + q + "+offsetWidth_,y);"
                    }
                    a += "startPos=nextStyle._g-c;offsetWidth_+=ib.measureText(partialString).width;";
                    a += "++j;style_=styles_[j];nextStyle=styles_[j+1];ib.fillStyle=style_.Kd||defaultColor;}";
                    a += "startPos=style_._g-c;if(startPos<0){startPos=0;}";
                    if (d.Ng) {
                        a += "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y);"
                    }
                    a += "c+=drawString.length;startPos=0;"
                } else {
                    if (d.Ng) {
                        a += "ib.fillText(ub[i]," + q + ",y," + d.Ng + ");"
                    } else {
                        a += "ib.fillText(ub[i]," + q + ",y);"
                    }
                }
                a += "};"
            }
        };
        return function(c, h, i, j) {
            a = "";
            b = c.ch.enableStyleText;
            switch (h.aj) {
                case g.Nb:
                case g.Ob:
                case g.Pb:
                    d(h.Qe, h.Bg, h.hi, i);
                    break;
                case g.Rb:
                case g.Sb:
                    e(c, h, i, j);
                    break;
                case g.Jb:
                    f(c, h, i, j);
                    break
            }
            a += "return true";
            return new Function("sb,ib,pb,transform,lb,qb,kb,nb,vb,jb,makeGlyphInfo,renderFont,copiedCanvas,mb", a)
        }
    }();
    var gb = function(a, b) {
        return a[b + 1] * 256 + a[b]
    };
    var hb = function(a, b) {
        var c = a[b + 1] * 256 + a[b];
        if ((128 << 8 & c) != 0) {
            c |= -1 << 16
        }
        return c
    };
    var ib = function(a, b) {
        return a[b + 3] << 24 | a[b + 2] << 16 | a[b + 1] << 8 | a[b]
    };
    var jb = function(a, b) {
        return 255 << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    };
    var kb = function(a, b) {
        return a[b + 3] << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    };
    var lb = function(a, b) {
        return a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]
    };
    var mb = function(a, b) {
        var c = b;
        while (a[c]) {
            c++
        }
        return String.fromCharCode.apply(null, a.slice(b, c))
    };
    var nb = function(a, b, c) {
        return String.fromCharCode.apply(null, a.slice(b, b + c))
    };
    var ob = function(a, b) {
        var c = b;
        while (a[c]) {
            c++
        }
        var d = Cb(a.slice(b, c));
        return [d === null ? "" : d, c - b + 1]
    };
    var pb = function(a, b) {
        if ((a & 1 << b - 1) != 0) {
            return a - (1 << b)
        }
        return a
    };
    var qb = function(a, b) {
        return pb(a, b) / 65536
    };
    var rb = function(a, b, c) {
        return a[b + (c >> 3)] >> 7 - (c & 7) & 1
    };
    var sb = function(a, b, c, d) {
        if (!d) {
            return 0
        }
        var e = (b << 3) + c;
        var f = e + d;
        var g = e >> 3;
        var h = e & 7;
        var i = f >> 3;
        var j = f & 7;
        if (g == i) {
            return a[g] >> 8 - j & (1 << d) - 1
        } else {
            var k = a[g] & 255 >> h;
            for (var l = g + 1; l < i; l++) {
                k <<= 8;
                k |= a[l]
            }
            if (j == 0) {
                return k
            } else {
                return k << j | a[i] >> 8 - j
            }
        }
    };
    var tb = function(a, b, c) {
        var d = a[b] >> 3;
        c[0] = pb(sb(a, b, 5, d), d);
        c[1] = pb(sb(a, b, 5 + d, d), d);
        c[2] = pb(sb(a, b, 5 + d * 2, d), d);
        c[3] = pb(sb(a, b, 5 + d * 3, d), d);
        return Math.ceil((5 + d * 4) / 8)
    };
    var ub = function(a, b, c) {
        var d = rb(a, b, 0);
        var e = 1;
        var f = 0;
        if (d) {
            f = sb(a, b, e, 5);
            e += 5;
            c[0] = qb(sb(a, b, e, f), f);
            c[3] = qb(sb(a, b, e + f, f), f);
            e += f * 2
        } else {
            c[0] = 1;
            c[3] = 1
        }
        var g = rb(a, b, e);
        e++;
        if (g) {
            f = sb(a, b, e, 5);
            e += 5;
            c[1] = qb(sb(a, b, e, f), f);
            c[2] = qb(sb(a, b, e + f, f), f);
            e += f * 2
        } else {
            c[1] = 0;
            c[2] = 0
        }
        f = sb(a, b, e, 5);
        e += 5;
        c[4] = pb(sb(a, b, e, f), f) / 20;
        c[5] = pb(sb(a, b, e + f, f), f) / 20;
        e += f * 2;
        return Math.ceil(e / 8)
    };
    var vb = function(a, b, c, d) {
        var e = rb(a, b, 0);
        var f = rb(a, b, 1);
        var g = sb(a, b, 2, 4);
        var h = 6;
        if (f) {
            if (d) {
                var i;
                c[0] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g;
                c[1] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g;
                c[2] = (i = pb(sb(a, b, h, g), g)) == 256 ? i : (i / d | 0) * d;
                h += g
            } else {
                c[0] = pb(sb(a, b, h, g), g);
                h += g;
                c[1] = pb(sb(a, b, h, g), g);
                h += g;
                c[2] = pb(sb(a, b, h, g), g);
                h += g
            }
            c[3] = 256;
            h += g
        } else {
            c[0] = 256;
            c[1] = 256;
            c[2] = 256;
            c[3] = 256
        }
        if (e) {
            c[4] = pb(sb(a, b, h, g), g);
            h += g;
            c[5] = pb(sb(a, b, h, g), g);
            h += g;
            c[6] = pb(sb(a, b, h, g), g);
            h += g;
            c[7] = 0;
            h += g
        } else {
            c[4] = 0;
            c[5] = 0;
            c[6] = 0;
            c[7] = 0
        }
        return Math.ceil(h / 8)
    };
    var wb = function(a, b, c, d) {
        var e = a[b];
        var f = e & 128;
        var g = e & 64;
        var h = sb(a, b, 2, 4);
        var i = 6;
        if (g) {
            if (d) {
                var j;
                c[0] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[1] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[2] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h;
                c[3] = (j = pb(sb(a, b, i, h), h)) == 256 ? j : (j / d | 0) * d;
                i += h
            } else {
                c[0] = pb(sb(a, b, i, h), h);
                i += h;
                c[1] = pb(sb(a, b, i, h), h);
                i += h;
                c[2] = pb(sb(a, b, i, h), h);
                i += h;
                c[3] = pb(sb(a, b, i, h), h);
                i += h
            }
        } else {
            c[0] = 256;
            c[1] = 256;
            c[2] = 256;
            c[3] = 256
        }
        if (f) {
            c[4] = pb(sb(a, b, i, h), h);
            i += h;
            c[5] = pb(sb(a, b, i, h), h);
            i += h;
            c[6] = pb(sb(a, b, i, h), h);
            i += h;
            c[7] = pb(sb(a, b, i, h), h);
            i += h
        } else {
            c[4] = 0;
            c[5] = 0;
            c[6] = 0;
            c[7] = 0
        }
        return Math.ceil(i / 8)
    };
    var xb = function(a, b) {
        var c = ib(a, b);
        var d = c >> 31 & 1;
        var e = c >> 23 & 255;
        var f = c & 8388607;
        if (e == 255) {
            if (f == 0) {
                return d == 0 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY
            } else {
                return Number.NaN
            }
        } else if (e == 0 && f == 0) {
            return 0
        }
        return (d == 0 ? 1 : -1) * (f / Math.pow(2, 23) + 1) * Math.pow(2, e - 127)
    };
    var yb = function(a, b) {
        var c = ib(a, b);
        var d = ib(a, b + 4);
        var e = c >>> 31 & 1;
        var f = c >>> 20 & 2047;
        var g = c & 1048575;
        var h = d;
        return (e == 0 ? 1 : -1) * (g / Math.pow(2, 20) + h / Math.pow(2, 52) + 1) * Math.pow(2, f - 1023)
    };
    var zb = function(a, b, c, d) {
        var e = b;
        d.pi = sb(a, b, 0, 2);
        d.Uf = sb(a, b, 2, 2);
        var f = sb(a, b, 4, 4);
        e++;
        var g = [];
        for (var h = 0; h < f; h++) {
            var i = a[e];
            e++;
            if (c == 3) {
                var j = kb(a, e);
                e += 4
            } else {
                var j = jb(a, e);
                e += 3
            }
            g.push({
                Ah: i,
                Kd: j
            })
        }
        d.Bh = g;
        return e - b
    };
    var Ab = function(a, b, c, d) {
        if (!d) {
            a[b] = c();
            return
        }
        a.__defineGetter__(b, function() {
            delete this[b];
            return this[b] = c()
        })
    };
    var Bb = function(a, b, c, d) {
        if (!d) {
            var e = b();
            for (var f in e) {
                a[f] = e[f]
            }
            return
        }
        var g = c.length;
        for (var h = 0; h < g; h++) {
            a.__defineGetter__(c[h], function(a) {
                return function() {
                    var c = b();
                    for (var d in c) {
                        delete this[d];
                        this[d] = c[d]
                    }
                    return c[a]
                }
            }(c[h]))
        }
    };
    var Cb = function(a) {
        var b = a.map(function(a, b, c) {
            var d = a.toString(16).toUpperCase();
            if (d.length == 1) {
                return "%0" + d
            }
            return "%" + d
        });
        return Db(b.join(""))
    };
    var Db = function(a) {
        return a.replace(new RegExp("%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig"), function(a) {
            var b = parseInt(a.substring(1, 3), 16),
                c = a.length;
            return 3 == c ? String.fromCharCode(b < 160 ? b : b + 65216) : Eb.charAt((b < 160 ? b - 129 : b - 193) * 188 + (4 == c ? a.charCodeAt(3) - 64 : (b = parseInt(a.substring(4), 16)) < 127 ? b - 64 : b - 65))
        })
    };
    var Eb = function() {
        var a = '0  0 !0 "H ,H .2H!*H!+H!H/ !0a0z  +$H$   *(H#.H<H#/0/-0/.0]0).0 #p--0V0 &0 \'0/," O" ! H H/#,H%:"FH%," [" F" !e !M !," !-H (H )0!$0OH#+H#-H%+H%-0 (0 )0 *0 +0 ,0 -0 .0 /0! 0!!H +H -  +!  -c /\'H!-"[ H!,H!:"="[ny:"#$[$"[$   + " #~ ##y #H6H|H;H9HVH #H &H *H"   *\'[ &[VF,+F,/F,:%,\'F`F*!F* F+#F+"F+-F+," #+0!"yMyKy\\yh0!#732~ e" +~D~(n"e~o~"*~")7~"n~(H:y-"y-$~  ~ #732~" ~^"#!~" ~" n[!"F~[*"[+"y*~#-"y-~Y~"+~",432y"+" 0"=/"=-"=*" " " y  k4F./7432H! H!!H!"H!#H!$HOHUH!\'H!(H!)432HyH~H"#H"$HFH[H"\'H"(H")H"*H"+H",H"-H".H"H/0H#!H#"H##H#$HYHZH#\'H#(H#)H#*43H$!H$"H$#H$$HWHSH$\'H$(H$)H$*H$+H$,H$-HpH$Hb H%!H%"H%#H%$H%%H%&H%\'H%(H%)H%*40$!0$"0$#0$$0W0S0$\'0$(0$)0$*0$+0$,0$-0p0P0% 0%!0%"0%#0%$0%%0%&0%\'0%(0%)0%*0%+0%,0%-0%.0%/0& 0&!0&"0&#0&$0J0=0&\'0&(0&)0&*0&+0&,0&-0&.0&/0c0w0n0q0\'$0>0@0R0\'(0\')0d0r0l0_0\'.0\'/0f0v0e0o0u0?0D0(\'0L0()0G0x0m0}0(.0(/0K0\\0M0h7320*!0*"0*#0*$0^0i0*\'0*(0*)0**0*+0*,0*-0*.0*/0+ 0+!0+"0+#0+$0Q0k0+\'0+(0+)0+*0++0+,0+-0+.0+/0, 0,!0,"0,#0,$0T0`0,\'0,(0,)0,*0,+0,,0,-0,.0,/0- 0-!0-"0-#0-$0g0j0-\'0-(0-)0-*0-+0-,0--0-.0-/0;090:0<0806050B0.(0.)0.*0.+0.,0.-0..0./0/ 0/!0/"0/#0/$0b0X7 #\\ #M #)0#)$ #C #A #E #N #)K#s #a #z #] #);#)/ #*  #*! #*0#*$ #^ #i #*c#*f#*)7 #+! #+" #+0#+$ #Q #k #+c#+f#+K#+* #++ #+, #+- #+;#+/ #,  #,! #,0#,$ #T #` #,c#,f#,){43|! |!!|!"|!0$!$|O| !|U|!c$!f$!K$!*|!+|!,|!-|!;$!/|" |y|~|"0$"$|F|[|"c$"f$"K$"*|"+|",|"-|";$"/7432|0|#!|#"|#0$#$|Y W!|Z|#c$#f$#K$#*|#+|#,|#-|#;$#/|$ |$!|$"|$0$$$|W|S|$c$$f$$K$$*|$+|$,|$-|$;$P742F  F "F ,F! F!(F!$F!,F",F"$F#$F#,F !F #F /F!#F!+F!\'F"#F##F"+F#+F$+F" F"/F"(F#\'F#/F!-F0FFF#(F$"{{{{{{{{{{{{{I43"S "S!"S~S#"S$"$J"$="SnSeSMS*"S+"S,"S-"S:S/"$c"$w"$n"$q"U "U!"U~U#"U$yJy="UnUeU)2##$h#!$##~##$-##!o#"q0###Z#Y!#Yq0-##[##"###"+##$*###+##z##]##)<#(<#(/##,$##*!7##r0!-0!/yU##,-yy#"*$#"^#"i#"*q"*o"#!#"#"#"#h#\'<#_##l"F~[!~"+~":y!"y*~^~" "y/~+/~Y~"M~*{{{{{I743p)T%!J* #A#b$, &!!k#"?)XK~u>o!,\'^ & *i#9&:%J.-u=eiab&()Yn@%*U"\'O+)Q] DrN/$_&"_+.a(5"Ul)/L+>+(C.Q&0)=)@u(C,\'E(j\'Pp6P *P$-P]%|C&/Fh>]W* O, A -X! X!c=!ZK%c+*>P>c\')1_*-_./f,#u .(D#x "K%%K\'^##+pCp^%_/f+"K,!\'(./$;V(/U.*"K#(d#"o"L"xz"b!$O#\'V$+g$9%&;%)1%/ON/[-.+f8?"-)="AcA* E1%$ Q#/Y+(R ,/\'1-(/,"A.?Z/]%,d+*$9!\'(hv/`:J&!?% S+!-?!*z#Q)6%#*A-=\'$-,C(b&$"p\\K$+A/"oP)KT#9%%+J+0%/w=" =/ZfS,#D,/Z-"EW+@,(dpN#$e/!(?+G& M.j-+">*+@,*))T& ix !}GC+[N6#*g!D%wF(0%)$W++W./= "D#*A#/S,+X/!$c(B!!$\'OE!gq#/\';!e@e-!?EK& )F+]!QDA%+`T*>F%!/CM6A%%/(V/-`"+,J/i*"i+"@++$qx\'/,!(C&]",] .).,W,*U,Ao\'Q! W,$k!kv,=(@\'[!$6)$H^#\'D &A:E*PE/#$;Q#Up.8b%P#-P*!P\'Y"*V#.b& CKb*,O++J+9\']!=(@\')`r=+$`,+#c&+q,"\'N-\'aB*#,r(\'e+!e-+(0$oRo./o-#(\'=G+F&"N,*L/5KpE!.DGP,W,.Dy!\'F)>#+v6e+-D/.m, AT)\\#)]%p,+P!*()<%&-6u^m^.1%/.k "i )S &[!- &y["- J#)a$!==&x &-Rcc>$,@D_>e^(\'/)CxA(.m]%!/O"+6\\J$+Y++Y-!=UDN[-*/\'L-u,+(?\'Gnh*\'s+Dj,)s(D-CdZ\'HD,.M 6"(Y&(>$ W.-Z"9&$+Ao`oD+++qn\'x*d&+()s(]"(j+(/ #K.-C*#A)$)@C+=%,+ZE-N$-N$5#ar" &*"k*\'X(kz jbb"\'F%]& c&".`-#k;@.-!(W+(\\ (/$$$9$z#C#/=\\k*#*E(Se^O,d,#u+"\\-,h(TJ+]"De"(0%u#!l^%" L"T\'$5$B8/(Y!*V+-F" ^"-?".>-1%%)^e^)5%+(T+)?+-QBFBA *Z!!XUZ!+5#-+J&[_U?Z(/i+#5QZT@/"[/)@/W\'$+ >!(@<R +dHr*!ly_.E/Z\'H f]e=o).(a#G,,m*+Ku)W!ChC\\C*")=%E-#)MLyu<?$"Q,+?-,,q*)@$,R#T,*E/.+} +A,!N!!)?$)?(P !P 6#\'O%)T=?\'/^)$>+ C+,W,K%;TB6/,`#.5q*J-@%:&wXmkmS^b.0&+T&,!@,_>\'/\')$?k#d  _ V1-(N/G!L,+$}R(.,,(/!-N:s .a#,p(V _%! V))Y+)`~X"f&p`+#*n* >\\\')$RtN\'1G+,xc&#*,o,*E*V$ C$ Y%*k?S^(Gc\'e@\'>).,g#\'W+*"v!*D% K &$9u8%p,\'P!O#,^$#?+*6/!Z FJ%Uqj,$[,\'[,<c\'(\'$ #d@d*B+ (_!*l/B-=JB\'FQ#+Q,W%-.D"-[";&#!A: D%*G#!}--M/D/ !\')i)Q*p*(p*+p*,PaP*V -O!$R*/J!\'O!/JYW#"O#\'b#.Q%*TLY,9%/#>/$i "XV & &j#!/J%A*$k,,!n,"n.-R./f/L!Ve (?pK/\'h9EH)C\')^*p/V!-g,"-=(UAg,$ =/[)>q(A? l(O T%"8%\'$>-/.h"=%*S+"Z+#-\'$#$\'N!\'a-r$+_,*e+N#,,L\'/(C/x#N/-!\\-O$!/Mf$6g #J#6%##*n-R#AR.N"5(.*/))`)z()]F!\'@!!*D%6%+ d\'^ @%+-#K$\'A?$<[*-+\\.>TO,$D#Nd)X,hE\'$(X!d**wGALl([vRB &?!)ZT"/F$!+?*+G!#\'t$(.,-K9%#=LL\')$!P,F +6yO!$W%%Yn-q.^\'(QCOXF/(S >&!\'=U@!*A#+[$#*J&,=&Xu[9#>=d#-l1_$,_)E8+\'X+(0.o$*D,-G (G&#x=(./-N!*](/e+L/,.a.?"(@yX$(Z/, A)AuO )U+" &,d&b$d\'$_% L$ G"Zc(p/J #C "J J%!\'T"#?[Y%*>cb(V%*,T./i!+[!/D"/Z#\'[\\`*"E"_n*,q"Bv$\'D/_\'Ec,f*NN+x!N,:(.-"K&#h>Ad)?%s!#)B?!$Y#)b#+YBQ/"=9k.Kquq/B-$#e#\'G  GtA%|86  Q#8%$\'T&/^]OkW-/O.*Q/"@"#D%W&dX6&n- l,*L+$f*!f9o/ DpG(\'}.(M#\'A,\')D\')/!#p)$pMP g#$?$$C$#6*"b/(TtU )XG@*(BW*\'L!G).G*$xR\\K$6.a,)p*$PlP*b !C !J!$CUT")b"+C"/6#)^#<%$!O$ 6%(C>OdFEgQWQg+(b-6%-.>-/>B?.(Y.)^.+>/!DV[!$`")@"-D#*@%#+= "=$#=/S@jeU()@zkTX-"ijA:X.]>#"@(RD,d#/l;_V_!(_%B-+!fOf #f*/f+!(O$v(/e"*(Y"L$,(D!x!+m*"m/,K,*\\>Mw\'o/M/,C*$A$-NV))))s-(]#QFQ"*Q#/>$ ?(g&"/@/;(`*(b/).+C!$Q"#Q$$^&/-d$ \\R]& ).-"q$S/ N!c>!OHj -*s*(n-+(1`k$N #p,^&/V@Wx6^i &D!,\'= /= =oAxU-/\'>g_#*([.a$"paP%V#,C% Jjb-5%-.5\'1&,)E$q\'f"G% hAL-b>V.*@#"Q Q% *T!(jcV$,C?6aQ++VXA"$j#*Uoj+\'Z;(c_\\,R"f\'(O\'([\'A-J(B-0o-,L,!(/ )A)Q[WnD> \'X*m*O!+W\'$"A"^oi)Gf+W$+F- 6\'/,\'(C]tP%T"$^$(k$#5&"DwS\'bdu\'Q&_~h"X?,a*-r#C#!C!G%"#>+-X"/=$*5$5&nj++*?*)A-!@Ka-=#$,)0&a*+@+/=%"$;C )?#,F,\'U .D$MJ&Z?/w5q,*>"#rE\'.eDCxom-+\\\'()\\ J*,=*k+xpgp-$P#*P\'b"#^#/?#/F%<%&-Q(.QzQzC)H%QV,$g;F:Q/-@ !j0@%"bQ,J*/J+-J.D\']&k[+\'k, /qW\')$Ez!l/(_!E-"+f*"v "v/#()AG%.G&)G=GmG..m,\'m-,A,,N/`k/pxP#,P(gOVQ>+/i!$D0!=$[+"U.,k,++n#B$+->-$\'m!\'h*f ,f##v.*u)$(/)5T )Bb/ /(Q(]"+dt(./?+}A.+$;Y#/O\'/>hO*,C+*S (ABX/ &>+.m.^+)/?  r;% \'[\'/$e]%`!?$*\'9.e 6!)C, SZL-=Jz\'UBhB-!\'fVx!-(.,*K&.D,\'K*^ !b"/^,#i>#clnY\\$,\\,(h"+e6%+,F/#U /)$<Q#-J+(D"$kqU+Gn.E#;d".(U+}*#)O"))A%!!F#->S^+H&#(D*#E-*,E V&-^#,6S?+)>,#O--8/.5! U"/5-#"\'z \'z+_$"\'8-\'/-"v.-e!/uKLS(E"xK(B$(/"/K#!\\$+)U,A`\\zp, PP%!W%#$O/)Z" 5_S,$U;+\'Z#\':&\\,-M(Y#-W\\C++X--!\'C-\':B,)Q(\'B!)b!t(?#(H P,^,1=FR*,d<e!,))H%!,Jt*J.`AX+(A-/Z.)=X$@/B-!W-9K>\\(\'N J!5%yj"$ =\\=-A9^.k_-"\'/n=/(?*/?/\'G/?"*C#-CEY.(b/K&V%M8)=W +>!!b"-g#"V#$>#.Tp?%$J%#O&!>A?a6*#T+Q%, J, b,!O,!^.(W.G%.;%/c&"\'X"(S"-k#(`#R= \'= ,="-=\'=R5G[*!X*Y&,+`-(D;A6(w#,w[\'U\'>,Rc!\'?-\'K!\'A%\')/ d;r!!l*R-#N Aojux?$N?-L/#G!/G#,G%$Gq(`!m-.\\*$M=h\'.)$!(AzEN$;*$;u986>!)>"\'Vl6oWmT+"F<D T&P5@U>=-$$nk>qd&#u+L+n\\+(h"V&#O\'/$N/5".jKj+Aw.-\'6$fRen()5N-/(>%(1O,#+P#(P9$1%%% >*"V+-g+.C/,Z!$5#"/J+ =$k(.5)a&-\'D-/!>##>+Ew/\'CB)5_##v<e*/?**(s*G#*(.*+(/aK#"\\--E \'p+*p,O" Y(>%(.T, +>!^,#-vpG *(/T)=#)@-rFG,/N ()UF&/Y#*(K!>$#C\'(F:%&#*D,#$cG\'@!lx\'/;LcK$")O$h! h!(A(/\'W.s,W- >jA%c&d"}*(A-kZ5\'$A\\N#TN!\'A, L/5/(S$\'^+/u9&c",>%-="b!,W"#J":%]Y/(U "@y J#/J\'$=!/=\'S(/[v=kZ;%nn>!/@-+l+.(VJ(/ L/-(E/G* GhG,+K!-\\M)>")>A%(E* .v &A+Q:j -`y*J^=!S\'KR/#d$-l$-\'<.v *m*,(j$}9(6/\'GC" @"-A#^&$$["NG"-dor, G*,A.*_@e ,(\'$)p-C!$?#$YZV+*Y, F,!J--j~="$@$+ &vZoS,,A-W&-!@_Zb,w$B!_J,+d\'/r*-_-*\'8*\'tL!de!+e#)?iG&.m,.}bK\'(KRM*-M\\Coa*6"$g%(S/#(w#JU(\')?\'6%v+#l,6&$T?O,*D#**=/5&/jC*n-)>(/>(BKBC&\']/lE_" _$$D \'G#$A#+K&!)/"V .>">%#,T#:%  C%*^(.6)Pn#g+(Q`W#!j <& /ZY`#(Z##X#+k$,-J.)=/C-<&zj)/j/Ow6p()>.)@/(dhl-/_,/_zf&!o$NYLS,u+,?1LT}cK !K&-hEE!,s!F ,b()@!(.v-#?Y} (K" P,Y \'W"$>#\'Z &X#$A>X:,}+#K!/P->T.m,*J,/_)^Y"LA%!\'=#,YQ?kQ, i$ j>!K%,p-J\\^Mi,cG%O%#6(O%)^& / &FZl!eY&C%A$ )z$s"(P%YfJ+/.f!V,+O:b/?& " &!$k"#$=H&,/ &.-.f,.v\'/e-$Lxm+(K  K".AG).-+a-+p<%#/VMR+",\\}N$,]/A.--c">YY%$W+?&FD")5"-Z,*[/./\'$~G!\')$#D/,!G/.o#?!BD/?#.^#.)PSK%$(1VA*v#O-/-d.*(1X}*m#R"/(z$D*#-G+|<CY?& J\'=&"T&#*"J5&+$5-9&6+c*-R.-d./r**_++f#-f`D,+GC)YQ&<%m>/#5%*-=)=*f&+Q>#\'G,> "$R6%\'0%/!k J=d&` >/$d!*\'X.v/$(w(KW)a#r,)>%,d/EQ!u,$K! \').E*Mo#J*9R$|:-p/F+)C/;&"+-=#`\'/U,.L=+LRG#+\\pM/#)] &*!R [q"*eB(W\'m*/$;O!$J!,Q%(Q+b%9J<Y.(O/!W/Y%XQ1S!/[#!!=*[wjXBF">#*R#*f\'$v#N!\'L\'@G+/G-,}?}/#MsCRN "z6%"T&Y\'@/S\'O&,Lq,-m,#h*.A\'Z-F%()`K5z,(H-hs>-+K!^?if[#+S)1P$Z/"`_L1+?[_+$)YShX/\'V@^(/>+",_",n"^$ *\\<]+$p*-P$6VT >%"$#m)6$$?eW+)^9g.C%.*g./>/!X (`"Q&##i#- &GX,$ \'LRNB* +_;e$\'G "G5(8$K!#K+(\\"-\\-()/ 5,6&WD$:J>&./$@ur!+K&)h-U.+^PF1A$*$(/$-(/.-M$W!\'?DQMCT%%.)@-1\'.(/>!,m+,(.:)?+c+)P!j++X1!>0A1%!$6$!V(Y%?>sT`V/MJ)@>`:!@ro-/m.-K!$K/-h$-\'(F\'o^"*^.*JwbES !F !FO^!*T!,g" V%!V?W??C>+C%,/J-(k +`"C&$"jRUuZx`}/@-@--D5X-ac&/w,?b#>-(\'ER+$EQ$\'Q"lj_\'O"0(S#?&)?8G .x|mS(;/K #K /)$!)A@N"-s0C-? ,g"g%$ TfF, 5!*@$)5-!Br#d6f/$u|K%#M?%,;] >##b/)>1Z-zn\'E@#\'a/r8&+-"n.,G*jfZiO!/(d(UhW,$*zXe.Q+T\\$E !6&\'?`X ,@%=&,m(T*K$!N!YW!=,\'M g)$(K*Y!?$8g!.*?)N+ BVD#dh$kA")a$\';$>\'>Y@A (.-/A<&T-p(T,#T/! (/.C0"m-!f()D\'C.HJ6$BY!J%NF,#/E.8.1%)G%/,-G(j/9\'a \'AF+Buwq"+w+OBWH%&#\'k$sw,#lN$8Y./,$8Q_T&*[ *A/,#_ -f/-v##v+/(1"()ED*W-/S"G&$*-(N@R@,:&-#B$Z\'oW*S\'/>e*-)s,$HY.,Z"-j#MJ%@@/@,#n$,f,,f+*(/")\\$g  g\'/C*M&(?&E#\'U$n/-m+>(/"m;)=*K!NR/\')8RBu")P"b"J%Yi",jlX,,*@_r)$lCeZ?u(/.+=-j/" n &\'9+o*+)z!).*J!/-r+!\'(nr+L (R+$D*.?5!fm>%!>&VU+M&[.m@d\\Es.*P! \'/c&"zrPC^z.C&\'^?)D8A+,P#W~W#$^#,g#-Q;=$",J)URX,#5,$B"$(n*/q.->%$\'8!e",?.N,*E+,$\\`\'U)N!"N.X##-=&)>&*@8\'} ?$#D.6#"^YO$"JNY.(>/\'` +["$A"\'A"*+JK&+-S,,,>+"@*B(\\\'](_,+\'/Rf^(G+G+N,++K\'/)>.N-k* +l#? )C,#6t5\'(@+-(\'$YR E/(.)/#kl*d!>##)>xs.g/=v]o/!f)?/#T/T>&"rSK#`D>).Q*a_! @\'.x",$H%%Xi*!A,#@/ "\'$:\'ALD(G%%m\'C.-X#,/>T\']"e-\'h"(M/"uzD.-z"g$,OX,J(`g,cOm*\'m-#N#+JP\'P&$;-p-?\';%MQ*=%+,T!*?;Y.)` !="\'=%\'@%*\'=&5jB"Zr[(O vse)NQ,m* m5}\'$A!,A$$P*5$*k+=e!.(S!?&*K.?, UC#)GL$d?%\'P b[btC8%&c-\'N/v\'NK\'(N=-b%/!@F%&,+(p,/\'[)a)F" J$#Q&\'WxZ!*S[B!!^AB,(E,-B-!+A/ J(\'(V89)P>%!>%uV5YBY/ il$$:&?#-C()A%+lqN O 1%m!@%&\'G>"FR^?!!rD% P%KE"$R+,R-.L1*(/-$K$-$1b",C*"C/ !E*-P--e!\'M.^cZY%&k)>"+L-,(/!$d$F"-b()ZO%&" *=*5+,-l#/o.C "#$H?0%%$$JoO)$C+]%,/V,.b-"C.)="+UZ@%#5%+Ack,g&,9c/Eo"\':+f-.e+#u ,(p,(c"(\\"G"*m$*KiM-"N/-z/#]&,$8/p*O (gFJ\'$^s?<g/-?/-A"#/=+Swk_ &}F!M_yf**v*L+  mmm+/M\'.A#F$" N"T#!> g%YTGD$+[q$\'[R\'=dS\\5%",Z,*U+D%fV8TCSn,\'/1%!9@,=SE(.()Q$).+QlQa)="@\')i+,6pA]C6%v)`\'Ca*i\'/.)T[?-piP<%#,D"+Ank,*+(/,$P*-\'5-).+/$;@U[.f&/"+?!Y$\'Zn*aW%-/#rC%,*T+`(w`8*u-!d!$v ?))E,(j,!!R"V"-CM"wy\'F/R-+E"\']&UKQ*\'b*!?!^%$ g$_= .@-/(H\'MNz/W).*\'Fj.T%!$jmE-+/_.,)@").+i$\'D*y(0FNWQX+-+q!+@/"_+"f!\'u)C!#[n().-)@.5@F"H)K%%,"S"#+l\'.m+V%P& k_ +C(V0!$6b!+J\\,n#*fZ\\,6/FR:%#(W/\'E-|?*,G##(.})>=\'/#?*.)WZ! A! D,+)@%"G.-(/#?%"/P%O!"^",>#,Q+^%Bj * &!([#-=cA_i5@-mqZq#\'>#!\'C LgGNK$*K\\KbA,$(\'(g)OpLP%)$;.G(N/#/N!V *gBT)A%++C.+D#-i#/i$,!=-`)$i]D- k.kw)$>"(d*/\'/Gf  u$N$,NN!xy(;*KJA_)Ki!\'5")U+#[,(Z-\'$\'/,,\'H`-, \'/?(r*L/D@%o+!N#,A/@-!+_&!u#-)U*$BO#>%g &+ S/.+?,-D"-(s>~C$ b,J&\'$5G(\'$ &\'$o>:L,/L9\\,,A:A\'?/xq(R*,+u$5#* >J%"(A-$U.z\'$ )>%ED+lMADd-,)/}$1=U5%TD%,pDp*6 -*$:O!,T+.5%)ALU-+,q!/@$"R*-d!,lB([/G-"Kl\\,/A>N!?"a_-O "Q#)D\')@-,+w- \'$##v.L/"*A*#)T\').)/\'SVuU-)E-"/)?8.8PZP(Q!+>"+O-+i !,q+"\'h,e-#M#$A+\'AXE *).E)X"=*=+\'Wy>"*#c,LmF.,A|k!K&/"#w$E,#B-/$f&/(p.K"#h"T$$"a&X*-#c(N,,"}./E#F"+W*$O.,^/ Sw@E`))Sji/ /\'["n/,r.-f !f\'.(\'$+K,6U-).h\'N$fxh#"G-J "g$mG\'Uk*m,$v @ -Ud ]/"p))pNz! G&+?,!?&DK &BB(E(O%{732%/ ,$9|9%$:*$<!$<&$<,$</$8"$6&$6(pep?(`+pGe!F/ -p(8.)8.)/p* p*"p+ p+#pkp,8.,-p,$p`p,"p-\'p-8..-p-/p/\'P )P%*P0P%+P%-P%\'P$\'P@PLP(/PNPrP&)PcP\\P&/PDPA%!!(P-$P-/P,8/-(P-+P-!P-*P- P8P6% !^ "? !W "^ F% VP!,$HJ "O "C ",$H8/.b !O  J|Y|@cYV%%VV|?V^VJ &T \'? (V )^ ?% +W +F ,C ,^ +Y ,F -J -6 6% .g <% .6 /C b%! C! O! F!!J!O%!!W!!^!"O!#^!#>!#T!#Q!#b!$VOF!$TOWU"d/?UCU^U6!(V!(F&-?!(T!(C!(b!)O!)Y!C%!A%!*W!*J!*F!*C!*^!*Q!+Y!+O!+F!+V!Q%!+g!T%!,C!-Q!;D%%%!.C!.g!/V!b%!/6" W" QyW" 6~>~^~6"#Y"#C"P%"$W"$Q"$TF6FW[^"\'W[C"\'Y"\'b"_%"(g")W")F"\'O"(?"\\(tLt>"*T"*g"+T"Q%",O",g"->"-6"<%"5N.g";%"/Y"b%"/?"/C0J0(>#?0g#!V0b#O%#!^#"Y#"b##O##Y##?#$V#$J#W$9>#$C#$g!-JY6ZCZ6\\?#\'Q#\'>#(F#A%#*V#*J#^%#*6#+V#+J#,#l!"A-C#-/=/,w.6#.6#.?#.g#/^$ O$#g$$V$"T$"g$#T$"6$#J$"C$!g$$6$(b$>%$(6Wb$\'O$\'>$\'V$)F$\'Q$(V$@%$(W$K%$D%$,>$*F$+?$^%$*T$,W$,?$*?$*Q$,F$*W$+6$+T$-?$6%$5%% b%!WPgp6pgP^$:%%#C%$V%&Y%$T%"6%%T%W%%%J%%>%#?%#Y%%g%)C%(V$*b%G%%)b%\'Q%\'6%)?%)6%*6%\'T%(Y%*C%(>%*?%-^%T%%-b%,W%-T%8%%-W&!W%/>&!J%/6%/g&!Q%/C&$6J w-b&#W&#J&#F&#?=Q=W&"b=T=^&D%&(V&G%&*V&)W&(b&^%&*6&+J&+W&,F&+T&,O&,Y&,V&,?&,6&-O&-Y&->&.6&/CcV&H%cWcCc?cQcgwYw?wJ%,>wTnJq>q?\'$6qQ\'$V\'P%@ClV\'(?@ORb\'(C\')YdVrYdWd^rVlYlJ_W_F_Yf^_J\'<%fQvCvg(\'FeODFuQ(c&+,V?Fog(\'C(?%xC()bGQx^}6xQx?G6(T%}Y}O}>}C}?(6%}T(8%}b(.b(/^(/C(1%(/T(/gKFK^\\V\\kGJ)F%MTMghFh?hB*-FC%%CV)$6C^C?AFAVA>ATACE?NO)]P%8tQsYaFzJ).?]TNg]C]^*F%*!b*!O*!T* C*!^*$ViT*$C*Y%*#JiFi^*)^*+T*+6*,Q*,F*+g*<%*->*5%*.C*-J*/^*1%+ T+ Q+!J+#F*-V+"^+#J+#6+$Y+W%+$VQOQ%%Q^QQ+J%kC+\'V+\'Y+>%+\'D%(?+\'^+(V+(Y+*J++?+,Y+,>+,C+-W+-V+8%+5%+:%+-6+6%+.Q+/V+/J+/Y,V%, >, ?, g,!Y,"V,"F,"?,#?,#C,$O,$J,$6TYTV,P%+\'O`T`85F,@%,\'C,(T,)O,)W))Q,*Q,+Q,+J,+T,+>,T%,+6,,>,-C,.C,/g,/^,.g-(T,.^- Q-O%-!>gT-!b-!Q-!O-!W-"F-!^-!C-!?-$TgF-$6-$QjT-\'Y-@%-(>-(W-(F-*F-]%-*T-*6-+g-K%-+>-+T-,C-,g--Y--F--J--Q-.Q-/F-b%;Q9^9C9O9Q<J<>8W8Y8V866>6W6b5F5W8>.>%.@%B*).+TBb.*V.,O.,F.,?.-V.,b.-J.<%.-g.-^.-Q.:%.9%..?..C..T./O./Y./V./W./?./6/ Y/ CbgbT/ Q/!O/!J/"C/"g/#?/$O/$?/$T/$6/"bbObJb>bCXOXg/\'Y/\'>/(Y/(F/\'b/G%/(?/)O/(>/)6/)C/)?tVt?tg1T/-J/1%/8%H?HO/-j +YHX "U & & !A ! & "A  5 #U !k O& "k "=  X #iVi|U &i \'@VX|i|=|j &Z|Z &S|[ &` &kVA (U (j .@ (Z )i (S a& )= )@ M& *@ (k 9& +D ;& -Z +WH & +j ,= Q& -D!$j!O&! = /= /@!  & /S /i! Z!"U 1& /U! j! 5!$@!#5!"D!"@!$i!#X!#`!"`!#S!#j!$[!$S!\'Z!\'@ODOAOiUk!\'SUX!J&!\'UOXOjOZ!>&!)A!)=!(@!*`!)S!)i!G&!)U!*k!*5!,`!,i!,A!/@!,D!,Z!,=!+i!,+\'/\'A!,j!5&!<&!/=!/i!/S!H&!/j!/`!/5"  &" D" A" j" `ySyky5~U~i~5"0&"#["#Z"$U"$5F5[ZFk[ &[D"\'`"(["(A"\'5"M&")Z")="-S"(Z")S"-@"-U"+k",X"H&",=$-S",D"-`",`",i",[",@"a&",A0`".5"/U#"@0[0D".X"b&Y &##5#$j$!`#P&#)=#(5#f&#*k#\'=#*Z#(X#(A#)X#Q&ZkZA#+5#.A#, &#,=#<&#,A#-[#/=#,S$!=$#S$ =$!Z$"=$#=%!j$!@$"D$ XS@SX$\'=$$5%"i$C&$)Z$^&$*A$(D$+`$-i$-[$T&$,@$+k$-D$,[PU$Be A$;&$9&"*`$<&p/J"`P=PSP[P*J  &P-J!D%!,JVJ"$J"#J"+J#$JYJ#@%#=%#(>$+J$D%%=%%%J$-J%D%%5%%-JnJ\'D%eJoxGJaJ)/J*+J+@%,#J,=%,!J,$J,,J-"J-+J-A%;J9J/UR"= *= #J1&R#=Y=#=&#$=!,=P=$$=$)=$!=%5J-=&$=&\'=&(=%/=&"=c=o=L=(5&()=u=N=]=,!=+)=,)=+5&+,=,$=+(=-=&-*=;=#/=5=.)=/ =b=/@cXw=w5n=n\'E#Dn5qXq=\'$UqDq@\'$=>5@ &>A@Z@S\'(AR &dAR`@i\'(`\'(kd=dU\'?&r@\'.XrS\'.`rZ\'.ArD\'8&_5_j\':&\'.5rAl5l=\'.@*)`v5u=eAu &ujo[u5xZek?ADZ(\'@(\'X()XLXGj()S(]&(a&LZ**5xA(\'S(Q&G &xiKXLj(\'5KUmiKD}DM[M=(9&K`mj}S(.@(g&h=\\[KS}@(<&)F&(/A(;&(.XMDMi\\iMZMUm=EAE@C`EDAkCSE5A5hAEShjCA)0&AUC5CjNUAia[s5] &aXzU]Za5z6+.Dzi]jakzZs@*"5))Us &))`)C&aS]5).D* [*!k)H&+ i)/A)/[).@*V&aU*!5).j*!S).k* i*![*,U*"Z*!Z*$S* `*\'[*#=*\'D*$@i[^A*=&*$D*#D*"[*K&*(j** &*(S**[**Z*ED!@*+k*,Z*,[*+D*+Z**`*-5*-U*-X**i*-i*.i*1&+VD!=*/i+![+Ua#U+!X+#D+#\'@-`+#)N.5+$@+$Z+$AQ &QAQSQkQXkU+\'D+\'A+\'X+f&+(S+(Z+(j+)D+C&+)5+*S+*i+*k+*X++[++U++Z++@++`+,=+,k+-Z+-X+.`+.k+/Z+./).+5, D,!Z,!S,!k,"S,"ZT5T%&`[`i,([,(j,)i,(U,a&,\'5`D,\'Z,M&,K&,,S,/U,-Z,+j,-@,T&,-j,*5,+U,+5,+i,-k,.X,-A,.i-!/L$j-#=-"k-#j-#D-!A-Y&-#Z-![- `jZ-)ZjSgi-\'AgA-(5-C&/8&-?&-/A9%&;i-Q&-,@-5&-+D-,=-.`--5-,`-.D--[-T&-/i--A-8&-g&-.i-.5:j55:59AB[6X<5:Z5k:kB=8j9X8Z<i85:S.H&9j<D.([.*i.)D.,A.+@.-Z.+j.*X.,S.+[.-S.g&.(X.^&.,[.)X/$U/!!c$`..`./D./5/#X./[/#U..X/#[.,`/#5/!Z./@/(=/d&/\'D/(U/f&XXbkHZXj/([/\'`bD/(5/)U/,[/=&1ZtZtUtS1A/,=ti/-X/g&/.`/-S/-DHU/.5/-+c E  kH*c!!c !c XHB !+c!i/\'$c!-c!(c!/c0c#B #"\'V!c&#c)E Mc*/c/!c*,c+(c+#c*B -/c,+c--c-E! E /-w!,w!E!J\'O%wLw=\'U"w$,\'O&\'U,w(/w1wuwCw*(w*,w-R!+E!+B!-"w,E!-$w,B!;w.,wBwbw/,w/E!Hn -n! n!+n"(n"-n",n0n#"n#+n#,n#/n$ nSn$+\'F(n\'$n\'B"envn(R"MnAn*"n*R"+E"+"n,#n`n,$n,B"-"n:n;n9n/E"/>  /q!R0*q!,qUq!-q#$q"/q"E#Fq#B#$B#P).-(\'YRZ*\'Z(qcq\'(q>qrqdq,(q+#q,B#++q, q6q.B#-B$*"\'$V\'S/\'$Fq/(\'$#"\'$#*\'W%\'$#/\'W/\'WE$$!\'W,\'SE$c\'S#\'S*\'$@\'$\'B$x\'$)B$*R$,*\'$,/\'$-$q/!\'$;\'$<\'$B\'pEpBP"\'P \'P!\'P(\'P\'>|> #>V> ,> .> ->O>!#>!.>[>",>#,>$$>$->$*>$)>%+>S>%*>&)>&$>&\'>&+>&->\'(>@>D>(\'>\'$>G>()>e>)$>s>]>^>*#>,">+#>,#>Q>+->+(>+,>+!>,->,*>-">-)><>-.>/.>H>/,@ !>/ >t>/">/#@ +@ -@ )@!/@"\'@" @y@~@"$@#$@0@#+@$\'@$(@S@%,@%(\'=!\'="\'=(\'=E=*\'=R=,@c@n@@@\'(@l@f@o@L@x@(.@A@h@))@s@+ @+$@+(@+)@+*@,"@,-@j@-"@-.@9@6@B@.*D"/@1R (R Rc$R"En$R!B\'FR[R!+R#Rq(R$R>*\'@(\'@+\'>+\'@%R\'/R\'BRE\'(B\'xR\\R* R)Br RkR+Er/R+,R+-R++R,Rl-R-R_*R-,R<R.B\'/,\'f,\'v"\'M&\'e \'M*\'(W\'LB(\'$\'(D\'(l\'(s\'L,\'G#\'(Q\'G*\'G/\'}!\'(`\'m+\'}$\'xBx,\'(T\'m*\'(.,\'(B\'}*\'(/-\'(/$\'KR\\"\'\\!\'\\EM,\'M+\')$ \'A \'CRC/\'C*\'C%\'C#\'E*\'E/\')G\')]\'s\')/$+\'s*\'sBa#\'aEa*\'zE]%\')B\').,\')9\')<d (d -d!(d!E*" d!/\'N d#!d#+d#B*#R*$#\'^R*$Ei!d&"d&))/]dcd\'E*_dLdEdCdNdAd*E*,(d+ dkdTd,$d+/Kod,R*,*d,-d,/dgd-#d-E*-*d--d9d:d5d.-d/ r "r /r *r &r##r!(r!E+!B+Yr"(rZ\'Q rdr|r$-r +r$,rWr>rJr\'$\'kR+crw\'k,\'kB+]rNr)/r}rzrsrxrMr(/\'Q-r)E+,+r,!r,,r,/r+$r`r--r.E,!!l!$r5r6\'` l  l R,!#r/#r/R,!R, -rXl"#l"R,"*l!/l#R,"+l#-l$,l$#\'T$lPl$ \'T \'T(\'T/\'`$\'T&lJ\'`,l>lolKl*$l*-l*"l*+l*!l*(l+#l+"l+!l*B,+E,+-l, lTl,"l-(l-"l-,l:a#+l./l/"l/$lXlt_ &_ "_!,_O_ *_W_$+_"B-#"_#/_Y_S_q_%&_$B-n_&(_&B-P_&#_h_(Eg+_(/___a_+*_*B-*#_Q_,R-+-_*+\'<-_*"_*/_-,_+(_)/_+ _-(_--_8_-B-1_/"_9\';%\';*\':#\':!\'9"\'<!\'9/\';E;+\':"\'8&\'5&\'<+\'<%\'<E8#\'<R<"\'<*\'5R6-\'6&\'6B6E6*\'BE5*\'5EB,\'B+\'.o_g\'B-(tBB/\'.L\'.(E.m\'.M\'.K\'.h\'.)$\'.A\'.(B.a\'.z\'/#(\'/#*\'/W\'/$,\'/$-\'/$Bb \'b!\'b%\'b$\'b(\'b/\'X \'X(\'XEXR/\'(\'/e\'/D\'/o\'/L\'/(R/m\'/)$\'/)B/]\'/s\'t#\'t/\'1"\'1EtB1&\'1L+w\'/T\'/`\'/,*\'/g\'/-$\'/9\'/5\'/.EH#\'H)N-,f &f|f +f!"f!L !N !,fyf"L #/f#+f$*fS(V"(VLV*(V/f&"f&L qfnfcf@f\'N _f\'/fufDf?fafhfsf*g!Kf*,f-+f6f-N --f,$f-*fjv N ./f/!v!+v"N!"#v"/v$+AxvSv#.(O#(O!f/,vw(U.vJv=v\'$vovLvGvfvev* vCv*$v*#(O/vhv*N!+ vQv+.v+L!+-v, v,"v+*v,N!,-v-!v-N!-L!,L!-*v-/v;vBvtv1v/.e !e "eVe \'e *e -e! eUe"N~+e#L"##e$ (FNFLF-(F*(F/([$(["([L[*([+e".eweRe\'L"\'.e}eMe*+e)/e++e*,e9e<e-/e-"e/$e/#etoh(0#e1e/N"-.(0&e-,(0N"-N#Yo#$oUo#"o#!o$ o#NY oWo"/o"+o!\'o!L#?oso**o)/o*"oAo"#o(.o(\'oGoloQoqo>o* o(N#*L#/$u!#o.+o,.o/-u #o-L$ +o,!o/\'u \'o;o/"u -u~u" o+-u#(? &o1(S-u"*u#,?%*uuuR(S+u*-(S.ue(SN$Su",(S/u\'N$Yu,*(S"u+N$+/u)/u-N$,-u++u-*u- u,!u`uju*!?yuH(P$?!\'?!(?",?!/?O?!$(P,?$ ?&#?%(?$(?$!D "?$+?%%?f?*$?L?\\?G?*(?&-?)$?a?.*?(\'?z?R?\'.?K?,)?+*?,/?+)?- ?g?--?6?-,?/)D *D!#D +?/.?tD &D~D!*D0D#/D$-$6%D%$D%/(=\'DwDhD*#D*)D**DxDmDkD*/D,$D`D+ D,)L"#D*+D-$D-.D.)D.,D-/D-+D./(w"(c&(cLc (c#D1(w!(cNc-D/Nc*(q$(q/(q\'(q+(\'F(nNw*(@ (>/(RL\'$,(\'p(R$(>\'(@L@.(>N>#(@#(@*LV(d"(\')/(\'e(d/(l+(r-(l (_ Aj(d+(l$(r#(l\'(\'`(r+(\'./(\'/"(\';L /L -(\'/.(\'X(\'/\'L .(_"L!!LULOL~LyL#!LZL#)L"\'L#+L$$L$"(?"(?N?.(D"(D+LvL\'.L).L>L_LQLnLeLELM(G.L)NG"L}(G$L+ L+/L+!L,#L,$L-$L-L})L--L/NK"L/,L/$L.L(/"(K$(K,(K*(\\#()$#(\\.()F(M*(M+()$!()$$(h+()Z(hL)$,(\\-(A (C.()=(A$(A-(A*(A/(E$(E\'(E.(N#()L()G()h())Ls!(sN)i(s,(s/(a"(a*(a-(a/(z (]*(],(]-()B()/$()/(G #GUG! G ,G!+G!-GFGZG$!G%+G%"GSG$(GlG&-G&,G&"G?GeGuG*(G*!G\\G^GiGsG*#G,$G,-G,"G-*G.+G/#GBG8G/!x!$G;G:G/\'G-.G-+x ,x \'x!*G9xUx! x!\'x" x##E*+x[x"+x#.x"L+$!x$,xPxpx$NQ&(Q+(Q*(k+(Q/(k,(k/x\'$x_xfxmx(.xMxhxAx)N+sm#*m$!m#/m$L,$,mp(T (T%(`"(`,m\'L,dmem(N,?mGm}m(.m)$mlm)Dy-m*-m**m+-m+"m+#m*.mkm,L,,!m8m<m-*m/-mtm1}|}V} *} \'} /} -}! )/p}!#m,-}!$}U(j\'(j-}w}q}v})N-,"}+.}+*},/}-*}j},,}-+},+}.*}.+}-/}<}/,(;L;N-H(9-(9.(9 (9/(8"(<%(.0(<$(8*(8\'(8N8,(6 (8L6N5$(5 (:*(5#(6%(.@(B"(B,(.v(.(\'(.?(.u(.x(.G(.h(.\\(.)$(.)N.**(.*!(.*,(.+ (.`(.+!(.+.(.T(.,L.,+(.-+(.<(./,(.1(..+(./.(/ *(/V(/O(/!"(/!N/!#(/!,(/!/(/!+(/ ,(/[(/##(/#+(/#N/W(/$"(/#.(/$,(/$N/S(/p(b\'(b,(X"(X#(X$(/z(/)/(t#(t-(t/(1\'(/-*(/6(/:(/.*(/./K(\'(H$KV(HNH*K!!KOKyK -K!.KUK +K"\'KZKYK#NH(KPK% K%!K%"K .K$)K#.K%&K%(K%.K&(K&/K@A*(KnKeK_KvKfKGK()K(/K*(K*/K+!KQK:K8&"$(K-+\\ "\\!"\\!)\\#"\\0\\$*)O&)O()U#\\J)U)\\q\\n\\x\\()\\e\\*"\\*+\\*/\\**\\Q\\+$\\+*\\, \\,!\\,)\\,+\\- \\j\\-/\\9\\-+\\/,\\b\\XM!.\\HM!$M",MOM!!)F.)F\'MWM$)M&$M$(MCM#/M$+)F MzMAMhMa)F*M,/M+)M+\'M.))0/Mth$$h".h!)h~h!*h"#h#*hYh#+)Y,)Z hl)Z.)Y&h+ h*,h*-h)$h+)hjh-\'h.(h6h-(h,#h--h- h,(h8)$!*)$!$)$!#)$ #)$ \')$! )$Z)$"+)$Y)$y)$#*)$$!)W")$$$)W+)S )S")W.)S*M"))$c)$>)$R)$_)W*)$l)$\'.)$v)$\'/CeC(\'CGC)$CACNC))C* C*(C*\'C*-C+,C++C+)C+.C,iH&C,#C,-C,,CgC-$CjC-,C9C6C:AyA"(A".A"/A$"A$,APA$+ARA%,A%.A%-A%/)=&An)=,A}ANACAEA**A*\'A+!A+"A+ A+$AkA+(A+)A,.A,+A,)A,-()$-A-,E -AgA/)E|E &E (E!#E .E!!E /EUE!)E"$E"*E0E#)E#-E#.E$$ESE$(E$"E$))>,)@ )@$E=)@?"-")@+EwE\')E?ElEvEdEDExE(/EKEzE*(EiE*#E+#E+$E,#E`E,(E,+E-,E.-)/PE/"d-/EXEbN /N ,N#(N"$NyN#\'N#-NSNPN$+)D+)D/NcNwN\'$Nq)G*)G/N+!NkN,$N,#N`N.)N.+)K#)K))\\")\\$)\\()M!)\\-)\\.)M$)M )M,)M.)h-)h.))$"))$)))W)C ))$+)C!)C"))$,)C%))E))N))^)s-)s.)a,)]/)]+)]-)]()]!)).-))..))/!))/"))1))/(s !s /sV)):s!)s"+s#\'sWs$"s$ s$#s#.)^%s$-)^+)^\')^/)i"sJ)i$)i))i+)i*s*-s+ s+,s, s,/s-!s-#s-$s-.s-/s:s<s5s./s.+s..s/$s/!s/\'s1a &a!(a!*a!/a~a"#aFa"\'a"(a")a"*a".a"/a#"a$$a$#aPa$-ap)Q!)Q(a\'$ahaoa\\aAaEa)/a* a*(a+$a, a,*a+)a`a,/a-!a-"a<a:a8a-$a9z#*a/"a/!a/ zOz!$z )z!#z ,z &z (z!"z *z|z".z!+zFz"$zyz0z$\'z#"zSz#.)T*)` )`\'z@z\'(zBz.,z/ ] )] (z.+] #] &]"*][]*/]"#]!/]$$]O]!"]$!]#/]#.]S]$(]%-]%.]&$]%!]% ]%)]n]()](\']*+]&/]d]s]*$]*)]+"],$],!]++]+(]+*]`],/],"]-)]-#]/(]5].-]./]/-)9*)9+)9.).>)B))B-).v).L).x).m).M).C).\\).]).^).*)).+().**).*-)@!).,,).,.).,/).- ).-$).-,).-.).--).;).6)..()../)./$).X)./\')./)).1)./,)./-)/ \')/ (@+\')/O)/y)/",)/#.)/$*)b")b$)X#)b/)X )X!)/=)X\')X,)X*)/R)/n)/@)/C)/z)tVeXz\'K%ESW!-,w)){{{{{{{{{{{{{{I\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!3ycywynyqy\'$y>y@yRy\'e!\')H:H8H \'H "{{{{{I74;  ; !; "; #;|;V; &; \'; (; ); *; +; ,; -; .; /;! ;!!;!";!#;!$;O;U;!\';!(;!);!*;!+;!,;!-;!.;!/;" ;y;~;"#;"$;F;[;"\';"(;");"*;"+;",;"-;".;"/;0;#!;#";##;#$;Y;Z;#\';#(;#);#*;#+;#,;#-;#.;#/;$ ;$!;$";$#;$$;W;S;$\';$(;$);$*;$+;$,;$-;p;P;% ;%!;%";%#;%$;%%;%&;%\';%(;%);%*;%+;%,;%-;%.;%/;& ;&!;&";&#;&$;J;=;&\';&(;&);&*;&+;&,;&-;&.;&/;c;w;n;q;\'$;>;@;R;\'(;\');d;r;l;_;\'.;\'/;f;v;e;o;u;?;D;(\';L;();G;x;m;};(.;(/;K;\\;M;h;)$;C;A;E;N;));s;a;z;];).;)/;* ;*!;*";*#;*$;^;i;*\';*(;*);**;*+;*,;*-;*.;*/;+ ;+!;+";+#;+$;Q;k;+\';+(;+);+*;++;+,;+-;+.;+/;, ;,!;,";,#;,$;T;`;,\';,(;,);,*;,+;,,;,-;,.;,/;- ;-!;-";-#;-$;g;j;-\';-(;-);-*;-+;-,;--;-.;-/;;;9;:;<;8;6;5;B;.(;.);.*;.+;.,;.-;..;./;/ ;/!;/";/#;/$;b;X;/\';/(;/);t;1;/,;/-;/.;H9  9 !9 "9 #9|9V9 &9 \'9 (9 )9 *9 +9 ,9 -9 .9 /9! 9!!9!"9!#9!$9O9U9!\'9!(9!)9!*9!+9!,9!-9!.9!/9" 9y9~9"#9"$9F9[9"\'9"(9")9"*9"+9",9"-9".9"/909#!9#"9##9#$9Y9Z9#\'9#(9#)9#*9#+9#,9#-9#.9#/9$ 9$!9$"9$#9$$9W9S9$\'9$(9$)9$*9$+9$,9$-9p9P9% 9%!9%"9%#9%$9%%9%&9%\'9%(9%)9%*9%+9%,9%-9%.9%/9& 9&!9&"9&#9&$9J9=9&\'9&(9&)9&*9&+9&,9&-9&.9&/9c9w9n9q9\'$9>9@9R9\'(9\')9d9r9l9_9\'.9\'/9f9v9e9o9u9?9D9(\'9L9()9G9x9m9}9(.9(/9K9\\9M9h9)$9C9A9E9N9))9s9a9z9]9).9)/9* 9*!9*"9*#9*$9^9i9*\'9*(9*)9**9*+9*,9*-9*.9*/9+ 9+!9+"9+#9+$9Q9k9+\'9+(9+)9+*9++9+,9+-9+.9+/9, 9,!9,"9,#9,$9T9`9,\'9,(9,)9,*9,+9,,9,-9,.9,/9- 9-!9-"9-#9-$9g9j9-\'9-(9-)9-*9-+9-,9--9-.9-/9;999:9<9896959B9.(9.)9.*9.+9.,9.-9..9./9/ 9/!9/"9/#9/$9b9X9/\'9/(9/)9t919/,9/-9/.9H:  : !: ": #:|:V: &: \': (: ): *: +: ,: -: .: /:! :!!:!":!#:!$:O:U:!\':!(:!):!*:!+:!,:!-:!.:!/:" :y:~:"#:"$:F:[:"\':"(:"):"*:"+:",:"-:".:"/:0:#!:#":##:#$:Y:Z:#\':#(:#):#*:#+:#,:#-:#.:#/:$ :$!:$":$#:$$:W:S:$\':$(:$):$*:$+:$,:$-:p:P:% :%!:%":%#:%$:%%:%&:%\':%(:%):%*:%+:%,:%-:%.:%/:& :&!:&":&#:&$:J:=:&\':&(:&):&*:&+:&,:&-:&.:&/:c:w:n:q:\'$:>:@:R:\'(:\'):d:r:l:_:\'.:\'/:f:v:e:o:u:?:D:(\':L:():G:x:m:}:(.:(/:K:\\:M:h:)$:C:A:E:N:)):s:a:z:]:).:)/:* :*!:*":*#:*$:^:i:*\':*(:*):**:*+:*,:*-:*.:*/:+ :+!:+":+#:+$:Q:k:+\':+(:+):+*:++:+,:+-:+.:+/:, :,!:,":,#:,$:T:`:,\':,(:,):,*:,+:,,:,-:,.:,/:- :-!:-":-#:-$:g:j:-\':-(:-):-*:-+:-,:--:-.:-/:;:9:::<:8:6:5:B:.(:.):.*:.+:.,:.-:..:./:/ :/!:/":/#:/$:b:X:/\':/(:/):t:1:/,:/-:/.:H.0 .0!.0".0#.0p0%.0&.0\'.0(.0).0*.0+.0,.0-.0..0/<! <!!<!"<!#<!$<O<U<!\'<!(<!)<!*<!+<!,<!-<!.<!/<" <y<~<"#<"$<F<[<"\'<"(<")<"*<"+<",<"-<".<"/<0<#!<#"<##<#$<Y<Z<#\'<#(<#)<#*<#+<#,<#-<#.<#/<$ <$!<$"<$#<$$<W<S<$\'<$(<$)<$*<$+<$,<$-<p<P<% <%!<%"<%#<%$<%%<%&<%\'<%(<%)<%*<%+<%,<%-<%.<%/<& <&!<&"<&#<&$<J<=<&\'<&(<&)<&*<&+<&,<&-<&.<&/<c<w<n<q<\'$<><@<R<\'(<\')<d<r<l<_<\'.<\'/<f<v<e<o<u<?<D<(\'<L<()<G<x<m<}<(.<(/<K<\\<M<h<)$<C<A<E<N<))<s<a<z<]<).<)/<* <*!<*"<*#<*$<^<i<*\'<*(<*)<**<*+<*,<*-<*.<*/<+ <+!<+"<+#<+$<Q<k<+\'<+(<+)<+*<++<+,<+-<+.<+/<, <,!<,"<,#<,$<T<`<,\'<,(<,)<,*<,+<,,<,-<,.<,/<- <-!<-"<-#<-$<g<j<-\'<-(<-)<-*<-+<-,<--<-.<-/<;<9<:<<<8<6<5<B<.(<.)<.*<.+<.,<.-<..<./</ </!</"</#</$<b<X</\'</(</)<t<1</,</-</.<H8  8 !8 "8 #8|8V8 &8 \'8 (8 )8 *8 +8 ,8 -8 .8 /8! 8!!8!"8!#8!$8O8U8!\'8!(8!)8!*8!+8!,8!-8!.8!/8" 8y8~8"#8"$8F8[8"\'8"(8")8"*8"+8",8"-8".8"/808#!8#"8##8#$8Y8Z8#\'8#(8#)8#*8#+8#,8#-8#.8#/8$ 8$!8$"8$#8$$8W8S8$\'8$(8$)8$*8$+8$,8$-8p8P8% 8%!8%"8%#8%$8%%8%&8%\'8%(8%)8%*8%+8%,8%-8%.8%/8& 8&!8&"8&#8&$8J8=8&\'8&(8&)8&*8&+8&,8&-8&.8&/8c8w8n8q8\'$8>8@8R8\'(8\')8d8r8l8_8\'.8\'/8f8v8e8o8u8?8D8(\'8L8()8G8x8m8}8(.8(/8K8\\8M8h8)$8C8A8E8N8))8s8a8z8]8).8)/8* 8*!8*"8*#8*$8^8i8*\'8*(8*)8**8*+8*,8*-8*.8*/8+ 8+!8+"8+#8+$8Q8k8+\'8+(8+)8+*8++8+,8+-8+.8+/8, 8,!8,"8,#8,$8T8`8,\'8,(8,)8,*8,+8,,8,-8,.8,/8- 8-!8-"8-#8-$8g8j8-\'8-(8-)8-*8-+8-,8--8-.8-/8;898:8<8886858B8.(8.)8.*8.+8.,8.-8..8./8/ 8/!8/"8/#8/$8b8X8/\'8/(8/)8t818/,8/-8/.8H6  6 !6 "6 #6|6V6 &6 \'6 (6 )6 *6 +6 ,6 -6 .6 /6! 6!!6!"6!#6!$6O6U6!\'6!(6!)6!*6!+6!,6!-6!.6!/6" 6y6~6"#6"$6F6[6"\'6"(6")6"*6"+6",6"-6".6"/606#!6#"6##6#$6Y6Z6#\'6#(6#)6#*6#+6#,6#-6#.6#/6$ 6$!6$"6$#6$$6W6S6$\'6$(6$)6$*6$+6$,6$-6p6P6% 6%!6%"6%#6%$6%%6%&6%\'6%(6%)6%*6%+6%,6%-6%.6%/6& 6&!6&"6&#6&$6J6=6&\'6&(6&)6&*6&+6&,6&-6&.6&/6c6w6n6q6\'$6>6@6R6\'(6\')6d6r6l6_6\'.6\'/6f6v6e6o6u6?6D6(\'6L6()6G6x6m6}6(.6(/6K6\\6M6h6)$6C6A6E6N6))6s6a6z6]6).6)/6* 6*!6*"6*#6*$6^6i6*\'6*(6*)6**6*+6*,6*-6*.6*/6+ 6+!6+"6+#6+$6Q6k6+\'6+(6+)6+*6++6+,6+-6+.6+/6, 6,!6,"6,#6,$6T6`6,\'6,(6,)6,*6,+6,,6,-6,.6,/6- 6-!6-"6-#6-$6g6j6-\'6-(6-)6-*6-+6-,6--6-.6-/6;696:6<6866656B6.(6.)6.*6.+6.,6.-6..6./6/ 6/!6/"6/#6/$6b6X6/\'6/(6/)6t616/,6/-6/.6H5  5 !5 "5 #5|5V5 &5 \'5 (5 )5 *5 +5 ,5 -5 .5 /5! 5!!5!"5!#5!$5O5U5!\'5!(5!)5!*5!+5!,5!-5!.5!/5" 5y5~5"#5"$5F5[5"\'5"(5")5"*5"+5",5"-5".5"/505#!5#"5##5#$5Y5Z5#\'5#(5#)5#*5#+5#,5#-5#.5#/5$ 5$!5$"5$#5$$5W5S5$\'5$(5$)5$*5$+5$,5$-5p5P5% 5%!5%"5%#5%$5%%5%&5%\'5%(5%)5%*5%+5%,5%-5%.5%/5& 5&!5&"5&#5&$5J5=5&\'5&(5&)5&*5&+5&,5&-5&.5&/5c5w5n5q5\'$5>5@5R5\'(5\')5d5r5l5_5\'.5\'/5f5v5e5o5u5?5D5(\'5L5()5G5x5m5}5(.5(/5K5\\5M5h5)$5C5A5E5N5))5s5a5z5]5).5)/5* 5*!5*"5*#5*$5^5i5*\'5*(5*)5**5*+5*,5*-5*.5*/5+ 5+!5+"5+#5+$5Q5k5+\'5+(5+)5+*5++5+,5+-5+.5+/5, 5,!5,"5,#5,$5T5`5,\'5,(5,)5,*5,+5,,5,-5,.5,/5- 5-!5-"5-#5-$5g5j5-\'5-(5-)5-*5-+5-,5--5-.5-/5;595:5<5856555B5.(5.)5.*5.+5.,5.-5..5./5/ 5/!5/"5/#5/$5b5X5/\'5/(5/)5t515/,5/-5/.5HB  B !B "B #B|BVB &B \'B (B )B *B +B ,B -B .B /B! B!!B!"B!#B!$BOBUB!\'B!(B!)B!*B!+B!,B!-B!.B!/B" ByB~B"#B"$BFB[B"\'B"(B")B"*B"+B",B"-B".B"/B0B#!B#"B##B#$BYBZB#\'B#(B#)B#*B#+B#,B#-B#.B#/B$ B$!B$"B$#B$$BWBSB$\'B$(B$)B$*B$+B$,B$-BpBP.> .>!.>".>#.>p>%.>&.>n!cywynyqy\'$y>y@yRy\'e!\'MU "U!"U~U#"U$yJy="UnUeU)H:H8H \'H "#"#!yUyy~Y\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!{{{{{I',
            b = "# /+012233.&.%44.$.!.\". .#&&'%(%'&)&.')%(&)'\"%(*//77&%) (()\")(!%$/+%''$&,%!& %$%/&#%#&\"&)!)-*%'-,&)+/%' '*(\"( -%)#*&-&+&',(,'\"(#$.'#'+)*/*($(!'!(+\"!),II $(-\"\"",
            c, d = new RegExp("[0-~]", "g"),
            e = function(a) {
                var c = (a.charCodeAt(0) - 48) * 2;
                return b.substring(c, c + 2)
            };
        while ((c = a.replace(d, e)) != a) a = c;
        return c.replace(new RegExp("....", "g"), function(a) {
            return String.fromCharCode(a.charCodeAt(0) - 32 << 12 | a.charCodeAt(1) - 32 << 8 | a.charCodeAt(2) - 32 << 4 | a.charCodeAt(3) - 32)
        })
    }();
    var Fb = function(a) {
        function b(a) {
            if (a && a.nodeType === 1) {
                return true;
                try {
                    a.nodeType = a.nodeType
                } catch (b) {
                    return true
                }
            }
            return false
        }
        var c = function(a) {
            if (a && a.constructor === Array) {
                var d = [];
                for (var e = 0; e < a.length; e++) {
                    d.push(c(a[e]))
                }
                return d
            }
            if (a && typeof a == "object") {
                if (b(a)) {
                    return "<ELEMENT>"
                }
                var f = {};
                for (var g in a) {
                    f[g] = c(a[g])
                }
                return f
            }
            if (typeof a == "function") {} else {
                return a
            }
        };
        var d = [];
        for (var e = 0; e < a.Ii.length; e++) {
            var f = {};
            var g = a.Ii[e];
            d.push(c(g))
        }
        var h = JSON.stringify(d)
    };
    var Gb = function(a) {
        this.ch = a;
        this.Ai = false;
        this.Pd = false;
        this.binary = [];
        this.Ig = 0
    };
    Gb.prototype.Eg = function(a, b) {
        if (this.Ai) {
            return
        }
        this.Ai = true;
        if (!this.ch.swfBinary) {
            var d = new XMLHttpRequest;
            d.open("GET", a);
            d.overrideMimeType("text/plain; charset=x-user-defined");
            d.onreadystatechange = function(a) {
                return function() {
                    if (d.status != 0 && d.status != 200) {
                        a.ch.onerror && a.ch.onerror("xhr failed");
                        c("xhr failed status=" + d.status, d);
                        return
                    }
                    if (d.readyState >= 3) {
                        var b = d.responseText;
                        var e = b.length;
                        for (var f = a.Ig; f < e; f++) {
                            a.binary[f] = b.charCodeAt(f) & 255
                        }
                        a.Ig = e;
                        a.Pd = d.readyState == 4;
                        a.onprogress && a.onprogress();
                        if (a.Pd) {
                            a.onprogress = null
                        }
                    }
                }
            }(this);
            this.onprogress = b;
            d.send(null)
        } else {
            this.Ig = this.ch.swfBinary.length;
            for (var e = 0; e < this.Ig; e++) {
                this.binary[e] = this.ch.swfBinary.charCodeAt(e) & 255
            }
            this.Pd = true;
            b();
            this.onprogress = null
        }
    };
    var Hb = function(a) {
        this.ch = a;
        this.Pd = false;
        this.Kg = new Gb(a);
        this.oh = 0;
        this.Bf = false;
        this.Af = {};
        this.Ii = [];
        this.loadingImageCount = 0;
        this.colorRange = a.colorLevels && a.colorLevels < 256 && Math.max(1, Math.min(256 / a.colorLevels, 256)) | 0
    };
    (function() {
        Hb.pe = function(a, b, e) {
            var f = a.Ig;
            if (f < 20) {
                return 0
            }
            var g = 0;
            var h = a.binary;
            if (h[g] != "F".charCodeAt(0) || h[g + 1] != "W".charCodeAt(0) || h[g + 2] != "S".charCodeAt(0)) {
                var i = "invalid swf signature: " + String.fromCharCode.apply(null, h.slice(0, 3));
                e && e(i);
                c(i);
                return 0
            }
            b.ji = "FWS";
            g += 3;
            b.jj = h[g];
            if (b.jj != 4) {
                d("unsupported flash version: " + b.jj)
            }
            g++;
            b.Me = ib(h, g);
            g += 4;
            var j = [];
            var k = tb(h, g, j);
            b.nf = j;
            g += k;
            b.mf = h[g + 1];
            g += 2;
            b.df = gb(h, g);
            g += 2;
            if (f < g) {
                return 0
            }
            return g
        };
        Hb.prototype.oe = function(a, b, c) {
            var d = this.Kg;
            var e = d.Ig;
            var f = d.binary;
            var g = this.Ii;
            while (a < e) {
                var h = gb(f, a);
                var i = 2;
                if (isNaN(h)) {
                    break
                }
                var j = h >> 6;
                var k = h & 63;
                if (k == 63) {
                    k = ib(f, a + 2);
                    i += 4
                }
                if (isNaN(k)) {
                    break
                }
                if (i + k + a > e) {
                    break
                }
                var l = Hc[j] || Gc;
                var m = new l(f, a + i, k, j, b, this, c);
                g.push(m);
                a += k + i
            }
            return a
        };
        Hb.prototype.Eg = function(a, b) {
            this.onprogress = b && [b] || [];
            this.Kg.Eg(a, function(a) {
                return function() {
                    a.xh.apply(a, arguments)
                }
            }(this))
        };
        Hb.prototype.Ic = function(a) {
            if (this.Pd) {
                a()
            } else {
                this.onprogress.push(a)
            }
        };
        Hb.prototype.xh = function() {
            var a = this.oh;
            if (!this.Bf) {
                var b = Hb.pe(this.Kg, this.Af, this.ch.onerror);
                if (!b) {
                    return
                }
                a += b;
                this.Bf = true
            }
            a = this.oe(a, this.ch.delayEval, this.colorRange);
            this.Pd = this.Kg.Pd;
            if (this.Pd && a != this.Kg.Ig) {
                d("parse warning: couldn't finish to tag all binary data");
                this.ch.onerror && this.ch.onerror("broken binary")
            }
            this.oh = a;
            var b = this.onprogress.length;
            for (var c = 0; c < b; c++) {
                this.onprogress[c]()
            }
            if (this.Pd) {
                this.onprogress = []
            }
        }
    })();
    var Ib = function(a, b, c, d) {};
    Ib.prototype.aj = g.Ub;
    var Jb = function(a, b, c, d, e, f) {
        Ab(this, "Kd", function() {
            return jb(a, b)
        }, e)
    };
    Jb.prototype.aj = g.$b;
    var Kb = function(a, b, c, d, e, f) {
        Ab(this, "name", function() {
            return mb(a, b)
        }, e)
    };
    Kb.prototype.aj = g.Vb;
    var Lb = function(a, b, d, e, f, g, h) {
        Bb(this, function() {
            var e = {};
            e.wd = gb(a, b);
            e.re = gb(a, b + 2);
            e.Mg = [];
            var f = ub(a, b + 4, e.Mg);
            var g = b + f + 4;
            e.ie = null;
            if (g < d) {
                e.ie = [];
                vb(a, g, e.ie, h)
            }
            c("PlaceObjectTag is not supported");
            return e
        }, ["wd", "re", "Mg", "ie"], f)
    };
    Lb.prototype.aj = g.Xb;
    var Mb = function(a, b, c, d, e, f, g) {
        Bb(this, function() {
            var c = {};
            var d = a[b];
            c.Xg = d & 1;
            var e = b + 1;
            var f;
            c.re = gb(a, e);
            e += 2;
            c.wd = null;
            if (d & 2) {
                c.wd = gb(a, e);
                e += 2
            }
            c.Mg = null;
            if (d & 4) {
                c.Mg = [];
                f = ub(a, e, c.Mg);
                e += f
            }
            c.ie = null;
            if (d & 8) {
                c.ie = [];
                f = wb(a, e, c.ie, g);
                e += f
            }
            c.Ah = null;
            if (d & 16) {
                c.Ah = gb(a, e);
                e += 2
            }
            c.name = null;
            if (d & 32) {
                c.name = mb(a, e, c.name);
                e += c.name.length + 1
            }
            c.Ed = null;
            if (d & 64) {
                c.Ed = gb(a, e)
            }
            return c
        }, ["Xg", "re", "wd", "Mg", "ie", "Ah", "name", "Ed"], e)
    };
    Mb.prototype.aj = g.Yb;
    var Nb = function(a, b, c, d, e, f) {
        Ab(this, "re", function() {
            return gb(a, b)
        }, e)
    };
    Nb.prototype.aj = g.Zb;
    var Ob = function(a, b, c, d) {};
    Ob.prototype.aj = g._b;
    var Pb = function(a, b, c) {
        var d = b;
        while (true) {
            var e = d - b;
            var f = a[d];
            d++;
            if (!f) {
                var g = new bc(a, d);
                g.Id = 0;
                g._g = e;
                c.push(g);
                break
            }
            var h = 0;
            if (f < 128) {
                var i = bc
            } else {
                h = gb(a, d);
                d += 2;
                var i = dc[f] || cc
            }
            var g = new i(a, d, h, f);
            d += h;
            g.Id = f;
            g._g = e;
            g.$g = d - b;
            c.push(g)
        }
        return d - b
    };
    var Qb = function(a, b, c, d, e, f) {
        Ab(this, "Gc", function() {
            var c = [];
            Pb(a, b, c);
            return c
        }, e)
    };
    Qb.prototype.aj = g.Tb;
    var Rb = function(a, b, c) {
        this.af = gb(a, b) + 1
    };
    var Sb = function(a, b, d) {
        this.dj = mb(a, b);
        this.Ni = mb(a, b + this.dj.length + 1);
        c("ActionGetURL is not supported")
    };
    var Tb = function(a, b, d) {
        this.af = gb(a, b);
        this.li = a[b + 2];
        c("ActionWaitForFrame is not supported")
    };
    var Ub = function(a, b, c) {
        this.name = mb(a, b)
    };
    var Vb = function(a, b, c) {
        this.ng = mb(a, b)
    };
    var Wb = function(a, b, c) {
        var e = b;
        var f = [];
        while (e < b + c) {
            var g = a[e];
            e++;
            switch (g) {
                case 0:
                    var h = ob(a, e);
                    f.push(h[0]);
                    e += h[1];
                    break;
                case 1:
                    f.push(xb(a, e));
                    e += 4;
                    break;
                case 2:
                    f.push(null);
                    break;
                case 3:
                    f.push(void 0);
                    break;
                case 4:
                    f.push(a[e]);
                    e++;
                    break;
                case 5:
                    f.push(a[e] != 0);
                    e++;
                    d("action push: boolean is danger. change 1/0");
                    break;
                case 6:
                    f.push(yb(a, e));
                    e += 8;
                    d("action push: double value is not tested!");
                    break;
                case 7:
                    f.push(ib(a, e));
                    e += 4;
                    break;
                case 8:
                    f.push(a[e]);
                    e++;
                    d("action push: unsupported push recognized");
                    break;
                case 9:
                    f.push(gb(a, e));
                    e += 2;
                    d("action push: unsupported push recognized");
                    break
            }
        }
        this.fj = f
    };
    var Xb = function(a, b, c) {
        this.ed = hb(a, b)
    };
    var Yb = function(a, b, c) {
        this.ed = hb(a, b)
    };
    var Zb = function(a, b) {};
    var $b = function(a, b, c) {
        var d = a[b];
        this.play = d & 1;
        this.Xh = d & 2;
        if (this.Xh) {
            this.Wh = gb(a, b + 1)
        }
    };
    var _b = function(a, b, d) {
        this.li = a[b];
        c("ActionWaitForFrame2 is not supported")
    };
    var ac = function(a, b, c) {
        this.Gg = rb(a, b, 0);
        this.Hg = rb(a, b, 1);
        this.$h = sb(a, b, 6, 2)
    };
    var bc = function(a, b) {};
    var cc = function(a, b, c, e) {
        d("action parser: not supported action code detected [" + e + "]")
    };
    var dc = {
        129: Rb,
        131: Sb,
        138: Tb,
        139: Ub,
        140: Vb,
        150: Wb,
        153: Xb,
        157: Yb,
        158: Zb,
        159: $b,
        141: _b,
        154: ac
    };
    var ec = function(a, b, d, e) {
        var f = b;
        var g = a[f];
        f++;
        if (g == 255) {
            g = gb(a, f);
            f += 2
        }
        var h = 0;
        var i = [];
        for (var j = 0; j < g; j++) {
            var k = {};
            var l = a[f];
            f++;
            k.aj = l;
            if (l == 0) {
                if (d == 3) {
                    k.Kd = kb(a, f);
                    f += 4
                } else {
                    k.Kd = jb(a, f);
                    f += 3
                }
            } else if (l == 16 || l == 18 || l == 19) {
                k.Mg = [];
                k.zf = {
                    Bh: []
                };
                h = ub(a, f, k.Mg);
                f += h;
                h = zb(a, f, d, k.zf);
                f += h;
                if (l == 19) {
                    c("paser fillstyle: detected swf8 structure")
                }
            } else if (l == 64 || l == 65 || l == 66 || l == 67) {
                k._c = gb(a, f);
                f += 2;
                k.Mg = [];
                h = ub(a, f, k.Mg);
                f += h
            } else {
                c("parser fillstyle: unknown type:" + l)
            }
            i.push(k)
        }
        e.Qe = i;
        return f - b
    };
    var fc = function(a, b, c, d) {
        var e = b;
        var f = a[e];
        e++;
        if (f == 255) {
            f = gb(a, e);
            e += 2
        }
        var g = [];
        for (var h = 0; h < f; h++) {
            var i = {};
            i.width = gb(a, e);
            e += 2;
            if (c == 3) {
                i.Kd = kb(a, e);
                e += 4
            } else {
                i.Kd = jb(a, e);
                e += 3
            }
            g.push(i)
        }
        d.Bg = g;
        return e - b
    };
    var gc = function(a, b, c, d) {
        var e = b;
        var f = 0;
        f = ec(a, e, c, d);
        e += f;
        f = fc(a, e, c, d);
        e += f;
        f = hc(a, e, c, d, "hi");
        e += f;
        return e - b
    };
    var hc = function(a, b, c, d, e) {
        var f = b;
        var g;
        var i = sb(a, f, 0, 4);
        var j = sb(a, f, 4, 4);
        f++;
        var k;
        if (e) {
            k = []
        } else {
            k = d
        }
        var l;
        var m = 0;
        while ((l = sb(a, f, m, 6)) != 0) {
            var n = {};
            if (l & 32) {
                if (l & 16) {
                    n.aj = h.Ab;
                    n.x = 0;
                    n.y = 0;
                    m += 2;
                    var o = sb(a, f, m, 4) + 2;
                    m += 4;
                    var p = rb(a, f, m);
                    m++;
                    if (p) {
                        n.x = pb(sb(a, f, m, o), o);
                        m += o;
                        n.y = pb(sb(a, f, m, o), o);
                        m += o
                    } else {
                        var q = rb(a, f, m);
                        m++;
                        if (q) {
                            n.y = pb(sb(a, f, m, o), o);
                            m += o
                        } else {
                            n.x = pb(sb(a, f, m, o), o);
                            m += o
                        }
                    }
                } else {
                    n.aj = h.tb;
                    m += 2;
                    var o = sb(a, f, m, 4) + 2;
                    m += 4;
                    n.he = pb(sb(a, f, m, o), o);
                    m += o;
                    n.ke = pb(sb(a, f, m, o), o);
                    m += o;
                    n.Wc = pb(sb(a, f, m, o), o);
                    m += o;
                    n.Xc = pb(sb(a, f, m, o), o);
                    m += o
                }
            } else {
                n.aj = h.Bb;
                m++;
                var r = rb(a, f, m);
                m++;
                var s = rb(a, f, m);
                m++;
                var t = rb(a, f, m);
                m++;
                var u = rb(a, f, m);
                m++;
                var v = rb(a, f, m);
                m++;
                if (v) {
                    var w = sb(a, f, m, 5);
                    m += 5;
                    var x = sb(a, f, m, w);
                    m += w;
                    var y = sb(a, f, m, w);
                    m += w;
                    n.Ae = pb(x, w);
                    n.Be = pb(y, w)
                }
                if (u) {
                    n.Oe = sb(a, f, m, i);
                    m += i
                }
                if (t) {
                    n.Pe = sb(a, f, m, i);
                    m += i
                }
                if (s) {
                    n.Ag = sb(a, f, m, j);
                    m += j
                }
                if (r) {
                    f += Math.ceil(m / 8);
                    m = 0;
                    g = ec(a, f, c, n);
                    f += g;
                    g = fc(a, f, c, n);
                    f += g;
                    i = sb(a, f, 0, 4);
                    m += 4;
                    j = sb(a, f, 4, 4);
                    m += 4
                }
            }
            k.push(n)
        }
        m += 6;
        if (e) {
            d[e] = k
        }
        f += Math.ceil(m / 8);
        return f - b
    };
    var ic = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 1, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    ic.prototype.aj = g.Nb;
    var jc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 2, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    jc.prototype.aj = g.Ob;
    var kc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            c.dd = [];
            var d = tb(a, b + 2, c.dd);
            gc(a, b + 2 + d, 3, c);
            return c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    kc.prototype.aj = g.Pb;
    var lc = function(a, b, c, d, e, f) {
        Ab(this, "gg", function() {
            return a.slice(b, b + c)
        }, e);
        Ic.hg = this
    };
    lc.prototype.aj = g.Wb;
    var mc = function(a, b, c, e, f, g) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var e = a.slice(b + 2, b + c);
            if (!Ic.hg) {
                d("DefineBits warning: not found JPEGTables")
            }
            return Ic.$d(Ic.hg, e, g)
        }, false)
    };
    mc.prototype.aj = g.Cb;
    var nc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var d = a.slice(b + 2, b + c);
            return Ic.Xd(d, f)
        }, false)
    };
    nc.prototype.aj = g.Db;
    var oc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "img", function() {
            var d = b + 2;
            var e = ib(a, d);
            d += 4;
            var g = a.slice(d, d + e);
            d += e;
            var h = a.slice(d, b + c);
            return Ic.Yd(g, h, f)
        }, false)
    };
    oc.prototype.aj = g.Eb;
    var pc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = a[b + 2];
            d.width = gb(a, b + 3);
            d.height = gb(a, b + 5);
            var f = b + 7;
            if (e == 3) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
                case 3:
                    h = 8;
                    break;
                case 4:
                    h = 16;
                    break;
                case 5:
                    h = 24;
                    break
            }
            d.img = Ic._d(a.slice(f, b + c), h, g, d.width, d.height, false);
            return d
        }, ["width", "height", "img"], e)
    };
    pc.prototype.aj = g.Fb;
    var qc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = a[b + 2];
            d.width = gb(a, b + 3);
            d.height = gb(a, b + 5);
            var f = b + 7;
            if (e == 3) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
                case 3:
                    h = 8;
                    break;
                case 4:
                    h = 16;
                    break;
                case 5:
                    h = 32;
                    break
            }
            d.img = Ic._d(a.slice(f, b + c), h, g, d.width, d.height, true);
            return d
        }, ["width", "height", "img"], e)
    };
    qc.prototype.aj = g.Gb;
    var rc = function(a, b, c) {
        var d = b;
        var e = a[d];
        d++;
        for (var f = 0; f < e; f++) {
            var g = {};
            g.xi = a[d];
            d++;
            g.ui = kb(a, d);
            d += 4;
            g.Ge = a[d];
            d++;
            g.De = kb(a, d);
            d += 4;
            c.push(g)
        }
        return d - b
    };
    var sc = function(a, b, d) {
        var e = b;
        var f = a[e];
        e++;
        if (f == 255) {
            f = gb(a, e);
            e += 2
        }
        var g;
        var h = [];
        for (var i = 0; i < f; i++) {
            var j = {};
            var k = a[e];
            e++;
            j.aj = k;
            if (k == 0) {
                j.start = kb(a, e);
                e += 4;
                j.end = kb(a, e);
                e += 4
            } else if (k == 16 || k == 18) {
                j.start = [];
                j.end = [];
                j.zf = {
                    Bh: []
                };
                g = ub(a, e, j.start);
                e += g;
                g = ub(a, e, j.end);
                e += g;
                g = rc(a, e, j.zf.Bh);
                e += g
            } else if (k == 64 || k == 65 || k == 66 || k == 67) {
                j._c = gb(a, e);
                e += 2;
                j.wi = [];
                j.Fe = [];
                g = ub(a, e, j.wi);
                e += g;
                g = ub(a, e, j.Fe);
                e += g
            } else {
                c("DefineMorph parse: unknown type detected [" + k + "]")
            }
            h.push(j)
        }
        d.Qe = h;
        return e - b
    };
    var tc = function(a, b, c) {
        var d = b;
        var e = a[d];
        d++;
        if (e == 255) {
            e = gb(a, d);
            d += 2
        }
        var f;
        var g = [];
        for (var h = 0; h < e; h++) {
            var i = {};
            i.zi = gb(a, d);
            d += 2;
            i.He = gb(a, d);
            d += 2;
            i.ui = kb(a, d);
            d += 4;
            i.De = kb(a, d);
            d += 4;
            g.push(i)
        }
        c.Bg = g;
        return d - b
    };
    var uc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.ti = [];
            e = tb(a, d, c.ti);
            d += e;
            c.Ce = [];
            e = tb(a, d, c.Ce);
            d += e;
            c._g = ib(a, d);
            d += 4;
            e = sc(a, d, c);
            d += e;
            e = tc(a, d, c);
            d += e;
            e = hc(a, d, 1, c, "vi");
            d += e;
            e = hc(a, d, 1, c, "Ee");
            d += e;
            if (c.vi.length - 1 == c.Ee.length && c.Ee[0] != h.Bb) {
                c.Ee.unshift(c.vi[0])
            }
            return c
        }, ["ti", "Ce", "_g", "Qe", "Bg", "vi", "Ee"], e)
    };
    uc.prototype.aj = g.Mb;
    var vc = function(a, b, c, d, e, f) {
        var g = b;
        var h = a[g];
        var i = h & 8;
        var j = h & 4;
        var k = h & 2;
        var l = h & 1;
        g++;
        f.Ze = null;
        if (i) {
            f.Ze = gb(a, g);
            g += 2
        }
        f.Kd = null;
        if (j) {
            if (c == 2) {
                f.Kd = kb(a, g);
                g += 4
            } else {
                f.Kd = jb(a, g);
                g += 3
            }
        }
        f.x = null;
        if (l) {
            f.x = hb(a, g);
            g += 2
        }
        f.y = null;
        if (k) {
            f.y = hb(a, g);
            g += 2
        }
        f.height = null;
        if (i) {
            f.height = gb(a, g);
            g += 2
        }
        var m = a[g];
        g++;
        var n = 0;
        var o = [];
        for (var p = 0; p < m; p++) {
            var q = {};
            q.Mf = sb(a, g, n, d);
            n += d;
            q.Kc = pb(sb(a, g, n, e), e);
            n += e;
            o.push(q)
        }
        f.xf = o;
        g += Math.ceil(n / 8);
        return g - b
    };
    var wc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Ab(this, "hi", function() {
            var c = b + 2;
            var d = gb(a, c);
            c += d;
            d /= 2;
            var e = [];
            var f;
            for (var g = 0; g < d; g++) {
                var h = [];
                f = hc(a, c, 1, h);
                c += f;
                e.push(h)
            }
            return e
        }, e)
    };
    wc.prototype.aj = g.Kb;
    var xc = function(a, b, c, e, f, g) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var e = b + 2;
            var f;
            var g = a[e];
            var h = g & 128;
            var i = g & 64;
            var j = g & 32;
            var k = g & 16;
            var l = g & 8;
            var m = g & 4;
            var n = g & 2;
            var o = g & 1;
            e++;
            e++;
            var p = a[e];
            e++;
            e += p;
            var q = gb(a, e);
            e += 2;
            if (l) {
                e += 4 * (q + 1)
            } else {
                e += 2 * (q + 1)
            }
            var r = [];
            for (var s = 0; s < q; s++) {
                var t = [];
                f = hc(a, e, 1, t);
                e += f;
                r.push(t)
            }
            c.gi = r;
            var u = [];
            for (var s = 0; s < q; s++) {
                var v = a[e];
                e++;
                var w = 0;
                if (m) {
                    w = a[e];
                    e++
                }
                if (w == 0) {
                    u.push(v)
                } else {
                    var x = Cb([w, v]);
                    u.push(x.charCodeAt(0))
                }
            }
            c.Jd = u;
            c.Xe = null;
            c.Ye = null;
            c.$e = null;
            c.We = null;
            if (h) {
                c.Xe = gb(a, e);
                e += 2;
                c.Ye = gb(a, e);
                e += 2;
                c.$e = gb(a, e);
                e += 2;
                var y = [];
                for (var s = 0; s < q; s++) {
                    y.push(gb(a, e));
                    e += 2
                }
                c.We = y;
                for (var s = 0; s < q; s++) {
                    var z = [];
                    f = tb(a, e, z);
                    e += f
                }
                var A = gb(a, e);
                e += 2;
                if (A != 0) {
                    d("DefineFont2 parse: wrong format detected")
                }
            }
            return c
        }, ["gi", "Jd", "Xe", "Ye", "$e", "We"], f)
    };
    xc.prototype.aj = g.Lb;
    var yc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            c.Mg = [];
            e = ub(a, d, c.Mg);
            d += e;
            var f = a[d];
            d++;
            var g = a[d];
            d++;
            var h = [];
            while (a[d]) {
                var i = {};
                e = vc(a, d, 1, f, g, i);
                d += e;
                h.push(i)
            }
            c.Bh = h;
            return c
        }, ["dd", "Mg", "Bh"], e)
    };
    yc.prototype.aj = g.Rb;
    var zc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            c.Mg = [];
            e = ub(a, d, c.Mg);
            d += e;
            var f = a[d];
            d++;
            var g = a[d];
            d++;
            var h = [];
            while (a[d]) {
                var i = {};
                e = vc(a, d, 2, f, g, i);
                d += e;
                h.push(i)
            }
            c.Bh = h;
            return c
        }, ["dd", "Mg", "Bh"], e)
    };
    zc.prototype.aj = g.Sb;
    var Ac = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            c.dd = [];
            e = tb(a, d, c.dd);
            d += e;
            var f = a[d];
            var g = f & 128;
            c.mj = !!(f & 64);
            c.multiline = !!(f & 32);
            var h = f & 16;
            var i = f & 8;
            var j = f & 4;
            var k = f & 2;
            var l = f & 1;
            d++;
            f = a[d];
            var m = f & 128;
            var n = f & 64;
            var o = f & 32;
            var p = f & 16;
            var q = f & 8;
            var r = f & 4;
            var s = f & 2;
            c.ej = !!(f & 1);
            d++;
            c.Ze = null;
            if (l) {
                c.Ze = gb(a, d);
                d += 2
            }
            if (m) {
                var t = mb(a, d);
                d += t.length
            }
            c.height = null;
            if (l) {
                c.height = gb(a, d);
                d += 2
            }
            c.Kd = null;
            if (j) {
                c.Kd = kb(a, d);
                d += 4
            }
            c.Ng = null;
            if (k) {
                c.Ng = gb(a, d);
                d += 2
            }
            c.align = null;
            c.wg = null;
            c.Oh = null;
            c.Lf = null;
            c.vg = null;
            if (o) {
                c.align = a[d];
                d++;
                c.wg = gb(a, d);
                d += 2;
                c.Oh = gb(a, d);
                d += 2;
                c.Lf = gb(a, d);
                d += 2;
                c.vg = gb(a, d);
                d += 2
            }
            c.gj = mb(a, d);
            d += c.gj.length + 1;
            c.Rf = g ? ob(a, d)[0] : "";
            return c
        }, ["dd", "mj", "multiline", "ej", "Ze", "height", "Kd", "Ng", "align", "wg", "Oh", "Lf", "vg", "gj", "Rf"], e)
    };
    Ac.prototype.aj = g.Jb;
    var Bc = function(a, b, d, e) {
        var f = b;
        var g;
        var h = a[b];
        var i = h & 32;
        var j = h & 16;
        e.Ci = !!(h & 8);
        e.Bi = !!(h & 4);
        e.Di = !!(h & 2);
        e.Ei = !!(h & 1);
        f++;
        e.wd = gb(a, f);
        f += 2;
        e.re = gb(a, f);
        f += 2;
        e.Mg = [];
        g = ub(a, f, e.Mg);
        f += g;
        e.Ld = null;
        if (d == 2) {
            e.Ld = [];
            g = vb(a, f, e.Ld);
            f += g;
            if (j) {
                c("ButtonRecord parse error: hasFilterList is not supported in Flash 4")
            }
            if (i) {
                c("ButtonRecord parse error: hasBlendMode is not supported in Flash 4")
            }
        }
        return f - b
    };
    var Cc = function(a, b, c) {
        var d = b;
        d += 2;
        var e = a[d];
        c.Hf = !!(e & 128);
        c.fh = !!(e & 64);
        c.gh = !!(e & 32);
        c.jh = !!(e & 16);
        c.kh = !!(e & 8);
        c.mh = !!(e & 4);
        c.lh = !!(e & 2);
        c.If = !!(e & 1);
        d++;
        e = a[d];
        c.ih = !!(e & 1);
        c.lg = sb(a, d, 0, 7);
        d++;
        c.Gc = [];
        var f = Pb(a, d, c.Gc);
        d += f;
        return d - b
    };
    var Dc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            var f = [];
            while (a[d]) {
                var g = {};
                e = Bc(a, d, 1, g);
                d += e;
                f.push(g)
            }
            c.xd = f;
            d++;
            c.Gc = [];
            Pb(a, d, c.Gc);
            return c
        }, ["xd", "Gc"], e)
    };
    Dc.prototype.aj = g.Hb;
    var Ec = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var c = {};
            var d = b + 2;
            var e;
            d++;
            var f = gb(a, d);
            d += 2;
            var g = [];
            while (a[d]) {
                var h = {};
                e = Bc(a, d, 2, h);
                d += e;
                g.push(h)
            }
            c.xd = g;
            d++;
            var i = [];
            if (f) {
                var j;
                do {
                    var k = {};
                    j = gb(a, d);
                    e = Cc(a, d, k);
                    d += e;
                    i.push(k)
                } while (j)
            }
            c.Gc = i;
            return c
        }, ["xd", "Gc"], e)
    };
    Ec.prototype.aj = g.Ib;
    var Fc = function(a, b, c, d, e, f) {
        this.id = gb(a, b);
        Bb(this, function() {
            var d = {};
            var e = b + 2;
            d.df = gb(a, e);
            e += 2;
            var f = [];
            while (e < b + c) {
                var g = gb(a, e);
                var h = 2;
                var i = g >> 6;
                var j = g & 63;
                if (j == 63) {
                    j = ib(a, e + 2);
                    h += 4
                }
                var k = Hc[i] || Gc;
                var l = new k(a, e + h, j, i);
                f.push(l);
                e += j + h
            }
            d.Ji = f;
            return d
        }, ["df", "Ji"], e)
    };
    Fc.prototype.aj = g.Qb;
    var Gc = function(a, b, c, e) {
        d("parser: not supported tag detected [" + e + "]");
        this.aj = e
    };
    var Hc = {
        0: Ib,
        1: Ob,
        2: ic,
        4: Lb,
        6: mc,
        7: Dc,
        8: lc,
        9: Jb,
        10: wc,
        11: yc,
        12: Qb,
        20: pc,
        21: nc,
        22: jc,
        26: Mb,
        28: Nb,
        32: kc,
        33: zc,
        34: Ec,
        35: oc,
        36: qc,
        37: Ac,
        39: Fc,
        43: Kb,
        46: uc,
        48: xc
    };
    var Ic = {
        hg: null,
        _d: function(a, b, c, d, e, f) {
            var g = (new Zlib.Inflate(a)).decompress();
            var h = document.createElement("canvas");
            h.width = d;
            h.height = e;
            var i = h.getContext("2d");
            var j = i.createImageData(d, e);
            var k = j.data;
            var l = 0;
            var m = 0;
            if (b == 8) {
                var n = new Array(c);
                var o = new Array(c);
                var p = new Array(c);
                var q = new Array(c);
                if (f) {
                    if (this.usePremultipliedAlpha) {
                        for (var r = 0; r < c; r++) {
                            n[r] = g[m++];
                            o[r] = g[m++];
                            p[r] = g[m++];
                            q[r] = g[m++]
                        }
                    } else {
                        for (var r = 0; r < c; r++) {
                            var s = g[m++];
                            var t = g[m++];
                            var u = g[m++];
                            var v = g[m++];
                            if (v == 255 || v == 0) {
                                n[r] = s;
                                o[r] = t;
                                p[r] = u
                            } else {
                                var w = 255 / v;
                                n[r] = ~~(s * w);
                                o[r] = ~~(t * w);
                                p[r] = ~~(u * w)
                            }
                            q[r] = v
                        }
                    }
                } else {
                    for (var r = 0; r < c; r++) {
                        n[r] = g[m++];
                        o[r] = g[m++];
                        p[r] = g[m++];
                        q[r] = 255
                    }
                }
                var x = Math.ceil(d / 4) * 4;
                var y = g.slice ? g.slice(m) : g.subarray(m);
                var z;
                for (var A = 0; A < e; A++) {
                    for (var B = 0, C = A * x; B < d; B++, C++) {
                        z = y[C] & 255;
                        k[l++] = n[z];
                        k[l++] = o[z];
                        k[l++] = p[z];
                        k[l++] = q[z]
                    }
                }
            } else if (b == 16) {
                var D = d % 2 != 0;
                for (var A = 0; A < e; A++) {
                    for (var B = 0; B < d; B++) {
                        var E = (g[m] << 8) + g[m + 1];
                        m += 2;
                        var F = (E & 31744) >>> 10;
                        var G = (E & 992) >>> 5;
                        var H = (E & 31) >>> 0;
                        k[l++] = (F << 3) + (F >>> 2);
                        k[l++] = (G << 3) + (G >>> 2);
                        k[l++] = (H << 3) + (H >>> 2);
                        k[l++] = 255
                    }
                    if (D) {
                        m += 2
                    }
                }
            } else if (b == 24) {
                for (var A = 0; A < e; A++) {
                    for (var B = 0; B < d; B++) {
                        m++;
                        k[l++] = g[m++];
                        k[l++] = g[m++];
                        k[l++] = g[m++];
                        k[l++] = 255
                    }
                }
            } else if (b == 32) {
                if (this.usePremultipliedAlpha) {
                    for (var A = 0; A < e; A++) {
                        for (var B = 0; B < d; B++) {
                            var v = g[m++];
                            k[l++] = g[m++];
                            k[l++] = g[m++];
                            k[l++] = g[m++];
                            k[l++] = v
                        }
                    }
                } else {
                    for (var A = 0; A < e; A++) {
                        for (var B = 0; B < d; B++) {
                            var v = g[m++];
                            if (v == 255 || v == 0) {
                                k[l++] = g[m++];
                                k[l++] = g[m++];
                                k[l++] = g[m++]
                            } else {
                                var w = 255 / v;
                                for (var r = 0; r < 3; r++) {
                                    var I = ~~(g[m++] * w);
                                    k[l++] = 255 > I ? I : 255
                                }
                            }
                            k[l++] = v
                        }
                    }
                }
            }
            i.putImageData(j, 0, 0);
            return h
        },
        Xd: function(a, b) {
            var c = Ic.Td(a);
            return Ic.Zd(c, b)
        },
        Yd: function(a, b, c) {
            var d = Ic.Td(a);
            var e = (new Zlib.Inflate(b)).decompress();
            var f = Ic.Uc(d);
            var g = document.createElement("img");
            var h = document.createElement("canvas");
            h.width = 0;
            h.height = 0;
            var i = this.usePremultipliedAlpha;
            g.onload = function() {
                var a = g.width;
                var b = g.height;
                h.width = a;
                h.height = b;
                var d = h.getContext("2d");
                d.drawImage(g, 0, 0);
                var f = d.getImageData(0, 0, a, b);
                var j = f.data;
                var k = a * b;
                var l;
                if (i) {
                    for (var m = 0, n = 3; m < k; m++, n += 4) {
                        l = j[n] = e[m];
                        if (l == 0) {
                            j[n - 1] = j[n - 2] = j[n - 3] = 0
                        } else if (l != 255) {
                            if (l < j[n - 1]) {
                                j[n - 1] = l
                            }
                            if (l < j[n - 2]) {
                                j[n - 2] = l
                            }
                            if (l < j[n - 3]) {
                                j[n - 3] = l
                            }
                        }
                    }
                } else {
                    var o;
                    for (var m = 0, n = 3; m < k; m++, n += 4) {
                        l = j[n] = e[m];
                        if (l != 255 && l != 0) {
                            o = 255 / l;
                            j[n - 1] = ~~(j[n - 1] * o);
                            j[n - 2] = ~~(j[n - 2] * o);
                            j[n - 3] = ~~(j[n - 3] * o)
                        }
                    }
                }
                d.putImageData(f, 0, 0);
                --c.loadingImageCount
            };
            g.src = "data:image/jpeg;base64," + f;
            ++c.loadingImageCount;
            setTimeout(function() {}, 0);
            return h
        },
        $d: function(a, b, c) {
            var d;
            if (a == null || a.length < 4) {
                d = b
            } else {
                a = a.gg;
                d = a.slice(0, a.length - 2).concat(b.slice(2))
            }
            return Ic.Zd(d, c)
        },
        Zd: function(a, b) {
            var c = document.createElement("img");
            c.onload = function() {
                --b.loadingImageCount
            };
            c.src = "data:image/jpeg;base64," + Ic.Uc(a);
            ++b.loadingImageCount;
            return c
        },
        Td: function(a) {
            var b;
            if (a[0] == 255 && a[1] == 217 && a[2] == 255 && a[3] == 216) {
                b = a.slice(4)
            } else {
                b = [];
                var d = 0;
                if (a[d] == 255 && a[d + 1] == 216) {
                    b = b.concat(a.slice(d, d + 2));
                    d += 2;
                    while (d < a.length) {
                        if (a[d] == 255) {
                            if (a[d + 1] == 217 && a[d + 2] == 255 && a[d + 3] == 216) {
                                d += 4;
                                b = b.concat(a.slice(d));
                                break
                            } else if (a[d + 1] == 218) {
                                b = b.concat(a.slice(d));
                                break
                            } else {
                                var e = (a[d + 2] << 8) + (a[d + 3] & 255);
                                b = b.concat(a.slice(d, d + e + 2));
                                d += e + 2
                            }
                        } else {
                            c("JPEG marker invalid: i=" + d)
                        }
                    }
                } else {
                    c("SOI missing")
                }
            }
            return b
        },
        Uc: function(a) {
            var b = [];
            var c = 1e4;
            var d = Math.ceil(a.length / c);
            for (var e = 0; e < d; e++) {
                b.push(String.fromCharCode.apply(null, a.slice(e * c, Math.min((e + 1) * c, a.length))))
            }
            return btoa(b.join(""))
        }
    };
    Ic.__defineGetter__("usePremultipliedAlpha", function() {
        delete this.usePremultipliedAlpha;
        var a = document.createElement("canvas");
        a.width = a.height = 1;
        var b = a.getContext("2d");
        var c = b.createImageData(1, 1);
        var d = c.data;
        d[0] = d[3] = 128;
        b.putImageData(c, 0, 0);
        return this.usePremultipliedAlpha = b.getImageData(0, 0, 1, 1).data[0] == 255
    });
    (function() {
        "use strict";

        function b(b, c, d) {
            b = b.split(".");
            d = d || a;
            !(b[0] in d) && d.execScript && d.execScript("var " + b[0]);
            for (var e; b.length && (e = b.shift());) !b.length && void 0 !== c ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
        }

        function l(a) {
            var b = a.length,
                d = 0,
                e = Number.POSITIVE_INFINITY,
                f, g, h, i, j, k, l, m, n;
            for (m = 0; m < b; ++m) a[m] > d && (d = a[m]), a[m] < e && (e = a[m]);
            f = 1 << d;
            g = new(c ? Uint32Array : Array)(f);
            h = 1;
            i = 0;
            for (j = 2; h <= d;) {
                for (m = 0; m < b; ++m)
                    if (a[m] === h) {
                        k = 0;
                        l = i;
                        for (n = 0; n < h; ++n) k = k << 1 | l & 1, l >>= 1;
                        for (n = k; n < f; n += j) g[n] = h << 16 | m;
                        ++i
                    }++ h;
                i <<= 1;
                j <<= 1
            }
            return [g, d, e]
        }

        function o(a, b) {
            this.length = a;
            this.u = b
        }

        function p(a) {
            switch (!0) {
                case 3 === a:
                    return [257, a - 3, 0];
                case 4 === a:
                    return [258, a - 4, 0];
                case 5 === a:
                    return [259, a - 5, 0];
                case 6 === a:
                    return [260, a - 6, 0];
                case 7 === a:
                    return [261, a - 7, 0];
                case 8 === a:
                    return [262, a - 8, 0];
                case 9 === a:
                    return [263, a - 9, 0];
                case 10 === a:
                    return [264, a - 10, 0];
                case 12 >= a:
                    return [265, a - 11, 1];
                case 14 >= a:
                    return [266, a - 13, 1];
                case 16 >= a:
                    return [267, a - 15, 1];
                case 18 >= a:
                    return [268, a - 17, 1];
                case 22 >= a:
                    return [269, a - 19, 2];
                case 26 >= a:
                    return [270, a - 23, 2];
                case 30 >= a:
                    return [271, a - 27, 2];
                case 34 >= a:
                    return [272, a - 31, 2];
                case 42 >= a:
                    return [273, a - 35, 3];
                case 50 >= a:
                    return [274, a - 43, 3];
                case 58 >= a:
                    return [275, a - 51, 3];
                case 66 >= a:
                    return [276, a - 59, 3];
                case 82 >= a:
                    return [277, a - 67, 4];
                case 98 >= a:
                    return [278, a - 83, 4];
                case 114 >= a:
                    return [279, a - 99, 4];
                case 130 >= a:
                    return [280, a - 115, 4];
                case 162 >= a:
                    return [281, a - 131, 5];
                case 194 >= a:
                    return [282, a - 163, 5];
                case 226 >= a:
                    return [283, a - 195, 5];
                case 257 >= a:
                    return [284, a - 227, 5];
                case 258 === a:
                    return [285, a - 258, 0];
                default:
                    throw "invalid length: " + a
            }
        }

        function u(a, b) {
            this.k = [];
            this.f = 32768;
            this.e = this.h = this.b = this.n = 0;
            this.input = c ? new Uint8Array(a) : a;
            this.p = !1;
            this.i = w;
            this.I = !1;
            if (b && (b.Mf && (this.b = b.Mf), b.L && (this.f = b.f), b.i)) this.i = b.i;
            switch (this.i) {
                case v:
                    this.a = 32768;
                    this.c = new(c ? Uint8Array : Array)(32768 + this.f + 258);
                    break;
                case w:
                    this.a = 0;
                    this.c = new(c ? Uint8Array : Array)(this.f);
                    this.g = this.A;
                    this.q = this.v;
                    this.l = this.z;
                    break;
                default:
                    throw Error("invalid inflate mode")
            }
        }

        function Q(a, b) {
            var c, d, e;
            this.input = a;
            this.b = 0;
            if (b && (b.Mf && (this.b = b.Mf), b.f && (c = b.f), b.o)) this.o = b.o;
            d = a[this.b++];
            e = a[this.b++];
            switch (d & 15) {
                case ab:
                    this.method = ab;
                    break;
                default:
                    throw Error("unsupported compression method")
            }
            if (0 !== ((d << 8) + e) % 31) throw Error("invalid fcheck flag:" + ((d << 8) + e) % 31);
            if (e & 32) throw Error("fdict flag is not supported");
            this.H = new u(a, {
                Mf: this.b,
                f: c
            })
        }
        var a = this;
        Math.floor(2147483648 * Math.random()).toString(36);
        var c = "function" === typeof Uint8Array && "function" === typeof Uint16Array && "function" === typeof Uint32Array;
        var d = new(c ? Uint8Array : Array)(256),
            e;
        for (e = 0; 256 > e; ++e) {
            for (var f = d, g = e, h = e, i = h, j = 7, h = h >>> 1; h; h >>>= 1) i <<= 1, i |= h & 1, --j;
            f[g] = (i << j & 255) >>> 0
        }
        var k = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        c && new Uint32Array(k);
        var m = [],
            n;
        for (n = 0; 288 > n; n++) switch (!0) {
            case 143 >= n:
                m.push([n + 48, 8]);
                break;
            case 255 >= n:
                m.push([n - 144 + 400, 9]);
                break;
            case 279 >= n:
                m.push([n - 256 + 0, 7]);
                break;
            case 287 >= n:
                m.push([n - 280 + 192, 8]);
                break;
            default:
                throw "invalid literal: " + n
        }
        var q = [],
            r, s;
        for (r = 3; 258 >= r; r++) s = p(r), q[r] = s[2] << 24 | s[1] << 16 | s[0];
        var t = c ? new Uint32Array(q) : q;
        o.prototype.B = function(a) {
            switch (!0) {
                case 1 === a:
                    a = [0, a - 1, 0];
                    break;
                case 2 === a:
                    a = [1, a - 2, 0];
                    break;
                case 3 === a:
                    a = [2, a - 3, 0];
                    break;
                case 4 === a:
                    a = [3, a - 4, 0];
                    break;
                case 6 >= a:
                    a = [4, a - 5, 1];
                    break;
                case 8 >= a:
                    a = [5, a - 7, 1];
                    break;
                case 12 >= a:
                    a = [6, a - 9, 2];
                    break;
                case 16 >= a:
                    a = [7, a - 13, 2];
                    break;
                case 24 >= a:
                    a = [8, a - 17, 3];
                    break;
                case 32 >= a:
                    a = [9, a - 25, 3];
                    break;
                case 48 >= a:
                    a = [10, a - 33, 4];
                    break;
                case 64 >= a:
                    a = [11, a - 49, 4];
                    break;
                case 96 >= a:
                    a = [12, a - 65, 5];
                    break;
                case 128 >= a:
                    a = [13, a - 97, 5];
                    break;
                case 192 >= a:
                    a = [14, a - 129, 6];
                    break;
                case 256 >= a:
                    a = [15, a - 193, 6];
                    break;
                case 384 >= a:
                    a = [16, a - 257, 7];
                    break;
                case 512 >= a:
                    a = [17, a - 385, 7];
                    break;
                case 768 >= a:
                    a = [18, a - 513, 8];
                    break;
                case 1024 >= a:
                    a = [19, a - 769, 8];
                    break;
                case 1536 >= a:
                    a = [20, a - 1025, 9];
                    break;
                case 2048 >= a:
                    a = [21, a - 1537, 9];
                    break;
                case 3072 >= a:
                    a = [22, a - 2049, 10];
                    break;
                case 4096 >= a:
                    a = [23, a - 3073, 10];
                    break;
                case 6144 >= a:
                    a = [24, a - 4097, 11];
                    break;
                case 8192 >= a:
                    a = [25, a - 6145, 11];
                    break;
                case 12288 >= a:
                    a = [26, a - 8193, 12];
                    break;
                case 16384 >= a:
                    a = [27, a - 12289, 12];
                    break;
                case 24576 >= a:
                    a = [28, a - 16385, 13];
                    break;
                case 32768 >= a:
                    a = [29, a - 24577, 13];
                    break;
                default:
                    throw "invalid distance"
            }
            return a
        };
        o.prototype.M = function() {
            var a = this.u,
                b = [],
                c = 0,
                d;
            d = t[this.length];
            b[c++] = d & 65535;
            b[c++] = d >> 16 & 255;
            b[c++] = d >> 24;
            d = this.B(a);
            b[c++] = d[0];
            b[c++] = d[1];
            b[c++] = d[2];
            return b
        };
        var v = 0,
            w = 1,
            x = {
                K: v,
                J: w
            };
        u.prototype.m = function() {
            for (; !this.p;) this.C();
            return this.q()
        };
        var y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            z = c ? new Uint16Array(y) : y,
            A = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
            B = c ? new Uint16Array(A) : A,
            C = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
            D = c ? new Uint8Array(C) : C,
            E = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            F = c ? new Uint16Array(E) : E,
            G = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            H = c ? new Uint8Array(G) : G,
            I = new(c ? Uint8Array : Array)(288),
            J, K;
        J = 0;
        for (K = I.length; J < K; ++J) I[J] = 143 >= J ? 8 : 255 >= J ? 9 : 279 >= J ? 7 : 8;
        var L = l(I),
            M = new(c ? Uint8Array : Array)(30),
            N, O;
        N = 0;
        for (O = M.length; N < O; ++N) M[N] = 5;
        var P = l(M);
        u.prototype.C = function() {
            var a = this.d(3);
            a & 1 && (this.p = !0);
            a >>>= 1;
            switch (a) {
                case 0:
                    this.G();
                    break;
                case 1:
                    this.F();
                    break;
                case 2:
                    this.D();
                    break;
                default:
                    throw Error("unknown BTYPE: " + a)
            }
        };
        u.prototype.d = function(a) {
            for (var b = this.h, c = this.e, d = this.input, e = this.b, f; c < a;) {
                f = d[e++];
                if (void 0 === f) throw Error("input buffer is broken");
                b |= f << c;
                c += 8
            }
            f = b & (1 << a) - 1;
            this.h = b >>> a;
            this.e = c - a;
            this.b = e;
            return f
        };
        u.prototype.j = function(a) {
            for (var b = this.h, c = this.e, d = this.input, e = this.b, f = a[0], a = a[1], g; c < a;) {
                g = d[e++];
                if (void 0 === g) throw Error("input buffer is broken");
                b |= g << c;
                c += 8
            }
            d = f[b & (1 << a) - 1];
            f = d >>> 16;
            this.h = b >> f;
            this.e = c - f;
            this.b = e;
            return d & 65535
        };
        u.prototype.G = function() {
            var a = this.input,
                b = this.b,
                d = this.c,
                e = this.a,
                f, g, h, i = d.length;
            this.e = this.h = 0;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: LEN (first byte)");
            g = f;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: LEN (second byte)");
            g |= f << 8;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: NLEN (first byte)");
            h = f;
            f = a[b++];
            if (void 0 === f) throw Error("invalid uncompressed block header: NLEN (second byte)");
            if (g === ~(h | f << 8)) throw Error("invalid uncompressed block header: length verify");
            if (b + g > a.length) throw Error("input buffer is broken");
            switch (this.i) {
                case v:
                    for (; e + g >= d.length;) {
                        f = i - e;
                        g -= f;
                        if (c) d.set(a.subarray(b, b + f), e), e += f, b += f;
                        else
                            for (; f--;) d[e++] = a[b++];
                        this.a = e;
                        d = this.g();
                        e = this.a
                    }
                    break;
                case w:
                    for (; e + g > d.length;) d = this.g({
                        s: 2
                    });
                    break;
                default:
                    throw Error("invalid inflate mode")
            }
            if (c) d.set(a.subarray(b, b + g), e), e += g, b += g;
            else
                for (; g--;) d[e++] = a[b++];
            this.b = b;
            this.a = e;
            this.c = d
        };
        u.prototype.F = function() {
            this.l(L, P)
        };
        u.prototype.D = function() {
            function a(a, b, c) {
                for (var d, e, f = 0, f = 0; f < a;) switch (d = this.j(b), d) {
                    case 16:
                        for (d = 3 + this.d(2); d--;) c[f++] = e;
                        break;
                    case 17:
                        for (d = 3 + this.d(3); d--;) c[f++] = 0;
                        e = 0;
                        break;
                    case 18:
                        for (d = 11 + this.d(7); d--;) c[f++] = 0;
                        e = 0;
                        break;
                    default:
                        e = c[f++] = d
                }
                return c
            }
            var b = this.d(5) + 257,
                d = this.d(5) + 1,
                e = this.d(4) + 4,
                f = new(c ? Uint8Array : Array)(z.length),
                g;
            for (g = g = 0; g < e; ++g) f[z[g]] = this.d(3);
            e = l(f);
            f = new(c ? Uint8Array : Array)(b);
            g = new(c ? Uint8Array : Array)(d);
            this.l(l(a.call(this, b, e, f)), l(a.call(this, d, e, g)))
        };
        u.prototype.l = function(a, b) {
            var c = this.c,
                d = this.a;
            this.r = a;
            this.w = b;
            for (var e = c.length - 258, f, g, h; 256 !== (f = this.j(a));)
                if (256 > f) d >= e && (this.a = d, c = this.g(), d = this.a), c[d++] = f;
                else {
                    f -= 257;
                    h = B[f];
                    0 < D[f] && (h += this.d(D[f]));
                    f = this.j(b);
                    g = F[f];
                    0 < H[f] && (g += this.d(H[f]));
                    d >= e && (this.a = d, c = this.g(), d = this.a);
                    for (; h--;) c[d] = c[d++ - g]
                } for (; 8 <= this.e;) this.e -= 8, this.b--;
            this.a = d
        };
        u.prototype.z = function(a, b) {
            var c = this.c,
                d = this.a;
            this.r = a;
            this.w = b;
            for (var e = c.length, f, g, h; 256 !== (f = this.j(a));)
                if (256 > f) d === e && (c = this.g(), e = c.length), c[d++] = f;
                else {
                    f -= 257;
                    h = B[f];
                    0 < D[f] && (h += this.d(D[f]));
                    f = this.j(b);
                    g = F[f];
                    0 < H[f] && (g += this.d(H[f]));
                    d + h >= e && (c = this.g(), e = c.length);
                    for (; h--;) c[d] = c[d++ - g]
                } for (; 8 <= this.e;) this.e -= 8, this.b--;
            this.a = d
        };
        u.prototype.g = function() {
            var a = new(c ? Uint8Array : Array)(this.a - 32768),
                b = this.a - 32768,
                d, e, f = this.c;
            if (c) a.set(f.subarray(32768, a.length));
            else {
                d = 0;
                for (e = a.length; d < e; ++d) a[d] = f[d + 32768]
            }
            this.k.push(a);
            this.n += a.length;
            if (c) f.set(f.subarray(b, b + 32768));
            else
                for (d = 0; 32768 > d; ++d) f[d] = f[b + d];
            this.a = 32768;
            return f
        };
        u.prototype.A = function(a) {
            var b = this.input.length / this.b + 1 | 0,
                d = this.input,
                e = this.c;
            a && ("number" === typeof a.s && (b = a.s), "number" === typeof a.t && (b += a.t));
            2 > b ? (a = (d.length - this.b) / this.r[2], a = 258 * (a / 2) | 0, a = a < e.length ? e.length + a : e.length << 1) : a = e.length * b;
            c ? (a = new Uint8Array(a), a.set(e)) : a = e;
            return this.c = a
        };
        u.prototype.q = function() {
            var a = 0,
                b = this.c,
                d = this.k,
                e, f = new(c ? Uint8Array : Array)(this.n + (this.a - 32768)),
                g, h, i, j;
            if (0 === d.length) return c ? this.c.subarray(32768, this.a) : this.c.slice(32768, this.a);
            g = 0;
            for (h = d.length; g < h; ++g) {
                e = d[g];
                i = 0;
                for (j = e.length; i < j; ++i) f[a++] = e[i]
            }
            g = 32768;
            for (h = this.a; g < h; ++g) f[a++] = b[g];
            this.k = [];
            return this.buffer = f
        };
        u.prototype.v = function() {
            var a, b = this.a;
            this.I ? c ? (a = new Uint8Array(b), a.set(this.c.subarray(0, b))) : a = this.c.slice(0, b) : a = c ? this.c.subarray(0, b) : this.c.slice(0, b);
            return this.buffer = a
        };
        Q.prototype.m = function() {
            var a = this.input,
                b;
            b = this.H.m();
            if (this.o) {
                var a = a[this.b++] << 24 | a[this.b++] << 16 | a[this.b++] << 8 | a[this.b++],
                    c = b;
                if ("string" === typeof c) {
                    var c = c.split(""),
                        d, e;
                    d = 0;
                    for (e = c.length; d < e; d++) c[d] = (c[d].charCodeAt(0) & 255) >>> 0
                }
                d = 1;
                e = 0;
                for (var f = c.length, g, h = 0; 0 < f;) {
                    g = 1024 < f ? 1024 : f;
                    f -= g;
                    do d += c[h++], e += d; while (--g);
                    d %= 65521;
                    e %= 65521
                }
                if (a !== (e << 16 | d) >>> 0) throw Error("invalid adler-32 checksum")
            }
            return b
        };
        b("Zlib.Inflate", Q, void 0);
        b("Zlib.Inflate.BufferType", x, void 0);
        b("Zlib.Inflate.prototype.decompress", Q.prototype.m, void 0);
        var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        c && new Uint16Array(R);
        var S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
        c && new Uint16Array(S);
        var T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
        c && new Uint8Array(T);
        var U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        c && new Uint16Array(U);
        var V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        c && new Uint8Array(V);
        var W = new(c ? Uint8Array : Array)(288),
            X, Y;
        X = 0;
        for (Y = W.length; X < Y; ++X) W[X] = 143 >= X ? 8 : 255 >= X ? 9 : 279 >= X ? 7 : 8;
        l(W);
        var Z = new(c ? Uint8Array : Array)(30),
            $, _;
        $ = 0;
        for (_ = Z.length; $ < _; ++$) Z[$] = 5;
        l(Z);
        var ab = 8
    }).call((new Function("return this"))())
})();
