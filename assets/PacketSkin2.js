(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"PacketSkin_atlas_", frames: [[189,907,43,42],[138,907,49,42],[324,876,49,42],[0,0,543,874],[0,902,136,29],[186,876,136,29],[0,876,184,24]]}
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



(lib.arrows = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.belt1 = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.belt2 = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.p_bg = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.text3 = function() {
	this.spriteSheet = ss["PacketSkin_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.arrows();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21,43,42);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.arrows();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21,43,42);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.arrows();
	this.instance.parent = this;
	this.instance.setTransform(-21.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21,43,42);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-92,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-12,184,24);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text3();
	this.instance.parent = this;
	this.instance.setTransform(-92,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-12,184,24);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-68,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-14.5,136,29);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text2();
	this.instance.parent = this;
	this.instance.setTransform(-68,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-14.5,136,29);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-68,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-14.5,136,29);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text1();
	this.instance.parent = this;
	this.instance.setTransform(-68,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-14.5,136,29);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.belt2();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.belt2();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.belt1();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.belt1();
	this.instance.parent = this;
	this.instance.setTransform(-24.5,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-21,49,42);


// stage content:
(lib.PacketSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.gotoAndPlay(66);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(3));

	// arrows
	this.instance = new lib.补间15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320.5,304);
	this.instance._off = true;

	this.instance_1 = new lib.补间16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(320.5,320);
	this.instance_1._off = true;

	this.instance_2 = new lib.补间17("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.5,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},65).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},9).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({_off:true,y:320},10).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},10).to({_off:true,y:304},9).wait(3));

	// text3
	this.instance_3 = new lib.补间13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,250.2,0.1,0.1,0,0,0,1,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.补间14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(320,250.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},51).to({state:[{t:this.instance_4}]},14).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({_off:true,regX:0,scaleX:1,scaleY:1,y:250.9},14).wait(22));

	// text2
	this.instance_5 = new lib.补间11("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,200.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间12("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(320,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},40).to({state:[{t:this.instance_6}]},14).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1},14).wait(33));

	// text1
	this.instance_7 = new lib.补间9("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,170.5,0.1,0.1,0,0,0,0.5,0.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间10("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(320,170.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},28).to({state:[{t:this.instance_8}]},14).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1},14).wait(45));

	// belt2
	this.instance_9 = new lib.补间7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(583.8,290,0.088,0.088);
	this.instance_9._off = true;

	this.instance_10 = new lib.补间8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(604.5,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},17).to({state:[{t:this.instance_10}]},15).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:604.5},15).wait(55));

	// belt1
	this.instance_11 = new lib.补间1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-49.5,290);
	this.instance_11._off = true;

	this.instance_12 = new lib.补间2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(28.5,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},15).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({_off:true,x:28.5},15).wait(69));

	// p_bg
	this.instance_13 = new lib.p_bg();
	this.instance_13.parent = this;
	this.instance_13.setTransform(46,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(366,625,543,874);
// library properties:
lib.properties = {
	width: 640,
	height: 1100,
	fps: 30,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/packet/PacketSkin_atlas_.png", id:"PacketSkin_atlas_"}
	],
	preloads: []
};




})(packetLib = packetLib||{}, packetImages = packetImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var packetLib, packetImages, createjs, ss, AdobeAn;