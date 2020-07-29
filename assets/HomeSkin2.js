(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HomeSkin_atlas_", frames: [[741,0,238,56],[266,104,308,60],[576,165,310,32],[266,229,640,4],[266,166,195,14],[266,182,16,14],[266,199,340,28],[576,135,444,28],[576,104,442,29],[608,199,93,16],[266,0,473,102],[0,0,264,288]]}
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



(lib.b_text = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Depuis1892 = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.LeLuxeRural = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.line = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.points = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.points2 = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.triangle = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.vins_t = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.vinus = function() {
	this.spriteSheet = ss["HomeSkin_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.补间21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("了解详情", "24px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-17.8,104,35.7);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.points();
	this.instance.parent = this;
	this.instance.setTransform(-97.5,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-7,195,14);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("了解详情", "24px 'Microsoft YaHei'");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(0,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-17.8,104,35.7);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.LeLuxeRural();
	this.instance.parent = this;
	this.instance.setTransform(-155,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-16,310,32);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Depuis1892();
	this.instance.parent = this;
	this.instance.setTransform(-154,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-30,308,60);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.triangle();
	this.instance.parent = this;
	this.instance.setTransform(-46.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,-8,93,16);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.vins_t();
	this.instance.parent = this;
	this.instance.setTransform(-236.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.5,-51,473,102);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-226,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-15,442,29);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-226.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.5,-14.5,444,28);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.vinus();
	this.instance.parent = this;
	this.instance.setTransform(-13.2,-14.4,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-14.4,26.5,28.9);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.b_text();
	this.instance.parent = this;
	this.instance.setTransform(-15.9,-3.7,0.134,0.134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-3.7,31.9,7.5);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-173.5,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.5,-14.5,340,28);


(lib.补间28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.points2();
	this.instance.parent = this;
	this.instance.setTransform(81.5,-7);

	this.instance_1 = new lib.补间20("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-7,195,14);


// stage content:
(lib.HomeSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_209 = function() {
		this.dispatchEvent('loadEnd')
	}
	this.frame_224 = function() {
		this.gotoAndPlay(211)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(209).call(this.frame_209).wait(15).call(this.frame_224).wait(1));

	// triangle
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(323.5,952.4);
	this.instance.alpha = 0.09;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(205).to({_off:false},0).to({y:972.8,alpha:1},5).to({y:986.6},7).to({y:972.8},7).wait(1));

	// 图层 3
	this.instance_1 = new lib.补间19("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.9,937.8);
	this.instance_1.alpha = 0.398;
	this.instance_1._off = true;

	this.instance_2 = new lib.补间21("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.9,937.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},205).to({state:[{t:this.instance_2}]},4).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(205).to({_off:false},0).to({_off:true,alpha:1},4).wait(16));

	// LINE
	this.instance_3 = new lib.line();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,937);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205).to({_off:false},0).wait(20));

	// points
	this.instance_4 = new lib.补间20("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.5,910.1);
	this.instance_4.alpha = 0.102;
	this.instance_4._off = true;

	this.instance_5 = new lib.points2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(222,903);

	this.instance_6 = new lib.补间28("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(319.5,910.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},123).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:222}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:258}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:293}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:329}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:365}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:401}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:222}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:258}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:293}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:329}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:365}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:401}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:222}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:258}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:293}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:329}}]},4).to({state:[{t:this.instance_4},{t:this.instance_5,p:{x:365}}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(123).to({_off:false},0).to({alpha:1},5).to({y:910},4).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).to({_off:true},4).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).to({y:924.8,alpha:0},6).wait(19));

	// text3
	this.instance_7 = new lib.补间8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(322.8,1222.9,0.5,0.5,0,0,0,0.1,0);
	this.instance_7.alpha = 0.398;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({_off:false},0).to({regY:0.1,scaleX:0.75,scaleY:0.75,x:319.6,y:899.4,alpha:0.801},7).to({regX:0,regY:0,scaleX:0.99,scaleY:0.99,x:320,y:840.6,alpha:1},14).wait(102));

	// text2
	this.instance_8 = new lib.补间6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(321.3,1226,0.5,0.5);
	this.instance_8.alpha = 0.398;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(85).to({_off:false},0).to({scaleX:0.75,scaleY:0.75,x:320.3,y:886.3,alpha:0.801},7).to({scaleX:0.99,scaleY:0.99,y:772.6,alpha:1},14).wait(119));

	// text1
	this.instance_9 = new lib.补间2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(320,1233,0.5,0.5,0,0,0,0.1,0);
	this.instance_9.alpha = 0.398;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({_off:false},0).to({regX:0,scaleX:0.75,scaleY:0.75,x:312.9,y:847.3,alpha:0.801},7).to({scaleX:0.98,scaleY:0.98,x:320,y:710.1,alpha:1},14).wait(136));

	// Le   Luxe  Rural
	this.instance_10 = new lib.补间15("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(321,473.3,0.1,0.1,0,0,0,0.5,0);
	this.instance_10.alpha = 0.102;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,y:648.2,alpha:1},13).wait(157));

	// Depuis 1892
	this.instance_11 = new lib.补间13("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(320,472.3,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_11.alpha = 0.102;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:573.7,alpha:1},13).wait(170));

	// vins _t
	this.instance_12 = new lib.补间9("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(319.8,468.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_12.alpha = 0.102;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.91,scaleY:0.91,y:466.4,alpha:1},13).wait(183));

	// vinus
	this.instance_13 = new lib.补间5("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(322.9,234.5,0.5,0.5,0,0,0,0.5,0.1);
	this.instance_13.alpha = 0.102;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(16).to({_off:false},0).to({regX:0.4,scaleX:8.52,scaleY:8.52,alpha:1},13).wait(196));

	// b_text
	this.instance_14 = new lib.补间3("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(319.9,48.8);
	this.instance_14.alpha = 0.102;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({regX:0.4,scaleX:7.56,scaleY:7.56,x:322.9,alpha:1},13).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 640,
	height: 1200,
	fps: 24,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/home/HomeSkin_atlas_.png", id:"HomeSkin_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;