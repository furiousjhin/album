(function (cjs, an) {
	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [{
		name: "petit_balloon_atlas_",
		frames: [
			[0, 0, 624, 180],
			[626, 0, 72, 140],
			[610, 182, 72, 140],
			[610, 324, 72, 80],
			[732, 122, 72, 60],
			[684, 264, 72, 60],
			[0, 182, 608, 168],
			[700, 0, 46, 120],
			[684, 142, 46, 120],
			[732, 184, 46, 60],
			[748, 0, 46, 40],
			[748, 42, 46, 40]
		]
	}];
	// symbols:
	(lib.large_base = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	(lib.large_long = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	(lib.large_mc = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	(lib.large_middle = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	(lib.large_short = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	(lib.large_short_ = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_base = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_long = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_mc = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_middle = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_short = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	(lib.normal_short_ = function () {
		this.initialize(ss["petit_balloon_atlas_"]);
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	(lib.marker2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.stop();
			//
			//*/
			this.stop();
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));
		// 繝ｬ繧､繝､繝ｼ_3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AhmAcIATg3ICfAAIAbA3g");
		this.shape.setTransform(0.3, 1.575);
		this.shape._off = true;
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({
			_off: false
		}, 0).to({
			_off: true
		}, 1).wait(5));
		// img
		this.instance = new lib.normal_short();
		this.instance.parent = this;
		this.instance.setTransform(-23, 0);
		this.instance_1 = new lib.normal_middle();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-23, 0);
		this.instance_2 = new lib.normal_long();
		this.instance_2.parent = this;
		this.instance_2.setTransform(-23, 0);
		this.instance_3 = new lib.normal_mc();
		this.instance_3.parent = this;
		this.instance_3.setTransform(-23, 0);
		this.instance_4 = new lib.normal_short_();
		this.instance_4.parent = this;
		this.instance_4.setTransform(-23, -40);
		this.instance_5 = new lib.large_short();
		this.instance_5.parent = this;
		this.instance_5.setTransform(-37, -21);
		this.instance_6 = new lib.large_middle();
		this.instance_6.parent = this;
		this.instance_6.setTransform(-36, -19);
		this.instance_7 = new lib.large_long();
		this.instance_7.parent = this;
		this.instance_7.setTransform(-36, -21);
		this.instance_8 = new lib.large_mc();
		this.instance_8.parent = this;
		this.instance_8.setTransform(-36, -21);
		this.instance_9 = new lib.large_short_();
		this.instance_9.parent = this;
		this.instance_9.setTransform(-37, -41);
		this.timeline.addTween(cjs.Tween.get({}).to({
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
		}, 1).wait(1));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-37, -41, 73, 161);
	(lib.fkds_broad2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.stop();
			//
			//*/
			this.stop();
			/* stop();

		*/
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));
		// fkds
		this.instance = new lib.normal_base();
		this.instance.parent = this;
		this.instance.setTransform(-304, -84);
		this.instance_1 = new lib.large_base();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-312, -92);
		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance
			}]
		}).to({
			state: [{
				t: this.instance_1
			}]
		}, 1).wait(1));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-312, -92, 624, 180);
	(lib.fkds_inner2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.stop();
			//
			//*/
			this.stop();
			/*


		stop();*/
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));
		// cursor8
		this.cursor8 = new lib.marker2();
		this.cursor8.name = "cursor8";
		this.cursor8.parent = this;
		this.cursor8.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor8).wait(3));
		// cursor7
		this.cursor7 = new lib.marker2();
		this.cursor7.name = "cursor7";
		this.cursor7.parent = this;
		this.cursor7.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor7).wait(3));
		// cursor6
		this.cursor6 = new lib.marker2();
		this.cursor6.name = "cursor6";
		this.cursor6.parent = this;
		this.cursor6.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor6).wait(3));
		// cursor5
		this.cursor5 = new lib.marker2();
		this.cursor5.name = "cursor5";
		this.cursor5.parent = this;
		this.cursor5.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor5).wait(3));
		// cursor4
		this.cursor4 = new lib.marker2();
		this.cursor4.name = "cursor4";
		this.cursor4.parent = this;
		this.cursor4.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor4).wait(3));
		// cursor3
		this.cursor3 = new lib.marker2();
		this.cursor3.name = "cursor3";
		this.cursor3.parent = this;
		this.cursor3.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor3).wait(3));
		// cursor2
		this.cursor2 = new lib.marker2();
		this.cursor2.name = "cursor2";
		this.cursor2.parent = this;
		this.cursor2.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor2).wait(3));
		// cursor1
		this.cursor1 = new lib.marker2();
		this.cursor1.name = "cursor1";
		this.cursor1.parent = this;
		this.cursor1.setTransform(-229, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor1).wait(3));
		// cursor0
		this.cursor0 = new lib.marker2();
		this.cursor0.name = "cursor0";
		this.cursor0.parent = this;
		this.cursor0.setTransform(964, 78.4, 1, 1, 0, 0, 0, 0, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.cursor0).wait(3));
		// base
		this.base = new lib.fkds_broad2();
		this.base.name = "base";
		this.base.parent = this;
		this.timeline.addTween(cjs.Tween.get(this.base).wait(3));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-320, -514.9, 1307, 840);
	(lib.mc_fkds_set = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {
			start: 1,
			stay: 7,
			start_up: 12
		});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.stop();
			//
			//*/
			this.stop();
		}
		this.frame_6 = function () {
			///* js
			//
			//this.stop();
			//this.parent.callback_set();
			//
			//*/
			this.stop();
			this.parent.callback_set();
		}
		this.frame_10 = function () {
			///* js
			//
			//this.stop();
			//
			//*/
			this.stop();
		}
		this.frame_17 = function () {
			///* js
			//
			//this.stop();
			//this.parent.callback_set();
			//
			//*/
			this.stop();
			this.parent.callback_set();
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(4).call(this.frame_10).wait(7).call(this.frame_17).wait(4));
		// core
		this.core = new lib.fkds_inner2();
		this.core.name = "core";
		this.core.parent = this;
		this.timeline.addTween(cjs.Tween.get(this.core).wait(1).to({
			scaleX: 0.5,
			scaleY: 0.2,
			y: 56
		}, 0).to({
			scaleX: 1.02,
			scaleY: 1.02,
			y: -2
		}, 3, cjs.Ease.get(-1)).to({
			scaleX: 1,
			scaleY: 1,
			y: 0
		}, 2).wait(6).to({
			scaleX: 0.5,
			scaleY: 0.2,
			y: -56
		}, 0).to({
			scaleX: 1.02,
			scaleY: 1.02,
			y: 2
		}, 3, cjs.Ease.get(-1)).to({
			scaleX: 1,
			scaleY: 1,
			y: 0
		}, 2).wait(4));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-310.1, -87.7, 1316.8000000000002, 210.10000000000002);
	(lib.cjs005_balloon = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.stop();
			//this.visible=false;
			//
			////蛻晄悄蛹�
			//this.param={};
			//
			//this.param.chara_num=1;//繧ｲ繧ｹ繝医�莠ｺ謨ｰ : 1~5莠ｺ
			//this.param.mode=1;//1:騾壼ｸｸ, 2:繝｢繝九ち繝ｼ繧｢繝��
			//this.param.speak_type=1;//1:騾壼ｸｸ, 2:縺弱＊縺弱＊
			//
			////蟾ｦ縺九ｉ1~5逡ｪ逶ｮ縺ｮ莠ｺ縺後＠繧�∋縺｣縺ｦ縺�ｋ縺九←縺�°(1:縺励ｃ縺ｹ繧�)
			//this.param.position1_talk = 0;
			//this.param.position2_talk = 0;
			//this.param.position3_talk = 0;
			//this.param.position4_talk = 0;
			//this.param.position5_talk = 0;
			////MC
			//this.param.position0_talk = 0;
			////繝｢繝九ち繝ｼ繧｢繝��譎ゅΔ繝九ち繝ｼ縺ｮ縺ｷ縺｡縺後＠繧�∋繧句�ｴ蜷�(荳雁髄縺�)
			//this.param.position6_talk = 0;
			//this.param.position7_talk = 0;
			//this.param.position8_talk = 0;
			//
			//this.speak_type_num=0;//蜷ｹ縺榊�縺励�繧ｿ繧､繝励ｒ螟峨∴繧九◆繧√�蝗ｺ螳壼､ 0 or 5
			//this.speak_foward=0;//0:繝�ヵ繧ｩ繝ｫ繝�  1:繝｢繝九ち繝ｼ譎ゅ↓荳翫↓縺�ｋ繧ｭ繝｣繝ｩ逕ｨ
			//
			//
			////繝｢繝ｼ繧ｷ繝ｧ繝ｳ邨ゅｏ繧翫↓霑斐☆callback縺ｮ蜿励￠逧ｿ
			//this.param.motion_finish_callback=function(){};
			//
			//
			//this.init = function(param){
			//	this.param = param;
			//	this.visible=false;//荳譌ｦ髱櫁｡ｨ遉ｺ
			//
			//	//y蠎ｧ讓吝崋螳�
			//	this.mc.core.cursor0.y = 78;
			//	this.mc.core.cursor1.y = 78;
			//	this.mc.core.cursor2.y = 78;
			//	this.mc.core.cursor3.y = 78;
			//	this.mc.core.cursor4.y = 78;
			//	this.mc.core.cursor5.y = 78;
			//	this.mc.core.cursor6.y = -78;
			//	this.mc.core.cursor7.y = -78;
			//	this.mc.core.cursor8.y = -78;
			//
			//	if(this.param.mode == 1){
			//		this.gotoAndStop(1);
			//
			//		//蠎ｧ讓呵ｨｭ螳�
			//		switch(this.param.chara_num){
			//			case 1:
			//				this.mc.core.cursor0.x = -171;
			//				this.mc.core.cursor1.x = 171;
			//				break;
			//			case 2:
			//				this.mc.core.cursor0.x = -161;
			//				this.mc.core.cursor1.x = 12;
			//				this.mc.core.cursor2.x = 192;
			//				break;
			//			case 3:
			//				this.mc.core.cursor0.x = -161;
			//				this.mc.core.cursor1.x = -8;
			//				this.mc.core.cursor2.x = 212;
			//				this.mc.core.cursor3.x = 101;
			//				break;
			//			case 4:
			//				this.mc.core.cursor0.x = -161;
			//				this.mc.core.cursor1.x = -38;
			//				this.mc.core.cursor2.x = 132;
			//				this.mc.core.cursor3.x = 31;
			//				this.mc.core.cursor4.x = 201;
			//				break;
			//			case 5:
			//				this.mc.core.cursor0.x = -171;
			//				this.mc.core.cursor1.x = -78;
			//				this.mc.core.cursor2.x = 82;
			//				this.mc.core.cursor3.x = 232;
			//				this.mc.core.cursor4.x = -1;
			//				this.mc.core.cursor5.x = 165;
			//				break;
			//			default:
			//				break;
			//		}
			//	}
			//	else if(this.param.mode == 2){
			//		this.gotoAndStop(2);
			//		//蠎ｧ讓呵ｨｭ螳�
			//
			//		this.mc.core.cursor0.x = -230;
			//		this.mc.core.cursor1.x = -70;
			//		this.mc.core.cursor2.x = 85;
			//		this.mc.core.cursor3.x = 238;
			//		this.mc.core.cursor6.x = 0;
			//		this.mc.core.cursor7.x = -120;
			//		this.mc.core.cursor8.x = 120;
			//
			//	}
			//
			//	//陦ｨ遉ｺ險ｭ螳�
			//	//this.type_change();
			//
			//	//蜍輔″螳溯｡�
			//	//this.run_talk(param);
			//}
			//
			//this.type_change = function(){
			//	this.temp_foward=0;
			//
			//	//陦ｨ遉ｺ,髱櫁｡ｨ遉ｺ
			//	for(var i=0; i<9; i++){
			//			if(this.param["position" + i + "_talk"] == 1){
			//				this.mc.core["cursor" + i].visible=true;
			//				if(i>=6){
			//					this.temp_foward=1;
			//				}
			//			}
			//			else{
			//				this.mc.core["cursor" + i].visible=false;
			//			}
			//	}
			//
			//
			//
			//	//陦ｨ遉ｺ繧ｿ繧､繝�
			//	if(this.param.speak_type == 2){
			//		this.speak_type_num = 5;
			//		this.mc.core.base.gotoAndStop(1);
			//	}
			//	else{
			//		this.speak_type_num = 0;
			//		this.mc.core.base.gotoAndStop(0);
			//	}
			//
			//
			//
			//	if(this.param.mode == 1){
			//		switch(this.param.chara_num){
			//			case 1:
			//				this.mc.core.cursor0.gotoAndStop((1 + this.speak_type_num));
			//				this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
			//				break;
			//			case 2:
			//				this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
			//				this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
			//				this.mc.core.cursor2.gotoAndStop((1 + this.speak_type_num));
			//				break;
			//			case 3:
			//				this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
			//				this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
			//				break;
			//			case 4:
			//				this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
			//				this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
			//				this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
			//				break;
			//			case 5:
			//				this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
			//				this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor3.gotoAndStop((2 + this.speak_type_num));
			//				this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
			//				this.mc.core.cursor5.gotoAndStop((0 + this.speak_type_num));
			//				break;
			//			default:
			//				break;
			//		}
			//	}
			//	else if(this.param.mode == 2){
			//		//蠎ｧ讓呵ｨｭ螳�
			//		this.mc.core.cursor0.gotoAndStop((0 + this.speak_type_num));
			//		this.mc.core.cursor1.gotoAndStop((0 + this.speak_type_num));
			//		this.mc.core.cursor2.gotoAndStop((0 + this.speak_type_num));
			//		this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
			//		this.mc.core.cursor6.gotoAndStop((4 + this.speak_type_num));
			//		this.mc.core.cursor7.gotoAndStop((4 + this.speak_type_num));
			//		this.mc.core.cursor8.gotoAndStop((4 + this.speak_type_num));
			//
			//	}
			//
			//
			//	return this.temp_foward;
			//}
			//
			//this.run_talk = function(param){
			//	this.param=param;
			//
			//	this.visible=true;
			//	this.speak_foward=0;
			//
			//	//陦ｨ遉ｺ險ｭ螳�
			//	this.speak_foward = this.type_change();
			//
			//	//螳溯｡�
			//	if(this.speak_foward == 1){
			//		this.mc.gotoAndPlay("start_up");
			//	}
			//	else{
			//		this.mc.gotoAndPlay("start");
			//	}
			//}
			//
			//this.finish_talk = function(){
			//	this.mc.gotoAndPlay("stay");
			//}
			//
			//
			////蜀�Κ縺九ｉ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ繧貞他縺ｳ蜃ｺ縺励※蠑墓焚繧貞沂繧∬ｾｼ繧
			//this.callback_set = function(){
			//	this.param.motion_finish_callback();
			//}
			//
			//
			//*/
			this.stop();
			this.visible = false;
			//蛻晄悄蛹�
			this.param = {};
			this.param.chara_num = 1; //繧ｲ繧ｹ繝医�莠ｺ謨ｰ : 1~5莠ｺ
			this.param.mode = 1; //1:騾壼ｸｸ, 2:繝｢繝九ち繝ｼ繧｢繝��
			this.param.speak_type = 1; //1:騾壼ｸｸ, 2:縺弱＊縺弱＊
			//蟾ｦ縺九ｉ1~5逡ｪ逶ｮ縺ｮ莠ｺ縺後＠繧�∋縺｣縺ｦ縺�ｋ縺九←縺�°(1:縺励ｃ縺ｹ繧�)
			this.param.position1_talk = 0;
			this.param.position2_talk = 0;
			this.param.position3_talk = 0;
			this.param.position4_talk = 0;
			this.param.position5_talk = 0;
			//MC
			this.param.position0_talk = 0;
			//繝｢繝九ち繝ｼ繧｢繝��譎ゅΔ繝九ち繝ｼ縺ｮ縺ｷ縺｡縺後＠繧�∋繧句�ｴ蜷�(荳雁髄縺�)
			this.param.position6_talk = 0;
			this.param.position7_talk = 0;
			this.param.position8_talk = 0;
			this.speak_type_num = 0; //蜷ｹ縺榊�縺励�繧ｿ繧､繝励ｒ螟峨∴繧九◆繧√�蝗ｺ螳壼､ 0 or 5
			this.speak_foward = 0; //0:繝�ヵ繧ｩ繝ｫ繝�  1:繝｢繝九ち繝ｼ譎ゅ↓荳翫↓縺�ｋ繧ｭ繝｣繝ｩ逕ｨ
			//繝｢繝ｼ繧ｷ繝ｧ繝ｳ邨ゅｏ繧翫↓霑斐☆callback縺ｮ蜿励￠逧ｿ
			this.param.motion_finish_callback = function () {};
			this.init = function (param) {
				this.param = param;
				this.visible = false; //荳譌ｦ髱櫁｡ｨ遉ｺ
				//y蠎ｧ讓吝崋螳�
				this.mc.core.cursor0.y = 78;
				this.mc.core.cursor1.y = 78;
				this.mc.core.cursor2.y = 78;
				this.mc.core.cursor3.y = 78;
				this.mc.core.cursor4.y = 78;
				this.mc.core.cursor5.y = 78;
				this.mc.core.cursor6.y = -78;
				this.mc.core.cursor7.y = -78;
				this.mc.core.cursor8.y = -78;
				if (this.param.mode == 1) {
					this.gotoAndStop(1);
					//蠎ｧ讓呵ｨｭ螳�
					switch (this.param.chara_num) {
					case 1:
						this.mc.core.cursor0.x = -171;
						this.mc.core.cursor1.x = 171;
						this.mc.core.cursor1.x = -1;
						break;
					case 2:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = 12;
						this.mc.core.cursor2.x = 192;
						break;
					case 3:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = -8;
						this.mc.core.cursor2.x = 212;
						this.mc.core.cursor3.x = 101;
						break;
					case 4:
						this.mc.core.cursor0.x = -161;
						this.mc.core.cursor1.x = -38;
						this.mc.core.cursor2.x = 132;
						this.mc.core.cursor3.x = 31;
						this.mc.core.cursor4.x = 201;
						break;
					case 5:
						this.mc.core.cursor0.x = -171;
						this.mc.core.cursor1.x = -78;
						this.mc.core.cursor2.x = 82;
						this.mc.core.cursor3.x = 232;
						this.mc.core.cursor4.x = -1;
						this.mc.core.cursor5.x = 165;
						break;
					default:
						break;
					}
				} else if (this.param.mode == 2) {
					this.gotoAndStop(2);
					//蠎ｧ讓呵ｨｭ螳�
					this.mc.core.cursor0.x = -230;
					this.mc.core.cursor1.x = -70;
					this.mc.core.cursor2.x = 85;
					this.mc.core.cursor3.x = 238;
					this.mc.core.cursor6.x = 0;
					this.mc.core.cursor7.x = -120;
					this.mc.core.cursor8.x = 120;
				}
				//陦ｨ遉ｺ險ｭ螳�
				//this.type_change();
				//蜍輔″螳溯｡�
				//this.run_talk(param);
			}
			this.type_change = function () {
				this.temp_foward = 0;
				//陦ｨ遉ｺ,髱櫁｡ｨ遉ｺ
				for (var i = 0; i < 9; i++) {
					if (this.param["position" + i + "_talk"] == 1) {
						this.mc.core["cursor" + i].visible = true;
						if (i >= 6) {
							this.temp_foward = 1;
						}
					} else {
						this.mc.core["cursor" + i].visible = false;
					}
				}
				//陦ｨ遉ｺ繧ｿ繧､繝�
				if (this.param.speak_type == 2) {
					this.speak_type_num = 5;
					this.mc.core.base.gotoAndStop(1);
				} else {
					this.speak_type_num = 0;
					this.mc.core.base.gotoAndStop(0);
				}
				if (this.param.mode == 1) {
					switch (this.param.chara_num) {
					case 1:
						this.mc.core.cursor0.gotoAndStop((1 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
						break;
					case 2:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((1 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((1 + this.speak_type_num));
						break;
					case 3:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
						break;
					case 4:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
						this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
						break;
					case 5:
						this.mc.core.cursor0.gotoAndStop((3 + this.speak_type_num));
						this.mc.core.cursor1.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor2.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor3.gotoAndStop((2 + this.speak_type_num));
						this.mc.core.cursor4.gotoAndStop((0 + this.speak_type_num));
						this.mc.core.cursor5.gotoAndStop((0 + this.speak_type_num));
						break;
					default:
						break;
					}
				} else if (this.param.mode == 2) {
					//蠎ｧ讓呵ｨｭ螳�
					this.mc.core.cursor0.gotoAndStop((0 + this.speak_type_num));
					this.mc.core.cursor1.gotoAndStop((0 + this.speak_type_num));
					this.mc.core.cursor2.gotoAndStop((0 + this.speak_type_num));
					this.mc.core.cursor3.gotoAndStop((0 + this.speak_type_num));
					this.mc.core.cursor6.gotoAndStop((4 + this.speak_type_num));
					this.mc.core.cursor7.gotoAndStop((4 + this.speak_type_num));
					this.mc.core.cursor8.gotoAndStop((4 + this.speak_type_num));
				}
				return this.temp_foward;
			}
			this.run_talk = function (param) {
				this.param = param;
				this.visible = true;
				this.speak_foward = 0;
				//陦ｨ遉ｺ險ｭ螳�
				this.speak_foward = this.type_change();
				//螳溯｡�
				if (this.speak_foward == 1) {
					this.mc.gotoAndPlay("start_up");
				} else {
					this.mc.gotoAndPlay("start");
				}
			}
			this.finish_talk = function () {
				this.mc.gotoAndPlay("stay");
			}
			//蜀�Κ縺九ｉ繧ｳ繝ｼ繝ｫ繝舌ャ繧ｯ繧貞他縺ｳ蜃ｺ縺励※蠑墓焚繧貞沂繧∬ｾｼ繧
			this.callback_set = function () {
				this.param.motion_finish_callback();
			}
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));
		// mc
		this.mc = new lib.mc_fkds_set();
		this.mc.name = "mc";
		this.mc.parent = this;
		this.mc.setTransform(672, 0);
		this.timeline.addTween(cjs.Tween.get(this.mc).wait(1).to({
			x: 0
		}, 0).wait(1).to({
			y: 399
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-304, -84, 1963, 601);
	// stage content:
	(lib.petit_balloon = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		// timeline functions:
		this.frame_0 = function () {
			///* js
			//
			//this.cjs005_balloon.stop();
			//
			//*/
			this.cjs005_balloon.stop();
			////------------------------------------------------
			////縲鄂ｮ謠帷畑螟画焚
			////------------------------------------------------
			//
			///**
			//small_character_flg = 0;//0:繝弱�繝槭Ν, 1:蟆上＆縺�ｭ�
			//big_character_flg = 0;//0:繝弱�繝槭Ν, 1:縺阪ｉ繧�
			//cheek_type = 2;//閧瑚牡縺ｮ繧ｿ繧､繝� 1:縺ｵ縺､縺� 2:隍占牡
			//
			//
			//chara_num = 5;//隧ｱ縺励※縺�ｋ莠ｺ謨ｰ : 1~10莠ｺ
			//chara_order = 5;//蟾ｦ縺九ｉ謨ｰ縺医※菴慕分逶ｮ縺ｮ菴咲ｽｮ
			//
			//init_motion="in_walk";
			//
			//
			//
			////*/
			//
			//
			////------------------------------------------------
			////縲蝗ｺ螳壼､画焚
			////------------------------------------------------
			//interrupt_flg = false;
			//
			////postfix = "";
			////if (small_character_flg) {
			////	postfix = "_small";
			////}
			////
			////if (big_character_flg) {
			////	gotoAndStop("ch/:2");
			////} else {
			////	gotoAndStop("ch/:1");
			////}
			////
			//
			//motion_act=init_motion;
			//
			//call( "init" );
			//
		}
		this.frame_1 = function () {
			/* //call( "init" );
		stop();*/
		}
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15));
		// mc
		this.cjs005_balloon = new lib.cjs005_balloon();
		this.cjs005_balloon.name = "cjs005_balloon";
		this.cjs005_balloon.parent = this;
		this.cjs005_balloon.setTransform(320, 60.5, 1, 1, 0, 0, 0, 0, -55.5);
		this.timeline.addTween(cjs.Tween.get(this.cjs005_balloon).wait(16));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(320, 420, 1659, 420);
	// library properties:
	lib.properties = {
		id: 'petit_balloon',
		width: 640,
		height: 840,
		fps: 12,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [{
			src: "images/petit_balloon_atlas_.png?1612780042444",
			id: "petit_balloon_atlas_"
		}],
		preloads: []
	};
	// bootstrap callback support:
	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
	}
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	}
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
	}
	p.getDuration = function () {
		return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
	}
	p.getTimelinePosition = function () {
		return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
	}
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}
	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	an.compositions = an.compositions || {};
	an.compositions['petit_balloon'] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		}
	};
	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	an.getComposition = function (id) {
		return an.compositions[id];
	}
	an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();

		function resizeCanvas() {
			var w = lib.properties.width,
				h = lib.properties.height;
			var iw = window.innerWidth,
				ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1,
				xRatio = iw / w,
				yRatio = ih / h,
				sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				} else if (!isScale) {
					if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
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
})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
