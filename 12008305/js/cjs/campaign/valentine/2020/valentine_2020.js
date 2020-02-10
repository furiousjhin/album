(function(cjs, an) {

    var p;
    // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];

    // symbols:

    (lib.cover_sar = function() {
        this.initialize(img.valentine_2020_cover_sar);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,508);

    (lib.fp_hana3 = function() {
        this.initialize(img.valentine_2020_fp_hana3);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,24,22);

    (lib.heart = function() {
        this.initialize(img.valentine_2020_heart);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,53,46);

    (lib.img_kira = function() {
        this.initialize(img.valentine_2020_img_kira);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,30,30);

    (lib.replace_target_240x310_bg = function() {
        this.initialize(img.valentine_2020_replace_target_240x310_bg);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,240,310);

    (lib.replace_target_480x502_character = function() {
        this.initialize(img.valentine_2020_replace_target_480x502_character);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,502);

    (lib.Valentine2020 = function() {
        this.initialize(img.valentine_2020_Valentine2020);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,240,240);

    (lib.window = function() {
        this.initialize(img.valentine_2020_window);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,188);

    (lib.window_3 = function() {
        this.initialize(img.valentine_2020_window_3);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,170);

    (lib.window_4 = function() {
        this.initialize(img.valentine_2020_window_4);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,460,174);
    // helper functions:

    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }

    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
    }

    (lib.window_4_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.window_4();
        this.instance.parent = this;
        this.instance.setTransform(1, 0, 0.5019, 0.502);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1,0,230.9,87.4);

    (lib.white_rect = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(120, 155);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.white_rect, new cjs.Rectangle(0,0,240,310), null);

    (lib.replace_target_260x250_unit = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // replace
        this.instance = new lib.replace_target_480x502_character();
        this.instance.parent = this;
        this.instance.setTransform(10, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.replace_target_260x250_unit, new cjs.Rectangle(10,0,240,251), null);

    (lib.btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Az1ZjMAAAgzFMAnrAAAMAAAAzFg");
        this.shape.setTransform(127, 163.475);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(0,0,254,327), null);

    (lib.text_field_white = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            line4: 0,
            line3: 1,
            line2: 2,
            line1: 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_1 = function() {
            this.stop();

            /*for(i=1;i<=3;i++){
			this['m' + i].text = exportRoot['m' + i];
		}*/
        }
        this.frame_2 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_3 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_1
        this.m4 = new cjs.Text("","12px 'Arial'","#FFFFFF");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 49);

        this.m3 = new cjs.Text("","12px 'Arial'","#FFFFFF");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 34);

        this.m2 = new cjs.Text("","12px 'Arial'","#FFFFFF");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 18);

        this.m1 = new cjs.Text("","12px 'Arial'","#FFFFFF");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 2
                }
            }, {
                t: this.m2,
                p: {
                    y: 18
                }
            }, {
                t: this.m3,
                p: {
                    y: 34
                }
            }, {
                t: this.m4,
                p: {
                    y: 49
                }
            }]
        }).to({
            state: [{
                t: this.m2,
                p: {
                    y: 9
                }
            }, {
                t: this.m3,
                p: {
                    y: 25
                }
            }, {
                t: this.m4,
                p: {
                    y: 41
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 17
                }
            }, {
                t: this.m2,
                p: {
                    y: 33
                }
            }, {
                t: this.m3,
                p: {
                    y: 49
                }
            }, {
                t: this.m4,
                p: {
                    y: 64
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 25
                }
            }, {
                t: this.m2,
                p: {
                    y: 41
                }
            }, {
                t: this.m3,
                p: {
                    y: 57
                }
            }, {
                t: this.m4,
                p: {
                    y: 72
                }
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,98.7);

    (lib.text_field_passion = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_1 = function() {
            this.stop();

            for (i = 1; i <= 3; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_2 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_3 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_3
        this.m4 = new cjs.Text("","12px 'Arial'","#FF912D");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 49);

        this.m3 = new cjs.Text("","12px 'Arial'","#FF912D");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 34);

        this.m2 = new cjs.Text("","12px 'Arial'","#FF912D");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 18);

        this.m1 = new cjs.Text("","12px 'Arial'","#FF912D");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 2
                }
            }, {
                t: this.m2,
                p: {
                    y: 18
                }
            }, {
                t: this.m3,
                p: {
                    y: 34
                }
            }, {
                t: this.m4,
                p: {
                    y: 49
                }
            }]
        }).to({
            state: [{
                t: this.m2,
                p: {
                    y: 9
                }
            }, {
                t: this.m3,
                p: {
                    y: 25
                }
            }, {
                t: this.m4,
                p: {
                    y: 41
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 17
                }
            }, {
                t: this.m2,
                p: {
                    y: 33
                }
            }, {
                t: this.m3,
                p: {
                    y: 49
                }
            }, {
                t: this.m4,
                p: {
                    y: 64
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 25
                }
            }, {
                t: this.m2,
                p: {
                    y: 41
                }
            }, {
                t: this.m3,
                p: {
                    y: 57
                }
            }, {
                t: this.m4,
                p: {
                    y: 72
                }
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,98.7);

    (lib.text_field_cute = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_1 = function() {
            this.stop();

            for (i = 1; i <= 3; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_2 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_3 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_3
        this.m4 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 49);

        this.m3 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 34);

        this.m2 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 18);

        this.m1 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 2,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m2,
                p: {
                    y: 18,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m3,
                p: {
                    y: 34,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m4,
                p: {
                    y: 49,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }]
        }).to({
            state: [{
                t: this.m2,
                p: {
                    y: 9,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }, {
                t: this.m3,
                p: {
                    y: 25,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }, {
                t: this.m4,
                p: {
                    y: 41,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 17,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }, {
                t: this.m2,
                p: {
                    y: 33,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }, {
                t: this.m3,
                p: {
                    y: 49,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }, {
                t: this.m4,
                p: {
                    y: 64,
                    font: "12px 'MS PGothic'",
                    lineHeight: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 25,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m2,
                p: {
                    y: 41,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m3,
                p: {
                    y: 57,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }, {
                t: this.m4,
                p: {
                    y: 72,
                    font: "12px 'Arial'",
                    lineHeight: 15.35
                }
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,98.7);

    (lib.text_field_cool = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_1 = function() {
            this.stop();

            for (i = 1; i <= 3; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_2 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_3 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_3
        this.m4 = new cjs.Text("","12px 'Arial'","#0085F2");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 49);

        this.m3 = new cjs.Text("","12px 'Arial'","#0085F2");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 34);

        this.m2 = new cjs.Text("","12px 'Arial'","#0085F2");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 18);

        this.m1 = new cjs.Text("","12px 'Arial'","#0085F2");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 2
                }
            }, {
                t: this.m2,
                p: {
                    y: 18
                }
            }, {
                t: this.m3,
                p: {
                    y: 34
                }
            }, {
                t: this.m4,
                p: {
                    y: 49
                }
            }]
        }).to({
            state: [{
                t: this.m2,
                p: {
                    y: 9
                }
            }, {
                t: this.m3,
                p: {
                    y: 25
                }
            }, {
                t: this.m4,
                p: {
                    y: 41
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 17
                }
            }, {
                t: this.m2,
                p: {
                    y: 33
                }
            }, {
                t: this.m3,
                p: {
                    y: 49
                }
            }, {
                t: this.m4,
                p: {
                    y: 64
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 25
                }
            }, {
                t: this.m2,
                p: {
                    y: 41
                }
            }, {
                t: this.m3,
                p: {
                    y: 57
                }
            }, {
                t: this.m4,
                p: {
                    y: 72
                }
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,98.7);

    (lib.text_field_black = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_1 = function() {
            this.stop();

            for (i = 1; i <= 3; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_2 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_3 = function() {
            this.stop();

            for (i = 1; i <= 4; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_3
        this.m4 = new cjs.Text("","12px 'Arial'","#660033");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 49);

        this.m3 = new cjs.Text("","12px 'Arial'","#660033");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 34);

        this.m2 = new cjs.Text("","12px 'Arial'","#660033");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 18);

        this.m1 = new cjs.Text("","12px 'Arial'","#660033");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m1,
                p: {
                    y: 2
                }
            }, {
                t: this.m2,
                p: {
                    y: 18
                }
            }, {
                t: this.m3,
                p: {
                    y: 34
                }
            }, {
                t: this.m4,
                p: {
                    y: 49
                }
            }]
        }).to({
            state: [{
                t: this.m2,
                p: {
                    y: 9
                }
            }, {
                t: this.m3,
                p: {
                    y: 25
                }
            }, {
                t: this.m4,
                p: {
                    y: 41
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 17
                }
            }, {
                t: this.m2,
                p: {
                    y: 33
                }
            }, {
                t: this.m3,
                p: {
                    y: 49
                }
            }, {
                t: this.m4,
                p: {
                    y: 64
                }
            }]
        }, 1).to({
            state: [{
                t: this.m1,
                p: {
                    y: 25
                }
            }, {
                t: this.m2,
                p: {
                    y: 41
                }
            }, {
                t: this.m3,
                p: {
                    y: 57
                }
            }, {
                t: this.m4,
                p: {
                    y: 72
                }
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,98.7);

    (lib.text_base_unique1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#108EFF", "#00CDFF"], [0, 1], -116, -5, -116, -65).s().p("AxLFeQg8AAAAg8IAApDQAAg8A8AAMAiXAAAQA8AAAAA8IAAJDQAAA8g8AAg");
        this.shape.setTransform(116, 35);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#108EFF", "#00CDFF"], [0, 1], -116, -4.5, -116, -64.5).s().p("AxLETQg8AAAAg8IAAmtQAAg8A8AAMAiXAAAQA8AAAAA8IAAGtQAAA8g8AAg");
        this.shape_1.setTransform(116, 34.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.lf(["#108EFF", "#00CDFF"], [0, 1], -116, -5, -116, -65).s().p("AxLDIQg8AAAAg8IAAkXQAAg8A8AAMAiXAAAQA8AAAAA8IAAEXQAAA8g8AAg");
        this.shape_2.setTransform(116, 35);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.lf(["#108EFF", "#00CDFF"], [0, 1], -116, -4.5, -116, -64.5).s().p("AxLB9Qg8AAAAg8IAAiBQAAg8A8AAMAiXAAAQA8AAAAA8IAACBQAAA8g8AAg");
        this.shape_3.setTransform(116, 34.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,232,70);

    (lib.text_base_black = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("AxLFeQg8AAAAg8IAApDQAAg8A8AAMAiXAAAQA8AAAAA8IAAJDQAAA8g8AAg");
        this.shape.setTransform(116, 35);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("AxLETQg8AAAAg8IAAmtQAAg8A8AAMAiXAAAQA8AAAAA8IAAGtQAAA8g8AAg");
        this.shape_1.setTransform(116, 34.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("AxLDIQg8AAAAg8IAAkXQAAg8A8AAMAiXAAAQA8AAAAA8IAAEXQAAA8g8AAg");
        this.shape_2.setTransform(116, 35);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(0,0,0,0.898)").s().p("AxLB9Qg8AAAAg8IAAiBQAAg8A8AAMAiXAAAQA8AAAAA8IAACBQAAA8g8AAg");
        this.shape_3.setTransform(116, 34.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,232,70);

    (lib.text_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("AxLFeQg8AAAAg8IAApDQAAg8A8AAMAiXAAAQA8AAAAA8IAAJDQAAA8g8AAg");
        this.shape.setTransform(116, 35);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.898)").s().p("AxLETQg8AAAAg8IAAmtQAAg8A8AAMAiXAAAQA8AAAAA8IAAGtQAAA8g8AAg");
        this.shape_1.setTransform(116, 34.5);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(255,255,255,0.898)").s().p("AxLDIQg8AAAAg8IAAkXQAAg8A8AAMAiXAAAQA8AAAAA8IAAEXQAAA8g8AAg");
        this.shape_2.setTransform(116, 35);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(255,255,255,0.898)").s().p("AxLB9Qg8AAAAg8IAAiBQAAg8A8AAMAiXAAAQA8AAAAA8IAACBQAAA8g8AAg");
        this.shape_3.setTransform(116, 34.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,232,70);

    (lib.spread_flower_circle_pink = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["rgba(255,79,156,0.2)", "#FF4194"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.spread_flower_circle_pink, new cjs.Rectangle(-47.5,-47.5,95,95), null);

    (lib.shield = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAyvXcMAlfAAAMAAAgwbMglfAAAg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-420,-460,840,920), null);

    (lib.shape65_star = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.heart();
        this.instance.parent = this;
        this.instance.setTransform(-10, -8.65, 0.3774, 0.3761);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-10,-8.6,20,17.299999999999997);

    (lib.shape65 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(247,208,113,0)"], [0, 0.251, 1], 0, 0, 0, 0, 0, 8.4).s().p("Ag6A7QgYgYAAgjQAAgiAYgYQAYgZAiAAQAjAAAZAZQAYAYgBAiQABAjgYAYQgZAZgjAAQgiAAgYgZg");
        this.shape.setTransform(0.15, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.2,-8.4,16.7,16.700000000000003);

    (lib.shape41 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.img_kira();
        this.instance.parent = this;
        this.instance.setTransform(-19.5, -19.5, 1.3, 1.3);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-19.5,-19.5,39,39);

    (lib.shape38 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AufO/IAA99Ic+AAIAAd9g");
        this.shape.setTransform(10.05, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-82.7,-95.8,185.5,191.7);

    (lib.pusher_next_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AAQA3IAHg1IgtAAIgGA1IgWAAIAPhsIAUAAIgGAxIAtAAIAGgxIAUAAIgLBsg");
        this.shape.setTransform(17.2, 1.3);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("rgba(255,255,255,0.851)").s().p("AguA3IADgiIAWAAIgCAaIApAAIAEguIg/AAIAIg2IBQAAIgDAeIgVAAIACgXIgnAAIgFAoIA+AAIgEA9g");
        this.shape_1.setTransform(5.95, 1.3);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("rgba(255,255,255,0.851)").s().p("AgxA2IANhrIAVAAIgMBkIAsAAIANhkIAUAAIgLBrg");
        this.shape_2.setTransform(-4.95, 1.325);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("rgba(255,255,255,0.851)").s().p("AgwA2IAOhrIBTAAIgHA8Ig4AAIACgHIAhAAIAHguIgqAAIgMBkg");
        this.shape_3.setTransform(-16, 1.325);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.2,-12.1,48.4,24.299999999999997);

    (lib.pointGlitter2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(255,255,255,0.988)").s().p("AlaAAIFalaIFaFaIlaFag");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-34.6,-34.6,69.30000000000001,69.30000000000001);

    (lib.patternFrame = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.instance = new lib.window_3();
        this.instance.parent = this;
        this.instance.setTransform(-240, -14, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.patternFrame, new cjs.Rectangle(-240,-14,240,85), null);

    (lib.particle_p = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-0.25, 0.525);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-0.1, 0.8);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-6.4,-5.7,12.4,12.5);

    (lib.pa_pp = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* _visible = 0*/

            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // レイヤー_3
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(0.575, -0.225);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // レイヤー_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.pa_pp, new cjs.Rectangle(-5.2,-179.6,149,185.2), null);

    (lib.hanen = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.cover_sar();
        this.instance.parent = this;
        this.instance.setTransform(-120, 94, 0.5, 0.5, 0, 180, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.hanen, new cjs.Rectangle(-120,-160,240,254), null);

    (lib.flower_pink2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FF74BA").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(0.0156, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);

    (lib.flower_pink1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFA9E9").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(0.017, -0.0159);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);

    (lib.efc_hana = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.fp_hana3();
        this.instance.parent = this;
        this.instance.setTransform(-12, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.efc_hana, new cjs.Rectangle(-12,0,24,22), null);

    (lib.dark = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(1, 0, 1.0083, 1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.dark, new cjs.Rectangle(-120,-155,242,310), null);

    (lib.cursor_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            black: 0,
            white: 1,
            cute: 2,
            cool: 3,
            passion: 4
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }
        this.frame_4 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

        // cursol
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#301E1E").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(0, -0.025);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AmplwINTAAImqLhg");
        this.shape_1.setTransform(0, -0.025);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#FF60AF").s().p("AmplwINTAAImqLhg");
        this.shape_2.setTransform(0, -0.025);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0085F2").s().p("AmplwINTAAImqLhg");
        this.shape_3.setTransform(0, -0.025);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#FF912D").s().p("AmplwINTAAImqLhg");
        this.shape_4.setTransform(0, -0.025);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.6,-36.9,85.2,73.8);

    (lib.a_symbol4 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.Valentine2020();
        this.instance.parent = this;
        this.instance.setTransform(-70, -82, 0.5667, 0.5667);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.a_symbol4, new cjs.Rectangle(-70,-82,136,136), null);

    (lib.replace_bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // replace_target
        this.instance = new lib.replace_target_240x310_bg();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.replace_bg, new cjs.Rectangle(0,0,240,310), null);

    (lib.___window_base = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#4F0000", "#B4003B"], [0, 1], -0.2, 35, 0.2, -34.9).s("#FF6699").ss(1, 1, 1).rr(-110, -35, 220, 70, 5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.___window_base, new cjs.Rectangle(-111,-36,222,72), null);

    (lib.___place = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.place_name = new cjs.Text("","14px 'Arial'","#FFFFFF");
        this.place_name.name = "place_name";
        this.place_name.textAlign = "center";
        this.place_name.lineHeight = 16;
        this.place_name.lineWidth = 187;
        this.place_name.parent = this;
        this.place_name.setTransform(0, -7.25);

        this.timeline.addTween(cjs.Tween.get(this.place_name).wait(1));

        // レイヤー_4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("A10B2IAAjrMArpAAAIAADrg");
        this.shape.setTransform(0.0251, 0, 1.0021, 1.0213);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.___place, new cjs.Rectangle(-139.9,-12,279.9,24), null);

    (lib.bg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.instance = new lib.replace_bg();
        this.instance.parent = this;
        this.instance.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,240,310);

    (lib.tie2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.patternFrame();
        this.instance.parent = this;
        this.instance.setTransform(240, -86);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.tie2, new cjs.Rectangle(0,-100,240,85), null);

    (lib.text_fields = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "white": 0,
            "black": 10,
            "cute": 20,
            "cool": 29,
            "passion": 38,
            cute_ex1: 47,
            cool_ex1: 56,
            passion_ex1: 65
        });

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.stop();
        }
        this.frame_28 = function() {
            this.stop();
        }
        this.frame_37 = function() {
            this.stop();
        }
        this.frame_46 = function() {
            this.stop();
        }
        this.frame_47 = function() {
            for (i = 1; i <= 5; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_55 = function() {
            this.stop();
        }
        this.frame_56 = function() {
            for (i = 1; i <= 5; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_64 = function() {
            this.stop();
        }
        this.frame_65 = function() {
            for (i = 1; i <= 5; i++) {
                this['m' + i].text = exportRoot['m' + i];
            }
        }
        this.frame_73 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(9).call(this.frame_28).wait(9).call(this.frame_37).wait(9).call(this.frame_46).wait(1).call(this.frame_47).wait(8).call(this.frame_55).wait(1).call(this.frame_56).wait(8).call(this.frame_64).wait(1).call(this.frame_65).wait(8).call(this.frame_73).wait(1));

        // レイヤー_1
        this.tf = new lib.text_field_white();
        this.tf.name = "tf";
        this.tf.parent = this;
        this.tf.setTransform(131.8, 37.9, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.tf_1 = new lib.text_field_black();
        this.tf_1.name = "tf_1";
        this.tf_1.parent = this;
        this.tf_1.setTransform(131.8, 37.9, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.tf_2 = new lib.text_field_cute();
        this.tf_2.name = "tf_2";
        this.tf_2.parent = this;
        this.tf_2.setTransform(131.8, 37.9, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.tf_3 = new lib.text_field_cool();
        this.tf_3.name = "tf_3";
        this.tf_3.parent = this;
        this.tf_3.setTransform(131.8, 37.9, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.tf_4 = new lib.text_field_passion();
        this.tf_4.name = "tf_4";
        this.tf_4.parent = this;
        this.tf_4.setTransform(131.8, 37.9, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.m5 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m5.name = "m5";
        this.m5.lineHeight = 15;
        this.m5.lineWidth = 260;
        this.m5.parent = this;
        this.m5.setTransform(15, 35);

        this.m4 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(15, 19);

        this.m3 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(15, 3);

        this.m2 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(15, -13);

        this.m1 = new cjs.Text("","12px 'Arial'","#FF60AF");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(15, -29);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.tf
            }]
        }).to({
            state: [{
                t: this.tf_1
            }]
        }, 10).to({
            state: [{
                t: this.tf_2
            }]
        }, 10).to({
            state: [{
                t: this.tf_3
            }]
        }, 9).to({
            state: [{
                t: this.tf_4
            }]
        }, 9).to({
            state: [{
                t: this.m1,
                p: {
                    color: "#FF60AF"
                }
            }, {
                t: this.m2,
                p: {
                    color: "#FF60AF"
                }
            }, {
                t: this.m3,
                p: {
                    color: "#FF60AF"
                }
            }, {
                t: this.m4,
                p: {
                    color: "#FF60AF"
                }
            }, {
                t: this.m5,
                p: {
                    color: "#FF60AF"
                }
            }]
        }, 9).to({
            state: [{
                t: this.m1,
                p: {
                    color: "#0085F2"
                }
            }, {
                t: this.m2,
                p: {
                    color: "#0085F2"
                }
            }, {
                t: this.m3,
                p: {
                    color: "#0085F2"
                }
            }, {
                t: this.m4,
                p: {
                    color: "#0085F2"
                }
            }, {
                t: this.m5,
                p: {
                    color: "#0085F2"
                }
            }]
        }, 9).to({
            state: [{
                t: this.m1,
                p: {
                    color: "#FF912D"
                }
            }, {
                t: this.m2,
                p: {
                    color: "#FF912D"
                }
            }, {
                t: this.m3,
                p: {
                    color: "#FF912D"
                }
            }, {
                t: this.m4,
                p: {
                    color: "#FF912D"
                }
            }, {
                t: this.m5,
                p: {
                    color: "#FF912D"
                }
            }]
        }, 9).wait(9));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-31,276.6,106.7);

    (lib.text_base_unique2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            var self = this;

            this.stop();
            /*
		createjs.Ticker.addEventListener("tick", handleTick);

		function handleTick(){
		    self.gotoAndStop('line' + line_num);
		}
		*/
        }
        this.frame_1 = function() {
            var self = this;

            this.stop();

            /*createjs.Ticker.addEventListener("tick", handleTick);

		function handleTick(){
		    self.gotoAndStop('line' + line_num);
		}
		*/
        }
        this.frame_2 = function() {
            var self = this;

            this.stop();

            /*createjs.Ticker.addEventListener("tick", handleTick);

		function handleTick(){
		    self.gotoAndStop('line' + line_num);
		}
		*/
        }
        this.frame_3 = function() {
            this.stop();

            /*createjs.Ticker.addEventListener("tick", handleTick);

		function handleTick(){
		    this.gotoAndStop('line' + line_num);
		}
		*/
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_2
        this.instance = new lib.___window_base();
        this.instance.parent = this;
        this.instance.setTransform(116, 34.75, 1.05, 0.9863);
        this.instance.alpha = 0.8008;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleY: 0.7719
        }, 0).wait(1).to({
            scaleY: 0.5575
        }, 0).wait(1).to({
            scaleY: 0.3573
        }, 0).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-0.2,232.1,70.2);

    (lib.sprite66b = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.play();
        }
        this.frame_10 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

        // レイヤー_2
        this.instance = new lib.shape65_star("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, 0.95, 3.4133, 4.8676, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: 77,
            y: -98.5
        }, 7, cjs.Ease.quadOut).wait(1).to({
            scaleY: 2.7394,
            rotation: -59.9604,
            x: 81.1,
            y: -101.65,
            alpha: 0.4297
        }, 0).to({
            _off: true
        }, 1).wait(2));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-51.2,-137.7,166.9,192.6);

    (lib.sprite66 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.play();
        }
        this.frame_12 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

        // レイヤー_2
        this.instance = new lib.shape65_star("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, 0.95, 3.4133, 4.8676, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 3.1879,
            scaleY: 4.083,
            rotation: 10.6181,
            x: -10.5905,
            y: -26.0366
        }, 0).wait(1).to({
            scaleX: 3.0466,
            scaleY: 3.5909,
            rotation: -10.9492,
            x: -18.9275,
            y: -42.9649
        }, 0).wait(1).to({
            scaleX: 2.9515,
            scaleY: 3.2599,
            rotation: -25.4533,
            x: -24.5342,
            y: -54.3493
        }, 0).wait(1).to({
            scaleX: 2.8871,
            scaleY: 3.0357,
            rotation: -35.2756,
            x: -28.331,
            y: -62.0589
        }, 0).wait(1).to({
            scaleX: 2.845,
            scaleY: 2.8893,
            rotation: -41.6917,
            x: -30.8112,
            y: -67.0949
        }, 0).wait(1).to({
            scaleX: 2.8197,
            scaleY: 2.8012,
            rotation: -45.5526,
            x: -32.3036,
            y: -70.1254
        }, 0).wait(1).to({
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: -33.35,
            y: -72.25
        }, 0).to({
            x: -44.85,
            y: -88.45,
            alpha: 0.4609
        }, 3, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(2));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-81.1,-125.1,137.7,180);

    (lib.sprite42 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.shape41("synched",0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.sprite42, new cjs.Rectangle(-19.5,-19.5,39,39), null);

    (lib.sprite39 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* setProperty("", _visible, 0);
		*/

            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // Layer_1
        this.instance = new lib.shape38("synched",0);
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.sprite39, new cjs.Rectangle(-82.7,-95.8,185.5,191.7), null);

    (lib.spread_flower_pink = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_7 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

        // flower3
        this.instance = new lib.flower_pink2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(21.35, 5.15, 0.7153, 0.7153);
        this.instance.filters = [new cjs.ColorFilter(0.83,0.83,0.83,1,43.35,43.35,43.35,0)];
        this.instance.cache(-8, -8, 15, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.9946,
            scaleY: 0.9946,
            rotation: -144.6153,
            x: 43.3235,
            y: 3.744,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: 50.1138,
            y: 3.3095,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: 54.679,
            y: 3.0174,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: 60.2279,
            y: 2.6624,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: 76.05,
            y: 1.65,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower2
        this.instance_1 = new lib.flower_pink2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-14, -10.15);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.2152,
            scaleY: 1.2152,
            rotation: -144.6153,
            x: -24.1833,
            y: -24.009,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.2817,
            scaleY: 1.2817,
            rotation: -189.3044,
            x: -27.3302,
            y: -28.2917,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.3264,
            scaleY: 1.3264,
            rotation: -219.35,
            x: -29.4459,
            y: -31.171,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.3808,
            scaleY: 1.3808,
            rotation: -255.8693,
            x: -32.0175,
            y: -34.6708,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -39.35,
            y: -44.65,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower1
        this.instance_2 = new lib.flower_pink1("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(15.8, -6.5, 0.7927, 0.7927);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
            scaleX: 0.9181,
            scaleY: 0.9181,
            rotation: -144.6153,
            x: 33.0735,
            y: -24.6372,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 0.9569,
            scaleY: 0.9569,
            rotation: -189.3044,
            x: 38.4114,
            y: -30.2419,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 0.9829,
            scaleY: 0.9829,
            rotation: -219.35,
            x: 42.0001,
            y: -34.0102,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.0146,
            scaleY: 1.0146,
            rotation: -255.8693,
            x: 46.3622,
            y: -38.5903,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.1049,
            scaleY: 1.1049,
            rotation: -360,
            x: 58.8,
            y: -51.65,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower3
        this.instance_3 = new lib.flower_pink2("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-14.45, 14.3, 0.7153, 0.7153);
        this.instance_3.filters = [new cjs.ColorFilter(0.83,0.83,0.83,1,43.35,43.35,43.35,0)];
        this.instance_3.cache(-8, -8, 15, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            scaleX: 0.9946,
            scaleY: 0.9946,
            rotation: -144.6153,
            x: -28.0278,
            y: 32.5778,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: -32.2236,
            y: 38.226,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: -35.0445,
            y: 42.0234,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: -38.4733,
            y: 46.639,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.4107,
            scaleY: 1.4107,
            rotation: -360,
            x: -48.25,
            y: 59.8,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower3
        this.instance_4 = new lib.flower_pink2("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(5.6, 19);
        this.instance_4.filters = [new cjs.ColorFilter(0,0,0,1,255,153,204,0)];
        this.instance_4.cache(-8, -8, 15, 15);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({
            scaleX: 1.1953,
            scaleY: 1.1953,
            rotation: -144.6153,
            x: 13.6543,
            y: 39.8085,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.2556,
            scaleY: 1.2556,
            rotation: -189.3044,
            x: 16.1432,
            y: 46.2388,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.2962,
            scaleY: 1.2962,
            rotation: -219.35,
            x: 17.8166,
            y: 50.562,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.3455,
            scaleY: 1.3455,
            rotation: -255.8693,
            x: 19.8505,
            y: 55.8168,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.4861,
            scaleY: 1.4861,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower2
        this.instance_5 = new lib.flower_pink2("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-20.9, 2.15);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({
            scaleX: 1.3587,
            scaleY: 1.3587,
            rotation: -144.6153,
            x: -42.1705,
            y: 3.9577,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.4695,
            scaleY: 1.4695,
            rotation: -189.3044,
            x: -48.7435,
            y: 4.5163,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.544,
            scaleY: 1.544,
            rotation: -219.35,
            x: -53.1627,
            y: 4.8919,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.6346,
            scaleY: 1.6346,
            rotation: -255.8693,
            x: -58.5341,
            y: 5.3484,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.8929,
            scaleY: 1.8929,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // flower1
        this.instance_6 = new lib.flower_pink1("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0.3, -12.15, 0.7812, 0.7812, -44.9992);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({
            scaleX: 1.0148,
            scaleY: 1.0148,
            rotation: 43.8468,
            x: -1.106,
            y: -37.9799,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.087,
            scaleY: 1.087,
            rotation: -39.9454,
            x: -1.5405,
            y: -45.9619,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.1355,
            scaleY: 1.1355,
            rotation: -96.281,
            x: -1.8326,
            y: -51.3284,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.1945,
            scaleY: 1.1945,
            rotation: -164.7547,
            x: -2.1876,
            y: -57.8511,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.3627,
            scaleY: 1.3627,
            rotation: 0,
            x: -3.2,
            y: -76.45,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(2));

        // レイヤー_1
        this.instance_7 = new lib.spread_flower_circle_pink();
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, 0.5578, 0.5578);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({
            scaleX: 1.2947,
            scaleY: 1.2947,
            alpha: 0.3984
        }, 1, cjs.Ease.get(1)).to({
            scaleX: 1.7159,
            scaleY: 1.7159,
            alpha: 0.0508
        }, 4, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(2));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-84.4,-89.6,168.4,171.1);

    (lib.pusher_next = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            lp: 5
        });

        // timeline functions:
        this.frame_24 = function() {
            this.gotoAndPlay("lp");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

        // text
        this.instance = new lib.pusher_next_inner("synched",0);
        this.instance.parent = this;
        this.instance.alpha = 0.1016;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            alpha: 1
        }, 5).wait(1).to({
            regX: 0.7,
            regY: 1.3,
            x: 0.7,
            y: 1.3,
            alpha: 0.9931
        }, 0).wait(1).to({
            alpha: 0.9722
        }, 0).wait(1).to({
            alpha: 0.9375
        }, 0).wait(1).to({
            alpha: 0.8889
        }, 0).wait(1).to({
            alpha: 0.8264
        }, 0).wait(1).to({
            alpha: 0.75
        }, 0).wait(1).to({
            alpha: 0.6597
        }, 0).wait(1).to({
            alpha: 0.5556
        }, 0).wait(1).to({
            alpha: 0.4375
        }, 0).wait(1).to({
            alpha: 0.3056
        }, 0).wait(1).to({
            alpha: 0.1597
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 0
        }, 0).wait(1).to({
            regX: 0.7,
            regY: 1.3,
            x: 0.7,
            y: 1.3,
            alpha: 0.0204
        }, 0).wait(1).to({
            alpha: 0.0816
        }, 0).wait(1).to({
            alpha: 0.1837
        }, 0).wait(1).to({
            alpha: 0.3265
        }, 0).wait(1).to({
            alpha: 0.5102
        }, 0).wait(1).to({
            alpha: 0.7347
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 1
        }, 0).wait(1));

        // レイヤー_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("A1pBgIAAjAMArTAAAIAADAg");
        this.shape.setTransform(7, 1.1);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-131.6,-12.1,277.2,24.299999999999997);

    (lib.particle2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_15 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(15));

        // レイヤー_3
        this.instance = new lib.pa_pp();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.4);
        this.instance.filters = [new cjs.ColorFilter(0,0,0,1,153,0,0,0)];
        this.instance.cache(-7, -182, 153, 189);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

        // レイヤー_2
        this.instance_1 = new lib.particle_p();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, 0.7674, 0.7674);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            regX: -0.3,
            regY: 0.5,
            scaleX: 0.5693,
            scaleY: 0.5693,
            rotation: -174.9492,
            x: 63.5,
            y: -63.95,
            alpha: 0.7229
        }, 0).wait(1).to({
            scaleX: 0.5097,
            scaleY: 0.5097,
            rotation: -119.2289,
            x: 69.8,
            y: -92.55,
            alpha: 0.6395
        }, 0).wait(1).to({
            scaleX: 0.4735,
            scaleY: 0.4735,
            rotation: -85.4829,
            x: 73.05,
            y: -105.4,
            alpha: 0.5889
        }, 0).wait(1).to({
            scaleX: 0.4484,
            scaleY: 0.4484,
            rotation: -61.9876,
            x: 75,
            y: -112.55,
            alpha: 0.5538
        }, 0).wait(1).to({
            scaleX: 0.4299,
            scaleY: 0.4299,
            rotation: -44.682,
            x: 76.65,
            y: -118.2,
            alpha: 0.5278
        }, 0).wait(1).to({
            scaleX: 0.4159,
            scaleY: 0.4159,
            rotation: -31.6108,
            x: 78.1,
            y: -122.6,
            alpha: 0.5083
        }, 0).wait(1).to({
            scaleX: 0.4052,
            scaleY: 0.4052,
            rotation: -21.661,
            x: 79.25,
            y: -126,
            alpha: 0.4934
        }, 0).wait(1).to({
            scaleX: 0.3972,
            scaleY: 0.3972,
            rotation: -14.1306,
            x: 80.25,
            y: -128.65,
            alpha: 0.4821
        }, 0).wait(1).to({
            scaleX: 0.3912,
            scaleY: 0.3912,
            rotation: -8.5439,
            x: 81.05,
            y: -130.7,
            alpha: 0.4737
        }, 0).wait(1).to({
            scaleX: 0.3869,
            scaleY: 0.3869,
            rotation: -4.5615,
            x: 81.6,
            y: -132.1,
            alpha: 0.4678
        }, 0).wait(1).to({
            scaleX: 0.3841,
            scaleY: 0.3841,
            rotation: -1.9317,
            x: 82,
            y: -133.05,
            alpha: 0.4638
        }, 0).wait(1).to({
            scaleX: 0.3826,
            scaleY: 0.3826,
            rotation: -0.4617,
            x: 82.25,
            y: -133.6,
            alpha: 0.4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 0.382,
            scaleY: 0.382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: 0.4609
        }, 0).to({
            _off: true
        }, 1).wait(16));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);

    (lib.particle1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.r = Math.floor(Math.random() * 3 + 2);
            this.gotoAndPlay(this.r);
        }
        this.frame_21 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));

        // レイヤー_3
        this.instance = new lib.pa_pp();
        this.instance.parent = this;
        this.instance.setTransform(0, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

        // レイヤー_2
        this.instance_1 = new lib.particle_p();
        this.instance_1.parent = this;
        this.instance_1.setTransform(19.95, -4.05, 0.7347, 0.7347);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            regX: -0.3,
            regY: 0.5,
            scaleX: 0.5967,
            scaleY: 0.5967,
            rotation: 140.8707,
            x: 62.05,
            y: -58.8,
            alpha: 0.8319
        }, 0).wait(1).to({
            scaleX: 0.5493,
            scaleY: 0.5493,
            rotation: 189.3068,
            x: 69,
            y: -89.15,
            alpha: 0.774
        }, 0).wait(1).to({
            scaleX: 0.5163,
            scaleY: 0.5163,
            rotation: 222.9188,
            x: 73.15,
            y: -105.8,
            alpha: 0.7339
        }, 0).wait(1).to({
            scaleX: 0.4911,
            scaleY: 0.4911,
            rotation: 248.676,
            x: 76.1,
            y: -115.9,
            alpha: 0.7032
        }, 0).wait(1).to({
            scaleX: 0.4709,
            scaleY: 0.4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.25,
            alpha: 0.6785
        }, 0).wait(1).to({
            scaleX: 0.4543,
            scaleY: 0.4543,
            rotation: 286.2744,
            x: 81.55,
            y: -131.4,
            alpha: 0.6583
        }, 0).wait(1).to({
            scaleX: 0.4404,
            scaleY: 0.4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.6,
            alpha: 0.6415
        }, 0).wait(1).to({
            scaleX: 0.4288,
            scaleY: 0.4288,
            rotation: 312.2476,
            x: 86.65,
            y: -142.35,
            alpha: 0.6273
        }, 0).wait(1).to({
            scaleX: 0.4191,
            scaleY: 0.4191,
            rotation: 322.2242,
            x: 88.85,
            y: -146.2,
            alpha: 0.6154
        }, 0).wait(1).to({
            scaleX: 0.4108,
            scaleY: 0.4108,
            rotation: 330.6158,
            x: 90.85,
            y: -149.45,
            alpha: 0.6054
        }, 0).wait(1).to({
            scaleX: 0.404,
            scaleY: 0.404,
            rotation: 337.643,
            x: 92.7,
            y: -152.15,
            alpha: 0.597
        }, 0).wait(1).to({
            scaleX: 0.3982,
            scaleY: 0.3982,
            rotation: 343.4783,
            x: 94.3,
            y: -154.4,
            alpha: 0.59
        }, 0).wait(1).to({
            scaleX: 0.3936,
            scaleY: 0.3936,
            rotation: 348.2599,
            x: 95.7,
            y: -156.2,
            alpha: 0.5843
        }, 0).wait(1).to({
            scaleX: 0.3898,
            scaleY: 0.3898,
            rotation: 352.1005,
            x: 96.9,
            y: -157.65,
            alpha: 0.5797
        }, 0).wait(1).to({
            scaleX: 0.3869,
            scaleY: 0.3869,
            rotation: 355.0937,
            x: 97.85,
            y: -158.75,
            alpha: 0.5762
        }, 0).wait(1).to({
            scaleX: 0.3847,
            scaleY: 0.3847,
            rotation: 357.3179,
            x: 98.6,
            y: -159.55,
            alpha: 0.5735
        }, 0).wait(1).to({
            scaleX: 0.3832,
            scaleY: 0.3832,
            rotation: 358.8401,
            x: 99.1,
            y: -160.1,
            alpha: 0.5717
        }, 0).wait(1).to({
            scaleX: 0.3823,
            scaleY: 0.3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: 0.5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 0.382,
            scaleY: 0.382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: 0.5703
        }, 0).to({
            _off: true
        }, 1).wait(16));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);

    (lib.hana1_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.efc_hana();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1, 0, 0, 0, 0, 11);
        this.instance.filters = [new cjs.ColorFilter(0,0,0,1,255,255,255,0)];
        this.instance.cache(-14, -2, 28, 26);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.hana1_1, new cjs.Rectangle(-12,-11,24,22), null);

    (lib.glitter_first_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.pointGlitter2("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.0121, 0.6227, 59.2024);

        this.instance_1 = new lib.pointGlitter2("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, 0.0109, 0.7287, -30.7981);

        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "#FFFFFF", "rgba(255,252,237,0.051)", "rgba(255,255,255,0)"], [0, 0.055, 0.761, 1], 0, 0, 0, 0, 0, 5.4).s().p("AgZAtQgTgLgFgUQgGgVALgSQALgTAUgFQAVgGASALQATALAFAUQAGAVgLASQgLATgUAFQgIACgGAAQgNAAgMgHg");

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.glitter_first_inner, new cjs.Rectangle(-18.5,-21.7,37.1,43.4), null);

    (lib.gｌitter_rise_core = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.visible = false;
            this.gotoAndPlay(1 + Math.floor(Math.random() * 30));
        }
        this.frame_1 = function() {
            this.visible = false;
            this.gotoAndPlay(this.timeline.position + Math.floor(Math.random() * 20));
        }
        this.frame_31 = function() {
            this.visible = true;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(30).call(this.frame_31).wait(9));

        // glitter
        this.instance = new lib.glitter_first_inner();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5144, 0.5144);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(30).to({
            _off: false,
            scaleX: 0.1949,
            scaleY: 0.1949,
            rotation: -44.8223,
            alpha: 0.4297
        }, 0).wait(1).to({
            scaleX: 0.4345,
            scaleY: 0.4345,
            rotation: -11.2056,
            alpha: 0.8574
        }, 0).wait(1).to({
            scaleX: 0.5144,
            scaleY: 0.5144,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 0.5051,
            scaleY: 0.5051,
            rotation: 1.94,
            alpha: 0.971
        }, 0).wait(1).to({
            scaleX: 0.479,
            scaleY: 0.479,
            rotation: 7.4007,
            alpha: 0.8893
        }, 0).wait(1).to({
            scaleX: 0.436,
            scaleY: 0.436,
            rotation: 16.3821,
            alpha: 0.7549
        }, 0).wait(1).to({
            scaleX: 0.3762,
            scaleY: 0.3762,
            rotation: 28.8843,
            alpha: 0.5678
        }, 0).wait(1).to({
            scaleX: 0.2995,
            scaleY: 0.2995,
            rotation: 44.9071,
            alpha: 0.3281
        }, 0).to({
            _off: true
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.6,-11.2,19.299999999999997,22.5);

    (lib.effect_levelup = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            if (heartFlg != 1) {
                this.visible = 0;
            }
        }
        this.frame_15 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

        // 大きい玉
        this.instance = new lib.shape65("single",0);
        this.instance.parent = this;
        this.instance.setTransform(8.1, 14.1, 9.5072, 9.5072, 90);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(15));

        // 広がる玉1
        this.instance_1 = new lib.sprite66();
        this.instance_1.parent = this;
        this.instance_1.setTransform(9, 17, 0.6564, 0.6564, -135.1055);

        this.instance_2 = new lib.sprite66();
        this.instance_2.parent = this;
        this.instance_2.setTransform(11, 16, 0.6564, 0.6564, 0, 45.1055, -134.8945);

        this.instance_3 = new lib.sprite66();
        this.instance_3.parent = this;
        this.instance_3.setTransform(6, 15, 0.6564, 0.6564, 0, -134.8945, 45.1055);

        this.instance_4 = new lib.sprite66();
        this.instance_4.parent = this;
        this.instance_4.setTransform(8, 13, 0.6564, 0.6564, 44.8945);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 1).to({
            state: []
        }, 14).wait(1));

        // 広がる玉2
        this.instance_5 = new lib.sprite66b();
        this.instance_5.parent = this;
        this.instance_5.setTransform(9.05, 14.25, 0.4201, 0.4201, 89.8939);

        this.instance_6 = new lib.sprite66b();
        this.instance_6.parent = this;
        this.instance_6.setTransform(7.6, 14.25, 0.4201, 0.4201, 0, -89.8939, 90.1061);

        this.instance_7 = new lib.sprite66b();
        this.instance_7.parent = this;
        this.instance_7.setTransform(9.05, 17, 0.4201, 0.4201, 0, 90.1061, -89.8939);

        this.instance_8 = new lib.sprite66b();
        this.instance_8.parent = this;
        this.instance_8.setTransform(8, 17, 0.4201, 0.4201, -90.1061);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }]
        }, 2).to({
            state: []
        }, 13).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-70.3,-63.8,158.8,158.7);

    (lib.efa_particle = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.particle2();
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, 0.8585, 0.8585, -173.2889);

        this.instance_1 = new lib.particle2();
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, 0.5292, 0.5292, 0, -143.2543, 36.7457);

        this.instance_2 = new lib.particle2();
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, 0.7527, 0.5292, 0, -164.9709, 40.6843);

        this.instance_3 = new lib.particle1();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, 0.8544, 0.5085, 0, -124.1512, 76.2156, -59.9, -3.9);

        this.instance_4 = new lib.particle1();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, 0.6032, 0.6714, 0, 102.0919, 76.0499);

        this.instance_5 = new lib.particle1();
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, 0.6032, 0.6032, 154.5512);

        this.instance_6 = new lib.particle2();
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, 0.67, 0.5378, 0, -151.6456, 57.8841);

        this.instance_7 = new lib.particle1();
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);

        this.instance_8 = new lib.particle1();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, 0.5292, 0.8921, -178.5141);

        this.instance_9 = new lib.particle2();
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);

        this.instance_10 = new lib.particle1();
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, 0.5924, 0.5292, 0, 155.0554, -24.9453);

        this.instance_11 = new lib.particle2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, 0.5292, 0.5292, 134.5199);

        this.instance_12 = new lib.particle2();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, 0.8585, 0.8585, -88.5191);

        this.instance_13 = new lib.particle2();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, 0.5292, 0.5292, 0, -53.2543, 126.7457);

        this.instance_14 = new lib.particle2();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, 0.7527, 0.5292, 0, -104.9694, 100.6856);

        this.instance_15 = new lib.particle1();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-0.85, -20.4, 0.8544, 0.5085, 0, -69.3554, 131.0109, -59.8, -3.7);

        this.instance_16 = new lib.particle1();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, 0.6032, 0.6714, 0, -58.4598, -84.5013);

        this.instance_17 = new lib.particle1();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, 0.6032, 0.6032, -115.4488);

        this.instance_18 = new lib.particle2();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, 0.67, 0.5379, 0, -103.6061, 105.9244);

        this.instance_19 = new lib.particle1();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);

        this.instance_20 = new lib.particle1();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, 0.5292, 0.5292, -118.5129);

        this.instance_21 = new lib.particle2();
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);

        this.instance_22 = new lib.particle1();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, 0.5925, 0.5292, 0, -72.0065, 107.9921);

        this.instance_23 = new lib.particle2();
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, 0.6817, 1.3397, 0, -100.0239, -139.0996);

        this.instance_24 = new lib.particle2();
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, 0.8585, 0.8585, -6.5255);

        this.instance_25 = new lib.particle2();
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, 0.5292, 0.5292, 0, 36.7457, -143.2543);

        this.instance_26 = new lib.particle2();
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, 0.7527, 0.5292, 0, 15.0291, -139.3157);

        this.instance_27 = new lib.particle1();
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, 0.8544, 0.5085, 0, 20.6446, -138.9891, -59.9, -3.9);

        this.instance_28 = new lib.particle1();
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, 0.6032, 0.6714, 0, -19.4377, -45.4796);

        this.instance_29 = new lib.particle1();
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, 0.6032, 0.6032, 19.5497);

        this.instance_30 = new lib.particle2();
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, 0.67, 0.5378, 0, -7.3809, -157.8494);

        this.instance_31 = new lib.particle1();
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);

        this.instance_32 = new lib.particle1();
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, 0.5292, 0.5292, -28.5129);

        this.instance_33 = new lib.particle2();
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);

        this.instance_34 = new lib.particle1();
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, 0.5925, 0.5292, 0, 17.9935, -162.0079);

        this.instance_35 = new lib.particle2();
        this.instance_35.parent = this;
        this.instance_35.setTransform(0.6, -8.6, 0.5292, 0.5292, -45.4801);

        this.instance_36 = new lib.particle2();
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, 0.8585, 0.8585, 61.4817);

        this.instance_37 = new lib.particle2();
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, 0.5292, 0.5292, 0, 126.7457, -53.2543);

        this.instance_38 = new lib.particle2();
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, 0.7527, 0.5292, 0, 105.0291, -49.3157);

        this.instance_39 = new lib.particle1();
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, 0.8544, 0.5085, 0, 110.6446, -48.9891, -59.8, -3.7);

        this.instance_40 = new lib.particle1();
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, 0.6032, 0.6714, 0, 70.5623, 44.5204);

        this.instance_41 = new lib.particle1();
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, 0.6032, 0.6032, 64.5512);

        this.instance_42 = new lib.particle2();
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, 0.67, 0.5378, 0, 73.3557, -77.1152);

        this.instance_43 = new lib.particle1();
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);

        this.instance_44 = new lib.particle1();
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, 0.5292, 0.5292, 61.4871);

        this.instance_45 = new lib.particle2();
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);

        this.instance_46 = new lib.particle1();
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, 0.5925, 0.5292, 0, 107.9935, -72.0079);

        this.instance_47 = new lib.particle2();
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, 0.5292, 0.5292, 44.5199);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_47
            }, {
                t: this.instance_46
            }, {
                t: this.instance_45
            }, {
                t: this.instance_44
            }, {
                t: this.instance_43
            }, {
                t: this.instance_42
            }, {
                t: this.instance_41
            }, {
                t: this.instance_40
            }, {
                t: this.instance_39
            }, {
                t: this.instance_38
            }, {
                t: this.instance_37
            }, {
                t: this.instance_36
            }, {
                t: this.instance_35
            }, {
                t: this.instance_34
            }, {
                t: this.instance_33
            }, {
                t: this.instance_32
            }, {
                t: this.instance_31
            }, {
                t: this.instance_30
            }, {
                t: this.instance_29
            }, {
                t: this.instance_28
            }, {
                t: this.instance_27
            }, {
                t: this.instance_26
            }, {
                t: this.instance_25
            }, {
                t: this.instance_24
            }, {
                t: this.instance_23
            }, {
                t: this.instance_22
            }, {
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }, {
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.efa_particle, new cjs.Rectangle(-320.5,-245.4,564,474.70000000000005), null);

    (lib.efa_hana2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.hana1_1();
        this.instance.parent = this;
        this.instance.setTransform(5.6, -1.55, 0.7223, 0.7223, 0, -82.4591, 97.5409);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            skewX: -159.4226,
            skewY: 20.5774,
            guide: {
                path: [5.7, -1.5, 100.8, -42.2, 3.9, -107.3],
                orient: 'auto'
            },
            alpha: 0
        }, 17, cjs.Ease.get(0.91)).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.4,-117.5,71.7,125.7);

    (lib.cursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_8 = function() {
            /* gotoAndPlay( 1 );
		*/

            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

        // カーソル
        this.inner = new lib.cursor_inner();
        this.inner.name = "inner";
        this.inner.parent = this;
        this.inner.setTransform(0, -1.6, 0.1846, 0.1863, 0, 0, 0, 0, -0.6);

        this.timeline.addTween(cjs.Tween.get(this.inner).wait(1).to({
            regY: 0,
            y: -1.1959
        }, 0).wait(1).to({
            y: -0.0076
        }, 0).wait(1).to({
            y: 1.365
        }, 0).wait(1).to({
            regY: -0.6,
            y: 1.65
        }, 0).wait(1).to({
            regY: 0,
            y: 1.4459
        }, 0).wait(1).to({
            y: 0.2576
        }, 0).wait(1).to({
            y: -1.115
        }, 0).wait(1).to({
            regY: -0.6,
            y: -1.6
        }, 0).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-7.8,-8.4,15.7,17);

    (lib.cursol_container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "line4": 0,
            "line3": 1,
            "line2": 2,
            "line1": 3
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_2 = function() {
            this.stop();
        }
        this.frame_3 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

        // レイヤー_1
        this.cu = new lib.cursor();
        this.cu.name = "cu";
        this.cu.parent = this;
        this.cu.setTransform(6.3, 6.7, 0.7, 0.7);

        this.timeline.addTween(cjs.Tween.get(this.cu).wait(1).to({
            y: -1.3
        }, 0).wait(1).to({
            y: -8.3
        }, 0).wait(1).to({
            y: -15.3
        }, 0).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0.8,-21.1,11,31.6);

    (lib.___card_in_heart = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 目隠し
        this.instance = new lib.hanen();
        this.instance.parent = this;
        this.instance.setTransform(0, 54, 1, 1, 0, 180, 0);

        this.instance_1 = new lib.hanen();
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, -202.9);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.___card_in_heart, new cjs.Rectangle(-120,-362.9,240,576.9), null);

    (lib.window_unique2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.ar1 = new lib.cursol_container();
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(210.8, 68.7, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.ar1).wait(1));

        // レイヤー_3
        this.tf = new lib.text_field_black();
        this.tf.name = "tf";
        this.tf.parent = this;
        this.tf.setTransform(149.5, 55.05, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

        // レイヤー_4
        this.instance = new lib.window_4_1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(119.5, 49.6, 1, 1, 0, 0, 0, 115.5, 43.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.window_unique2, new cjs.Rectangle(0,0,281.3,102.8), null);

    (lib.window_unique = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.ar1 = new lib.cursol_container();
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(210.8, 68.7, 0.8, 0.8);

        this.timeline.addTween(cjs.Tween.get(this.ar1).wait(1));

        // レイヤー_3
        this.tf = new lib.text_field_black();
        this.tf.name = "tf";
        this.tf.parent = this;
        this.tf.setTransform(149.5, 54.95, 1, 1, 0, 0, 0, 131.8, 37.9);

        this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

        // window
        this.instance = new lib.window_4_1("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(119.5, 49.6, 1, 1, 0, 0, 0, 115.5, 43.6);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.window_unique, new cjs.Rectangle(0,0,281.3,94), null);

    (lib.unit = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            nod: 9,
            swing: 18,
            jump_flower: 36,
            nod2: 48
        });

        // timeline functions:
        this.frame_8 = function() {
            this.stop();
        }
        this.frame_17 = function() {
            this.stop();
        }
        this.frame_35 = function() {
            this.stop();
        }
        this.frame_47 = function() {
            this.stop();
        }
        this.frame_62 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(9).call(this.frame_17).wait(18).call(this.frame_35).wait(12).call(this.frame_47).wait(15).call(this.frame_62).wait(1));

        // EF
        this.instance = new lib.spread_flower_pink("synched",0,false);
        this.instance.parent = this;
        this.instance.setTransform(126, 110.95, 1, 1, 0, 0, 180);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({
            _off: false
        }, 0).to({
            _off: true
        }, 11).wait(16));

        // レイヤー_1
        this.instance_1 = new lib.replace_target_260x250_unit();
        this.instance_1.parent = this;
        this.instance_1.setTransform(130, 125, 1, 1, 0, 0, 0, 130, 125);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({
            y: 131
        }, 4).to({
            y: 125
        }, 4).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 251
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            rotation: -0.0818,
            x: 129.85,
            y: 125.45
        }, 0).wait(1).to({
            rotation: -0.3088,
            x: 129.35,
            y: 125.5
        }, 0).wait(1).to({
            rotation: -0.6412,
            x: 128.6
        }, 0).wait(1).to({
            rotation: -1.0257,
            x: 127.8
        }, 0).wait(1).to({
            rotation: -1.4031,
            x: 126.9
        }, 0).wait(1).to({
            rotation: -1.718,
            x: 126.25,
            y: 125.55
        }, 0).wait(1).to({
            rotation: -1.9264,
            x: 125.8,
            y: 125.6
        }, 0).wait(1).to({
            regX: 130.9,
            regY: 251,
            rotation: -1.9999,
            x: 130.9,
            y: 251
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            rotation: -1.9349,
            x: 125.85,
            y: 125.55
        }, 0).wait(1).to({
            rotation: -1.7523,
            x: 126.25
        }, 0).wait(1).to({
            rotation: -1.4781,
            x: 126.85,
            y: 125.5
        }, 0).wait(1).to({
            rotation: -1.1477,
            x: 127.5,
            y: 125.55
        }, 0).wait(1).to({
            rotation: -0.802,
            x: 128.3,
            y: 125.5
        }, 0).wait(1).to({
            rotation: -0.4824,
            x: 129
        }, 0).wait(1).to({
            rotation: -0.2251,
            x: 129.6
        }, 0).wait(1).to({
            rotation: -0.0582,
            x: 129.95,
            y: 125.45
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            rotation: 0,
            x: 131,
            y: 251
        }, 0).wait(1).to({
            y: 257
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 116.5
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 237
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 112.55
        }, 0).wait(1).to({
            y: 116.15
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 254
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 128.05
        }, 0).wait(1).to({
            y: 126.7
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 250
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 125.1
        }, 0).wait(1).to({
            y: 125.4
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 251
        }, 0).wait(2).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 125.65
        }, 0).wait(1).to({
            y: 126.2
        }, 0).wait(1).to({
            y: 127.3
        }, 0).wait(1).to({
            y: 128.65
        }, 0).wait(1).to({
            y: 129.75
        }, 0).wait(1).to({
            y: 130.3
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 256
        }, 0).wait(1).to({
            regX: 130,
            regY: 125.5,
            x: 130,
            y: 130.3
        }, 0).wait(1).to({
            y: 129.75
        }, 0).wait(1).to({
            y: 128.65
        }, 0).wait(1).to({
            y: 127.3
        }, 0).wait(1).to({
            y: 126.2
        }, 0).wait(1).to({
            y: 125.65
        }, 0).wait(1).to({
            regX: 131,
            regY: 251,
            x: 131,
            y: 251
        }, 0).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(1.4,-14,248.7,271);

    (lib.yajirusi = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            dark_gray: 0,
            "white": 10,
            "cute": 18,
            "cool": 23,
            "passion": 29,
            "cute_ex1": 37,
            "cool_ex1": 42,
            "passion_ex1": 48
        });

        // timeline functions:
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_11 = function() {
            this.ar1.cu.inner.gotoAndStop('white');
        }
        this.frame_17 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.ar1.cu.inner.gotoAndStop('cute');
        }
        this.frame_22 = function() {
            this.stop();
        }
        this.frame_24 = function() {
            this.ar1.cu.inner.gotoAndStop('cool');
        }
        this.frame_28 = function() {
            this.stop();
        }
        this.frame_30 = function() {
            this.ar1.cu.inner.gotoAndStop('passion');
        }
        this.frame_36 = function() {
            this.stop();
        }
        this.frame_37 = function() {
            this.stop();
        }
        this.frame_38 = function() {
            this.ar1.cu.inner.gotoAndStop('cute');
        }
        this.frame_41 = function() {
            this.stop();
        }
        this.frame_43 = function() {
            this.ar1.cu.inner.gotoAndStop('cool');
        }
        this.frame_47 = function() {
            this.stop();
        }
        this.frame_49 = function() {
            this.ar1.cu.inner.gotoAndStop('passion');
        }
        this.frame_55 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(2).call(this.frame_11).wait(6).call(this.frame_17).wait(2).call(this.frame_19).wait(3).call(this.frame_22).wait(2).call(this.frame_24).wait(4).call(this.frame_28).wait(2).call(this.frame_30).wait(6).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(3).call(this.frame_41).wait(2).call(this.frame_43).wait(4).call(this.frame_47).wait(2).call(this.frame_49).wait(6).call(this.frame_55).wait(1));

        // レイヤー_3
        this.ar1 = new lib.cursol_container();
        this.ar1.name = "ar1";
        this.ar1.parent = this;
        this.ar1.setTransform(-12.95, -11.95);

        this.timeline.addTween(cjs.Tween.get(this.ar1).wait(10).to({
            regX: 6.3,
            regY: 5.5,
            x: -6.65,
            y: -6.45
        }, 0).wait(27).to({
            x: -19.7,
            y: -13.5
        }, 0).wait(19));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-25.2,-18.1,24.099999999999998,16.700000000000003);

    (lib.text_window = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "white": 0,
            "black": 10,
            transparent: 20,
            blue: 30,
            red: 40,
            unique1: 52
        });

        // timeline functions:
        this.frame_0 = function() {
            /*
		ラベル"base_white"…テキストベースが白で文字は暗いグレー
		ラベル"base_black"…テキストベースが黒で文字は白
		*/

            this.stop();
        }
        this.frame_9 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.stop();
        }
        this.frame_29 = function() {
            this.stop();
        }
        this.frame_39 = function() {
            this.stop();
        }
        this.frame_51 = function() {
            this.stop();
        }
        this.frame_52 = function() {
            this.stop();
        }
        this.frame_63 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(12).call(this.frame_51).wait(1).call(this.frame_52).wait(11).call(this.frame_63).wait(1));

        // レイヤー_6
        this.instance = new lib.window();
        this.instance.parent = this;
        this.instance.setTransform(-120, -47, 0.5, 0.5);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({
            _off: false
        }, 0).wait(12));

        // レイヤー_5
        this.b1 = new lib.text_base_unique2();
        this.b1.name = "b1";
        this.b1.parent = this;
        this.b1.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);
        this.b1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.b1).wait(40).to({
            _off: false
        }, 0).to({
            _off: true
        }, 12).wait(12));

        // レイヤー_4
        this.b1_1 = new lib.text_base_unique1();
        this.b1_1.name = "b1_1";
        this.b1_1.parent = this;
        this.b1_1.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);
        this.b1_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.b1_1).wait(30).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(24));

        // レイヤー_3
        this.b1_2 = new lib.text_base_black();
        this.b1_2.name = "b1_2";
        this.b1_2.parent = this;
        this.b1_2.setTransform(0, 88, 1, 1, 0, 0, 0, 116, 35);
        this.b1_2.alpha = 0.0117;
        this.b1_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.b1_2).wait(20).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(34));

        // レイヤー_2
        this.b1_3 = new lib.text_base_black();
        this.b1_3.name = "b1_3";
        this.b1_3.parent = this;
        this.b1_3.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);
        this.b1_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.b1_3).wait(10).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(44));

        // レイヤー_1
        this.b1_4 = new lib.text_base();
        this.b1_4.name = "b1_4";
        this.b1_4.parent = this;
        this.b1_4.setTransform(0, 0, 1, 1, 0, 0, 0, 116, 35);

        this.timeline.addTween(cjs.Tween.get(this.b1_4).to({
            _off: true
        }, 10).wait(54));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-120,-47,240,170);

    (lib.sprite43 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer_1
        this.instance = new lib.sprite42();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.4807, 0.4807);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 0.7356,
            scaleY: 0.7356
        }, 1).to({
            scaleX: 1.4901,
            scaleY: 1.4901
        }, 1).to({
            scaleX: 2.1305,
            scaleY: 2.1305,
            rotation: -34.3349,
            alpha: 0.5
        }, 4).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-57.7,-57.7,115.5,115.5);

    (lib.gｌitter_rise_inner = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            r: 46,
            "-": 142
        });

        // timeline functions:
        this.frame_0 = function() {
            this.rotation = this.rotation + Math.floor(Math.random() * 14);
            this.gotoAndPlay(Math.floor(Math.random() * 40 + 42));
        }
        this.frame_142 = function() {
            this.gotoAndPlay("r");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(142).call(this.frame_142).wait(1));

        // レイヤー_1
        this.instance = new lib.gｌitter_rise_core();
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({
            x: 0.6,
            y: 355.55
        }, 96).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-42.1,-28.7,86.7,395.5);

    (lib.glitter_rise = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.gｌitter_rise_inner();
        this.instance.parent = this;
        this.instance.setTransform(150.4, 8.8, 0.6479, 0.6442);

        this.instance_1 = new lib.gｌitter_rise_inner();
        this.instance_1.parent = this;
        this.instance_1.setTransform(182.95, 13.55, 0.6479, 0.6442);

        this.instance_2 = new lib.gｌitter_rise_inner();
        this.instance_2.parent = this;
        this.instance_2.setTransform(178.05, 1.4, 0.3695, 0.3674);

        this.instance_3 = new lib.gｌitter_rise_inner();
        this.instance_3.parent = this;
        this.instance_3.setTransform(165.35, 4.1, 0.3695, 0.3674);

        this.instance_4 = new lib.gｌitter_rise_inner();
        this.instance_4.parent = this;
        this.instance_4.setTransform(144.85, 12.05, 0.6947, 0.692);

        this.instance_5 = new lib.gｌitter_rise_inner();
        this.instance_5.parent = this;
        this.instance_5.setTransform(97.8, 10, 0.6947, 0.692);

        this.instance_6 = new lib.gｌitter_rise_inner();
        this.instance_6.parent = this;
        this.instance_6.setTransform(117.35, -2.25, 0.3962, 0.3946);

        this.instance_7 = new lib.gｌitter_rise_inner();
        this.instance_7.parent = this;
        this.instance_7.setTransform(81.8, 8.2, 0.3962, 0.3946);

        this.instance_8 = new lib.gｌitter_rise_inner();
        this.instance_8.parent = this;
        this.instance_8.setTransform(107.3, 15.65, 0.6947, 0.692);

        this.instance_9 = new lib.gｌitter_rise_inner();
        this.instance_9.parent = this;
        this.instance_9.setTransform(129.05, 5.8, 0.6947, 0.692);

        this.instance_10 = new lib.gｌitter_rise_inner();
        this.instance_10.parent = this;
        this.instance_10.setTransform(24.05, 7.05, 0.3962, 0.3946);

        this.instance_11 = new lib.gｌitter_rise_inner();
        this.instance_11.parent = this;
        this.instance_11.setTransform(49.85, 11.35, 0.6947, 0.692);

        this.instance_12 = new lib.gｌitter_rise_inner();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-22.4, 9.85, 0.6947, 0.692);

        this.instance_13 = new lib.gｌitter_rise_inner();
        this.instance_13.parent = this;
        this.instance_13.setTransform(62.8, 8.25, 0.6947, 0.692);

        this.instance_14 = new lib.gｌitter_rise_inner();
        this.instance_14.parent = this;
        this.instance_14.setTransform(34.2, 5.1, 0.6947, 0.692);

        this.instance_15 = new lib.gｌitter_rise_inner();
        this.instance_15.parent = this;
        this.instance_15.setTransform(7.25, 1.75, 0.3962, 0.3946);

        this.instance_16 = new lib.gｌitter_rise_inner();
        this.instance_16.parent = this;
        this.instance_16.setTransform(-6.35, 4.7, 0.3962, 0.3946);

        this.instance_17 = new lib.gｌitter_rise_inner();
        this.instance_17.parent = this;
        this.instance_17.setTransform(-47.95, 11.35, 0.6947, 0.692);

        this.instance_18 = new lib.gｌitter_rise_inner();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-119.75, 9.85, 0.6947, 0.692);

        this.instance_19 = new lib.gｌitter_rise_inner();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-94.85, 9.25, 0.6947, 0.692);

        this.instance_20 = new lib.gｌitter_rise_inner();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-75.25, -2.95, 0.3962, 0.3946);

        this.instance_21 = new lib.gｌitter_rise_inner();
        this.instance_21.parent = this;
        this.instance_21.setTransform(-110.9, 7.45, 0.3962, 0.3946);

        this.instance_22 = new lib.gｌitter_rise_inner();
        this.instance_22.parent = this;
        this.instance_22.setTransform(-63.5, 5.1, 0.6947, 0.692);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_22
            }, {
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }, {
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }, {
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }, {
                t: this.instance_12
            }, {
                t: this.instance_11
            }, {
                t: this.instance_10
            }, {
                t: this.instance_9
            }, {
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }, {
                t: this.instance_5
            }, {
                t: this.instance_4
            }, {
                t: this.instance_3
            }, {
                t: this.instance_2
            }, {
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.glitter_rise, new cjs.Rectangle(-126.4,-14.7,315.6,26), null);

    (lib.common_message_window = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            standby: 1,
            in1: 9,
            out1: 14,
            in2: 19,
            out2: 24,
            in3: 29,
            out3: 37,
            text_change: 44,
            blank: 51
        });

        // timeline functions:
        this.frame_0 = function() {
            this.b_guide.visible = false;

            this.stop();
        }
        this.frame_1 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_8 = function() {
            this.stop();
        }
        this.frame_9 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_13 = function() {
            this.stop();
        }
        this.frame_14 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_18 = function() {
            this.stop();
        }
        this.frame_19 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_23 = function() {
            this.stop();
        }
        this.frame_24 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_28 = function() {
            this.stop();
        }
        this.frame_29 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_36 = function() {
            this.stop();
        }
        this.frame_37 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_43 = function() {
            this.stop();
        }
        this.frame_44 = function() {
            this.play();

            this.visible = true;
        }
        this.frame_50 = function() {
            this.stop();
        }
        this.frame_51 = function() {
            this.visible = false;
        }
        this.frame_56 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(1).call(this.frame_9).wait(4).call(this.frame_13).wait(1).call(this.frame_14).wait(4).call(this.frame_18).wait(1).call(this.frame_19).wait(4).call(this.frame_23).wait(1).call(this.frame_24).wait(4).call(this.frame_28).wait(1).call(this.frame_29).wait(7).call(this.frame_36).wait(1).call(this.frame_37).wait(6).call(this.frame_43).wait(1).call(this.frame_44).wait(6).call(this.frame_50).wait(1).call(this.frame_51).wait(5).call(this.frame_56).wait(1));

        // arrow
        this.ar = new lib.yajirusi();
        this.ar.name = "ar";
        this.ar.parent = this;
        this.ar.setTransform(228.2, 61.9, 1, 1, 0, 0, 0, 0.2, -0.1);
        this.ar.alpha = 0.0117;

        this.timeline.addTween(cjs.Tween.get(this.ar).wait(1).to({
            alpha: 1
        }, 0).wait(8).to({
            alpha: 0.0117
        }, 0).wait(2).to({
            alpha: 1
        }, 0).wait(3).to({
            alpha: 0.0117
        }, 0).wait(7).to({
            alpha: 1
        }, 0).wait(3).to({
            alpha: 0.0117
        }, 0).wait(8).to({
            alpha: 1
        }, 0).wait(5).to({
            alpha: 0.0117
        }, 0).wait(9).to({
            alpha: 1
        }, 0).wait(5).to({
            alpha: 0.0117
        }, 0).wait(6));

        // text_field
        this.t = new lib.text_fields();
        this.t.name = "t";
        this.t.parent = this;
        this.t.setTransform(137.8, 118.9, 1, 1, 0, 0, 0, 131.8, 37.9);
        this.t.alpha = 0.0117;

        this.timeline.addTween(cjs.Tween.get(this.t).wait(1).to({
            y: 38.9,
            alpha: 1
        }, 0).wait(8).to({
            y: 188.9,
            alpha: 0.0117
        }, 0).wait(2).to({
            y: 38.9,
            alpha: 1
        }, 0).wait(4).to({
            y: 188.9,
            alpha: 0.0117
        }, 0).wait(6).to({
            y: 38.9,
            alpha: 1
        }, 0).wait(4).to({
            y: 188.9,
            alpha: 0.0117
        }, 0).wait(4).to({
            y: 108.9,
            alpha: 1
        }, 0).wait(1).to({
            y: 97.9
        }, 0).wait(1).to({
            y: 57.9
        }, 0).wait(1).to({
            y: 38.9
        }, 0).wait(1).to({
            regX: 138.3,
            regY: 33.9,
            x: 144.3,
            y: 31.9
        }, 0).wait(1).to({
            regX: 131.8,
            regY: 37.9,
            x: 137.8,
            y: 34.9
        }, 0).wait(1).to({
            regX: 138.3,
            regY: 33.9,
            x: 144.3,
            y: 31.9
        }, 0).wait(1).to({
            regX: 131.8,
            regY: 37.9,
            x: 137.8,
            y: 38.9
        }, 0).wait(2).to({
            regX: 138.3,
            regY: 33.9,
            x: 144.3,
            y: 39.5
        }, 0).wait(1).to({
            y: 57.1
        }, 0).wait(1).to({
            y: 84.65
        }, 0).wait(1).to({
            y: 102.25
        }, 0).wait(1).to({
            regX: 131.8,
            regY: 37.9,
            x: 137.8,
            y: 110.9
        }, 0).wait(1).to({
            y: 38.9
        }, 0).wait(8).to({
            y: 188.9,
            alpha: 0.0117
        }, 0).wait(6));

        // text_window
        this.b = new lib.text_window();
        this.b.name = "b";
        this.b.parent = this;
        this.b.setTransform(116, 31);
        this.b.alpha = 0.0117;

        this.timeline.addTween(cjs.Tween.get(this.b).wait(1).to({
            alpha: 1
        }, 0).wait(8).to({
            scaleY: 0.1
        }, 0).wait(1).to({
            regY: 38,
            scaleY: 0.6222,
            y: 54.65
        }, 0).wait(1).to({
            scaleY: 0.9355,
            y: 66.55
        }, 0).wait(1).to({
            regY: 0,
            scaleY: 1.04,
            y: 31
        }, 0).wait(1).to({
            scaleY: 1
        }, 0).wait(1).to({
            scaleY: 1.04
        }, 0).wait(1).to({
            regY: 38,
            scaleY: 0.5178,
            y: 50.65
        }, 0).wait(1).to({
            scaleY: 0.2044,
            y: 38.75
        }, 0).wait(1).to({
            regY: 0,
            scaleY: 0.1,
            y: 31
        }, 0).wait(1).to({
            scaleY: 1,
            alpha: 0.0117
        }, 0).wait(2).to({
            regY: 38,
            y: 69,
            alpha: 0.5608
        }, 0).wait(1).to({
            alpha: 0.8902
        }, 0).wait(1).to({
            regY: 0,
            y: 31,
            alpha: 1
        }, 0).wait(3).to({
            regY: 38,
            y: 69,
            alpha: 0.451
        }, 0).wait(1).to({
            alpha: 0.1215
        }, 0).wait(1).to({
            regY: 0,
            y: 31,
            alpha: 0.0117
        }, 0).wait(2).to({
            y: 101,
            alpha: 1
        }, 0).wait(1).to({
            y: 90
        }, 0).wait(1).to({
            y: 50
        }, 0).wait(1).to({
            y: 31
        }, 0).wait(1).to({
            regY: 38,
            y: 65.95
        }, 0).wait(1).to({
            regY: 0,
            y: 27
        }, 0).wait(1).to({
            regY: 38,
            y: 65.95
        }, 0).wait(1).to({
            regY: 0,
            y: 31
        }, 0).wait(2).to({
            regY: 38,
            y: 73.6
        }, 0).wait(1).to({
            y: 91.2
        }, 0).wait(1).to({
            y: 118.75
        }, 0).wait(1).to({
            y: 136.35
        }, 0).wait(1).to({
            regY: 0,
            y: 103
        }, 0).wait(1).to({
            y: 100.1,
            alpha: 0.0117
        }, 0).wait(1).to({
            y: 31,
            alpha: 1
        }, 0).wait(1).to({
            scaleY: 0.925
        }, 0).wait(1).to({
            scaleY: 1.2002
        }, 0).to({
            scaleY: 1
        }, 3).wait(2).to({
            alpha: 0.0117
        }, 0).wait(6));

        // guide
        this.b_guide = new lib.text_window();
        this.b_guide.name = "b_guide";
        this.b_guide.parent = this;
        this.b_guide.setTransform(116, 31);

        this.timeline.addTween(cjs.Tween.get(this.b_guide).to({
            _off: true
        }, 1).wait(56));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-11,269.6,237.7);

    (lib.window_container = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            center: 1,
            align_bottom_line3: 14,
            align_bottom_line2: 29,
            align_bottom_line1: 44,
            align_top_line3: 59,
            align_top_line2: 74,
            align_top_line1: 89,
            "unique1": 101
        });

        // timeline functions:
        this.frame_13 = function() {
            this.stop();
        }
        this.frame_28 = function() {
            this.stop();
        }
        this.frame_43 = function() {
            this.stop();
        }
        this.frame_59 = function() {
            this.stop();
        }
        this.frame_73 = function() {
            this.stop();
        }
        this.frame_88 = function() {
            this.stop();
        }
        this.frame_100 = function() {
            this.stop();
        }
        this.frame_109 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(15).call(this.frame_28).wait(15).call(this.frame_43).wait(16).call(this.frame_59).wait(14).call(this.frame_73).wait(15).call(this.frame_88).wait(12).call(this.frame_100).wait(9).call(this.frame_109).wait(1));

        // レイヤー_1
        this.window = new lib.common_message_window();
        this.window.name = "window";
        this.window.parent = this;
        this.window.setTransform(134.8, 80.4, 1, 1, 0, 0, 0, 134.8, 80.4);

        this.timeline.addTween(cjs.Tween.get(this.window).wait(14).to({
            y: 87.9
        }, 0).wait(15).to({
            y: 95.4
        }, 0).wait(15).to({
            y: 102.9
        }, 0).wait(15).to({
            y: 72.9
        }, 0).wait(15).to({
            y: 65.4
        }, 0).wait(15).to({
            y: 57.9
        }, 0).wait(12).to({
            y: 72.9
        }, 0).wait(9));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-26.5,269.6,205.7);

    (lib.sprite442 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // Layer_31
        this.instance = new lib.sprite43();
        this.instance.parent = this;
        this.instance.setTransform(47.9, 31.25, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

        // Layer_29
        this.instance_1 = new lib.sprite43();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-45.9, -17.05, 0.281, 0.281);

        this.instance_2 = new lib.sprite43();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-45.9, 18, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_2
            }, {
                t: this.instance_1
            }]
        }, 2).wait(11));

        // Layer_25
        this.instance_3 = new lib.sprite43();
        this.instance_3.parent = this;
        this.instance_3.setTransform(7.75, 11.6, 0.281, 0.281);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({
            _off: false
        }, 0).wait(10));

        // Layer_23
        this.instance_4 = new lib.sprite43();
        this.instance_4.parent = this;
        this.instance_4.setTransform(80.8, 32.25, 0.281, 0.281);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({
            _off: false
        }, 0).wait(7));

        // Layer_21
        this.instance_5 = new lib.sprite43();
        this.instance_5.parent = this;
        this.instance_5.setTransform(51.05, -41.1, 0.281, 0.281);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({
            _off: false
        }, 0).wait(6));

        // Layer_19
        this.instance_6 = new lib.sprite43();
        this.instance_6.parent = this;
        this.instance_6.setTransform(70.3, -19.4, 0.281, 0.281);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({
            _off: false
        }, 0).wait(5));

        // Layer_15
        this.instance_7 = new lib.sprite43();
        this.instance_7.parent = this;
        this.instance_7.setTransform(-29.3, 4.6, 0.281, 0.281);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({
            _off: false
        }, 0).wait(4));

        // Layer_13
        this.instance_8 = new lib.sprite43();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-21.05, 23.3, 0.281, 0.281);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({
            _off: false
        }, 0).wait(3));

        // Layer_11
        this.instance_9 = new lib.sprite43();
        this.instance_9.parent = this;
        this.instance_9.setTransform(2.4, -51, 0.281, 0.281);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({
            _off: false
        }, 0).wait(3));

        // Layer_7
        this.instance_10 = new lib.sprite43();
        this.instance_10.parent = this;
        this.instance_10.setTransform(26.3, -29.5, 0.281, 0.281);
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({
            _off: false
        }, 0).wait(2));

        // Layer_5
        this.instance_11 = new lib.sprite43();
        this.instance_11.parent = this;
        this.instance_11.setTransform(-36.45, -52.8, 0.281, 0.281);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({
            _off: false
        }, 0).wait(1));

        // Layer_1
        this.instance_12 = new lib.sprite39();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-0.05, -1.15, 0.8286, 0.6387);

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-68.5,-62.3,153.7,122.4);

    (lib.sprite44_2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // Layer_25
        this.instance = new lib.sprite43();
        this.instance.parent = this;
        this.instance.setTransform(-65.45, -201.7, 0.281, 0.281);

        this.instance_1 = new lib.sprite43();
        this.instance_1.parent = this;
        this.instance_1.setTransform(123, -199.1, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }, 3).wait(10));

        // Layer_19
        this.instance_2 = new lib.sprite43();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-88.6, -0.6, 0.281, 0.281);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({
            _off: false
        }, 0).wait(5));

        // Layer_9
        this.instance_3 = new lib.sprite43();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-101.7, -166.9, 0.281, 0.281);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({
            _off: false
        }, 0).wait(3));

        // Layer_7
        this.instance_4 = new lib.sprite43();
        this.instance_4.parent = this;
        this.instance_4.setTransform(151.2, -153.7, 0.281, 0.281);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({
            _off: false
        }, 0).wait(2));

        // Layer_1
        this.instance_5 = new lib.sprite39();
        this.instance_5.parent = this;
        this.instance_5.setTransform(-0.05, -1.15, 0.8286, 0.6387);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-104.3,-204.3,258.2,264.40000000000003);

    // stage content:
    (lib.valentine_2020 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            "プレゼントもらう＆テキスト": 27,
            台詞2: 77,
            scene1: 1,
            scene2_a: 9,
            scene3: 27,
            scene4: 77,
            scene5: 100,
            scene2_b: 125,
            label_se1: 27,
            label_se2: 60,
            label_se3: 87
        });

        // timeline functions:
        this.frame_0 = function() {
            var self = this;

            //-----------------------
            // call window_chgange
            //-----------------------

            window_change = function() {
                //if (window_align != now_window_align) {
                self.window_1.gotoAndStop("align_" + window_align + "_line" + line_num);
                //}

                if (base_color != now_base_color) {
                    self.window_1.window.b.gotoAndStop(base_color);
                }

                if (text_color != now_text_color) {
                    self.window_1.window.t.gotoAndStop(text_color);
                }

                if (arrow_color != now_arrow_color) {
                    self.window_1.window.ar.gotoAndPlay(arrow_color);
                }

                if (line_num != now_line_num) {
                    self.window_1.window.t.tf.gotoAndStop("line" + line_num);
                    self.window_1.window.b.b1.gotoAndStop("line" + line_num);
                    self.window_1.window.ar.ar1.gotoAndStop("line" + line_num);
                }
                /*
			exportRoot.m1 = exportRoot["t" + idx + "_1"];
			exportRoot.m2 = exportRoot["t" + idx + "_2"];
			exportRoot.m3 = exportRoot["t" + idx + "_3"];
			exportRoot.m4 = exportRoot["t" + idx + "_4"];
		*/
                now_base_color = base_color;
                now_text_color = text_color;
                now_arrow_color = arrow_color;
                now_line_num = line_num;
                now_window_align = window_align;
            }

            text_set = function() {
                for (i = 1; i <= 4; i++) {
                    self.window_1.window.t.tf['m' + i].text = exportRoot['m' + i];
                }
            }

            //-----------------------
            // call jump
            //-----------------------
            jump = function() {
                if (key_flag != 0) {
                    key_flag = 0;
                    window.location.href = exportRoot._url;
                }
            }
            //-----------------------------------
            // パラメータ
            //-----------------------------------

            exportRoot._url = window.im_cjs._url || "http://www.mbga.jp";
            //遷移先

            //場所名。動的制御するか要確認
            exportRoot.place.place_name.text = window.im_cjs.place_name || "カフェ店内";

            //ルート分岐　（0：会いに来る　1：会いに行く）

            exportRoot.idol_root = window.im_cjs.idol_root || 1;

            exportRoot.txt1_1 = window.im_cjs.txt1_1 || "";
            exportRoot.txt1_2 = window.im_cjs.txt1_2 || "";
            exportRoot.txt1_3 = window.im_cjs.txt1_3 || "";
            exportRoot.txt1_4 = window.im_cjs.txt1_4 || "";

            exportRoot.txt2_1 = window.im_cjs.txt2_1 || "";
            exportRoot.txt2_2 = window.im_cjs.txt2_2 || "";
            exportRoot.txt2_3 = window.im_cjs.txt2_3 || "";
            exportRoot.txt2_4 = window.im_cjs.txt2_4 || "";

            exportRoot.txt3_1 = window.im_cjs.txt3_1 || "";
            exportRoot.txt3_2 = window.im_cjs.txt3_2 || "";
            exportRoot.txt3_3 = window.im_cjs.txt3_3 || "";
            exportRoot.txt3_4 = window.im_cjs.txt3_4 || "";

            exportRoot.txt4_1 = window.im_cjs.txt4_1 || "";
            exportRoot.txt4_2 = window.im_cjs.txt4_2 || "";
            exportRoot.txt4_3 = window.im_cjs.txt4_3 || "";
            exportRoot.txt4_4 = window.im_cjs.txt4_4 || "";

            //-----------------------------------
            // 初期化
            //-----------------------------------
            idx = 0;

            key_flag = 1;

            heartFlg = 1;

            now_window_align = '';
            now_base_color = '';
            now_text_color = '';
            now_arrow_color = '';
            now_line_num = '';
            now_window_align = '';
        }
        this.frame_1 = function() {
            /* //ウインドウ操作
		window_align="blank";
		base_color = "unique1";
		text_color = "black";
		arrow_color="black";
		line_num = 4;
		call("window_change");

		gotoAndPlay("window_1/window/:hide");
		*/

            //ウインドウ操作
            window_align = "blank";
            base_color = "unique1";
            text_color = "black";
            arrow_color = "black";
            line_num = 4;
            window_change();

            this.window_1.window.gotoAndPlay("blank");

            if (exportRoot.idol_root == 1) {
                this.bg.gotoAndStop("def");
            } else {
                this.bg.gotoAndStop("def2");
            }
        }
        this.frame_8 = function() {
            this.stop();

            var self = this;

            //PC用にENTERでも進めるようにする。
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    // loading時
                    if (exportRoot.idol_root == 1) {
                        self.gotoAndPlay("scene2_a");
                    } else {
                        self.gotoAndPlay("scene2_b");
                    }

                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                if (exportRoot.idol_root == 1) {
                    self.gotoAndPlay("scene2_a");
                } else {
                    self.gotoAndPlay("scene2_b");
                }
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        this.frame_9 = function() {
            exportRoot.m1 = exportRoot.txt1_1;
            exportRoot.m2 = exportRoot.txt1_2;
            exportRoot.m3 = exportRoot.txt1_3;
            exportRoot.m4 = exportRoot.txt1_4;
        }
        this.frame_20 = function() {
            this.ch1.gotoAndPlay("nod2");
        }
        this.frame_26 = function() {
            this.stop();

            var self = this;

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene3");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene3");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        this.frame_27 = function() {
            window.se_play('se_110');
        }
        this.frame_39 = function() {//gotoAndPlay("window_1/window/:out1");
        }
        this.frame_60 = function() {
            window.se_play('se_145');
        }
        this.frame_74 = function() {
            window_align = "bottom";
            base_color = "red";
            text_color = "white";
            arrow_color = "white";

            if ((exportRoot.txt2_3 != "") && (exportRoot.txt2_4 != "")) {
                line_num = 4;
            } else if ((exportRoot.txt2_3 != "") && (exportRoot.txt2_4 == "")) {
                line_num = 3;
            } else {
                line_num = 2;
            }

            window_change();

            this.window_1.window.gotoAndPlay("in1");

            exportRoot.m1 = exportRoot.txt2_1;
            exportRoot.m2 = exportRoot.txt2_2;
            exportRoot.m3 = exportRoot.txt2_3;
            exportRoot.m4 = exportRoot.txt2_4;

            text_set();
        }
        this.frame_76 = function() {
            this.stop();

            var self = this;

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene4");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene4");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        this.frame_77 = function() {
            this.window_1.window.gotoAndPlay("out1");
        }
        this.frame_79 = function() {
            exportRoot.m1 = exportRoot.txt3_1;
            exportRoot.m2 = exportRoot.txt3_2;
            exportRoot.m3 = exportRoot.txt3_3;
            exportRoot.m4 = exportRoot.txt3_4;
        }
        this.frame_87 = function() {
            window.se_play('se_081');
            this.ch1.gotoAndPlay("jump_flower");
        }
        this.frame_99 = function() {
            this.stop();

            var self = this;

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene5");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene5");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        this.frame_101 = function() {
            exportRoot.m1 = "";
            exportRoot.m2 = "";
            exportRoot.m3 = "";
            exportRoot.m4 = "";
        }
        this.frame_115 = function() {
            window_align = "bottom";
            base_color = "red";
            text_color = "white";
            arrow_color = "white";
            line_num = 3;

            window_change();

            this.window_1.window.gotoAndPlay("in1");

            exportRoot.m1 = exportRoot.txt4_1;
            exportRoot.m2 = exportRoot.txt4_1;
            exportRoot.m3 = exportRoot.txt4_2;
            exportRoot.m4 = exportRoot.txt4_3;

            text_set();
        }
        this.frame_124 = function() {
            this.stop();

            var self = this;

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    jump();
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                jump();
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }
        this.frame_125 = function() {
            exportRoot.m1 = exportRoot.txt1_1;
            exportRoot.m2 = exportRoot.txt1_2;
            exportRoot.m3 = exportRoot.txt1_3;
            exportRoot.m4 = exportRoot.txt1_4;
        }
        this.frame_136 = function() {/*
		//ウインドウ操作
		window_align="center";
		base_color = "white";
		text_color = "black";
		arrow_color="black";
		line_num = 4;
		call("window_change");

		gotoAndPlay("window_1/window/:in1");
		m1=txt1_1;
		m2=txt1_2;
		m3=txt1_3;
		m4=txt1_4;


		*/
        }
        this.frame_140 = function() {
            this.stop();

            var self = this;

            //PC用
            window.addEventListener("keydown", handleKeyDown);

            function handleKeyDown(event) {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    // エンターキーが押された時の処理
                    self.gotoAndPlay("scene3");
                    window.removeEventListener("keydown", handleKeyDown);
                    self.btn.removeEventListener('click', onClick);
                }
            }

            // ボタンタップ処理
            this.btn.addEventListener('click', onClick);

            function onClick(event) {
                self.gotoAndPlay("scene3");
                self.btn.removeEventListener('click', onClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(1).call(this.frame_9).wait(11).call(this.frame_20).wait(6).call(this.frame_26).wait(1).call(this.frame_27).wait(12).call(this.frame_39).wait(21).call(this.frame_60).wait(14).call(this.frame_74).wait(2).call(this.frame_76).wait(1).call(this.frame_77).wait(2).call(this.frame_79).wait(8).call(this.frame_87).wait(12).call(this.frame_99).wait(2).call(this.frame_101).wait(14).call(this.frame_115).wait(9).call(this.frame_124).wait(1).call(this.frame_125).wait(11).call(this.frame_136).wait(4).call(this.frame_140).wait(1));

        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(141));

        // window_unique
        this.instance_1 = new lib.window_unique();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 347.2, 1, 1, 0, 0, 0, 120, 47);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({
            _off: false
        }, 0).wait(1).to({
            regX: 142.1,
            regY: 59.9,
            x: 142.1,
            y: 357.9
        }, 0).wait(1).to({
            y: 350.2
        }, 0).wait(1).to({
            y: 335.1
        }, 0).wait(1).to({
            y: 313.75
        }, 0).wait(1).to({
            y: 293.75
        }, 0).wait(1).to({
            y: 280.55
        }, 0).wait(1).to({
            y: 273.95
        }, 0).wait(1).to({
            regX: 120,
            regY: 47,
            x: 120,
            y: 259.2
        }, 0).to({
            y: 263.2
        }, 3, cjs.Ease.get(1)).wait(10).to({
            alpha: 0
        }, 2).to({
            _off: true
        }, 1).wait(38));

        // overlay_black
        this.instance_2 = new lib.dark();
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 155);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).to({
            alpha: 0.1016
        }, 5).to({
            _off: true
        }, 1).wait(3).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 4).to({
            alpha: 0.1016
        }, 7).to({
            _off: true
        }, 1).wait(104).to({
            _off: false
        }, 0).to({
            alpha: 1
        }, 4).to({
            alpha: 0.1016
        }, 3).to({
            _off: true
        }, 1).wait(8));

        // place
        this.place = new lib.___place();
        this.place.name = "place";
        this.place.parent = this;
        this.place.setTransform(120, 130);

        this.timeline.addTween(cjs.Tween.get(this.place).wait(9).to({
            alpha: 0.0117
        }, 4).to({
            _off: true
        }, 1).wait(111).to({
            _off: false,
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 4).to({
            _off: true
        }, 1).wait(11));

        // window_unique2
        this.instance_3 = new lib.window_unique2();
        this.instance_3.parent = this;
        this.instance_3.setTransform(120, 347.2, 1, 1, 0, 0, 0, 120, 47);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({
            _off: false
        }, 0).wait(1).to({
            regX: 142.1,
            regY: 59.9,
            x: 142.1,
            y: 357.9
        }, 0).wait(1).to({
            y: 350.2
        }, 0).wait(1).to({
            y: 335.1
        }, 0).wait(1).to({
            y: 313.75
        }, 0).wait(1).to({
            y: 293.75
        }, 0).wait(1).to({
            y: 280.55
        }, 0).wait(1).to({
            y: 273.95
        }, 0).wait(1).to({
            regX: 120,
            regY: 47,
            x: 120,
            y: 259.2
        }, 0).to({
            y: 263.2
        }, 3, cjs.Ease.get(1)).wait(15).to({
            y: 263
        }, 0).to({
            y: 261
        }, 2, cjs.Ease.get(1)).wait(1).to({
            regX: 142.1,
            regY: 59.9,
            x: 142.1,
            y: 279.2
        }, 0).wait(1).to({
            y: 299.4
        }, 0).wait(1).to({
            y: 332.85
        }, 0).wait(1).to({
            y: 355.75
        }, 0).wait(1).to({
            regX: 120,
            regY: 47,
            x: 120,
            y: 349
        }, 0).to({
            _off: true
        }, 1).wait(82).to({
            _off: false,
            y: 347.2
        }, 0).wait(1).to({
            regX: 142.1,
            regY: 59.9,
            x: 142.1,
            y: 357.9
        }, 0).wait(1).to({
            y: 350.2
        }, 0).wait(1).to({
            y: 335.1
        }, 0).wait(1).to({
            y: 313.75
        }, 0).wait(1).to({
            y: 293.75
        }, 0).wait(1).to({
            y: 280.55
        }, 0).wait(1).to({
            y: 273.95
        }, 0).wait(1).to({
            regX: 120,
            regY: 47,
            x: 120,
            y: 259.2
        }, 0).to({
            y: 263.2
        }, 3, cjs.Ease.get(1)).wait(1));

        // window
        this.window_1 = new lib.window_container();
        this.window_1.name = "window_1";
        this.window_1.parent = this;
        this.window_1.setTransform(138.8, 320.4, 1, 1, 0, 0, 0, 134.8, 80.4);

        this.timeline.addTween(cjs.Tween.get(this.window_1).wait(141));

        // heart
        this.instance_4 = new lib.effect_levelup();
        this.instance_4.parent = this;
        this.instance_4.setTransform(110, 207, 1.4977, 1.4977, 23.8569);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({
            _off: false
        }, 0).to({
            y: 198.75
        }, 3, cjs.Ease.get(1)).to({
            _off: true
        }, 62).wait(16));

        // alitter_around
        this.instance_5 = new lib.sprite44_2();
        this.instance_5.parent = this;
        this.instance_5.setTransform(99, 221, 0.8761, 0.8761);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({
            _off: false
        }, 0).to({
            _off: true
        }, 65).wait(16));

        // glitter_cake
        this.instance_6 = new lib.sprite442();
        this.instance_6.parent = this;
        this.instance_6.setTransform(106, 228, 0.8761, 0.8761);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({
            _off: false
        }, 0).wait(41).to({
            regX: 14.2,
            regY: -4.5,
            x: 118.45,
            y: 224.05,
            alpha: 0.9615
        }, 0).wait(1).to({
            alpha: 0.9074
        }, 0).wait(1).to({
            alpha: 0.8389
        }, 0).wait(1).to({
            alpha: 0.7579
        }, 0).wait(1).to({
            alpha: 0.6667
        }, 0).wait(1).to({
            alpha: 0.5682
        }, 0).wait(1).to({
            alpha: 0.466
        }, 0).wait(1).to({
            alpha: 0.364
        }, 0).wait(1).to({
            alpha: 0.2665
        }, 0).wait(1).to({
            alpha: 0.1776
        }, 0).wait(1).to({
            alpha: 0.1013
        }, 0).wait(1).to({
            alpha: 0.0411
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 106,
            y: 228,
            alpha: 0
        }, 0).to({
            _off: true
        }, 1).wait(27));

        // particle
        this.instance_7 = new lib.efa_particle();
        this.instance_7.parent = this;
        this.instance_7.setTransform(109.95, 208.5, 0.8734, 0.8734);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({
            _off: false
        }, 0).to({
            _off: true
        }, 17).wait(64));

        // cake_front
        this.instance_8 = new lib.a_symbol4();
        this.instance_8.parent = this;
        this.instance_8.setTransform(124, 128, 0.7879, 0.7878, 3.0034);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({
            _off: false
        }, 0).wait(1).to({
            regX: -2,
            regY: -14,
            scaleX: 0.7931,
            scaleY: 0.793,
            rotation: 2.9295,
            x: 122.7,
            y: 119.7
        }, 0).wait(1).to({
            scaleX: 0.8087,
            scaleY: 0.8086,
            rotation: 2.708,
            x: 122.05,
            y: 128.3
        }, 0).wait(1).to({
            scaleX: 0.8374,
            scaleY: 0.8373,
            rotation: 2.3024,
            x: 120.65,
            y: 144.05
        }, 0).wait(1).to({
            scaleX: 0.8874,
            scaleY: 0.8873,
            rotation: 1.5949,
            x: 118.35,
            y: 171.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0.4,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            x: 115,
            y: 247.35
        }, 0).to({
            y: 252.35
        }, 3, cjs.Ease.get(1)).to({
            regY: -0.1,
            y: 245.85
        }, 3, cjs.Ease.get(-0.49)).to({
            regY: 0.4,
            y: 247.35
        }, 3, cjs.Ease.get(0.28)).wait(32).to({
            regX: -2,
            regY: -14,
            scaleX: 1.0098,
            scaleY: 1.0098,
            x: 113,
            y: 233.45,
            alpha: 0.9619
        }, 0).wait(1).to({
            scaleX: 1.0235,
            scaleY: 1.0235,
            x: 112.95,
            y: 234.25,
            alpha: 0.9085
        }, 0).wait(1).to({
            scaleX: 1.0409,
            scaleY: 1.0409,
            x: 112.9,
            y: 235.3,
            alpha: 0.8408
        }, 0).wait(1).to({
            scaleX: 1.0615,
            scaleY: 1.0615,
            y: 236.45,
            alpha: 0.7607
        }, 0).wait(1).to({
            scaleX: 1.0847,
            scaleY: 1.0847,
            x: 112.85,
            y: 237.75,
            alpha: 0.6706
        }, 0).wait(1).to({
            scaleX: 1.1097,
            scaleY: 1.1097,
            x: 112.8,
            y: 239.15,
            alpha: 0.5732
        }, 0).wait(1).to({
            scaleX: 1.1357,
            scaleY: 1.1357,
            x: 112.75,
            y: 240.65,
            alpha: 0.4723
        }, 0).wait(1).to({
            scaleX: 1.1616,
            scaleY: 1.1616,
            x: 112.7,
            y: 242.15,
            alpha: 0.3715
        }, 0).wait(1).to({
            scaleX: 1.1864,
            scaleY: 1.1864,
            x: 112.65,
            y: 243.55,
            alpha: 0.2751
        }, 0).wait(1).to({
            scaleX: 1.209,
            scaleY: 1.209,
            x: 112.6,
            y: 244.8,
            alpha: 0.1872
        }, 0).wait(1).to({
            scaleX: 1.2284,
            scaleY: 1.2284,
            x: 112.55,
            y: 245.95,
            alpha: 0.1118
        }, 0).wait(1).to({
            scaleX: 1.2437,
            scaleY: 1.2437,
            x: 112.5,
            y: 246.85,
            alpha: 0.0523
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 1.2541,
            scaleY: 1.2541,
            x: 115,
            y: 265.5,
            alpha: 0.0117
        }, 0).to({
            _off: true
        }, 1).wait(27));

        // overlay_black
        this.instance_9 = new lib.dark();
        this.instance_9.parent = this;
        this.instance_9.setTransform(120, 155);
        this.instance_9.alpha = 0.1016;
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(57).to({
            _off: false
        }, 0).to({
            alpha: 0.6406
        }, 3, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(80));

        // ef
        this.instance_10 = new lib.___card_in_heart();
        this.instance_10.parent = this;
        this.instance_10.setTransform(120, 210.3);
        this.instance_10.alpha = 0.0508;
        this.instance_10._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({
            _off: false
        }, 0).wait(1).to({
            regY: -74.4,
            y: 135,
            alpha: 0.0888
        }, 0).wait(1).to({
            y: 132.3,
            alpha: 0.2027
        }, 0).wait(1).to({
            y: 127.9,
            alpha: 0.3925
        }, 0).wait(1).to({
            y: 121.65,
            alpha: 0.6583
        }, 0).wait(1).to({
            regY: 0,
            y: 188.1,
            alpha: 1
        }, 0).wait(1).to({
            regY: -74.4,
            y: 119.2
        }, 0).wait(1).to({
            y: 123.15
        }, 0).wait(1).to({
            y: 125.5
        }, 0).wait(1).to({
            regY: 0,
            y: 200.7
        }, 0).wait(1).to({
            regY: -74.4,
            y: 124.05
        }, 0).wait(1).to({
            regY: 0,
            y: 197.7
        }, 0).wait(1).to({
            regY: -74.4,
            y: 123.3
        }, 0).wait(1).to({
            y: 123.4
        }, 0).wait(1).to({
            y: 123.45
        }, 0).wait(1).to({
            regY: 0,
            y: 197.95
        }, 0).wait(1).to({
            regY: -74.4,
            y: 123.55
        }, 0).wait(4).to({
            regY: 0,
            y: 197.95
        }, 0).to({
            _off: true
        }, 50).wait(16));

        // tie2
        this.instance_11 = new lib.tie2();
        this.instance_11.parent = this;
        this.instance_11.setTransform(0, 325.2);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({
            _off: false
        }, 0).wait(48).to({
            y: 355.2
        }, 0).to({
            _off: true
        }, 64).wait(4).to({
            _off: false,
            y: 325.2
        }, 0).wait(12));

        // push
        this.instance_12 = new lib.pusher_next();
        this.instance_12.parent = this;
        this.instance_12.setTransform(120, 290);
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({
            _off: false
        }, 0).to({
            _off: true
        }, 9).wait(113).to({
            _off: false
        }, 0).to({
            _off: true
        }, 3).wait(13));

        // petal
        this.instance_13 = new lib.efa_hana2("synched",0,false);
        this.instance_13.parent = this;
        this.instance_13.setTransform(162.9, 216.6, 0.465, 0.782, 16.4957);

        this.instance_14 = new lib.efa_hana2("synched",0,false);
        this.instance_14.parent = this;
        this.instance_14.setTransform(123.25, 197.4, 0.5001, 0.5001, 0, 53.4182, -126.5818);

        this.instance_15 = new lib.efa_hana2("synched",0,false);
        this.instance_15.parent = this;
        this.instance_15.setTransform(109.4, 214.15, 0.7851, 0.7851, 0, -32.2392, 147.7608);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_15
            }, {
                t: this.instance_14
            }, {
                t: this.instance_13
            }]
        }, 31).to({
            state: []
        }, 8).wait(102));

        // petal
        this.instance_16 = new lib.efa_hana2("synched",0,false);
        this.instance_16.parent = this;
        this.instance_16.setTransform(105.6, 218.85, 0.7264, 0.7264, 0, -6.5305, 173.4695);

        this.instance_17 = new lib.efa_hana2("synched",0,false);
        this.instance_17.parent = this;
        this.instance_17.setTransform(167.75, 213.75, 0.6667, 0.6719, 0, 13.6446, 6.4671);

        this.instance_18 = new lib.efa_hana2("synched",0,false);
        this.instance_18.parent = this;
        this.instance_18.setTransform(159.15, 204.05, 0.637, 0.637, -31.9278);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_18
            }, {
                t: this.instance_17
            }, {
                t: this.instance_16
            }]
        }, 30).to({
            state: []
        }, 9).wait(102));

        // petal
        this.instance_19 = new lib.efa_hana2("synched",0,false);
        this.instance_19.parent = this;
        this.instance_19.setTransform(110.2, 199.85, 0.7926, 0.9951, 0, 12.4499, -167.5504);

        this.instance_20 = new lib.efa_hana2("synched",0,false);
        this.instance_20.parent = this;
        this.instance_20.setTransform(162.3, 190.2, 0.637, 0.637, -22.9396);

        this.instance_21 = new lib.efa_hana2("synched",0,false);
        this.instance_21.parent = this;
        this.instance_21.setTransform(167.05, 202);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_21
            }, {
                t: this.instance_20
            }, {
                t: this.instance_19
            }]
        }, 28).to({
            state: []
        }, 11).wait(102));

        // cake
        this.instance_22 = new lib.a_symbol4();
        this.instance_22.parent = this;
        this.instance_22.setTransform(134.3, 264.65, 0.586, 0.586, -5.2378);
        this.instance_22._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(28).to({
            _off: false
        }, 0).to({
            scaleX: 0.5859,
            scaleY: 0.5859,
            rotation: -3.7796,
            y: 240.8
        }, 3, cjs.Ease.get(-1)).to({
            scaleX: 0.586,
            scaleY: 0.586,
            rotation: -1.4383,
            y: 199.4
        }, 2).to({
            rotation: 3.0463,
            y: 213.65
        }, 6, cjs.Ease.get(1)).wait(5).to({
            rotation: 3.0463
        }, 0).to({
            x: 133.3,
            y: 229.65
        }, 4, cjs.Ease.get(1)).to({
            scaleX: 0.7879,
            scaleY: 0.7878,
            rotation: 3.0034,
            x: 124,
            y: 128
        }, 6, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(86));

        // idol_unit
        this.ch1 = new lib.unit();
        this.ch1.name = "ch1";
        this.ch1.parent = this;
        this.ch1.setTransform(120, 137, 1, 1, 0, 0, 0, 130, 125);
        this.ch1._off = true;

        this.ch2 = new lib.unit();
        this.ch2.name = "ch2";
        this.ch2.parent = this;
        this.ch2.setTransform(140, 137, 1, 1, 0, 0, 0, 130, 125);
        this.ch2.alpha = 0;
        this.ch2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.ch1).wait(13).to({
            _off: false
        }, 0).wait(16).to({
            regX: 125.7,
            regY: 121.5,
            x: 115.7,
            y: 133.65
        }, 0).wait(1).to({
            y: 134.35
        }, 0).wait(1).to({
            y: 135.6
        }, 0).wait(1).to({
            y: 136.75
        }, 0).wait(1).to({
            y: 137.3
        }, 0).wait(1).to({
            regX: 130,
            regY: 125,
            x: 120,
            y: 141
        }, 0).wait(14).to({
            y: 130
        }, 2, cjs.Ease.get(1)).to({
            y: 140
        }, 4, cjs.Ease.get(-1)).to({
            y: 137
        }, 3, cjs.Ease.get(1)).wait(12).to({
            _off: true
        }, 56).wait(16));
        this.timeline.addTween(cjs.Tween.get(this.ch2).wait(129).to({
            _off: false
        }, 0).wait(1).to({
            regX: 125.7,
            regY: 121.5,
            x: 134.8,
            y: 133.5,
            alpha: 0.04
        }, 0).wait(1).to({
            x: 132,
            alpha: 0.1663
        }, 0).wait(1).to({
            x: 127.5,
            alpha: 0.3724
        }, 0).wait(1).to({
            x: 122.2,
            alpha: 0.6153
        }, 0).wait(1).to({
            x: 117.55,
            alpha: 0.8266
        }, 0).wait(1).to({
            x: 114.65,
            alpha: 0.9581
        }, 0).wait(1).to({
            regX: 130,
            regY: 125,
            x: 118,
            y: 137,
            alpha: 1
        }, 0).to({
            x: 120
        }, 4, cjs.Ease.get(1)).wait(1));

        // powder
        this.instance_23 = new lib.glitter_rise();
        this.instance_23.parent = this;
        this.instance_23.setTransform(128.1, -7.35, 1, 1, 0, 0, 0, -0.1, 6.6);
        this.instance_23.alpha = 0.6992;

        this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(61).to({
            alpha: 1
        }, 0).to({
            alpha: 0.6992
        }, 8, cjs.Ease.get(1)).wait(72));

        // white_mask
        this.instance_24 = new lib.white_rect();
        this.instance_24.parent = this;
        this.instance_24.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.instance_24._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(61).to({
            _off: false
        }, 0).to({
            alpha: 0.0117
        }, 8, cjs.Ease.get(1)).to({
            _off: true
        }, 1).wait(71));

        // bg
        this.bg = new lib.bg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(60, 77.5, 0.5, 0.5, 0, 0, 0, 120, 155);

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(141));

        // btn
        this.btn = new lib.btn();
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.setTransform(120, 154.55, 1, 1, 0, 0, 0, 127, 163.5);
        this.btn.alpha = 0.0117;

        this.timeline.addTween(cjs.Tween.get(this.btn).wait(141));

        // idol_unit
        this.instance_25 = new lib.replace_target_260x250_unit();
        this.instance_25.parent = this;
        this.instance_25.setTransform(508, 18, 1, 1, 0, 0, 0, 130, 125);

        this.timeline.addTween(cjs.Tween.get(this.instance_25).to({
            _off: true
        }, 1).wait(140));

        // bg
        this.instance_26 = new lib.replace_bg();
        this.instance_26.parent = this;
        this.instance_26.setTransform(-192.55, -19.05, 0.5, 0.5, 0, 0, 0, 0, -0.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_26).to({
            _off: true
        }, 1).wait(140));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-180,-145,808,765);
    // library properties:
    lib.properties = {
        id: 'valentine_2020',
        width: 240,
        height: 310,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [{
            src: "images/cover_sar.png?1581047941384",
            id: "valentine_2020_cover_sar"
        }, {
            src: "images/fp_hana3.png?1581047941384",
            id: "valentine_2020_fp_hana3"
        }, {
            src: "images/heart.png?1581047941384",
            id: "valentine_2020_heart"
        }, {
            src: "images/img_kira.png?1581047941384",
            id: "valentine_2020_img_kira"
        }, {
            src: "images/replace_target_240x310_bg.jpg?1581047941384",
            id: "valentine_2020_replace_target_240x310_bg"
        }, {
            src: "images/replace_target_480x502_character.png?1581047941384",
            id: "valentine_2020_replace_target_480x502_character"
        }, {
            src: "images/Valentine2020.png?1581047941384",
            id: "valentine_2020_Valentine2020"
        }, {
            src: "images/window.png?1581047941384",
            id: "valentine_2020_window"
        }, {
            src: "images/window_3.png?1581047941384",
            id: "valentine_2020_window_3"
        }, {
            src: "images/window_4.png?1581047941384",
            id: "valentine_2020_window_4"
        }],
        preloads: []
    };

    // bootstrap callback support:

    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }
    ).prototype = p = new createjs.Stage();

    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function(ms) {
        if (ms)
            this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function(ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function() {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    }
    ;

    an.compositions = an.compositions || {};
    an.compositions['valentine_2020'] = {
        getStage: function() {
            return exportRoot.getStage();
        },
        getLibrary: function() {
            return lib;
        },
        getSpriteSheet: function() {
            return ss;
        },
        getImages: function() {
            return img;
        }
    };

    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function(id) {
        return an.compositions[id];
    }

}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
