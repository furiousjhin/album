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

    (lib.chord2 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FC8D05").s().p("AAZDjQgegIgGgUQgGgVAUgUQAWgUAkgJQAlgIAeAIIAMAEIAAjNQgJgHh6hUIAADGIADAHQAGAUgUAUQgWAUglAJQgkAIgegIQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3IBXA8QBIAzANALQABAKAAB9IABB8IADAHQAGAUgVAUQgWAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(16.66, 23.1125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.chord2, new cjs.Rectangle(0,0,33.3,46.2), null);

    (lib.chord1 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FCE05F").s().p("Ah3CpQgfgIgGgUQgGgVAVgUQAWgUAkgJQAlgIAeAIIAMAEIAAj3QAIAIAiAKQArALASAJQBKAjgTBgQgShGg9gXQgUgHgVgCIgRAAIAADGIADAHQAGAUgVAUQgVAUglAJQgSAEgQAAQgRAAgPgEg");
        this.shape.setTransform(15.8526, 17.3125);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.chord1, new cjs.Rectangle(0,0,31.7,34.6), null);

    (lib.chord = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_14 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

        // chord
        this.instance = new lib.chord2();
        this.instance.parent = this;
        this.instance.setTransform(-36, 76.7, 0.5582, 0.5582, -0.2819, 0, 0, 15.7, 17.4);
        this.instance.alpha = 0.1016;
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({
            _off: false
        }, 0).to({
            regX: 15.8,
            scaleX: 0.9628,
            scaleY: 0.9628,
            rotation: 14.3457,
            guide: {
                path: [-35.9, 76.7, -38.6, 65.6, -37.5, 54.3, -35.4, 34.2, -20.7, 22.9, -17.1, 20.1, -14.2, 16.9]
            },
            alpha: 0.6602
        }, 5).wait(1).to({
            regX: 16.7,
            regY: 23.1,
            scaleX: 1.0446,
            scaleY: 1.0446,
            rotation: -0.4369,
            x: -5.6,
            y: 11.55,
            alpha: 0.7734
        }, 0).wait(1).to({
            scaleX: 1.1264,
            scaleY: 1.1264,
            rotation: -15.2195,
            x: 0.2,
            y: -1.85,
            alpha: 0.8867
        }, 0).wait(1).to({
            regX: 15.8,
            regY: 17.3,
            scaleX: 1.2081,
            scaleY: 1.2081,
            rotation: -30.002,
            x: -2.25,
            y: -20.85,
            alpha: 1
        }, 0).to({
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: -5.5524,
            guide: {
                path: [-2.3, -20.8, -2.4, -21.5, -2.6, -22.2, -4, -29.1, -7.5, -33]
            },
            alpha: 0
        }, 3).to({
            _off: true
        }, 1).wait(1));

        // chord
        this.instance_1 = new lib.chord1();
        this.instance_1.parent = this;
        this.instance_1.setTransform(-23.5, 77.25, 0.9892, 0.9892, -44.9988, 0, 0, 15.8, 17.4);
        this.instance_1.alpha = 0.1016;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({
            regY: 17.3,
            scaleX: 1.2082,
            scaleY: 1.2082,
            rotation: 29.9993,
            guide: {
                path: [-23.5, 77.2, -22.3, 75.1, -21.1, 72.9, -6.9, 48, 13.4, 39.4, 33.4, 31.3, 43.7, 10, 48.3, 0.5, 50, -7.9]
            },
            alpha: 1
        }, 7).to({
            rotation: 29.9993,
            x: 62.35,
            y: -32.75,
            alpha: 0
        }, 3).to({
            _off: true
        }, 1).wait(4));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-49,-60.4,138.4,201.20000000000002);

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
        this.L = new lib.chord();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(-37.6, -14.6, 0.8126, 0.8126, -61.4551, 0, 0, -23.6, 77);

        this.R = new lib.chord();
        this.R.name = "R";
        this.R.parent = this;
        this.R.setTransform(17.45, -28.65, 0.8126, 0.8126, 8.9547, 0, 0, -23.6, 77);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.L
            }]
        }, 1).to({
            state: [{
                t: this.R
            }]
        }, 3).wait(3));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-54.3,-47.2,90.3,48.800000000000004);

    // stage content:
    (lib.eff_chord = function(mode, startPosition, loop) {
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
        id: 'eff_chord',
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
    an.compositions['eff_chord'] = {
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
