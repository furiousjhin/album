(function(a, f) {
    var c, b = {}, g = {}, l = {};
    b.ssMetadata = [{
        name: "petit_balloon_atlas_",
        frames: [[611, 210, 72, 140], [642, 0, 72, 140], [611, 352, 72, 80], [733, 122, 72, 60], [685, 264, 72, 60], [685, 142, 46, 120], [716, 0, 46, 120], [733, 184, 46, 60], [764, 0, 46, 40], [764, 42, 46, 40], [0, 210, 609, 197], [0, 0, 640, 208]]
    }];
    (b.large_long = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(0)
    }
    ).prototype = c = new a.Sprite;
    (b.large_mc = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(1)
    }
    ).prototype = c = new a.Sprite;
    (b.large_middle = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(2)
    }
    ).prototype = c = new a.Sprite;
    (b.large_short = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(3)
    }
    ).prototype = c = new a.Sprite;
    (b.large_short_ = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(4)
    }
    ).prototype = c = new a.Sprite;
    (b.normal_long = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(5)
    }
    ).prototype = c = new a.Sprite;
    (b.normal_mc = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(6)
    }
    ).prototype = c = new a.Sprite;
    (b.normal_middle = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(7)
    }
    ).prototype = c = new a.Sprite;
    (b.normal_short = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(8)
    }
    ).prototype = c = new a.Sprite;
    (b.normal_short_ = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(9)
    }
    ).prototype = c = new a.Sprite;
    (b.petit_balloon4 = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(10)
    }
    ).prototype = c = new a.Sprite;
    (b.petit_balloon4_2resize = function() {
        this.initialize(g.petit_balloon_atlas_);
        this.gotoAndStop(11)
    }
    ).prototype = c = new a.Sprite;
    (b.marker2 = function(d, e, h) {
        this.initialize(d, e, h, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AhTAcIgTg3IDNAAIgbA3g");
        this.shape.setTransform(-.7, -2.375);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AhfAcIgWg3IDrAAIgfA3g");
        this.shape_1.setTransform(.35, -.575);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AhmAcIATg3ICfAAIAbA3g");
        this.shape_2.setTransform(.3, 1.575);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape,
                p: {
                    y: -2.375
                }
            }]
        }).to({
            state: [{
                t: this.shape,
                p: {
                    y: -.575
                }
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: []
        }, 1).wait(5));
        this.instance = new b.normal_short;
        this.instance.parent = this;
        this.instance.setTransform(-24, 0);
        this.instance_1 = new b.normal_middle;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-24, 0);
        this.instance_2 = new b.normal_long;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-23, 0);
        this.instance_3 = new b.normal_mc;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-23, 0);
        this.instance_4 = new b.normal_short_;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-23, -40);
        this.instance_5 = new b.large_short;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-37, -21);
        this.instance_6 = new b.large_middle;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-36, -19);
        this.instance_7 = new b.large_long;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-36, -21);
        this.instance_8 = new b.large_mc;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-36, -21);
        this.instance_9 = new b.large_short_;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-37, -41);
        this.timeline.addTween(a.Tween.get({}).to({
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
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).to({
            state: [{
                t: this.instance_4
            }]
        }, 1).to({
            state: [{
                t: this.instance_5
            }]
        }, 1).to({
            state: [{
                t: this.instance_6
            }]
        }, 1).to({
            state: [{
                t: this.instance_7
            }]
        }, 1).to({
            state: [{
                t: this.instance_8
            }]
        }, 1).to({
            state: [{
                t: this.instance_9
            }]
        }, 1).wait(1))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-37,-41,73,161);
    (b.fkds_broad2 = function(d, e, h) {
        this.initialize(d, e, h, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.instance = new b.petit_balloon4;
        this.instance.parent = this;
        this.instance.setTransform(-305, -99);
        this.instance_1 = new b.petit_balloon4_2resize;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-320, -104);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-320,-104,640,208);
    (b.fkds_inner2 = function(d, e, h) {
        this.initialize(d, e, h, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.cursor8 = new b.marker2;
        this.cursor8.name = "cursor8";
        this.cursor8.parent = this;
        this.cursor8.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor8).wait(3));
        this.cursor7 = new b.marker2;
        this.cursor7.name = "cursor7";
        this.cursor7.parent = this;
        this.cursor7.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor7).wait(3));
        this.cursor6 = new b.marker2;
        this.cursor6.name = "cursor6";
        this.cursor6.parent = this;
        this.cursor6.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor6).wait(3));
        this.cursor5 = new b.marker2;
        this.cursor5.name = "cursor5";
        this.cursor5.parent = this;
        this.cursor5.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor5).wait(3));
        this.cursor4 = new b.marker2;
        this.cursor4.name = "cursor4";
        this.cursor4.parent = this;
        this.cursor4.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor4).wait(3));
        this.cursor3 = new b.marker2;
        this.cursor3.name = "cursor3";
        this.cursor3.parent = this;
        this.cursor3.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor3).wait(3));
        this.cursor2 = new b.marker2;
        this.cursor2.name = "cursor2";
        this.cursor2.parent = this;
        this.cursor2.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor2).wait(3));
        this.cursor1 = new b.marker2;
        this.cursor1.name = "cursor1";
        this.cursor1.parent = this;
        this.cursor1.setTransform(-230, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor1).wait(3));
        this.cursor0 = new b.marker2;
        this.cursor0.name = "cursor0";
        this.cursor0.parent = this;
        this.cursor0.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, .4);
        this.timeline.addTween(a.Tween.get(this.cursor0).wait(3));
        this.base = new b.fkds_broad2;
        this.base.name = "base";
        this.base.parent = this;
        this.base.setTransform(0, -14);
        this.timeline.addTween(a.Tween.get(this.base).wait(3))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-320,-514.9,1306,840);
    (b.mc_fkds_set = function(d, e, h) {
        this.initialize(d, e, h, {
            start: 1,
            stay: 7,
            start_up: 12
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_6 = function() {
            this.stop();
            this.parent.callback_set()
        }
        ;
        this.frame_10 = function() {
            this.stop()
        }
        ;
        this.frame_17 = function() {
            this.stop();
            this.parent.callback_set()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(4).call(this.frame_10).wait(7).call(this.frame_17).wait(4));
        this.core = new b.fkds_inner2;
        this.core.name = "core";
        this.core.parent = this;
        this.timeline.addTween(a.Tween.get(this.core).wait(1).to({
            scaleX: .5,
            scaleY: .2,
            y: 56
        }, 0).to({
            scaleX: 1.02,
            scaleY: 1.02,
            y: -2
        }, 3, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 2).wait(6).to({
            scaleX: .5,
            scaleY: .2,
            y: -56
        }, 0).to({
            scaleX: 1.02,
            scaleY: 1.02,
            y: 2
        }, 3, a.Ease.get(-1)).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 2).wait(4))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-311.1,-117.2,1316.8000000000002,239.60000000000002);
    (b.cjs005_balloon = function(d, e, h) {
        this.initialize(d, e, h, {});
        this.frame_0 = function() {
            this.stop();
            this.visible = !1;
            this.param = {};
            this.param.chara_num = 1;
            this.param.mode = 1;
            this.param.speak_type = 1;
            this.param.position1_talk = 0;
            this.param.position2_talk = 0;
            this.param.position3_talk = 0;
            this.param.position4_talk = 0;
            this.param.position5_talk = 0;
            this.param.position0_talk = 0;
            this.param.position6_talk = 0;
            this.param.position7_talk = 0;
            this.speak_foward = this.speak_type_num = this.param.position8_talk = 0;
            this.param.motion_finish_callback = function() {}
            ;
            this.init = function(k) {
                this.param = k;
                this.visible = !1;
                this.mc.core.cursor0.y = 78;
                this.mc.core.cursor1.y = 78;
                this.mc.core.cursor2.y = 78;
                this.mc.core.cursor3.y = 78;
                this.mc.core.cursor4.y = 78;
                this.mc.core.cursor5.y = 78;
                this.mc.core.cursor6.y = -78;
                this.mc.core.cursor7.y = -78;
                this.mc.core.cursor8.y = -78;
                if (1 == this.param.mode)
                    switch (this.gotoAndStop(1),
                    this.param.chara_num) {
                    case 1:
                        this.mc.core.cursor0.x = -171;
                        this.mc.core.cursor1.x = 171;
                        this.mc.core.cursor1.x = -1;
                        break;
                    case 2:
                        this.mc.core.cursor0.x = -161;
                        this.mc.core.cursor1.x = 12;
                        this.mc.core.cursor2.x = 192;
                        break;
                    case 3:
                        this.mc.core.cursor0.x = -161;
                        this.mc.core.cursor1.x = -8;
                        this.mc.core.cursor2.x = 212;
                        this.mc.core.cursor3.x = 101;
                        break;
                    case 4:
                        this.mc.core.cursor0.x = -161;
                        this.mc.core.cursor1.x = -38;
                        this.mc.core.cursor2.x = 132;
                        this.mc.core.cursor3.x = 31;
                        this.mc.core.cursor4.x = 201;
                        break;
                    case 5:
                        this.mc.core.cursor0.x = -171,
                        this.mc.core.cursor1.x = -78,
                        this.mc.core.cursor2.x = 82,
                        this.mc.core.cursor3.x = 232,
                        this.mc.core.cursor4.x = -1,
                        this.mc.core.cursor5.x = 165
                    }
                else
                    2 == this.param.mode && (this.gotoAndStop(2),
                    this.mc.core.cursor0.x = -230,
                    this.mc.core.cursor1.x = -70,
                    this.mc.core.cursor2.x = 85,
                    this.mc.core.cursor3.x = 238,
                    this.mc.core.cursor6.x = 0,
                    this.mc.core.cursor7.x = -120,
                    this.mc.core.cursor8.x = 120)
            }
            ;
            this.type_change = function() {
                for (var k = this.temp_foward = 0; 9 > k; k++)
                    1 == this.param["position" + k + "_talk"] ? (this.mc.core["cursor" + k].visible = !0,
                    6 <= k && (this.temp_foward = 1)) : this.mc.core["cursor" + k].visible = !1;
                2 == this.param.speak_type ? (this.speak_type_num = 5,
                this.mc.core.base.gotoAndStop(1)) : (this.speak_type_num = 0,
                this.mc.core.base.gotoAndStop(0));
                if (1 == this.param.mode)
                    switch (this.param.chara_num) {
                    case 1:
                        this.mc.core.cursor0.gotoAndStop(1 + this.speak_type_num);
                        this.mc.core.cursor1.gotoAndStop(1 + this.speak_type_num);
                        break;
                    case 2:
                        this.mc.core.cursor0.gotoAndStop(3 + this.speak_type_num);
                        this.mc.core.cursor1.gotoAndStop(1 + this.speak_type_num);
                        this.mc.core.cursor2.gotoAndStop(1 + this.speak_type_num);
                        break;
                    case 3:
                        this.mc.core.cursor0.gotoAndStop(3 + this.speak_type_num);
                        this.mc.core.cursor1.gotoAndStop(2 + this.speak_type_num);
                        this.mc.core.cursor2.gotoAndStop(2 + this.speak_type_num);
                        this.mc.core.cursor3.gotoAndStop(0 + this.speak_type_num);
                        break;
                    case 4:
                        this.mc.core.cursor0.gotoAndStop(3 + this.speak_type_num);
                        this.mc.core.cursor1.gotoAndStop(2 + this.speak_type_num);
                        this.mc.core.cursor2.gotoAndStop(2 + this.speak_type_num);
                        this.mc.core.cursor3.gotoAndStop(0 + this.speak_type_num);
                        this.mc.core.cursor4.gotoAndStop(0 + this.speak_type_num);
                        break;
                    case 5:
                        this.mc.core.cursor0.gotoAndStop(3 + this.speak_type_num),
                        this.mc.core.cursor1.gotoAndStop(2 + this.speak_type_num),
                        this.mc.core.cursor2.gotoAndStop(2 + this.speak_type_num),
                        this.mc.core.cursor3.gotoAndStop(2 + this.speak_type_num),
                        this.mc.core.cursor4.gotoAndStop(0 + this.speak_type_num),
                        this.mc.core.cursor5.gotoAndStop(0 + this.speak_type_num)
                    }
                else
                    2 == this.param.mode && (this.mc.core.cursor0.gotoAndStop(0 + this.speak_type_num),
                    this.mc.core.cursor1.gotoAndStop(0 + this.speak_type_num),
                    this.mc.core.cursor2.gotoAndStop(0 + this.speak_type_num),
                    this.mc.core.cursor3.gotoAndStop(0 + this.speak_type_num),
                    this.mc.core.cursor6.gotoAndStop(4 + this.speak_type_num),
                    this.mc.core.cursor7.gotoAndStop(4 + this.speak_type_num),
                    this.mc.core.cursor8.gotoAndStop(4 + this.speak_type_num));
                return this.temp_foward
            }
            ;
            this.run_talk = function(k) {
                this.param = k;
                this.visible = !0;
                this.speak_foward = 0;
                this.speak_foward = this.type_change();
                1 == this.speak_foward ? this.mc.gotoAndPlay("start_up") : this.mc.gotoAndPlay("start")
            }
            ;
            this.finish_talk = function() {
                this.mc.gotoAndPlay("stay")
            }
            ;
            this.callback_set = function() {
                this.param.motion_finish_callback()
            }
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(4));
        this.mc = new b.mc_fkds_set;
        this.mc.name = "mc";
        this.mc.parent = this;
        this.mc.setTransform(672, 0);
        this.timeline.addTween(a.Tween.get(this.mc).wait(1).to({
            x: 0
        }, 0).wait(1).to({
            y: 399
        }, 0).wait(2))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-305,-113,1963,630);
    (b.petit_balloon = function(d, e, h) {
        this.initialize(d, e, h, {});
        this.frame_0 = function() {
            this.cjs005_balloon.stop()
        }
        ;
        this.frame_1 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15));
        this.cjs005_balloon = new b.cjs005_balloon;
        this.cjs005_balloon.name = "cjs005_balloon";
        this.cjs005_balloon.parent = this;
        this.cjs005_balloon.setTransform(320, 74.5, 1, 1, 0, 0, 0, 0, -55.5);
        this.timeline.addTween(a.Tween.get(this.cjs005_balloon).wait(16))
    }
    ).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(320,420,1658,420);
    b.properties = {
        id: "petit_balloon",
        width: 640,
        height: 840,
        fps: 18,
        color: "#FFFFFF",
        opacity: 1,
        manifest: [{
            src: "images/petit_balloon_atlas_.png?1644303177202",
            id: "petit_balloon_petit_balloon_atlas_"
        }],
        preloads: []
    };
    (b.Stage = function(d) {
        createjs.Stage.call(this, d)
    }
    ).prototype = c = new createjs.Stage;
    c.setAutoPlay = function(d) {
        this.tickEnabled = d
    }
    ;
    c.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ;
    c.stop = function(d) {
        d && this.seek(d);
        this.tickEnabled = !1
    }
    ;
    c.seek = function(d) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(b.properties.fps * d / 1E3)
    }
    ;
    c.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    }
    ;
    c.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    }
    ;
    f.bootcompsLoaded = f.bootcompsLoaded || [];
    f.bootstrapListeners || (f.bootstrapListeners = []);
    f.bootstrapCallback = function(d) {
        f.bootstrapListeners.push(d);
        if (0 < f.bootcompsLoaded.length)
            for (var e = 0; e < f.bootcompsLoaded.length; ++e)
                d(f.bootcompsLoaded[e])
    }
    ;
    f.compositions = f.compositions || {};
    f.compositions.petit_balloon = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return g
        },
        getImages: function() {
            return l
        }
    };
    f.compositionLoaded = function(d) {
        f.bootcompsLoaded.push(d);
        for (var e = 0; e < f.bootstrapListeners.length; e++)
            f.bootstrapListeners[e](d)
    }
    ;
    f.getComposition = function(d) {
        return f.compositions[d]
    }
}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
