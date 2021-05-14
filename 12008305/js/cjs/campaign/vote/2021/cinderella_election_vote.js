(function(cjs, an) {

    var p;
    // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];

    // symbols:

    (lib.base_under = function() {
        this.initialize(img.base_under);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,160);

    (lib.bg_cool = function() {
        this.initialize(img.bg_cool);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.bg_cute = function() {
        this.initialize(img.bg_cute);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.bg_passion = function() {
        this.initialize(img.bg_passion);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.heart_s_64 = function() {
        this.initialize(img.heart_s_64);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,31,29);

    (lib.kira_color_cool = function() {
        this.initialize(img.kira_color_cool);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,70,70);

    (lib.kira_color_cute = function() {
        this.initialize(img.kira_color_cute);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,70,70);

    (lib.kira_color_passion = function() {
        this.initialize(img.kira_color_passion);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,70,70);

    (lib.logo = function() {
        this.initialize(img.logo);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,352,96);

    (lib.replace_target_card_quest = function() {
        this.initialize(img.replace_target_card_quest);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,502);

    (lib.text_window = function() {
        this.initialize(img.text_window);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,200);
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

    (lib.kira_color_passion_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.kira_color_passion();
        this.instance.parent = this;
        this.instance.setTransform(-18, -18, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.kira_color_passion_1, new cjs.Rectangle(-18,-18,35,35), null);

    (lib.kira_color_cute_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.kira_color_cute();
        this.instance.parent = this;
        this.instance.setTransform(-18, -18, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.kira_color_cute_1, new cjs.Rectangle(-18,-18,35,35), null);

    (lib.kira_color_cool_1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.kira_color_cool();
        this.instance.parent = this;
        this.instance.setTransform(-18, -18, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.kira_color_cool_1, new cjs.Rectangle(-18,-18,35,35), null);

    (lib.gr_white = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(120, 155);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.gr_white, new cjs.Rectangle(0,0,240,310), null);

    (lib.gr_frame_down = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // frame
        this.instance = new lib.base_under();
        this.instance.parent = this;
        this.instance.setTransform(-120, -5, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.gr_frame_down, new cjs.Rectangle(-120,-5,240,80), null);

    (lib.gr_black = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.shape.setTransform(120, 155);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.gr_black, new cjs.Rectangle(0,0,240,310), null);

    (lib.triagngle = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_1 = function() {
            /* gotoAndStop(/:idol_type)
		stop()*/
            this.gotoAndStop(exportRoot.idol_type);
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

        // shape
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#002B99").s().p("AmplwINTAAImqLhg");
        this.shape.setTransform(42.6, 36.875);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,85.2,73.8);

    (lib.title = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // logo
        this.instance = new lib.logo();
        this.instance.parent = this;
        this.instance.setTransform(-88, -24, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-92,-24,188,67), null);

    (lib.shield = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgASuY+IgEACIAGAAIAAgEQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAgAyvZAIAHAAIgFgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgASpXcIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABMAAAgwfMglfAAAMAAAAwfQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.shield, new cjs.Rectangle(-420,-460,840,920), null);

    (lib.shape65_star = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.instance = new lib.heart_s_64();
        this.instance.parent = this;
        this.instance.setTransform(-7.75, -7.95, 0.4, 0.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-8.2,-8.4,16.7,16.700000000000003);

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

    (lib.replace_card_quest = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // replace_target
        this.instance = new lib.replace_target_card_quest();
        this.instance.parent = this;
        this.instance.setTransform(-120, -135);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.replace_card_quest, new cjs.Rectangle(-120,-135,480,502), null);

    (lib.kamif_p = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgGgIIAGgBIAHAPIgHAEg");
        this.shape.setTransform(0.025, 0.575);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFCCFF").s().p("AgFAGIABgPIAKAHIgGAMg");
        this.shape_1.setTransform(0.325, 0.425);

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
    p.nominalBounds = new cjs.Rectangle(-0.6,-0.5,1.6,2.1);

    (lib.cardBg = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* gotoAndStop(/:idol_type)
		stop()*/
            // this.gotoAndStop(exportRoot.idol_type-1);
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

        // bg
        this.instance = new lib.bg_cute();
        this.instance.parent = this;
        this.instance.setTransform(-240, -310);

        this.instance_1 = new lib.bg_cool();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-240, -310);

        this.instance_2 = new lib.bg_passion();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-240, -310);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-240,-310,480,620);

    (lib._card_w = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("EglfAnOMAAAhObMBK/AAAMAAABObg");
        this.shape.setTransform(0, -52);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._card_w, new cjs.Rectangle(-240,-303,480,502), null);

    (lib._btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._btn, new cjs.Rectangle(0,0,240,320), null);

    (lib.___text_talk = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* gotoAndStop(/:idol_type)
		stop()*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

        // _
        this.m1 = new cjs.Text("","12px 'Arial'","#002B99");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(2, 2);

        this.m5 = new cjs.Text("","12px 'Arial'","#002B99");
        this.m5.name = "m5";
        this.m5.lineHeight = 15;
        this.m5.lineWidth = 260;
        this.m5.parent = this;
        this.m5.setTransform(2, 58);

        this.m4 = new cjs.Text("","12px 'Arial'","#002B99");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(2, 44);

        this.m3 = new cjs.Text("","12px 'Arial'","#002B99");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(2, 30);

        this.m2 = new cjs.Text("","12px 'Arial'","#002B99");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(2, 16);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }, {
                t: this.m5
            }, {
                t: this.m1
            }]
        }).to({
            state: [{
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }, {
                t: this.m5
            }, {
                t: this.m1
            }]
        }, 1).to({
            state: [{
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }, {
                t: this.m5
            }, {
                t: this.m1
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,263.6,100.7);

    (lib.kira_color_passion_mov = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // レイヤー_1
        this.instance = new lib.kira_color_passion_1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45.0006
        }, 2).to({
            scaleX: 0.2999,
            scaleY: 0.2999,
            rotation: 135
        }, 6).to({
            _off: true
        }, 1).wait(4));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.7,-25.5,49.5,49.5);

    (lib.kira_color_cute_mov = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // レイヤー_1
        this.instance = new lib.kira_color_cute_1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45.0006
        }, 2).to({
            scaleX: 0.2999,
            scaleY: 0.2999,
            rotation: 135
        }, 6).to({
            _off: true
        }, 1).wait(4));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.7,-25.5,49.5,49.5);

    (lib.kira_color_cool_mov = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // レイヤー_1
        this.instance = new lib.kira_color_cool_1();
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1,
            rotation: 45.0006
        }, 2).to({
            scaleX: 0.2999,
            scaleY: 0.2999,
            rotation: 135
        }, 6).to({
            _off: true
        }, 1).wait(4));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-24.7,-25.5,49.5,49.5);

    (lib.sprite66b = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function() {
            /* stop();*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // レイヤー_2
        this.instance = new lib.shape65_star("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, 0.95, 3.4133, 4.8676, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: -1.6,
            regY: -2.2,
            scaleX: 3.1879,
            scaleY: 4.083,
            rotation: 10.6181,
            x: 26.7,
            y: -45.5
        }, 0).wait(1).to({
            scaleX: 3.0466,
            scaleY: 3.5909,
            rotation: -10.9492,
            x: 40.95,
            y: -65.5
        }, 0).wait(1).to({
            scaleX: 2.9515,
            scaleY: 3.2599,
            rotation: -25.4533,
            x: 51.45,
            y: -78.6
        }, 0).wait(1).to({
            scaleX: 2.8871,
            scaleY: 3.0357,
            rotation: -35.2756,
            x: 59.05,
            y: -87.45
        }, 0).wait(1).to({
            scaleX: 2.845,
            scaleY: 2.8893,
            rotation: -41.6917,
            x: 64.1,
            y: -93.15
        }, 0).wait(1).to({
            scaleX: 2.8197,
            scaleY: 2.8012,
            rotation: -45.5526,
            x: 67.25,
            y: -96.7
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: 77,
            y: -98.5
        }, 0).wait(1).to({
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
    p.nominalBounds = new cjs.Rectangle(-28.6,-123.8,124.9,148.6);

    (lib.sprite66 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function() {
            /* stop();*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // レイヤー_2
        this.instance = new lib.shape65_star("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(2.7, 0.95, 3.4133, 4.8676, 45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: -1.6,
            regY: -2.2,
            scaleX: 3.1879,
            scaleY: 4.083,
            rotation: 10.6181,
            x: -13.9,
            y: -35.8
        }, 0).wait(1).to({
            scaleX: 3.0466,
            scaleY: 3.5909,
            rotation: -10.9492,
            x: -25.2,
            y: -49.75
        }, 0).wait(1).to({
            scaleX: 2.9515,
            scaleY: 3.2599,
            rotation: -25.4533,
            x: -31.85,
            y: -58.75
        }, 0).wait(1).to({
            scaleX: 2.8871,
            scaleY: 3.0357,
            rotation: -35.2756,
            x: -35.9,
            y: -64.85
        }, 0).wait(1).to({
            scaleX: 2.845,
            scaleY: 2.8893,
            rotation: -41.6917,
            x: -38.45,
            y: -68.75
        }, 0).wait(1).to({
            scaleX: 2.8197,
            scaleY: 2.8012,
            rotation: -45.5526,
            x: -39.85,
            y: -71.2
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: 2.802,
            scaleY: 2.7395,
            rotation: -48.2594,
            x: -33.35,
            y: -72.25
        }, 0).wait(1).to({
            x: -35.45,
            y: -75.95,
            alpha: 0.4609
        }, 0).to({
            _off: true
        }, 1).wait(2));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66.1,-100.1,107.39999999999999,124.89999999999999);

    (lib.kamif = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            r: 32,
            "-": 76
        });

        // timeline functions:
        this.frame_0 = function() {
            /* //_rotation = _rotation + Math.random()*14
		gotoAndPlay(random(40)+15)*/
            this.rotation = this.rotation + (Math.random() * 14 | 0);
            this.gotoAndPlay((Math.random() * 40 | 0) + 14);
        }
        this.frame_76 = function() {
            /* gotoAndPlay("r")*/
            this.gotoAndPlay("r");
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(76).call(this.frame_76).wait(1));

        // レイヤー_1
        this.instance = new lib.kamif_p();
        this.instance.parent = this;
        this.instance.setTransform(0, -17.45);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({
            y: 355.55
        }, 44).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-0.6,-17.9,1.2999999999999998,375.09999999999997);

    (lib._card = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_2
        this.c = new lib.replace_card_quest();
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-0.1, -52.2, 1, 1, 0, 0, 0, 119.9, 115.8);

        this.timeline.addTween(cjs.Tween.get(this.c).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._card, new cjs.Rectangle(-240,-303,480,502), null);

    (lib.___cursor = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // _
        this.instance = new lib.triagngle();
        this.instance.parent = this;
        this.instance.setTransform(-8.15, -15.4, 1, 1, 0, 0, 0, 42.6, 36.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.___cursor, new cjs.Rectangle(-50.7,-52.3,98.80000000000001,86.3), null);

    (lib.kira_color_passion_mov_layout = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // kira_color_cool_mov
        this.instance = new lib.kira_color_passion_mov();
        this.instance.parent = this;
        this.instance.setTransform(-99.75, -115.25, 0.6, 0.6, 0, 0, 0, -0.1, -0.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({
            _off: false
        }, 0).wait(5));

        // kira_color_cool_mov
        this.instance_1 = new lib.kira_color_passion_mov();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-72, -80.7, 0.7999, 0.7999, 45);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
            _off: false
        }, 0).wait(7));

        // kira_color_cool_mov
        this.instance_2 = new lib.kira_color_passion_mov();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-64.7, -35.5, 0.6, 0.6, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

        // kira_color_cool_mov
        this.instance_3 = new lib.kira_color_passion_mov();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-89.2, 4.25, 1, 1, 45);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({
            _off: false
        }, 0).wait(9));

        // kira_color_cool_mov
        this.instance_4 = new lib.kira_color_passion_mov();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-82.95, 45.95, 0.8, 0.8);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({
            _off: false
        }, 0).wait(2));

        // kira_color_cool_mov
        this.instance_5 = new lib.kira_color_passion_mov();
        this.instance_5.parent = this;
        this.instance_5.setTransform(100.95, -113.25, 0.5, 0.5, 45);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({
            _off: false
        }, 0).wait(4));

        // kira_color_cool_mov
        this.instance_6 = new lib.kira_color_passion_mov();
        this.instance_6.parent = this;
        this.instance_6.setTransform(65, -78.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

        // kira_color_cool_mov
        this.instance_7 = new lib.kira_color_passion_mov();
        this.instance_7.parent = this;
        this.instance_7.setTransform(89.45, -49.75, 1, 1, 45);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({
            _off: false
        }, 0).wait(10));

        // kira_color_cool_mov
        this.instance_8 = new lib.kira_color_passion_mov();
        this.instance_8.parent = this;
        this.instance_8.setTransform(76.5, -28.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({
            _off: false
        }, 0).wait(8));

        // kira_color_cool_mov
        this.instance_9 = new lib.kira_color_passion_mov();
        this.instance_9.parent = this;
        this.instance_9.setTransform(101, 25.5, 0.7999, 0.7999, 45, 0, 0, 0.1, 0);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({
            _off: false
        }, 0).wait(5));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.1,-120.6,216,173.39999999999998);

    (lib.kira_color_cute_mov_layout = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // kira_color_cool_mov
        this.instance = new lib.kira_color_cute_mov();
        this.instance.parent = this;
        this.instance.setTransform(-99.75, -115.25, 0.6, 0.6, 0, 0, 0, -0.1, -0.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({
            _off: false
        }, 0).wait(5));

        // kira_color_cool_mov
        this.instance_1 = new lib.kira_color_cute_mov();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-72, -80.7, 0.7999, 0.7999, 45);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
            _off: false
        }, 0).wait(7));

        // kira_color_cool_mov
        this.instance_2 = new lib.kira_color_cute_mov();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-64.7, -35.5, 0.6, 0.6, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

        // kira_color_cool_mov
        this.instance_3 = new lib.kira_color_cute_mov();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-89.2, 4.25, 1, 1, 45);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({
            _off: false
        }, 0).wait(9));

        // kira_color_cool_mov
        this.instance_4 = new lib.kira_color_cute_mov();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-82.95, 45.95, 0.8, 0.8);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({
            _off: false
        }, 0).wait(2));

        // kira_color_cool_mov
        this.instance_5 = new lib.kira_color_cute_mov();
        this.instance_5.parent = this;
        this.instance_5.setTransform(100.95, -113.25, 0.5, 0.5, 45);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({
            _off: false
        }, 0).wait(4));

        // kira_color_cool_mov
        this.instance_6 = new lib.kira_color_cute_mov();
        this.instance_6.parent = this;
        this.instance_6.setTransform(65, -78.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

        // kira_color_cool_mov
        this.instance_7 = new lib.kira_color_cute_mov();
        this.instance_7.parent = this;
        this.instance_7.setTransform(89.45, -49.75, 1, 1, 45);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({
            _off: false
        }, 0).wait(10));

        // kira_color_cool_mov
        this.instance_8 = new lib.kira_color_cute_mov();
        this.instance_8.parent = this;
        this.instance_8.setTransform(76.5, -28.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({
            _off: false
        }, 0).wait(8));

        // kira_color_cool_mov
        this.instance_9 = new lib.kira_color_cute_mov();
        this.instance_9.parent = this;
        this.instance_9.setTransform(101, 25.5, 0.7999, 0.7999, 45, 0, 0, 0.1, 0);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({
            _off: false
        }, 0).wait(5));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.1,-120.6,216,173.39999999999998);

    (lib.kira_color_cool_mov_layout = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_10 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

        // kira_color_cool_mov
        this.instance = new lib.kira_color_cool_mov();
        this.instance.parent = this;
        this.instance.setTransform(-99.75, -115.25, 0.6, 0.6, 0, 0, 0, -0.1, -0.1);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({
            _off: false
        }, 0).wait(5));

        // kira_color_cool_mov
        this.instance_1 = new lib.kira_color_cool_mov();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-72, -80.7, 0.7999, 0.7999, 45);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({
            _off: false
        }, 0).wait(7));

        // kira_color_cool_mov
        this.instance_2 = new lib.kira_color_cool_mov();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-64.7, -35.5, 0.6, 0.6, 0, 0, 0, 0, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

        // kira_color_cool_mov
        this.instance_3 = new lib.kira_color_cool_mov();
        this.instance_3.parent = this;
        this.instance_3.setTransform(-89.2, 4.25, 1, 1, 45);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({
            _off: false
        }, 0).wait(9));

        // kira_color_cool_mov
        this.instance_4 = new lib.kira_color_cool_mov();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-82.95, 45.95, 0.8, 0.8);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({
            _off: false
        }, 0).wait(2));

        // kira_color_cool_mov
        this.instance_5 = new lib.kira_color_cool_mov();
        this.instance_5.parent = this;
        this.instance_5.setTransform(100.95, -113.25, 0.5, 0.5, 45);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({
            _off: false
        }, 0).wait(4));

        // kira_color_cool_mov
        this.instance_6 = new lib.kira_color_cool_mov();
        this.instance_6.parent = this;
        this.instance_6.setTransform(65, -78.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

        // kira_color_cool_mov
        this.instance_7 = new lib.kira_color_cool_mov();
        this.instance_7.parent = this;
        this.instance_7.setTransform(89.45, -49.75, 1, 1, 45);
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({
            _off: false
        }, 0).wait(10));

        // kira_color_cool_mov
        this.instance_8 = new lib.kira_color_cool_mov();
        this.instance_8.parent = this;
        this.instance_8.setTransform(76.5, -28.75, 0.6, 0.6, 0, 0, 0, 0.1, -0.1);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({
            _off: false
        }, 0).wait(8));

        // kira_color_cool_mov
        this.instance_9 = new lib.kira_color_cool_mov();
        this.instance_9.parent = this;
        this.instance_9.setTransform(101, 25.5, 0.7999, 0.7999, 45, 0, 0, 0.1, 0);
        this.instance_9._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({
            _off: false
        }, 0).wait(5));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-105.1,-120.6,216,173.39999999999998);

    (lib.kira_color_all = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* gotoAndStop(/:idol_type)
		stop()*/
            // this.gotoAndStop(exportRoot.idol_type-1);
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

        // kira_color_mov
        this.instance = new lib.kira_color_cute_mov_layout();
        this.instance.parent = this;

        this.instance_1 = new lib.kira_color_cool_mov_layout();
        this.instance_1.parent = this;

        this.instance_2 = new lib.kira_color_passion_mov_layout();
        this.instance_2.parent = this;

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-70.1,-84.1,140.2,53.8);

    (lib.シンボル12 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.instance = new lib.kamif();
        this.instance.parent = this;
        this.instance.setTransform(1.35, 27.1);

        this.instance_1 = new lib.kamif();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-92.45, 13.45);

        this.instance_2 = new lib.kamif();
        this.instance_2.parent = this;
        this.instance_2.setTransform(-28.5, 20.95, 1.7537, 1.7537);

        this.instance_3 = new lib.kamif();
        this.instance_3.parent = this;
        this.instance_3.setTransform(66.8, 37.85, 1.7537, 1.7537);

        this.instance_4 = new lib.kamif();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-22.2, 14.8);

        this.instance_5 = new lib.kamif();
        this.instance_5.parent = this;
        this.instance_5.setTransform(110.25, 40.85, 1.7537, 1.7537);

        this.instance_6 = new lib.kamif();
        this.instance_6.parent = this;
        this.instance_6.setTransform(-115.55, 34.1, 1.7537, 1.7537);

        this.instance_7 = new lib.kamif();
        this.instance_7.parent = this;
        this.instance_7.setTransform(84.95, 25.1);

        this.instance_8 = new lib.kamif();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-118.65, 27.9);

        this.instance_9 = new lib.kamif();
        this.instance_9.parent = this;
        this.instance_9.setTransform(11.05, 35.35, 1.7537, 1.7537);

        this.instance_10 = new lib.kamif();
        this.instance_10.parent = this;
        this.instance_10.setTransform(-51.65, 32.45, 1.7537, 1.7537);

        this.instance_11 = new lib.kamif();
        this.instance_11.parent = this;
        this.instance_11.setTransform(64.05, 17.8);

        this.instance_12 = new lib.kamif();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-2, 1.95);

        this.instance_13 = new lib.kamif();
        this.instance_13.parent = this;
        this.instance_13.setTransform(57.45, 14.8);

        this.instance_14 = new lib.kamif();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-92.25, 27.9);

        this.instance_15 = new lib.kamif();
        this.instance_15.parent = this;
        this.instance_15.setTransform(-27.45, 46.85, 1.7537, 1.7537);

        this.instance_16 = new lib.kamif();
        this.instance_16.parent = this;
        this.instance_16.setTransform(99.75, 29.95, 1.7537, 1.7537);

        this.instance_17 = new lib.kamif();
        this.instance_17.parent = this;
        this.instance_17.setTransform(27.15, 22.6, 1.7537, 1.7537);

        this.instance_18 = new lib.kamif();
        this.instance_18.parent = this;
        this.instance_18.setTransform(46.15, 23.8);

        this.instance_19 = new lib.kamif();
        this.instance_19.parent = this;
        this.instance_19.setTransform(25.55, 29.3);

        this.instance_20 = new lib.kamif();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-40.5, 13.45);

        this.instance_21 = new lib.kamif();
        this.instance_21.parent = this;
        this.instance_21.setTransform(-75, 21.35);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
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
    ).prototype = getMCSymbolPrototype(lib.シンボル12, new cjs.Rectangle(-119.3,-15.9,230.8,34.9), null);

    (lib.エフェクト_レベルアップ = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* if(/:heartFlg != 1) {
			_visible=0
		}*/
            /*if (exportRoot.heartFlg != 1) {
			this.visible = false;
		}*/
            this.gotoAndStop(2);
        }
        this.frame_12 = function() {
            /* stop();*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

        // 大きい玉
        this.instance = new lib.shape65("single",0);
        this.instance.parent = this;
        this.instance.setTransform(8.1, 14.1, 9.5072, 9.5072, 90);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(12));

        // 広がる玉1
        this.instance_1 = new lib.sprite66("synched",0,false);
        this.instance_1.parent = this;
        this.instance_1.setTransform(9, 17, 0.6564, 0.6564, -135.1055);

        this.instance_2 = new lib.sprite66("synched",0,false);
        this.instance_2.parent = this;
        this.instance_2.setTransform(11, 16, 0.6564, 0.6564, 0, 45.1055, -134.8945);

        this.instance_3 = new lib.sprite66("synched",0,false);
        this.instance_3.parent = this;
        this.instance_3.setTransform(6, 15, 0.6564, 0.6564, 0, -134.8945, 45.1055);

        this.instance_4 = new lib.sprite66("synched",0,false);
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
        }, 11).wait(1));

        // 広がる玉2
        this.instance_5 = new lib.sprite66b("synched",0,false);
        this.instance_5.parent = this;
        this.instance_5.setTransform(9.05, 14.25, 0.4201, 0.4201, 89.8939);

        this.instance_6 = new lib.sprite66b("synched",0,false);
        this.instance_6.parent = this;
        this.instance_6.setTransform(7.6, 14.25, 0.4201, 0.4201, 0, -89.8939, 90.1061);

        this.instance_7 = new lib.sprite66b("synched",0,false);
        this.instance_7.parent = this;
        this.instance_7.setTransform(9.05, 17, 0.4201, 0.4201, 0, 90.1061, -89.8939);

        this.instance_8 = new lib.sprite66b("synched",0,false);
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
        }, 10).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-70.3,-63.8,158.8,158.7);

    (lib.cursor1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // カーソル
        this.instance = new lib.___cursor();
        this.instance.parent = this;
        this.instance.setTransform(11.75, 9.75, 0.1846, 0.1863);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            regY: -0.6,
            scaleX: 0.1844,
            y: 12.05
        }, 0).wait(2));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(2.4,0,15.700000000000001,16.2);

    (lib._mes = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // cursor
        this.instance = new lib.cursor1();
        this.instance.parent = this;
        this.instance.setTransform(92, 30, 0.6429, 0.6408);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // base
        this.instance_1 = new lib.text_window();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-120, -38, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._mes, new cjs.Rectangle(-120,-64.9,240,126.9), null);

    // stage content:
    (lib.cinderella_election_vote = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            label_start: 1,
            label_heart: 21
        });

        // timeline functions:
        this.frame_0 = function() {
            ///**
            ////リンク
            //url = "http://mbga.jp/";
            //
            ////カードの属性 (敷物の色を変えます)
            ////1ｷｭｰﾄ
            ////2ｸｰﾙ
            ////3ﾊﾟｯｼｮﾝ
            //idol_type = 1;
            //
            ////アイドルごとのテキスト
            ////　スマフォ版では強制改行の処理を行なってください
            //card_comm1_1 = "バウム郎さんっ､";
            //card_comm1_2 = "これ…作ってきました!";
            //card_comm1_3 = "味見したから､";
            //card_comm1_4 = "味は保証つきですよっ!";
            //card_comm1_5 = "「美味しくなる魔法」入りですっ!";
            //
            ///**/
            //
            ////----------------------
            ////　初期化
            ////----------------------
            //key_flag = 1;
            this.url = window.im_cjs._url;
            this.idol_type = window.im_cjs.idol_type;
            this.card_comm1_1 = window.im_cjs.card_comm1_1;
            this.card_comm1_2 = window.im_cjs.card_comm1_2;
            this.card_comm1_3 = window.im_cjs.card_comm1_3;
            this.card_comm1_4 = window.im_cjs.card_comm1_4;
            // this.card_comm1_5 = window.im_cjs.card_comm1_5;
            this.key_flag = 1;

            this.changeBrightness = function(data) {
                if (!data.target || !data.brightness)
                    return;
                var targetObj = data.target;
                var brightness = data.brightness;
                var cache = null;
                if (data.cache) {
                    cache = {
                        x: data.cache[0],
                        y: data.cache[1],
                        width: data.cache[2],
                        height: data.cache[3]
                    };
                } else {
                    cache = targetObj.getBounds();
                }

                var multi_offset = 1;
                var offset = 0;

                if (brightness < 0) {
                    multi_offset = 1.0 + brightness;
                } else {
                    multi_offset = 1.0 - brightness;
                    offset = 255 * brightness;
                }
                var filter = new createjs.ColorFilter(multi_offset,multi_offset,multi_offset,1,offset,offset,offset,0);
                targetObj.filters = [filter];
                targetObj.cache(cache.x, cache.y, cache.width, cache.height);
            }

            this.changeColor = function(data) {
                if (!data.target || !data.colorDetail)
                    return;
                var targetObj = data.target;
                var d = data.colorDetail;
                var cache = null;
                if (data.cache) {
                    cache = {
                        x: data.cache[0],
                        y: data.cache[1],
                        width: data.cache[2],
                        height: data.cache[3]
                    };
                } else {
                    cache = targetObj.getBounds();
                }

                var filter = new createjs.ColorFilter(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7]);
                targetObj.filters = [filter];
                targetObj.cache(cache.x, cache.y, cache.width, cache.height);
            }

            this.removeFilter = function(data) {
                if (!data.target)
                    return;
                var targetObj = data.target;
                targetObj.filters = [];
                targetObj.uncache();
            }
        }
        this.frame_1 = function() {
            this.bg.gotoAndStop(this.idol_type - 1);
            this.kiracolor.gotoAndStop(this.idol_type - 1);
            window.se_play("se_093");
        }
        this.frame_18 = function() {
            /*

		on (press, keyPress "<Enter>") {
			if (key_flag eq 1)
			{
				getURL(/:url);
				key_flag = 0;
			}
		}
		on (keyPress "5") {
			if (key_flag eq 1)
			{
				getURL(/:url);
				key_flag = 0;
			}
		}
		*/
            this.btn.on("click", function() {
                if (this.key_flag == 1) {
                    window.location.href = this.url;
                    this.key_flag = 0;
                }
            }, this, true);
        }
        this.frame_21 = function() {
            this.heart.play();
            this.message.gotoAndStop(exportRoot.idol_type - 1);
            this.message.m1.text = this.card_comm1_1;
            this.message.m2.text = this.card_comm1_2;
            this.message.m3.text = this.card_comm1_3;
            this.message.m4.text = this.card_comm1_4;
            this.message.m5.text = this.card_comm1_5;
            window.se_play("se_110");
        }
        this.frame_33 = function() {
            /* stop();
		*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(3).call(this.frame_21).wait(12).call(this.frame_33).wait(1));

        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

        // gr_white
        this.instance_1 = new lib.gr_white();
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            alpha: 0
        }, 12, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(21));

        // text
        this.message = new lib.___text_talk();
        this.message.name = "message";
        this.message.parent = this;
        this.message.setTransform(151.8, 284.4, 1, 1, 0, 0, 0, 131.8, 52.4);
        this.message._off = true;

        this.timeline.addTween(cjs.Tween.get(this.message).wait(20).to({
            _off: false
        }, 0).wait(1).to({
            x: 145.8
        }, 0).wait(13));

        // title
        this.instance_2 = new lib.title();
        this.instance_2.parent = this;
        this.instance_2.setTransform(118, -16);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({
            _off: false
        }, 0).wait(1).to({
            y: -10.707
        }, 0).wait(1).to({
            y: 9.3293
        }, 0).wait(1).to({
            y: 24
        }, 0).to({
            y: 21
        }, 2, cjs.Ease.get(1)).wait(1).to({
            y: 22
        }, 0).wait(19));

        // heart
        this.heart = new lib.エフェクト_レベルアップ();
        this.heart.name = "heart";
        this.heart.parent = this;
        this.heart.setTransform(124.7, 71, 1.4977, 1.4977, 40.0014);
        this.heart.alpha = 0;
        this.heart._off = true;

        this.timeline.addTween(cjs.Tween.get(this.heart).wait(20).to({
            _off: false
        }, 0).wait(1).to({
            alpha: 1
        }, 0).wait(13));

        // text_base
        this.instance_3 = new lib._mes();
        this.instance_3.parent = this;
        this.instance_3.setTransform(119.9, 246.5, 0.4203, 0.4203);
        this.instance_3.alpha = 0.1719;
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({
            _off: false
        }, 0).to({
            scaleX: 1.0353,
            scaleY: 1.0353,
            alpha: 1
        }, 2).to({
            scaleX: 1,
            scaleY: 1,
            x: 120,
            y: 248
        }, 3).wait(10));

        // kira_color_all
        this.kiracolor = new lib.kira_color_all();
        this.kiracolor.name = "kiracolor";
        this.kiracolor.parent = this;
        this.kiracolor.setTransform(120, 155);

        this.timeline.addTween(cjs.Tween.get(this.kiracolor).wait(34));

        // frame_down
        this.instance_4 = new lib.gr_frame_down();
        this.instance_4.parent = this;
        this.instance_4.setTransform(120, 236, 1.0667, 1.0667);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({
            regY: 35,
            scaleX: 1.0662,
            scaleY: 1.0662,
            y: 273.25
        }, 0).wait(1).to({
            scaleX: 1.0645,
            scaleY: 1.0645,
            y: 273.2
        }, 0).wait(1).to({
            scaleX: 1.0616,
            scaleY: 1.0616,
            y: 273.05
        }, 0).wait(1).to({
            scaleX: 1.0573,
            scaleY: 1.0573,
            y: 272.85
        }, 0).wait(1).to({
            scaleX: 1.0513,
            scaleY: 1.0513,
            y: 272.55
        }, 0).wait(1).to({
            scaleX: 1.0438,
            scaleY: 1.0438,
            y: 272.2
        }, 0).wait(1).to({
            scaleX: 1.0352,
            scaleY: 1.0352,
            y: 271.75
        }, 0).wait(1).to({
            scaleX: 1.0263,
            scaleY: 1.0263,
            y: 271.25
        }, 0).wait(1).to({
            scaleX: 1.018,
            scaleY: 1.018,
            y: 270.9
        }, 0).wait(1).to({
            scaleX: 1.0111,
            scaleY: 1.0111,
            y: 270.55
        }, 0).wait(1).to({
            scaleX: 1.006,
            scaleY: 1.006,
            y: 270.25
        }, 0).wait(1).to({
            scaleX: 1.0025,
            scaleY: 1.0025,
            y: 270.1
        }, 0).wait(1).to({
            scaleX: 1.0006,
            scaleY: 1.0006,
            y: 270
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 235
        }, 0).wait(20));

        // powder
        this.instance_5 = new lib.シンボル12();
        this.instance_5.parent = this;
        this.instance_5.setTransform(54, 319, 0.7, 0.6999, 178.9994, 0, 0, 0.1, 13.5);

        this.instance_6 = new lib.シンボル12();
        this.instance_6.parent = this;
        this.instance_6.setTransform(180.3, 319.2, 0.7, 0.7, -178.9995, 0, 0, 0, 13.5);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_6
            }, {
                t: this.instance_5
            }]
        }).wait(34));

        // character_w
        this.ch_w = new lib._card_w();
        this.ch_w.name = "ch_w";
        this.ch_w.parent = this;
        this.ch_w.setTransform(119.95, 151.15, 0.5, 0.5, 0, 0, 0, 0, 0.1);
        this.ch_w.alpha = 0.4688;
        this.ch_w.compositeOperation = "lighter";

        this.timeline.addTween(cjs.Tween.get(this.ch_w).to({
            alpha: 0
        }, 12).wait(5).to({
            y: 153.15,
            alpha: 1
        }, 2, cjs.Ease.get(1)).to({
            regY: 0,
            y: 138.65,
            alpha: 0.4688
        }, 3, cjs.Ease.get(1)).to({
            regY: 0.1,
            y: 151.15,
            alpha: 0
        }, 3, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(8));

        // character
        this.ch = new lib._card();
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(119.95, 151.15, 0.5, 0.5, 0, 0, 0, 0, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.ch).wait(17).to({
            y: 153.15
        }, 2, cjs.Ease.get(1)).to({
            regY: 0,
            y: 138.65
        }, 3, cjs.Ease.get(1)).to({
            regY: 0.1,
            y: 151.15
        }, 3, cjs.Ease.get(-1)).to({
            regY: 0,
            y: 144.8
        }, 1, cjs.Ease.get(1)).to({
            y: 142.65
        }, 1).to({
            y: 144.05
        }, 1, cjs.Ease.get(-1)).to({
            regY: 0.1,
            y: 155.15
        }, 2).to({
            y: 151.15
        }, 3, cjs.Ease.get(1)).wait(1));

        // gr_white
        this.instance_7 = new lib.gr_white();
        this.instance_7.parent = this;
        this.instance_7.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.instance_7.alpha = 0.9414;
        this.instance_7.compositeOperation = "lighter";
        this.instance_7._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({
            _off: false
        }, 0).to({
            alpha: 0
        }, 10).to({
            _off: true
        }, 1).wait(2));

        // gr_black
        this.instance_8 = new lib.gr_black();
        this.instance_8.parent = this;
        this.instance_8.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.instance_8.alpha = 0.5;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({
            alpha: 0
        }, 12).wait(3).to({
            alpha: 0.6289
        }, 5).to({
            _off: true
        }, 1).wait(13));

        // heart_bg
        this.bg = new lib.cardBg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(120.4, 155, 0.5, 0.5);

        this.timeline.addTween(cjs.Tween.get(this.bg).wait(34));

        // btn
        this.btn = new lib._btn();
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn._off = true;

        this.timeline.addTween(cjs.Tween.get(this.btn).wait(18).to({
            _off: false
        }, 0).wait(16));

        // card
        this.instance_9 = new lib.replace_card_quest();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-120.1, 142.55, 0.5, 0.5, 0, 0, 0, 119.9, 150.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_9).to({
            _off: true
        }, 1).wait(33));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-320,-145,860,765);
    // library properties:
    lib.properties = {
        id: 'cinderella_election_vote',
        width: 240,
        height: 310,
        fps: 12,
        color: "#333333",
        opacity: 1.00,
        manifest: [{
            src: "images/base_under.png",
            id: "base_under"
        }, {
            src: "images/bg_cool.jpg",
            id: "bg_cool"
        }, {
            src: "images/bg_cute.jpg",
            id: "bg_cute"
        }, {
            src: "images/bg_passion.jpg",
            id: "bg_passion"
        }, {
            src: "images/heart_s_64.png",
            id: "heart_s_64"
        }, {
            src: "images/kira_color_cool.png",
            id: "kira_color_cool"
        }, {
            src: "images/kira_color_cute.png",
            id: "kira_color_cute"
        }, {
            src: "images/kira_color_passion.png",
            id: "kira_color_passion"
        }, {
            src: "images/logo.png",
            id: "logo"
        }, {
            src: "images/replace_target_card_quest.png",
            id: "replace_target_card_quest"
        }, {
            src: "images/text_window.png",
            id: "text_window"
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
    an.compositions['cinderella_election_vote'] = {
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

    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width
              , h = lib.properties.height;
            var iw = window.innerWidth
              , ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1
              , xRatio = iw / w
              , yRatio = ih / h
              , sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }

}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
