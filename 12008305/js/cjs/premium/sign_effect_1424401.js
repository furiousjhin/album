(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_1424401 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_1424401_1();

	// image_replace
	this.instance = new lib.replace_image_1424401();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,0,669,800);


// symbols:
(lib.replace_image_1424401 = function() {
	this.initialize(img.replace_image_1424401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.reflect_mask_1424401 = function() {
	this.initialize();

	// 繝ｬ繧､繝､繝ｼ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.8,-134.9,237.8,270);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// 繝ｬ繧､繝､繝ｼ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-209.7,0.844,0.844,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-296.3,237.8,592.7);


(lib.reflect_container_cjs_1424401 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

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
	this.preview.setTransform(-0.3,0,1,1,0,0,0,-0.4,0);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.3,431.5,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-431},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-296.3,237.8,592.7);


(lib.glitter_inner = function() {
	this.initialize();

	// 繝ｬ繧､繝､繝ｼ 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.reflect_wrapper_1424401 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_1424401();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-296.3,237.8,592.7);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {

	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

	// mc
	this.lux = new lib.glitter();

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.sign_effect_1424401_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(73.1,555);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(238.9,480);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(205.9,579.7);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(11.7,532.5,0.725,0.725);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(160.7,676.7,0.692,0.692);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(77.1,486.5,0.66,0.66);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(48.9,637.4);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(113.2,426.9);

	// mask
	this.reflect_mask = new lib.reflect_mask_1424401();
	this.reflect_mask.setTransform(124.9,561.8);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(121.9,348.4);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_1424401();
	this.reflect_wrapper.setTransform(6,561.8);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.9,265.4,324,592.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
