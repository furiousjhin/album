(function(cjs, an) {

    var p;
    // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];

    // symbols:

    (lib.base_under = function() {
        this.initialize(img.cinderella_election_vote_base_under);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,160);

    (lib.bg_cool = function() {
        this.initialize(img.cinderella_election_vote_bg_cool);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.bg_cute = function() {
        this.initialize(img.cinderella_election_vote_bg_cute);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.bg_passion = function() {
        this.initialize(img.cinderella_election_vote_bg_passion);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,620);

    (lib.heart_s_64 = function() {
        this.initialize(img.cinderella_election_vote_heart_s_64);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,31,29);

    (lib.kirakira = function() {
        this.initialize(img.cinderella_election_vote_kirakira);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,20,20);

    (lib.logo = function() {
        this.initialize(img.cinderella_election_vote_logo);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,352,96);

    (lib.replace_target_card_quest = function() {
        this.initialize(img.cinderella_election_vote_replace_target_card_quest);
    }
    ).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,480,502);

    (lib.text_window = function() {
        this.initialize(img.cinderella_election_vote_text_window);
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

    (lib.asset_efc_flashBlade = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.instance = new lib.kirakira();
        this.instance.parent = this;
        this.instance.setTransform(-49.7, 0, 3.5322, 3.5322, -44.9993);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // レイヤー_2
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.502)"], [0, 1], 0, 0, 0, 0, 0, 39.9).s().p("AgTAAIATuAIAUOAIgUOBg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

        // レイヤー_1
        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.lf(["#FFFFFF", "rgba(255,255,255,0.502)"], [0, 1], -89.7, 0, 89.8, 0).s().p("AuAABIOAgVIOBAVIuBAUg");

        this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.asset_efc_flashBlade, new cjs.Rectangle(-89.7,-89.7,179.5,179.5), null);

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
    ).prototype = getMCSymbolPrototype(lib.gr_frame_down, new cjs.Rectangle(-120,-14.5,240,90), null);

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

    (lib.grip = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            /* _visible = false;*/
            this.visible = false;
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#CC0000").s().p("AkkAAIEkkkIElEkIklElg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(-29.3,-29.3,58.7,58.7), null);

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
    p.nominalBounds = new cjs.Rectangle(-240,-315,480,625);

    (lib._btn = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._btn, new cjs.Rectangle(0,0,240,320), null);

    (lib._asset_efc_kira = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // _0x40
        this.instance = new lib.kirakira();
        this.instance.parent = this;
        this.instance.setTransform(-10, -10);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        // _0x20
        this.instance_1 = new lib.kirakira();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10, -10);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib._asset_efc_kira, new cjs.Rectangle(-10,-10,20,20), null);

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

    (lib.efa_ｷﾗｷﾗ = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_8 = function() {
            /* gotoAndPlay(_currentFrame + random(7)+1)*/
            this.gotoAndPlay(this.currentFrame + (Math.random() * 7 | 0) + 1);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(10));

        // Layer_1
        this.instance = new lib.grip();
        this.instance.parent = this;

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            _off: true
        }, 1).wait(17));

        // レイヤー_2
        this.instance_1 = new lib.asset_efc_flashBlade();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-0.05, 0, 0.1255, 1);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            _off: false
        }, 0).wait(1).to({
            scaleX: 0.748,
            scaleY: 0.6754
        }, 0).to({
            scaleX: 0.5,
            scaleY: 1,
            alpha: 0.1289
        }, 4).to({
            _off: true
        }, 1).wait(11));

        // レイヤー_3
        this.instance_2 = new lib._asset_efc_kira();
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 0.6427, 0.6427, -44.822);
        this.instance_2.alpha = 0.4297;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
            scaleX: 2.7359,
            scaleY: 2.7359,
            rotation: -11.2055,
            alpha: 0.8574
        }, 0).wait(1).to({
            scaleX: 3.4336,
            scaleY: 3.4336,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 3.4147,
            scaleY: 3.4147,
            rotation: 1.9399,
            alpha: 0.971
        }, 0).wait(1).to({
            scaleX: 3.3614,
            scaleY: 3.3614,
            rotation: 7.4005,
            alpha: 0.8893
        }, 0).wait(1).to({
            scaleX: 3.2736,
            scaleY: 3.2736,
            rotation: 16.3817,
            alpha: 0.7549
        }, 0).wait(1).to({
            scaleX: 3.1515,
            scaleY: 3.1515,
            rotation: 28.8836,
            alpha: 0.5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: 0.3281
        }, 0).to({
            _off: true
        }, 1).wait(10));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-67.2,-89.7,134.3,179.5);

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

    (lib.efa_キラキラボードカード用 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_12 = function() {
            /* stop ();
		*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

        // efa_ｷﾗｷﾗ
        this.instance = new lib.efa_ｷﾗｷﾗ();
        this.instance.parent = this;
        this.instance.setTransform(-125, -166.9, 0.281, 0.281);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({
            _off: false
        }, 0).wait(7));

        // efa_ｷﾗｷﾗ
        this.instance_1 = new lib.efa_ｷﾗｷﾗ();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-154.9, -81.1, 0.281, 0.281);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({
            _off: false
        }, 0).wait(10));

        // efa_ｷﾗｷﾗ
        this.instance_2 = new lib.efa_ｷﾗｷﾗ();
        this.instance_2.parent = this;
        this.instance_2.setTransform(153.85, -74.35, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13));

        // efa_ｷﾗｷﾗ
        this.instance_3 = new lib.efa_ｷﾗｷﾗ();
        this.instance_3.parent = this;
        this.instance_3.setTransform(44.7, -220.95, 0.281, 0.281);
        this.instance_3._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({
            _off: false
        }, 0).wait(1));

        // efa_ｷﾗｷﾗ
        this.instance_4 = new lib.efa_ｷﾗｷﾗ();
        this.instance_4.parent = this;
        this.instance_4.setTransform(-165.5, 99.95, 0.281, 0.281);
        this.instance_4._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({
            _off: false
        }, 0).wait(4));

        // efa_ｷﾗｷﾗ
        this.instance_5 = new lib.efa_ｷﾗｷﾗ();
        this.instance_5.parent = this;
        this.instance_5.setTransform(89.3, -183.4, 0.281, 0.281);
        this.instance_5._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({
            _off: false
        }, 0).wait(7));

        // efa_ｷﾗｷﾗ
        this.instance_6 = new lib.efa_ｷﾗｷﾗ();
        this.instance_6.parent = this;
        this.instance_6.setTransform(166, 71.55, 0.281, 0.281);
        this.instance_6._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({
            _off: false
        }, 0).wait(10));

        // efa_ｷﾗｷﾗ
        this.instance_7 = new lib.efa_ｷﾗｷﾗ();
        this.instance_7.parent = this;
        this.instance_7.setTransform(153.85, -204.45, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13));

        // efa_ｷﾗｷﾗ
        this.instance_8 = new lib.efa_ｷﾗｷﾗ();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-160.2, -220.9, 0.1, 0.1);
        this.instance_8._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({
            _off: false
        }, 0).wait(1));

        // efa_ｷﾗｷﾗ
        this.instance_9 = new lib.efa_ｷﾗｷﾗ();
        this.instance_9.parent = this;
        this.instance_9.setTransform(-166.1, 203.55, 0.1, 0.1);

        this.instance_10 = new lib.efa_ｷﾗｷﾗ();
        this.instance_10.parent = this;
        this.instance_10.setTransform(151.6, -136.8, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_10
            }, {
                t: this.instance_9
            }]
        }, 9).wait(4));

        // efa_ｷﾗｷﾗ
        this.instance_11 = new lib.efa_ｷﾗｷﾗ();
        this.instance_11.parent = this;
        this.instance_11.setTransform(107.25, -220.9, 0.1, 0.1);
        this.instance_11._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(6).to({
            _off: false
        }, 0).wait(7));

        // efa_ｷﾗｷﾗ
        this.instance_12 = new lib.efa_ｷﾗｷﾗ();
        this.instance_12.parent = this;
        this.instance_12.setTransform(-73.25, -148.6, 0.1, 0.1);
        this.instance_12._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({
            _off: false
        }, 0).wait(10));

        // efa_ｷﾗｷﾗ
        this.instance_13 = new lib.efa_ｷﾗｷﾗ();
        this.instance_13.parent = this;
        this.instance_13.setTransform(-124.4, -63.15, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13));

        // efa_ｷﾗｷﾗ
        this.instance_14 = new lib.efa_ｷﾗｷﾗ();
        this.instance_14.parent = this;
        this.instance_14.setTransform(-13.7, -226.8, 0.1, 0.1);
        this.instance_14._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({
            _off: false
        }, 0).wait(1));

        // efa_ｷﾗｷﾗ
        this.instance_15 = new lib.efa_ｷﾗｷﾗ();
        this.instance_15.parent = this;
        this.instance_15.setTransform(39.4, 209.45, 0.1, 0.1);

        this.instance_16 = new lib.efa_ｷﾗｷﾗ();
        this.instance_16.parent = this;
        this.instance_16.setTransform(165.05, 136.15, 0.1, 0.1);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_16
            }, {
                t: this.instance_15
            }]
        }, 9).wait(4));

        // efa_ｷﾗｷﾗ
        this.instance_17 = new lib.efa_ｷﾗｷﾗ();
        this.instance_17.parent = this;
        this.instance_17.setTransform(119.95, -113.2, 0.281, 0.281);

        this.instance_18 = new lib.efa_ｷﾗｷﾗ();
        this.instance_18.parent = this;
        this.instance_18.setTransform(-62.05, -221.5, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_18
            }, {
                t: this.instance_17
            }]
        }, 6).wait(7));

        // efa_ｷﾗｷﾗ
        this.instance_19 = new lib.efa_ｷﾗｷﾗ();
        this.instance_19.parent = this;
        this.instance_19.setTransform(-100.15, 214.75, 0.281, 0.281);
        this.instance_19._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({
            _off: false
        }, 0).wait(10));

        // efa_ｷﾗｷﾗ
        this.instance_20 = new lib.efa_ｷﾗｷﾗ();
        this.instance_20.parent = this;
        this.instance_20.setTransform(-45.55, -183.4, 0.281, 0.281);

        this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(13));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-173.7,-229.7,348,452.7);

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
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 120, 120, 120, 0]
            });
            this.changeBrightness({
                target: this.bg,
                brightness: -0.5
            });
        }
        this.frame_1 = function() {
            window.se_play("se_093");
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 110, 110, 110, 0]
            });
            this.bg.gotoAndStop(this.idol_type - 1);
            this.changeColor({
                target: this.bg,
                colorDetail: [0.54, 0.54, 0.54, 1, 0, 0, 0, 0]
            });
        }
        this.frame_2 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 100, 100, 100, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.58, 0.58, 0.58, 1, 0, 0, 0, 0]
            });
        }
        this.frame_3 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 90, 90, 90, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.63, 0.63, 0.63, 1, 0, 0, 0, 0]
            });
        }
        this.frame_4 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 80, 80, 80, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.67, 0.67, 0.67, 1, 0, 0, 0, 0]
            });
        }
        this.frame_5 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 70, 70, 70, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.71, 0.71, 0.71, 1, 0, 0, 0, 0]
            });
        }
        this.frame_6 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 60, 60, 60, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.75, 0.75, 0.75, 1, 0, 0, 0, 0]
            });
        }
        this.frame_7 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 50, 50, 50, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.79, 0.79, 0.79, 1, 0, 0, 0, 0]
            });
        }
        this.frame_8 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 40, 40, 40, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.83, 0.83, 0.83, 1, 0, 0, 0, 0]
            });
        }
        this.frame_9 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 30, 30, 30, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.88, 0.88, 0.88, 1, 0, 0, 0, 0]
            });
        }
        this.frame_10 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 20, 20, 20, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.92, 0.92, 0.92, 1, 0, 0, 0, 0]
            });
        }
        this.frame_11 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 10, 10, 10, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.96, 0.96, 0.96, 1, 0, 0, 0, 0]
            });
        }
        this.frame_12 = function() {
            this.removeFilter({
                target: this.ch
            });
            this.removeFilter({
                target: this.bg
            });
        }
        this.frame_16 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [0.98, 0.98, 0.98, 1, 0, 0, 0, 0]
            });
        }
        this.frame_17 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [0.90, 0.90, 0.90, 1, 0, 0, 0, 0]
            });
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
            this.changeColor({
                target: this.bg,
                colorDetail: [0.77, 0.77, 0.77, 1, 0, 0, 0, 0]
            });
        }
        this.frame_19 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 0, 0, 0, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [0.60, 0.60, 0.60, 1, 0, 0, 0, 0]
            });
        }
        this.frame_20 = function() {
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 67, 67, 67, 0]
            });
            this.changeBrightness({
                target: this.bg,
                brightness: -0.63
            });
        }
        this.frame_21 = function() {
            this.message.gotoAndStop(exportRoot.idol_type - 1);
            this.message.m1.text = this.card_comm1_1;
            this.message.m2.text = this.card_comm1_2;
            this.message.m3.text = this.card_comm1_3;
            this.message.m4.text = this.card_comm1_4;
            this.message.m5.text = this.card_comm1_5;
            window.se_play("se_110");
            this.heart.play();
            this.changeColor({
                target: this.heart,
                colorDetail: [1, 1, 1, 1, 60, 60, 60, 0],
                cache: [-90, -80, 190, 190]
            });
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 107, 107, 107, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 240, 240, 240, 0]
            });
        }
        this.frame_22 = function() {
            this.changeColor({
                target: this.heart,
                colorDetail: [1, 1, 1, 1, 27, 27, 27, 0],
                cache: [-90, -80, 190, 190]
            });
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 120, 120, 120, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 194, 194, 194, 0]
            });
        }
        this.frame_23 = function() {
            this.changeColor({
                target: this.heart,
                colorDetail: [1, 1, 1, 1, 7, 7, 7, 0],
                cache: [-90, -80, 190, 190]
            });
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 107, 107, 107, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 154, 154, 154, 0]
            });
        }
        this.frame_24 = function() {
            this.removeFilter({
                target: this.heart
            });
            this.changeColor({
                target: this.ch,
                colorDetail: [1, 1, 1, 1, 67, 67, 67, 0]
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 118, 118, 118, 0]
            });
        }
        this.frame_25 = function() {
            this.removeFilter({
                target: this.ch
            });
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 86, 86, 86, 0]
            });
        }
        this.frame_26 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 60, 60, 60, 0]
            });
        }
        this.frame_27 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 38, 38, 38, 0]
            });
        }
        this.frame_28 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 22, 22, 22, 0]
            });
        }
        this.frame_29 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 10, 10, 10, 0]
            });
        }
        this.frame_30 = function() {
            this.changeColor({
                target: this.bg,
                colorDetail: [1, 1, 1, 1, 2, 2, 2, 0]
            });
        }
        this.frame_31 = function() {
            this.removeFilter({
                target: this.bg
            });
        }
        this.frame_33 = function() {
            /* stop();
		*/
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(4).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(2).call(this.frame_33).wait(1));

        // shield
        this.instance = new lib.shield();
        this.instance.parent = this;
        this.instance.setTransform(120, 160);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));

        // レイヤー_1
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

        // kirakira
        this.instance_4 = new lib.efa_キラキラボードカード用();
        this.instance_4.parent = this;
        this.instance_4.setTransform(119.95, 159.95, 0.6779, 0.6779);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34));

        // frame_down
        this.instance_5 = new lib.gr_frame_down();
        this.instance_5.parent = this;
        this.instance_5.setTransform(120, 236, 1.0667, 1.0667);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({
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
        this.instance_6 = new lib.シンボル12();
        this.instance_6.parent = this;
        this.instance_6.setTransform(54, 319, 0.7, 0.6999, 178.9994, 0, 0, 0.1, 13.5);
        this.instance_6.filters = [new cjs.ColorFilter(1,1,1,1,255,255,13,0)];
        this.instance_6.cache(-121, -18, 235, 39);

        this.instance_7 = new lib.シンボル12();
        this.instance_7.parent = this;
        this.instance_7.setTransform(180.3, 319.2, 0.7, 0.7, -178.9995, 0, 0, 0, 13.5);
        this.instance_7.filters = [new cjs.ColorFilter(1,1,1,1,255,255,13,0)];
        this.instance_7.cache(-121, -18, 235, 39);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.instance_7
            }, {
                t: this.instance_6
            }]
        }).wait(34));

        // character
        this.ch = new lib._card();
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(119.95, 151.15, 0.5, 0.5, 0, 0, 0, 0, 0.1);
        this.ch.filters = [new cjs.ColorFilter(1,1,1,1,120,120,120,0)];
        this.ch.cache(-242, -305, 484, 506);

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

        // heart_bg
        this.bg = new lib.cardBg();
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(120.4, 155, 0.5, 0.5);
        this.bg.filters = [new cjs.ColorFilter(0.5,0.5,0.5,1,0,0,0,0)];
        this.bg.cache(-242, -317, 484, 629);

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
        this.instance_8 = new lib.replace_card_quest();
        this.instance_8.parent = this;
        this.instance_8.setTransform(-120.1, 142.55, 0.5, 0.5, 0, 0, 0, 119.9, 150.1);

        this.timeline.addTween(cjs.Tween.get(this.instance_8).to({
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
            id: "cinderella_election_vote_base_under"
        }, {
            src: "images/bg_cool.jpg",
            id: "cinderella_election_vote_bg_cool"
        }, {
            src: "images/bg_cute.jpg",
            id: "cinderella_election_vote_bg_cute"
        }, {
            src: "images/bg_passion.jpg",
            id: "cinderella_election_vote_bg_passion"
        }, {
            src: "images/heart_s_64.png",
            id: "cinderella_election_vote_heart_s_64"
        }, {
            src: "images/kirakira.png",
            id: "cinderella_election_vote_kirakira"
        }, {
            src: "images/logo.png",
            id: "cinderella_election_vote_logo"
        }, {
            src: "images/replace_target_card_quest.png",
            id: "cinderella_election_vote_replace_target_card_quest"
        }, {
            src: "images/text_window.png",
            id: "cinderella_election_vote_text_window"
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

}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
