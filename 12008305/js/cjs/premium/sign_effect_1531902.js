(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1531902 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1531902_1();

        // image_replace
        this.instance = new lib.replace_image_1531902();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-31.2, 0, 671.3, 800);


    // symbols:
    (lib.replace_image_1531902 = function() {
        this.initialize(img.replace_image_1531902);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 800);


    (lib.reflect_inner = function() {
        this.initialize();

        // standard
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.749)", "rgba(255,255,255,0)"], [0, 0.51, 1], 0, 297.1, 0.1, -296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
        this.shape.setTransform(150, 300);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 600);


    (lib.reflect_mask_1531902 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-119.6, -135.8, 239.4, 271.9);


    (lib.glitter_inner_sphere = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.302)", "rgba(255,255,255,0)"], [0, 0.522, 1], 0, 0, 0, 0, 0, 51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-49.9, -49.9, 100, 100);


    (lib.reflect = function() {
        this.initialize();

        // main
        this.lighter_tgt = new lib.reflect_inner();
        this.lighter_tgt.setTransform(0, -211.1, 0.849, 0.849, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -298.2, 239.4, 596.5);


    (lib.reflect_container_cjs_1531902 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            flash: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.preview.visible = false;
        }
        this.frame_20 = function() {
            this.play();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

        // preview
        this.preview = new lib.reflect();
        this.preview.setTransform(-0.3, 0, 1, 1, 0, 0, 0, -0.4, 0);
        this.preview.compositeOperation = "lighter";

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.preview
            }]
        }).wait(39));

        // reflect
        this.instance = new lib.reflect();
        this.instance.setTransform(-0.3, 434.3, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -433.9
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -298.2, 239.4, 596.5);


    (lib.glitter_inner = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.instance = new lib.glitter_inner_sphere();
        this.instance.setTransform(0, 0.1, 1.5, 0.086, -44.9);

        this.instance_1 = new lib.glitter_inner_sphere();
        this.instance_1.setTransform(0, 0, 0.334, 0.334);

        this.instance_2 = new lib.glitter_inner_sphere();
        this.instance_2.setTransform(0, 0, 1.5, 0.086, 45);

        this.instance_3 = new lib.glitter_inner_sphere();

        this.addChild(this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter = function() {
        this.initialize();

        // flare
        this.lighter_tgt = new lib.glitter_inner();
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.reflect_wrapper_1531902 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1531902();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -298.2, 239.4, 596.5);


    (lib.glitter_container_cjs = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {
            loop: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(Math.random() * 20));
        }
        this.frame_20 = function() {

        }
        this.frame_50 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

        // mc
        this.lux = new lib.glitter();

        this.timeline.addTween(cjs.Tween.get(this.lux).to({
            _off: true
        }, 1).wait(19).to({
            alpha: 0,
            _off: false
        }, 0).to({
            scaleX: 0.73,
            scaleY: 0.73,
            alpha: 0.75
        }, 9, cjs.Ease.get(0.5)).to({
            scaleX: 0.7,
            scaleY: 0.7,
            alpha: 0
        }, 9, cjs.Ease.get(-0.49)).to({
            _off: true
        }, 1).wait(12));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter_wrapper = function() {
        this.initialize();

        // cjs
        this.instance = new lib.glitter_container_cjs();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.sign_effect_1531902_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(69.1, 554.1);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(236.9, 481);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(202.9, 583.3);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(9.4, 533.8, 0.725, 0.725);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(155.1, 682.3, 0.692, 0.692);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(74.1, 490.1, 0.66, 0.66);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(42.9, 630.7);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(106.2, 429);

        // mask
        this.reflect_mask = new lib.reflect_mask_1531902();
        this.reflect_mask.setTransform(121.7, 562.8);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(120.7, 349.4);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1531902();
        this.reflect_wrapper.setTransform(2, 562.8);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-31.2, 264.6, 324.2, 596.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
