(function(a, n) {
    function C() {
        var c = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        c.gotoAndStop(this.currentFrame);
        c.paused = this.paused;
        c.framerate = this.framerate;
        return c
    }
    function h(c, d, e) {
        c = a.extend(c, a.MovieClip);
        c.clone = C;
        c.nominalBounds = d;
        c.frameBounds = e;
        return c
    }
    var f, b = {}, D = {}, l = {};
    b.ssMetadata = [];
    (b.bg1 = function() {
        this.initialize(l.story_generator_n1_bg1)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg10 = function() {
        this.initialize(l.story_generator_n1_bg10)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg2 = function() {
        this.initialize(l.story_generator_n1_bg2)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg3 = function() {
        this.initialize(l.story_generator_n1_bg3)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg4 = function() {
        this.initialize(l.story_generator_n1_bg4)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg5 = function() {
        this.initialize(l.story_generator_n1_bg5)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg6 = function() {
        this.initialize(l.story_generator_n1_bg6)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg7 = function() {
        this.initialize(l.story_generator_n1_bg7)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg8 = function() {
        this.initialize(l.story_generator_n1_bg8)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg9 = function() {
        this.initialize(l.story_generator_n1_bg9)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,960,620);
    (b.bg_op = function() {
        this.initialize(l.story_generator_n1_bg_op)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,620);
    (b.button_blue = function() {
        this.initialize(l.story_generator_n1_button_blue)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,230,99);
    (b.c1_b = function() {
        this.initialize(l.story_generator_n1_c1_b)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face1 = function() {
        this.initialize(l.story_generator_n1_c1_face1)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face10 = function() {
        this.initialize(l.story_generator_n1_c1_face10)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face11 = function() {
        this.initialize(l.story_generator_n1_c1_face11)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face12 = function() {
        this.initialize(l.story_generator_n1_c1_face12)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face2 = function() {
        this.initialize(l.story_generator_n1_c1_face2)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face3 = function() {
        this.initialize(l.story_generator_n1_c1_face3)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face4 = function() {
        this.initialize(l.story_generator_n1_c1_face4)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face5 = function() {
        this.initialize(l.story_generator_n1_c1_face5)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face6 = function() {
        this.initialize(l.story_generator_n1_c1_face6)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face7 = function() {
        this.initialize(l.story_generator_n1_c1_face7)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face8 = function() {
        this.initialize(l.story_generator_n1_c1_face8)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.c1_face9 = function() {
        this.initialize(l.story_generator_n1_c1_face9)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,800,1E3);
    (b.event_logo = function() {
        this.initialize(l.story_generator_n1_event_logo)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,280);
    (b.event_push = function() {
        this.initialize(l.story_generator_n1_event_push)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,122);
    (b.event_push_b = function() {
        this.initialize(l.story_generator_n1_event_push_b)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,122);
    (b.event_push_w = function() {
        this.initialize(l.story_generator_n1_event_push_w)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,122);
    (b.fp_kirakira = function() {
        this.initialize(l.story_generator_n1_fp_kirakira)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,20,20);
    (b.fp_kirakira_40x40 = function() {
        this.initialize(l.story_generator_n1_fp_kirakira_40x40)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,40,40);
    (b.tie_sp = function() {
        this.initialize(l.story_generator_n1_tie_sp)
    }
    ).prototype = f = new a.Bitmap;
    f.nominalBounds = new a.Rectangle(0,0,480,64);
    (b.white_mask = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AzhWqMAAAgtTMAnDAAAMAAAAtTg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.white_mask, new a.Rectangle(-125,-145,250,290), null);
    (b.replace_effect20 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect19 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect18 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect17 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect16 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect15 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect14 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect13 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect12 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect11 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect10 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect9 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect8 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect7 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect6 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect5 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect4 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.replace_effect3, new a.Rectangle(-18,-18,36,36), null);
    (b.replace_effect2 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.replace_effect1 = function(c, d, e) {
        this.initialize(c, d, e, {
            L: 1,
            R: 4
        });
        this.shape = new a.Shape;
        this.shape.graphics.f("#333333").s().p("AizC0IAAlnIFnAAIAAFng");
        this.shape.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.dark = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.dark, new a.Rectangle(-120,-155,240,310), null);
    (b.blcak_mask = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EglfAYOMAAAgwbMBK/AAAMAAAAwbg");
        this.shape.setTransform(.025, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.blcak_mask, new a.Rectangle(-240,-155,480.1,310), null);
    (b.black_mask = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("AzhWqMAAAgtTMAnDAAAMAAAAtTg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.black_mask, new a.Rectangle(-125,-145,250,290), null);
    (b.white_overlay = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvYOMAAAgwbMAlfAAAMAAAAwbg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.white_overlay, new a.Rectangle(-120,-155,240,310), null);
    (b.textfield = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.message = new a.Text("","13px 'Arial'");
        this.message.name = "message";
        this.message.lineHeight = 16;
        this.message.lineWidth = 224;
        this.message.parent = this;
        this.message.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.message).wait(1))
    }
    ).prototype = h(b.textfield, new a.Rectangle(0,0,228,75), null);
    (b.shield = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("EhRPBRQMAAAiifMCifAAAMAAACifgAyvV4MAlfAAAMAAAgrvMglfAAAg");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.shield, new a.Rectangle(-520,-520,1040,1040), null);
    (b.screen_btn = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyvWqMAAAgtTMAlfAAAMAAAAtTg");
        this.shape.setTransform(120, 145);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.screen_btn, new a.Rectangle(0,0,240,290), null);
    (b.roader_ring2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgQAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIAiAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAg");
        this.shape.setTransform(4.7, 0);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.roader_ring2, new a.Rectangle(2,-1,5.5,2), null);
    (b.pusher_next_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(255,255,255,0.851)").s().p("AC2A3IAGg1IgtAAIgGA1IgWAAIAOhsIAUAAIgFAxIAtAAIAGgxIAVAAIgMBsgAAGA3IADgiIAWAAIgDAaIAqAAIAFguIhAAAIAHg2IBSAAIgDAeIgVAAIACgXIgoAAIgFAoIA/AAIgFA9gAhqA3IAOhsIAVAAIgMBkIAtAAIANhkIAUAAIgMBsgAjXA3IAOhsIBUAAIgGA9Ig6AAIACgHIAjAAIAGgvIgrAAIgMBlg");
        this.shape.setTransform(.675, 1.3);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.pusher_next_inner, new a.Rectangle(-20.9,-4.1,43.2,10.899999999999999), null);
    (b.pusher_inner_w = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.event_push_w;
        this.instance.parent = this;
        this.instance.setTransform(-120, -30, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.pusher_inner_w, new a.Rectangle(-120,-30,240,61), null);
    (b.pusher_inner_b = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.event_push_b;
        this.instance.parent = this;
        this.instance.setTransform(-120, -30, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.pusher_inner_b, new a.Rectangle(-120,-30,240,61), null);
    (b.pusher_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.event_push;
        this.instance.parent = this;
        this.instance.setTransform(-120, -30, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.pusher_inner, new a.Rectangle(-120,-30,240,61), null);
    (b.place_name = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.title = new a.Text("?","16px 'Arial'","#333333");
        this.title.name = "title";
        this.title.textAlign = "center";
        this.title.lineHeight = 18;
        this.title.lineWidth = 187;
        this.title.parent = this;
        this.title.setTransform(95.45, 2);
        this.timeline.addTween(a.Tween.get(this.title).wait(1))
    }
    ).prototype = h(b.place_name, new a.Rectangle(0,0,191,28.8), null);
    (b.place = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.tie_sp;
        this.instance.parent = this;
        this.instance.setTransform(-120, -16, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.place, new a.Rectangle(-120,-16,240,32), null);
    (b.particle_flash_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
        this.shape.setTransform(-.25, .525);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
        this.shape_1.setTransform(-.1, .8);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.4,-5.7,12.4,12.5);
    (b.obj2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("A3IAAIXIgcIXJAcI3JAdg");
        this.shape.setTransform(0, .025);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.obj2, new a.Rectangle(-148.1,-2.9,296.29999999999995,5.9), null);
    (b.loading_O = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBQAAIgLBlgAgZAsIAqAAIAKhXIgqAAg");
        this.shape.setTransform(.6, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_O, new a.Rectangle(-7.3,-11.4,14.6,22.9), null);
    (b.loading_N = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAQAzIgghVIgKBVIgUAAIANhlIATAAIAfBVIALhVIATAAIgLBlg");
        this.shape.setTransform(.6, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_N, new a.Rectangle(-7.3,-11.4,14.6,22.9), null);
    (b.loading_L = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AglAyIANhjIAUAAIgNBcIA3AAIgCAHg");
        this.shape.setTransform(.6, 1.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_L, new a.Rectangle(-6.4,-11.4,12.9,22.9), null);
    (b.loading_I = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgQAyIAOhjIASAAIgMBjg");
        this.shape.setTransform(-.2, 1.25);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_I, new a.Rectangle(-5.1,-11.4,10.2,22.9), null);
    (b.loading_G = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgtAyIANhkIBOAAIgEAfIgTAAIACgYIgmAAIgKBXIApAAIAGgqIgbAAIABgFIAuAAIgHA1g");
        this.shape.setTransform(.45, 1.2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_G, new a.Rectangle(-7.3,-11.4,14.7,22.9), null);
    (b.loading_D = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AguAzIANhlIBOAAIACAwIgOA1gAgZAsIAnAAIANguIgBgpIgpAAg");
        this.shape.setTransform(.475, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_D, new a.Rectangle(-7.4,-11.4,14.8,22.9), null);
    (b.loading_A = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AAeAzIgJgpIgjAAIgQApIgUAAIAnhlIAkAAIAaBlgAATADIgLguIgEAAIgQAuIAfAAg");
        this.shape.setTransform(0, 1.225);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_A, new a.Rectangle(-7.4,-11.4,14.8,22.9), null);
    (b.loading_ = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgLAKIADgUIAUAAIgCAUg");
        this.shape.setTransform(-.725, 5.2);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.loading_, new a.Rectangle(-5.1,-11.4,10.2,22.9), null);
    (b.gr_white_cover = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.gr_white_cover, new a.Rectangle(-120,-160,240,320), null);
    (b.gr_op_bg = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg_op;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.gr_op_bg, new a.Rectangle(0,0,480,310), null);
    (b.gr_nametxt = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.name_text = new a.Text("","16px 'Arial'");
        this.name_text.name = "name_text";
        this.name_text.lineHeight = 18;
        this.name_text.lineWidth = 171;
        this.name_text.parent = this;
        this.name_text.setTransform(2, 2);
        this.timeline.addTween(a.Tween.get(this.name_text).wait(1))
    }
    ).prototype = h(b.gr_nametxt, new a.Rectangle(0,0,175,29), null);
    (b.gr_event_logo = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.event_logo;
        this.instance.parent = this;
        this.instance.setTransform(-120, -72, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.gr_event_logo, new a.Rectangle(-120,-72,240,140), null);
    (b.fx_fade_white = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ay5ZAMAAAgx/MAlzAAAMAAAAx/g");
        this.shape.setTransform(121, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.fx_fade_white, new a.Rectangle(0,0,242,320), null);
    (b.fx_fade_black = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#000000").s().p("Ay5ZAMAAAgx/MAlzAAAMAAAAx/g");
        this.shape.setTransform(121, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.fx_fade_black, new a.Rectangle(0,0,242,320), null);
    (b.flash_col = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");
        this.shape.setTransform(120, 160);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.flash_col, new a.Rectangle(0,0,240,320), null);
    (b.continue_inner = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AJzAuIADgTIATAAIgCATgAJLAuIADgTIAUAAIgDATgAIkAuIACgTIAUAAIgCATgAHFAuIANhcIBIAAIACAsIgNAwgAHZApIAlAAIAMgrIgBglIgnAAgAF0AuIAMhcIBCAAIgCAHIgwAAIgJBQIAzAAIgBAFgAEVAuIAMhcIARAAIgKBXIAmAAIALhXIARAAIgKBcgADuAuIgehNIgJBNIgSAAIAMhcIARAAIAeBOIAKhOIARAAIgKBcgACNAuIAMhcIATAAIgMBcgABRAuIALhVIgdAAIABgHIBMAAIgCAHIgcAAIgKBVgAAXAuIgdhNIgJBNIgSAAIAMhcIARAAIAdBOIAKhOIARAAIgKBcgAiBAuIANhcIBJAAIgJBcgAhtApIAnAAIAJhQIgnAAgAjhAuIAMhcIBLAAIgEAbIgSAAIADgUIgnAAIgKBQIAnAAIAFgaIARAAIgEAfgAlWAuIALhcIBCAAIgCAHIgvAAIgJBQIAzAAIgCAFgAm2AuIAMhcIBBAAIgHArIAMAAIgGAxgAmjApIAoAAIAFgnIgkAAIACgFIAWAAIAFgkIgdAAgAo6AuIANhcIBJAAIgJBcgAomApIAnAAIAJhQIgnAAgAp1AuIAKhVIgdAAIACgHIBLAAIgBAHIgdAAIgJBVgAGQABIADgEIAlAAIgCAEgAk6ABIACgEIAlAAIgCAEg");
        this.shape.setTransform(.3, 1.15);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.continue_inner, new a.Rectangle(-83.4,-10.7,166.9,21.5), null);
    (b._kira = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.fp_kirakira_40x40;
        this.instance.parent = this;
        this.instance.setTransform(-10, -10, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1));
        this.instance_1 = new b.fp_kirakira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-10, -10);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(1))
    }
    ).prototype = h(b._kira, new a.Rectangle(-10,-10,20,20), null);
    (b.END_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("Ag/BOIAUibIBsAAIgDALIhNAAIgQCGIBVAAIgEAKgAgQADIADgJIA+AAIgDAJg");
        this.shape.setTransform(1.55, 1.825);
        this.timeline.addTween(a.Tween.get(this.shape).to({
            _off: !0
        }, 1).wait(2));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#FFFFFF").s().p("AAXBOIgwiCIgPCCIgfAAIAUibIAdAAIAxCDIAPiDIAeAAIgRCbg");
        this.shape_1.setTransform(1.1, 1.825);
        this.shape_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(1));
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("#FFFFFF").s().p("AhHBOIAUibIB4AAIADBJIgWBSgAgnBEIA9AAIAUhIIgDg+Ig+AAg");
        this.shape_2.setTransform(.925, 1.825);
        this.shape_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.shape_2).wait(2).to({
            _off: !1
        }, 0).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-20,-16.5,40,33);
    (b.button1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.button_blue;
        this.instance.parent = this;
        this.instance.setTransform(0, 0, .5, .5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.button1, new a.Rectangle(0,0,115,49.5), null);
    (b.yajirusi_p = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#444545").s().p("AAjA0IhMAAIAAgfIAoAAIg0gyIAWgWIA1A2IAAgqIAfAAIAABIQACATgRAAIgDAAg");
        this.shape.setTransform(-5.3448, -5.1698);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.yajirusi_p, new a.Rectangle(-10.7,-10.3,10.7,10.3), null);
    (b.window_shadow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AxJArQgmAAgUgSQARAIAZAAIaFAAIIIAAQBOAAAChLIAAAFQAABQhRAAg");
        this.shape.setTransform(118.95, 88.225);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.463)").s().p("AxEFbQg1AAgUghIAIAGQAUAYAtAAMAh8AAAQBUAAAAhTIAAoyQAAgQgDgNIgDgQQAIASAAAbIAAIyQAABWhWAAg");
        this.shape_1.setTransform(118.45, 58.325);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.58)").s().p("AxGFSQguAAgUgZIAHAEQAVASAmAAMAh7AAAQBSAAgBhRIAAgEIAAo+IAAgMQADAMAAAQIAAIyQAABUhUAAg");
        this.shape_2.setTransform(118.7, 59);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.231)").s().p("AxAFqQhGAAgQg2IAGAKQAUApA8AAMAh8AAAQBYAAAAhYIAAoyQAAgkgOgWIgIgMQAZAXAAAvIAAIyQAABbhbAAg");
        this.shape_3.setTransform(118.05, 57.3);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.349)").s().p("AxCFjQg8AAgUgqIAHAHQAUAgA1AAMAh8AAAQBWAAAAhWIAAoyQAAgagIgSIgEgOQAOAWAAAkIAAIyQAABZhYAAg");
        this.shape_4.setTransform(118.25, 57.775);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.114)").s().p("Aw+FxQhRAAgLhGQACAHADAHQARA1BGABMAh7AAAQBbAAAAhbIAAozQABgvgZgXQgFgGgHgFQAnAVAAA8IAAIzQAABdheAAg");
        this.shape_5.setTransform(117.9, 56.85);
        this.timeline.addTween(a.Tween.get({}).to({
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
    ).prototype = h(b.window_shadow, new a.Rectangle(0,0,235.8,93.8), null);
    (b.window_icon = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgjgbIBHAAIgkA3g");
        this.shape.setTransform(-.025, .75);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(255,255,255,0.498)").s("#FFFFFF").ss(1, 1, 1).rr(-9, -8.1, 18, 16.2, 2);
        this.shape_1.setTransform(-.025, -.025);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }
    ).prototype = h(b.window_icon, new a.Rectangle(-10,-9.1,20,18.2), null);
    (b.whole_skip_letter = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("ABQA2IAOhrIBUAAIgHA9Ig5AAIACgHIAiAAIAHgvIgrAAIgMBkgAAhA2IAOhrIAWAAIgOBrgAgFA2Igjg0IgGA0IgWAAIAOhrIAVAAIgGAwIAsgwIAYAAIgxA0IAoA3gAixA2IADghIAWAAIgCAaIAqAAIAFguIhAAAIAHg2IBRAAIgDAeIgVAAIADgXIgoAAIgFAoIA/AAIgFA8g");
        this.shape.setTransform(21.175, 13.45);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.whole_skip_letter, new a.Rectangle(0,0,104,24.4), null);
    (b.whole_skip_base = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.lf(["#3C3C3C", "#292929", "#4A4A4A", "#4C4C4C"], [0, .153, .894, 1], 0, 10.5, 0, -10.5).s().p("AlyBpQgeAAAAgeIAAiVQAAgeAeAAILlAAQAeAAAAAeIAACVQAAAegeAAg");
        this.shape.setTransform(40.125, 10.5);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1));
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.lf(["#B4B4B4", "#B4B4B4", "#323232", "#5F5F5F"], [0, .098, .51, 1], -2.5, -15.4, 2.6, 16.8).s().p("AlyBpQgeAAAAgeIAAiVQAAgeAeAAILlAAQAeAAAAAeIAACVQAAAegeAAg");
        this.shape_1.setTransform(40.1137, 10.5304, 1.03, 1.07);
        this.timeline.addTween(a.Tween.get(this.shape_1).wait(1))
    }
    ).prototype = h(b.whole_skip_base, new a.Rectangle(-1.5,-1.5,83.3,24), null);
    (b.whole_skip_arrow = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("AgYAWIAsgWIgngVIABgIIAsAbIgBAFIgzAbg");
        this.shape.setTransform(3.9957, 4.4852, 1.5088, 1.4988);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.whole_skip_arrow, new a.Rectangle(0,.1,8,8.8), null);
    (b.squear = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.shape = new a.Shape;
        this.shape.graphics.f("#808080").s().p("AgGAHIAAgNIANAAIAAANg");
        this.shape.setTransform(.725, .725);
        this.timeline.addTween(a.Tween.get(this.shape).wait(1))
    }
    ).prototype = h(b.squear, new a.Rectangle(0,0,1.5,1.5), null);
    (b.c1_b_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.c1_b;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.c1_b_1, new a.Rectangle(0,0,800,1E3), null);
    (b.bg_img10 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg10;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img10, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img9 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg9;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img9, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img8 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg8;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img8, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img7 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg7;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img7, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img6 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg6;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img6, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img5 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg5;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img5, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img4 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg4;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img4, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img3 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg3;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img3, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg2;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img2, new a.Rectangle(-480,-310,960,620), null);
    (b.bg_img1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.bg1;
        this.instance.parent = this;
        this.instance.setTransform(-480, -310);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.bg_img1, new a.Rectangle(-480,-310,960,620), null);
    (b.effect_target = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.eff_1 = new b.replace_effect1;
        this.eff_1.name = "eff_1";
        this.eff_1.parent = this;
        this.eff_2 = new b.replace_effect2;
        this.eff_2.name = "eff_2";
        this.eff_2.parent = this;
        this.eff_3 = new b.replace_effect3;
        this.eff_3.name = "eff_3";
        this.eff_3.parent = this;
        this.eff_4 = new b.replace_effect4;
        this.eff_4.name = "eff_4";
        this.eff_4.parent = this;
        this.eff_5 = new b.replace_effect5;
        this.eff_5.name = "eff_5";
        this.eff_5.parent = this;
        this.eff_6 = new b.replace_effect6;
        this.eff_6.name = "eff_6";
        this.eff_6.parent = this;
        this.eff_7 = new b.replace_effect7;
        this.eff_7.name = "eff_7";
        this.eff_7.parent = this;
        this.eff_8 = new b.replace_effect8;
        this.eff_8.name = "eff_8";
        this.eff_8.parent = this;
        this.eff_9 = new b.replace_effect9;
        this.eff_9.name = "eff_9";
        this.eff_9.parent = this;
        this.eff_10 = new b.replace_effect10;
        this.eff_10.name = "eff_10";
        this.eff_10.parent = this;
        this.eff_11 = new b.replace_effect11;
        this.eff_11.name = "eff_11";
        this.eff_11.parent = this;
        this.eff_12 = new b.replace_effect12;
        this.eff_12.name = "eff_12";
        this.eff_12.parent = this;
        this.eff_13 = new b.replace_effect13;
        this.eff_13.name = "eff_13";
        this.eff_13.parent = this;
        this.eff_14 = new b.replace_effect14;
        this.eff_14.name = "eff_14";
        this.eff_14.parent = this;
        this.eff_15 = new b.replace_effect15;
        this.eff_15.name = "eff_15";
        this.eff_15.parent = this;
        this.eff_16 = new b.replace_effect16;
        this.eff_16.name = "eff_16";
        this.eff_16.parent = this;
        this.eff_17 = new b.replace_effect17;
        this.eff_17.name = "eff_17";
        this.eff_17.parent = this;
        this.eff_18 = new b.replace_effect18;
        this.eff_18.name = "eff_18";
        this.eff_18.parent = this;
        this.eff_19 = new b.replace_effect19;
        this.eff_19.name = "eff_19";
        this.eff_19.parent = this;
        this.eff_20 = new b.replace_effect20;
        this.eff_20.name = "eff_20";
        this.eff_20.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.eff_1
            }]
        }).to({
            state: [{
                t: this.eff_2
            }]
        }, 1).to({
            state: [{
                t: this.eff_3
            }]
        }, 1).to({
            state: [{
                t: this.eff_4
            }]
        }, 1).to({
            state: [{
                t: this.eff_5
            }]
        }, 1).to({
            state: [{
                t: this.eff_6
            }]
        }, 1).to({
            state: [{
                t: this.eff_7
            }]
        }, 1).to({
            state: [{
                t: this.eff_8
            }]
        }, 1).to({
            state: [{
                t: this.eff_9
            }]
        }, 1).to({
            state: [{
                t: this.eff_10
            }]
        }, 1).to({
            state: [{
                t: this.eff_11
            }]
        }, 1).to({
            state: [{
                t: this.eff_12
            }]
        }, 1).to({
            state: [{
                t: this.eff_13
            }]
        }, 1).to({
            state: [{
                t: this.eff_14
            }]
        }, 1).to({
            state: [{
                t: this.eff_15
            }]
        }, 1).to({
            state: [{
                t: this.eff_16
            }]
        }, 1).to({
            state: [{
                t: this.eff_17
            }]
        }, 1).to({
            state: [{
                t: this.eff_18
            }]
        }, 1).to({
            state: [{
                t: this.eff_19
            }]
        }, 1).to({
            state: [{
                t: this.eff_20
            }]
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-18,-18,36,36);
    (b.bg_mask = function(c, d, e) {
        this.initialize(c, d, e, {
            no: 0,
            display: 1,
            "in": 2,
            out: 7,
            in_out: 12
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_1 = function() {
            this.stop()
        }
        ;
        this.frame_6 = function() {
            this.stop()
        }
        ;
        this.frame_11 = function() {
            this.stop()
        }
        ;
        this.frame_16 = function() {
            exportRoot.bg_base.bg.bg_num.gotoAndStop(exportRoot._bg_target)
        }
        ;
        this.frame_20 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(5).call(this.frame_11).wait(5).call(this.frame_16).wait(4).call(this.frame_20).wait(1));
        this.instance = new b.blcak_mask;
        this.instance.parent = this;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            alpha: 0
        }, 4).wait(1).to({
            alpha: 1
        }, 4).wait(1).to({
            alpha: 0
        }, 0).to({
            alpha: 1
        }, 4).to({
            alpha: 0
        }, 4).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-240,-155,480.1,310);
    (b.bg_base = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10));
        this.bg_mask = new b.bg_mask;
        this.bg_mask.name = "bg_mask";
        this.bg_mask.parent = this;
        this.bg_mask.setTransform(239.95, 155);
        this.timeline.addTween(a.Tween.get(this.bg_mask).wait(10));
        this.instance = new b.bg_img1;
        this.instance.parent = this;
        this.instance.setTransform(240, 155, .5, .5);
        this.instance_1 = new b.bg_img2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(240, 155, .5, .5);
        this.instance_2 = new b.bg_img3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(240, 155, .5, .5);
        this.instance_3 = new b.bg_img4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(240, 155, .5, .5);
        this.instance_4 = new b.bg_img5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(240, 155, .5, .5);
        this.instance_5 = new b.bg_img6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(240, 155, .5, .5);
        this.instance_6 = new b.bg_img7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(240, 155, .5, .5);
        this.instance_7 = new b.bg_img8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(240, 155, .5, .5);
        this.instance_8 = new b.bg_img9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(240, 155, .5, .5);
        this.instance_9 = new b.bg_img10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(240, 155, .5, .5);
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
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,0,480,310);
    (b.pusher_next = function(c, d, e) {
        this.initialize(c, d, e, {
            lp: 5
        });
        this.frame_24 = function() {
            this.gotoAndPlay("lp")
        }
        ;
        this.timeline.addTween(a.Tween.get(this).wait(24).call(this.frame_24).wait(1));
        this.instance = new b.pusher_next_inner;
        this.instance.parent = this;
        this.instance.alpha = .1016;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: 1
        }, 5).to({
            alpha: 0
        }, 12, a.Ease.get(-1)).to({
            alpha: 1
        }, 7, a.Ease.get(-1)).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-20.9,-4.1,43.2,10.899999999999999);
    (b.pusher = function(c, d, e) {
        this.initialize(c, d, e, {
            l: 17,
            pushed: 42
        });
        this.frame_39 = function() {
            this.gotoAndPlay("l")
        }
        ;
        this.frame_49 = function() {
            this.stop();
            window.location.href = exportRoot.back_url
        }
        ;
        this.timeline.addTween(a.Tween.get(this).wait(39).call(this.frame_39).wait(10).call(this.frame_49).wait(12));
        this.instance = new b.pusher_inner_b;
        this.instance.parent = this;
        this.instance.setTransform(.15, .45, .86, .86, 0, 0, 0, .2, .5);
        this.instance.alpha = .3008;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(42).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 1.1334,
            scaleY: 1.1334,
            x: .25,
            y: -.45,
            alpha: 0
        }, 0).wait(1).to({
            regX: 0,
            scaleX: 1.1292,
            scaleY: 1.1292,
            x: 0,
            y: -.4,
            alpha: .0096
        }, 0).wait(1).to({
            scaleX: 1.1154,
            scaleY: 1.1154,
            y: -.3,
            alpha: .0405
        }, 0).wait(1).to({
            scaleX: 1.0909,
            scaleY: 1.0909,
            y: -.1,
            alpha: .0958
        }, 0).wait(1).to({
            scaleX: 1.0561,
            scaleY: 1.0561,
            y: .15,
            alpha: .1742
        }, 0).wait(1).to({
            scaleX: 1.0187,
            scaleY: 1.0187,
            y: .4,
            alpha: .2587
        }, 0).wait(1).to({
            regX: .2,
            scaleX: 1,
            scaleY: 1,
            x: .2,
            y: .5,
            alpha: .3008
        }, 0).wait(12));
        this.instance_1 = new b.pusher_inner_w;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.2, .5, 1, 1, 0, 0, 0, .2, .5);
        this.instance_1.alpha = 0;
        this.instance_2 = new b.pusher_inner;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.2, .5, 1, 1, 0, 0, 0, .2, .5);
        this.instance_2.alpha = 0;
        this.instance_2.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 17).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 4).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).wait(12));
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(17).to({
            compositeOperation: NaN
        }, 0).wait(1).to({
            regX: 0,
            x: 0,
            alpha: .0168
        }, 0).wait(1).to({
            alpha: .0488
        }, 0).wait(1).to({
            alpha: .0978
        }, 0).wait(1).to({
            alpha: .1638
        }, 0).wait(1).to({
            alpha: .2433
        }, 0).wait(1).to({
            alpha: .328
        }, 0).wait(1).to({
            alpha: .4068
        }, 0).wait(1).to({
            alpha: .4707
        }, 0).wait(1).to({
            alpha: .5156
        }, 0).wait(1).to({
            alpha: .5416
        }, 0).wait(1).to({
            regX: .2,
            x: .2,
            alpha: .5508
        }, 0).wait(1).to({
            regX: 0,
            x: 0,
            alpha: .534
        }, 0).wait(1).to({
            alpha: .5019
        }, 0).wait(1).to({
            alpha: .453
        }, 0).wait(1).to({
            alpha: .387
        }, 0).wait(1).to({
            alpha: .3075
        }, 0).wait(1).to({
            alpha: .2228
        }, 0).wait(1).to({
            alpha: .1439
        }, 0).wait(1).to({
            alpha: .0801
        }, 0).wait(1).to({
            alpha: .0352
        }, 0).wait(1).to({
            alpha: .0092
        }, 0).wait(1).to({
            regX: .2,
            x: .2,
            alpha: 0
        }, 0).wait(4).to({
            scaleX: 1.1334,
            scaleY: 1.1334,
            x: .25,
            y: -.45,
            alpha: .7109
        }, 0).wait(1).to({
            regX: 0,
            scaleX: 1.1292,
            scaleY: 1.1292,
            x: 0,
            y: -.4,
            alpha: .6883
        }, 0).wait(1).to({
            scaleX: 1.1154,
            scaleY: 1.1154,
            y: -.3,
            alpha: .6151
        }, 0).wait(1).to({
            scaleX: 1.0909,
            scaleY: 1.0909,
            y: -.1,
            alpha: .4845
        }, 0).wait(1).to({
            scaleX: 1.0561,
            scaleY: 1.0561,
            y: .15,
            alpha: .2992
        }, 0).wait(1).to({
            scaleX: 1.0187,
            scaleY: 1.0187,
            y: .4,
            alpha: .0994
        }, 0).to({
            _off: !0
        }, 1).wait(12));
        this.instance_3 = new b.pusher_inner;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.2, .5, 1, 1, 0, 0, 0, .2, .5);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(18).to({
            regX: 0,
            x: 0
        }, 0).wait(10).to({
            regX: .2,
            x: .2
        }, 0).wait(1).to({
            regX: 0,
            x: 0
        }, 0).wait(10).to({
            regX: .2,
            x: .2
        }, 0).wait(3).to({
            scaleX: .86,
            scaleY: .86,
            x: .15,
            y: .45
        }, 0).to({
            scaleX: 1.1334,
            scaleY: 1.1334,
            x: .25,
            y: -.45
        }, 1).wait(1).to({
            regX: 0,
            scaleX: 1.1292,
            scaleY: 1.1292,
            x: 0,
            y: -.4
        }, 0).wait(1).to({
            scaleX: 1.1154,
            scaleY: 1.1154,
            y: -.3
        }, 0).wait(1).to({
            scaleX: 1.0909,
            scaleY: 1.0909,
            y: -.1
        }, 0).wait(1).to({
            scaleX: 1.0561,
            scaleY: 1.0561,
            y: .15
        }, 0).wait(1).to({
            scaleX: 1.0187,
            scaleY: 1.0187,
            y: .4
        }, 0).wait(1).to({
            regX: .2,
            scaleX: 1,
            scaleY: 1,
            x: .2,
            y: .5
        }, 0).wait(12))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-136,-35,272,69.2);
    (b.place_set = function(c, d, e) {
        this.initialize(c, d, e, {
            place_play: 2
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_2 = function() {}
        ;
        this.frame_5 = function() {
            this.place_text.visible = !1
        }
        ;
        this.frame_7 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(2).call(this.frame_7).wait(1));
        this.place_text = new b.place_name;
        this.place_text.name = "place_text";
        this.place_text.parent = this;
        this.place_text.setTransform(24.55, 5.7);
        this.timeline.addTween(a.Tween.get(this.place_text).wait(2).to({
            alpha: 0
        }, 2).wait(4));
        this.instance = new b.place;
        this.instance.parent = this;
        this.instance.setTransform(119.95, 15.95, 1.0833, 1.0828);
        this.timeline.addTween(a.Tween.get(this.instance).wait(3).to({
            alpha: .9375
        }, 0).wait(1).to({
            alpha: .75
        }, 0).wait(1).to({
            alpha: .4375
        }, 0).wait(1).to({
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-10,-1.4,260,35.9);
    (b.particle_flash2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_15 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).wait(15).call(this.frame_15).wait(15));
        this.instance = new b.particle_flash_core;
        this.instance.parent = this;
        this.instance.setTransform(19.95, -4.05, .7674, .7674);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5693,
            scaleY: .5693,
            rotation: -174.9492,
            x: 63.45,
            y: -63.95,
            alpha: .7229
        }, 0).wait(1).to({
            scaleX: .5097,
            scaleY: .5097,
            rotation: -119.2289,
            x: 69.8,
            y: -92.6,
            alpha: .6395
        }, 0).wait(1).to({
            scaleX: .4735,
            scaleY: .4735,
            rotation: -85.4829,
            x: 73.05,
            y: -105.45,
            alpha: .5889
        }, 0).wait(1).to({
            scaleX: .4484,
            scaleY: .4484,
            rotation: -61.9876,
            x: 75,
            y: -112.55,
            alpha: .5538
        }, 0).wait(1).to({
            scaleX: .4299,
            scaleY: .4299,
            rotation: -44.682,
            x: 76.7,
            y: -118.25,
            alpha: .5278
        }, 0).wait(1).to({
            scaleX: .4159,
            scaleY: .4159,
            rotation: -31.6108,
            x: 78.15,
            y: -122.6,
            alpha: .5083
        }, 0).wait(1).to({
            scaleX: .4052,
            scaleY: .4052,
            rotation: -21.661,
            x: 79.25,
            y: -126,
            alpha: .4934
        }, 0).wait(1).to({
            scaleX: .3972,
            scaleY: .3972,
            rotation: -14.1306,
            x: 80.25,
            y: -128.7,
            alpha: .4821
        }, 0).wait(1).to({
            scaleX: .3912,
            scaleY: .3912,
            rotation: -8.5439,
            x: 81.05,
            y: -130.7,
            alpha: .4737
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: -4.5615,
            x: 81.6,
            y: -132.1,
            alpha: .4678
        }, 0).wait(1).to({
            scaleX: .3841,
            scaleY: .3841,
            rotation: -1.9317,
            x: 82,
            y: -133.05,
            alpha: .4638
        }, 0).wait(1).to({
            scaleX: .3826,
            scaleY: .3826,
            rotation: -.4617,
            x: 82.25,
            y: -133.6,
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
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,-136.2,84.7,137.39999999999998);
    (b.particle_flash1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(3 * Math.random()) + 2)
        }
        ;
        this.frame_21 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));
        this.instance = new b.particle_flash_core;
        this.instance.parent = this;
        this.instance.setTransform(19.95, -4.05, .7347, .7347);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -.2,
            regY: .5,
            scaleX: .5967,
            scaleY: .5967,
            rotation: 140.8707,
            x: 62,
            y: -58.8,
            alpha: .8319
        }, 0).wait(1).to({
            scaleX: .5493,
            scaleY: .5493,
            rotation: 189.3068,
            x: 68.95,
            y: -89.2,
            alpha: .774
        }, 0).wait(1).to({
            scaleX: .5163,
            scaleY: .5163,
            rotation: 222.9188,
            x: 73.15,
            y: -105.85,
            alpha: .7339
        }, 0).wait(1).to({
            scaleX: .4911,
            scaleY: .4911,
            rotation: 248.676,
            x: 76.1,
            y: -115.95,
            alpha: .7032
        }, 0).wait(1).to({
            scaleX: .4709,
            scaleY: .4709,
            rotation: 269.3198,
            x: 78.9,
            y: -124.3,
            alpha: .6785
        }, 0).wait(1).to({
            scaleX: .4543,
            scaleY: .4543,
            rotation: 286.2744,
            x: 81.55,
            y: -131.45,
            alpha: .6583
        }, 0).wait(1).to({
            scaleX: .4404,
            scaleY: .4404,
            rotation: 300.3959,
            x: 84.35,
            y: -137.6,
            alpha: .6415
        }, 0).wait(1).to({
            scaleX: .4288,
            scaleY: .4288,
            rotation: 312.2476,
            x: 86.7,
            y: -142.4,
            alpha: .6273
        }, 0).wait(1).to({
            scaleX: .4191,
            scaleY: .4191,
            rotation: 322.2242,
            x: 88.9,
            y: -146.25,
            alpha: .6154
        }, 0).wait(1).to({
            scaleX: .4108,
            scaleY: .4108,
            rotation: 330.6158,
            x: 90.9,
            y: -149.45,
            alpha: .6054
        }, 0).wait(1).to({
            scaleX: .404,
            scaleY: .404,
            rotation: 337.643,
            x: 92.75,
            y: -152.15,
            alpha: .597
        }, 0).wait(1).to({
            scaleX: .3982,
            scaleY: .3982,
            rotation: 343.4783,
            x: 94.3,
            y: -154.45,
            alpha: .59
        }, 0).wait(1).to({
            scaleX: .3936,
            scaleY: .3936,
            rotation: 348.2599,
            x: 95.7,
            y: -156.2,
            alpha: .5843
        }, 0).wait(1).to({
            scaleX: .3898,
            scaleY: .3898,
            rotation: 352.1005,
            x: 96.9,
            y: -157.65,
            alpha: .5797
        }, 0).wait(1).to({
            scaleX: .3869,
            scaleY: .3869,
            rotation: 355.0937,
            x: 97.85,
            y: -158.75,
            alpha: .5762
        }, 0).wait(1).to({
            scaleX: .3847,
            scaleY: .3847,
            rotation: 357.3179,
            x: 98.6,
            y: -159.55,
            alpha: .5735
        }, 0).wait(1).to({
            scaleX: .3832,
            scaleY: .3832,
            rotation: 358.8401,
            x: 99.1,
            y: -160.1,
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
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,-162.8,102.1,163.70000000000002);
    (b.particle_flash_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.particle_flash2;
        this.instance.parent = this;
        this.instance.setTransform(-3.7, 44.05, .8585, .8585, -173.2889);
        this.instance_1 = new b.particle_flash2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(13.6, 24.65, .5292, .5292, 0, -143.2543, 36.7457);
        this.instance_2 = new b.particle_flash2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(8.15, 26.5, .7527, .5292, 0, -164.9709, 40.6843);
        this.instance_3 = new b.particle_flash1;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-26.55, 10.85, .8544, .5085, 0, -124.1512, 76.2156, -59.9, -3.9);
        this.instance_4 = new b.particle_flash1;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-12, 28, .6032, .6714, 0, 102.0919, 76.0499);
        this.instance_5 = new b.particle_flash1;
        this.instance_5.parent = this;
        this.instance_5.setTransform(24, 22, .6032, .6032, 154.5512);
        this.instance_6 = new b.particle_flash2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(10, 40, .67, .5378, 0, -151.6456, 57.8841);
        this.instance_7 = new b.particle_flash1;
        this.instance_7.parent = this;
        this.instance_7.setTransform(36, 16.45, 1.1194, 1.0589, 0, -118.0587, 42.7302);
        this.instance_8 = new b.particle_flash1;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-4.25, 24.65, .5292, .8921, -178.5141);
        this.instance_9 = new b.particle_flash2;
        this.instance_9.parent = this;
        this.instance_9.setTransform(2, 30.35, 1, 1, 95.2812);
        this.instance_10 = new b.particle_flash1;
        this.instance_10.parent = this;
        this.instance_10.setTransform(13.6, 24.65, .5924, .5292, 0, 155.0554, -24.9453);
        this.instance_11 = new b.particle_flash2;
        this.instance_11.parent = this;
        this.instance_11.setTransform(2.25, 20.95, .5292, .5292, 134.5199);
        this.instance_12 = new b.particle_flash2;
        this.instance_12.parent = this;
        this.instance_12.setTransform(-40.35, -8.15, .8585, .8585, -88.5191);
        this.instance_13 = new b.particle_flash2;
        this.instance_13.parent = this;
        this.instance_13.setTransform(-38, 10, .5292, .5292, 0, -53.2543, 126.7457);
        this.instance_14 = new b.particle_flash2;
        this.instance_14.parent = this;
        this.instance_14.setTransform(-12.4, 14, .7527, .5292, 0, -104.9694, 100.6856);
        this.instance_15 = new b.particle_flash1;
        this.instance_15.parent = this;
        this.instance_15.setTransform(-.85, -20.4, .8544, .5085, 0, -69.3554, 131.0109, -59.8, -3.7);
        this.instance_16 = new b.particle_flash1;
        this.instance_16.parent = this;
        this.instance_16.setTransform(-28, -14, .6032, .6714, 0, -58.4598, -84.5013);
        this.instance_17 = new b.particle_flash1;
        this.instance_17.parent = this;
        this.instance_17.setTransform(-34, 20, .6032, .6032, -115.4488);
        this.instance_18 = new b.particle_flash2;
        this.instance_18.parent = this;
        this.instance_18.setTransform(-30, 16, .67, .5379, 0, -103.6061, 105.9244);
        this.instance_19 = new b.particle_flash1;
        this.instance_19.parent = this;
        this.instance_19.setTransform(-24, 30, 1.1194, 1.0589, 0, -28.0587, 132.7302);
        this.instance_20 = new b.particle_flash1;
        this.instance_20.parent = this;
        this.instance_20.setTransform(-14.65, 1.75, .5292, .5292, -118.5129);
        this.instance_21 = new b.particle_flash2;
        this.instance_21.parent = this;
        this.instance_21.setTransform(-32.05, -3.5, 1, 1, -135.4791);
        this.instance_22 = new b.particle_flash1;
        this.instance_22.parent = this;
        this.instance_22.setTransform(-14.65, 19.6, .5925, .5292, 0, -72.0065, 107.9921);
        this.instance_23 = new b.particle_flash2;
        this.instance_23.parent = this;
        this.instance_23.setTransform(-10.95, 8.25, .6817, 1.3397, 0, -100.0239, -139.0996);
        this.instance_24 = new b.particle_flash2;
        this.instance_24.parent = this;
        this.instance_24.setTransform(6.55, -31.7, .8585, .8585, -6.5255);
        this.instance_25 = new b.particle_flash2;
        this.instance_25.parent = this;
        this.instance_25.setTransform(6.55, -31.7, .5292, .5292, 0, 36.7457, -143.2543);
        this.instance_26 = new b.particle_flash2;
        this.instance_26.parent = this;
        this.instance_26.setTransform(-5.3, -14.15, .7527, .5292, 0, 15.0291, -139.3157);
        this.instance_27 = new b.particle_flash1;
        this.instance_27.parent = this;
        this.instance_27.setTransform(29.35, 1.45, .8544, .5085, 0, 20.6446, -138.9891, -59.9, -3.9);
        this.instance_28 = new b.particle_flash1;
        this.instance_28.parent = this;
        this.instance_28.setTransform(4.65, -27.5, .6032, .6714, 0, -19.4377, -45.4796);
        this.instance_29 = new b.particle_flash1;
        this.instance_29.parent = this;
        this.instance_29.setTransform(10, -24, .6032, .6032, 19.5497);
        this.instance_30 = new b.particle_flash2;
        this.instance_30.parent = this;
        this.instance_30.setTransform(-7.15, -27.65, .67, .5378, 0, -7.3809, -157.8494);
        this.instance_31 = new b.particle_flash1;
        this.instance_31.parent = this;
        this.instance_31.setTransform(-14, -20, 1.1195, 1.0589, 0, -5.3487, 155.4402);
        this.instance_32 = new b.particle_flash1;
        this.instance_32.parent = this;
        this.instance_32.setTransform(7.1, -12.3, .5292, .5292, -28.5129);
        this.instance_33 = new b.particle_flash2;
        this.instance_33.parent = this;
        this.instance_33.setTransform(8, -18, 1, 1, -45.4791);
        this.instance_34 = new b.particle_flash1;
        this.instance_34.parent = this;
        this.instance_34.setTransform(-10.75, -12.3, .5925, .5292, 0, 17.9935, -162.0079);
        this.instance_35 = new b.particle_flash2;
        this.instance_35.parent = this;
        this.instance_35.setTransform(.6, -8.6, .5292, .5292, -45.4801);
        this.instance_36 = new b.particle_flash2;
        this.instance_36.parent = this;
        this.instance_36.setTransform(50, 16, .8585, .8585, 61.4817);
        this.instance_37 = new b.particle_flash2;
        this.instance_37.parent = this;
        this.instance_37.setTransform(8.5, 6.25, .5292, .5292, 0, 126.7457, -53.2543);
        this.instance_38 = new b.particle_flash2;
        this.instance_38.parent = this;
        this.instance_38.setTransform(14.45, -1.3, .7527, .5292, 0, 105.0291, -49.3157);
        this.instance_39 = new b.particle_flash1;
        this.instance_39.parent = this;
        this.instance_39.setTransform(13.3, 36.9, .8544, .5085, 0, 110.6446, -48.9891, -59.8, -3.7);
        this.instance_40 = new b.particle_flash1;
        this.instance_40.parent = this;
        this.instance_40.setTransform(24, -2, .6032, .6714, 0, 70.5623, 44.5204);
        this.instance_41 = new b.particle_flash1;
        this.instance_41.parent = this;
        this.instance_41.setTransform(38, 6, .6032, .6032, 64.5512);
        this.instance_42 = new b.particle_flash2;
        this.instance_42.parent = this;
        this.instance_42.setTransform(27.95, -3.15, .67, .5378, 0, 73.3557, -77.1152);
        this.instance_43 = new b.particle_flash1;
        this.instance_43.parent = this;
        this.instance_43.setTransform(28, -12, 1.1194, 1.0589, 0, 151.9413, -47.2698);
        this.instance_44 = new b.particle_flash1;
        this.instance_44.parent = this;
        this.instance_44.setTransform(13.6, 24.65, .5292, .5292, 61.4871);
        this.instance_45 = new b.particle_flash2;
        this.instance_45.parent = this;
        this.instance_45.setTransform(21, 11.9, 1, 1, 23.5401);
        this.instance_46 = new b.particle_flash1;
        this.instance_46.parent = this;
        this.instance_46.setTransform(12.6, -6.75, .5925, .5292, 0, 107.9935, -72.0079);
        this.instance_47 = new b.particle_flash2;
        this.instance_47.parent = this;
        this.instance_47.setTransform(8.9, 4.6, .5292, .5292, 44.5199);
        this.timeline.addTween(a.Tween.get({}).to({
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
        }).wait(1))
    }
    ).prototype = h(b.particle_flash_container, new a.Rectangle(-55.4,-47.8,121.80000000000001,129.8), null);
    (b.obj6 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {
            this.gotoAndPlay(9 + 10 * Math.random())
        }
        ;
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(21));
        this.instance = new b.obj2;
        this.instance.parent = this;
        this.instance.setTransform(-.05, 0, .1255, 1);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: .5218
        }, 0).to({
            scaleX: .5,
            alpha: .1289
        }, 4).to({
            _off: !0
        }, 1).wait(22));
        this.instance_1 = new b._kira;
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, 2.7981, 2.7981);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(1).to({
            scaleX: 2.8067,
            scaleY: 2.8067,
            rotation: 1.9399,
            alpha: .971
        }, 0).wait(1).to({
            scaleX: 2.8307,
            scaleY: 2.8307,
            rotation: 7.4005,
            alpha: .8893
        }, 0).wait(1).to({
            scaleX: 2.87,
            scaleY: 2.87,
            rotation: 16.3817,
            alpha: .7549
        }, 0).wait(1).to({
            scaleX: 2.9248,
            scaleY: 2.9248,
            rotation: 28.8836,
            alpha: .5678
        }, 0).wait(1).to({
            scaleX: 2.9951,
            scaleY: 2.9951,
            rotation: 44.9061,
            alpha: .3281
        }, 0).to({
            _off: !0
        }, 1).wait(21))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-77.3,-42.3,154.6,84.69999999999999);
    (b.loader_ring_contaier2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.roader_ring2("synched",0);
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 4.7,
            x: 4.7,
            alpha: .9891
        }, 0).wait(1).to({
            alpha: .952
        }, 0).wait(1).to({
            alpha: .8798
        }, 0).wait(1).to({
            alpha: .7623
        }, 0).wait(1).to({
            alpha: .5979
        }, 0).wait(1).to({
            alpha: .4148
        }, 0).wait(1).to({
            alpha: .2634
        }, 0).wait(1).to({
            alpha: .1658
        }, 0).wait(1).to({
            alpha: .1159
        }, 0).wait(1).to({
            regX: 0,
            x: 0,
            alpha: .1016
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,-.5,7,1);
    (b.fx_fade = function(c, d, e) {
        this.initialize(c, d, e, {
            out: 1,
            "in": 10,
            in2: 14,
            white_out: 16,
            white_in: 28,
            white_in2: 35,
            flash_short: 36,
            flash_long: 47
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_9 = function() {
            this.gotoAndStop(0)
        }
        ;
        this.frame_14 = function() {
            this.stop()
        }
        ;
        this.frame_27 = function() {
            this.gotoAndStop(0)
        }
        ;
        this.frame_35 = function() {
            this.stop()
        }
        ;
        this.frame_46 = function() {
            this.stop()
        }
        ;
        this.frame_63 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(5).call(this.frame_14).wait(13).call(this.frame_27).wait(8).call(this.frame_35).wait(11).call(this.frame_46).wait(17).call(this.frame_63).wait(1));
        this.instance = new b.fx_fade_black;
        this.instance.parent = this;
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 7, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 4, a.Ease.get(1)).to({
            _off: !0
        }, 2).wait(48));
        this.lighter_tgt = new b.fx_fade_white;
        this.lighter_tgt.name = "lighter_tgt";
        this.lighter_tgt.parent = this;
        this.lighter_tgt._off = !0;
        this.instance_1 = new b.flash_col;
        this.instance_1.parent = this;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.lighter_tgt).wait(16).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 10, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 7, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(28));
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(36).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 9, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(1).to({
            _off: !1,
            alpha: 1
        }, 0).wait(1).to({
            regX: 120,
            regY: 160,
            x: 120,
            y: 160,
            alpha: .9907
        }, 0).wait(1).to({
            alpha: .9615
        }, 0).wait(1).to({
            alpha: .9104
        }, 0).wait(1).to({
            alpha: .8368
        }, 0).wait(1).to({
            alpha: .7421
        }, 0).wait(1).to({
            alpha: .6312
        }, 0).wait(1).to({
            alpha: .5119
        }, 0).wait(1).to({
            alpha: .3941
        }, 0).wait(1).to({
            alpha: .2863
        }, 0).wait(1).to({
            alpha: .1942
        }, 0).wait(1).to({
            alpha: .1204
        }, 0).wait(1).to({
            alpha: .0653
        }, 0).wait(1).to({
            alpha: .0279
        }, 0).wait(1).to({
            alpha: .0067
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 0
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,0,242,320);
    (b._continue = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = 3 == exportRoot.event_type ? !0 : !1
        }
        ;
        this.frame_14 = function() {
            this.gotoAndPlay(0)
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.continue_inner;
        this.instance.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: .3,
            regY: 1.1,
            x: .3,
            y: 1.1,
            alpha: .989
        }, 0).wait(1).to({
            alpha: .9475
        }, 0).wait(1).to({
            alpha: .8552
        }, 0).wait(1).to({
            alpha: .7038
        }, 0).wait(1).to({
            alpha: .575
        }, 0).wait(1).to({
            alpha: .5152
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: .5
        }, 0).wait(1).to({
            regX: .3,
            regY: 1.1,
            x: .3,
            y: 1.1,
            alpha: .511
        }, 0).wait(1).to({
            alpha: .5525
        }, 0).wait(1).to({
            alpha: .6448
        }, 0).wait(1).to({
            alpha: .7962
        }, 0).wait(1).to({
            alpha: .925
        }, 0).wait(1).to({
            alpha: .9848
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0,
            alpha: 1
        }, 0).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-64.6,-3.5,129.8,9.3);
    (b.END = function(c, d, e) {
        this.initialize(c, d, e, {
            loop: 20
        });
        this.frame_51 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).wait(51).call(this.frame_51).wait(24));
        this.instance = new b.END_core("single",0);
        this.instance.parent = this;
        this.instance.setTransform(-16, 10);
        this.instance.alpha = .3008;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: -15,
            y: 3.45,
            alpha: .6892
        }, 0).wait(1).to({
            y: -1.5,
            alpha: .9223
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -16,
            y: -5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: -15,
            y: -1.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -16,
            y: 0
        }, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: .9,
            y: 2
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 2).wait(8).to({
            startPosition: 0
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: -15,
            y: 1.8
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -16,
            y: 4
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: -15,
            y: 5.75
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 1.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -16,
            y: 0
        }, 0).to({
            y: 2
        }, 16).wait(11));
        this.instance_1 = new b.END_core("single",1);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 10);
        this.instance_1.alpha = .3008;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(2).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 1,
            y: 3.45,
            alpha: .6892
        }, 0).wait(1).to({
            y: -1.5,
            alpha: .9223
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: -5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 1,
            y: -1.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: .9,
            y: 2
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 2).wait(8).to({
            startPosition: 1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 1,
            y: 1.8
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 4
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 1,
            y: 5.75
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 1.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).to({
            y: 2
        }, 16).wait(9));
        this.instance_2 = new b.END_core("single",2);
        this.instance_2.parent = this;
        this.instance_2.setTransform(16, 10);
        this.instance_2.alpha = .3008;
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(4).to({
            _off: !1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 17,
            y: 3.45,
            alpha: .6892
        }, 0).wait(1).to({
            y: -1.5,
            alpha: .9223
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 16,
            y: -5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 17,
            y: -1.95
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 16,
            y: 0
        }, 0).wait(1).to({
            scaleX: 1.1,
            scaleY: .9,
            y: 2
        }, 0).to({
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 2).wait(8).to({
            startPosition: 2
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 17,
            y: 1.8
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 16,
            y: 4
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 17,
            y: 5.75
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            y: 5.55
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.05
        }, 0).wait(1).to({
            y: 4.7
        }, 0).wait(1).to({
            y: 4.25
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 3.3
        }, 0).wait(1).to({
            y: 2.85
        }, 0).wait(1).to({
            y: 2.5
        }, 0).wait(1).to({
            y: 2.2
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 1.85
        }, 0).wait(1).to({
            y: 1.8
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 16,
            y: 0
        }, 0).wait(1).to({
            regX: 1,
            regY: 1.8,
            x: 17,
            y: 1.8
        }, 0).wait(1).to({
            startPosition: 2
        }, 0).wait(1).to({
            y: 1.9
        }, 0).wait(1).to({
            y: 2
        }, 0).wait(1).to({
            y: 2.15
        }, 0).wait(1).to({
            y: 2.3
        }, 0).wait(1).to({
            y: 2.55
        }, 0).wait(1).to({
            y: 2.8
        }, 0).wait(1).to({
            y: 3
        }, 0).wait(1).to({
            y: 3.25
        }, 0).wait(1).to({
            y: 3.4
        }, 0).wait(1).to({
            y: 3.55
        }, 0).wait(1).to({
            y: 3.65
        }, 0).wait(1).to({
            y: 3.75
        }, 0).wait(1).to({
            startPosition: 2
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 16,
            y: 2
        }, 0).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-37.9,-21.5,76,48);
    (b.button_2_core = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.button_text = new a.Text("\u6539\u3081\u3066\u8a95\u751f\u65e5\n\u304a\u3081\u3067\u3068\u3046!","12px 'Arial'","#001024");
        this.button_text.name = "button_text";
        this.button_text.lineHeight = 14;
        this.button_text.lineWidth = 91;
        this.button_text.parent = this;
        this.button_text.setTransform(-44.8, -12.8);
        this.timeline.addTween(a.Tween.get(this.button_text).wait(1));
        this.instance = new b.button1;
        this.instance.parent = this;
        this.instance.setTransform(-58.5, -25, 1, 1, 0, 0, 0, -1, -1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.button_2_core, new a.Rectangle(-57.5,-24,115,51), null);
    (b.button_2 = function(c, d, e) {
        this.initialize(c, d, e, {
            show: 1,
            loop: 12
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_30 = function() {
            this.gotoAndPlay("loop")
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));
        this.select_button_mc = new b.button_2_core;
        this.select_button_mc.name = "select_button_mc";
        this.select_button_mc.parent = this;
        this.select_button_mc.setTransform(0, 0, .5, .5);
        this.select_button_mc.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.select_button_mc).wait(1).to({
            regY: .8,
            scaleX: .5926,
            scaleY: .5926,
            y: .45
        }, 0).wait(1).to({
            scaleX: .6772,
            scaleY: .6772,
            y: .55
        }, 0).wait(1).to({
            regY: 0,
            scaleX: .7537,
            scaleY: .7537,
            y: 0,
            compositeOperation: NaN
        }, 0).to({
            scaleX: .8222,
            scaleY: .8222,
            alpha: .1016
        }, 1).wait(1).to({
            regY: .8,
            scaleX: .9654,
            scaleY: .9654,
            y: .75,
            alpha: .6007
        }, 0).wait(1).to({
            scaleX: 1.0514,
            scaleY: 1.0514,
            y: .85,
            alpha: .9002
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1.08,
            scaleY: 1.08,
            y: 0,
            alpha: 1
        }, 0).wait(1).to({
            regY: .8,
            scaleX: 1.0726,
            scaleY: 1.0726,
            y: .85
        }, 0).wait(1).to({
            scaleX: 1.043,
            scaleY: 1.043
        }, 0).wait(1).to({
            scaleX: 1.0092,
            scaleY: 1.0092,
            y: .8
        }, 0).wait(1).to({
            regY: 0,
            scaleX: 1,
            scaleY: 1,
            y: 0
        }, 0).wait(2).to({
            regY: .8,
            y: .85
        }, 0).wait(1).to({
            y: 1.2
        }, 0).wait(1).to({
            y: 1.8
        }, 0).wait(1).to({
            y: 2.75
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 4.75
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 5.7
        }, 0).wait(1).to({
            regY: 0,
            y: 5
        }, 0).wait(1).to({
            regY: .8,
            y: 5.7
        }, 0).wait(1).to({
            y: 5.35
        }, 0).wait(1).to({
            y: 4.75
        }, 0).wait(1).to({
            y: 3.8
        }, 0).wait(1).to({
            y: 2.75
        }, 0).wait(1).to({
            y: 1.8
        }, 0).wait(1).to({
            y: 1.2
        }, 0).wait(1).to({
            y: .85
        }, 0).wait(1).to({
            regY: 0,
            y: 0
        }, 0).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-62.1,-29.5,124.2,67);
    (b.whole_skip_arrow_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(32));
        this.instance = new b.whole_skip_arrow;
        this.instance.parent = this;
        this.instance.setTransform(18.5, 3, 1, 1, 0, 0, 0, 2.5, 3);
        this.timeline.addTween(a.Tween.get(this.instance).wait(32));
        this.instance_1 = new b.whole_skip_arrow;
        this.instance_1.parent = this;
        this.instance_1.setTransform(10.9, 3, 1, 1, 0, 0, 0, 2.9, 3);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(32));
        this.instance_2 = new b.whole_skip_arrow;
        this.instance_2.parent = this;
        this.instance_2.setTransform(2.6, 3, 1, 1, 0, 0, 0, 2.6, 3);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(32))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,.1,24,8.8);
    (b.square2c = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
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
    ).prototype = h(b.square2c, new a.Rectangle(0,0,1.5,21.5), null);
    (b.square2 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.squear;
        this.instance.parent = this;
        this.instance.setTransform(.7, 25.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_1 = new b.squear;
        this.instance_1.parent = this;
        this.instance_1.setTransform(.7, 23.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_2 = new b.squear;
        this.instance_2.parent = this;
        this.instance_2.setTransform(.7, 20.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_3 = new b.squear;
        this.instance_3.parent = this;
        this.instance_3.setTransform(.7, 18.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_4 = new b.squear;
        this.instance_4.parent = this;
        this.instance_4.setTransform(.7, 15.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_5 = new b.squear;
        this.instance_5.parent = this;
        this.instance_5.setTransform(.7, 13.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_6 = new b.squear;
        this.instance_6.parent = this;
        this.instance_6.setTransform(.7, 10.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_7 = new b.squear;
        this.instance_7.parent = this;
        this.instance_7.setTransform(.7, 8.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_8 = new b.squear;
        this.instance_8.parent = this;
        this.instance_8.setTransform(.7, 5.7, 1, 1, 0, 0, 0, .7, .7);
        this.instance_9 = new b.squear;
        this.instance_9.parent = this;
        this.instance_9.setTransform(.7, 3.2, 1, 1, 0, 0, 0, .7, .7);
        this.instance_10 = new b.squear;
        this.instance_10.parent = this;
        this.instance_10.setTransform(.7, .7, 1, 1, 0, 0, 0, .7, .7);
        this.timeline.addTween(a.Tween.get({}).to({
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
        }).wait(1))
    }
    ).prototype = h(b.square2, new a.Rectangle(0,0,1.5,26.5), null);
    (b.sp_skipbtn_text = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.whole_skip_arrow_container;
        this.instance.parent = this;
        this.instance.setTransform(-29.2, -1, 1, 1, 0, 0, 0, 2.6, 3);
        this.instance_1 = new b.whole_skip_letter;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-7.1, -13.45);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance_1
            }, {
                t: this.instance
            }]
        }).wait(1))
    }
    ).prototype = h(b.sp_skipbtn_text, new a.Rectangle(-31.8,-5.4,63.7,10.9), null);
    (b.cur_mc = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_8 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).wait(8).call(this.frame_8).wait(1));
        this.instance = new b.yajirusi_p;
        this.instance.parent = this;
        this.instance.setTransform(-1.5, -1.5);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -6.55,
            y: -6.45
        }, 0).wait(1).to({
            x: -6,
            y: -5.9
        }, 0).wait(1).to({
            x: -5.45,
            y: -5.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(1).to({
            regX: -5.3,
            regY: -5.2,
            x: -5.5,
            y: -5.4
        }, 0).wait(1).to({
            x: -6.05,
            y: -5.95
        }, 0).wait(1).to({
            x: -6.6,
            y: -6.5
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -1.5,
            y: -1.5
        }, 0).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-12.2,-11.8,12.2,11.8);
    (b.character1_base = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(12));
        this.black = new b.c1_b_1;
        this.black.name = "black";
        this.black.parent = this;
        this.black.setTransform(200, 250, 1, 1, 0, 0, 0, 400, 500);
        this.black.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.black).wait(12));
        this.instance = new b.c1_face1;
        this.instance.parent = this;
        this.instance.setTransform(-200, -250);
        this.instance_1 = new b.c1_face2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-200, -250);
        this.instance_2 = new b.c1_face3;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-200, -250);
        this.instance_3 = new b.c1_face4;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-200, -250);
        this.instance_4 = new b.c1_face5;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-200, -250);
        this.instance_5 = new b.c1_face6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-200, -250);
        this.instance_6 = new b.c1_face7;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-200, -250);
        this.instance_7 = new b.c1_face8;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-200, -250);
        this.instance_8 = new b.c1_face9;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-200, -250);
        this.instance_9 = new b.c1_face10;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-200, -250);
        this.instance_10 = new b.c1_face11;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-200, -250);
        this.instance_11 = new b.c1_face12;
        this.instance_11.parent = this;
        this.instance_11.setTransform(-200, -250);
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
        }, 1).to({
            state: [{
                t: this.instance_10
            }]
        }, 1).to({
            state: [{
                t: this.instance_11
            }]
        }, 1).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-200,-250,800,1E3);
    (b._continue_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.visible = 2 == exportRoot.event_type ? !0 : !1
        }
        ;
        this.frame_14 = function() {
            this.gotoAndPlay(0)
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));
        this.instance_1 = new b.END;
        this.instance_1.parent = this;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(15))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-36,-6.5,40,33);
    (b.bg_move = function(c, d, e) {
        this.initialize(c, d, e, {
            C: 0,
            CtoR: 1,
            R: 16,
            RtoC: 17,
            CtoL: 33,
            L: 48,
            LtoC: 49
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_16 = function() {
            this.stop()
        }
        ;
        this.frame_32 = function() {
            this.stop()
        }
        ;
        this.frame_48 = function() {
            this.stop()
        }
        ;
        this.frame_64 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(16).call(this.frame_32).wait(16).call(this.frame_48).wait(16).call(this.frame_64).wait(1));
        this.bg_num = new b.bg_base;
        this.bg_num.name = "bg_num";
        this.bg_num.parent = this;
        this.bg_num.setTransform(-240, -155);
        this.timeline.addTween(a.Tween.get(this.bg_num).wait(1).to({
            x: -330
        }, 15, a.Ease.quadInOut).wait(1).to({
            x: -240
        }, 15, a.Ease.quadInOut).wait(1).to({
            x: -150
        }, 15, a.Ease.quadInOut).wait(1).to({
            x: -240
        }, 15, a.Ease.quadInOut).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-330,-155,660,310);
    (b.bg = function(c, d, e) {
        this.initialize(c, d, e, {
            on: 0,
            turn_off: 1,
            off: 10,
            turn_on: 11,
            light_short: 22,
            light_long: 32
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_10 = function() {
            this.stop()
        }
        ;
        this.frame_21 = function() {
            this.stop()
        }
        ;
        this.frame_31 = function() {
            this.stop()
        }
        ;
        this.frame_50 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(11).call(this.frame_21).wait(10).call(this.frame_31).wait(19).call(this.frame_50).wait(1));
        this.instance = new b.black_mask;
        this.instance.parent = this;
        this.instance.setTransform(120, 154.85);
        this.instance.alpha = 0;
        this.instance._off = !0;
        this.instance_1 = new b.white_mask;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 154.85);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 9).wait(1).to({
            alpha: 0
        }, 10).to({
            _off: !0
        }, 1).wait(29));
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(22).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 9).wait(1).to({
            alpha: 1
        }, 0).to({
            alpha: 0
        }, 18, a.Ease.quadInOut).wait(1));
        c = new a.Shape;
        c._off = !0;
        c.graphics.p("AyvWqMAAAgtTMAlfAAAMAAAAtTg");
        c.setTransform(120, 145);
        this.bg = new b.bg_move;
        this.bg.name = "bg";
        this.bg.parent = this;
        this.bg.setTransform(120, 135);
        d = [this.bg];
        for (e = 0; e < d.length; e++)
            d[e].mask = c;
        this.timeline.addTween(a.Tween.get(this.bg).wait(51))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-5,0,250,299.9);
    (b.whole_skip = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.sp_skip = new b.sp_skipbtn_text;
        this.sp_skip.name = "sp_skip";
        this.sp_skip.parent = this;
        this.sp_skip.setTransform(39.1, 6.45, 1, 1, 0, 0, 0, 0, -4);
        this.timeline.addTween(a.Tween.get(this.sp_skip).wait(1));
        this.instance = new b.whole_skip_base;
        this.instance.parent = this;
        this.instance.setTransform(40.1, 10.5, 1, 1, 0, 0, 0, 40.1, 10.5);
        this.instance.alpha = .3984;
        this.timeline.addTween(a.Tween.get(this.instance).wait(1))
    }
    ).prototype = h(b.whole_skip, new a.Rectangle(-1.2,-.7,82.7,22.5), null);
    (b.obj9 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_35 = function() {}
        ;
        this.timeline.addTween(a.Tween.get(this).wait(35).call(this.frame_35).wait(1));
        this.instance = new b.obj6;
        this.instance.parent = this;
        this.instance.setTransform(-56.7, -3.95, .281, .281);
        this.timeline.addTween(a.Tween.get(this.instance).wait(36));
        this.instance_1 = new b.obj6;
        this.instance_1.parent = this;
        this.instance_1.setTransform(77.05, -71.4, .281, .281);
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(3).to({
            _off: !1
        }, 0).wait(33));
        this.instance_2 = new b.obj6;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-36.6, -76.05, .281, .281);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(13).to({
            _off: !1
        }, 0).wait(23));
        this.instance_3 = new b.obj6;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-102.7, -12.7, .1872, .1872);
        this.instance_3._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(7).to({
            _off: !1
        }, 0).wait(29));
        this.instance_4 = new b.obj6;
        this.instance_4.parent = this;
        this.instance_4.setTransform(34.5, -78.45, .281, .281);
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(11).to({
            _off: !1
        }, 0).wait(25));
        this.instance_5 = new b.obj6;
        this.instance_5.parent = this;
        this.instance_5.setTransform(55.85, -6.95, .1788, .1788);
        this.instance_5._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(19).to({
            _off: !1
        }, 0).wait(17));
        this.instance_6 = new b.obj6;
        this.instance_6.parent = this;
        this.instance_6.setTransform(105.05, -94.9, .281, .281);
        this.instance_6._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(22).to({
            _off: !1
        }, 0).wait(14));
        this.instance_7 = new b.obj6;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-98.6, -67.4, .247, .247);
        this.instance_7._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(26).to({
            _off: !1
        }, 0).wait(10));
        this.instance_8 = new b.obj6;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-69.05, -90.45, .2298, .2298);
        this.instance_8._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(28).to({
            _off: !1
        }, 0).wait(8));
        this.instance_9 = new b.obj6;
        this.instance_9.parent = this;
        this.instance_9.setTransform(100.45, -26.4, .213, .213);
        this.instance_9._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_9).wait(33).to({
            _off: !1
        }, 0).wait(3));
        this.instance_10 = new b.obj6;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-2.85, 1.05, .281, .281);
        this.instance_10._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(34).to({
            _off: !1
        }, 0).wait(2))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-120,-118.7,240,140.9);
    (b.mc_op = function(c, d, e) {
        this.initialize(c, d, e, {
            start: 1
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        }
        ;
        this.frame_1 = function() {
            this.visible = !0
        }
        ;
        this.frame_22 = function() {
            this.stop();
            1 == exportRoot.voice_flag ? window.location.href = exportRoot.back_url : exportRoot.op_btn_flag = !0
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(1));
        this.instance = new b.obj9;
        this.instance.parent = this;
        this.instance.setTransform(119.25, 143, .9936, .9936);
        this.instance._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance).wait(16).to({
            _off: !1
        }, 0).wait(7));
        this.instance_1 = new b.white_overlay;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 155);
        this.instance_1.alpha = .2891;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(11).to({
            _off: !1
        }, 0).to({
            alpha: 0
        }, 8, a.Ease.get(1)).wait(4));
        this.instance_2 = new b.particle_flash_container;
        this.instance_2.parent = this;
        this.instance_2.setTransform(123.35, 116.15, .8956, .8956);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(11).to({
            _off: !1
        }, 0).wait(12));
        this.instance_3 = new b.gr_event_logo;
        this.instance_3.parent = this;
        this.instance_3.setTransform(120, 102);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(1).to({
            y: -22,
            alpha: .1016
        }, 0).wait(1).to({
            regY: -2,
            y: -23.3,
            alpha: .1057
        }, 0).wait(1).to({
            y: -21.1,
            alpha: .1188
        }, 0).wait(1).to({
            y: -17.25,
            alpha: .1419
        }, 0).wait(1).to({
            y: -11.45,
            alpha: .1766
        }, 0).wait(1).to({
            y: -3.3,
            alpha: .2253
        }, 0).wait(1).to({
            y: 7.65,
            alpha: .2911
        }, 0).wait(1).to({
            y: 22.45,
            alpha: .3798
        }, 0).wait(1).to({
            y: 42.7,
            alpha: .5013
        }, 0).wait(1).to({
            y: 72.3,
            alpha: .6785
        }, 0).wait(1).to({
            regY: 0,
            y: 128,
            alpha: 1
        }, 0).to({
            y: 96
        }, 5, a.Ease.get(1)).wait(1).to({
            regY: -2,
            y: 94.8
        }, 0).wait(1).to({
            y: 96.95
        }, 0).wait(1).to({
            y: 99.1
        }, 0).wait(1).to({
            regY: 0,
            y: 102
        }, 0).wait(3));
        this.pusher = new b.pusher;
        this.pusher.name = "pusher";
        this.pusher.parent = this;
        this.pusher.setTransform(120, 224);
        this.timeline.addTween(a.Tween.get(this.pusher).to({
            _off: !0
        }, 1).wait(10).to({
            _off: !1,
            y: 209,
            alpha: .1016
        }, 0).to({
            y: 228,
            alpha: 1
        }, 4, a.Ease.get(1)).wait(1).to({
            regY: -.4,
            y: 226.6
        }, 0).wait(1).to({
            y: 224.6
        }, 0).wait(1).to({
            regY: 0,
            y: 224
        }, 0).wait(5));
        this.instance_4 = new b.black_mask;
        this.instance_4.parent = this;
        this.instance_4.setTransform(245, 300, 1, 1, 0, 0, 0, 120, 155);
        this.instance_4.alpha = 0;
        this.instance_4._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(8).to({
            _off: !1
        }, 0).to({
            alpha: .3008
        }, 2).to({
            _off: !0
        }, 1).wait(12));
        this.instance_5 = new b.white_overlay;
        this.instance_5.parent = this;
        this.instance_5.setTransform(240, 310, 1, 1, 0, 0, 0, 120, 155);
        this.instance_5.alpha = 0;
        this.instance_5.compositeOperation = "lighter";
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(1).to({
            alpha: .6992
        }, 0).to({
            alpha: 0
        }, 7, a.Ease.get(-1)).wait(3).to({
            alpha: .6992
        }, 0).to({
            alpha: 0
        }, 9).wait(3));
        this.instance_6 = new b.gr_op_bg;
        this.instance_6.parent = this;
        this.instance_6.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(23))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,-94,250,404);
    (b.loader_ring2_container = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.loader_ring_contaier2("synched",4);
        this.instance.parent = this;
        this.instance.setTransform(0, 0, 1, 1, 150);
        this.instance_1 = new b.loader_ring_contaier2("synched",5);
        this.instance_1.parent = this;
        this.instance_1.setTransform(0, 0, .9999, .9999, 119.9987);
        this.instance_2 = new b.loader_ring_contaier2("synched",6);
        this.instance_2.parent = this;
        this.instance_2.setTransform(0, 0, 1, 1, 89.9948);
        this.instance_3 = new b.loader_ring_contaier2("synched",7);
        this.instance_3.parent = this;
        this.instance_3.setTransform(0, .05, 1, 1, 60);
        this.instance_4 = new b.loader_ring_contaier2("synched",8);
        this.instance_4.parent = this;
        this.instance_4.setTransform(0, 0, 1, 1, 29.9992);
        this.instance_5 = new b.loader_ring_contaier2("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(0, -.05, .9999, .9999, -89.9948);
        this.instance_6 = new b.loader_ring_contaier2("synched",11);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0, 0, 1, 1, -60.0001);
        this.instance_7 = new b.loader_ring_contaier2("synched",10);
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, .9999, .9999, -29.9986);
        this.instance_8 = new b.loader_ring_contaier2("synched",1);
        this.instance_8.parent = this;
        this.instance_8.setTransform(0, 0, 1, 1, -119.9999);
        this.instance_9 = new b.loader_ring_contaier2("synched",2);
        this.instance_9.parent = this;
        this.instance_9.setTransform(0, 0, .9999, .9999, -150.0005);
        this.instance_10 = new b.loader_ring_contaier2("synched",3);
        this.instance_10.parent = this;
        this.instance_10.setTransform(0, 0, 1, 1, 180);
        this.instance_11 = new b.loader_ring_contaier2("synched",9);
        this.instance_11.parent = this;
        this.timeline.addTween(a.Tween.get({}).to({
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
        }).wait(12))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-6.9,-7,13.9,14);
    (b.window22 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(3));
        this.instance = new b.square2;
        this.instance.parent = this;
        this.instance.setTransform(218.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_1 = new b.square2;
        this.instance_1.parent = this;
        this.instance_1.setTransform(191.35, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_2 = new b.square2;
        this.instance_2.parent = this;
        this.instance_2.setTransform(163.9, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_3 = new b.square2;
        this.instance_3.parent = this;
        this.instance_3.setTransform(136.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_4 = new b.square2;
        this.instance_4.parent = this;
        this.instance_4.setTransform(108.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_5 = new b.square2;
        this.instance_5.parent = this;
        this.instance_5.setTransform(81.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_6 = new b.square2;
        this.instance_6.parent = this;
        this.instance_6.setTransform(53.95, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_7 = new b.square2;
        this.instance_7.parent = this;
        this.instance_7.setTransform(26.45, 24.55, 1, 1, 90, 0, 0, .7, 13.2);
        this.instance_8 = new b.square2c;
        this.instance_8.parent = this;
        this.instance_8.setTransform(5.95, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_9 = new b.square2c;
        this.instance_9.parent = this;
        this.instance_9.setTransform(8.6, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.instance_10 = new b.square2c;
        this.instance_10.parent = this;
        this.instance_10.setTransform(11.25, 17, 1, 1, 0, 0, 0, .7, 13.2);
        this.timeline.addTween(a.Tween.get({}).to({
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
        }).wait(3));
        this.shape = new a.Shape;
        this.shape.graphics.f("rgba(0,0,0,0.702)").s().p("AASAmQgNgTgHgTQgSgkgKgSIAFAHQAJALAaA2IAVAkQgGgGgHgKg");
        this.shape.setTransform(77.125, 8.9);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("rgba(0,0,0,0.58)").s().p("AAbA1IgVglQgZg1gJgMIgFgGIgGgJQAHAGAGAIIAEAHQAMATASAnIAMAVIAUAdIgNgMg");
        this.shape_1.setTransform(77.475, 9.075);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.349)").s().p("AAuBJQgPgNgOgZIgMgVQgbg5gIgKIgKgKIgKgJIgIgIQAQAJAOARQAKAMAZA3IANAWQAPAZAQAOIAHAGg");
        this.shape_2.setTransform(78.05, 9.15);
        this.shape_3 = new a.Shape;
        this.shape_3.graphics.f("rgba(0,0,0,0.114)").s().p("ABABXQgNgHgIgIQgQgNgPgYQgGgKgGgOQgag3gKgLQgQgWgXgIIgJgGQAdAGAVAcQAJAMAaA3QAJASAGAHQAOAYAPALQAPAPAYAGIgUgEg");
        this.shape_3.setTransform(79.05, 9.15);
        this.shape_4 = new a.Shape;
        this.shape_4.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgQgOgPgZIgNgXQgZg2gKgMQgOgRgQgJIgHgFQAXAIAQAVQAKAMAaA3QAGAOAGAKQAPAYAQANQAIAIANAGg");
        this.shape_4.setTransform(78.45, 9.175);
        this.shape_5 = new a.Shape;
        this.shape_5.graphics.f("rgba(0,0,0,0.463)").s().p("AAtBHIgIgGIAAgBIgUgdIgMgVQgSgngMgTIgEgHQgGgIgHgGIgGgHIALAIIAKALQAIAKAbA4IAMAWQAOAZAPANg");
        this.shape_5.setTransform(77.775, 9.175);
        this.shape_6 = new a.Shape;
        this.shape_6.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHNQhQAAAAhQIAAqJIAAhBIAAgvQAAhQBQAAIIcAAIAuAAIARAAQAWAAARALIAHAHIAGAHIAGAJQAJARASAmQAIATANATQAHAKAGAGIAMANIABAAIAIAGIABABQAgAcA0ABIHrAAIAIAAINeAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape_6.setTransform(117.5, 46.125);
        this.shape_7 = new a.Shape;
        this.shape_7.graphics.f("rgba(0,0,0,0.114)").s().p("ABABWQgMgGgKgHQgPgOgPgXQgGgLgGgOQgag3gKgMQgQgVgXgIIgJgFQAdAGAVAbQAJAMAbA3QAIASAFAIQAPAWAPANQAPAOAYAHg");
        this.shape_7.setTransform(114.05, 9.65);
        this.shape_8 = new a.Shape;
        this.shape_8.graphics.f("rgba(0,0,0,0.702)").s().p("AASAmQgNgTgHgTQgSglgKgQIAFAGQAJALAaA2IAVAkQgGgGgHgKg");
        this.shape_8.setTransform(112.125, 9.4);
        this.shape_9 = new a.Shape;
        this.shape_9.graphics.f("rgba(0,0,0,0.349)").s().p("AAuBKQgPgOgOgYIgMgXQgbg3gIgKIgKgLIgKgJIgIgHQAQAIAOARQAKAMAZA2IANAYQAPAYAQAPIAHAGg");
        this.shape_9.setTransform(113.05, 9.65);
        this.shape_10 = new a.Shape;
        this.shape_10.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgQgOgPgZIgNgXQgZg2gKgMQgOgRgQgJIgHgFQAXAIAQAVQAKAMAaA3QAGAOAGAKQAPAYAPANQAKAIAMAGg");
        this.shape_10.setTransform(113.45, 9.675);
        this.shape_11 = new a.Shape;
        this.shape_11.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHLQhQAAAAhQIAAqEIAAgFIAAg9IAAgvQAAhQBQAAIN6AAIAuAAIARAAQAWAAARALIAHAIIAGAHIAGAJQAJARASAmQAJASAMATQAHAKAGAHIANAMIAAABIAIAGIABABQATARAbAHICzAAIAIAAINeAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape_11.setTransform(117.5, 46.375);
        this.shape_12 = new a.Shape;
        this.shape_12.graphics.f("rgba(0,0,0,0.114)").s().p("AA/BWQgMgGgIgHQgPgOgQgXQgGgLgGgOQgbg3gJgMQgRgVgVgIIgJgFQAbAGAWAbQAIAMAbA3QAJASAGAIQAOAWAOANQARAOAXAHg");
        this.shape_12.setTransform(144.05, 9.65);
        this.shape_13 = new a.Shape;
        this.shape_13.graphics.f("rgba(0,0,0,0.349)").s().p("AAuBKQgPgOgOgYIgMgXQgbg3gIgKIgKgLIgLgJIgHgHQARAIANARQAKAMAZA2IAMAYQAPAYARAPIAHAGg");
        this.shape_13.setTransform(143.05, 9.65);
        this.shape_14 = new a.Shape;
        this.shape_14.graphics.f("rgba(0,0,0,0.231)").s().p("AA2BQIgHgGQgRgOgPgZIgMgXQgZg2gKgMQgNgRgRgJIgGgFQAVAIARAVQAJAMAbA3QAGAOAGAKQAQAYAPANQAIAIAMAGg");
        this.shape_14.setTransform(143.45, 9.675);
        this.shape_15 = new a.Shape;
        this.shape_15.graphics.f("rgba(255,255,255,0.702)").s().p("AxGHLQhQAAAAhQIAAqEIAAgFIAAg9IAAgvQAAhQBQAAISlAAIAuAAIARAAQAWAAARALIAHAIIAGAHIAGAJQAJARASAmQAIASANATQAHAKAGAHIAMAMIABABIAIAGIABABQAUARAbAHILtAAQBQAAAABQIAAI5QAABQhQAAg");
        this.shape_15.setTransform(117.5, 46.375);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.shape_6
            }, {
                t: this.shape_5,
                p: {
                    x: 77.775,
                    y: 9.175
                }
            }, {
                t: this.shape_4
            }, {
                t: this.shape_3
            }, {
                t: this.shape_2
            }, {
                t: this.shape_1,
                p: {
                    x: 77.475,
                    y: 9.075
                }
            }, {
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_11
            }, {
                t: this.shape_10
            }, {
                t: this.shape_5,
                p: {
                    x: 112.775,
                    y: 9.675
                }
            }, {
                t: this.shape_9
            }, {
                t: this.shape_1,
                p: {
                    x: 112.475,
                    y: 9.575
                }
            }, {
                t: this.shape_8,
                p: {
                    x: 112.125
                }
            }, {
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_15
            }, {
                t: this.shape_14
            }, {
                t: this.shape_13
            }, {
                t: this.shape_12
            }, {
                t: this.shape_5,
                p: {
                    x: 142.775,
                    y: 9.675
                }
            }, {
                t: this.shape_1,
                p: {
                    x: 142.475,
                    y: 9.575
                }
            }, {
                t: this.shape_8,
                p: {
                    x: 142.125
                }
            }]
        }, 1).wait(1));
        this.instance_11 = new b.window_shadow;
        this.instance_11.parent = this;
        this.instance_11.setTransform(118.6, 47.65, 1, 1, 0, 0, 0, 117.9, 46.9);
        this.instance_11.alpha = .6992;
        this.timeline.addTween(a.Tween.get(this.instance_11).wait(3))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,0,236.5,94.5);
    (b.win_mc = function(c, d, e) {
        this.initialize(c, d, e, {
            f1: 1,
            out: 13,
            "in": 24,
            close: 32
        });
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.frame_5 = function() {
            this.stop()
        }
        ;
        this.frame_23 = function() {
            this.stop()
        }
        ;
        this.frame_31 = function() {
            this.stop()
        }
        ;
        this.frame_36 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(18).call(this.frame_23).wait(8).call(this.frame_31).wait(5).call(this.frame_36).wait(6));
        this.toggle_btn = new b.window_icon;
        this.toggle_btn.name = "toggle_btn";
        this.toggle_btn.parent = this;
        this.toggle_btn.setTransform(225.5, 8.5, .9999, 1);
        this.toggle_btn.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.toggle_btn).wait(1).to({
            y: 57.5,
            alpha: 1
        }, 0).wait(1).to({
            y: 28.2434
        }, 0).wait(1).to({
            y: 15.0075
        }, 0).wait(1).to({
            y: 9.7633
        }, 0).wait(1).to({
            y: 8.5
        }, 0).wait(8).to({
            scaleX: 1,
            y: 9.5
        }, 0).wait(1).to({
            rotation: 45,
            y: 13.4449
        }, 0).wait(1).to({
            rotation: 90,
            y: 31.6824
        }, 0).wait(1).to({
            rotation: 135,
            y: 77.8042
        }, 0).wait(1).to({
            regY: .2,
            rotation: 180,
            y: 93.8
        }, 0).wait(1).to({
            regY: 0,
            y: 92.3333
        }, 0).wait(1).to({
            y: 91.3333
        }, 0).wait(1).to({
            regY: .2,
            y: 90.8
        }, 0).wait(4).to({
            regY: 0,
            rotation: 150.0004,
            y: 77
        }, 0).wait(1).to({
            scaleX: .9999,
            rotation: 60.0004,
            y: 37
        }, 0).wait(1).to({
            rotation: 29.9992,
            y: 18
        }, 0).wait(1).to({
            scaleX: 1,
            rotation: 7.4998,
            y: 10.3125
        }, 0).wait(1).to({
            scaleX: .9999,
            rotation: 0,
            y: 7.75
        }, 0).wait(1).to({
            y: 8.3125
        }, 0).wait(1).to({
            y: 10
        }, 0).wait(1).to({
            y: 8.5
        }, 0).to({
            _off: !0
        }, 1).wait(10));
        this.cur = new b.cur_mc;
        this.cur.name = "cur";
        this.cur.parent = this;
        this.cur.setTransform(229.55, 88.4);
        this.cur.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.cur).wait(5).to({
            alpha: 1
        }, 0).to({
            _off: !0
        }, 8).wait(18).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 1).wait(10));
        this.name_mc = new b.gr_nametxt;
        this.name_mc.name = "name_mc";
        this.name_mc.parent = this;
        this.name_mc.setTransform(64, 16.5, 1, 1, 0, 0, 0, 50, 14.5);
        this.name_mc.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.name_mc).wait(1).to({
            y: 66.5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 87.5,
            x: 101.5,
            y: 36.9
        }, 0).wait(1).to({
            y: 24.25
        }, 0).wait(1).to({
            y: 18.2
        }, 0).wait(1).to({
            regX: 50,
            x: 64,
            y: 16.5
        }, 0).wait(9).to({
            regX: 87.5,
            x: 101.5,
            y: 22.65
        }, 0).wait(1).to({
            y: 46.15
        }, 0).wait(1).to({
            y: 82.8
        }, 0).wait(1).to({
            y: 106.3
        }, 0).wait(1).to({
            regX: 50,
            x: 64,
            y: 112.5
        }, 0).wait(2).to({
            y: 101.5
        }, 3, a.Ease.get(1)).wait(1).to({
            y: 77.5
        }, 0).wait(1).to({
            y: 37.5
        }, 0).wait(1).to({
            y: 18.5
        }, 0).to({
            y: 14.5
        }, 2, a.Ease.get(1)).to({
            y: 16.5
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 2).wait(10));
        this.message_text = new b.textfield;
        this.message_text.name = "message_text";
        this.message_text.parent = this;
        this.message_text.setTransform(4, 25.5, 1, 1, 0, 0, 0, 0, -.5);
        this.message_text.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.message_text).wait(1).to({
            y: 75.5,
            alpha: 1
        }, 0).wait(1).to({
            regX: 114,
            regY: 37.5,
            x: 118,
            y: 83.9
        }, 0).wait(1).to({
            y: 71.25
        }, 0).wait(1).to({
            y: 65.2
        }, 0).wait(1).to({
            regX: 0,
            regY: -.5,
            x: 4,
            y: 25.5
        }, 0).wait(9).to({
            regX: 114,
            regY: 37.5,
            x: 118,
            y: 69.65
        }, 0).wait(1).to({
            y: 93.15
        }, 0).wait(1).to({
            y: 129.8
        }, 0).wait(1).to({
            y: 153.3
        }, 0).wait(1).to({
            regX: 0,
            regY: -.5,
            x: 4,
            y: 121.5
        }, 0).wait(2).to({
            y: 110.5
        }, 3, a.Ease.get(1)).wait(1).to({
            y: 86.5
        }, 0).wait(1).to({
            y: 46.5
        }, 0).wait(1).to({
            y: 27.5
        }, 0).to({
            y: 23.5
        }, 2, a.Ease.get(1)).to({
            y: 25.5
        }, 2, a.Ease.get(-1)).to({
            _off: !0
        }, 2).wait(10));
        this.win_base = new b.window22;
        this.win_base.name = "win_base";
        this.win_base.parent = this;
        this.win_base.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.win_base).wait(1).to({
            y: 50,
            alpha: 1
        }, 0).wait(1).to({
            regX: 118.2,
            regY: 47.2,
            x: 118.2,
            y: 67.6
        }, 0).wait(1).to({
            y: 54.95
        }, 0).wait(1).to({
            y: 48.9
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 0
        }, 0).wait(9).to({
            regX: 118.2,
            regY: 47.2,
            x: 118.2,
            y: 53.35
        }, 0).wait(1).to({
            y: 76.85
        }, 0).wait(1).to({
            y: 113.5
        }, 0).wait(1).to({
            y: 137
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0,
            y: 96
        }, 0).wait(2).to({
            y: 85
        }, 3, a.Ease.get(1)).wait(1).to({
            y: 61
        }, 0).wait(1).to({
            y: 21
        }, 0).wait(1).to({
            y: 2
        }, 0).to({
            y: -2
        }, 2, a.Ease.get(1)).to({
            y: 0
        }, 2, a.Ease.get(-1)).wait(3).to({
            y: 2,
            alpha: .6016
        }, 0).wait(1).to({
            y: 6,
            alpha: .3008
        }, 0).wait(1).to({
            y: 116,
            alpha: 1
        }, 0).wait(7))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(0,-2,238.1,212.5);
    (b.chara_base_1 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(2));
        this.body = new b.character1_base;
        this.body.name = "body";
        this.body.parent = this;
        this.body.setTransform(121, 172, .5, .5, 0, 0, 0, 160, 195);
        this.timeline.addTween(a.Tween.get(this.body).wait(2))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-59,-50.5,400,500);
    (b.voice_loader = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.loading_;
        this.instance.parent = this;
        this.instance.setTransform(-5.45, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance).wait(9).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -6.15,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -5.45,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(1));
        this.instance_1 = new b.loading_;
        this.instance_1.parent = this;
        this.instance_1.setTransform(-9.35, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(8).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -10.05,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -9.35,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(2));
        this.instance_2 = new b.loading_;
        this.instance_2.parent = this;
        this.instance_2.setTransform(-13.3, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(7).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.7,
            regY: 5.2,
            x: -14,
            y: 12.35
        }, 0).wait(1).to({
            y: 14.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -13.3,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(3));
        this.instance_3 = new b.loading_G;
        this.instance_3.parent = this;
        this.instance_3.setTransform(-21.55, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_3).wait(6).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .4,
            regY: 1.2,
            x: -21.15,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -21.55,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(4));
        this.instance_4 = new b.loading_N;
        this.instance_4.parent = this;
        this.instance_4.setTransform(-31.95, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_4).wait(5).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.2,
            x: -31.35,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -31.95,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(5));
        this.instance_5 = new b.loading_I;
        this.instance_5.parent = this;
        this.instance_5.setTransform(-38.5, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_5).wait(4).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: -.2,
            regY: 1.2,
            x: -38.7,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -38.5,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(6));
        this.instance_6 = new b.loading_D;
        this.instance_6.parent = this;
        this.instance_6.setTransform(-46.8, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_6).wait(3).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .5,
            regY: 1.2,
            x: -46.3,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -46.8,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(7));
        this.instance_7 = new b.loading_A;
        this.instance_7.parent = this;
        this.instance_7.setTransform(-57.4, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_7).wait(2).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regY: 1.2,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regY: 0,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(8));
        this.instance_8 = new b.loading_O;
        this.instance_8.parent = this;
        this.instance_8.setTransform(-67.85, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_8).wait(1).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.2,
            x: -67.25,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -67.85,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(9));
        this.instance_9 = new b.loading_L;
        this.instance_9.parent = this;
        this.instance_9.setTransform(-77.4, 9.95);
        this.timeline.addTween(a.Tween.get(this.instance_9).to({
            y: 6.45
        }, 2, a.Ease.get(1)).wait(1).to({
            regX: .6,
            regY: 1.2,
            x: -76.8,
            y: 8.35
        }, 0).wait(1).to({
            y: 10.75
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: -77.4,
            y: 10.45
        }, 0).to({
            y: 9.95
        }, 2, a.Ease.get(1)).wait(10));
        this.instance_10 = new b.loader_ring2_container;
        this.instance_10.parent = this;
        this.instance_10.setTransform(-90.6, 10.6, 1, 1, 0, 0, 0, -.1, -.4);
        this.timeline.addTween(a.Tween.get(this.instance_10).wait(17))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-97.4,2.6,92.4,15.4);
    (b.chara_1 = function(c, d, e) {
        this.initialize(c, d, e, {
            stay: 1,
            "in": 6,
            out: 8,
            outen: 12,
            in_L: 19,
            in_R: 27,
            in_fade: 35,
            in_float: 44,
            out_L: 54,
            out_R: 59,
            out_fade: 64,
            out_float: 70,
            out_fall: 77,
            shake: 84,
            pop: 91,
            jump: 98,
            jump_double: 108,
            nod: 123,
            nod2: 130,
            nod_double: 145,
            down: 156,
            question_right: 178,
            question_right2: 199,
            question_left: 220,
            question_left2: 241,
            swing: 262
        });
        this.frame_0 = function() {
            this.stop();
            this.visible = !1
        }
        ;
        this.frame_1 = function() {
            this.stop();
            this.visible = !0
        }
        ;
        this.frame_7 = function() {
            this.stop();
            exportRoot.m_end = !0
        }
        ;
        this.frame_9 = function() {
            this.stop();
            exportRoot.m_end = !0
        }
        ;
        this.frame_18 = function() {
            this.stop()
        }
        ;
        this.frame_26 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_34 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_43 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_53 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_58 = function() {
            exportRoot.m_end = !0;
            this.gotoAndStop(0)
        }
        ;
        this.frame_63 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_69 = function() {
            exportRoot.m_end = !0;
            this.gotoAndStop(0)
        }
        ;
        this.frame_76 = function() {
            exportRoot.m_end = !0;
            this.gotoAndStop(0)
        }
        ;
        this.frame_83 = function() {
            exportRoot.m_end = !0;
            this.gotoAndStop(0)
        }
        ;
        this.frame_90 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_97 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_107 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_122 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_129 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_144 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_155 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_177 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_198 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_219 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_240 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_261 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.frame_283 = function() {
            exportRoot.m_end = !0;
            this.stop()
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(2).call(this.frame_9).wait(9).call(this.frame_18).wait(8).call(this.frame_26).wait(8).call(this.frame_34).wait(9).call(this.frame_43).wait(10).call(this.frame_53).wait(5).call(this.frame_58).wait(5).call(this.frame_63).wait(6).call(this.frame_69).wait(7).call(this.frame_76).wait(7).call(this.frame_83).wait(7).call(this.frame_90).wait(7).call(this.frame_97).wait(10).call(this.frame_107).wait(15).call(this.frame_122).wait(7).call(this.frame_129).wait(15).call(this.frame_144).wait(11).call(this.frame_155).wait(22).call(this.frame_177).wait(21).call(this.frame_198).wait(21).call(this.frame_219).wait(21).call(this.frame_240).wait(21).call(this.frame_261).wait(22).call(this.frame_283).wait(1));
        this.chara = new b.chara_base_1;
        this.chara.name = "chara";
        this.chara.parent = this;
        this.chara.setTransform(160, 195, 1, 1, 0, 0, 0, 160, 195);
        this.timeline.addTween(a.Tween.get(this.chara).wait(8).to({
            alpha: 0
        }, 0).wait(11).to({
            x: 150,
            alpha: .1992
        }, 0).to({
            x: 160,
            alpha: 1
        }, 5, a.Ease.get(1)).wait(3).to({
            x: 170,
            alpha: .1992
        }, 0).to({
            x: 160,
            alpha: 1
        }, 5, a.Ease.get(1)).wait(3).to({
            alpha: .1992
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 199.5,
            alpha: .2274
        }, 0).wait(1).to({
            alpha: .3141
        }, 0).wait(1).to({
            alpha: .4567
        }, 0).wait(1).to({
            alpha: .6375
        }, 0).wait(1).to({
            alpha: .8187
        }, 0).wait(1).to({
            alpha: .9518
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195,
            alpha: 1
        }, 0).wait(2).to({
            y: 215,
            alpha: .1992
        }, 0).to({
            y: 183,
            alpha: 1
        }, 4, a.Ease.get(1)).to({
            y: 197
        }, 3, a.Ease.get(-1)).to({
            y: 195.65
        }, 2).wait(1).to({
            y: 195
        }, 0).to({
            x: 150,
            alpha: .1992
        }, 3, a.Ease.get(-1)).wait(1).to({
            x: 160,
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            x: 170,
            alpha: .1992
        }, 3, a.Ease.get(-1)).wait(1).to({
            x: 160,
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            alpha: .1992
        }, 4, a.Ease.get(-1)).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            y: 190,
            alpha: .5
        }, 2, a.Ease.get(1)).to({
            y: 195,
            alpha: .1992
        }, 3, a.Ease.get(-1)).wait(1).to({
            alpha: 0
        }, 0).wait(1).to({
            alpha: 1
        }, 0).to({
            y: 235,
            alpha: .1992
        }, 5, a.Ease.get(-1)).wait(1).to({
            y: 195,
            alpha: 0
        }, 0).wait(1).to({
            y: 193,
            alpha: 1
        }, 0).wait(1).to({
            x: 164
        }, 0).wait(1).to({
            x: 148,
            y: 197
        }, 0).wait(1).to({
            x: 161,
            y: 194
        }, 0).wait(1).to({
            x: 156,
            y: 195
        }, 0).wait(1).to({
            x: 160
        }, 0).wait(3).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 186.25
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 179
        }, 0).to({
            y: 199
        }, 3, a.Ease.get(-1)).wait(1).to({
            y: 195
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 178.1
        }, 0).wait(1).to({
            y: 171.25
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 165
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 172.45
        }, 0).wait(1).to({
            y: 182.05
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 199
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 202.85
        }, 0).wait(1).to({
            y: 200.45
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 179.55
        }, 0).wait(1).to({
            y: 173.15
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 167
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 177.5
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 197
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 180.1
        }, 0).wait(1).to({
            y: 173.25
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 167
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 174.1
        }, 0).wait(1).to({
            y: 182.55
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 197
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 201.15
        }, 0).wait(1).to({
            y: 199.95
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(1).to({
            y: 204
        }, 3, a.Ease.get(1)).to({
            y: 195
        }, 3, a.Ease.get(-.3)).wait(2).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 199.7
        }, 0).wait(1).to({
            y: 200.5
        }, 0).wait(1).to({
            y: 202
        }, 0).wait(1).to({
            y: 203.95
        }, 0).wait(1).to({
            y: 205.45
        }, 0).wait(1).to({
            y: 206.25
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 202
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 206.25
        }, 0).wait(1).to({
            y: 205.45
        }, 0).wait(1).to({
            y: 203.95
        }, 0).wait(1).to({
            y: 202
        }, 0).wait(1).to({
            y: 200.5
        }, 0).wait(1).to({
            y: 199.7
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 202
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 200
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 203.45
        }, 0).wait(1).to({
            y: 200.5
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 202
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 200
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 203.45
        }, 0).wait(1).to({
            y: 200.5
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            x: 141.75,
            y: 201
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 161,
            y: 197
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 138.25,
            y: 203.75
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 156,
            y: 200
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 139,
            y: 205.5
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 202
        }, 0).wait(11).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 204.65
        }, 0).wait(1).to({
            y: 199.35
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 193
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            x: 141,
            y: 199.05
        }, 0).wait(1).to({
            regX: 160,
            regY: 195,
            x: 160,
            y: 195
        }, 0).wait(1).to({
            regY: 347.1,
            y: 347.1
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            rotation: .0944,
            x: 141.2,
            y: 199.5
        }, 0).wait(1).to({
            rotation: .4209,
            x: 142.1,
            y: 199.4
        }, 0).wait(1).to({
            rotation: 1.0476,
            x: 143.65,
            y: 199.25
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: 1.9465,
            x: 146,
            y: 198.95
        }, 0).wait(1).to({
            rotation: 2.7469,
            x: 148.05,
            y: 198.8
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            scaleX: .9998,
            scaleY: .9998,
            rotation: 3.0252,
            x: 160,
            y: 347.1
        }, 0).wait(9).to({
            regX: 141,
            regY: 199.5,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 2.9225,
            x: 148.55,
            y: 198.75
        }, 0).wait(1).to({
            rotation: 2.5341,
            x: 147.55,
            y: 198.9
        }, 0).wait(1).to({
            rotation: 1.7248,
            x: 145.4,
            y: 199.05
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: .7281,
            x: 142.85,
            y: 199.35
        }, 0).wait(1).to({
            rotation: .1507,
            x: 141.4,
            y: 199.45
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: 0,
            x: 160,
            y: 347.1
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            rotation: .0944,
            x: 141.2,
            y: 199.5
        }, 0).wait(1).to({
            rotation: .4209,
            x: 142.1,
            y: 199.4
        }, 0).wait(1).to({
            rotation: 1.0476,
            x: 143.65,
            y: 199.25
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: 1.9465,
            x: 146,
            y: 198.95
        }, 0).wait(1).to({
            rotation: 2.7469,
            x: 148.05,
            y: 198.8
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            scaleX: .9998,
            scaleY: .9998,
            rotation: 3.0252,
            x: 160,
            y: 347.1
        }, 0).wait(9).to({
            regX: 141,
            regY: 199.5,
            scaleX: .9999,
            scaleY: .9999,
            rotation: 2.9225,
            x: 148.55,
            y: 198.75
        }, 0).wait(1).to({
            rotation: 2.5341,
            x: 147.55,
            y: 198.9
        }, 0).wait(1).to({
            rotation: 1.7248,
            x: 145.4,
            y: 199.05
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: .7281,
            x: 142.85,
            y: 199.35
        }, 0).wait(1).to({
            rotation: .1507,
            x: 141.4,
            y: 199.45
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: 0,
            x: 160,
            y: 347.1
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            rotation: -.0944,
            x: 140.8,
            y: 199.5
        }, 0).wait(1).to({
            rotation: -.4209,
            x: 139.95,
            y: 199.6
        }, 0).wait(1).to({
            rotation: -1.0476,
            x: 138.3,
            y: 199.85
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.9465,
            x: 136,
            y: 200.2
        }, 0).wait(1).to({
            rotation: -2.7469,
            x: 133.95,
            y: 200.6
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -3.0252,
            x: 160,
            y: 347.1
        }, 0).wait(8).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -3.0001
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            rotation: -2.8983,
            x: 133.55,
            y: 200.6
        }, 0).wait(1).to({
            rotation: -2.5131,
            x: 134.55,
            y: 200.4
        }, 0).wait(1).to({
            rotation: -1.7105,
            x: 136.65,
            y: 200.1
        }, 0).wait(1).to({
            rotation: -.7221,
            x: 139.15,
            y: 199.75
        }, 0).wait(1).to({
            rotation: -.1494,
            x: 140.6,
            y: 199.55
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: 0,
            x: 160,
            y: 347.1
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            rotation: -.0944,
            x: 140.8,
            y: 199.5
        }, 0).wait(1).to({
            rotation: -.4209,
            x: 139.95,
            y: 199.6
        }, 0).wait(1).to({
            rotation: -1.0476,
            x: 138.3,
            y: 199.85
        }, 0).wait(1).to({
            scaleX: .9999,
            scaleY: .9999,
            rotation: -1.9465,
            x: 136,
            y: 200.2
        }, 0).wait(1).to({
            rotation: -2.7469,
            x: 133.95,
            y: 200.6
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            scaleX: .9998,
            scaleY: .9998,
            rotation: -3.0252,
            x: 160,
            y: 347.1
        }, 0).wait(9).to({
            regX: 141,
            regY: 199.5,
            scaleX: .9999,
            scaleY: .9999,
            rotation: -2.9225,
            x: 133.55,
            y: 200.65
        }, 0).wait(1).to({
            rotation: -2.5341,
            x: 134.5,
            y: 200.5
        }, 0).wait(1).to({
            rotation: -1.7248,
            x: 136.55,
            y: 200.15
        }, 0).wait(1).to({
            scaleX: 1,
            scaleY: 1,
            rotation: -.7281,
            x: 139.2,
            y: 199.75
        }, 0).wait(1).to({
            rotation: -.1507,
            x: 140.6,
            y: 199.55
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: 0,
            x: 160,
            y: 347.1
        }, 0).wait(2).to({
            regX: 141,
            regY: 199.5,
            rotation: -.0713,
            x: 140.85,
            y: 199.5
        }, 0).wait(1).to({
            rotation: -.3128,
            x: 140.25,
            y: 199.6
        }, 0).wait(1).to({
            rotation: -.7686,
            x: 139.1,
            y: 199.75
        }, 0).wait(1).to({
            rotation: -1.4554,
            x: 137.25,
            y: 200
        }, 0).wait(1).to({
            rotation: -2.2706,
            x: 135.2,
            y: 200.3
        }, 0).wait(1).to({
            rotation: -2.9688,
            x: 133.4,
            y: 200.65
        }, 0).wait(1).to({
            rotation: -3.3779,
            x: 132.35,
            y: 200.85
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: -3.5001,
            x: 160,
            y: 347.1
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            rotation: -3.4084,
            x: 132.25,
            y: 200.85
        }, 0).wait(1).to({
            rotation: -3.0979,
            x: 133.1,
            y: 200.7
        }, 0).wait(1).to({
            rotation: -2.5118,
            x: 134.55,
            y: 200.4
        }, 0).wait(1).to({
            rotation: -1.6288,
            x: 136.8,
            y: 200.05
        }, 0).wait(1).to({
            rotation: -.5806,
            x: 139.5,
            y: 199.65
        }, 0).wait(1).to({
            rotation: .3171,
            x: 141.8,
            y: 199.45
        }, 0).wait(1).to({
            rotation: .8431,
            x: 143.15,
            y: 199.25
        }, 0).wait(1).to({
            regX: 160.1,
            regY: 347.1,
            rotation: 1.0002,
            x: 160.05,
            y: 347.1
        }, 0).wait(1).to({
            regX: 141,
            regY: 199.5,
            rotation: .9451,
            x: 143.4,
            y: 199.15
        }, 0).wait(1).to({
            rotation: .7464,
            x: 142.85,
            y: 199.3
        }, 0).wait(1).to({
            rotation: .3977,
            x: 141.95,
            y: 199.4
        }, 0).wait(1).to({
            rotation: .0944,
            x: 141.15,
            y: 199.5
        }, 0).wait(1).to({
            regX: 160,
            regY: 347.1,
            rotation: 0,
            x: 160,
            y: 347.1
        }, 0).wait(1))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-82.9,-80.5,444.6,570);
    (b.voice_loader_container = function(c, d, e) {
        this.initialize(c, d, e, {
            "in": 1,
            out: 11
        });
        this.frame_0 = function() {
            this.visible = !1;
            this.stop()
        }
        ;
        this.frame_1 = function() {
            this.visible = !0;
            this.play()
        }
        ;
        this.frame_10 = function() {
            this.stop()
        }
        ;
        this.frame_23 = function() {
            this.gotoAndStop(1)
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(13).call(this.frame_23).wait(1));
        this.instance = new b.voice_loader;
        this.instance.parent = this;
        this.instance.setTransform(-.5, .1, 1, 1, 0, 0, 0, -.5, .1);
        this.timeline.addTween(a.Tween.get(this.instance).wait(1).to({
            alpha: .1016
        }, 0).to({
            alpha: 1
        }, 1, a.Ease.get(1)).wait(9).to({
            alpha: .1016
        }, 2, a.Ease.get(1)).to({
            _off: !0
        }, 1).wait(10))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-97.4,0,92.4,18);
    (b.story_generator_n1 = function(c, d, e) {
        this.initialize(c, d, e, {
            title: 1,
            main: 10,
            end: 20,
            op: 30
        });
        this.frame_0 = function() {
            function z() {
                window.im_cjs.loaded_check() && (exportRoot.loader.visible = !1,
                exportRoot.removeEventListener("tick", z))
            }
            exportRoot.esp = !0;
            exportRoot.story_point = 0;
            exportRoot.tick_point = 0;
            exportRoot.scene_list = window.im_cjs.scene_list || {};
            exportRoot.title_name = window.im_cjs.title_name || "no_title";
            exportRoot.chara_frame_info = window.im_cjs.chara_frame_info;
            exportRoot.bg_frame_info = window.im_cjs.bg_frame_info;
            exportRoot.black_mask.visible = !1;
            exportRoot.scene_name = "title";
            exportRoot.click_flag = !0;
            exportRoot.effect_target_c.visible = !1;
            exportRoot.effect_target_cl.visible = !1;
            exportRoot.effect_target_cr.visible = !1;
            exportRoot.effect_target_r.visible = !1;
            exportRoot.effect_target_rr.visible = !1;
            exportRoot.effect_target_l.visible = !1;
            exportRoot.effect_target_ll.visible = !1;
            exportRoot.chara_num = window.im_cjs.chara_num || 20;
            exportRoot.count = 0;
            exportRoot.timing = null;
            exportRoot.auto = 1;
            exportRoot.m_end = !1;
            exportRoot.event_type = window.im_cjs.event_type || 0;
            exportRoot.back_url = window.im_cjs.jump_url || "";
            exportRoot.end_mask.visible = !1;
            exportRoot.op_btn_flag = !1;
            exportRoot.chara_pos_x = {
                c: 120,
                cl: 90,
                cr: 150,
                l: 60,
                ll: 45,
                r: 180,
                rr: 195
            };
            exportRoot.chara_display_info = {};
            exportRoot._all_pos = "c cl cr l r rr ll".split(" ");
            for (var t = 1; t <= exportRoot.chara_num; t++)
                exportRoot["chara_" + t].chara.gotoAndStop(0),
                exportRoot["chara_" + t].chara.body.gotoAndStop(0),
                exportRoot["chara_" + t].chara.body.black.visible = !1,
                exportRoot["chara_b_" + t].chara.gotoAndStop(0),
                exportRoot["chara_b_" + t].chara.body.gotoAndStop(0),
                exportRoot["chara_b_" + t].chara.body.black.alpha = .45;
            exportRoot.voice_flag = window.im_cjs.voice_flag || 0;
            window.im_cjs.voice_flag ? (window.im_cjs.load_voice("scene1"),
            exportRoot.loader.visible = !0,
            exportRoot.addEventListener("tick", z)) : exportRoot.loader.visible = !1;
            createjs.Ticker.addEventListener("tick", function() {
                exportRoot.count++;
                0 == exportRoot.story_point && (exportRoot.count = 33);
                "w" == exportRoot.timing ? exportRoot.m_end && (exportRoot.m_end = !1,
                exportRoot.story_point++,
                exportRoot._u.scene_init()) : 0 < exportRoot.timing ? exportRoot.timing <= exportRoot.count && (exportRoot.m_end = !1,
                exportRoot.story_point++,
                exportRoot._u.scene_init()) : 0 == exportRoot.timing ? (exportRoot.m_end = !1,
                exportRoot.story_point++,
                exportRoot._u.scene_init()) : 0 == exportRoot.auto && 32 < exportRoot.count && (exportRoot.m_end = !1,
                exportRoot.story_point++,
                exportRoot._u.scene_init())
            });
            exportRoot._first_flag = !1;
            exportRoot._u = {
                scene_init: function() {
                    var g = exportRoot.scene_list[exportRoot.story_point]
                      , k = g.timing;
                    g.position = g.position.toLowerCase();
                    g.position = "cc" == g.position ? "c" : g.position;
                    exportRoot.scene = g;
                    exportRoot.count = 0;
                    exportRoot.auto = g.auto;
                    exportRoot._first_flag || "1" != exportRoot.scene_list[exportRoot.story_point].auto || (exportRoot.win.gotoAndPlay(1),
                    exportRoot._first_flag = !0);
                    k ? exportRoot.timing = k : k && 0 == k ? exportRoot.timing = k : g.movement.match("in_") && 0 < g.movement.match("in_").length ? exportRoot.timing = 1 == g.auto ? "out" : "w" : exportRoot.timing = 1 != exportRoot.auto ? 0 : "out";
                    g.position ? (g.offsetx = g.offsetx || 0,
                    g.offsety = g.offsety || g.hight_diff || 0,
                    g.scale = g.scale || 1,
                    this.chara_set(g),
                    this.effect_position_set(g)) : "all_out_fade" == g.movement ? this.chara_motion_set(g) : this.chara_back_set(g);
                    g.movement && !g.chara_effect && ("question_right" == g.movement && (g.chara_effect = "question",
                    g.effect_direction = "R"),
                    "question_left" == g.movement && (g.chara_effect = "question",
                    g.effect_direction = "L"));
                    g.chara_effect && this.effect_set(g);
                    "" != g.bgimg && (g.bgimg.match("change") && 0 < g.bgimg.match("change").length ? this.bg_change(g.bgimg) : this.bg_effect(g.bgimg));
                    "" != g.a_fade && this.screen_effect(g.a_fade);
                    g.button ? (exportRoot.button_1.select_button_mc.button_text.text = g.message,
                    exportRoot.button_1.gotoAndPlay("show")) : exportRoot.button_1.gotoAndStop(0);
                    g.message && !g.button ? (this.message_text_set(g.message, "" == g.cname ? exportRoot.chara_frame_info[g.character_id] ? exportRoot.chara_frame_info[g.character_id].name : g.cname : g.cname),
                    1 != this.win_open && (this.win_open = 1,
                    exportRoot.win.gotoAndPlay("f1"),
                    exportRoot._first_flag || (exportRoot._first_flag = !0))) : 1 == this.win_open && (this.win_open = 0,
                    exportRoot.win.gotoAndPlay("close"));
                    window.debug && window.debug.set();
                    window._debug && window._debug(g);
                    "0" == g.timing && "0" == g.auto && (exportRoot.story_point++,
                    exportRoot._u.scene_init())
                },
                chara_set: function(g) {
                    this.chara_display_check(g);
                    g.character_id && (this.chara_active_set(g),
                    g.movement && this.chara_motion_set(g))
                },
                chara_back_set: function(g) {
                    for (g = 0; 7 > g; g++)
                        if (exportRoot.chara_display_info[exportRoot._all_pos[g]]) {
                            var k = exportRoot.chara_display_info[exportRoot._all_pos[g]]
                              , m = exportRoot.chara_frame_info[k.id].id;
                            k.chain ? (exportRoot["chara_" + m].chara.body.gotoAndStop(k.face - 1),
                            exportRoot["chara_" + m].x = exportRoot.chara_pos_x[k.pos] + k.offsetx,
                            exportRoot["chara_" + m].y = 170 + k.offsety,
                            exportRoot["chara_" + m].scaleX = exportRoot["chara_" + m].scaleY = k.scale,
                            exportRoot["chara_" + m].visible = !0) : (exportRoot["chara_" + m].visible = !1,
                            exportRoot["chara_b_" + m].visible = !0,
                            exportRoot["chara_b_" + m].chara.body.gotoAndStop(k.face - 1),
                            exportRoot["chara_b_" + m].x = exportRoot.chara_pos_x[k.pos] + k.offsetx,
                            exportRoot["chara_b_" + m].y = 170 + k.offsety,
                            exportRoot["chara_b_" + m].scaleX = exportRoot["chara_b_" + m].scaleY = k.scale)
                        }
                },
                chara_display_check: function(g) {
                    exportRoot.chara_display_info[g.position] = null;
                    for (var k = 0; k < exportRoot._all_pos.length; k++)
                        exportRoot.chara_display_info[exportRoot._all_pos[k]] && g.character_id == exportRoot.chara_display_info[exportRoot._all_pos[k]].id && (exportRoot["chara_" + exportRoot.chara_frame_info[exportRoot.chara_display_info[exportRoot._all_pos[k]].id].id].visible = !1,
                        exportRoot.chara_display_info[exportRoot._all_pos[k]] = null)
                },
                chara_active_set: function(g) {
                    var k = g.position
                      , m = 0
                      , y = 0
                      , w = 1
                      , x = !1
                      , u = exportRoot.chara_frame_info[g.character_id].id || 0;
                    g.face = g.face || 1;
                    exportRoot.chara_frame_info[g.character_id] && (m = parseInt(g.offsetx || exportRoot.chara_frame_info[g.character_id].offsetx || 0),
                    y = parseInt(g.offsety || exportRoot.chara_frame_info[g.character_id].offsety || 0),
                    w = g.scale || exportRoot.chara_frame_info[g.character_id].scale || 1);
                    exportRoot["chara_" + u].chara.body.gotoAndStop(g.face - 1);
                    exportRoot["chara_" + u].x = exportRoot.chara_pos_x[k] + m;
                    exportRoot["chara_" + u].y = 170 + y;
                    exportRoot["chara_" + u].scaleX = exportRoot["chara_" + u].scaleY = w;
                    exportRoot["chara_" + u].visible = !0;
                    for (var p = 1; p <= exportRoot.chara_num; p++)
                        exportRoot["chara_b_" + p].visible = !1;
                    for (p = 0; 7 > p; p++)
                        if (exportRoot.chara_display_info[exportRoot._all_pos[p]]) {
                            var q = exportRoot.chara_display_info[exportRoot._all_pos[p]]
                              , r = exportRoot.chara_frame_info[q.id].id;
                            q.chain ? (exportRoot["chara_" + r].chara.body.gotoAndStop(q.face - 1),
                            exportRoot["chara_" + r].x = exportRoot.chara_pos_x[q.pos] + q.offsetx,
                            exportRoot["chara_" + r].y = 170 + q.offsety,
                            exportRoot["chara_" + r].scaleX = exportRoot["chara_" + u].scaleY = q.scale,
                            exportRoot["chara_" + r].visible = !0) : (exportRoot["chara_" + r].visible = !1,
                            exportRoot["chara_b_" + r].visible = !0,
                            exportRoot["chara_b_" + r].chara.body.gotoAndStop(q.face - 1),
                            exportRoot["chara_b_" + r].x = exportRoot.chara_pos_x[q.pos] + q.offsetx,
                            exportRoot["chara_b_" + r].y = 170 + q.offsety,
                            exportRoot["chara_b_" + r].scaleX = exportRoot["chara_b_" + r].scaleY = q.scale)
                        }
                    if (0 == g.auto)
                        x = !0;
                    else
                        for (p = 0; 7 > p; p++)
                            exportRoot.chara_display_info[exportRoot._all_pos[p]] && (exportRoot.chara_display_info[exportRoot._all_pos[p]].chain = !1);
                    null == g.movement.match("out") && (exportRoot.chara_display_info[g.position] = {
                        id: g.character_id,
                        pos: k,
                        face: g.face,
                        offsety: y,
                        offsetx: m,
                        scale: w,
                        chain: x,
                        motion: g.movement
                    })
                },
                chara_motion_set: function(g, k) {
                    if ("all_out_fade" == g.movement)
                        for (i = 0; i < exportRoot._all_pos.length; i++)
                            exportRoot.chara_display_info[exportRoot._all_pos[i]] && (g = exportRoot.chara_frame_info[exportRoot.chara_display_info[exportRoot._all_pos[i]].id].id,
                            exportRoot["chara_" + g].visible ? exportRoot["chara_" + g].gotoAndPlay("out_fade") : exportRoot["chara_b_" + g].gotoAndPlay("out_fade")),
                            exportRoot.chara_display_info[exportRoot._all_pos[i]] = null;
                    else if ("all_out" == g.movement)
                        for (i = 0; i < exportRoot._all_pos.length; i++)
                            exportRoot.chara_display_info[exportRoot._all_pos[i]] && (g = exportRoot.chara_frame_info[exportRoot.chara_display_info[exportRoot._all_pos[i]].id].id,
                            exportRoot["chara_" + g].visible ? exportRoot["chara_" + g].gotoAndPlay("out") : exportRoot["chara_b_" + g].gotoAndPlay("out")),
                            exportRoot.chara_display_info[exportRoot._all_pos[i]] = null;
                    else
                        exportRoot.chara_frame_info[g.character_id] && (k = k || exportRoot.chara_frame_info[g.character_id].id || 0),
                        g.movement && exportRoot["chara_" + k].gotoAndPlay(g.movement)
                },
                effect_set: function(g) {
                    var k = g.effect_direction || "L"
                      , m = g.position || "c";
                    g = parseInt(window.im_cjs.effect_frame_info[g.chara_effect]);
                    exportRoot["effect_target_" + m] && (exportRoot["effect_target_" + m].visible = !0,
                    exportRoot["effect_target_" + m].gotoAndStop(g),
                    exportRoot["effect_target_" + m]["eff_" + (g + 1)].gotoAndPlay(0),
                    exportRoot["effect_target_" + m]["eff_" + (g + 1)].gotoAndPlay(k))
                },
                effect_position_set: function(g) {
                    var k = g.position = g.position || "c";
                    exportRoot["effect_target_" + k].x = exportRoot.chara_pos_x[k] + parseInt(g.offsetx);
                    exportRoot["effect_target_" + k].y = 110 + parseInt(g.offsety)
                },
                message_text_set: function(g, k) {
                    g = g.replace(/<br>/g, "\n");
                    5 < k.length ? exportRoot.win.win_base.gotoAndStop(2) : 3 < k.length ? exportRoot.win.win_base.gotoAndStop(1) : exportRoot.win.win_base.gotoAndStop(0);
                    exportRoot.win.name_mc.name_text.text = k;
                    exportRoot.win.message_text.message.text = g
                },
                bg_change: function(g, k) {
                    g = g || "no";
                    k = k || 0;
                    var m = exportRoot.bg_base.bg.bg_num;
                    g.match("change") && 0 < g.match("change").length ? (k = g.substr(g.length - 1, g.length),
                    exportRoot._bg_target = (0 == k ? 10 : k) - 1,
                    m.bg_mask.gotoAndPlay("in_out")) : (m.bg_mask.gotoAndPlay(g),
                    m.gotoAndStop(k - 1))
                },
                bg_effect: function(g) {
                    if (!g.match(/^[0-9]+$/))
                        switch (g) {
                        case "off":
                        case "on":
                            exportRoot.bg_base.gotoAndPlay("turn_" + g);
                            break;
                        case "change_moment":
                            exportRoot.bg_base.bg.gotoAndStop(0);
                            break;
                        case "light_short":
                        case "light_long":
                            exportRoot.bg_base.gotoAndPlay(g);
                            break;
                        case "CtoR":
                        case "CtoL":
                        case "RtoC":
                        case "LtoC":
                            exportRoot.bg_base.bg.gotoAndPlay(g)
                        }
                },
                screen_effect: function(g) {
                    exportRoot.screen_eff.gotoAndPlay(g)
                },
                _ticker: function() {
                    window.im_cjs.loaded_check() && (exportRoot.loader.visible = !1,
                    exportRoot.removeEventListener("tick", exportRoot._u._ticker))
                }
            };
            exportRoot._u.screen_click_func = function(g) {
                if (exportRoot.loader.visible)
                    exportRoot.screen_btn.off("click", exportRoot._screen_btn_listener),
                    exportRoot._screen_btn_listener = exportRoot.screen_btn.on("click", exportRoot._u.screen_click_func, this, !0);
                else {
                    exportRoot.screen_btn.off("click", exportRoot._screen_btn_listener);
                    if (exportRoot.scene_list.length - 1 <= exportRoot.story_point)
                        if ("out" == exportRoot.toggle_flag)
                            exportRoot.toggle_flag = "in",
                            exportRoot.win.gotoAndPlay("in");
                        else {
                            exportRoot.win.toggle_btn.mouseEnabled = !1;
                            if (0 == exportRoot.event_type) {
                                window.location.href = exportRoot.back_url;
                                return
                            }
                            if ("end" == exportRoot.scene_name) {
                                window.location.href = exportRoot.back_url;
                                return
                            }
                            if ("op" == exportRoot.scene_name && exportRoot.op_btn_flag) {
                                exportRoot.opmc.pusher.gotoAndPlay("pushed");
                                return
                            }
                            "main" == exportRoot.scene_name && (1 == exportRoot.event_type || 4 == exportRoot.event_type ? (exportRoot.gotoAndPlay("op"),
                            exportRoot.scene_name = "op") : (exportRoot.gotoAndPlay("end"),
                            exportRoot.scene_name = "end"))
                        }
                    else
                        switch (exportRoot.scene_name) {
                        case "title":
                            exportRoot.scene_name = "main";
                            exportRoot.gotoAndStop("main");
                            exportRoot._u.scene_init();
                            window.im_cjs.voice_flag && (window.im_cjs.voice_play(),
                            window.im_cjs.load_voice("scene" + (exportRoot.story_point + 2)),
                            exportRoot.loader.visible = !0,
                            exportRoot.addEventListener("tick", exportRoot._u._ticker),
                            exportRoot.stop());
                            g.stopPropagation();
                            break;
                        case "main":
                            if ("out" == exportRoot.toggle_flag)
                                exportRoot.toggle_flag = "in",
                                exportRoot.win.gotoAndPlay("in");
                            else {
                                exportRoot.story_point++;
                                for (var k = 0; 7 > k; k++)
                                    exportRoot.chara_display_info[exportRoot._all_pos[k]] && (exportRoot["effect_target_" + exportRoot._all_pos[k]].visible = !1);
                                exportRoot._u.scene_init();
                                window.im_cjs.voice_flag && (window.im_cjs.voice_play(),
                                exportRoot.scene_list.length > exportRoot.story_point + 1 && (window.im_cjs.load_voice("scene" + (exportRoot.story_point + 2)),
                                exportRoot.loader.visible = !0,
                                exportRoot.addEventListener("tick", exportRoot._u._ticker),
                                exportRoot.stop()))
                            }
                        }
                    g.stopPropagation();
                    exportRoot.screen_btn.off("click", exportRoot._screen_btn_listener);
                    setTimeout(function() {
                        exportRoot._screen_btn_listener = exportRoot.screen_btn.on("click", exportRoot._u.screen_click_func, this, !0)
                    }, 50)
                }
            }
            ;
            this.skip_btn.addEventListener("click", function(g) {
                window.location.href = exportRoot.back_url;
                g.stopPropagation()
            });
            this.win.toggle_btn.addEventListener("click", function(g) {
                "out" == exportRoot.toggle_flag ? (exportRoot.toggle_flag = "in",
                exportRoot.win.gotoAndPlay("in")) : (exportRoot.toggle_flag = "out",
                exportRoot.win.gotoAndPlay("out"))
            })
        }
        ;
        this.frame_1 = function() {
            this.stop();
            "no_title" == exportRoot.title_name ? (exportRoot.scene_name = "main",
            exportRoot.gotoAndStop("main"),
            exportRoot._u.scene_init(),
            exportRoot.place_set.visible = !1) : exportRoot.place_set && (exportRoot.place_set.place_text.title.text = exportRoot.title_name);
            exportRoot.esp && (exportRoot._screen_btn_listener = exportRoot.screen_btn.on("click", exportRoot._u.screen_click_func, this, !0),
            exportRoot.esp = !1)
        }
        ;
        this.frame_10 = function() {
            exportRoot.place_set.gotoAndPlay("place_play");
            this.stop()
        }
        ;
        this.frame_20 = function() {
            console.warn("end of");
            this.end_mask.visible = !0
        }
        ;
        this.frame_27 = function() {
            this.stop()
        }
        ;
        this.frame_41 = function() {
            this.stop();
            this.opmc.gotoAndPlay("start")
        }
        ;
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(10).call(this.frame_20).wait(7).call(this.frame_27).wait(14).call(this.frame_41).wait(1));
        this.instance = new b.shield;
        this.instance.parent = this;
        this.instance.setTransform(120, 140);
        this.timeline.addTween(a.Tween.get(this.instance).wait(42));
        this.loader = new b.voice_loader_container;
        this.loader.name = "loader";
        this.loader.parent = this;
        this.loader.setTransform(190.05, 12, 1, 1, 0, 0, 0, -50.1, 11);
        this.timeline.addTween(a.Tween.get(this.loader).wait(42));
        this.mccontinue = new b._continue;
        this.mccontinue.name = "mccontinue";
        this.mccontinue.parent = this;
        this.mccontinue.setTransform(119.9, 165.3, 1, 1, 0, 0, 0, -.1, .3);
        this.mccontinue._off = !0;
        this.timeline.addTween(a.Tween.get(this.mccontinue).wait(27).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 3).wait(12));
        this.mcend = new b._continue_1;
        this.mcend.name = "mcend";
        this.mcend.parent = this;
        this.mcend.setTransform(203.95, 240.95, .9773, .9773, 0, 0, 0, -.1, .3);
        this.mcend.alpha = .8008;
        this.mcend._off = !0;
        this.timeline.addTween(a.Tween.get(this.mcend).wait(27).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 3).wait(12));
        this.end_mask = new b.dark;
        this.end_mask.name = "end_mask";
        this.end_mask.parent = this;
        this.end_mask.setTransform(124.4, 174.4, 1.5, 1.5, 0, 0, 0, 1.6, -3.4);
        this.end_mask.alpha = .4883;
        this.timeline.addTween(a.Tween.get(this.end_mask).wait(20).to({
            regX: 0,
            regY: -5,
            x: 121,
            y: 128.95,
            alpha: .1016
        }, 0).wait(1).to({
            regY: 0,
            x: 121.0189,
            y: 136.4802,
            alpha: .1095
        }, 0).wait(1).to({
            x: 121.0898,
            y: 136.5932,
            alpha: .1391
        }, 0).wait(1).to({
            x: 121.2464,
            y: 136.8428,
            alpha: .2046
        }, 0).wait(1).to({
            x: 121.5156,
            y: 137.2722,
            alpha: .3171
        }, 0).wait(1).to({
            x: 121.771,
            y: 137.6795,
            alpha: .4239
        }, 0).wait(1).to({
            x: 121.8941,
            y: 137.8757,
            alpha: .4754
        }, 0).wait(1).to({
            regX: 1.6,
            regY: -3.4,
            x: 122,
            y: 130.5,
            alpha: .4883
        }, 0).to({
            _off: !0
        }, 3).wait(12));
        this.opmc = new b.mc_op;
        this.opmc.name = "opmc";
        this.opmc.parent = this;
        this.opmc.setTransform(120, 155, 1, 1, 0, 0, 0, 120, 155);
        this.opmc._off = !0;
        this.timeline.addTween(a.Tween.get(this.opmc).wait(30).to({
            _off: !1
        }, 0).wait(12));
        this.instance_1 = new b.gr_white_cover;
        this.instance_1.parent = this;
        this.instance_1.setTransform(120, 160);
        this.instance_1.alpha = 0;
        this.instance_1._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(30).to({
            _off: !1
        }, 0).to({
            alpha: 1
        }, 10, a.Ease.get(-1)).to({
            _off: !0
        }, 1).wait(1));
        this.instance_2 = new b.pusher_next;
        this.instance_2.parent = this;
        this.instance_2.setTransform(120, 250);
        this.instance_2._off = !0;
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 9).wait(32));
        this.skip_btn = new b.whole_skip;
        this.skip_btn.name = "skip_btn";
        this.skip_btn.parent = this;
        this.skip_btn.setTransform(211.3, 15.35, .7358, .7358, 0, 0, 0, 52.1, 10);
        this.timeline.addTween(a.Tween.get(this.skip_btn).to({
            _off: !0
        }, 30).wait(12));
        this.win = new b.win_mc;
        this.win.name = "win";
        this.win.parent = this;
        this.win.setTransform(2.95, 185.1, 1.0001, .9997, 0, 0, 0, .2, .1);
        this.timeline.addTween(a.Tween.get(this.win).to({
            _off: !0
        }, 41).wait(1));
        this.button_1 = new b.button_2;
        this.button_1.name = "button_1";
        this.button_1.parent = this;
        this.button_1.setTransform(122.5, 229.1);
        this.timeline.addTween(a.Tween.get(this.button_1).to({
            _off: !0
        }, 41).wait(1));
        this.screen_btn = new b.screen_btn;
        this.screen_btn.name = "screen_btn";
        this.screen_btn.parent = this;
        this.screen_btn.setTransform(120.05, 145.05, .981, .981, 0, 0, 0, 120.1, 145.1);
        this.timeline.addTween(a.Tween.get(this.screen_btn).wait(42));
        this.place_set = new b.place_set;
        this.place_set.name = "place_set";
        this.place_set.parent = this;
        this.place_set.setTransform(120.1, 140.15, .9625, .9625, 0, 0, 0, 120.1, 16.1);
        this.timeline.addTween(a.Tween.get(this.place_set).to({
            _off: !0
        }, 30).wait(12));
        this.screen_eff = new b.fx_fade;
        this.screen_eff.name = "screen_eff";
        this.screen_eff.parent = this;
        this.screen_eff.setTransform(0, -20);
        this.timeline.addTween(a.Tween.get(this.screen_eff).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_cr = new b.effect_target;
        this.effect_target_cr.name = "effect_target_cr";
        this.effect_target_cr.parent = this;
        this.effect_target_cr.setTransform(187.6, -102.3, .9827, .9827, 0, 0, 0, .1, 0);
        this.timeline.addTween(a.Tween.get(this.effect_target_cr).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_cl = new b.effect_target;
        this.effect_target_cl.name = "effect_target_cl";
        this.effect_target_cl.parent = this;
        this.effect_target_cl.setTransform(89.85, -102.2, .9828, .9828, 0, 0, 0, .3, .1);
        this.timeline.addTween(a.Tween.get(this.effect_target_cl).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_rr = new b.effect_target;
        this.effect_target_rr.name = "effect_target_rr";
        this.effect_target_rr.parent = this;
        this.effect_target_rr.setTransform(285.75, -102.4, .9827, .9827, 0, 0, 0, .4, -.1);
        this.timeline.addTween(a.Tween.get(this.effect_target_rr).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_r = new b.effect_target;
        this.effect_target_r.name = "effect_target_r";
        this.effect_target_r.parent = this;
        this.effect_target_r.setTransform(236.75, -102.4, .9827, .9827, 0, 0, 0, .3, -.1);
        this.timeline.addTween(a.Tween.get(this.effect_target_r).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_ll = new b.effect_target;
        this.effect_target_ll.name = "effect_target_ll";
        this.effect_target_ll.parent = this;
        this.effect_target_ll.setTransform(-7.85, -102.5, .9826, .9826, 0, 0, 0, .5, -.2);
        this.timeline.addTween(a.Tween.get(this.effect_target_ll).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_l = new b.effect_target;
        this.effect_target_l.name = "effect_target_l";
        this.effect_target_l.parent = this;
        this.effect_target_l.setTransform(41.1, -102.4, .9827, .9827, 0, 0, 0, .5, -.1);
        this.timeline.addTween(a.Tween.get(this.effect_target_l).to({
            _off: !0
        }, 30).wait(12));
        this.effect_target_c = new b.effect_target;
        this.effect_target_c.name = "effect_target_c";
        this.effect_target_c.parent = this;
        this.effect_target_c.setTransform(138.95, -102.4, .9828, .9828, 0, 0, 0, .4, -.1);
        this.timeline.addTween(a.Tween.get(this.effect_target_c).to({
            _off: !0
        }, 30).wait(12));
        this.chara_1 = new b.chara_1;
        this.chara_1.name = "chara_1";
        this.chara_1.parent = this;
        this.chara_1.setTransform(-232, 592.95, 1, 1, 0, 0, 0, 141, 199.5);
        this.timeline.addTween(a.Tween.get(this.chara_1).to({
            _off: !0
        }, 41).wait(1));
        this.chara_b_1 = new b.chara_1;
        this.chara_b_1.name = "chara_b_1";
        this.chara_b_1.parent = this;
        this.chara_b_1.setTransform(-236.95, 1002.4, 1, 1, 0, 0, 0, 141, 199.5);
        this.timeline.addTween(a.Tween.get(this.chara_b_1).to({
            _off: !0
        }, 41).wait(1));
        this.black_mask = new b.black_mask;
        this.black_mask.name = "black_mask";
        this.black_mask.parent = this;
        this.black_mask.setTransform(120, 145);
        this.timeline.addTween(a.Tween.get(this.black_mask).to({
            _off: !0
        }, 41).wait(1));
        this.bg_base = new b.bg;
        this.bg_base.name = "bg_base";
        this.bg_base.parent = this;
        this.bg_base.setTransform(0, -10);
        this.timeline.addTween(a.Tween.get(this.bg_base).wait(42))
    }
    ).prototype = f = new a.MovieClip;
    f.nominalBounds = new a.Rectangle(-316.9,-240,1624.1,1492.4);
    b.properties = {
        id: "story_generator_n1",
        width: 240,
        height: 280,
        fps: 12,
        color: "#000000",
        opacity: 1,
        manifest: [{
            src: "images/bg1.jpg",
            id: "story_generator_n1_bg1"
        }, {
            src: "images/bg10.jpg",
            id: "story_generator_n1_bg10"
        }, {
            src: "images/bg2.jpg",
            id: "story_generator_n1_bg2"
        }, {
            src: "images/bg3.jpg",
            id: "story_generator_n1_bg3"
        }, {
            src: "images/bg4.jpg",
            id: "story_generator_n1_bg4"
        }, {
            src: "images/bg5.jpg",
            id: "story_generator_n1_bg5"
        }, {
            src: "images/bg6.jpg",
            id: "story_generator_n1_bg6"
        }, {
            src: "images/bg7.jpg",
            id: "story_generator_n1_bg7"
        }, {
            src: "images/bg8.jpg",
            id: "story_generator_n1_bg8"
        }, {
            src: "images/bg9.jpg",
            id: "story_generator_n1_bg9"
        }, {
            src: "images/bg_op.jpg",
            id: "story_generator_n1_bg_op"
        }, {
            src: "images/button_blue.png",
            id: "story_generator_n1_button_blue"
        }, {
            src: "images/c1_b.png",
            id: "story_generator_n1_c1_b"
        }, {
            src: "images/c1_face1.png",
            id: "story_generator_n1_c1_face1"
        }, {
            src: "images/c1_face10.png",
            id: "story_generator_n1_c1_face10"
        }, {
            src: "images/c1_face11.png",
            id: "story_generator_n1_c1_face11"
        }, {
            src: "images/c1_face12.png",
            id: "story_generator_n1_c1_face12"
        }, {
            src: "images/c1_face2.png",
            id: "story_generator_n1_c1_face2"
        }, {
            src: "images/c1_face3.png",
            id: "story_generator_n1_c1_face3"
        }, {
            src: "images/c1_face4.png",
            id: "story_generator_n1_c1_face4"
        }, {
            src: "images/c1_face5.png",
            id: "story_generator_n1_c1_face5"
        }, {
            src: "images/c1_face6.png",
            id: "story_generator_n1_c1_face6"
        }, {
            src: "images/c1_face7.png",
            id: "story_generator_n1_c1_face7"
        }, {
            src: "images/c1_face8.png",
            id: "story_generator_n1_c1_face8"
        }, {
            src: "images/c1_face9.png",
            id: "story_generator_n1_c1_face9"
        }, {
            src: "images/event_logo.png",
            id: "story_generator_n1_event_logo"
        }, {
            src: "images/event_push.png",
            id: "story_generator_n1_event_push"
        }, {
            src: "images/event_push_b.png",
            id: "story_generator_n1_event_push_b"
        }, {
            src: "images/event_push_w.png",
            id: "story_generator_n1_event_push_w"
        }, {
            src: "images/fp_kirakira.png",
            id: "story_generator_n1_fp_kirakira"
        }, {
            src: "images/fp_kirakira_40x40.png",
            id: "story_generator_n1_fp_kirakira_40x40"
        }, {
            src: "images/tie_sp.png",
            id: "story_generator_n1_tie_sp"
        }],
        preloads: []
    };
    (b.Stage = function(c) {
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
        this.getChildAt(0).gotoAndStop(b.properties.fps * c / 1E3)
    }
    ;
    f.getDuration = function() {
        return this.getChildAt(0).totalFrames / b.properties.fps * 1E3
    }
    ;
    f.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / b.properties.fps * 1E3
    }
    ;
    n.bootcompsLoaded = n.bootcompsLoaded || [];
    n.bootstrapListeners || (n.bootstrapListeners = []);
    n.bootstrapCallback = function(c) {
        n.bootstrapListeners.push(c);
        if (0 < n.bootcompsLoaded.length)
            for (var d = 0; d < n.bootcompsLoaded.length; ++d)
                c(n.bootcompsLoaded[d])
    }
    ;
    n.compositions = n.compositions || {};
    n.compositions.story_generator_n1 = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return b
        },
        getSpriteSheet: function() {
            return D
        },
        getImages: function() {
            return l
        }
    };
    n.compositionLoaded = function(c) {
        n.bootcompsLoaded.push(c);
        for (var d = 0; d < n.bootstrapListeners.length; d++)
            n.bootstrapListeners[d](c)
    }
    ;
    n.getComposition = function(c) {
        return n.compositions[c]
    }
    ;
    n.makeResponsive = function(c, d, e, z, t) {
        function g() {
            var w = b.properties.width
              , x = b.properties.height
              , u = window.innerWidth
              , p = window.innerHeight
              , q = window.devicePixelRatio || 1
              , r = u / w
              , A = p / x
              , v = 1;
            if (c)
                if ("width" == d && k == u || "height" == d && m == p)
                    v = y;
                else if (e)
                    1 == z ? v = Math.min(r, A) : 2 == z && (v = Math.max(r, A));
                else if (u < w || p < x)
                    v = Math.min(r, A);
            t[0].width = w * q * v;
            t[0].height = x * q * v;
            t.forEach(function(B) {
                B.style.width = w * v + "px";
                B.style.height = x * v + "px"
            });
            stage.scaleX = q * v;
            stage.scaleY = q * v;
            k = u;
            m = p;
            y = v;
            stage.tickOnUpdate = !1;
            stage.update();
            stage.tickOnUpdate = !0
        }
        var k, m, y = 1;
        window.addEventListener("resize", g);
        g()
    }
}
)(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
