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

    (lib.question = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // レイヤー_3
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["#FFFFFF", "#FFDDB6"], [0.463, 1], 0, -17.7, 0.3, 17.7).s().p("Ag+CaIAAgPQAAgmARgbQAPgaAjgXQAUgMAIgLQAJgLAAgRQAAgSgNgKQgNgLgWgBQgXABgNARQgOAQAAAgIh4gRQABgwAWgiQAXgjApgSQAogSAzgBQA0AAAnARQAnARAWAeQAXAeAAAoQABApgQAeQgPAdgjAWIgcATQgMAIgGALQgIAKAAAOIABAMIABAMIh3ABIgDgSg");
        this.shape.setTransform(-0.2742, -7.725);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFE1BF").s().p("AhBg7ICDgBIABB4IiEABg");
        this.shape_1.setTransform(-0.2, 19.175);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_1
            }, {
                t: this.shape
            }]
        }).wait(1));

        // レイヤー_2
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f().s("#FF8C00").ss(3, 1, 1).p("ABRjIQgigPgtAAQgrAAgjAPQgjAQgUAdQgUAdgBAqIBoAQQAAgcAMgOQALgPAUAAQATABALAJQALAKAAAPQAAAOgIAKQgHAKgRAKQgeAUgOAWQgOAXAAAgQAAAHAAAGQABAIABAHIBmAAQgBgFAAgFQgBgFAAgFQAAgMAHgJQAGgJAKgGQALgIANgJQAfgSANgZQAOgaAAgkQAAgigUgaQgSgagigPgAA3BvIhwAAIAABpIBwAAg");
        this.shape_2.setTransform(-0.1696, 0.1705, 1.1607, 1.1607, -0.47);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#FFFFFF").s().p("Ag5DYIAAhpIBwAAIAABpgAg0BQIgCgQIAAgNQAAggAOgWQAOgXAegTQARgLAHgJQAIgKAAgPQAAgPgLgKQgLgIgTgCQgUAAgLAPQgMAOAAAcIhogPQABgqAUgdQAUgeAjgQQAjgPArAAQAtABAiAOQAiAPASAaQAUAaAAAiQAAAkgOAaQgNAZgfATIgYAQQgKAGgGAJQgHAJAAANIABAKIABAKg");
        this.shape_3.setTransform(-0.1696, 0.1705, 1.1607, 1.1607, -0.47);

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.shape_3
            }, {
                t: this.shape_2
            }]
        }).wait(1));

    }
    ).prototype = getMCSymbolPrototype(lib.question, new cjs.Rectangle(-19.5,-26.4,38.5,53.2), null);

    (lib.mc_question = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // timeline functions:
        this.frame_0 = function() {
            this.play();
        }
        this.frame_22 = function() {
            this.stop();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(1));

        // question
        this.instance = new lib.question();
        this.instance.parent = this;
        this.instance.setTransform(-0.75, -1.5);
        this.instance.alpha = 0;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: -0.2,
            regY: 0.2,
            x: -0.45,
            y: -15.85,
            alpha: 0.5556
        }, 0).wait(1).to({
            x: -0.2,
            y: -24.55,
            alpha: 0.8889
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0.1,
            y: -27.7,
            alpha: 1
        }, 0).wait(1).to({
            regX: -0.2,
            regY: 0.2,
            x: -0.1,
            y: -26.8
        }, 0).wait(1).to({
            y: -24.75
        }, 0).wait(1).to({
            y: -21.35
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0.1,
            y: -16.85
        }, 0).to({
            y: -18.35
        }, 2).wait(8).to({
            regX: -0.2,
            regY: 0.2,
            x: -0.1,
            y: -17.5,
            alpha: 0.9298
        }, 0).wait(1).to({
            y: -15.4,
            alpha: 0.692
        }, 0).wait(1).to({
            y: -12.25,
            alpha: 0.339
        }, 0).wait(1).to({
            y: -9.95,
            alpha: 0.0788
        }, 0).wait(1).to({
            regX: 0,
            regY: 0,
            x: 0.1,
            y: -9.45,
            alpha: 0
        }, 0).to({
            _off: true
        }, 1).wait(1));

    }
    ).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-20.2,-54.1,39.3,79.4);

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
        this.L = new lib.mc_question();
        this.L.name = "L";
        this.L.parent = this;
        this.L.setTransform(-41.3, -49.9, 1, 1, -26.9998);

        this.R = new lib.mc_question();
        this.R.name = "R";
        this.R.parent = this;
        this.R.setTransform(43.7, -49.9, 0.9999, 0.9999, 28.0002);

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
    p.nominalBounds = new cjs.Rectangle(-71.9,-84,144.8,84);

    // stage content:
    (lib.eff_question = function(mode, startPosition, loop) {
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
        id: 'eff_question',
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
    an.compositions['eff_question'] = {
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
