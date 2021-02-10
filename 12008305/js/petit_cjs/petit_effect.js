(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"petit_effect_atlas_", frames: [[0,0,53,46]]}
];


// symbols:



(lib.heart = function() {
	this.initialize(ss["petit_effect_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvZAMAAAgx/MAlfAAAMAAAAx/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-120,-160,240,320), null);


(lib.grip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiaCbIAAk1IE1AAIAAE1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grip, new cjs.Rectangle(-15.5,-15.5,31,31), null);


(lib.繝代�繝�ぅ繧ｯ繝ｫ_pp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _visible = 0*/
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 繝ｬ繧､繝､繝ｼ_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5A6IAAhzIBzAAIAABzg");
	this.shape.setTransform(0.575,-0.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 繝ｬ繧､繝､繝ｼ_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6600FF").ss(1,1,1).p("ArJN9QB4gDCIhCQEPiGBOk+QAgiAA8kbQA6j/BEibQBbjQCFhrQCbh+DhgC");
	this.shape_1.setTransform(71.375,-89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.繝代�繝�ぅ繧ｯ繝ｫ_pp, new cjs.Rectangle(-5.2,-179.6,149,185.2), null);


(lib.繝代�繝�ぅ繧ｯ繝ｫ_p = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9gOIBLgvIAwBLIhMAwg");
	this.shape.setTransform(-0.25,0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVgvIA8AAIgQBfIg9AAg");
	this.shape_1.setTransform(-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,-5.7,12.4,12.5);


(lib.shape65_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_3
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(-10,-8.65,0.3774,0.3761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-8.6,20,17.299999999999997);


(lib.shape65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(247,208,113,0)"],[0,0.251,1],0,0,0,0,0,8.4).s().p("Ag6A7QgYgYAAgjQAAgiAYgYQAYgZAiAAQAjAAAZAZQAYAYgBAiQABAjgYAYQgZAZgjAAQgiAAgYgZg");
	this.shape.setTransform(0.15,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-8.4,16.7,16.700000000000003);


(lib.gr_ring = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.788)","#FFFFFF"],[0.471,0.722,1],0,0,0,0,0,129.8).s().p("AuIOJQl3l3AAoSQAAoRF3l3QF3l3IRAAQISAAF3F3QF3F3AAIRQAAISl3F3Ql3F3oSAAQoRAAl3l3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_ring, new cjs.Rectangle(-128,-128,256,256), null);


(lib.gr_bubble_parts = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(252,194,242,0)","rgba(255,255,255,0.6)","rgba(255,196,238,0)"],[0.251,0.855,0.882],0,0,0,0,0,70.4).s().p("AnuHvQjNjMAAkjQAAkiDNjMQDMjNEiAAQEjAADMDNQDNDMAAEiQAAEjjNDMQjMDNkjAAQkiAAjMjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_bubble_parts, new cjs.Rectangle(-70,-70,140,140), null);


(lib.繝代�繝�ぅ繧ｯ繝ｫ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(15));

	// 繝ｬ繧､繝､繝ｼ_3
	this.instance = new lib.繝代�繝�ぅ繧ｯ繝ｫ_pp();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 153, 0, 0, 0)];
	this.instance.cache(-7,-182,153,189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 繝ｬ繧､繝､繝ｼ_2
	this.instance_1 = new lib.繝代�繝�ぅ繧ｯ繝ｫ_p();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7674,0.7674);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.2,regY:0.5,scaleX:0.5693,scaleY:0.5693,rotation:-174.9492,x:63.45,y:-63.95,alpha:0.7229},0).wait(1).to({scaleX:0.5097,scaleY:0.5097,rotation:-119.2289,x:69.8,y:-92.6,alpha:0.6395},0).wait(1).to({scaleX:0.4735,scaleY:0.4735,rotation:-85.4829,x:73.05,y:-105.45,alpha:0.5889},0).wait(1).to({scaleX:0.4484,scaleY:0.4484,rotation:-61.9876,x:75,y:-112.55,alpha:0.5538},0).wait(1).to({scaleX:0.4299,scaleY:0.4299,rotation:-44.682,x:76.7,y:-118.25,alpha:0.5278},0).wait(1).to({scaleX:0.4159,scaleY:0.4159,rotation:-31.6108,x:78.15,y:-122.6,alpha:0.5083},0).wait(1).to({scaleX:0.4052,scaleY:0.4052,rotation:-21.661,x:79.25,y:-126,alpha:0.4934},0).wait(1).to({scaleX:0.3972,scaleY:0.3972,rotation:-14.1306,x:80.25,y:-128.7,alpha:0.4821},0).wait(1).to({scaleX:0.3912,scaleY:0.3912,rotation:-8.5439,x:81.05,y:-130.7,alpha:0.4737},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:-4.5615,x:81.6,y:-132.1,alpha:0.4678},0).wait(1).to({scaleX:0.3841,scaleY:0.3841,rotation:-1.9317,x:82,y:-133.05,alpha:0.4638},0).wait(1).to({scaleX:0.3826,scaleY:0.3826,rotation:-0.4617,x:82.25,y:-133.6,alpha:0.4616},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:0,x:82.45,y:-134,alpha:0.4609},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.繝代�繝�ぅ繧ｯ繝ｫ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		r=random(3)+2
		gotoAndPlay(r)
		*/
		var r = Math.floor(Math.random()*3+1);
		this.gotoAndPlay(r);
	}
	this.frame_21 = function() {
		/* stop()*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(15));

	// 繝ｬ繧､繝､繝ｼ_3
	this.instance = new lib.繝代�繝�ぅ繧ｯ繝ｫ_pp();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36));

	// 繝ｬ繧､繝､繝ｼ_2
	this.instance_1 = new lib.繝代�繝�ぅ繧ｯ繝ｫ_p();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.95,-4.05,0.7347,0.7347);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.2,regY:0.5,scaleX:0.5967,scaleY:0.5967,rotation:140.8707,x:62,y:-58.8,alpha:0.8319},0).wait(1).to({scaleX:0.5493,scaleY:0.5493,rotation:189.3068,x:68.95,y:-89.2,alpha:0.774},0).wait(1).to({scaleX:0.5163,scaleY:0.5163,rotation:222.9188,x:73.15,y:-105.85,alpha:0.7339},0).wait(1).to({scaleX:0.4911,scaleY:0.4911,rotation:248.676,x:76.1,y:-115.95,alpha:0.7032},0).wait(1).to({scaleX:0.4709,scaleY:0.4709,rotation:269.3198,x:78.9,y:-124.3,alpha:0.6785},0).wait(1).to({scaleX:0.4543,scaleY:0.4543,rotation:286.2744,x:81.55,y:-131.45,alpha:0.6583},0).wait(1).to({scaleX:0.4404,scaleY:0.4404,rotation:300.3959,x:84.35,y:-137.6,alpha:0.6415},0).wait(1).to({scaleX:0.4288,scaleY:0.4288,rotation:312.2476,x:86.7,y:-142.4,alpha:0.6273},0).wait(1).to({scaleX:0.4191,scaleY:0.4191,rotation:322.2242,x:88.9,y:-146.25,alpha:0.6154},0).wait(1).to({scaleX:0.4108,scaleY:0.4108,rotation:330.6158,x:90.9,y:-149.45,alpha:0.6054},0).wait(1).to({scaleX:0.404,scaleY:0.404,rotation:337.643,x:92.75,y:-152.15,alpha:0.597},0).wait(1).to({scaleX:0.3982,scaleY:0.3982,rotation:343.4783,x:94.3,y:-154.45,alpha:0.59},0).wait(1).to({scaleX:0.3936,scaleY:0.3936,rotation:348.2599,x:95.7,y:-156.2,alpha:0.5843},0).wait(1).to({scaleX:0.3898,scaleY:0.3898,rotation:352.1005,x:96.9,y:-157.65,alpha:0.5797},0).wait(1).to({scaleX:0.3869,scaleY:0.3869,rotation:355.0937,x:97.85,y:-158.75,alpha:0.5762},0).wait(1).to({scaleX:0.3847,scaleY:0.3847,rotation:357.3179,x:98.6,y:-159.55,alpha:0.5735},0).wait(1).to({scaleX:0.3832,scaleY:0.3832,rotation:358.8401,x:99.1,y:-160.1,alpha:0.5717},0).wait(1).to({scaleX:0.3823,scaleY:0.3823,rotation:359.7175,x:99.4,y:-160.4,alpha:0.5706},0).wait(1).to({regX:0,regY:0,scaleX:0.382,scaleY:0.382,rotation:360,x:99.8,y:-160.55,alpha:0.5703},0).to({_off:true},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-178.7,148.5,184.7);


(lib.sprite66b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// 繝ｬ繧､繝､繝ｼ_2
	this.instance = new lib.shape65_star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.7,0.95,3.4133,4.8676,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:3.1879,scaleY:4.083,rotation:10.6181,x:30.0921,y:-35.7141},0).wait(1).to({scaleX:3.0466,scaleY:3.5909,rotation:-10.9492,x:47.2749,y:-58.7131},0).wait(1).to({scaleX:2.9515,scaleY:3.2599,rotation:-25.4533,x:58.8303,y:-74.18},0).wait(1).to({scaleX:2.8871,scaleY:3.0357,rotation:-35.2756,x:66.6557,y:-84.6543},0).wait(1).to({scaleX:2.845,scaleY:2.8893,rotation:-41.6917,x:71.7675,y:-91.4963},0).wait(1).to({scaleX:2.8197,scaleY:2.8012,rotation:-45.5526,x:74.8434,y:-95.6135},0).wait(1).to({scaleX:2.802,scaleY:2.7395,rotation:-48.2594,x:77,y:-98.5},0).wait(1).to({scaleY:2.7394,rotation:-59.9604,x:81.1,y:-101.65,alpha:0.4297},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.2,-137.7,166.9,192.6);


(lib.sprite66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// 繝ｬ繧､繝､繝ｼ_2
	this.instance = new lib.shape65_star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.7,0.95,3.4133,4.8676,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:3.1879,scaleY:4.083,rotation:10.6181,x:-10.5905,y:-26.0366},0).wait(1).to({scaleX:3.0466,scaleY:3.5909,rotation:-10.9492,x:-18.9275,y:-42.9649},0).wait(1).to({scaleX:2.9515,scaleY:3.2599,rotation:-25.4533,x:-24.5342,y:-54.3493},0).wait(1).to({scaleX:2.8871,scaleY:3.0357,rotation:-35.2756,x:-28.331,y:-62.0589},0).wait(1).to({scaleX:2.845,scaleY:2.8893,rotation:-41.6917,x:-30.8112,y:-67.0949},0).wait(1).to({scaleX:2.8197,scaleY:2.8012,rotation:-45.5526,x:-32.3036,y:-70.1254},0).wait(1).to({scaleX:2.802,scaleY:2.7395,rotation:-48.2594,x:-33.35,y:-72.25},0).to({x:-44.85,y:-88.45,alpha:0.4609},3,cjs.Ease.get(-1)).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.1,-125.1,137.7,180);


(lib.mc_ring_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// i
	this.instance = new lib.gr_ring();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.55,1.672);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.5496,scaleY:1.6714,alpha:0.2009},0).wait(1).to({scaleX:1.5482,scaleY:1.6697,alpha:0.2065},0).wait(1).to({scaleX:1.5456,scaleY:1.6664,alpha:0.2169},0).wait(1).to({scaleX:1.5415,scaleY:1.6613,alpha:0.233},0).wait(1).to({scaleX:1.5359,scaleY:1.6542,alpha:0.2555},0).wait(1).to({scaleX:1.5288,scaleY:1.6454,alpha:0.2836},0).wait(1).to({scaleX:1.5212,scaleY:1.6358,alpha:0.314},0).wait(1).to({scaleX:1.5141,scaleY:1.6269,alpha:0.3421},0).wait(1).to({scaleX:1.5085,scaleY:1.6198,alpha:0.3647},0).wait(1).to({scaleX:1.5044,scaleY:1.6147,alpha:0.3808},0).wait(1).to({scaleX:1.5018,scaleY:1.6115,alpha:0.3912},0).wait(1).to({scaleX:1.5004,scaleY:1.6097,alpha:0.3968},0).wait(1).to({scaleX:1.5,scaleY:1.6092,alpha:0.3984},0).wait(1).to({scaleX:1.5004,scaleY:1.6097,alpha:0.3968},0).wait(1).to({scaleX:1.5018,scaleY:1.6115,alpha:0.3912},0).wait(1).to({scaleX:1.5044,scaleY:1.6147,alpha:0.3808},0).wait(1).to({scaleX:1.5085,scaleY:1.6198,alpha:0.3647},0).wait(1).to({scaleX:1.5141,scaleY:1.6269,alpha:0.3421},0).wait(1).to({scaleX:1.5212,scaleY:1.6358,alpha:0.314},0).wait(1).to({scaleX:1.5288,scaleY:1.6454,alpha:0.2836},0).wait(1).to({scaleX:1.5359,scaleY:1.6542,alpha:0.2555},0).wait(1).to({scaleX:1.5415,scaleY:1.6613,alpha:0.233},0).wait(1).to({scaleX:1.5456,scaleY:1.6664,alpha:0.2169},0).wait(1).to({scaleX:1.5482,scaleY:1.6697,alpha:0.2065},0).wait(1).to({scaleX:1.5496,scaleY:1.6714,alpha:0.2009},0).wait(1).to({scaleX:1.55,scaleY:1.672,alpha:0.1992},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.4,-214,396.8,428);


(lib.mc_bubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(Math.floor(Math.random() * 20 + 1));
		this.scaleX = this.scaleY = Math.random();
		this.visible = false;
	}
	this.frame_21 = function() {
		this.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(25));

	// i
	this.instance = new lib.gr_bubble_parts("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2,0.2,89.9956);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20).to({_off:false,scaleX:0.9,scaleY:0.9,rotation:89.9874,alpha:0.1016},0).to({scaleX:1,scaleY:1,rotation:89.9974,x:-20,alpha:1},12).to({scaleX:0.95,scaleY:0.95,rotation:-89.9991,x:-40,alpha:0.1016},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.5,-70,169.5,140);


(lib.efa_繝代�繝�ぅ繧ｯ繝ｫ髮�粋 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_1
	this.instance = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance.parent = this;
	this.instance.setTransform(-3.7,44.05,0.8585,0.8585,-173.2889);

	this.instance_1 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.6,24.65,0.5292,0.5292,0,-143.2543,36.7457);

	this.instance_2 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.15,26.5,0.7527,0.5292,0,-164.9709,40.6843);

	this.instance_3 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26.55,10.85,0.8544,0.5085,0,-124.1512,76.2156,-59.9,-3.9);

	this.instance_4 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,28,0.6032,0.6714,0,102.0919,76.0499);

	this.instance_5 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(24,22,0.6032,0.6032,154.5512);

	this.instance_6 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10,40,0.67,0.5378,0,-151.6456,57.8841);

	this.instance_7 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(36,16.45,1.1194,1.0589,0,-118.0587,42.7302);

	this.instance_8 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-4.25,24.65,0.5292,0.8921,-178.5141);

	this.instance_9 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(2,30.35,1,1,95.2812);

	this.instance_10 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(13.6,24.65,0.5924,0.5292,0,155.0554,-24.9453);

	this.instance_11 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.25,20.95,0.5292,0.5292,134.5199);

	this.instance_12 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-40.35,-8.15,0.8585,0.8585,-88.5191);

	this.instance_13 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-38,10,0.5292,0.5292,0,-53.2543,126.7457);

	this.instance_14 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-12.4,14,0.7527,0.5292,0,-104.9694,100.6856);

	this.instance_15 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-0.85,-20.4,0.8544,0.5085,0,-69.3554,131.0109,-59.8,-3.7);

	this.instance_16 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-28,-14,0.6032,0.6714,0,-58.4598,-84.5013);

	this.instance_17 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-34,20,0.6032,0.6032,-115.4488);

	this.instance_18 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-30,16,0.67,0.5379,0,-103.6061,105.9244);

	this.instance_19 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-24,30,1.1194,1.0589,0,-28.0587,132.7302);

	this.instance_20 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-14.65,1.75,0.5292,0.5292,-118.5129);

	this.instance_21 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-32.05,-3.5,1,1,-135.4791);

	this.instance_22 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-14.65,19.6,0.5925,0.5292,0,-72.0065,107.9921);

	this.instance_23 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-10.95,8.25,0.6817,1.3397,0,-100.0239,-139.0996);

	this.instance_24 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_24.parent = this;
	this.instance_24.setTransform(6.55,-31.7,0.8585,0.8585,-6.5255);

	this.instance_25 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_25.parent = this;
	this.instance_25.setTransform(6.55,-31.7,0.5292,0.5292,0,36.7457,-143.2543);

	this.instance_26 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-5.3,-14.15,0.7527,0.5292,0,15.0291,-139.3157);

	this.instance_27 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(29.35,1.45,0.8544,0.5085,0,20.6446,-138.9891,-59.9,-3.9);

	this.instance_28 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(4.65,-27.5,0.6032,0.6714,0,-19.4377,-45.4796);

	this.instance_29 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(10,-24,0.6032,0.6032,19.5497);

	this.instance_30 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-7.15,-27.65,0.67,0.5378,0,-7.3809,-157.8494);

	this.instance_31 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-14,-20,1.1195,1.0589,0,-5.3487,155.4402);

	this.instance_32 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(7.1,-12.3,0.5292,0.5292,-28.5129);

	this.instance_33 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(8,-18,1,1,-45.4791);

	this.instance_34 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-10.75,-12.3,0.5925,0.5292,0,17.9935,-162.0079);

	this.instance_35 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_35.parent = this;
	this.instance_35.setTransform(0.6,-8.6,0.5292,0.5292,-45.4801);

	this.instance_36 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(50,16,0.8585,0.8585,61.4817);

	this.instance_37 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_37.parent = this;
	this.instance_37.setTransform(8.5,6.25,0.5292,0.5292,0,126.7457,-53.2543);

	this.instance_38 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_38.parent = this;
	this.instance_38.setTransform(14.45,-1.3,0.7527,0.5292,0,105.0291,-49.3157);

	this.instance_39 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(13.3,36.9,0.8544,0.5085,0,110.6446,-48.9891,-59.8,-3.7);

	this.instance_40 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(24,-2,0.6032,0.6714,0,70.5623,44.5204);

	this.instance_41 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(38,6,0.6032,0.6032,64.5512);

	this.instance_42 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(27.95,-3.15,0.67,0.5378,0,73.3557,-77.1152);

	this.instance_43 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(28,-12,1.1194,1.0589,0,151.9413,-47.2698);

	this.instance_44 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(13.6,24.65,0.5292,0.5292,61.4871);

	this.instance_45 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_45.parent = this;
	this.instance_45.setTransform(21,11.9,1,1,23.5401);

	this.instance_46 = new lib.繝代�繝�ぅ繧ｯ繝ｫ1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(12.6,-6.75,0.5925,0.5292,0,107.9935,-72.0079);

	this.instance_47 = new lib.繝代�繝�ぅ繧ｯ繝ｫ2();
	this.instance_47.parent = this;
	this.instance_47.setTransform(8.9,4.6,0.5292,0.5292,44.5199);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.efa_繝代�繝�ぅ繧ｯ繝ｫ髮�粋, new cjs.Rectangle(-320.5,-245.4,564,474.70000000000005), null);


(lib.繧ｨ繝輔ぉ繧ｯ繝�_繝ｬ繝吶Ν繧｢繝�� = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if(/:heartFlg != 1) {
			_visible=0
		}*/
	}
	this.frame_15 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1));

	// 螟ｧ縺阪＞邇�
	this.instance = new lib.shape65("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,9.5072,9.5072,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(15));

	// 蠎�′繧狗脂1
	this.instance_1 = new lib.sprite66("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.45,0.85,0.6564,0.6564,-135.1055);

	this.instance_2 = new lib.sprite66("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.45,-0.15,0.6564,0.6564,0,45.1055,-134.8945);

	this.instance_3 = new lib.sprite66("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.45,-1.15,0.6564,0.6564,0,-134.8945,45.1055);

	this.instance_4 = new lib.sprite66("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3.45,-3.15,0.6564,0.6564,44.8945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},14).wait(1));

	// 蠎�′繧狗脂2
	this.instance_5 = new lib.sprite66b("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.45,-0.15,0.4201,0.4201,89.8939);

	this.instance_6 = new lib.sprite66b("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.9,-0.15,0.4201,0.4201,0,-89.8939,90.1061);

	this.instance_7 = new lib.sprite66b("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-0.45,2.6,0.4201,0.4201,0,90.1061,-89.8939);

	this.instance_8 = new lib.sprite66b("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.5,2.6,0.4201,0.4201,-90.1061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-81.6,164.3,162.39999999999998);


(lib.mc_bubble_set = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc
	this.instance = new lib.mc_bubble();
	this.instance.parent = this;
	this.instance.setTransform(-115,116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mc
	this.instance_1 = new lib.mc_bubble();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// mc
	this.instance_2 = new lib.mc_bubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-330,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// mc
	this.instance_3 = new lib.mc_bubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-44,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// mc
	this.instance_4 = new lib.mc_bubble();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-250,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// mc
	this.instance_5 = new lib.mc_bubble();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-89,-74);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// mc
	this.instance_6 = new lib.mc_bubble();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-300,-110);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// mc
	this.instance_7 = new lib.mc_bubble();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-135,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_bubble_set, new cjs.Rectangle(-344,-124,376.5,254), null);


(lib.effect_set_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stay:1,heart:3,powapowa:51});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.grip.visible = false;
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.parent.parent.callback_set();
		//this.gotoAndStop("stay");
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_85 = function() {
		this.parent.parent.callback_set();
		//this.gotoAndStop("stay");
	}
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(35).call(this.frame_37).wait(13).call(this.frame_50).wait(35).call(this.frame_85).wait(13).call(this.frame_98).wait(1));

	// heart
	this.instance = new lib.繧ｨ繝輔ぉ繧ｯ繝�_繝ｬ繝吶Ν繧｢繝��("synched",2,false);
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.4977,1.4977,23.8569);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({startPosition:5},3,cjs.Ease.get(1)).to({_off:true},29).wait(48));

	// 繝ｬ繧､繝､繝ｼ_4
	this.instance_1 = new lib.white();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.6016;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({alpha:0},9).to({_off:true},1).wait(70));

	// particle
	this.instance_2 = new lib.efa_繝代�繝�ぅ繧ｯ繝ｫ髮�粋();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.8734,0.8734);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({_off:true},32).wait(48));

	// powapowa1
	this.lighter_tgt = new lib.mc_ring_move();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(0,0,0.95,0.95);
	this.lighter_tgt.alpha = 0;
	this.lighter_tgt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(19).to({_off:false},0).wait(1).to({alpha:1},30).to({_off:true},1).wait(16).to({_off:false,alpha:0},0).wait(1).to({alpha:1},30).wait(1));

	// powapowa2
	this.lighter_tgt_1 = new lib.mc_bubble_set();
	this.lighter_tgt_1.name = "lighter_tgt_1";
	this.lighter_tgt_1.parent = this;
	this.lighter_tgt_1.setTransform(0.85,162.85,0.95,0.95,89.9936);
	this.lighter_tgt_1.alpha = 0;
	this.lighter_tgt_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt_1).wait(19).to({_off:false},0).wait(1).to({alpha:0.4492},30).to({_off:true},1).wait(16).to({_off:false,alpha:0},0).wait(1).to({alpha:0.4492},30).wait(1));

	// 繝ｬ繧､繝､繝ｼ_1
	this.grip = new lib.grip();
	this.grip.name = "grip";
	this.grip.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.grip).to({_off:true},1).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.8,-214.3,492.5,417.6);


(lib.effect_container_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 繝ｬ繧､繝､繝ｼ_1
	this.ef = new lib.effect_set_base();
	this.ef.name = "ef";
	this.ef.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ef).wait(1));

}).prototype = getMCSymbolPrototype(lib.effect_container_core, new cjs.Rectangle(-15.5,-15.5,31,31), null);


(lib.effect_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.param={};
		this.param.effect = "stay";
		this.param.x = 0;
		this.param.y = 0;
		this.param.motion_finish_callback=function(){};

		//蛻晄悄險ｭ螳夂畑髢｢謨ｰ
		this.init = function(param) {
			this.param = param;

			//蛻晄悄繝｢繝ｼ繧ｷ繝ｧ繝ｳ
			this.effect_set(this.param.effect);

			this.visible=true;
		}

		//蜀�Κ縺九ｉ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ繧貞他縺ｳ蜃ｺ縺励※蠑墓焚繧貞沂繧∬ｾｼ繧
		this.callback_set = function(){
			this.param.motion_finish_callback(this.param.effect);
		}

		//繝｢繝ｼ繧ｷ繝ｧ繝ｳ逕ｨ髢｢謨ｰ
		this.effect_set = function(param){
			this.param = param;
			this.core.x = this.param.x;
			this.core.y = this.param.y;
			this.core.ef.gotoAndPlay(this.param.effect);
		}

		this.init(this.param);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 繝ｬ繧､繝､繝ｼ_1
	this.core = new lib.effect_container_core();
	this.core.name = "core";
	this.core.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.core).wait(1));

}).prototype = getMCSymbolPrototype(lib.effect_container, new cjs.Rectangle(-15.5,-15.5,31,31), null);


// stage content:
(lib.petit_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 繝ｬ繧､繝､繝ｼ_3
	this.petit_effect = new lib.effect_container();
	this.petit_effect.name = "petit_effect";
	this.petit_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.petit_effect).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.5,144.5,-89,-129);
// library properties:
lib.properties = {
	id: 'petit_effect',
	width: 240,
	height: 320,
	fps: 12,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/petit_effect_atlas_.png?1612763057881", id:"petit_effect_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['petit_effect'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
	var lastW, lastH, lastS=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	function resizeCanvas() {
		var w = lib.properties.width, h = lib.properties.height;
		var iw = window.innerWidth, ih=window.innerHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});
		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
