;(function($){

	$.fn.ou = function(conf){

		var slf = $(this).selector.substring(1);
		var def = {
			tf : false,
			mk : true
		};

		return this.each(function(){

			var isTouch = ("ontouchend" in window? "click": "click");
			var n = {
				bt : slf+"_btn",
				cl : slf+"_close",
				ma : slf+"_mask"
			};
			var t = $(this);
			t.hide();
			t.css({
				"position"	: "absolute",
				"z-index"	: 0x7FFFFFFF,
			});

			var centerOffset = function($el, $window, zoom){

				zoom = typeof(zoom) === "undefined" ? 1 : Number(zoom);

				var wHeight = window.innerHeight ? window.innerHeight : $(window).height();
				var wWidth  = window.innerWidth  ? window.innerWidth  : $(window).width();

				var top = (wHeight / zoom - $el.height()) / 2;
				var left = (wWidth / zoom - $el.width()) / 2;
				return {top: Math.round(top), left: Math.round(left)};
			};

			t.before("<div class='"+n.ma+"' onClick=''></div>");	// "+n.cl+"

			var m = $("."+n.ma);
			m.hide();
			m.css({
				"position"	: "fixed",
				"top"		: "0px",
				"left"		: "0px",
				"width"		: "100%",
				"height"	: "120%",
				"background": "#000",
				"background-color": "rgba(0, 0, 0, 0.8)",
				"z-index"	: 0x7FFFFFFF,
			});

			m.append(t);

			var tid = null;

			$(document).on(isTouch, "."+n.cl, function(e){
				e.preventDefault();
				clearInterval(tid);
				tid = null;
				t.hide();
				m.hide();
			});

			$(document).on(isTouch, "."+n.bt, function(e){
				e.preventDefault();

				var zm = 1;
				var deviceRatio = window.innerWidth / 320;
				if (deviceRatio < 1.5) {
					zm = deviceRatio;
				}

				if(def.mk){m.show();}
				if(t.css("display") == "none"){
					if(tid !== null){clearInterval(tid);}
					t.hide();

					var htmlZoom = $("html").css("zoom");
					var zoomValue = (htmlZoom >= 2) ? 1 : htmlZoom;

					var position = centerOffset(t, $(window), zoomValue);
					//t.css("top", (($(window).height() / zm - t.height()) / 12 + ($(document).scrollTop() / zm )) + "px");
					//t.css("left", (($(window).width() / zm - t.width()) / 2)  + "px");
					t.css('top', position.top);
					t.css('left', position.left);
					t.show();
					var mask_height = t.height()+parseInt(t.css("top").replace("px", ""), 10);

					console.log(m.height());
					console.log(mask_height);

					if(!def.tf){return;}
				}
			});
		});
	};
})(jQuery);
