(function(b, h) {
    function C() {
        var c = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }
    function g(c, d, e) {
        c = b.extend(c, b.MovieClip);
        c.clone = C;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, a = {}, D = {}, m = {};
    a.ssMetadata = [];
    (a.fp_hanabira = function() {
        this.initialize(m.event_item_present_date_pex_fp_hanabira)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,24,22);
    (a.heart_big = function() {
        this.initialize(m.event_item_present_date_pex_heart_big)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,240,204);
    (a.replace_character1_1 = function() {
        this.initialize(m.event_item_present_date_pex_replace_character1_1)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,480,536);
    (a.replace_character1_2 = function() {
        this.initialize(m.event_item_present_date_pex_replace_character1_2)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,480,536);
    (a.replace_item = function() {
        this.initialize(m.event_item_present_date_pex_replace_item)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,240,240);
    (a.replace_name = function() {
        this.initialize(m.event_item_present_date_pex_replace_name)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,150,46);
    (a.sp_kirakira = function() {
        this.initialize(m.event_item_present_date_pex_sp_kirakira)
    }
    ).prototype = f = new b.Bitmap;
    f.nominalBounds = new b.Rectangle(0,0,40,40);
    (a.character2_face_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new a.replace_character1_2;
        this.instance.parent = this;
        this.instance.setTransform(80, 102, .4999, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.character2_face_container, new b.Rectangle(80,102,240,268), null);
    (a.character1_face_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.instance = new a.replace_character1_1;
        this.instance.parent = this;
        this.instance.setTransform(80, 102, .4999, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.character1_face_container, new b.Rectangle(80,102,240,268), null);
    (a.\u30b7\u30f3\u30dc\u30eb153 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGgBQgFABgEgFg");
        this.shape.setTransform(1.675, 1.65);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = f = new b.MovieClip;
    (a.sound_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        }
        ;
        this.frame_1 = function() {
            window.se_play("se_137");
            this.gotoAndStop(0)
        }
        ;
        this.frame_2 = function() {
            window.se_play("se_139");
            this.gotoAndStop(0)
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFCC").s().p("AhFBGIAAiLICLAAIAACLg");
        this.shape.setTransform(7, 7);
        this.timeline.addTween(b.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(2))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(0,0,14,14);
    (a.replace_item_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.replace_item;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .2916, .2917);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.replace_item_1, new b.Rectangle(0,0,70,70), null);
    (a.overlay_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("AyvUAMAAAgn/MAlfAAAMAAAAn/g");
        this.shape.setTransform(120, 128);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.overlay_black, new b.Rectangle(0,0,240,256), null);
    (a.marker = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#CC0000").s().p("AkkAAIEkkkIElEkIklElg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.marker, new b.Rectangle(-29.3,-29.3,58.7,58.7), null);
    (a._\u30cf\u30fc\u30c8240 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.heart_big;
        this.instance.parent = this;
        this.instance.setTransform(-24, -41, .2, .2);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a._\u30cf\u30fc\u30c8240, new b.Rectangle(-24,-41,48,40.8), null);
    (a._\u30cf\u30fc\u30c8 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.heart_big;
        this.instance.parent = this;
        this.instance.setTransform(-60, -51, .5, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a._\u30cf\u30fc\u30c8, new b.Rectangle(-60,-51,120,102), null);
    (a._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.663)").s().p("Ag3BXQgFgCgDgFQgHgJgCgLQgTgIgIglIAAAAQgGgcAVgSQAOgOAjgHIAFAAQAnACA4gkQAGgEAJACQAMACAEAOQASBFgsAvQgjAphQAEIgCAAQgEAAgEgCgAghgqQgfAGgOAMQgQAPAFAWQAHAjASAEQACAMAHALIAEADIAFABQBLgDAhgmQAogrgQhBQgCgIgGgBQgEgBgDADQg8AmgqgDIAAAAIgCAAg");
        this.shape.setTransform(-.4522, .0056);
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.329)").s().p("Ag7BgQgHgDgEgHQgGgIgDgJQgUgLgIgpQgHghAYgWQAQgRAngGIAHgBQAlABA0ghQAJgFAKABQALABAHAHQAIAHABAKQAMBRgoArQglAshWAFIgBAAQgHAAgHgEgAgig0QgiAHgPAOQgUATAGAbIAAAAQAHAlATAJQADAKAGAKQADAEAFADQAFACAFAAQBQgFAjgpQAsgvgShFQgEgOgMgCQgJgBgFADQg5AkgngCIgBAAIgEAAg");
        this.shape_1.setTransform(-.5846, -.0065);
        this.shape_2 = new b.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AgzBPIgDgEQgIgLgBgMQgSgEgIgjQgEgWAQgOQANgNAfgGIADAAQApADA8gmQADgCAEABQAGAAACAIQAQBBgnArQghAmhMAEIAAAAIgFgBg");
        this.shape_2.setTransform(-.4869, -.0144);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }
    ).prototype = g(a._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc, new b.Rectangle(-11.5,-9.9,21.9,19.9), null);
    (a._\u82b1\u3073\u30891_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.fp_hanabira;
        this.instance.parent = this;
        this.instance.setTransform(-12, -11);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a._\u82b1\u3073\u30891_1, new b.Rectangle(-12,-11,24,22), null);
    (a.squear = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.squear, new b.Rectangle(0,0,1.5,1.5), null);
    (a.replace_name_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.replace_name;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.replace_name_1, new b.Rectangle(0,0,75,23), null);
    (a._window_shadow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJGpQgmAAgUgRQARAHAZAAMAiNAAAQBOAAAChLIAAAEQAABRhRAAgAl8lxQgTgmgJgRIAFAGQAJAMAaA2QALAVALAQQgTgVgPghg");
        this.shape.setTransform(118.95, 49.975);
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEG0Qg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoKQAAgOgDgPIgDgQQAIAVAAAYIAAIKQAABWhWAAgAlJkpIAAAAQgRgUgPgeQgag4gJgLQgGgIgHgGIgGgHQAKAHALANQAIAKAcA5QAUAoAVAUg");
        this.shape_1.setTransform(118.45, 49.425);
        this.shape_2 = new b.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGGvQguAAgUgZIAHAFQAVASAmAAMAh7AAAQBSAAgBhRIAAgFIAAoiQADAPAAAOIAAIKQAABThUAAgAlYk4QgLgPgKgWQgbg2gIgMIgGgGIgFgJQAHAGAFAIQAJAKAbA4QAPAeAQAVIgMgNg");
        this.shape_2.setTransform(118.7, 49.65);
        this.shape_3 = new b.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAG9QhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoKQAAgjgOgXQgDgGgFgGQAZAYAAAuIAAIKQAABbhbAAgAkskVIgIgGQgXgUgVgqQgag3gKgNQgOgRgPgIIgHgGQAVAJARAVQAJALAbA4QAUApAXAVQAKAHALAHg");
        this.shape_3.setTransform(118.05, 49.025);
        this.shape_4 = new b.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCG5Qg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoKQAAgXgIgVIgEgOQAOAYAAAiIAAIKQAABZhYAAgAk7keQgVgUgUgoQgcg5gIgKQgLgNgKgGIgGgIQAPAJAOARQAKAMAaA3QAVAqAXAUIAIAGg");
        this.shape_4.setTransform(118.25, 49.175);
        this.shape_5 = new b.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+HBQhRAAgLhGQACAHADAHQARA1BGAAMAh7AAAQBbAAAAhbIAAoKQABgtgZgZQgFgHgHgEQAnAWAAA7IAAIKQAABeheAAgAkckOQgMgGgJgIQgXgUgUgpQgbg4gJgMQgRgVgWgIIgJgGQAcAGAWAcQAIALAcA5QATApAYATQAQAPAYAGIgVgFg");
        this.shape_5.setTransform(117.9, 48.875);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.shape_5
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1))
    }
    ).prototype = g(a._window_shadow, new b.Rectangle(0,4,235.8,89.8), null);
    (a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
        this.shape.setTransform(.575, -.225);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f().s("#6600FF").ss(1, 1, 1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
        this.shape_1.setTransform(71.375, -89.3);
        this.timeline.addTween(b.Tween.get(this.shape_1).wait(1))
    }
    ).prototype = g(a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp, new b.Rectangle(-5.2,-179.6,149,185.2), null);
    (a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new b.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-6.4,-5.7,12.4,12.5);
    (a.\u30c6\u30ad\u30b9\u30c8\u30a6\u30a4\u30f3\u30c9\u30a6\u4e0b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AvsEiQhfAAAAhjIAAl9QAAhjBfAAIfaAAQBeAAAABjIAAF9QAABjheAAg");
        this.shape.setTransform(0, 7.75);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.\u30c6\u30ad\u30b9\u30c8\u30a6\u30a4\u30f3\u30c9\u30a6\u4e0b, new b.Rectangle(-110,-21.2,220,58), null);
    (a.\u30b7\u30f3\u30dc\u30eb5000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("#FF62FF").s().p("AhIBJIAAiRICRAAIAACRg");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.\u30b7\u30f3\u30dc\u30eb5000, new b.Rectangle(-7.3,-7.3,14.6,14.6), null);
    (a.\u30b7\u30f3\u30dc\u30eb100 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.\u30b7\u30f3\u30dc\u30eb100, new b.Rectangle(-148.1,-2.9,296.29999999999995,5.9), null);
    (a.icon_sd_light = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Aj7FeQhiAAAAhjIAAn2QAAhiBiAAIH2AAQBjAAAABiIAAH2QAABjhjAAg");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.icon_sd_light, new b.Rectangle(-35,-35,70,70), null);
    (a.icon_sd = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("Aj4FbQhiAAAAhiIAAnxQAAhiBiAAIHxAAQBiAAAABiIAAHxQAABihiAAg");
        this.shape.setTransform(.025, .025);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.icon_sd, new b.Rectangle(-34.6,-34.6,69.30000000000001,69.30000000000001), null);
    (a.efc_\u30ab\u30fc\u30c9\u30ad\u30e9\u30ea = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AzeUsIAAg8QSPglUuAlIAAA8gAzeSQIAAlCMAm9AAAIAAFCgAzeLqIAAuuMAm9AAAIAAOugAzem9IAAlCMAm9AAAIAAFCgAzetMIAAg8MAm9AAAIAAA8gAzey3IAAh0MAm9AAAIAAB0g");
        this.shape.setTransform(-.7, 58.9, 1, 1, 0, 0, 0, -3.6, 44.5);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.efc_\u30ab\u30fc\u30c9\u30ad\u30e9\u30ea, new b.Rectangle(-121.8,-118,249.39999999999998,264.9), null);
    (a.efa_\uff77\uff97\uff77\uff97_pp = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = !1
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,0,0.247)").s().p("AyvXcMAAAgu3MAlfAAAMAAAAu3g");
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a.efa_\uff77\uff97\uff77\uff97_pp, new b.Rectangle(-120,-150,240,300), null);
    (a._kirakira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.sp_kirakira;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, .5, .5);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a._kirakira, new b.Rectangle(-10,-10,20,20), null);
    (a._btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1))
    }
    ).prototype = g(a._btn, new b.Rectangle(0,0,240,320), null);
    (a.square2c = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new a.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new a.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new a.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new a.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new a.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new a.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new a.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new a.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
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
        }).wait(1))
    }
    ).prototype = g(a.square2c, new b.Rectangle(0,0,1.5,21.5), null);
    (a.square2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new a.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 25.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new a.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 23.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new a.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new a.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new a.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new a.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new a.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new a.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_9 = new a.squear;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_10 = new a.squear;
        this.instance_10.parent = this;
        this.instance_10.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_11 = new a.squear;
        this.instance_11.parent = this;
        this.instance_11.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
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
        }).wait(1))
    }
    ).prototype = g(a.square2, new b.Rectangle(0,0,1.5,26.5), null);
    (a._window22 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new a.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new a.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new a.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new a.square2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(108.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new a.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(81.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new a.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.95, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new a.square2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.45, 28.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_8 = new a.square2c;
        this.instance_8.parent = this;
        this.instance_8.setTransform(5.95, 21, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new a.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 21, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new a.square2c;
        this.instance_10.parent = this;
        this.instance_10.setTransform(11.25, 21, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
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
        this.shape = new b.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AxGG5QhQAAAAhQIAArRQAAhQBQAAIJ+AAQAkAAAYAeQAIALAbA4QAWAuAYAUQAkAeA5gBIUlAAQBQAAAABQIAAIRQAABQhQAAg");
        this.shape.setTransform(117.5, 48.125);
        this.timeline.addTween(b.Tween.get(this.shape).wait(1));
        this.instance_11 = new a._window_shadow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(118.35, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(b.Tween.get(this.instance_11).wait(1))
    }
    ).prototype = g(a._window22, new b.Rectangle(0,4,236.3,90.5), null);
    (a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u30482___ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.c = new a.character2_face_container;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-82, -95);
        this.timeline.addTween(b.Tween.get(this.c).wait(1))
    }
    ).prototype = g(a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u30482___, new b.Rectangle(-2,0,242,320), null);
    (a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.c = new a.character1_face_container;
        this.c.name = "c";
        this.c.parent = this;
        this.c.setTransform(-82, -95);
        this.timeline.addTween(b.Tween.get(this.c).wait(1))
    }
    ).prototype = g(a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___, new b.Rectangle(-2,0,242,320), null);
    (a.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.replace_name = new a.replace_name_1;
        this.replace_name.name = "replace_name";
        this.replace_name.parent = this;
        this.replace_name.setTransform(37.5, 15.5, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(b.Tween.get(this.replace_name).wait(1));
        this.instance = new a._window22;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___, new b.Rectangle(0,-2,236.3,96.5), null);
    (a._icons = function(c, d, e) {
        this.initialize(c, d, e, {});
        c = new b.Shape;
        c._off = !0;
        c.graphics.p("AkNFeQhQAAAAhQIAAobQAAhQBQAAIIbAAQBQAAAABQIAAIbQAABQhQAAg");
        c.setTransform(35, 35);
        this.replace_item = new a.replace_item_1;
        this.replace_item.name = "replace_item";
        this.replace_item.parent = this;
        this.replace_item.setTransform(35, 35, 1, 1, 0, 0, 0, 35, 35);
        d = [this.replace_item];
        for (e = 0; e < d.length; e++)
            d[e].mask = c;
        this.timeline.addTween(b.Tween.get(this.replace_item).wait(1))
    }
    ).prototype = g(a._icons, new b.Rectangle(-35,-35,105,105), null);
    (a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(30));
        this.instance_1 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(41.85, -17.85, .7674, .7674);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 66.9,
            y: -79.8,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 71.85,
            y: -100.95,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 74.35,
            y: -110.15,
            alpha: .5889
        }, 0).wait(1).to({
            scaleX: .4484,
            scaleY: .4484,
            rotation: -61.9876,
            x: 76.1,
            y: -116.2,
            alpha: .5538
        }, 0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 77.6,
            y: -120.95,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 78.8,
            y: -124.55,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 79.75,
            y: -127.35,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 80.6,
            y: -129.6,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 81.3,
            y: -131.25,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.75,
            y: -132.4,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82.05,
            y: -133.2,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.65,
            alpha: .4616
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 0,
            x: 82.45,
            y: -134,
            alpha: .4609
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2,-178.7,148.5,184.7);
    (a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(3 * Math.random()) + 1)
        }
        ;
        this.frame_21 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_pp;
        this.instance.parent = this;
        this.instance.setTransform(0, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(36));
        this.instance_1 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb_p;
        this.instance_1.parent = this;
        this.instance_1.setTransform(40.95, -17, .7347, .7347);
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 66.1,
            y: -77.15,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 71.8,
            y: -101.4,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 75.3,
            y: -113.55,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 78.2,
            y: -122.3,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 80.9,
            y: -129.65,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 83.5,
            y: -135.95,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 86.05,
            y: -141.05,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 88.15,
            y: -144.95,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 90.15,
            y: -148.3,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 91.95,
            y: -151.05,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 93.6,
            y: -153.35,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 94.95,
            y: -155.3,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 96.2,
            y: -156.8,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 97.25,
            y: -158.05,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 98.05,
            y: -159,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 98.7,
            y: -159.65,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.15,
            y: -160.15,
            alpha: .5717
        }, 0).wait(1).to({
            scaleX: .3823,
            scaleY: .3823,
            rotation: 359.7175,
            x: 99.4,
            y: -160.4,
            alpha: .5706
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            scaleX: .382,
            scaleY: .382,
            rotation: 360,
            x: 99.8,
            y: -160.55,
            alpha: .5703
        }, 0).to({
            _off: !0
        }, 1).wait(16))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-5.2,-178.7,148.5,184.7);
    (a.\u30cf\u30fc\u30c8\u52d5\u304d\u8fbc\u307f = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_11 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).wait(11).call(this.frame_11).wait(1));
        this.instance = new a._\u30cf\u30fc\u30c8240;
        this.instance.parent = this;
        this.instance.setTransform(0, 1.75, .2504, .7077);
        this.timeline.addTween(b.Tween.get(this.instance).to({
            scaleX: 1,
            scaleY: 1.8444,
            y: 4.5
        }, 1, b.Ease.get(1)).to({
            scaleY: 1,
            y: -37.95
        }, 2, b.Ease.get(1)).to({
            y: -43.75
        }, 5, b.Ease.get(1)).to({
            y: -44.4,
            alpha: .3594
        }, 1).to({
            _off: !0
        }, 1).wait(2))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-24,-85.4,48,89.60000000000001);
    (a.\u30b7\u30f3\u30dc\u30eb4000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(40 * Math.random()) + 1)
        }
        ;
        this.frame_58 = function() {
            this.gotoAndPlay(1)
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));
        this.instance = new a._\u82b1\u3073\u30891_1;
        this.instance.parent = this;
        this.instance.setTransform(-1, -.3, 1, 1, -53.9686);
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: 39.7252,
            x: -.9155,
            y: 5.8655
        }, 0).wait(1).to({
            scaleX: .9998,
            rotation: 51.913,
            x: -1.591,
            y: 17.7944
        }, 0).wait(1).to({
            scaleY: .9998,
            rotation: 68.1774,
            x: -4.178,
            y: 32.4567
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 87.8993,
            x: -9.9359,
            y: 48.8766
        }, 0).wait(1).to({
            scaleX: .9996,
            scaleY: .9995,
            rotation: 109.8504,
            x: -19.982,
            y: 65.6581
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 131.6234,
            x: -34.3759,
            y: 80.9461
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 150.7176,
            x: -51.2095,
            y: 93.0807
        }, 0).wait(1).to({
            scaleY: .9992,
            rotation: 165.701,
            x: -67.1628,
            y: 101.4453
        }, 0).wait(1).to({
            scaleX: .9992,
            rotation: 15.0346,
            x: -76.45,
            y: 105.35
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -133.0049,
            x: -74.6,
            y: 117.95
        }, 0).wait(1).to({
            skewX: 45.0775,
            skewY: -134.9227,
            x: -73.4758,
            y: 122.4738
        }, 0).wait(1).to({
            skewX: 40.7786,
            skewY: -139.2215,
            x: -70.7949,
            y: 131.8075
        }, 0).wait(1).to({
            skewX: 35.1625,
            skewY: -144.8377,
            x: -66.5788,
            y: 143.5308
        }, 0).wait(1).to({
            skewX: 28.7159,
            skewY: -151.2842,
            x: -60.3987,
            y: 156.8658
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 21.7194,
            skewY: -158.2807,
            x: -51.763,
            y: 171.044
        }, 0).wait(1).to({
            skewX: 14.3621,
            skewY: -165.638,
            x: -40.1507,
            y: 185.2909
        }, 0).wait(1).to({
            skewX: 6.7903,
            skewY: -173.2097,
            x: -25.3215,
            y: 198.6214
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -.8645,
            skewY: -180.8646,
            x: -7.6655,
            y: 210.0087
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -8.4642,
            skewY: -188.4642,
            x: 11.6655,
            y: 218.7629
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -15.8344,
            skewY: -195.8344,
            x: 31.1193,
            y: 224.807
        }, 0).wait(1).to({
            skewX: -22.7064,
            skewY: -202.7064,
            x: 49.1964,
            y: 228.5541
        }, 0).wait(1).to({
            skewX: -28.5462,
            skewY: -208.5462,
            x: 64.2311,
            y: 230.5734
        }, 0).wait(1).to({
            skewX: -31.6765,
            skewY: -211.6764,
            x: 72.1,
            y: 231.3
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -47.468,
            skewX: 0,
            skewY: -360,
            x: 75.1,
            y: 239.7
        }, 0).wait(1).to({
            rotation: 61.2863,
            x: 73.8023,
            y: 243.9044
        }, 0).wait(1).to({
            rotation: 66.2544,
            x: 70.9938,
            y: 252.3826
        }, 0).wait(1).to({
            rotation: 72.8937,
            x: 67.0616,
            y: 262.8728
        }, 0).wait(1).to({
            rotation: 80.9051,
            x: 61.8722,
            y: 274.8177
        }, 0).wait(1).to({
            rotation: 90.1522,
            x: 55.2654,
            y: 287.6785
        }, 0).wait(1).to({
            rotation: 100.5908,
            x: 47.0232,
            y: 300.9965
        }, 0).wait(1).to({
            rotation: 112.1971,
            x: 36.8879,
            y: 314.3216
        }, 0).wait(1).to({
            rotation: 124.8645,
            x: 24.638,
            y: 327.1218
        }, 0).wait(1).to({
            rotation: 138.2593,
            x: 10.2663,
            y: 338.7284
        }, 0).wait(1).to({
            rotation: 151.7771,
            x: -5.884,
            y: 348.4802
        }, 0).wait(1).to({
            rotation: 164.6088,
            x: -22.9466,
            y: 355.889
        }, 0).wait(1).to({
            rotation: 175.9378,
            x: -39.5514,
            y: 360.8491
        }, 0).wait(1).to({
            rotation: 184.8983,
            x: -53.7334,
            y: 363.6449
        }, 0).wait(1).to({
            rotation: 15.9802,
            x: -61.15,
            y: 364.75
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -493.0049,
            x: -70.3,
            y: 369.75
        }, 0).wait(1).to({
            skewX: 134.3444,
            skewY: -405.6557,
            x: -70.5702,
            y: 374.199
        }, 0).wait(1).to({
            skewX: 125.0094,
            skewY: -414.9907,
            x: -70.1305,
            y: 383.689
        }, 0).wait(1).to({
            skewX: 112.2593,
            skewY: -427.7407,
            x: -68.369,
            y: 396.0601
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 96.7257,
            skewY: -443.2742,
            x: -64.3728,
            y: 410.4445
        }, 0).wait(1).to({
            skewX: 79.0999,
            skewY: -460.8999,
            x: -57.2005,
            y: 426.031
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 60.6403,
            skewY: -479.3595,
            x: -46.2741,
            y: 441.6724
        }, 0).wait(1).to({
            skewX: 42.9229,
            skewY: -497.0768,
            x: -31.9709,
            y: 456.0157
        }, 0).wait(1).to({
            skewX: 27.0151,
            skewY: -512.9846,
            x: -15.6806,
            y: 468.0813
        }, 0).wait(1).to({
            skewX: 13.1954,
            skewY: -526.8042,
            x: .9382,
            y: 477.622
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 1.4332,
            skewY: -538.5663,
            x: 16.5332,
            y: 484.8688
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -7.9622,
            skewY: -547.9617,
            x: 29.6981,
            y: 490.0306
        }, 0).wait(1).to({
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new a.\u30b7\u30f3\u30dc\u30eb5000;
        this.instance_1.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance_1).to({
            _off: !0
        }, 1).wait(58))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-90.9,-16.4,182.2,524.2);
    (a.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            1 == exportRoot.iosFlg ? (this.visible = 0,
            this.gotoAndStop(2)) : this.gotoAndPlay(Math.floor(40 * Math.random()) + 1);
            this.y = -Math.floor(320 * Math.random());
            this.x = Math.floor(360 * Math.random()) - 12
        }
        ;
        this.frame_58 = function() {
            this.gotoAndPlay(0)
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(58).call(this.frame_58).wait(1));
        this.instance = new a._\u82b1\u3073\u30891_1\u306e\u30b3\u30d4\u30fc;
        this.instance.parent = this;
        this.instance.setTransform(-1, -.3, 1, 1, -53.9686);
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: -.6,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 39.7252,
            x: -1.35,
            y: 5.45
        }, 0).wait(1).to({
            scaleX: .9998,
            rotation: 51.913,
            x: -1.9,
            y: 17.3
        }, 0).wait(1).to({
            scaleY: .9998,
            rotation: 68.1774,
            x: -4.35,
            y: 31.9
        }, 0).wait(1).to({
            scaleX: .9997,
            scaleY: .9997,
            rotation: 87.8993,
            x: -9.9,
            y: 48.25
        }, 0).wait(1).to({
            scaleX: .9996,
            scaleY: .9995,
            rotation: 109.8504,
            x: -19.75,
            y: 65.1
        }, 0).wait(1).to({
            scaleX: .9994,
            scaleY: .9994,
            rotation: 131.6234,
            x: -33.95,
            y: 80.45
        }, 0).wait(1).to({
            scaleX: .9993,
            scaleY: .9993,
            rotation: 150.7176,
            x: -50.7,
            y: 92.75
        }, 0).wait(1).to({
            scaleY: .9992,
            rotation: 165.701,
            x: -66.55,
            y: 101.25
        }, 0).wait(1).to({
            regX: 0,
            scaleX: .9992,
            rotation: 15.0346,
            x: -76.45,
            y: 105.35
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -133.0049,
            x: -74.6,
            y: 117.95
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 45.0775,
            skewY: -134.9227,
            x: -73.05,
            y: 122.85
        }, 0).wait(1).to({
            skewX: 40.7786,
            skewY: -139.2215,
            x: -70.3,
            y: 132.15
        }, 0).wait(1).to({
            skewX: 35.1625,
            skewY: -144.8377,
            x: -66.1,
            y: 143.85
        }, 0).wait(1).to({
            skewX: 28.7159,
            skewY: -151.2842,
            x: -59.85,
            y: 157.1
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 21.7194,
            skewY: -158.2807,
            x: -51.2,
            y: 171.2
        }, 0).wait(1).to({
            skewX: 14.3621,
            skewY: -165.638,
            x: -39.6,
            y: 185.4
        }, 0).wait(1).to({
            skewX: 6.7903,
            skewY: -173.2097,
            x: -24.75,
            y: 198.65
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -.8645,
            skewY: -180.8646,
            x: -7.1,
            y: 210
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: -8.4642,
            skewY: -188.4642,
            x: 12.2,
            y: 218.65
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -15.8344,
            skewY: -195.8344,
            x: 31.65,
            y: 224.65
        }, 0).wait(1).to({
            skewX: -22.7064,
            skewY: -202.7064,
            x: 49.65,
            y: 228.35
        }, 0).wait(1).to({
            skewX: -28.5462,
            skewY: -208.5462,
            x: 64.7,
            y: 230.3
        }, 0).wait(1).to({
            regX: 0,
            skewX: -31.6765,
            skewY: -211.6764,
            x: 72.1,
            y: 231.3
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -47.468,
            skewX: 0,
            skewY: -360,
            x: 75.1,
            y: 239.7
        }, 0).wait(1).to({
            regX: -.6,
            rotation: 61.2863,
            x: 73.5,
            y: 243.35
        }, 0).wait(1).to({
            rotation: 66.2544,
            x: 70.7,
            y: 251.8
        }, 0).wait(1).to({
            rotation: 72.8937,
            x: 66.85,
            y: 262.3
        }, 0).wait(1).to({
            rotation: 80.9051,
            x: 61.75,
            y: 274.2
        }, 0).wait(1).to({
            rotation: 90.1522,
            x: 55.25,
            y: 287.05
        }, 0).wait(1).to({
            rotation: 100.5908,
            x: 47.1,
            y: 300.35
        }, 0).wait(1).to({
            rotation: 112.1971,
            x: 37.1,
            y: 313.75
        }, 0).wait(1).to({
            rotation: 124.8645,
            x: 24.95,
            y: 326.6
        }, 0).wait(1).to({
            rotation: 138.2593,
            x: 10.7,
            y: 338.3
        }, 0).wait(1).to({
            rotation: 151.7771,
            x: -5.3,
            y: 348.15
        }, 0).wait(1).to({
            rotation: 164.6088,
            x: -22.3,
            y: 355.7
        }, 0).wait(1).to({
            rotation: 175.9378,
            x: -38.95,
            y: 360.75
        }, 0).wait(1).to({
            rotation: 184.8983,
            x: -53.1,
            y: 363.65
        }, 0).wait(1).to({
            regX: 0,
            rotation: 15.9802,
            x: -61.15,
            y: 364.75
        }, 0).wait(1).to({
            scaleX: .9446,
            scaleY: .9985,
            rotation: 0,
            skewX: 46.9952,
            skewY: -493.0049,
            x: -70.3,
            y: 369.75
        }, 0).wait(1).to({
            regX: -.6,
            skewX: 134.3444,
            skewY: -405.6557,
            x: -70.95,
            y: 374.55
        }, 0).wait(1).to({
            skewX: 125.0094,
            skewY: -414.9907,
            x: -70.45,
            y: 384.1
        }, 0).wait(1).to({
            skewX: 112.2593,
            skewY: -427.7407,
            x: -68.55,
            y: 396.55
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 96.7257,
            skewY: -443.2742,
            x: -64.4,
            y: 410.95
        }, 0).wait(1).to({
            skewX: 79.0999,
            skewY: -460.9,
            x: -57.1,
            y: 426.55
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: 60.6403,
            skewY: -479.3595,
            x: -45.95,
            y: 442.15
        }, 0).wait(1).to({
            skewX: 42.9229,
            skewY: -497.0768,
            x: -31.55,
            y: 456.4
        }, 0).wait(1).to({
            skewX: 27.0151,
            skewY: -512.9845,
            x: -15.15,
            y: 468.3
        }, 0).wait(1).to({
            skewX: 13.1954,
            skewY: -526.8042,
            x: 1.45,
            y: 477.75
        }, 0).wait(1).to({
            scaleX: .9447,
            skewX: 1.4332,
            skewY: -538.5663,
            x: 17.05,
            y: 484.85
        }, 0).wait(1).to({
            scaleX: .9446,
            skewX: -7.9622,
            skewY: -547.9617,
            x: 30.2,
            y: 489.9
        }, 0).wait(1).to({
            regX: 0,
            skewX: -31.5042,
            skewY: -571.5036,
            x: 36.75,
            y: 492.5
        }, 0).to({
            _off: !0
        }, 1).wait(2));
        this.instance_1 = new a.\u30b7\u30f3\u30dc\u30eb5000;
        this.instance_1.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance_1).to({
            _off: !0
        }, 1).wait(58))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-90.2,-14.5,179.7,520.6);
    (a.\u3075\u3088\u3075\u3088\u30cf\u30fc\u30c8 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_14 = function() {
            this.gotoAndPlay(0)
        }
        ;
        this.timeline.addTween(b.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new a._\u30cf\u30fc\u30c8;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .4, .4);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1).to({
            y: .4359
        }, 0).wait(1).to({
            y: 1.6756
        }, 0).wait(1).to({
            y: 3.6812
        }, 0).wait(1).to({
            y: 5.9385
        }, 0).wait(1).to({
            y: 7.7284
        }, 0).wait(1).to({
            y: 8.745
        }, 0).wait(1).to({
            y: 9.05
        }, 0).wait(1).to({
            y: 8.6141
        }, 0).wait(1).to({
            y: 7.3744
        }, 0).wait(1).to({
            y: 5.3688
        }, 0).wait(1).to({
            y: 3.1115
        }, 0).wait(1).to({
            y: 1.3216
        }, 0).wait(1).to({
            y: .305
        }, 0).wait(1).to({
            y: 0
        }, 0).wait(1))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-24,-20.4,48.1,49.9);
    (a.kamif_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.\u30b7\u30f3\u30dc\u30eb153("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(.05, 1.7, 1, 1, 0, 0, 0, 1.7, 1.7);
        this.timeline.addTween(b.Tween.get(this.instance).wait(1))
    }
    ).prototype = g(a.kamif_p, new b.Rectangle(-1.4,.2,2.9,2.9), null);
    (a.kamif = function(c, d, e) {
        this.initialize(c, d, e, {
            r: 44,
            "-": 140
        });
        this.frame_0 = function() {
            this.rotation = this.rotation + 20 * Math.random() - 10;
            this.p.gotoAndPlay(Math.floor(4 * Math.random()))
        }
        ;
        this.frame_140 = function() {
            this.gotoAndPlay("r")
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(140).call(this.frame_140).wait(1));
        this.p = new a.kamif_p;
        this.p.name = "p";
        this.p.parent = this;
        this.p.setTransform(0, -17.45);
        this.timeline.addTween(b.Tween.get(this.p).wait(44).to({
            x: 7.95,
            y: 687.8
        }, 96).wait(1))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-1.4,-17.2,10.9,708.1);
    (a.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(43.45, 31, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(32.95, 25.05, .6032, .6032, 154.5512);
        this.instance_6 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(7, 31.2, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_8 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_9 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_10 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_11 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_12 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-19.15, 29.35, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_13 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_14 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_15 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_16 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-29.4, 10.5, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_17 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_18 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_19 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-9.2, -5.8, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_20 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_20.parent = this;
        this.instance_20.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_21 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_22 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_23 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_23.parent = this;
        this.instance_23.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_24 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_24.parent = this;
        this.instance_24.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_25 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_25.parent = this;
        this.instance_25.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_26 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_27 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_28 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_29 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_29.parent = this;
        this.instance_29.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_30 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(46, 17.7, .8585, .8585, 61.4817);
        this.instance_31 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_31.parent = this;
        this.instance_31.setTransform(44.95, -25.6, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_32 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_33 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_33.parent = this;
        this.instance_33.setTransform(41.2, 5.95, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_34 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_35 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(45.8, -7.4, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_36 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_36.parent = this;
        this.instance_36.setTransform(37.4, -24.15, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_37 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_37.parent = this;
        this.instance_37.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_38 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb1;
        this.instance_38.parent = this;
        this.instance_38.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_39 = new a.\u30d1\u30fc\u30c6\u30a3\u30af\u30eb2;
        this.instance_39.parent = this;
        this.instance_39.setTransform(46.15, -7.2, .5292, .5292, 44.5199);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
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
        }).wait(1))
    }
    ).prototype = g(a.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408, new b.Rectangle(-318.7,-245.4,558.2,474.70000000000005), null);
    (a.efa_\uff77\uff97\uff77\uff97 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(this.currentFrame + Math.floor(7 * Math.random()) + 1)
        }
        ;
        this.timeline.addTween(b.Tween.get(this).wait(8).call(this.frame_8).wait(11));
        this.instance = new a.marker;
        this.instance.parent = this;
        this.timeline.addTween(b.Tween.get(this.instance).to({
            _off: !0
        }, 1).wait(18));
        this.instance_1 = new a.\u30b7\u30f3\u30dc\u30eb100;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-.05, 0, .1255, 1);
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .4367,
            scaleY: .6897
        }, 0).to({
            scaleX: .5,
            scaleY: 1,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(12));
        this.instance_2 = new a._kirakira;
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, .6427, .6427, -44.822);
        this.instance_2.alpha = .4297;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(1).to({
            scaleX: 2.7527,
            scaleY: 2.7527,
            rotation: -11.2055,
            alpha: .8574
        }, 0).wait(1).to({
            scaleX: 3.456,
            scaleY: 3.456,
            rotation: 0,
            alpha: 1
        }, 0).wait(1).to({
            scaleX: 3.4361,
            scaleY: 3.4361,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 3.3801,
            scaleY: 3.3801,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 3.2878,
            scaleY: 3.2878,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 3.1595,
            scaleY: 3.1595,
            rotation: 28.8836,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(11))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-74.1,-42.8,148.2,85.69999999999999);
    (a.chs2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.replace_character2 = new a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u30482___;
        this.replace_character2.name = "replace_character2";
        this.replace_character2.parent = this;
        this.replace_character2.setTransform(0, 16);
        this.timeline.addTween(b.Tween.get(this.replace_character2).wait(1))
    }
    ).prototype = g(a.chs2, new b.Rectangle(-2,23,240,268), null);
    (a.chs = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.replace_character1 = new a.___\u30ad\u30e3\u30e9\u5207\u308a\u66ff\u3048___;
        this.replace_character1.name = "replace_character1";
        this.replace_character1.parent = this;
        this.replace_character1.setTransform(0, 16);
        this.timeline.addTween(b.Tween.get(this.replace_character1).wait(1))
    }
    ).prototype = g(a.chs, new b.Rectangle(-2,23,240,268), null);
    (a.\u30b7\u30f3\u30dc\u30eb12 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.kamif;
        this.instance.parent = this;
        this.instance.setTransform(-7.1, 14.55, 1.37, 1.37);
        this.instance_1 = new a.kamif;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.85, 5.8, 1.37, 1.37);
        this.instance_2 = new a.kamif;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-29.7, 27.35, 1.8096, 1.8096);
        this.instance_3 = new a.kamif;
        this.instance_3.parent = this;
        this.instance_3.setTransform(81.65, 20.85, 1.8096, 1.8096);
        this.instance_4 = new a.kamif;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-91.15, 11.5, 1.61, 1.61);
        this.instance_5 = new a.kamif;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-54.75, 9.3, 1.37, 1.37);
        this.instance_6 = new a.kamif;
        this.instance_6.parent = this;
        this.instance_6.setTransform(95.9, 29.15, 1.61, 1.61);
        this.instance_7 = new a.kamif;
        this.instance_7.parent = this;
        this.instance_7.setTransform(31.75, 31.3, 1.61, 1.61);
        this.instance_8 = new a.kamif;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-75, 21.35);
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
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
        }).wait(1))
    }
    ).prototype = g(a.\u30b7\u30f3\u30dc\u30eb12, new b.Rectangle(-93.5,-17.8,191.8,26), null);
    (a.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_16 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).wait(16).call(this.frame_16).wait(1));
        this.instance = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance.parent = this;
        this.instance.setTransform(-10.2, -33.35, .281, .281);
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(2).to({
            _off: !1
        }, 0).wait(15));
        this.instance_1 = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23.8, 24.85, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(4).to({
            _off: !1
        }, 0).wait(13));
        this.instance_2 = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance_2.parent = this;
        this.instance_2.setTransform(35.3, -15.65, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(6).to({
            _off: !1
        }, 0).wait(11));
        this.instance_3 = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-38.55, -6.85, .281, .281);
        this.instance_3._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_3).wait(9).to({
            _off: !1
        }, 0).wait(8));
        this.instance_4 = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance_4.parent = this;
        this.instance_4.setTransform(20.8, 31.75, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_4).wait(11).to({
            _off: !1
        }, 0).wait(6));
        this.instance_5 = new a.efa_\uff77\uff97\uff77\uff97;
        this.instance_5.parent = this;
        this.instance_5.setTransform(8.25, -5.15, .281, .281);
        this.instance_5._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_5).wait(14).to({
            _off: !1
        }, 0).wait(3));
        this.instance_6 = new a.efa_\uff77\uff97\uff77\uff97_pp;
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, .2916, .2333);
        this.timeline.addTween(b.Tween.get(this.instance_6).wait(17))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-46.8,-41.6,90.4,81.6);
    (a.\u7acb\u3061\u4e0a\u308b\u30d1\u30fc\u30c6\u30a3\u30af\u30eb = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.\u30b7\u30f3\u30dc\u30eb12;
        this.instance.parent = this;
        this.instance.setTransform(162.3, -.3, .5, .5, 0, 180, 0, 0, 13.5);
        this.instance.compositeOperation = "lighter";
        this.instance_1 = new a.\u30b7\u30f3\u30dc\u30eb12;
        this.instance_1.parent = this;
        this.instance_1.setTransform(41.45, 1.65, .5, .5, 0, 180, 0, 0, 13.5);
        this.instance_1.compositeOperation = "lighter";
        this.timeline.addTween(b.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }
    ).prototype = g(a.\u7acb\u3061\u4e0a\u308b\u30d1\u30fc\u30c6\u30a3\u30af\u30eb, new b.Rectangle(-5.2,2.3,216.7,15), null);
    (a.item = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new a.efa_\u30ad\u30e9\u30ad\u30e9\u30dc\u30fc\u30c9\u30ab\u30fc\u30c9\u7528;
        this.instance.parent = this;
        this.instance.setTransform(35, 35);
        this.timeline.addTween(b.Tween.get(this.instance).wait(31));
        c = new b.Shape;
        c._off = !0;
        c.graphics.p("Aj8FhQhjAAgBhlIAAn4QABhjBjgBIH4AAQBlABAABjIAAH4QAABlhlAAg");
        c.setTransform(35, 35);
        this.instance_1 = new a.efc_\u30ab\u30fc\u30c9\u30ad\u30e9\u30ea;
        this.instance_1.parent = this;
        this.instance_1.setTransform(33.15, 113.35, .9408, .6637, 0, 0, -28.1283);
        this.instance_1._off = !0;
        d = [this.instance_1];
        for (e = 0; e < d.length; e++)
            d[e].mask = c;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(5).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 2.9,
            regY: 14.4,
            scaleX: .9404,
            skewY: -28.1118,
            x: 35.55,
            y: 34.8
        }, 0).wait(1).to({
            scaleX: .9401,
            skewY: -28.0983,
            y: -36.15
        }, 0).wait(1).to({
            scaleX: .9398,
            skewY: -28.0878,
            y: -91.35
        }, 0).wait(1).to({
            scaleX: .9396,
            skewY: -28.0802,
            y: -130.8
        }, 0).wait(1).to({
            scaleX: .9395,
            skewY: -28.0757,
            y: -154.45
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            skewY: -28.0742,
            x: 33.15,
            y: -170.6
        }, 0).to({
            _off: !0
        }, 1).wait(19));
        this.instance_2 = new a.icon_sd_light;
        this.instance_2.parent = this;
        this.instance_2.setTransform(35, 35);
        this.instance_2.alpha = 0;
        this.instance_2._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(5).to({
            _off: !1
        }, 0).to({
            alpha: .25,
            compositeOperation: NaN
        }, 3).to({
            alpha: 0
        }, 5).to({
            _off: !0
        }, 1).wait(17));
        this.last_icon = new a._icons;
        this.last_icon.name = "last_icon";
        this.last_icon.parent = this;
        this.timeline.addTween(b.Tween.get(this.last_icon).wait(31));
        this.instance_3 = new a.icon_sd;
        this.instance_3.parent = this;
        this.instance_3.setTransform(40.4, 40.8, 1, 1, 0, 0, 0, .4, -.2);
        this.instance_3.alpha = .6992;
        this.timeline.addTween(b.Tween.get(this.instance_3).wait(31))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-.2,-.2,74.9,75.9);
    (a.event_item_present_date_pex = function(c, d, e) {
        this.initialize(c, d, e, {
            next: 18
        });
        this.frame_0 = function() {
            var k = window.im_cjs;
            this.item_name = k.item_name;
            this.char_name = k.char_name;
            this.extra_mes = k.extra_mes ? k.extra_mes : "";
            this.card_comm1_1 = k.card_comm1_1;
            this.card_comm1_2 = k.card_comm1_2;
            this.card_comm1_3 = k.card_comm1_3;
            this.card_comm1_4 = k.card_comm1_4;
            this.c_jump = function() {
                1 == this.key_flag && (this.key_flag = 0,
                window.cjsIpc("eventItemPresentDateEnd"))
            }
            ;
            this.key_flag = 1;
            this.m = this.char_name + "에게\n" /*\u304b\u3089\n*/+ this.item_name + "를 받았다!\n" /*\u3092\n\u3082\u3089\u3063\u305f!\n*/ + this.extra_mes
        }
        ;
        this.frame_7 = function() {
            this.sound_mc.gotoAndStop(1)
        }
        ;
        this.frame_8 = function() {
            this.m1.text = this.card_comm1_1;
            this.m2.text = this.card_comm1_2;
            this.m3.text = this.card_comm1_3;
            this.m4.text = this.card_comm1_4;
            this.btn.on("click", function() {
                this.gotoAndPlay("next")
            }, this, !0)
        }
        ;
        this.frame_17 = function() {
            this.stop();
            window.cjsIpc("heart_show_end")
        }
        ;
        this.frame_18 = function() {
            this.play();
            this.btn.removeAllEventListeners("click")
        }
        ;
        this.frame_27 = function() {
            this.sound_mc.gotoAndStop(2)
        }
        ;
        this.frame_30 = function() {
            window.cjsIpc("event_item_present_date_pex_end");
            this.btn.on("click", function() {
                this.c_jump()
            }, this, !0)
        }
        ;
        this.frame_33 = function() {
            this.mes.text = this.m
        }
        ;
        this.frame_38 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(b.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1).call(this.frame_8).wait(9).call(this.frame_17).wait(1).call(this.frame_18).wait(9).call(this.frame_27).wait(3).call(this.frame_30).wait(3).call(this.frame_33).wait(5).call(this.frame_38).wait(1));
        this.sound_mc = new a.sound_mc;
        this.sound_mc.name = "sound_mc";
        this.sound_mc.parent = this;
        this.sound_mc.setTransform(192, -16, 1, 1, 0, 0, 0, 7, 7);
        this.timeline.addTween(b.Tween.get(this.sound_mc).wait(39));
        this.shape = new b.Shape;
        this.shape.graphics.f("#000000").s().p("EhBnBH4MAAAiPvMCDPAAAMAAACPvgAysPAMAlfAAAMAAAgn/MglfAAAg");
        this.shape.setTransform(119.7, 160);
        this.timeline.addTween(b.Tween.get(this.shape).wait(39));
        this.m4 = new b.Text("","12px 'Arial'");
        this.m4.name = "m4";
        this.m4.lineHeight = 15;
        this.m4.lineWidth = 260;
        this.m4.parent = this;
        this.m4.setTransform(9, 234.6);
        this.m3 = new b.Text("","12px 'Arial'");
        this.m3.name = "m3";
        this.m3.lineHeight = 15;
        this.m3.lineWidth = 260;
        this.m3.parent = this;
        this.m3.setTransform(9, 220.4);
        this.m2 = new b.Text("","12px 'Arial'");
        this.m2.name = "m2";
        this.m2.lineHeight = 15;
        this.m2.lineWidth = 260;
        this.m2.parent = this;
        this.m2.setTransform(9, 205.6);
        this.m1 = new b.Text("","12px 'Arial'");
        this.m1.name = "m1";
        this.m1.lineHeight = 15;
        this.m1.lineWidth = 260;
        this.m1.parent = this;
        this.m1.setTransform(9, 191.6);
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.m1
            }, {
                t: this.m2
            }, {
                t: this.m3
            }, {
                t: this.m4
            }]
        }, 8).to({
            state: []
        }, 10).wait(21));
        this.instance = new a.efa_\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u96c6\u5408;
        this.instance.parent = this;
        this.instance.setTransform(133.85, 88.3, .9326, .9326, 0, 0, 0, -39.6, -8.1);
        this.instance._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance).wait(30).to({
            _off: !1
        }, 0).wait(9));
        this.instance_1 = new a.\u3075\u3088\u3075\u3088\u30cf\u30fc\u30c8;
        this.instance_1.parent = this;
        this.instance_1.setTransform(174.5, 46.5, 1, 1, 0, 0, 0, .5, .5);
        this.instance_1.alpha = .3281;
        this.instance_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_1).wait(9).to({
            _off: !1
        }, 0).to({
            regY: -.1,
            y: 31.9,
            alpha: 1
        }, 2, b.Ease.get(1)).to({
            _off: !0
        }, 7).wait(21));
        this.instance_2 = new a._\u30cf\u30fc\u30c8;
        this.instance_2.parent = this;
        this.instance_2.setTransform(149.75, 69.8, .4, .7706, 33.6998);
        this.instance_2._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_2).wait(18).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .6265,
            scaleY: .6265,
            rotation: 105.5166,
            x: 119.7,
            y: 84.8
        }, 0).to({
            scaleX: .8017,
            scaleY: .8017,
            rotation: 15.3971,
            guide: {
                path: [119.7, 84.7, 97.4, 87.6, 86.1, 78.4, 75.6, 69.9, 77.4, 54.2, 79.1, 39.3, 90.7, 27.1, 103.1, 14, 120.1, 12.3, 132.6, 11.1, 147.3, 13.4, 166.8, 16.4, 178.4, 24.7, 193.1, 35.4, 192.4, 53.4, 191.7, 74.5, 169.8, 104.8],
                orient: "auto"
            }
        }, 5, b.Ease.get(1)).wait(1).to({
            rotation: 4.4777
        }, 0).to({
            rotation: -8.939
        }, 2, b.Ease.get(1)).to({
            scaleX: .9654,
            scaleY: .9654,
            rotation: 3.2437,
            alpha: .3086
        }, 3, b.Ease.get(-.98)).to({
            _off: !0
        }, 1).wait(8));
        this.instance_3 = new a.\u30cf\u30fc\u30c8\u52d5\u304d\u8fbc\u307f;
        this.instance_3.parent = this;
        this.instance_3.setTransform(46.2, 98.55, .7001, .7001);
        this.instance_3._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_3).wait(7).to({
            _off: !1
        }, 0).wait(32));
        this.instance_4 = new a.\u30cf\u30fc\u30c8\u52d5\u304d\u8fbc\u307f;
        this.instance_4.parent = this;
        this.instance_4.setTransform(195.2, 117.55, .4628, .4628);
        this.instance_4._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_4).wait(8).to({
            _off: !1
        }, 0).wait(31));
        this.instance_5 = new a.\u30cf\u30fc\u30c8\u52d5\u304d\u8fbc\u307f;
        this.instance_5.parent = this;
        this.instance_5.setTransform(89.95, 57.95, .3074, .3074);
        this.instance_5._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_5).wait(9).to({
            _off: !1
        }, 0).wait(30));
        this.instance_6 = new a.\u30b7\u30f3\u30dc\u30eb4\u306e\u30b3\u30d4\u30fc000;
        this.instance_6.parent = this;
        this.instance_6.setTransform(293.15, -55.15, 1.2566, 1.6126);
        this.instance_7 = new a.\u30b7\u30f3\u30dc\u30eb4000;
        this.instance_7.parent = this;
        this.instance_7.setTransform(254.7, -30.85, .5066, .6501);
        this.instance_8 = new a.\u30b7\u30f3\u30dc\u30eb4000;
        this.instance_8.parent = this;
        this.instance_8.setTransform(11.45, -51.55, .4537, .6033, 0, 0, 180);
        this.timeline.addTween(b.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_8
            }, {
                t: this.instance_7
            }, {
                t: this.instance_6
            }]
        }, 7).wait(32));
        this.w2 = new a.___\u4e0b\u90e8\u30a6\u30a4\u30f3\u30c9\u30a6___;
        this.w2.name = "w2";
        this.w2.parent = this;
        this.w2.setTransform(2, 211.7);
        this.w2._off = !0;
        this.timeline.addTween(b.Tween.get(this.w2).wait(6).to({
            _off: !1
        }, 0).wait(1).to({
            y: 170.2
        }, 0).wait(1).to({
            y: 156.35
        }, 0).to({
            y: 158.6
        }, 4, b.Ease.get(1)).wait(7).to({
            alpha: .1016
        }, 3).to({
            _off: !0
        }, 1).wait(16));
        this.mes = new b.Text("","12px 'Arial'");
        this.mes.name = "mes";
        this.mes.lineHeight = 15;
        this.mes.lineWidth = 203;
        this.mes.alpha = .85098039;
        this.mes.parent = this;
        this.mes.setTransform(18.3, 200.9);
        this.mes._off = !0;
        this.timeline.addTween(b.Tween.get(this.mes).wait(33).to({
            _off: !1
        }, 0).wait(6));
        this.instance_9 = new a.\u30c6\u30ad\u30b9\u30c8\u30a6\u30a4\u30f3\u30c9\u30a6\u4e0b;
        this.instance_9.parent = this;
        this.instance_9.setTransform(120, 214.55, 1, .0573, 0, 0, 0, 0, 2.6);
        this.instance_9._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_9).wait(31).to({
            _off: !1
        }, 0).to({
            regY: .1,
            scaleY: 1.0737,
            y: 214.5
        }, 2).to({
            scaleY: 1
        }, 4).wait(2));
        this.item = new a.item;
        this.item.name = "item";
        this.item.parent = this;
        this.item.setTransform(140, 65);
        this.item._off = !0;
        this.timeline.addTween(b.Tween.get(this.item).wait(28).to({
            _off: !1
        }, 0).wait(11));
        this.instance_10 = new a.overlay_black;
        this.instance_10.parent = this;
        this.instance_10.setTransform(120, 128, 1, 1, 0, 0, 0, 120, 128);
        this.timeline.addTween(b.Tween.get(this.instance_10).to({
            alpha: 0
        }, 3).to({
            _off: !0
        }, 1).wait(35));
        this.ch = new a.chs;
        this.ch.name = "ch";
        this.ch.parent = this;
        this.ch.setTransform(0, 5.1, 1, 1, 0, 0, 0, 0, .1);
        this.ch.alpha = 0;
        this.timeline.addTween(b.Tween.get(this.ch).wait(6).to({
            alpha: 1
        }, 0).to({
            regY: -.4,
            y: -19.4
        }, 3, b.Ease.get(1)).to({
            regY: -.3,
            y: -17.3
        }, 1, b.Ease.get(-.83)).to({
            regY: 0,
            y: 3
        }, 3).to({
            regY: -.1,
            y: -6.1
        }, 4, b.Ease.get(1)).to({
            _off: !0
        }, 1).wait(21));
        this.ch_1 = new a.chs2;
        this.ch_1.name = "ch_1";
        this.ch_1.parent = this;
        this.ch_1.setTransform(0, -6.1, 1, 1, 0, 0, 0, 0, -.1);
        this.ch_1._off = !0;
        this.timeline.addTween(b.Tween.get(this.ch_1).wait(18).to({
            _off: !1
        }, 0).wait(2).to({
            regX: 118,
            regY: 157,
            x: 114.4,
            y: 151
        }, 0).wait(1).to({
            x: 100.8
        }, 0).wait(1).to({
            x: 81.25
        }, 0).wait(1).to({
            x: 67.95
        }, 0).wait(1).to({
            x: 61.8
        }, 0).wait(1).to({
            regX: .1,
            regY: -.1,
            x: -57.9,
            y: -6.1
        }, 0).to({
            regX: -.4,
            x: -55.4
        }, 3, b.Ease.get(.6)).wait(11));
        this.instance_11 = new a.\u7acb\u3061\u4e0a\u308b\u30d1\u30fc\u30c6\u30a3\u30af\u30eb;
        this.instance_11.parent = this;
        this.instance_11.setTransform(119.75, 276.15, 1, 1, 0, 0, 0, 107.7, 15.6);
        this.instance_11._off = !0;
        this.timeline.addTween(b.Tween.get(this.instance_11).wait(7).to({
            _off: !1
        }, 0).wait(32));
        this.btn = new a._btn;
        this.btn.name = "btn";
        this.btn.parent = this;
        this.btn.alpha = .0117;
        this.btn._off = !0;
        this.timeline.addTween(b.Tween.get(this.btn).wait(8).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 10).wait(12).to({
            _off: !1
        }, 0).wait(9));
        this.replace_name = new a.replace_name_1;
        this.replace_name.name = "replace_name";
        this.replace_name.parent = this;
        this.replace_name.setTransform(-70, 110.95, 1, 1, 0, 0, 0, 37.5, 11.5);
        this.timeline.addTween(b.Tween.get(this.replace_name).to({
            _off: !0
        }, 1).wait(38))
    }
    ).prototype = f = new b.MovieClip;
    f.nominalBounds = new b.Rectangle(-180.3,-172,720,792);
    a.properties = {
        id: "event_item_present_date_pex",
        width: 240,
        height: 256,
        fps: 12,
        color: "#000000",
        opacity: 0,
        manifest: [{
            src: "images/fp_hanabira.png",
            id: "event_item_present_date_pex_fp_hanabira"
        }, {
            src: "images/heart_big.png",
            id: "event_item_present_date_pex_heart_big"
        }, {
            src: "images/replace_character1_1.png",
            id: "event_item_present_date_pex_replace_character1_1"
        }, {
            src: "images/replace_character1_2.png",
            id: "event_item_present_date_pex_replace_character1_2"
        }, {
            src: "images/replace_item.png",
            id: "event_item_present_date_pex_replace_item"
        }, {
            src: "images/replace_name.png",
            id: "event_item_present_date_pex_replace_name"
        }, {
            src: "images/sp_kirakira.png",
            id: "event_item_present_date_pex_sp_kirakira"
        }],
        preloads: []
    };
    (a.Stage = function(c) {
        createjs.Stage.call(this, c)
    }
    ).prototype = f = new createjs.Stage;
    f.setAutoPlay = function(c) {
        this.tickEnabled = c
    }
    ;
    f.play = function() {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ;
    f.stop = function(c) {
        c && this.seek(c);
        this.tickEnabled = !1
    }
    ;
    f.seek = function(c) {
        this.tickEnabled = !0;
        this.getChildAt(0).gotoAndStop(a.properties.fps * c / 1E3)
    }
    ;
    f.getDuration = function() {
        return this.getChildAt(0).totalFrames / a.properties.fps * 1E3
    }
    ;
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / a.properties.fps * 1E3
    }
    ;
    h.bootcompsLoaded = h.bootcompsLoaded || [];
    h.bootstrapListeners || (h.bootstrapListeners = []);
    h.bootstrapCallback = function(c) {
        h.bootstrapListeners.push(c);
        if (0 < h.bootcompsLoaded.length)
            for (var d = 0; d < h.bootcompsLoaded.length; ++d)
                c(h.bootcompsLoaded[d])
    }
    ;
    h.compositions = h.compositions || {};
    h.compositions.event_item_present_date_pex = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return a
        },
        getSpriteSheet: function() {
            return D
        },
        getImages: function() {
            return m
        }
    };
    h.compositionLoaded = function(c) {
        h.bootcompsLoaded.push(c);
        for (var d = 0; d < h.bootstrapListeners.length; d++)
            h.bootstrapListeners[d](c)
    }
    ;
    h.getComposition = function(c) {
        return h.compositions[c]
    }
    ;
    h.makeResponsive = function(c, d, e, k, u) {
        function x() {
            var n = a.properties.width
              , p = a.properties.height
              , q = window.innerWidth
              , r = window.innerHeight
              , t = window.devicePixelRatio || 1
              , v = q / n
              , w = r / p
              , l = 1;
            if (c)
                if ("width" == d && y == q || "height" == d && z == r)
                    l = A;
                else if (e)
                    1 == k ? l = Math.min(v, w) : 2 == k && (l = Math.max(v, w));
                else if (q < n || r < p)
                    l = Math.min(v, w);
            u[0].width = n * t * l;
            u[0].height = p * t * l;
            u.forEach(function(B) {
                B.style.width = n * l + "px";
                B.style.height = p * l + "px"
            });
            stage.scaleX = t * l;
            stage.scaleY = t * l;
            y = q;
            z = r;
            A = l;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var y, z, A = 1;
        window.addEventListener("resize", x);
        x()
    }
}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
