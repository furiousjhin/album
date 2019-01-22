(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1513602 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1513602_1();

        // image_replace
        this.instance = new lib.replace_image_1513602();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 681, 800);


    // symbols:
    (lib.replace_image_1513602 = function() {
        this.initialize(img.replace_image_1513602);
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


    (lib.reflect_mask_1513602 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-128.8, -146.4, 257.8, 292.9);


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
        this.lighter_tgt.setTransform(0, -227.4, 0.914, 0.914, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -321.2, 257.8, 642.6);


    (lib.reflect_container_cjs_1513602 = function(mode, startPosition, loop) {
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
        this.instance.setTransform(-0.3, 467.9, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -467.4
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -321.2, 257.8, 642.6);


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


    (lib.reflect_wrapper_1513602 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1513602();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -321.2, 257.8, 642.6);


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


    (lib.sign_effect_1513602_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(445, 466.6);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(624.9, 388);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(588.9, 495.7);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(378, 446.5, 0.725, 0.725);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(539.9, 603.6, 0.692, 0.692);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(451.1, 395.5, 0.66, 0.66);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(419.1, 557.4);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(487.7, 332);

        // mask
        this.reflect_mask = new lib.reflect_mask_1513602();
        this.reflect_mask.setTransform(500.9, 477.3);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(314.9, 311.9);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1513602();
        this.reflect_wrapper.setTransform(372, 477.3);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(337.3, 156, 343.7, 642.6);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
