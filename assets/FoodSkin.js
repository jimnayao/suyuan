(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"FoodSkin_atlas_", frames: [[0,646,640,637],[0,0,640,644],[642,0,640,644],[1284,0,640,644],[642,646,130,169],[774,646,72,72],[774,720,72,72]]}
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



(lib.img1 = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.img2 = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.img3 = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.img4 = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.IP = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.left = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.right = function() {
	this.spriteSheet = ss["FoodSkin_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.补间26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("蔬果沙拉、鸡蛋沙拉、肉菜沙拉等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(0,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.2,-35.4,364.4,70.8);


(lib.补间25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("蔬果沙拉、鸡蛋沙拉、肉菜沙拉等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(0,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.2,-35.4,364.4,70.8);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("新鲜奶酪、蓝纹奶酪、山羊奶酪、奶油奶酪等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 472;
	this.text.parent = this;
	this.text.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-28,475.8,56.1);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("新鲜奶酪、蓝纹奶酪、山羊奶酪、奶油奶酪等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 472;
	this.text.parent = this;
	this.text.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.9,-28,475.8,56.1);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("小点心、冷冻开胃菜、开胃汤等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 351;
	this.text.parent = this;
	this.text.setTransform(0,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.3,-35.4,354.7,70.8);


(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("鱼肉、虾肉、贝类、鸡肉、鸭肉等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 386;
	this.text.parent = this;
	this.text.setTransform(0,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.1,-46.6,390.4,93.3);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("鱼肉、虾肉、贝类、鸡肉、鸭肉等", "23px 'Microsoft YaHei'", "#5F636C");
	this.text.textAlign = "center";
	this.text.lineHeight = -61;
	this.text.lineWidth = 386;
	this.text.parent = this;
	this.text.setTransform(0,-44.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.1,-46.6,390.4,93.3);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(0,-325);

	this.instance_1 = new lib.img4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-640,-325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-325,1280,644);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(0,-324);

	this.instance_1 = new lib.img3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-640,-324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-324,1280,644);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(0,-324);

	this.instance_1 = new lib.img3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-640,-324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-324,1280,644);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(0,-324);

	this.instance_1 = new lib.img2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-640,-324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-324,1280,644);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(0,-324);

	this.instance_1 = new lib.img2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-640,-324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-324,1280,644);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-320,-325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-325,640,637);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(0,-325);

	this.instance_1 = new lib.补间3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-320,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-325,1280,644);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(0,-325);

	this.instance_1 = new lib.补间3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-320,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-325,1280,644);


// stage content:
(lib.FoodSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(12).call(this.frame_26).wait(12).call(this.frame_38).wait(12).call(this.frame_50).wait(12).call(this.frame_62).wait(12).call(this.frame_74).wait(12).call(this.frame_86).wait(12).call(this.frame_98).wait(1));

	// arrows
	this.instance = new lib.left();
	this.instance.parent = this;
	this.instance.setTransform(26,612);

	this.instance_1 = new lib.right();
	this.instance_1.parent = this;
	this.instance_1.setTransform(543,612);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(99));

	// main
	this.instance_2 = new lib.IP();
	this.instance_2.parent = this;
	this.instance_2.setTransform(256,36);

	this.text = new cjs.Text("最 佳 美 食 搭 配", "26px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = -57;
	this.text.lineWidth = 221;
	this.text.parent = this;
	this.text.setTransform(320.7,270.4);

	this.text_1 = new cjs.Text(" FOOD SUGGESTION", "29px 'Didot'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = -55;
	this.text_1.lineWidth = 329;
	this.text_1.parent = this;
	this.text_1.setTransform(320.4,230.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CE0035").ss(1,1,1).p("AvxAAIfkAA");
	this.shape.setTransform(320.9,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instance_2}]}).wait(99));

	// text1
	this.instance_3 = new lib.补间24("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.2,347,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间23("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.2,347);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(1).to({_off:false,regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).to({_off:true},31).to({_off:false},5).wait(37).to({startPosition:0},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},5).wait(1).to({startPosition:0},0).to({_off:true,regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(31).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},0).to({_off:true,regX:0.1,regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(37).to({_off:false,regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(1));

	// text2
	this.instance_5 = new lib.补间20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(323.1,365.6,0.5,0.5,0,0,0,0.1,0.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.补间21("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(323.1,365.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},5).to({startPosition:0},1).to({regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(49).to({startPosition:0},0).to({regY:0,scaleX:1,scaleY:1,alpha:1},5).wait(1).to({startPosition:0},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(7));

	// text3
	this.instance_7 = new lib.补间22("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(320.9,354.3,0.5,0.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(33).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},5).to({startPosition:0},1).to({scaleX:0.5,scaleY:0.5,alpha:0},5).wait(25).to({startPosition:0},0).to({scaleX:1,scaleY:1,alpha:1},5).wait(1).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,alpha:0},5).wait(19));

	// text4
	this.instance_8 = new lib.补间26("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(319.8,354.3);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间25("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(319.8,354.3,0.5,0.5,0,0,0,0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({_off:true,regX:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(37).to({_off:false,regX:0,scaleX:1,scaleY:1,alpha:1},5).to({_off:true},7).to({_off:false},5).wait(1).to({startPosition:0},0).to({_off:true,regX:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},5).wait(37).to({startPosition:0},0).to({_off:true,regX:0,scaleX:1,scaleY:1,alpha:1},5).wait(7).to({_off:false,regX:0.1,scaleX:0.5,scaleY:0.5,alpha:0},0).to({_off:true,regX:0,scaleX:1,scaleY:1,alpha:1},5).wait(1).to({_off:false,regX:0.1,scaleX:0.5,scaleY:0.5,alpha:0},5).wait(31));

	// img3 复制
	this.instance_10 = new lib.补间6("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,705);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(87).to({_off:false},0).to({x:640},11).wait(1));

	// img2 复制
	this.instance_11 = new lib.补间8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,704);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75).to({_off:false},0).to({x:640},11).wait(13));

	// img1 复制
	this.instance_12 = new lib.补间10("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,704.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(63).to({_off:false},0).to({x:640,y:704.3},11).wait(25));

	// img4 复制
	this.instance_13 = new lib.补间11("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,705.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).to({x:640},11).wait(37));

	// img4
	this.instance_14 = new lib.补间9("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(640,704);
	this.instance_14._off = true;

	this.instance_15 = new lib.补间10("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,704.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},39).to({state:[{t:this.instance_15}]},11).to({state:[]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(39).to({_off:false},0).to({_off:true,x:0,y:704.7},11).wait(49));

	// img3
	this.instance_16 = new lib.补间7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(640,704);
	this.instance_16._off = true;

	this.instance_17 = new lib.补间8("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,704);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},27).to({state:[{t:this.instance_17}]},11).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(27).to({_off:false},0).to({_off:true,x:0},11).wait(61));

	// img2
	this.instance_18 = new lib.补间5("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(640,705);
	this.instance_18._off = true;

	this.instance_19 = new lib.补间6("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},15).to({state:[{t:this.instance_19}]},11).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off:false},0).to({_off:true,x:0},11).wait(73));

	// img1
	this.instance_20 = new lib.补间11("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(640.1,705.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({_off:false},0).to({x:0},11).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(346,636,589,648);
// library properties:
lib.properties = {
	width: 640,
	height: 1200,
	fps: 24,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/food/FoodSkin_atlas_.png", id:"FoodSkin_atlas_"}
	],
	preloads: []
};




})(foodLib = foodLib||{}, foodImages = foodImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var foodLib, foodImages, createjs, ss, AdobeAn;