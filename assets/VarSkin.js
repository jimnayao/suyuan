(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"VarInfoSkin_atlas_", frames: [[908,280,114,114],[776,519,115,114],[893,519,114,114],[0,0,640,591],[396,593,134,28],[926,0,89,75],[642,552,89,75],[933,396,89,75],[642,0,148,186],[0,593,129,50],[792,137,111,39],[776,417,155,100],[642,417,132,133],[792,0,132,135],[775,280,131,135],[642,280,131,135],[642,188,267,90],[131,593,263,23],[911,137,105,111]]}
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



(lib.小圈 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.小圈_1 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.小圈拷贝 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.b_bg = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.GrapeVarieties = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.grape1 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.grape2 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.grape3 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.IP = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.var1 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.var2 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.var3 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.var4 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.产品信息拷贝 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.维纳斯所精选的葡萄品种 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.黑葡萄拷贝 = function() {
	this.spriteSheet = ss["VarInfoSkin_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var4();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-67.5,131,135);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var4();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-67.5,131,135);


(lib.补间16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var3();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-67.5,131,135);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var3();
	this.instance.parent = this;
	this.instance.setTransform(-65.5,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-67.5,131,135);


(lib.补间14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var2();
	this.instance.parent = this;
	this.instance.setTransform(-66,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-67.5,132,135);


(lib.补间13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var2();
	this.instance.parent = this;
	this.instance.setTransform(-66,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-67.5,132,135);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var1();
	this.instance.parent = this;
	this.instance.setTransform(-66,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-66.5,132,133);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.var1();
	this.instance.parent = this;
	this.instance.setTransform(-66,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-66.5,132,133);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.产品信息拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-45,267,90);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.产品信息拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-133.5,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-45,267,90);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.黑葡萄拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-55.5,105,111);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.黑葡萄拷贝();
	this.instance.parent = this;
	this.instance.setTransform(-52.5,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-55.5,105,111);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-50,155,100);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t3();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-50,155,100);


(lib.补间4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-19.5,111,39);


(lib.补间3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t2();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-19.5,111,39);


(lib.补间2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-25,129,50);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.t1();
	this.instance.parent = this;
	this.instance.setTransform(-64.5,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-25,129,50);


// stage content:
(lib.VarInfoSkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(1));

	// var4
	this.instance = new lib.补间17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(552.5,826.5,0.5,0.5);
	this.instance._off = true;

	this.instance_1 = new lib.补间18("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(552.5,826.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},49).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},7).wait(1));

	// var3
	this.instance_2 = new lib.补间15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(397.5,826.5,0.5,0.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.补间16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(397.5,826.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},7).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},7).wait(7));

	// var2
	this.instance_4 = new lib.补间13("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(245,826.5,0.5,0.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.补间14("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(245,826.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},37).to({state:[{t:this.instance_5}]},7).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},7).wait(13));

	// var1
	this.instance_6 = new lib.补间11("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(91,825.5,0.5,0.5);
	this.instance_6._off = true;

	this.instance_7 = new lib.补间12("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(91,825.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_7}]},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},6).wait(19));

	// grape_t
	this.instance_8 = new lib.补间9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(319.5,598.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.补间10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(319.5,655);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},26).to({state:[{t:this.instance_9}]},7).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).to({_off:true,y:655},7).wait(24));

	// grape
	this.instance_10 = new lib.补间7("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(319.5,524.5,0.5,0.5);
	this.instance_10._off = true;

	this.instance_11 = new lib.补间8("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(319.5,524.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},20).to({state:[{t:this.instance_11}]},7).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},7).wait(30));

	// 图层 1
	this.instance_12 = new lib.b_bg();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1,542);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57));

	// t3
	this.instance_13 = new lib.补间5("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(545.5,371.8,1,1,-45);
	this.instance_13._off = true;

	this.instance_14 = new lib.补间6("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(524.5,376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},14).to({state:[{t:this.instance_14}]},8).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({_off:true,rotation:0,x:524.5,y:376},8).wait(35));

	// t2
	this.instance_15 = new lib.补间3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(249.8,304.7,1,1,-48.7,0,0,0,0.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.补间4("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(324.5,290.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},10).to({state:[{t:this.instance_16}]},8).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).to({_off:true,regY:0,rotation:0,x:324.5,y:290.5},8).wait(39));

	// t1
	this.instance_17 = new lib.补间1("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(24.5,400,1,1,52.8,0,0,0.1,-0.1);
	this.instance_17._off = true;

	this.instance_18 = new lib.补间2("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(124.5,401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_18}]},9).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).to({_off:true,regX:0,regY:0,rotation:0,x:124.5,y:401},9).wait(44));

	// 图层 2
	this.instance_19 = new lib.grape3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(478,312);

	this.instance_20 = new lib.grape2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(272,312);

	this.instance_21 = new lib.grape1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(74,312);

	this.instance_22 = new lib.小圈();
	this.instance_22.parent = this;
	this.instance_22.setTransform(467,294);

	this.instance_23 = new lib.小圈拷贝();
	this.instance_23.parent = this;
	this.instance_23.setTransform(265,295);

	this.instance_24 = new lib.小圈_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(63,294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},2).wait(55));

	// IP
	this.instance_25 = new lib.GrapeVarieties();
	this.instance_25.parent = this;
	this.instance_25.setTransform(29,154);

	this.instance_26 = new lib.维纳斯所精选的葡萄品种();
	this.instance_26.parent = this;
	this.instance_26.setTransform(25,122);

	this.instance_27 = new lib.IP();
	this.instance_27.parent = this;
	this.instance_27.setTransform(456,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]}).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321,603,640,1080);
// library properties:
lib.properties = {
	width: 640,
	height: 1100,
	fps: 24,
	color: "#454545",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/var/VarInfoSkin_atlas_.png", id:"VarInfoSkin_atlas_"}
	],
	preloads: []
};



})(varLib = varLib||{}, varImages = varImages||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var varLib, varImages, createjs, ss, AdobeAn;