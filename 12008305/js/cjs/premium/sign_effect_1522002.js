(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1522002 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1522002_1();

        // image_replace
        this.instance = new lib.replace_image_1522002();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-8.2, 0, 648.3, 800);


    // symbols:
    (lib.replace_image_1522002 = function() {
        this.initialize(img.replace_image_1522002);
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


    (lib.reflect_mask_1522002 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-126.9, -144, 254.1, 288.1);


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
        this.lighter_tgt.setTransform(0, -224.1, 0.901, 0.901, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -316.5, 254.1, 633.2);


    (lib.reflect_container_cjs_1522002 = function(mode, startPosition, loop) {
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
        this.instance.setTransform(-0.3, 460.8, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -460.3
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -316.5, 254.1, 633.2);


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


    (lib.reflect_wrapper_1522002 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1522002();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -316.5, 254.1, 633.2);


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


    (lib.sign_effect_1522002_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(104.1, 538.1);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(280.9, 460);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(245.9, 562.3);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(32.4, 512.8, 0.725, 0.725);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(199.1, 671.6, 0.692, 0.692);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(110.1, 469.1, 0.66, 0.66);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(72, 617.4);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(146.2, 400);

        // mask
        this.reflect_mask = new lib.reflect_mask_1522002();
        this.reflect_mask.setTransform(159, 545);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(143, 344.5);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1522002();
        this.reflect_wrapper.setTransform(32, 545);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-8.2, 228.4, 345.2, 633.2);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
