(function(cjs, an) {

    var p;
    // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [];

    // symbols:
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

    (lib.good_circle = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["rgba(255,244,194,0.2)", "#FFCF58"], [0, 1], 0, 0, 0, 0, 0, 47.8).s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.good_circle, new cjs.Rectangle(-47.5,-47.5,95,95), null);

    (lib.flower2_good = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFCC66").s().p("AgXA3QgOgGAIgTQAGgOANgMQgOABgRgGQgTgIAGgOQAGgOATAIQAQAIAKALQgBgOAGgRQAJgTANAGQAOAHgIASQgHAQgMAKQAOgBARAGQATAJgGANQgGAOgTgIQgQgHgKgMQABAOgGARQgHAOgJAAIgGgBg");
        this.shape.setTransform(0.0156, 0.025);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-5.6,-5.6,11.3,11.3);

    (lib.flower1_good = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFF99").s().p("AgCBHQgJgcADgZQgTASgbAJQggAKgIgXQgIgYAhgKQAbgJAZADQgRgRgKgdQgKggAXgIQAYgIAKAhQAJAbgDAaQAQgRAegKQAggLAIAXQAIAYghAKQgbAJgagDQASARAJAdQAMAggYAIQgFABgFAAQgQAAgIgZg");
        this.shape.setTransform(0.017, -0.0159);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9.6,-9.6,19.299999999999997,19.299999999999997);

    (lib.good_effect = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_6 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

        // flower3
        this.instance = new lib.flower2_good("synched",0);
        this.instance.parent = this;
        this.instance.setTransform(17.35, 8.25, 0.7153, 0.7153);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            scaleX: 0.9946,
            scaleY: 0.9946,
            rotation: -144.6153,
            x: 40.9303,
            y: 5.5987,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: 48.2171,
            y: 4.7794,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: 53.1162,
            y: 4.2286,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: 59.0709,
            y: 3.5591,
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
        }, 1).wait(1));

        // flower2
        this.instance_1 = new lib.flower2_good("synched",0);
        this.instance_1.parent = this;
        this.instance_1.setTransform(-15.2, -8.55);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({
            scaleX: 1.2152,
            scaleY: 1.2152,
            rotation: -144.6153,
            x: -29.8423,
            y: -25.4017,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.2817,
            scaleY: 1.2817,
            rotation: -189.3044,
            x: -34.3671,
            y: -30.6092,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.3264,
            scaleY: 1.3264,
            rotation: -219.35,
            x: -37.4092,
            y: -34.1104,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.3808,
            scaleY: 1.3808,
            rotation: -255.8693,
            x: -41.1068,
            y: -38.3659,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.5357,
            scaleY: 1.5357,
            rotation: -360,
            x: -51.65,
            y: -50.5,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // flower1
        this.instance_2 = new lib.flower1_good("synched",0);
        this.instance_2.parent = this;
        this.instance_2.setTransform(14.75, -9.5, 0.5052, 0.5052);

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({
            scaleX: 0.7461,
            scaleY: 0.7461,
            rotation: -144.6153,
            x: 32.4453,
            y: -26.432,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 0.8206,
            scaleY: 0.8206,
            rotation: -189.3044,
            x: 37.9135,
            y: -31.6644,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 0.8706,
            scaleY: 0.8706,
            rotation: -219.35,
            x: 41.5899,
            y: -35.1822,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 0.9314,
            scaleY: 0.9314,
            rotation: -255.8693,
            x: 46.0585,
            y: -39.458,
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
        }, 1).wait(1));

        // flower3
        this.instance_3 = new lib.flower2_good("synched",0);
        this.instance_3.parent = this;
        this.instance_3.setTransform(-6.2, 18.25, 0.7153, 0.7153);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({
            scaleX: 0.9946,
            scaleY: 0.9946,
            rotation: -144.6153,
            x: -23.0919,
            y: 34.941,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 1.081,
            scaleY: 1.081,
            rotation: -189.3044,
            x: -28.3118,
            y: 40.0989,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.139,
            scaleY: 1.139,
            rotation: -219.35,
            x: -31.8213,
            y: 43.5667,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.2095,
            scaleY: 1.2095,
            rotation: -255.8693,
            x: -36.087,
            y: 47.7816,
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
        }, 1).wait(1));

        // flower3
        this.instance_4 = new lib.flower1_good("synched",0);
        this.instance_4.parent = this;
        this.instance_4.setTransform(7.35, 16.85, 0.3411, 0.3411);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({
            scaleX: 0.631,
            scaleY: 0.631,
            rotation: -144.6153,
            x: 14.7013,
            y: 38.5222,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 0.7205,
            scaleY: 0.7205,
            rotation: -189.3044,
            x: 16.973,
            y: 45.2194,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 0.7807,
            scaleY: 0.7807,
            rotation: -219.35,
            x: 18.5003,
            y: 49.722,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 0.8539,
            scaleY: 0.8539,
            rotation: -255.8693,
            x: 20.3567,
            y: 55.1949,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 1.0626,
            scaleY: 1.0626,
            rotation: -360,
            x: 25.65,
            y: 70.8,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // flower2
        this.instance_5 = new lib.flower1_good("synched",0);
        this.instance_5.parent = this;
        this.instance_5.setTransform(-16.35, 8.6, 0.4926, 0.4926);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({
            scaleX: 0.6688,
            scaleY: 0.6688,
            rotation: -144.6153,
            x: -39.4483,
            y: 7.8167,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 0.7233,
            scaleY: 0.7233,
            rotation: -189.3044,
            x: -46.5861,
            y: 7.5746,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 0.7599,
            scaleY: 0.7599,
            rotation: -219.35,
            x: -51.3851,
            y: 7.4119,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 0.8044,
            scaleY: 0.8044,
            rotation: -255.8693,
            x: -57.218,
            y: 7.214,
            alpha: 0.4447
        }, 0).wait(1).to({
            scaleX: 0.9313,
            scaleY: 0.9313,
            rotation: -360,
            x: -73.85,
            y: 6.65,
            alpha: 0.2188
        }, 0).to({
            _off: true
        }, 1).wait(1));

        // flower1
        this.instance_6 = new lib.flower1_good("synched",0);
        this.instance_6.parent = this;
        this.instance_6.setTransform(0.45, -15.35, 0.596, 0.596, -44.999);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({
            scaleX: 0.904,
            scaleY: 0.904,
            rotation: 43.8469,
            x: -1.0162,
            y: -39.8944,
            alpha: 0.6862
        }, 0).wait(1).to({
            scaleX: 0.9992,
            scaleY: 0.9992,
            rotation: -39.9453,
            x: -1.4693,
            y: -47.4792,
            alpha: 0.5892
        }, 0).wait(1).to({
            scaleX: 1.0632,
            scaleY: 1.0632,
            rotation: -96.2809,
            x: -1.774,
            y: -52.5786,
            alpha: 0.524
        }, 0).wait(1).to({
            scaleX: 1.141,
            scaleY: 1.141,
            rotation: -164.7547,
            x: -2.1442,
            y: -58.7767,
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
        }, 1).wait(1));

        // en
        this.instance_7 = new lib.good_circle();
        this.instance_7.parent = this;
        this.instance_7.setTransform(0, 0, 0.5577, 0.5577);
        this.instance_7.alpha = 0.6016;

        this.timeline.addTween(cjs.Tween.get(this.instance_7).to({
            scaleX: 1.2949,
            scaleY: 1.2949,
            alpha: 0.3984
        }, 1, cjs.Ease.get(1)).to({
            scaleX: 1.7161,
            scaleY: 1.7161,
            alpha: 0.0508
        }, 4, cjs.Ease.get(-1)).to({
            _off: true
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-82.7,-89.6,166.7,171.1);

    (lib.replace = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            L: 1,
            R: 4
        });

        // timeline functions:
        this.frame_0 = function() {
            this.stop();
        }
        this.frame_1 = function() {
            this.stop();
        }
        this.frame_4 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(3));

        // effect_4
        this.L = new lib.good_effect();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(0, 0, 1.4624, 1.4624);
        this.L._off = true;

        this.timeline.addTween(cjs.Tween.get(this.L).wait(1).to({
            _off: false
        }, 0).wait(6));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-38.7,-38.7,77.5,77.5);

    // stage content:
    (lib.eff_flower_yellow = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.replace = new lib.replace();
        this.replace.name = "replace";
        this.replace.parent = this;
        this.replace.setTransform(115, 140);

        this.timeline.addTween(cjs.Tween.get(this.replace).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,0,0,0);
    // library properties:
    lib.properties = {
        id: 'eff_flower_yellow',
        width: 230,
        height: 280,
        fps: 12,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [],
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
    an.compositions['eff_flower_yellow'] = {
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
