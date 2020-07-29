(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"tracingFlow_atlas_", frames: [[125,500,123,123],[126,0,123,123],[251,0,123,123],[376,0,123,123],[126,125,123,123],[0,126,123,123],[251,125,123,123],[0,0,124,124],[376,125,123,123],[125,250,123,123],[0,251,123,123],[250,250,123,123],[375,250,123,123],[125,375,123,123],[0,376,123,123],[250,375,123,123],[375,375,123,123],[0,501,16,14]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1_1 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._1_2 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._1_3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._2_1 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._2_2 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._2_3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._3_1 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._3_2 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._3_3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._4_1 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._4_2 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._4_3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.矩形3 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.箭头拷贝7 = function() {
	this.spriteSheet = ss["tracingFlow_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.补间155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间143 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.instance_1 = new lib.箭头拷贝7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.箭头拷贝7();
	this.instance.parent = this;
	this.instance.setTransform(-8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-7,16,14);


(lib.补间123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.矩形3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("装箱", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4_3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("装瓶贴标", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3_3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("过滤", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2_2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("补液", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1_3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("阴凉存放", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("阴凉存放", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("阴凉存放", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4_2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("木桶熟成", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("木桶熟成", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("木桶熟成", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3_2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("压榨汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("压榨汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("压榨汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2_1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("自然流出汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("自然流出汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("自然流出汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1_2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("放酒过程", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4_1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("搅拌葡萄皮和汁", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 147;
	this.text.parent = this;
	this.text.setTransform(0,-17.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.3,-19.6,150.6,39.3);


(lib.补间41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3_1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("带皮发酵", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("留下枝梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("留下枝梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("留下枝梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1_1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("除梗机去梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("除梗机去梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("除梗机去梗", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-26.1,104,52.2);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工筛选", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-14.8,104,29.7);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工筛选", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-14.8,104,29.7);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工筛选", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-14.8,104,29.7);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工采摘", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工采摘", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("人工采摘", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-13.5,104,27.1);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2_3();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,124,124);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("挑选成熟的葡萄  ", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-14,133.6,28.2);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("挑选成熟的葡萄  ", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-14,133.6,28.2);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("挑选成熟的葡萄  ", "18px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(0,-12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,-14,133.6,28.2);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-61.5,123,123);


// stage content:
(lib.tracingFlow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_161 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(161).call(this.frame_161).wait(3));

	// jiantou16
	this.instance = new lib.补间154("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(76,823,0.5,0.5,0,0,180);
	this.instance._off = true;

	this.instance_1 = new lib.补间155("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(76,823,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},158).to({state:[{t:this.instance_1}]},3).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(158).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},3).wait(3));

	// t16
	this.instance_2 = new lib.补间91("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,812.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(155).to({_off:false},0).to({y:808.5},3).to({y:812.1},3).wait(3));

	// 图层 16
	this.instance_3 = new lib.补间88("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(108.6,714.5,0.5,0.5,0,0,0,0.1,0);
	this.instance_3.alpha = 0.699;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(153).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:84.6,alpha:1},8).wait(3));

	// bg4   复制 3
	this.instance_4 = new lib.补间123("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(147.4,714.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_4.alpha = 0.699;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:66.5,alpha:1},5).wait(9));

	// jiantou15
	this.instance_5 = new lib.补间153("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(237,823,0.5,0.5,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(148).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(12));

	// t15
	this.instance_6 = new lib.补间85("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(237,812.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(145).to({_off:false},0).to({y:807.7},3).to({y:812.1},3).wait(13));

	// 图层 15
	this.instance_7 = new lib.补间82("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(271.7,714.7,0.5,0.5,0,0,0,0,0.1);
	this.instance_7.alpha = 0.699;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(143).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:246.5,alpha:1},8).wait(13));

	// bg3   复制 3
	this.instance_8 = new lib.补间121("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(312.5,714.6,0.2,0.2,0,0,0,0.3,0);
	this.instance_8.alpha = 0.699;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:227.5,alpha:1},5).wait(19));

	// jiantou14
	this.instance_9 = new lib.补间151("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(400.1,823,0.5,0.5,0,0,180);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(138).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(22));

	// t14
	this.instance_10 = new lib.补间80("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(398.7,799.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(135).to({_off:false},0).to({y:795.6},3).to({y:799.6},3).wait(23));

	// 图层 14
	this.instance_11 = new lib.补间77("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(432.5,714.6,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0.699;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:406.4,alpha:1},8).wait(23));

	// bg2   复制 3
	this.instance_12 = new lib.补间119("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(471.5,714.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_12.alpha = 0.699;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:389.5,alpha:1},5).wait(29));

	// jiantou13
	this.instance_13 = new lib.补间149("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(560.1,823,0.5,0.5,0,0,180,-0.1,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(128).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},4).wait(32));

	// t13
	this.instance_14 = new lib.补间75("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(559,799.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(125).to({_off:false},0).to({y:795.7},3).to({y:799.6},3).wait(33));

	// 图层 13
	this.instance_15 = new lib.补间72("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(568.5,680.9,0.5,0.5);
	this.instance_15.alpha = 0.699;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(123).to({_off:false},0).to({scaleX:1,scaleY:1,y:714.5,alpha:1},8).wait(33));

	// bg1   复制 3
	this.instance_16 = new lib.补间117("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(550.5,658.6,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_16.alpha = 0.699;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:714.5,alpha:1},5).wait(39));

	// jiantou12
	this.instance_17 = new lib.补间146("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(561,621,0.5,0.5,90,0,0,0,0.1);
	this.instance_17._off = true;

	this.instance_18 = new lib.补间147("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(561.1,621,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},118).to({state:[{t:this.instance_18}]},4).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(118).to({_off:false},0).to({_off:true,regY:0,scaleX:1,scaleY:1,x:561.1},4).wait(42));

	// t12
	this.instance_19 = new lib.补间70("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(560,608.2);
	this.instance_19._off = true;

	this.instance_20 = new lib.补间68("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(560,604.4);
	this.instance_20._off = true;

	this.instance_21 = new lib.补间69("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(560,608.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},115).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(115).to({_off:false},0).to({_off:true,y:604.4},3).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(115).to({_off:false},3).to({_off:true,y:608.2},3).wait(43));

	// 图层 12
	this.instance_22 = new lib.补间67("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(512.2,510.5,0.5,0.5);
	this.instance_22.alpha = 0.699;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(113).to({_off:false},0).to({scaleX:1,scaleY:1,x:568.5,alpha:1},8).wait(43));

	// bg4  复制 2
	this.instance_23 = new lib.补间115("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(476.8,511.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_23.alpha = 0.699;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(110).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:550.5,alpha:1},5).wait(49));

	// jiantou11
	this.instance_24 = new lib.补间144("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(397,621,0.5,0.5);
	this.instance_24._off = true;

	this.instance_25 = new lib.补间145("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(397,621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},108).to({state:[{t:this.instance_25}]},4).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(108).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(52));

	// t11
	this.instance_26 = new lib.补间63("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(399,608.2);
	this.instance_26._off = true;

	this.instance_27 = new lib.补间64("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(399,604.4);
	this.instance_27._off = true;

	this.instance_28 = new lib.补间65("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(399,608.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},105).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(105).to({_off:false},0).to({_off:true,y:604.4},3).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(105).to({_off:false},3).to({_off:true,y:608.2},3).wait(53));

	// 图层 11
	this.instance_29 = new lib.补间62("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(350.7,510.5,0.5,0.5);
	this.instance_29.alpha = 0.699;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(103).to({_off:false},0).to({scaleX:1,scaleY:1,x:407.5,alpha:1},8).wait(53));

	// bg3  复制 2
	this.instance_30 = new lib.补间113("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(316.8,511.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_30.alpha = 0.699;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(100).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:389.5,alpha:1},5).wait(59));

	// jiantou10
	this.instance_31 = new lib.补间142("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(237,621,0.5,0.5);
	this.instance_31._off = true;

	this.instance_32 = new lib.补间143("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(237,621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_31}]},98).to({state:[{t:this.instance_32}]},4).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(98).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(62));

	// t10
	this.instance_33 = new lib.补间58("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(236.2,608.2);
	this.instance_33._off = true;

	this.instance_34 = new lib.补间59("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(236.2,604.4);
	this.instance_34._off = true;

	this.instance_35 = new lib.补间60("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(236.2,608.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},95).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(95).to({_off:false},0).to({_off:true,y:604.4},3).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(95).to({_off:false},3).to({_off:true,y:608.2},3).wait(63));

	// 图层 10
	this.instance_36 = new lib.补间57("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(190.2,510.5,0.5,0.5);
	this.instance_36.alpha = 0.699;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(93).to({_off:false},0).to({scaleX:1,scaleY:1,x:246.5,alpha:1},8).wait(63));

	// bg2  复制 2
	this.instance_37 = new lib.补间111("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(159.4,510.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_37.alpha = 0.699;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(90).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:227.5,alpha:1},5).wait(69));

	// jiantou9
	this.instance_38 = new lib.补间140("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(76,621,0.5,0.5);
	this.instance_38._off = true;

	this.instance_39 = new lib.补间141("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(76,621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38}]},88).to({state:[{t:this.instance_39}]},4).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(88).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(72));

	// t9
	this.instance_40 = new lib.补间53("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(76,608.2);
	this.instance_40._off = true;

	this.instance_41 = new lib.补间54("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(76,604.4);
	this.instance_41._off = true;

	this.instance_42 = new lib.补间55("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(76,608.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},85).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(85).to({_off:false},0).to({_off:true,y:604.4},3).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(85).to({_off:false},3).to({_off:true,y:608.2},3).wait(73));

	// 图层 9
	this.instance_43 = new lib.补间52("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(85.5,482.1,0.5,0.5);
	this.instance_43.alpha = 0.699;
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(83).to({_off:false},0).to({scaleX:1,scaleY:1,y:510.5,alpha:1},8).wait(73));

	// bg1  复制 2
	this.instance_44 = new lib.补间109("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(67.5,439.7,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_44.alpha = 0.699;
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(80).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:510.5,alpha:1},5).wait(79));

	// jiantou8
	this.instance_45 = new lib.补间139("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(76,409,0.5,0.5,90,0,0,0,0.1);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(78).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:76.1},4).wait(82));

	// t8
	this.instance_46 = new lib.补间50("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(75,399);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(75).to({_off:false},0).to({y:395.1},3).to({y:399},3).wait(83));

	// 图层 8
	this.instance_47 = new lib.补间47("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(110.4,300.7,0.5,0.5,0,0,0,0.1,0);
	this.instance_47.alpha = 0.699;
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(73).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:84.5,alpha:1},8).wait(83));

	// bg4 复制
	this.instance_48 = new lib.补间107("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(149.9,300.7,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_48.alpha = 0.699;
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(70).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:66.7,alpha:1},5).wait(89));

	// jiantou7
	this.instance_49 = new lib.补间137("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(241.5,409,0.5,0.5,0,0,180);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(68).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(92));

	// t7
	this.instance_50 = new lib.补间45("synched",0);
	this.instance_50.parent = this;
	this.instance_50.setTransform(237.4,392.5);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(65).to({_off:false},0).to({y:389.5},3).to({y:392.5},3).wait(93));

	// 图层 7
	this.instance_51 = new lib.补间41("synched",0);
	this.instance_51.parent = this;
	this.instance_51.setTransform(266.5,300.7,0.5,0.5,0,0,180);
	this.instance_51.alpha = 0.699;
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(63).to({_off:false},0).to({scaleX:1,scaleY:1,x:246.5,alpha:1},8).wait(93));

	// bg3 复制
	this.instance_52 = new lib.补间104("synched",0);
	this.instance_52.parent = this;
	this.instance_52.setTransform(301.9,300.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_52.alpha = 0.699;
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(60).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:227.5,alpha:1},5).wait(99));

	// jiantou6
	this.instance_53 = new lib.补间135("synched",0);
	this.instance_53.parent = this;
	this.instance_53.setTransform(402.6,409,0.5,0.5,0,0,180,0.1,0);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(58).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},4).wait(102));

	// t6
	this.instance_54 = new lib.补间39("synched",0);
	this.instance_54.parent = this;
	this.instance_54.setTransform(396.5,386.8);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(55).to({_off:false},0).to({y:383},3).to({y:386.8},3).wait(103));

	// 图层 6
	this.instance_55 = new lib.补间37("synched",0);
	this.instance_55.parent = this;
	this.instance_55.setTransform(432,300.5,0.5,0.5,0,0,0,0.1,0);
	this.instance_55.alpha = 0.699;
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(53).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:412.5,alpha:1},8).wait(103));

	// bg2 复制
	this.instance_56 = new lib.补间103("synched",0);
	this.instance_56.parent = this;
	this.instance_56.setTransform(471.2,300.7,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_56.alpha = 0.699;
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(50).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:389.2,alpha:1},5).wait(109));

	// jiantou5
	this.instance_57 = new lib.补间133("synched",0);
	this.instance_57.parent = this;
	this.instance_57.setTransform(557,409,0.5,0.5,0,0,180);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1},4).wait(112));

	// t5
	this.instance_58 = new lib.补间33("synched",0);
	this.instance_58.parent = this;
	this.instance_58.setTransform(559,401);
	this.instance_58._off = true;

	this.instance_59 = new lib.补间34("synched",0);
	this.instance_59.parent = this;
	this.instance_59.setTransform(559,392.3);
	this.instance_59._off = true;

	this.instance_60 = new lib.补间35("synched",0);
	this.instance_60.parent = this;
	this.instance_60.setTransform(559,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58}]},45).to({state:[{t:this.instance_59}]},3).to({state:[{t:this.instance_60}]},3).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(45).to({_off:false},0).to({_off:true,y:392.3},3).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(45).to({_off:false},3).to({_off:true,y:399},3).wait(113));

	// 图层 5
	this.instance_61 = new lib.补间32("synched",0);
	this.instance_61.parent = this;
	this.instance_61.setTransform(541.5,272,0.5,0.5);
	this.instance_61.alpha = 0.699;
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,x:568.5,y:300.5,alpha:1},8).wait(113));

	// bg1 复制
	this.instance_62 = new lib.补间101("synched",0);
	this.instance_62.parent = this;
	this.instance_62.setTransform(550.5,229.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_62.alpha = 0.699;
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(40).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:300.5,alpha:1},5).wait(119));

	// jiantou4
	this.instance_63 = new lib.补间130("synched",0);
	this.instance_63.parent = this;
	this.instance_63.setTransform(561,206,0.5,0.5,90,0,0,0.1,0.1);
	this.instance_63._off = true;

	this.instance_64 = new lib.补间131("synched",0);
	this.instance_64.parent = this;
	this.instance_64.setTransform(561.1,206,1,1,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_63}]},38).to({state:[{t:this.instance_64}]},4).wait(122));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(38).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:561.1},4).wait(122));

	// t4
	this.instance_65 = new lib.补间26("synched",0);
	this.instance_65.parent = this;
	this.instance_65.setTransform(559,195);
	this.instance_65._off = true;

	this.instance_66 = new lib.补间27("synched",0);
	this.instance_66.parent = this;
	this.instance_66.setTransform(559,179.7);
	this.instance_66._off = true;

	this.instance_67 = new lib.补间28("synched",0);
	this.instance_67.parent = this;
	this.instance_67.setTransform(559,195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_65}]},35).to({state:[{t:this.instance_66}]},3).to({state:[{t:this.instance_67}]},3).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(35).to({_off:false},0).to({_off:true,y:179.7},3).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(35).to({_off:false},3).to({_off:true,y:195},3).wait(123));

	// 图层 4
	this.instance_68 = new lib.补间24("synched",0);
	this.instance_68.parent = this;
	this.instance_68.setTransform(511,96.5,0.5,0.5);
	this.instance_68.alpha = 0.699;
	this.instance_68._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,x:568.5,alpha:1},8).wait(123));

	// bg4
	this.instance_69 = new lib.补间99("synched",0);
	this.instance_69.parent = this;
	this.instance_69.setTransform(476,96.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_69.alpha = 0.699;
	this.instance_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(30).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:550.5,alpha:1},5).wait(129));

	// jiantou3
	this.instance_70 = new lib.补间128("synched",0);
	this.instance_70.parent = this;
	this.instance_70.setTransform(398,206,0.5,0.5);
	this.instance_70._off = true;

	this.instance_71 = new lib.补间129("synched",0);
	this.instance_71.parent = this;
	this.instance_71.setTransform(398,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_70}]},28).to({state:[{t:this.instance_71}]},4).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(28).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(132));

	// t3
	this.instance_72 = new lib.补间18("synched",0);
	this.instance_72.parent = this;
	this.instance_72.setTransform(397.5,183.7);
	this.instance_72._off = true;

	this.instance_73 = new lib.补间19("synched",0);
	this.instance_73.parent = this;
	this.instance_73.setTransform(397.5,176.2);
	this.instance_73._off = true;

	this.instance_74 = new lib.补间20("synched",0);
	this.instance_74.parent = this;
	this.instance_74.setTransform(397.5,183.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_72}]},25).to({state:[{t:this.instance_73}]},3).to({state:[{t:this.instance_74}]},3).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(25).to({_off:false},0).to({_off:true,y:176.2},3).wait(136));
	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(25).to({_off:false},3).to({_off:true,y:183.7},3).wait(133));

	// 图层 3
	this.instance_75 = new lib.补间17("synched",0);
	this.instance_75.parent = this;
	this.instance_75.setTransform(349.3,96.5,0.5,0.5);
	this.instance_75.alpha = 0.699;
	this.instance_75._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(23).to({_off:false},0).to({scaleX:1,scaleY:1,x:408.5,alpha:1},8).wait(133));

	// bg3
	this.instance_76 = new lib.补间97("synched",0);
	this.instance_76.parent = this;
	this.instance_76.setTransform(312.1,96.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_76.alpha = 0.699;
	this.instance_76._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(20).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:390.5,alpha:1},5).wait(139));

	// jiantou2
	this.instance_77 = new lib.补间126("synched",0);
	this.instance_77.parent = this;
	this.instance_77.setTransform(237,206,0.5,0.5);
	this.instance_77._off = true;

	this.instance_78 = new lib.补间127("synched",0);
	this.instance_78.parent = this;
	this.instance_78.setTransform(237,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77}]},18).to({state:[{t:this.instance_78}]},4).wait(142));
	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(18).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(142));

	// t2
	this.instance_79 = new lib.补间13("synched",0);
	this.instance_79.parent = this;
	this.instance_79.setTransform(235.9,182.5);
	this.instance_79._off = true;

	this.instance_80 = new lib.补间14("synched",0);
	this.instance_80.parent = this;
	this.instance_80.setTransform(235.9,175.9);
	this.instance_80._off = true;

	this.instance_81 = new lib.补间15("synched",0);
	this.instance_81.parent = this;
	this.instance_81.setTransform(235.9,182.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_79}]},15).to({state:[{t:this.instance_80}]},3).to({state:[{t:this.instance_81}]},3).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(15).to({_off:false},0).to({_off:true,y:175.9},3).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(15).to({_off:false},3).to({_off:true,y:182.5},3).wait(143));

	// 图层 2
	this.instance_82 = new lib.补间12("synched",0);
	this.instance_82.parent = this;
	this.instance_82.setTransform(191,96.5,0.5,0.5);
	this.instance_82.alpha = 0.699;
	this.instance_82._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:246.5,alpha:1},8).wait(143));

	// bg2
	this.instance_83 = new lib.补间95("synched",0);
	this.instance_83.parent = this;
	this.instance_83.setTransform(160.4,96.5,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_83.alpha = 0.699;
	this.instance_83._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(10).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:227.5,alpha:1},5).wait(149));

	// jiantou1
	this.instance_84 = new lib.补间124("synched",0);
	this.instance_84.parent = this;
	this.instance_84.setTransform(76,206,0.5,0.5);
	this.instance_84._off = true;

	this.instance_85 = new lib.补间125("synched",0);
	this.instance_85.parent = this;
	this.instance_85.setTransform(76,206);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_84}]},8).to({state:[{t:this.instance_85}]},4).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(8).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},4).wait(152));

	// t1
	this.instance_86 = new lib.补间3("synched",0);
	this.instance_86.parent = this;
	this.instance_86.setTransform(76,183);
	this.instance_86._off = true;

	this.instance_87 = new lib.补间4("synched",0);
	this.instance_87.parent = this;
	this.instance_87.setTransform(76,177.3);
	this.instance_87._off = true;

	this.instance_88 = new lib.补间5("synched",0);
	this.instance_88.parent = this;
	this.instance_88.setTransform(76,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_86}]},5).to({state:[{t:this.instance_87}]},3).to({state:[{t:this.instance_88}]},3).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(5).to({_off:false},0).to({_off:true,y:177.3},3).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(5).to({_off:false},3).to({_off:true,y:183},3).wait(153));

	// 图层 1
	this.instance_89 = new lib.补间2("synched",0);
	this.instance_89.parent = this;
	this.instance_89.setTransform(50.2,96.5,0.5,0.5);
	this.instance_89.alpha = 0.699;
	this.instance_89._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,x:85.5,alpha:1},8).wait(153));

	// bg1
	this.instance_90 = new lib.补间93("synched",0);
	this.instance_90.parent = this;
	this.instance_90.setTransform(67.5,96.5,0.5,0.5);
	this.instance_90.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_90).to({scaleX:1,scaleY:1,alpha:1},5).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.8,584.8,61.5,61.5);
// library properties:
lib.properties = {
	width: 640,
	height: 1038,
	fps: 24,
	color: "#454545",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/tracingFlow/tracingFlow_atlas_.png", id:"tracingFlow_atlas_"}
	],
	preloads: []
};




})(tracingFlowLib = tracingFlowLib||{}, tracingFlowImages = tracingFlowImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var tracingFlowLib, tracingFlowImages, createjs, ss, AdobeAn;